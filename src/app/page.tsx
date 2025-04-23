import Action from "@/components/Action";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";
import React from "react";

const page = () => {
  return (
    <div className="ml-[15rem] w-[calc(100%-15rem)] h-screen flex flex-col overflow-hidden">
      
      <div className="shrink-0">
        <Header />
        <Action />
        <Tabs tabActive="All" />
      </div>

      {/* Scrollable card area only */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <Content />
      </div>
    </div>
  );
};

export default page;
