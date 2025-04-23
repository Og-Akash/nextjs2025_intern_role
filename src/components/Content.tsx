import React from "react";
import Card from "./ui/Card";

const Content = () => {
  return (
      <section className="my-4 mx-6 p-4 shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index} />
        ))}
      </section>
  );
};

export default Content;
