import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Projects.css'
import best_chef_banner from '../../../assets/best_chef_banner.png'
import toy_kid_banner from '../../../assets/toy_kid_banner.png'
import next_photograph_banner from '../../../assets/next_photograph_banner.png'

const Projects = () => {
    return (
        <div className='py-16'>
             <SectionTitle
             heading="My Projects"
             subHeading="Here are few project that I've done"
             ></SectionTitle>


        <div className='projects_gird_container '>

        {/* project one */}

        <div className="card card-compact   bg-base-100 shadow-xl">
        <figure><img src={best_chef_banner} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Best Chef || A website of Best Chefs </h2>
            <p>This website is about best Chefs in Italy and some best foods are represented in this website throughout the recipes </p>
            <p className='font-semibold'> Technologies used in this project: </p>
             <p className='font-semibold'>html | react bootstrap | javascript | react js | firebase and so on. </p>
            <div className='font-semibold'>
            <a className='text-blue-600 visited:text-purple-600' href="https://best-chef-bf016.web.app/">Live Link</a>  ||
              <a className='text-blue-600 visited:text-purple-600'  href="https://github.com/chayansrk64/Assignment-10-client">client repository</a> ||
              <a className='text-blue-600 visited:text-purple-600' href="https://github.com/chayansrk64/Assingment-10-server">server repository</a>
            </div>
            
        </div>
        </div>
 {/* project two */}

        <div className="card card-compact   bg-base-100 shadow-xl">
        <figure><img src={toy_kid_banner} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">PlayKid || A website of kids playing cars </h2>
            <p>This website represent the toys including cars, bus, truck etc. There are different categoris toy cars. </p>
            <p className='font-semibold'> Technologies used in this project: </p>
             <p className='font-semibold'>html | react bootstrap | javascript | react js | firebase || authentication and so on </p>
            <div className='font-semibold'>
            <a className='text-blue-600 visited:text-purple-600' href="https://toykid-a8cb3.web.app/">Live Link</a> 
             ||  <a className='text-blue-600 visited:text-purple-600'  href="https://github.com/chayansrk64/assignment-11-client">client repository</a> ||
              <a className='text-blue-600 visited:text-purple-600' href="https://github.com/chayansrk64/assignment-11-server">server repository</a>
            </div>
            
        </div>
        </div>

        {/* project three */}

        <div className="card card-compact   bg-base-100 shadow-xl">
        <figure><img src={next_photograph_banner} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Next Photograph || A website of photography campaign school </h2>
            <p>This website is about a school where students can learn about photography. </p>
            <p className='font-semibold'> Technologies used in this project: </p>
             <p className='font-semibold'>Firebase |
        Tanstack Query |
            Axios |
        React-hook-form |
            Swiper </p>
            <div className='font-semibold'>
            <a className='text-blue-600 visited:text-purple-600' href="https://photograph-535b1.web.app/">Live Link</a>  || 
              <a className='text-blue-600 visited:text-purple-600'  href="https://github.com/chayansrk64/Assignment-12-client-side">client repository</a> ||
              <a className='text-blue-600 visited:text-purple-600' href="https://github.com/chayansrk64/Assignment-12-server">server repository</a>
            </div>
            
        </div>
        </div>


        </div>


 
        </div>
    );
};

export default Projects;