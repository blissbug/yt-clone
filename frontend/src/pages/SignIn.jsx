import { Link } from "react-router-dom";
function SignIn(){
    return(
        <>
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
            <form action="" className=" border-2 border-white rounded-lg w-[50%] p-[5%] flex flex-col gap-10 justify-center items-center">
                <input type="email" placeholder="Email" className="w-[70%] text-xl p-[5px] rounded-lg text-black bg-white"/>
                <input type="password" placeholder="Password" className="w-[70%] text-xl p-[5px] rounded-lg text-black bg-white"/>
                <button type="submit" className="border border-red-600 bg-red-600 font-bold w-[70%] text-xl p-[5px] rounded-lg">Submit</button>
            <div className="text-white">Don't have a account? <span className="text-red-600 font-bold cursor-pointer"><Link to='/signup'>Sign Up here!</Link></span></div>
            </form>
        </div>
        </>
    )
}

export default SignIn;