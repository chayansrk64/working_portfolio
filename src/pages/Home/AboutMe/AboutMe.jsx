 
// import Button from '../../../components/Button/Button';
import './AboutMe.css'
import about_me_img from '../../../assets/profile_pic.jpg'
import resume from '../../../assets/Resume_of_Chayan_Sarker.pdf'

const AboutMe = () => {

    // const handleDownload = () => {
    //     const link = document.createElement('a');
    //     link.href = resume;
    //     link.download = 'Resume_of_Chayan_Sarker.pdf';
    //     link.click();
    // }


    return (
        <div className="pt-80 custom_padding bg-[#F9F9FF] text-white">
           
           <div className="about_me_container bg-gradient-to-r relative from-blue-500 to-cyan-500 py-10">
                <div className="mx-auto">
                    {/* <Button button_text="Download Resume" ></Button> */}
                    {/* <a download="" href={resume}>Download Resume</a> */}
                    {/* <button onClick={handleDownload}>
                        download
                    </button> */}
                    
                    <button> <a download="" href={resume}>Download Resume</a></button>
                </div>
                <div>
                     <div>
                        <h3 className='  text-2xl text-center pb-10 font-bold'>About Me</h3>
                        <div className='uppercase'><p>junior front-end developer</p></div>
                        <div><h2 className='uppercase text-3xl py-4 font-bold'>Chayan sarker</h2></div>
                        <p>As a Front-end developer I always try to demonstrate expertise in collaborating with teams to deliver exceptional
user experiences with my skills, <span className='font-bold'>React js, Node js, Express js, mongoDB, Git & Github, Api, Debugging ,</span> and other technologies.</p>
                     </div>
                </div>
                <div className=''>
                 <img className="h-[200px] w-[200px] rounded-full" src={about_me_img} alt="image" />
                </div>
           </div>
        </div>
    );
};

export default AboutMe;