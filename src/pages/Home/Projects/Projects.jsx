import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Projects.css'
import best_chef_banner from '../../../assets/best_chef_banner.png'

const Projects = () => {
    return (
        <div className='py-16'>
             <SectionTitle
             heading="My Projects"
             subHeading="Here are few project that I've done"
             ></SectionTitle>


        <div className='projects_gird_container '>

        <div className="card card-compact   bg-base-100 shadow-xl">
        <figure><img src={best_chef_banner} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Best Chef || A website of Best Chefs </h2>
            <p>This website is about best Chefs in Italy and some best foods are represented in this website throughout the recipes </p>
            <p> Technologies used in this project: </p>
             <p className='font-semibold'>html | react bootstrap | javascript | react js | firebase and so on. </p>
            <div className='font-semibold'>
            <a className='text-blue-600 visited:text-purple-600' href="https://best-chef-bf016.web.app/">Live Link</a>  ||  <a className='text-blue-600 visited:text-purple-600'  href="https://github.com/chayansrk64/Assignment-10-client">client repository</a> ||
              <a className='text-blue-600 visited:text-purple-600' href="https://github.com/chayansrk64/Assingment-10-server">server repository</a>
            </div>
            
        </div>
        </div>

        <div className="card card-compact   bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


<div className="card card-compact   bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


        </div>


 
        </div>
    );
};

export default Projects;