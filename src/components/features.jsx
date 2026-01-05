import { faCode, faLightbulb, faPeopleLine, faRocket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Features(){

    return(<>
        <div id="feature" className="sm:w-screen bg-emerald-700 text-white flex items-center flex-col">
     <h1 className="sm:text-6xl font-bold text-5xl mt-10">What We Offer</h1>
     <p className="sm:text-2xl sm:w-[700px] text-xl mt-6 w-[360px] text-center">Everything you need to level up your coding journey and connect with like-minded developers.</p>
     <div className="flex flex-wrap gap-10 justify-center  items-center mt-20">



     <div className="h-[300px] w-[350px] flex justify-center flex-col rounded-2xl border border-b-black pl-5 bg-gray-900 text-white">
       <FontAwesomeIcon icon={faCode} className="border border-amber-50 bg-gray-700 text-4xl rounded-[10px]"/>
        <h1 className="text-2xl">Hands-on Coding</h1>
        <p className="w-[290px] ">Weekly workshops and coding sessions to sharpen your programming skills across multiple languages and frameworks.</p>
     </div>
     <div className="h-[300px] w-[350px] flex justify-center flex-col rounded-2xl border border-b-black pl-5 bg-gray-900 text-white">
       <FontAwesomeIcon icon={faPeopleLine} className="border border-amber-50 bg-gray-700 text-4xl rounded-[10px]"/>
        <h1 className="text-2xl">Hands-on Coding</h1>
        <p className="w-[290px] ">Weekly workshops and coding sessions to sharpen your programming skills across multiple languages and frameworks.</p>
     </div>
     <div className="h-[300px] w-[350px] flex justify-center flex-col rounded-2xl border border-b-black pl-5 bg-gray-900 text-white">
       <FontAwesomeIcon icon={faLightbulb} className="border border-amber-50 bg-gray-700 text-4xl rounded-[10px]"/>
        <h1 className="text-2xl">Hands-on Coding</h1>
        <p className="w-[290px] ">Weekly workshops and coding sessions to sharpen your programming skills across multiple languages and frameworks.</p>
     </div>
     <div className="h-[300px] w-[350px] flex justify-center flex-col rounded-2xl border border-b-black pl-5 bg-gray-900 text-white">
       <FontAwesomeIcon icon={faRocket} className="border border-amber-50 bg-gray-700 text-4xl rounded-[10px]"/>
        <h1 className="text-2xl">Hands-on Coding</h1>
        <p className="w-[290px] ">Weekly workshops and coding sessions to sharpen your programming skills across multiple languages and frameworks.</p>
     </div>




     </div>
        </div>
            </>)
}
export default Features