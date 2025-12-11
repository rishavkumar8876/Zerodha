require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./Routes/AuthRoute");
const cookieParser = require("cookie-parser");
const { requireAuth } = require("./Middlewares/AuthMiddleware");

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());

// ---------------------
// CORS CONFIG (FINAL)
// ---------------------

const allowedOrigins = [
  "https://zerodha-wuwp.vercel.app",   // FRONTEND (login/signup)
  "https://zerodha-gold.vercel.app",  // DASHBOARD
  "http://localhost:3000",            // local frontend
  "http://localhost:3001"             // local dashboard
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Allow OPTIONS preflight requests
app.options("*", cors());

// ---------------------
// Auth Routes
// ---------------------
app.use("/api/auth", authRoute);

// ---------------------
// MongoDB Connection
// ---------------------
const PORT = process.env.PORT || 3030;
const uri = process.env.MONGO_URL;

mongoose
  .connect(uri)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

// ---------------------
// Import Models
// ---------------------
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

// ---------------------
// Protected Routes
// ---------------------
app.get("/allHoldings", requireAuth, async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", requireAuth, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", requireAuth, async (req, res) => {
  const orders = await OrdersModel.find({});
  res.json(orders);
});

app.post("/newOrder", requireAuth, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (mode === "BUY") {
      let stock = await HoldingsModel.findOne({ name });

      if (!stock) {
        await HoldingsModel.create({ name, qty, avg: price });
      } else {
        let totalCost = stock.qty * stock.avg + qty * price;
        let newQty = stock.qty + qty;

        stock.avg = Number((totalCost / newQty).toFixed(2));
        stock.qty = newQty;

        await stock.save();
      }
    }

    if (mode === "SELL") {
      let stock = await HoldingsModel.findOne({ name });

      if (!stock) {
        return res.status(400).json({ success: false, message: "You do not own this stock!" });
      }

      if (stock.qty < qty) {
        return res.status(400).json({
          success: false,
          message: `Not enough quantity to sell. Available: ${stock.qty}`,
        });
      }

      stock.qty -= qty;

      if (stock.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await stock.save();
      }
    }

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    res.json({ success: true, message: "Order processed successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Protected test route
app.get("/protected", requireAuth, (req, res) => {
  res.send("You are allowed!");
});

// ---------------------
// Logout Route (FIXED)
// ---------------------
app.get("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  res.json({ message: "Logged out successfully" });
});

// ---------------------
// Start Server
// ---------------------
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
