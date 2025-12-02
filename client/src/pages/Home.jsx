// import { useEffect } from "react";
// import { apiGet } from "../api/axios";
import { useAppFeatures } from "../context/AppContext";
export const Home = () => {
  const { categories,loading } = useAppFeatures();
  console.log(categories);
  
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
  if(loading) return "Loading..."
  return (
    <div>
      <h1>This is Home page</h1>
    </div>
  );
};
