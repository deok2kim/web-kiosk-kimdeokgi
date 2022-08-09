import { useEffect, useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { ProductOptionCategory } from "../types";

interface Response {
  data: ProductOptionCategory[];
  loading: boolean;
  error?: Error;
}

const BASE_URL = process.env.REACT_APP_API_ROOT;

const useProductOptionList = (): Response => {
  const [data, setData] = useState<ProductOptionCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    const getProductOptionList = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          `${BASE_URL}/product-option/category`
        );
        setData(response.data);
      } catch (e) {
        if (axios.isAxiosError(e)) setError(e);
      } finally {
        setLoading(false);
      }
    };
    getProductOptionList();
  }, []);

  return { data, loading, error };
};

export default useProductOptionList;
