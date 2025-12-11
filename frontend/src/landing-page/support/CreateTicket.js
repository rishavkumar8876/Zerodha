import React from 'react'

function CreateTicket() {
    return (
        <div className="container mt-5">
            <div className="row p-5 mb-5 ">
                <h3>
                    To create a ticket, select a relevant topic
                </h3>
                <div className="col-4 mt-5" >
                    <h5 className="mb-4">
                        <i class="fa-solid fa-circle-plus"></i> Account Opening
                    </h5>
                    <ul style={{ lineHeight: "3" }} >
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Resident individual</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Minor</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Non Resident Indian (NRI)</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Company, Partnership, HUF and LLP</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Glossary</a>
                        </li>
                    </ul>
                </div>
                <div className="col-4 mt-5">
                    <h5 className="mb-4">
                        <i class="fa-regular fa-circle-user"></i>  Your Zerodha Account
                    </h5>
                    <ul style={{ lineHeight: "3" }} >
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Your Profile</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Account modification</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>
                            Client Master Report (CMR)</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Nomination</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Transfer and conversion of securities</a>
                        </li>
                    </ul>
                </div>
                <div className="col-4 mt-5">
                    <h5 className="mb-4">
                        <i class="fa-solid fa-circle-arrow-left"></i> Kite
                    </h5>
                    <ul style={{ lineHeight: "3" }} >
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>IPO</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>MinorTrading FAQs</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Margin Trading Facility (MTF) and Margins</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Charts and orders</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>General</a>
                        </li>
                    </ul>
                </div>
                <div className="col-4 mt-5">
                    <h5 className="mb-4">
                        <i class="fa-solid fa-indian-rupee-sign"></i> Funds
                    </h5>
                    <ul style={{ lineHeight: "3" }} >
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Add money</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Withdraw money</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Add bank accounts</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>eMandates</a>
                        </li>
                    </ul>
                </div>
                <div className="col-4 mt-5">
                    <h5 className="mb-4">
                        <i class="fa-solid fa-magnifying-glass"></i> Console
                    </h5>
                    <ul style={{ lineHeight: "3" }} >
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Portfolio</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Corporate actions</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Funds statement</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Reports</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Profile</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Segments</a>
                        </li>
                    </ul>
                </div>
                <div className="col-4 mt-5">
                    <h5 className="mb-4">
                        <i class="fa-solid fa-coins"></i> Coin
                    </h5>
                    <ul style={{ lineHeight: "3" }} >
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Mutual funds</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>National Pension Scheme (NPS)</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Features on Coin</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>Payments and Orders</a>
                        </li>
                        <li>
                            <a href="" style={{ textDecoration: "none" }}>General</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;