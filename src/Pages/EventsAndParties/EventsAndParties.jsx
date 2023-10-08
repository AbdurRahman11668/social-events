const EventsAndParties = () => {
  return (
    <div className="my-10 px-10 lg:pl-32 mx-auto">
      <h3 className="text-center text-5xl md:text-6xl font-bold mb-10">
        Events + Parties
      </h3>
      <div className="flex justify-center flex-col relative mb-80 md:mb-40 lg:mb-0">
        <div className="">
          <img
            src="https://i.ibb.co/WFbLjGr/corporate-event.jpg"
            className="lg:w-[60%]"
            alt=""
          />
        </div>
        <div className="absolute bg-white w-4/5 lg:w-[55%] right-14 md:right-18 lg:right-0 top-2/3 lg:top-[15%] p-5 lg:p-20 rounded lg:mr-20">
          <p className="text-gray-500  mb-6">CORPORATE EVENTS AND BANQUETS</p>
          <h3 className="text-3xl md:text-4xl text-gray-700 font-semibold mb-3">
            Corporate Events
          </h3>
          <p className="text-gray-600 font-medium mb-10">
            A friendly happy hour, a company holiday party, or an evening of
            entertainment for VIP clients: The VIP Clubio is a unique event
            venue that brings your party to life. Lots of options, lots of
            variety, lots of help with planning. Our event planners make it easy
            for you and will walk you through every step. Interested in what we
            can offer for your event?
          </p>
          <button className=" border-2 font-semibold border-teal-600 text-teal-600 bg-none px-10 py-3">
            book now
          </button>
        </div>
      </div>

      <div className="flex justify-center flex-col relative lg:mt-20  mb-80 md:mb-40 lg:mb-0">
        <div className="lg:w-[60%]">
          <img
            src="https://i.ibb.co/518qxN4/birthday-event.jpg"
            className=""
            alt=""
          />
        </div>
        <div className="absolute bg-white w-4/5 lg:w-[55%] right-14 md:right-18 lg:right-0 top-2/3 lg:top-[15%] p-5 lg:p-20 rounded lg:mr-20">
          <p className="text-gray-500  mb-6">BIRTHDAY? WE’VE GOT YOU COVERED</p>
          <h3 className="text-3xl md:text-4xl text-gray-700 font-semibold mb-3">
            Birthday Parties
          </h3>
          <p className="text-gray-600 font-medium mb-10">
            If there’s one thing we know how to do at The VIP Clubio, it’s
            celebrate. Spend your birthday with us, and enjoy a night you’ll
            remember forever. Click on the location FAQs for details on birthday
            party reservations, or if you’re ready to book click on the “Book
            now” tab for your city of choice.
          </p>
          <button className=" border-2 font-semibold border-teal-600 text-teal-600 bg-none px-10 py-3">
            book now
          </button>
        </div>
      </div>

      <div className="flex justify-center flex-col relative lg:mt-20 mb-80 md:mb-40 lg:mb-0">
        <div className="lg:w-[60%]">
          <img
            src="https://i.ibb.co/PCFHFCY/bachelorette.jpg"
            className=""
            alt=""
          />
        </div>
        <div className="absolute bg-white w-4/5 lg:w-[55%] right-14 md:right-18 lg:right-0 top-2/3 lg:top-[15%] p-5 lg:p-20 rounded lg:mr-20">
          <p className="text-gray-500  mb-6">
            ENJOY THE NIGHT CLUB BEFORE WEDDING
          </p>
          <h3 className="text-3xl md:text-4xl text-gray-700 font-semibold mb-3">
            Bachelorette
          </h3>
          <p className="text-gray-600 font-medium mb-10">
            Something old, something new, something you’ve never experienced
            before: End your single days in style with a VIP table reservation.
            Click on the location FAQs for details on bachelorette party
            reservations, or if you’re ready to book click on the “Book now” tab
            for your city of choice.
          </p>
          <button className=" border-2 font-semibold border-teal-600 text-teal-600 bg-none px-10 py-3">
            book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsAndParties;
