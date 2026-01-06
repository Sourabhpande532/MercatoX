import {
  Carousel,
  Categories,
  SalesBanner,
  ClothingCategory,
} from "../../src/component";

export const Home = () => {
  return (
    <div>
      <Carousel />
      <Categories />
      <SalesBanner />
      <ClothingCategory />
    </div>
  );
};
