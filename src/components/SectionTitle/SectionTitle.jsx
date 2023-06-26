 
const SectionTitle = ({ heading, subHeading}) => {
    return (
            <div className="  w-1/2  text-center mx-auto my-10">
            
            <h3 className="  py-3 uppercase text-3xl font-semibold tracking-widest"> {heading} </h3>
            <p className="text-[#777777] text-lg mb-3">{subHeading}</p>
        </div> 
        
    );
};

export default SectionTitle;