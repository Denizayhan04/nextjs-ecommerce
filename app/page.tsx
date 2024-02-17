import ProductCard from "./components/products/ProductCard";
import PageContainers from "./containers/PageContainers";
import Slider from "./general/Slider";

export default function Home() {
  return (
<PageContainers>

   <div className="flex flex-col justify-between">
    <Slider />
   </div>
  <ProductCard />
</PageContainers>
  );
}
