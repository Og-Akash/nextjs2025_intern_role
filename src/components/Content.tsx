import React from "react";
import Card from "./ui/Card";
import { useContent } from "@/context/ContentContext";

const Content = () => {
  const {filteredCards} = useContent()
  return (
    <section className="mb-4 border border-gray/70 rounded-lg sm:mx-6 p-4 shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredCards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
      {filteredCards.length === 0 && <span className="text-gray text-sm font-medium">No Content Find by the Search Query.</span>}
    </section>
  );
};

export default Content;
