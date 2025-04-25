import hamburger from "./UI/hamburger.png";
import search from "./UI/search.png";
import ytlogo from "./UI/youtubeLogo.png";
import user from "./UI/user.png";
import { Link } from "react-router-dom";


function Header(){
    return(
        <>
        <header className="flex justify-center items-center m-[10px] text-white">
            <div className="flex justify-start items-center w-[15%]">
                <div className="w-[40px] min-w-[40px]">
                    <img src={hamburger} alt="menu" className="w-[40px] "/>
                </div>
                <div className="hidden sm:flex ml-6 justify-center items-center cursor-pointer  ">
                <Link to='/home'><img src={ytlogo} alt="" className=" w-[20px] sm:w-[30px] md:w-[40px]"/></Link> 
                    <h1 className="flex justify-center items-center text-[15px] md:text-[25px]  h-[40px]">YouTube</h1>
                </div>
            </div>
            <div className="w-[60%] sm:w-[70%] flex justify-center content-center ">
                <div className="w-[100%] flex justify-center content-center ">
                    <input type="text" className="bg-black border border-white w-[150px] sm:w-[50%] h-[40px] rounded-l-[50px] p-4" placeholder="Search"/>
                    <button className="hover:bg-gray-700 border border-white bg-slate-500 w-[50px] h-[40px]  flex justify-center content-center rounded-r-[50px] ">
                        <img src={search} alt="search" className="w-[35px] "/></button>
                    </div>
                </div>
            <div className="w-[15%] flex justify-end items-center">
            <div className=" cursor-pointer flex justify-center items-center  p-[2px] w-[100px] ">
            <img src={user} alt="" className="h-[40px]"/>
            <div className="flex justify-center items-center "><Link to='/signin'>Sign In</Link></div>
            </div>
        </div>
        </header>
        </>
    )
}

export default Header;