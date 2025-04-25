
import { Link } from "react-router-dom";
function SignUp() {

  return (
    <>
      <div className='w-[100%] h-[100vh] flex justify-center items-center '>
        <form action="" className="border-2 border-white rounded-lg w-[50%] p-[5%] flex flex-col gap-10 justify-center items-center">
            <input type="text" name="username" placeholder="email" className="w-[70%] text-xl p-[5px] rounded-lg text-black bg-white" />
            <input type="text" name="name" id="" placeholder="name" className="w-[70%] text-xl p-[5px] rounded-lg text-black bg-white" />
            <input type="text" name="password" id="" placeholder="password" className="w-[70%] text-xl p-[5px] rounded-lg text-black bg-white" />
            <button type="submit" className="border border-red-600 bg-red-600 font-bold w-[70%] text-xl p-[5px] rounded-lg">Submit</button>
            <div>
            <p className="text-white">Have an account?  <span class="text-red-600 font-bold cursor-pointer"><Link to='/signin'>Login Here</Link></span>
            </p>
        </div>
        </form>
        
      </div>
    </>
  )
}

export default SignUp;