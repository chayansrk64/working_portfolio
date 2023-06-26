 
const SectionTitle = ({ heading}) => {
    return (
            <div className="md:w-3/12 w-1/2  text-center mx-auto my-10">
            
            <h3 className=" border-y-4 border-indigo-500/75 py-3 uppercase text-3xl"> {heading} </h3>
        </div> 
        
    );
};

export default SectionTitle;