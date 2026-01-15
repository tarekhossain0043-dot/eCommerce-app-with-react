import CustomCheckbox from "../CustomCheckbox";
import { notification } from "../../assets/assets";

export default function Nitification() {
  return (
    <div>
      <ul className="flex flex-col">
        {notification.map((item, index) => (
          <li
            key={index}
            className="border-b border-slate-100 py-6 last-of-type:border-none flex items-center justify-between gap-3"
          >
            <div>
              <span className="block text-[16px] leading-6 text-black capitalize font-bold mb-1">
                {item.title}
              </span>
              <span className="block text-[14px] leading-5 font-normal text-[#5A607F]">
                {item.desc}
              </span>
            </div>
            {/* custom notification */}
            <CustomCheckbox />
          </li>
        ))}
      </ul>
    </div>
  );
}
