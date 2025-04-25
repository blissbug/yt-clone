
import bassi from './bassiVideo.jpg';

function FeedVideo(props){
    return(
        <>
        <div className="w-[400px] m-[30px] text-white">
            <img src={bassi} alt="" className="w-[400px] cursor-pointer"/>
            <div className="cursor-pointer">{props.title}</div>
            <div className="flex justify-start items-center">
                <div className=" cursor-pointer rounded-[500px] overflow-hidden w-[30px] h-[30px] mr-[10px]">
                    <img src="/UI/mainadmin.jpg" alt="" className="w-[30px] h-[30px]"/>
                </div>
                <div className="cursor-pointer">{props.channel}</div>
                <pre>   </pre>
                <div>{props.views} views</div>
                <pre>   </pre>
                <div>{props.time} months ago</div>
            </div>
        </div>
        </>
    )
}

export default FeedVideo;