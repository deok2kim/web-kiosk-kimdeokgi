import { useEffect, useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { CategoryAll } from "../../types/types";

interface Response {
  data: CategoryAll[];
  loading: boolean;
  error?: Error;
}

const BASE_URL = process.env.REACT_APP_API_ROOT;

const useMenuList = (): Response => {
  const [data, setData] = useState<CategoryAll[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    const getMenuList = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          `${BASE_URL}/products/category`
        );
        setData(response.data);
        setLoading(false);
      } catch (e) {
        const err = e as AxiosError;
        setError(err);
        setLoading(false);
      }
    };
    getMenuList();
  }, []);

  return { data, loading, error };
};

export default useMenuList;
