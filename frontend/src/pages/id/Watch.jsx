function Watch(){
    return(
            <>
            <div className="flex flex-col justify-start items-center w-[100vw] lg:w-[70vw]  text-white">
                <div className="videoPart flex flex-col justify-center items-center m-[2%] w-[100%]">
                    <iframe className=" border border-white rounded-md w-[80%] h-[60vw] lg:w-[80%] lg:h-[70vh]" src="https://www.youtube.com/embed/lHLBJ4yRMn8?autoplay=1&amp;cc_load_policy=1" allowFullScreen=""></iframe>
                    <div className="flex flex-col justify-start items-start w-[80%] m-[20px]">
                        <div className="text-2xl">American Airlines | Stand Up Comedy | Ft @AnubhavSinghBassi</div>
                        <div className="m-[10px] flex flex-col-reverse lg:flex-row">
                            <div className="flex justify-start items-center lg:w-[50%]">
                                <div className=" cursor-pointer rounded-[500px] overflow-hidden w-[40px] h-[40px] mr-[10px]">
                                    <img src="/UI/mainadmin.jpg" alt="" className="w-[40px] h-[40px]"/>
                                </div>
                            <div className="text-xl font-bold cursor-pointer">Vikas Yadav</div>
                        <div className="ml-[40px] border border-white bg-white p-[5px] rounded-[50px] font-semibold text-black">Subscribe</div>
                    </div>
                    <div className="m-[10px] lg:w-[50%] flex gap-[20px] lg:justify-end lg:items-end">
                        <div className="flex justify-center items-center border border-white bg-gray-500 rounded-[50px] p-[5px] lg:w-[150px]">
                            <div className="flex justify-center items-end">
                                <img src="/UI/like.png" alt="" className=" w-[40px]"/>
                                <div className="text-gray-700 font-semibold">465</div>
                            </div>
                            <div className="border border-white h-[30px] ">
                                </div><img src="/UI/dislike.png" alt="" className=" w-[40px]"/></div>
                                <div className="border border-gray-600 bg-gray-600 rounded-[50px] p-[10px] w-[100px] text-center font-bold hover:bg-red-600 flex justify-center items-center"> 
                                    <img src="/UI/share.png" alt="" className="w-[20px]"/>Share</div>
                                    <div className="border border-gray-600 bg-gray-600 rounded-[50px] p-[10px] w-[140px] text-center font-bold hover:bg-red-600 flex justify-center items-center">
                                        <img src="/UI/download.png" alt="" className="w-[20px]"/> Download</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" border border-gray-600 bg-gray-600 p-5 rounded-lg m-[2%] w-[80%]">This is a short description of Video 1.</div>
                        <div className="commentPart w-[100%]">
                            <div className="flex flex-col justify-center items-center gap-5">
                                <div className="cursor-pointer border border-gray-600 bg-gray-600 p-3 text-2xl text-red-600 font-bold rounded-lg">Login to Comment</div>
                                <div className=" relative flex gap-5 border border-gray-400 bg-gray-400 justify-start items-center w-[60%] rounded-xl">
                                    <div className="w-[80%] flex gap-5 justify-start items-center ">
                                        <div className="flex gap-2 border border-gray-600 w-fit p-[5px] rounded-xl bg-gray-600"><img src="/UI/loggedUser.png" alt="" className="w-[30px]"/>
                                        <div>abc</div>
                                    </div>
                                    <div className="text-black">nice video</div>
                                </div>
                                <div className="right-5 text-gray-800 ">a while ago</div>
                                </div>
                            <div className=" relative flex gap-5 border border-gray-400 bg-gray-400 justify-start items-center w-[60%] rounded-xl">
                                <div className="w-[80%] flex gap-5 justify-start items-center ">
                            </div>
                            </div>
                            </div>
                    </div>
                    </div>
            </>
        )
    }

    export default Watch;