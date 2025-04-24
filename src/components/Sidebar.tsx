"use client";
import React from "react";
import Button from "./ui/Button";
import { SidebarLinkProps } from "@/types/sidebarlink";
import { navLinks } from "@/constants/navLinks";
import { NavLink } from "@/types/navLinks";
import { useSidebar } from "@/context/SidebarContext";
import Panel from "./Icons/Panel";
import { useIsMobile } from "@/hooks/useMobile";
import Image from "next/image";

const Sidebar = () => {
  const { expanded, setExpanded } = useSidebar();
  const isMobile = useIsMobile();

  // Define the sidebarWidth based on device.
  const sidebarWidth = isMobile ? "w-14" : expanded ? "w-60" : "w-14";

  return (
    <div
      className={`fixed top-0 left-0 z-10 min-w-14 transition-all duration-300 ${sidebarWidth} min-h-screen shadow-sm shadow-foreground/50 flex justify-center`}
    >
      {/* Only show toggle button on desktop */}
      {!isMobile && (
        <div className="hidden md:block text-right h-fit absolute right-2 top-4">
          <Button
            className="cursor-pointer"
            onClick={() => setExpanded((curr: boolean) => !curr)}
          >
            <Panel />
          </Button>
        </div>
      )}
      <div
        className={`mt-10 sm:mt-24 flex flex-col space-y-8 ${
          expanded && !isMobile ? "pl-8 pr-4" : "pl-2"
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
          <Image src="/Icons/contact.svg" alt="contact" width={20} height={20} />
          {expanded && !isMobile && "Contact Support"}
          {!expanded && (
            <div
              className={`
            absolute left-full whitespace-nowrap rounded-md px-2 py-1 ml-2
            bg-gray-900 text-white text-xs
            invisible opacity-0 -translate-x-2 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
            >
              Contact Support
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

function SidebarLink({ icon, label, link }: SidebarLinkProps) {
  const { expanded, setActiveTab, activeTab } = useSidebar();
  const isMobile = useIsMobile();

  return (
    <Button
      variant={activeTab === link ? "active" : "default"}
      className="text-sm cursor-pointer group flex items-center gap-2 relative"
      onClick={() => setActiveTab(link)}
    >
      <Image
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
      {/* Show label if expanded on desktop or on mobile */}
      {expanded && !isMobile ? label : null}

      {/* Show tooltip on hover only when not expanded and not on mobile */}
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
