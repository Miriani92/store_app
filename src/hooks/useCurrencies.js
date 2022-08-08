import { useQuery } from "@apollo/client";
import { GET_CURRENCIES } from "../api/query";

const useCurrencies = () => {
  const { loading, error, data } = useQuery(GET_CURRENCIES);
  return { loading, error, currencies: data };
};

export default useCurrencies;
