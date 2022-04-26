import { useState, useCallback } from 'react';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

interface IFetchDataProps {
  service: (data: object, config: AxiosRequestConfig) => Promise<AxiosResponse>;
  data?: object;
  config?: AxiosRequestConfig;
}

const useAxios = () => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async ({ service, data = {}, config = {} }: IFetchDataProps) => {
    try {
      setLoading(true);
      const res = await service(data, config);
      setResponse(res);
      setError(null);
    } catch (e: any) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return { response, loading, error, fetchData };
};

export default useAxios;
