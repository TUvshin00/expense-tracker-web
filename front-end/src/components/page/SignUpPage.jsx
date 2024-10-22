"use client";
import Link from "next/link";
import Icon from "../svg/Icon";
import { BlueButton, Input1 } from "../needfull/idnex";

export const SignUpPage = () => {
  return (
    <main className="">
      <div className="grid grid-cols-2 h-screen">
        <div className=" inline-flex  justify-center items-center ">
          <div className="flex flex-col justify-center items-center gap-10 ">
            <div className="flex items-center justify-center ">
              <Icon />
            </div>
            <div className="flex text-center flex-col gap-2">
              <p className="text-2xl font-bold not-italic text-[#0f172a]">
                Create Geld account
              </p>
              <p className="font-normal text-base not-italic text-[#334155]">
                Sign up below to create your Wallet account
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Input1 placeholder={"Name"} name={"name"} />
              <Input1 placeholder={"Email"} name={"email"} />
              <Input1
                type={"password"}
                placeholder={"Password"}
                name={"password"}
              />
              <Input1
                type={"password"}
                placeholder={"Re-password"}
                name={"password"}
              />
              <BlueButton text={"Sign up"} />
            </div>
            <div className="flex items-center justify-center">
              <button>
                <p>Already have account </p>
              </button>
              <Link href={"/"}>
                <button>
                  <p className="text-blue-500 px-3">Log In</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#0166FF]"></div>
      </div>
    </main>
  );
};
