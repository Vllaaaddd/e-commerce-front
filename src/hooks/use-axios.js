import { useState, useCallback } from 'react';

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async ({ service, data = {}, config = {} }) => {
    try {
      setLoading(true);
      const res = await service(data, config);
      setResponse(res);
      setError(null);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return { response, error, loading, fetchData };
};

export default useAxios;
