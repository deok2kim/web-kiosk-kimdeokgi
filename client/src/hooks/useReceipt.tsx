import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ReceiptResponse } from "../types";
import { getRandomSecond } from "../utils";
import { DELAY_SECONDS } from "../constants";

interface Response {
  data: ReceiptResponse | null;
  loading: boolean;
  error?: Error;
}

const BASE_URL = process.env.REACT_APP_API_ROOT;

const useReceipt = (id: number): Response => {
  const [data, setData] = useState<ReceiptResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    const getReceipt = async (id: number) => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          `${BASE_URL}/order/${id}`
        );
        setData(response.data);
      } catch (e) {
        if (axios.isAxiosError(e)) setError(e);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      getReceipt(id);
    }, getRandomSecond(DELAY_SECONDS.MIN, DELAY_SECONDS.MAX));
  }, [id]);

  return { data, loading, error };
};

export default useReceipt;
