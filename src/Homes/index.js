import React from "react";
import Homes from "./Homes";
import Header from "../Header";
import Filters from "./Filters";

export default function() {
  return (
    <div>
      <Header />
      <Filters />
      <Homes />
    </div>
  );
}
