"use client";

import React, { createContext, useContext, useState } from "react";
import Button from "./ui/Button";
import { SidebarLinkProps } from "@/types/sidebarlink";
import { navLinks } from "@/constants/navLinks";
import { NavLink } from "@/types/navLinks";
import { useSidebar } from "@/context/SidebarContext";

const SidebarContext = createContext<any | null>(null);

const Sidebar = () => {
  const { expanded, setActiveTab, activeTab,setExpanded } = useSidebar();

  return (
    <div
      className={`fixed top-0 left-0 min-w-14 transition-all duration-300 ${
        expanded ? "w-60" : "w-14"
      } min-h-screen shadow-sm shadow-foreground/50 flex justify-center`}
    >
      <div className="text-right h-fit absolute right-2 top-4">
        <Button
          className="cursor-pointer"
          onClick={() => setExpanded((curr:string) => !curr)}
        >
          <img
            src={expanded ? "/Icons/arrowLeft.svg" : "/Icons/arrowRight.svg"}
            alt="toggle"
            width={25}
            height={25}
          />
        </Button>
      </div>

      <SidebarContext.Provider value={{ expanded, setActiveTab, activeTab }}>
        <div
          className={`mt-24 flex flex-col space-y-8 ${
            expanded ? "pl-8 pr-4" : "pl-2"
          }`}
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((nav: NavLink) => (
              <SidebarLink
                key={nav.label}
                icon={nav.icon}
                label={nav.label}
                link={nav.link}
              />
            ))}
          </div>
          <Button variant="secondary" className="flex items-center gap-2">
            <img
              src="/Icons/contact.svg"
              alt="contact"
              width={20}
              height={20}
            />
            {expanded && "Contact Support"}
          </Button>
        </div>
      </SidebarContext.Provider>
    </div>
  );
};

export default Sidebar;

function SidebarLink({ icon, label, link }: SidebarLinkProps) {
  const { expanded, setActiveTab, activeTab } = useContext(SidebarContext);

  return (
    <Button
      variant={activeTab === link ? "active" : "default"}
      className="text-sm cursor-pointer group flex items-center gap-2 relative"
      onClick={() => setActiveTab(link)}
    >
      <img
        src={icon}
        alt={label}
        width={20}
        height={20}
        style={
          activeTab === link
            ? {
                filter:
                  "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
              }
            : undefined
        }
      />
      {expanded && label}
      {!expanded && (
        <div
          className={`
            absolute left-full whitespace-nowrap rounded-md px-2 py-1 ml-2
            bg-gray-900 text-white text-xs
            invisible opacity-0 -translate-x-2 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
        >
          {label}
        </div>
      )}
    </Button>
  );
}
