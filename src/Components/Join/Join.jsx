
const Join = () => {
    return (
        <div className="md:max-w-5xl mx-auto mb-10">
            <div className="text-center">
                <h3 className="text-4xl md:text-6xl font-semibold mb-10">Are you want to join Our Social Events</h3>
            </div>
            <div className="flex justify-center gap-10 flex-wrap">
                <button className=" text-xl font-medium px-16 py-4 rounded-md text-white bg-teal-600 hover:bg-white hover:border-2 hover:text-teal-700 hover:border-teal-600">Learn More</button>
                <button className="text-xl font-medium px-16 py-4 rounded-md text-teal-700 border-2 border-teal-600 hover:bg-teal-600 hover:text-white">Reserve</button>
            </div>
        </div>
    );
};

export default Join;