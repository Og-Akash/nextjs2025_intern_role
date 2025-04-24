"use client";

import Action from "@/components/Action";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";
import { ContextContext } from "@/context/ContentContext";
import { useSidebar } from "@/context/SidebarContext";
import { useIsMobile } from "@/hooks/useMobile";
import React from "react";

const MainPageWrapper = () => {
  const { expanded } = useSidebar();
  const isMobile = useIsMobile();

  return (
    <div
      className={`${
        expanded && !isMobile ? "ml-[15rem]" : "ml-[3.5rem]"
      } w-screen h-screen flex flex-col overflow-hidden transition-all duration-300`}
    >
      <ContextContext>
        <div className="shrink-0">
          <Header />
          <Action />
          <Tabs />
        </div>

        {/* Scrollable card area only */}
        <div className="max-w-[100rem] mx-auto w-full overflow-y-auto overflow-x-hidden">
          <Content />
        </div>
      </ContextContext>
    </div>
  );
};

export default MainPageWrapper;
