import { cardData } from "@/constants/card";
import { CardProps } from "@/types/card";
import { log } from "console";
import { createContext, useContext, useEffect, useState } from "react";

interface ContentContext {
  searchQuery: string;
  activeTab: string;
  filteredCards: CardProps[];
  handleActiveTab: (tab: string) => void;
  handleSearchQuery: (query: string) => void;
  handleAddContent: (content: CardProps) => void;
}

const contentContext = createContext<ContentContext>({
  handleActiveTab: () => {},
  handleSearchQuery: () => {},
  handleAddContent: () => {},
  searchQuery: "",
  activeTab: "All",
  filteredCards: [],
});

export function ContextContext({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [filteredCards, setFilteredCards] = useState<CardProps[]>(cardData);

  const handleSearchQuery = (query: string) => {
    setSearchQuery(query);
  };
  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  const handleAddContent = (content:CardProps) => {
    const updatedContent = {
      ...filteredCards,
      content
    }
    console.log(content)
    setFilteredCards(updatedContent)
  }

  useEffect(() => {
    let result = [...cardData];
    let timer = undefined;

    //* filter by tabs
    if (activeTab !== "All") {
      result = result.filter(
        (d) => d.status.toLowerCase() === activeTab.toLowerCase()
      );
    }

    //* filter by search Query
    if (searchQuery) {
      const query = searchQuery.trim().toLowerCase();
      timer = setTimeout(() => {
        const filtered = result = result.filter(
          (d) =>
            d.title.toLowerCase().includes(query) ||
            d.category.toLowerCase().includes(query)
        );
        setFilteredCards(filtered);
      }, 500);
    } else {
      setFilteredCards(result);
    }

    return () => clearTimeout(timer);
  }, [activeTab, setActiveTab, searchQuery]);

  return (
    <contentContext.Provider
      value={{
        handleAddContent,
        handleActiveTab,
        handleSearchQuery,
        searchQuery,
        activeTab,
        filteredCards,
      }}
    >
      {children}
    </contentContext.Provider>
  );
}

export function useContent() {
  if (contentContext === undefined) {
    throw new Error("Please wrap the Component inside contentContext");
  }
  return useContext(contentContext);
}
