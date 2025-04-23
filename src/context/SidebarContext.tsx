"use client";
import { useContext, createContext, useState } from "react";

const sidebarContext = createContext<any | null>(null);

export function SidebarContext({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState("content");
  return (
    <sidebarContext.Provider value={{setExpanded, expanded, setActiveTab, activeTab}}>{children}</sidebarContext.Provider>
  );
}

export function useSidebar() {
  if (sidebarContext === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return useContext(sidebarContext);
}
