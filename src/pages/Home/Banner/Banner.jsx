import './Banner.css'
const Banner = () => {
    return (
        <div className="bg-gradient-to-r relative from-cyan-500 to-blue-500 h-[600px] w-full">
            <div className='absolute mt-60 bg-white custom_align border-2'>
               <div className='banner_grid'>
                <div className='border-2 border-red-300 m-5'>
                    <img src="https://preview.colorlib.com/theme/meetme/img/personal.jpg.webp" alt="image" />
                </div>
                <div>
                    text
                </div>
               </div>
            </div>
        </div>
    );
};

export default Banner;