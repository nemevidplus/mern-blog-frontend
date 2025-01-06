import React from 'react';
import Footer from './Footer';
import Navbar from "./Navbar";

const About = () => {
    return (
        <div>
          
          <div className="container py-4 main">
          <Navbar />
          <div className="p-5 mb-4 bg-body-tertiary rounded-3 text-left component_aboutme">
              <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Rólam</h1>
                <p className="col-md-8 fs-4 ">
                  Blogolok
                </p>
                
               
              
            </div>
            
        </div>
        
          <Footer />
        </div>
        </div>
      )
}

export default About
