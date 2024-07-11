import React from 'react';
import './footer.css';
import fb from './assets/facebook.jpg';
import inst from './assets/instagram.jpg';
import twitter from './assets/twitter.jpg';



const Footer=()=>{
    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className="sb_footer-links">
                   <div className='sb_footer-links-div'>
                    <h4>For Business</h4>
                    <a href="/employer">
                    <p>employer</p>
                    </a>
                    <a href="/healthplan">
                    <p>healthplan</p>
                    </a>
                    <a href="/individual">
                    <p>individual</p>
                    </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Resources</h4>
                    <a href="/resource">
                    <p>Resource center</p>
                    </a>
                    <a href="/">
                    <p>testimonials</p>
                    </a>
                    <a href="/individual">
                    <p>STV</p>
                    </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>partners</h4>
                        <a href="/employer">
                        <p>swing tech</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>company</h4>
                        <a href="/about">
                        <p>about</p>
                        </a>
                        <a href="/press">
                        <p>press</p>
                        </a>
                        <a href="/career">
                        <p>career</p>
                        </a>
                        <a href="/contact">
                        <p>contact</p>
                        </a>
                     </div>
                     <div className="sb_footer-links_div">
                        <h4>Coming soon on</h4> 
                           <div className="socialmedia">
                            <p><img src={fb} alt=""/></p> 
                            <p><img src={inst} alt=""/></p> 
                            <p><img src={twitter} alt=""/></p> 
                    </div>
                  </div>
              </div>

              <hr></hr>

<div className="sb_footer-below"> 
    <div className="sb_footer-copyright">
     <p>
       @(new Date().getFullYear()) Codeinn. All right reserved.
     </p>
    </div>
    <div className="sb_footer-below-links"> 
        <a href="/terms"></a>
    </div>

</div>              
            </div>
        </div>
    )
    }
    export default Footer;
