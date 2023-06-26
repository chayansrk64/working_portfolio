import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Experiences.css'
const Experiences = () => {
    return (
        <div className="py-10">
             <SectionTitle
             heading="My Experiences"
             subHeading="I've adapted these skills and also every single day I'm going to explore new technologies"
             ></SectionTitle>
            <div className="experience_container_grid font-semibold text-white">
                <div className='border p-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500'>
                <h3 className='text-center border-b-4 text-2xl border-indigo-500 pb-3'>Front end</h3>
                <div className='ps-10 md:uppercase'>
                <p className='pt-4'>html</p>
                <p>css</p>
                <p>bootstrap</p>
                <p>tailwind css</p>
                <p>javascript</p>
                <p>react js</p>
                <p>next js</p>
                </div>
                </div>
                <div  className='border p-5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 '>
                 <h3 className='text-center border-b-4 text-2xl border-indigo-500 pb-3'>Back end</h3>
                <div className='ps-10 md:uppercase'>
                <p className='pt-4'>express js</p>
                <p>node js</p>
                <p>mongoDB</p>
                <p>JSON web token</p>
                <p>APIs</p>
                </div>
                 
                </div>
                <div  className='border p-5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 '>
                <h3 className='text-center border-b-4 text-2xl border-indigo-500 pb-3'>Tools</h3>
                <div className='ps-10 md:uppercase'>
                <p className='pt-4'>git</p>
                <p>github</p>
                <p>VScode</p>
                <p>AI tools</p>
                <p>Chrome dev tools</p>
                <p>Nodemailer</p>
                <p>Stripe</p>
                </div>
                 
                </div>
            </div>
        </div>
    );
};

export default Experiences;