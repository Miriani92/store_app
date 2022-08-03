import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../api/query";

const useQueryProduct = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  return { loading, error, data };
};

export default useQueryProduct;
