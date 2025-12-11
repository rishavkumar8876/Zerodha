import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

   useEffect(() => {
    axios
      .get("https://zerodha-production-0ddd.up.railway.app/allOrders", {
        withCredentials: true,  // 🔥 REQUIRED FOR AUTH
      })
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }, []);
  // If no orders placed
  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  // If orders exist → show table
  return (
    <div className="orders">
       <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
        
          <tr>
            <th>Stock</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
    
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>{order.price}</td>
              <td style={{ color: order.mode === "BUY" ? "green" : "red" }}>
                {order.mode}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Orders;
