import React from "react";
import Button from "./ui/Button";
import SearchIcon from "./Icons/Search";
import Calender from "./Icons/Calender";
import Filter from "./Icons/Filter";
import { useTheme } from "@/context/ThemeContext";

const Action = () => {
  const {theme} = useTheme()
  return (
    <div className="my-4 mx-8 h-20 shadow-sm bg-background rounded-lg">
      <div className="flex w-full items-center h-full justify-end p-4 gap-16">
        <div className="flex items-center gap-4">
          <div className="flex  border border-gray rounded-lg p-2 shadow-sm">
            <SearchIcon className="mr-2" />

            <input
              type="text"
              placeholder="search"
              className={`outline-none ${theme === "dark" ? "text-created placeholder:text-created/60" : "text-dark-50 placeholder:text-gray/60"} bg-transparent`}
            />
          </div>
          <div className="space-x-4">
            <Button className="bg-[#E7E8EF]">
              <Calender />
            </Button>
            <Button className="bg-[#E7E8EF]">
              <Filter />
            </Button>
          </div>
        </div>
        <div>
          <Button variant="active" className="cursor-pointer">
            Add new Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Action;
