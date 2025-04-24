"use client";
import { useContext, createContext, useState } from "react";

// Define proper type for the context
interface SidebarContextType {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const sidebarContext = createContext<SidebarContextType | null>(null);

export function SidebarContext({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState("content");

  return (
    <sidebarContext.Provider
      value={{ setExpanded, expanded, setActiveTab, activeTab }}
    >
      {children}
    </sidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(sidebarContext);
  if (context === null) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}