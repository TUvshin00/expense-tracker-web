"use client";
import Link from "next/link";
import { Icon1, RecordSVG } from "../svg";

export const Header = () => {
  return (
    <div>
      <div className=" py-4 flex px-[120px] items-center md:max-w-[1440px] md:w-full md:justify-between md:m-auto justify-center gap-5 ">
        <div className="flex items-center">
          <div className="flex items-center gap-2 md:gap-6">
            <Icon1 />
            <Link href={"/dashboardpage"}>
              <button className="hover:text-base hover:font-semibold font-normal text-base">
                <h2>Dashboard</h2>
              </button>
            </Link>
            <Link href={"/recordpage"}>
              <button className="hover:text-base hover:font-semibold font-normal text-base">
                <h2>Records</h2>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 md:gap-6">
            <RecordSVG />
            <div className="dropdown dropdown-end">
              <div className="avatar online ">
                <div className="w-10 rounded-full">
                  <div tabIndex="0" role="button" className="btn m-1"></div>
                  <ul
                    tabIndex="0"
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <Link href={"/"}>
                      <li>
                        <h2>Log Out</h2>
                      </li>
                    </Link>
                  </ul>
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
