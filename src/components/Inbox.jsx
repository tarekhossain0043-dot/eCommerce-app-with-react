import { Plus, Search, Settings, User2, Video } from "lucide-react";
// import inbox1 from "../assets/inbox/Avatar-1.png";
import { commentsData } from "../assets/assets";
import User from "./User";
export default function Inbox() {
  //   const currentTime = new Date().getUTCDate();
  return (
    <div>
      <div className="flex items-center justify-between px-3">
        <h4 className="mb-0">Inbox</h4>
        <button className="bg-blue-2 px-4 py-2 rounded-sm flex items-center gap-1 cursor-pointer w-fit transition-all duration-300 ease-in-out text-white">
          <Plus className="w-4 h-4" />
          <span className="font-light text-white">New Message</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen mt-7 bg-white shadow-sm">
        {/* sidebar */}
        <div className="border-r border-r-slate-200 max-h-[80] px-8 pt-4 pb-20 max-w-[384px] overflow-hidden">
          <span className="block w-full text-left text-black text-[16px] font-bold capitalize mb-12 font-bold">
            Conversations
          </span>
          <div className="w-full hidden md:block">
            <form className="relative">
              <input
                type="text"
                name="search"
                placeholder="search anything.."
                id="search"
                className="px-4 text-sm pl-12 w-full py-3 bg-transparent text-default cursor-pointer outline-none ring-1 ring-blue-clr focus:ring-primary rounded-sm transition-all duration-300 ease-in-out"
              />
              <Search className="w-4 h-4 absolute top-1/2 left-5 text-slate-400 transform -translate-y-1/2 cursor-pointer" />
            </form>
          </div>
          <ul className="flex flex-col mt-6 lg:max-h-screen max-h-full overflow-y-scroll">
            {commentsData.map((comments, index) => (
              <li
                key={index}
                className="px-8 py-6 bg-white text-black transition-all duration-300 ease-in-out hover:bg-[#A1A7C4]/40 cursor-pointer transition-all flex items-center gap-4"
              >
                <img
                  src={comments.img}
                  alt="user-img"
                  className="w-12 h-12 rounded-full cursor-pointer transition-all duration-300 ease-in-out rounded-full"
                />
                {/* comments */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] leading-5 font-bold text-black">
                        {comments.title}
                      </span>
                      <span className="w-6 h-6 p-2 block rounded-full text-white bg-blue-clr flex items-center justify-center font-bold text-[12px]">
                        {comments.comment}
                      </span>
                    </div>
                    <span className="text-default text-[14px] leading-5">
                      {comments.time}
                    </span>
                  </div>
                  <span className="mb-0 text-[14px] font-normal leading-5 text-default">
                    {comments.desc}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* users */}
        <div className="h-screen p-7">
          {/* head */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <h4 className="relative">Luis Pittman</h4>
              <span className="w-2 h-2 rounded-full bg-[#1FD286]"></span>
            </div>
            <div className="flex items-center gap-5">
              <span>
                <User2 className="w-4 h-4" />
              </span>
              <span>
                <Video className="w-4 h-4" />
              </span>
              <span>
                <Settings className="w-4 h-4" />
              </span>
            </div>
          </div>
          <hr className="w-full h-px bg-slate-100 my-7" />
        </div>
      </div>
    </div>
  );
}
