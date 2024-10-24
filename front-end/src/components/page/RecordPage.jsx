import { Header } from "../needfull/idnex";
import { Eye, Plus } from "../svg";

export const RecordPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <div className="flex max-w-[1440px] w-full px-[120px] m-auto gap-6">
        <div className="flex justify-center">
          <div className="rounded-md border-[#E5E7EB] border-[1px] bg-[#F9FAFB] p-6 ">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-semibold text-2xl">Records</h3>
              </div>
              <div>
                <button className="bg-[#0166FF] w-[250px] h-9 rounded-xl">
                  <h3 className="text-white font-normal text-base">+ add</h3>
                </button>
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
                    <Eye />
                    <h3 className="font-normal">Food & Drink</h3>
                  </div>
                  <div>
                    <button className="flex items-center gap-3 ">
                      <Plus />
                      <h3> Add category</h3>
                    </button>
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
              <div tabIndex={0} role="button" className="btn m-1">
                Newest fisrt
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
