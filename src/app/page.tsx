import Action from "@/components/Action";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";
import React from "react";

const page = () => {
  return (
    <div className="ml-[15rem] w-full">
      <Header />
      <Action />
      <Tabs tabActive="All" />
      <Content />
    </div>
  );
};

export default page;
