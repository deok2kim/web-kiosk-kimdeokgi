import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { PaymentOption } from "../types";

interface Response {
  data: PaymentOption[];
  loading: boolean;
  error?: Error;
}

const BASE_URL = process.env.REACT_APP_API_ROOT;

const usePaymentOptionList = (): Response => {
  const [data, setData] = useState<PaymentOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    const getPaymentOptionList = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          `${BASE_URL}/order/payment-option`
        );
        setData(response.data);
      } catch (e) {
        if (axios.isAxiosError(e)) setError(e);
      } finally {
        setLoading(false);
      }
    };
    getPaymentOptionList();
  }, []);

  return { data, loading, error };
};

export default usePaymentOptionList;
