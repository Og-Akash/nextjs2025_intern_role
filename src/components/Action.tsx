import React from "react";
import Button from "./ui/Button";
import SearchIcon from "./Icons/Search";

const Action = () => {
  return (
    <div className="my-4 mx-8 h-20 shadow-sm bg-background rounded-lg">
      <div className="flex w-full items-center h-full justify-end p-4 gap-16">
        <div className="flex gap-4">
          <div className="flex border border-gray rounded-lg p-2 shadow-sm">
            <SearchIcon className="mr-2" />

            <input
              type="text"
              placeholder="search"
              className="outline-none text-dark-50 bg-transparent"
            />
          </div>
          <div className="space-x-4">
            <Button className="bg-[#E7E8EF]">📆</Button>
            <Button className="bg-[#E7E8EF]">📽️</Button>
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
