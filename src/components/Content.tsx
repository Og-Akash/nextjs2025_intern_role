import React from "react";
import Card from "./ui/Card";
import { useContent } from "@/context/ContentContext";
import Image from "next/image";

const Content = () => {
  const {filteredCards} = useContent()
  return (
    <section className="mb-4 rounded-lg mx-1 sm:mx-6 p-4 shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredCards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
      {filteredCards.length === 0 && <div className="col-span-full flex flex-col justify-center items-center text-center py-10 text-gray-500">
        <Image 
        src={`/Images/notfound.png`}
        width={500}
        height={500}
        alt="not-found"
        className="object-cover size-[15rem] sm:size-[20rem]"
        />
        <span className="text-gray text-lg font-medium">No Content Found by the Query.</span>
        </div>}
    </section>
  );
};

export default Content;
