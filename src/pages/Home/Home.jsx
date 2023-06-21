import { Brand } from "./Brand";
import { ProductsDiscount } from "./Discount";
import { ImgHome } from "./ImgHome";
import { Sections } from "./Sections";

export default function Home() {
  return (
    <>
      <ImgHome />
      <div className="p-24 flex">
        <Sections />
      </div>
      <ProductsDiscount />
      <Brand />
    </>
  );
}
