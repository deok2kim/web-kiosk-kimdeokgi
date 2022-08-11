import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Order, OrderResponse } from "../types";
import { getRandomSecond } from "../utils";
import { DELAY_SECONDS } from "../constants";

interface Response {
  data: OrderResponse;
  loading: boolean;
  error?: Error;
}

const BASE_URL = process.env.REACT_APP_API_ROOT;

const useOrder = (orderData: Order | null): Response => {
  const [data, setData] = useState<OrderResponse>({ id: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  useEffect(() => {
    setLoading(true);
    const createOrder = async () => {
      try {
        const response: AxiosResponse<any> = await axios.post(
          `${BASE_URL}/order`,
          orderData
        );
        setData(response.data);
      } catch (e) {
        if (axios.isAxiosError(e)) setError(e);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      createOrder();
    }, getRandomSecond(DELAY_SECONDS.MIN, DELAY_SECONDS.MAX));
  }, [orderData]);

  return { data, loading, error };
};

export default useOrder;
