import React from 'react';
import profilePicture from "../../../static/assets/images/bio/IMG_0564.jpg";

export default  function() {
        return (
            <div className="content-page-wrapper">
              <div 
                className="left-column" 
                style={{
                  background: "url(" + profilePicture + ") no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />

              <div className="right-column">
              <h3>Born and raised in California (and now living in Las Vegas), I am a firm believer that you cannot succeed without hard work and a learning mentality.</h3>

               <p>This shines in my work — whether it’s making sure I write code with its future maintainers in mind, or structuring my user-facing architecture with accessibility at the forefront.

                I am highly adaptable and driven by learning. If there is a problem, I seek ways to fix it. Whether it takes reading a book or picking up a lesson in a framework I don’t know, I’ve grown to embrace the challenges that development can bring.</p>
            </div>
            </div>
        );
    }