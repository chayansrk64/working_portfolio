import './Banner.css'
import profile_pic from '../../../assets/profile_pic.jpg';
import moment from 'moment';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

 
const Banner = () => {
    return (
       
            <div className="bg-gradient-to-r relative from-cyan-500 to-blue-500 h-[600px] w-full">


<div className='absolute mt-60 shadow-lg shadow-indigo-500/50 bg-white custom_align rounded-xl'>
   <div className='banner_grid'>
   <Fade direction='left'>
   <div className=' m-8    '>
        <img className='h-full rounded-xl ' src={profile_pic} alt="image" />
    </div>
   </Fade>
    <Fade direction='right'>
    <div className='p-10'>
        <p className='uppercase'>Hi There! I am</p> <br />
        <h1 className='text-6xl uppercase font-bold text-[#222222] mb-3'>Chayan Sarker</h1>
        <h3 className='text-2xl uppercase text-[#222222] mb-3'>junor front-end developer</h3>
        <p className='text-[#777777] text-lg mb-3'>
            As a junior front-end developer I am adapting new technologies day by day, and trying to implemented them
            in my projects.
        </p>
        <p className='text-[#777777] text-lg flex items-center gap-4 mb-2'>  <span className='text-2xl text-[#766dff]'><FaRegCalendarAlt /></span>  {moment().format("MMM Do YY")}</p>
        <p className='text-[#777777] text-lg flex items-center gap-4 mb-2'>  <span className='text-2xl text-[#766dff]'><FaPhone /></span>  +8801621-269500</p>
        <p className='text-[#777777] text-lg flex items-center gap-4 mb-2'>  <span className='text-2xl text-[#766dff]'><FaMailBulk /></span  > <a className='text-blue-600 underline' href="mailto:chayansrk64@gmail.com">chayansrk64@gmail.com</a> </p>
        <p className='text-[#777777] text-lg flex items-center gap-4 mb-2'>  <span className='text-2xl text-[#766dff]'><FaHome /></span> Kishoregonj, Bangladesh</p>
        <div className='flex mt-8 gap-4 '>
           <span className='bg-[#e8e8e8] p-2 text-2xl rounded-lg hover:bg-gradient-to-r from-cyan-500 to-blue-500'> <Link to="https://www.linkedin.com/in/chayansrk64/"><FaLinkedin /></Link> </span>
           <span className='bg-[#e8e8e8] p-2 text-2xl rounded-lg hover:bg-gradient-to-r from-cyan-500 to-blue-500'> <Link to="https://www.facebook.com/chayansrk64/"><FaFacebook /></Link> </span>
           <span className='bg-[#e8e8e8] p-2 text-2xl rounded-lg hover:bg-gradient-to-r from-cyan-500 to-blue-500 '> <Link to="https://web.whatsapp.com/"><FaWhatsappSquare /></Link> </span>
        </div>
    </div>
    </Fade>

   </div>
</div>


</div>
        
    );
};

export default Banner;