'use client'

import Action from "@/components/Action";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";
import { useSidebar } from "@/context/SidebarContext";
import React from "react";

const page = () => {
  const {expanded} = useSidebar()
  return (
    <div className={`${expanded ? "ml-[15rem]" : "ml-[3.5rem]"} w-screen h-screen flex flex-col overflow-hidden transition-all duration-300`}>
      
      <div className="shrink-0">
        <Header />
        <Action />
        <Tabs tabActive="All" />
      </div>

      {/* Scrollable card area only */}
      <div className="max-w-[100rem] mx-auto w-full overflow-y-auto overflow-x-hidden">
        <Content />
      </div>
    </div>
  );
};

export default page;
