import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Menu } from "../types";

interface Response {
  data: Menu[];
  loading: boolean;
  error?: Error;
}

const BASE_URL = process.env.REACT_APP_API_ROOT;

const useMenuList = (): Response => {
  const [data, setData] = useState<Menu[]>([]);
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
      } catch (e) {
        if (axios.isAxiosError(e)) setError(e);
      } finally {
        setLoading(false);
      }
    };
    getMenuList();
  }, []);

  return { data, loading, error };
};

export default useMenuList;
