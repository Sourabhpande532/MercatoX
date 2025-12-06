import { Carousel } from "../component/carousel/Carousel";
import { Categories } from "../component/categories/Categories";

export const Home = () => {
  return (
    <div>
      <Carousel/>
      <Categories/>
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
