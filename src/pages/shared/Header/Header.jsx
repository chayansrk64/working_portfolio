import { Link } from "react-router-dom";
// import Button from "../../../components/Button/Button";
import resume from '../../../assets/Resume_of_Chayan_Sarker.pdf'
import { FaDownload } from 'react-icons/fa';
// TODO: logo
const Header = () => {

    const navOptions = <>
    
     <Link className="me-4 text-white font-semibold text-base"><a>Home</a></Link>
     <Link className="me-4 text-white font-semibold text-base" to="https://drive.google.com/file/d/19vsLRS5c15Au_4qJ2QRl_N4BqFbtIJYY/view?usp=sharing"><a>Resume</a></Link>
     <Link className="me-4 text-white font-semibold text-base"><a>Projects</a></Link>

    </>

    return (
        <>
        <div className="navbar fixed z-10 bg-opacity-60  max-w-screen-xl mx-auto bg-base-300 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navOptions}
      </ul>
    </div>
    <Link to="/"><a className="btn btn-ghost normal-case text-xl">srk</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <div className=" bg-cyan-500 shadow-lg rounded-full text-white font-semibold shadow-cyan-500/50 px-4 py-2  "><a href={resume}>  <FaDownload className="inline text-2xl"></FaDownload> <span>Resume</span></a></div>
    {/* <Button button_text="Download CV"></Button> */}
  </div>
</div> 
        </>
    );


 


};

export default Header;