"use client";

import Action from "@/components/Action";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";
import { ContextContext, useContent } from "@/context/ContentContext";
import { useSidebar } from "@/context/SidebarContext";
import { useIsMobile } from "@/hooks/useMobile";
import React, { useState } from "react";
import Modal from "../ui/Modal";
import AddContentForm from "../AddContentForm";

const MainPageWrapper = () => {
  const { expanded } = useSidebar();
  const isMobile = useIsMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleAddContent } = useContent();

  return (
    <div
      className={`${
        expanded && !isMobile ? "ml-[15rem]" : "ml-[3.5rem]"
      } w-screen h-screen flex flex-col overflow-hidden transition-all duration-300`}
    >
      <ContextContext>
        <div className="shrink-0">
          <Header />
          <Action setIsModalOpen={setIsModalOpen} />
          <Tabs />
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Content"
        >
          <AddContentForm
            onSubmit={handleAddContent}
            onClose={() => setIsModalOpen(false)}
          />
        </Modal>

        {/* Scrollable card area only */}
        <div className="max-w-[100rem] mx-auto w-full overflow-y-auto overflow-x-hidden">
          <Content />
        </div>
      </ContextContext>
    </div>
  );
};

export default MainPageWrapper;
