import Image from "next/image";
import React from "react";
import ThemeToggleButton from "./ui/Toggler";
import { useTheme } from "@/context/ThemeContext";
import ArrowDown from "./Icons/ArrowDown";
import ArrowLeft from "./Icons/ArrowLeft";

const Header = () => {
  const { theme } = useTheme();
  return (
    <header className="h-20 shadow-sm w-full">
      <div className="flex h-full justify-between mx-8 items-center">
        <div className="inline-flex gap-3 items-center">
          <ArrowLeft />
          <span className="hidden lg:block font-semibold text-lg">Stories</span>
        </div>
        <div className="flex gap-3 items-center max-w-xs w-32 lg:w-full">
        <ThemeToggleButton />
          <div
            className={`w-full flex justify-between items-center ${
              theme === "dark" && "bg-dark border-dark-50 text-[#fcfcfc]"
            } bg-[#fcfcfd] p-2 border border-[#E8EFF7] text-[#373B5C] rounded-md`}
          >
            <div className="flex-1 flex gap-2">
              <Image
                src="/Images/profile.png"
                alt="profile"
                width={30}
                height={20}
                className="object-cover rounded-md"
              />
              <div className="hidden lg:flex flex-col items-start font-semibold">
                <span className="text-[8px]">Welcome Back</span>
                <span className="text-sm">Akash Ghosh</span>
              </div>
            </div>
            <div>
              <ArrowDown size="10" className="text-foreground" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
