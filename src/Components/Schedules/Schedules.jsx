import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Schedules = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleSubmit = () => {
    toast("You have successfully reserved your seats");
  };

  return (
    <div className="mb-10" id="schedules">
      <div className="grid justify-center">
        <h3 className="text-4xl md:text-5xl text-center font-bold text-teal-700 mb-10">
          Schedules
        </h3>
        <img
          src="https://i.ibb.co/h8mFv3M/line-light-purple.png"
          className="mb-10 px-20"
          alt=""
        />
      </div>
      <div className="tabs flex justify-center flex-col md:flex-row space-y-10 items-center">
        <div
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          <h3 className="text-xl py-4 px-5 bg-teal-600 text-white font-semibold rounded-lg md:mt-5">
            23 November
          </h3>
        </div>
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          <h3 className="mx-5 text-xl py-4 px-5 bg-teal-600 text-white font-semibold rounded-lg">
            24 November
          </h3>
        </div>
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          <h3 className="text-xl py-4 px-5 bg-teal-600 text-white font-semibold rounded-lg">
            25 November
          </h3>
        </div>
      </div>
      <div className="tab-content mt-20">
        {activeTab === 0 && (
          <div className="space-y-5">
            <div className="navbar w-full flex items-center border-2 rounded-md border-purple-300 md:max-w-5xl mx-auto px-10 py-5">
              <p className="text-xl font-semibold text-teal-600">8.00 AM</p>
              <img
                className="w-28 rounded-md mx-5"
                src="https://i.ibb.co/rFkXTZJ/1.jpg"
                alt=""
              />
              <h3 className="text-2xl font-semibold text-teal-600">
                Open for entry
              </h3>
              <h4 className="text-2xl font-semibold text-teal-800 navbar-end ml-12">
                Morning
              </h4>
            </div>
            <div className="navbar w-full flex items-center border-2 rounded-md border-purple-300 md:max-w-5xl mx-auto px-10 py-5">
              <p className="text-xl font-semibold text-teal-600">1.30 PM</p>
              <img
                className="w-28 rounded-md mx-7"
                src="https://i.ibb.co/tXCHCmy/2.jpg"
                alt=""
              />
              <h3 className="text-2xl font-semibold text-teal-600 max-w-28 m">
                Boom Boom Party
              </h3>
              <h4 className="text-2xl font-semibold text-teal-800 navbar-end">
                Afternoon
              </h4>
            </div>
            <div className="navbar w-full flex items-center border-2 rounded-md border-purple-300 md:max-w-5xl mx-auto px-10 py-5">
              <p className="text-xl font-semibold text-teal-600 max-w-20">
                7.30 PM
              </p>
              <img
                className="w-28 rounded-md mx-6"
                src="https://i.ibb.co/sytYvHK/4.jpg"
                alt=""
              />
              <h3 className="text-2xl font-semibold text-teal-600">
                Buffet Dinner
              </h3>
              <h4 className="text-2xl font-semibold text-teal-800 navbar-end ml-16">
                Night
              </h4>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className="space-y-5">
            <div className="navbar w-full flex items-center border-2 rounded-md border-purple-300 md:max-w-5xl mx-auto px-10 py-5">
              <p className="text-xl font-semibold text-teal-600">9.00 AM</p>
              <img
                className="w-28 rounded-md mx-5"
                src="https://i.ibb.co/sytYvHK/4.jpg"
                alt=""
              />
              <h3 className="text-2xl font-semibold text-teal-600">
                Open for entry
              </h3>
              <h4 className="text-2xl font-semibold text-teal-800 navbar-end ml-12">
                Morning
              </h4>
            </div>
            <div className="navbar w-full flex items-center border-2 rounded-md border-purple-300 md:max-w-5xl mx-auto px-10 py-5">
              <p className="text-xl font-semibold text-teal-600">12.30 PM</p>
              <img
                className="w-28 rounded-md mx-7"
                src="https://i.ibb.co/rFkXTZJ/1.jpghttps://i.ibb.co/tXCHCmy/2.jpg"
                alt=""
              />
              <h3 className="text-2xl font-semibold text-teal-600 max-w-28 m">
                Boom Boom Party
              </h3>
              <h4 className="text-2xl font-semibold text-teal-800 navbar-end">
                Afternoon
              </h4>
            </div>
            <div className="navbar w-full flex items-center border-2 rounded-md border-purple-300 md:max-w-5xl mx-auto px-10 py-5">
              <p className="text-xl font-semibold text-teal-600 max-w-20">
                8.30 PM
              </p>
              <img
                className="w-28 rounded-md mx-6"
                src="https://i.ibb.co/tXCHCmy/2.jpg"
                alt=""
              />
              <h3 className="text-2xl font-semibold text-teal-600">
                Buffet Dinner
              </h3>
              <h4 className="text-2xl font-semibold text-teal-800 navbar-end ml-16">
                Night
              </h4>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="space-y-5">
            <div className="navbar w-full flex items-center border-2 rounded-md border-purple-300 md:max-w-5xl mx-auto px-10 py-5">
              <p className="text-xl font-semibold text-teal-600">8.00 AM</p>
              <img
                className="w-28 rounded-md mx-5"
                src="https://i.ibb.co/rFkXTZJ/1.jpg"
                alt=""
              />
              <h3 className="text-2xl font-semibold text-teal-600">
                Open for entry
              </h3>
              <h4 className="text-2xl font-semibold text-teal-800 navbar-end ml-12">
                Morning
              </h4>
            </div>
            <div className="navbar w-full flex items-center border-2 rounded-md border-purple-300 md:max-w-5xl mx-auto px-10 py-5">
              <p className="text-xl font-semibold text-teal-600">1.30 PM</p>
              <img
                className="w-28 rounded-md mx-7"
                src="https://i.ibb.co/tXCHCmy/2.jpg"
                alt=""
              />
              <h3 className="text-2xl font-semibold text-teal-600 max-w-28 m">
                Boom Boom Party
              </h3>
              <h4 className="text-2xl font-semibold text-teal-800 navbar-end">
                Afternoon
              </h4>
            </div>
            <div className="navbar w-full flex items-center border-2 rounded-md border-purple-300 md:max-w-5xl mx-auto px-10 py-5">
              <p className="text-xl font-semibold text-teal-600 max-w-20">
                7.30 PM
              </p>
              <img
                className="w-28 rounded-md mx-6"
                src="https://i.ibb.co/sytYvHK/4.jpg"
                alt=""
              />
              <h3 className="text-2xl font-semibold text-teal-600">
                Buffet Dinner
              </h3>
              <h4 className="text-2xl font-semibold text-teal-800 navbar-end ml-16">
                Night
              </h4>
            </div>
          </div>
        )}
        {/* Add more tab content sections as needed */}
      </div>
      <div className=" grid justify-center mt-10 mb-20">
        <button
          onClick={handleSubmit}
          className="px-8 py-4 rounded-md text-white bg-teal-600 hover:bg-teal-800"
        >
          Reserve Seat Now
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Schedules;
