"use client";

import React from "react";
import Button from "./ui/Button";
import { tabs } from "@/constants/tabs";
import { Tab } from "@/types/tabs";
import { useContent } from "@/context/ContentContext";


const Tabs = () => {
  const {activeTab,handleActiveTab} = useContent()
  return (
    <div className="flex gap-4 items-center p-2 my-4 mx-6 overflow-x-auto">
      {tabs.map((tab: Tab) =>
        tab.name === activeTab ? (
          <Button
            key={tab.name}
            className="cursor-pointer text-white"
              onClick={() => handleActiveTab(tab.name)}
            variant="active"
          >
            <span>{tab.name}</span>
            <span>{`(${tab.value})`}</span>
          </Button>
        ) : (
          <Button
            key={tab.name}
            className="cursor-pointer"
              onClick={() => handleActiveTab(tab.name)}
            variant="notActive"
          >
            <span className="text-dark">{tab.name}</span>
            <span className="text-gray">{`(${tab.value})`}</span>
          </Button>
        )
      )}
    </div>
  );
};

export default Tabs;
