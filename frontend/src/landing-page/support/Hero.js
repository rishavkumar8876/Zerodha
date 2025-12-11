import React from 'react'
function Hero() {
    return (
        // 
        <div style={{ backgroundColor: "rgb(250, 250, 250)" ,paddingTop: "20px", paddingBottom: "20px"}}>
        <div className="container mt-3" >
            <div className="row align-items-center">

                <div className="col-6 ">
                    <h1>Support Portal</h1>
                </div>

                <div className="col-6 d-flex justify-content-end text-center">
                    <a
                        href="#"
                        className="btn btn-primary disabled"
                        role="button"
                        style={{ width: "20%", height: "2.5rem" }}
                    >
                        My tickets
                    </a>
                </div>
                <div class="input-group" style={{height:"4rem", marginTop:"2rem",marginBottom:"2rem"}}>
                    
                    <input type="text" class="form-control" placeholder="Eg. how do I activate F&O" aria-label="Username"  />
                    <input type="text" class="form-control d-none" placeholder="Hidden input" aria-label="Hidden input" aria-describedby="visible-addon" />
                </div>

            </div>
        </div>
       </div>

    );
}

export default Hero;