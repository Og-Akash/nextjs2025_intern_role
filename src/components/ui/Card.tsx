import Image from "next/image";
import React from "react";
import Button, { ButtonVariants } from "./Button";
import Eye from "../Icons/Eye";
import Graph from "../Icons/Graph";
import Elipsis from "../Icons/Elipsis";
import { CardProps } from "@/types/card";

const variant = {
  Published: "publish",
  Created: "created",
  Draft: "draft"
}

const Card = ({ card }: { card: CardProps }) => {
  return (
    <div className="relative card overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={card.image}
          alt="image"
          width={300}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute right-4 top-2 flex gap-2 justify-end">
        <span className="bg-white/80 inline-flex items-center  rounded-md p-1 gap-1">
          <Eye />
         {card.views}
        </span>
        <span className="bg-white/80 inline-flex items-center rounded-md p-1 justify-center h-full">
          <Graph />
        </span>
      </div>
      <div className="card-content">
        <h1 className="text-2xl text-white font-medium">{card.title}</h1>
        <div className="flex font-medium justify-between items-center gap-2 text-white">
          <span>{card.category}</span>
          <Button variant={variant[card.status] as ButtonVariants}>{card.status}</Button>
        </div>
        <div className="flex gap-3 w-full">
          <Button variant="secondary" className="w-full">
            View
          </Button>
          <Button className="text-center bg-[#f4f4f4]">
            <Elipsis />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
