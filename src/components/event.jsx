import {
  faCalendar,
  faLocation,
  faLocationDot,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Event() {
  return (
    <>
      <div
        id="event"
        className=" sm:h-screen sm:w-screen sm:w-screen bg-blue-300 flex items-center flex-col pb-30"
      >
        <h1 className="sm:text-6xl font-bold text-5xl mb-10 mt-10">Join Our Events</h1>
        <p className="sm:text-3xl sm:w-[700px] text-2xl w-[360px] text-center ">
          Never miss an opportunity to learn, network, and have fun with fellow
          coders.
        </p>

        <div className="flex flex-wrap gap-10 justify-center  items-center mt-20">
          <div className="h-[300px] w-[350px] flex justify-center flex-col rounded-2xl border border-b-blue-700 pl-5 bg-gray-900 text-white">
            <h1 className="text-2xl">Web Dev Workshop</h1>
            <p className="w-[290px] ">
              Learn modern React patterns and best practices.
            </p>
            <span>
              <p>
                <FontAwesomeIcon icon={faCalendar} /> Jan 15, 2025
              </p>
              <p>
                <FontAwesomeIcon icon={faStopwatch} />
                6:00 PM
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} />
                Room 101
              </p>
            </span>
            <br />
            <br />
            <button className="border border-amber-50 w-[300px] h-[30px] rounded-[10px]">
              register
            </button>
          </div>

          <div className="h-[300px] w-[350px] flex justify-center flex-col rounded-2xl border border-b-blue-700 pl-5 bg-gray-900 text-white">
            <h1 className="text-2xl">Web Dev Workshop</h1>
            <p className="w-[290px] ">
              Learn modern React patterns and best practices.
            </p>
            <span>
              <p>
                <FontAwesomeIcon icon={faCalendar} /> Jan 15, 2025
              </p>
              <p>
                <FontAwesomeIcon icon={faStopwatch} />
                6:00 PM
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} />
                Room 101
              </p>
            </span>
            <br />
            <br />
            <button className="border border-amber-50 w-[300px] h-[30px] rounded-[10px]">
              register
            </button>
          </div>

          <div className="h-[300px] w-[350px] flex justify-center flex-col rounded-2xl border border-b-blue-700 pl-5 bg-gray-900 text-white">
            <h1 className="text-2xl">Web Dev Workshop</h1>
            <p className="w-[290px] ">
              Learn modern React patterns and best practices.
            </p>
            <span>
              <p>
                <FontAwesomeIcon icon={faCalendar} /> Jan 15, 2025
              </p>
              <p>
                <FontAwesomeIcon icon={faStopwatch} />
                6:00 PM
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} />
                Room 101
              </p>
            </span>
            <br />
            <br />
            <button className="border border-amber-50 w-[300px] h-[30px] rounded-[10px]">
              register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Event;
