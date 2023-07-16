import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Fade } from 'react-awesome-reveal';

 

const ContactMe = () => {

 
    return (
        <div className="mb-16">
            <SectionTitle heading="Get in Touch"></SectionTitle>
            <Fade direction="right">
            <div className="grid__container grid grid-cols-1 md:grid-cols-2 gap-20">
               
               <div className="left__container  ">

                <div className="flex flex-col items-center justify-center mb-10 h-full text-center shadow-md">
                <div  >
                    <p>Email: chayansrk64@gmail.com</p>
                    <p>Phone: +88 01621 269 500</p>
                    <address>
                        <p>Kishoregonj, Dhaka, Bangladesh</p>
                    </address>
                </div>

                <div className="flex  items-center justify-center mt-5">

                    <span className='bg-[#e8e8e8] mr-3 p-2 text-2xl rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500'> <Link to="https://www.linkedin.com/in/chayansrk64/"><FaLinkedin /></Link> </span>
                    <span className='bg-[#e8e8e8] mr-3 p-2 text-2xl rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500'> <Link to="https://www.facebook.com/chayansrk64/"><FaFacebook /></Link> </span>
                    <span className='bg-[#e8e8e8] mr-3 p-2 text-2xl rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500 '> <Link to="https://web.whatsapp.com/"><FaWhatsappSquare /></Link> </span>
                    <span className='bg-[#e8e8e8] p-2 text-2xl rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500 '> <Link to="https://mail.google.com/"><FaMailBulk /></Link> </span>
                </div>

                </div>
                </div>
           
                <div className="right__container">
                    <form action="https://formsubmit.co/e525ea7d31425cbb7b772ce351d802b0" method="POST">
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" name="name" id="" className="border p-2 w-full" /> <br />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" className="border p-2 w-full"  />
                        <label htmlFor="message">Message</label> <br />
                        <textarea id="textarea" name="textarea" rows="4" cols="50"  className="w-full border-2"></textarea> <br />
                        <input type="submit" value="Send" className="btn btn-primary w-full " />
                    </form>
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default ContactMe;