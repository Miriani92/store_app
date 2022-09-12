import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../api/query";

const useCategories = () => {
  const { data } = useQuery(GET_CATEGORIES);
  return { ...data };
};

export default useCategories;
