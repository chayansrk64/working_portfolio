 
const Button = ({button_text}) => {
    return (
        <div>
            <button className="bg-cyan-500 rounded-full p-3 text-white font-semibold shadow-lg shadow-cyan-500/50">{button_text}</button>
            {/* className="border-2 border-white px-4 py-2" */}
        </div>
    );
};

export default Button;