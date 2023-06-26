import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaInternetExplorer } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa';
import { FaUserLock } from 'react-icons/fa';

import './Offering.css'
const Offering = () => {
    return (
        <div className="bg-[#F9F9FF] py-10">
            <SectionTitle 
            heading="OFFERINGS TO MY CLIENTS"
            subHeading="Here I'm offering experiencied technologies that will make your productivity higher!"
            ></SectionTitle>
            <div className="offering_section_grid">
            <div className="p-8 offerring_hover shadow-lg shadow-indigo-500/40 rounded-xl bg-white ">
                <div className="text-7xl py-5">  <FaInternetExplorer></FaInternetExplorer> </div>
                <h3 className="text-2xl font-semibold py-4">Web Development Services</h3>
                <p className="text-[#777777] text-lg pb-4">I offer top-notch web development services tailored to meet your unique needs. My experienced  of web develop excels in creating dynamic and responsive websites and web applications that provide seamless user experiences. </p>
            </div>
            <div className="p-8 shadow-lg offerring_hover shadow-indigo-500/40 rounded-xl bg-white ">
            <div className="text-7xl py-5">  <FaAngellist></FaAngellist> </div>
                <h3 className="text-2xl font-semibold py-4">Web Design Solutions</h3>
                <p className="text-[#777777] text-lg pb-4">My web design solutions are crafted to captivate your audience and leave a lasting impression. With an eye for aesthetics and a focus on user-centered design principles, I will create visually stunning and intuitive websites that reflect your brands identity.</p>
            </div>
            <div className="p-8 shadow-lg offerring_hover shadow-indigo-500/40 rounded-xl bg-white ">
            <div className="text-7xl py-5">  <FaUserLock></FaUserLock> </div>
                <h3 className="text-2xl font-semibold py-4">Web Security Services</h3>
                <p className="text-[#777777] text-lg pb-4">Safeguarding your online presence is of utmost importance, and that is where my web security services come in. I prioritize the protection of your website and user data from potential threats and vulnerabilities. </p>
            </div>
            </div>
        </div>
    );
};

export default Offering;