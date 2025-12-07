import {
  Carousel,Categories,SalesBanner,ClothingCategory,
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
// import { useEffect } from "react";
// import { apiGet } from "../api/axios";
// const fetchCategories = async () => {
//   try {
//     const res = await apiGet("/categories");
//     console.log(res.categories);
//   } catch (error) {
//     throw error;
//   }
// };
// useEffect(() => {
//   fetchCategories();
// }, []);
