"use client";
import Link from "next/link";
import { Icon1, RecordSVG } from "../svg";
import { IncomeCard } from "../needfull/IncomeCard";
import { ExpenseCard } from "../needfull/idnex";

export const DashBoard = () => {
  return (
    <main>
      <div className="px-[12px] py-4 flex md:px-[120px] justify-between md:justify-around items-center">
        <div className="flex items-center">
          <div className="flex items-center gap-2 md:gap-6">
            <Icon1 />
            <button className="hover:text-base hover:font-semibold font-normal text-base">
              <h2>Dashboard</h2>
            </button>
            <button className="hover:text-base hover:font-semibold font-normal text-base">
              <h2>Records</h2>
            </button>
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
      <div>
        <div className=" flex flex-col items-center md:flex md:flex-row  md:justify-center gap-6">
          <IncomeCard />
          <IncomeCard />
          <ExpenseCard />
        </div>
      </div>
    </main>
  );
};
