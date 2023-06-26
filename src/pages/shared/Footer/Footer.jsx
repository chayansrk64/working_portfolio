import { Link } from "react-router-dom";
 
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import './Footer.css'
import { Fade } from "react-awesome-reveal";
 
const Footer = () => {
    return (
     <Fade direction="top">
          <footer>
         <div className="footer p-10 py-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white ">
  <div>
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"   className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p>Chayan<br/>Providing reliable tech since 2022</p>
   <div className="flex">
   <span className='bg-[#e8e8e8] mr-3 p-2 text-2xl rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500'> <Link to="https://www.linkedin.com/in/chayansrk64/"><FaLinkedin /></Link> </span>
<span className='bg-[#e8e8e8] mr-3 p-2 text-2xl rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500'> <Link to="https://www.facebook.com/chayansrk64/"><FaFacebook /></Link> </span>
<span className='bg-[#e8e8e8] p-2 text-2xl rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500 '> <Link to="https://web.whatsapp.com/"><FaWhatsappSquare /></Link> </span>
   </div>
   <button className="flex items-center mt-2 text-xl py-2 px-4 border-2 btn_hover">
    <a className="me-3" href="mailto:chayansrk64@gmail.com">Contact Me</a>
        <span className="hidden "> <FaArrowRight></FaArrowRight></span>
   </button>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Web Development</a> 
    <a className="link link-hover">Web Design</a> 
    <a className="link link-hover">Marketing</a> 
    
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
   
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
  
    </div>
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">
        <hr />
        <p className="text-sm text-center py-5">Copyright © 2023 - All right reserved by Chayan</p>
    </div>
       </footer>
     </Fade>
    );
};

export default Footer;


