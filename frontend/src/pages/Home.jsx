import FeedVideo from "./Components/FeedVideo";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <div className="flex flex-col">
            <div className="flex gap-5 ml-[20px] overflow-auto justify-center items-center">
                <div className=" hover:bg-red-600 cursor-pointer border border-gray-600 bg-gray-600 rounded-md p-[10px] text-center ">All</div>
                <div className="hover:bg-red-600  cursor-pointer border border-gray-600 bg-gray-600 rounded-md p-[10px] text-center ">Comedy</div>
                <div className="hover:bg-red-600  cursor-pointer border border-gray-600 bg-gray-600 rounded-md p-[10px] text-center ">Coding</div>
                <div className="hover:bg-red-600  cursor-pointer border border-gray-600 bg-gray-600 rounded-md p-[10px] text-center ">Music</div>
                <div className="hover:bg-red-600 cursor-pointer border border-gray-600 bg-gray-600 rounded-md p-[10px] text-center ">Educational</div>
                <div className="hover:bg-red-600 cursor-pointer border border-gray-600 bg-gray-600 rounded-md p-[10px] text-center ">Gaming</div>
                <div className="hover:bg-red-600 cursor-pointer border border-gray-600 bg-gray-600 rounded-md p-[10px] text-center ">Retro</div>
            </div>
            <div className="flex justify-center items-center flex-wrap">
                    <Link to="/video"><FeedVideo title={"the video of my life"} channel={"life stuff."} views={432} time={9}/></Link>
                    <Link to="/video"><FeedVideo title={"the video of my life"} channel={"life stuff."} views={432} time={9}/></Link>
                    <Link to="/video"><FeedVideo title={"the video of my life"} channel={"life stuff."} views={432} time={9}/></Link>
                    <Link to="/video"><FeedVideo title={"the video of my life"} channel={"life stuff."} views={432} time={9}/></Link>
                    <Link to="/video"><FeedVideo title={"the video of my life"} channel={"life stuff."} views={432} time={9}/></Link>
                    <Link to="/video"><FeedVideo title={"the video of my life"} channel={"life stuff."} views={432} time={9}/></Link>
                    <Link to="/video"><FeedVideo title={"the video of my life"} channel={"life stuff."} views={432} time={9}/></Link>
                    <Link to="/video"><FeedVideo title={"the video of my life"} channel={"life stuff."} views={432} time={9}/></Link>

            </div>
            </div>
        </>
    )
}

export default Home;