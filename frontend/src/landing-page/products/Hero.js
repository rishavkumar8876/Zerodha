import React from 'react'
function Hero() {
    return (
        <div className="container mt-5 mb-5 p-5">
            <div className="row text-center">
                <h3>Zerodha Products</h3>
                <h5 className="text-muted p-2">Sleek, modern, and intuitive trading platforms</h5>
                <p className="text-muted">Check out our <a href="" style={{ textDecoration: "none" }}>
                    investment offerings{" "}
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a></p>
            </div>
        </div>
    );
}

export default Hero;