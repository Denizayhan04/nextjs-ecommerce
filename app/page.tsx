"use client"
import { useSelector } from "react-redux";
import ProductCard from "./components/cards/ProductCard";
import PageContainers from "./containers/PageContainers";
import Slider from "./components/general/Slider";
import { RootState } from "./store/store";
import ProductContainer from "./containers/ProductContainer";
import { useEffect, useState } from "react";
import prisma from "@/libs/prismadb"
import axios from "axios";

export default function Home() {

  return (
<PageContainers>
   <div className="flex flex-col justify-between">
    <Slider />
   </div>
  <ProductContainer />
</PageContainers>
  );
}
