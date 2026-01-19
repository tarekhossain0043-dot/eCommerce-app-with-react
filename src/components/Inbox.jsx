import {
  CloudDownload,
  Plus,
  Search,
  Settings,
  User2,
  Video,
} from "lucide-react";
import inbox1 from "../assets/inbox/Avatar-1.png";
import { commentsData, formattedTime } from "../assets/assets";
import User from "./User";
import { FaFileUpload } from "react-icons/fa";
export default function Inbox() {
  //   const currentTime = new Date().getUTCDate();
  return (
    <div>
      <div className="flex items-center justify-between px-3">
        <span className="mb-0 block pr-3 lg:pr-0 text-xl lg:text-3xl font-bold">
          Inbox
        </span>
        <button className="bg-blue-2 px-4 py-2 truncate rounded-sm flex items-center gap-1 cursor-pointer w-fit transition-all duration-300 ease-in-out text-white">
          <Plus className="w-4 h-4" />
          <span className="font-light text-white">New Message</span>
        </button>
      </div>
      <div className="grid sm:grid-cols-[2fr_10fr] lg:grid-cols-[4fr_7fr] h-screen mt-7 rounded-sm overflow-hidden bg-white shadow-sm">
        {/* sidebar */}
        <div className="border-r border-r-slate-200 max-h-[80] pt-4 lg:max-w-90 max-w-20 overflow-hidden">
          <span className="block px-8 w-full text-left text-black text-[16px] font-bold capitalize mb-12 font-bold">
            Conversations
          </span>
          <div className="w-full hidden md:block px-8">
            <form className="relative">
              <input
                type="text"
                name="search"
                placeholder="search anything.."
                id="search"
                className="px-4 text-sm pl-12 w-full max-[1050px]:hidden py-3 bg-transparent text-default cursor-pointer outline-none ring-1 ring-blue-clr focus:ring-primary rounded-sm transition-all duration-300 ease-in-out"
              />
              <Search className="w-4 h-4 max-[1050px]:hover:text-primary cursor-pointer transition-all duration-300 ease-in-out min-[1050px]:absolute top-1/2 left-5 text-slate-400 transform -translate-y-1/2 cursor-pointer" />
            </form>
          </div>
          <ul className="flex flex-col mt-6 max-[1050px]:max-h-130 h-full overflow-y-scroll">
            {commentsData.map((comments, index) => (
              <li
                key={index}
                className="min-[1050px]:px-8 max-[1050px]:mx-5 min-[1050px]:py-6 max-[1050px]:hover:ring-1 max-[1050px]:ring-blue-clr max-[1050px]:rounded-full max-[1050px]:mb-6 bg-white text-black transition-all duration-300 ease-in-out min-[1050px]:hover:bg-[#A1A7C4]/40 cursor-pointer transition-all flex items-center justify-between gap-4"
              >
                <img
                  src={comments.img}
                  alt="user-img"
                  className="w-10 h-10 rounded-full cursor-pointer transition-all duration-300 ease-in-out rounded-full aspect-auto"
                />
                {/* comments */}
                <div className="max-[1020px]:hidden">
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
        <div className="h-screen pt-3 pb-6 flex flex-col">
          {/* head */}
          <div className="flex items-center justify-between px-3">
            <div className="flex items-center gap-1">
              <span className="relative text-2xl max-[500px]:text-xl font-bold">
                Luis Pittman
              </span>
              <span className="w-2 h-2 rounded-full bg-[#1FD286]"></span>
            </div>
            <div className="flex items-center gap-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all duration-300 ease-in-out  relative cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-200 bg-slate-100 text-default">
                <User2 className="w-5 h-5 " />
                <span className="absolute top-0.5 z-999 right-0 w-2 h-2 bg-green-400 rounded-full"></span>
              </span>
              <span className="max-[500px]:hidden">
                <Video className="w-5 h-5" />
              </span>
              <span className="max-[500px]:hidden">
                <Settings className="w-5 h-5" />
              </span>
            </div>
          </div>
          <hr className="w-full h-px bg-slate-100 mt-4 mb-4" />
          <div className="flex-1 h-full px-3 overflow-y-scroll mb-4">
            <div className="h-full">
              <div className="flex items-start gap-2.5 mb-10">
                <img className="w-8 h-8 rounded-full" src={inbox1} alt="User" />
                <div className="flex flex-col relative w-fit leading-1.5 p-4 border-gray-200 bg-blue-600 rounded-sm ">
                  <span className="text-sm font-normal text-white mb-0">
                    Hi, I wonder if there is going to be anything new Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Fugit
                    minima facilis eum ea vel alias iste recusandae, totam cum
                    dolorum? for spring?
                  </span>
                  <span className="absolute left-0 -bottom-5 text-default text-xs">
                    {formattedTime}
                  </span>
                </div>
              </div>

              {/* Right Aligned Message (Outgoing) */}
              <div className="relative">
                <div className="flex items-start justify-end gap-2.5 mb-4">
                  <div className="flex flex-col w-fit rounded-sm leading-1.5 p-4 border-gray-200 bg-gray-100">
                    <span className="text-sm font-normal text-black">
                      Hi! Yes, we have a new collection launching next week.
                    </span>
                  </div>
                  <img className="w-8 h-8 rounded-full" src={inbox1} alt="Me" />
                </div>
                <span className="absolute right-10 -bottom-5 text-default text-xs">
                  {formattedTime}
                </span>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="border-t border-slate-200 pt-2 pb-1 px-3">
            <div className="flex items-center justify-between gap-7 ring-1 ring-slate-100 px-2 rounded-sm">
              <input
                type="text"
                className="w-full border-none cursor-pointer transition-all duration-300 ease-in-out capitalize py-4 rounded-sm cursor-pointer px-5 outline-none cursor-pointer transition-all duration-300 ease-in-out outline-none text-default text-default"
                placeholder="Your message…"
              />
              <div className="flex items-center gap-4">
                <CloudDownload className="w-5 h-5 cursor-pointer text-default cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-clr" />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-clr cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary hover:text-white text-white capitalize text-sm font-medium rounded-sm shadow-sm"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
