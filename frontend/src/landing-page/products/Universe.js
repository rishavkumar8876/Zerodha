import React from 'react'

function Universe() {
    return (
        <div className="container mt-5 p-5 text-center">
            <div className="row ">
                <h3 >The Zerodha Universe</h3>
                <p className="text-muted p-3">Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 mb-2 p-4">
                    <img src="media/images/zerodhaFundhouse.png" style={{ width: "40%" }} />
                    <p className="mt-4 text-small text-muted">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>

                <div className="col-4 mb-2 p-4">
                    <img src="media/images/sensibullLogo.svg" style={{ width: "40%" }} />
                    <p className="mt-4 text-small text-muted">Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>

                <div className="col-4  p-4">
                    <img src="media/images/goldenpiLogo.png" style={{ width: "40%" }} />
                    <p className="mt-4 text-small text-muted">Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>

                </div>

                <div className="col-4  p-4">
                    <img src="media/images/streakLogo.png" style={{ width: "40%" }} />
                    <p className="mt-4 text-small text-muted">Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>

                <div className="col-4  p-4">
                    <img src="media/images/smallcaseLogo.png" style={{ width: "40%" }} />
                    <p className="mt-4 text-small text-muted">Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>

                <div className="col-4 p-4">
                    <img src="media/images/dittoLogo.png" style={{ width: "40%" }} />
                    <p className="mt-4 text-muted">Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                    </p>
                </div>
            </div>
            <button className="btn btn-primary fs-5 mb-5 mt-3" style={{ width: "20%", margin: "0 auto" }}>Sign up for free</button>
        </div>
    );
}

export default Universe;