import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
// import ContactMe from "../ContactMe/ContactMe";
import Experiences from "../Experiencies/Experiences";
import Offering from "../Offering/Offering";
import Projects from "../Projects/Projects";

 
const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <AboutMe></AboutMe>
             <Experiences></Experiences>
             <Offering></Offering>
             <Projects></Projects>
             {/* <ContactMe></ContactMe> */}
        </div>
    );
};

export default Home;