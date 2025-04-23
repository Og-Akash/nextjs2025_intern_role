import React from "react";
import Card from "./ui/Card";
import { cardData } from "@/constants/card";

const Content = () => {
  return (
    <section className="mb-4 border border-gray/70 rounded-lg mx-6 p-4 shadow-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cardData.map((card, index) => (
        <Card card={card} />
      ))}
    </section>
  );
};

export default Content;
