'use client'

import React from "react";
import Button from "./ui/Button";
import { tabs } from "@/constants/tabs";
import { Tab } from "@/types/tabs";

type TabProps = { tabActive: string; onTabChange?: (name: string) => void };

const Tabs = ({ tabActive, onTabChange }: TabProps) => {
  return (
    <div className="flex gap-4 items-center p-2 my-4 mx-6">
      {tabs.map((tab: Tab) => (
        <Button
          key={tab.name}
        //   onClick={() => onTabChange(tab.name)}
          variant={tabActive === tab.name ? "active" : "notActive"}
        >
           <span>{tab.name}</span>
           <span className="text-gray">{`(${tab.value})`}</span>
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
