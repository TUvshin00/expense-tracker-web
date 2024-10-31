"use client";

import { AddCategory, Addrecord, Header } from "../needfull/idnex";
import { Eye, Leadingicon, Plus } from "../svg";

export const RecordPage = () => {
  return (
    <div className=" ">
      <Header />
      <div className="bg-[#F3F4F6] w-full h-screen ">
        <div className="flex max-w-[1440px] w-full px-[120px] m-auto gap-6 py-20 ">
          <div className="flex justify-center">
            <div className="rounded-md border-[#E5E7EB] border-[1px] bg-[#F9FAFB] p-6 ">
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-semibold text-2xl">Records</h3>
                </div>
                <div>
                  <button
                    className="btn bg-[#0166FF] w-[250px] h-9 rounded-xl text-white "
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    + add
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box max-w-[792px] w-full p-0">
                      <Addrecord />
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button onClick={() => document.close}>close</button>
                    </form>
                  </dialog>
                </div>
                <div>
                  <label className="input input-bordered h-[32px] flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="font-bold">Type</h3>
                  </div>
                  <div>
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-3">
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio"
                          defaultChecked
                        />
                        <h3 className="font-normal text-base">All</h3>
                      </div>
                      <div className="flex gap-3">
                        <input type="radio" name="radio-1" className="radio" />
                        <h3 className="font-normal text-base">Income</h3>
                      </div>
                      <div className="flex gap-3">
                        <input type="radio" name="radio-1" className="radio" />
                        <h3 className="font-normal text-base">Expense</h3>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-bold">Category</h3>
                      <button>
                        <h3 className="text-gray-400">clear</h3>
                      </button>
                    </div>
                    <div className="flex gap-3 items-center">
                      <label className="swap">
                        <input type="checkbox" />
                        <Leadingicon className="swap-off fill-current" />
                        <Eye className="swap-on fill-current" />
                      </label>
                      <h3 className="font-normal">Food & Drink</h3>
                    </div>
                    <div>
                      <button
                        className=" text-black  h-9 rounded-xl flex  gap-3 items-center"
                        onClick={() =>
                          document.getElementById("my_modal_2").showModal()
                        }
                      >
                        <Plus />
                        Add Category
                      </button>
                      <dialog id="my_modal_2" className="modal">
                        <div className="modal-box  w-full p-0">
                          <AddCategory />
                        </div>
                        <form method="dialog" className="modal-backdrop">
                          <button onClick={() => document.close}>close</button>
                        </form>
                      </dialog>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between ">
              <div>
                <h3>Last 30 Days</h3>
              </div>
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1 bg-white">
                  Newest fisrt
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>7 week ago</a>
                  </li>
                  <li>
                    <a>14 week ago</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
