import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="h-20 shadow-sm w-full">
      <div className="flex h-full justify-between mx-8 items-center">
        <div className="flex gap-3 items-center">
          <img
            src="/Icons/bigArrowLeft.svg"
            alt="arrowleft"
            width={20}
            height={40}
          />
          <span className="font-semibold text-lg">Stories</span>
        </div>
        <div className="max-w-60 w-full flex justify-between items-center bg-[#fcfcfd] p-2 border border-[#E8EFF7] rounded-md">
          <div className="flex-1 flex gap-2">
            <Image
              src="/Images/profile.png"
              alt="profile"
              width={30}
              height={20}
              className="object-cover"
            />
            <div className="flex flex-col items-start text-[#373B5C] font-semibold">
              <span className="text-[8px]">Welcome Back</span>
              <span className="text-sm">Akash Ghosh</span>
            </div>
          </div>
          <div>
            <img
              src="/Icons/arrow.svg"
              alt="arrowleft"
              width={10}
              height={10}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
