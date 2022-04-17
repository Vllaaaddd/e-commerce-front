import { useState, useEffect, useCallback } from 'react';

const defaultProps = {
  data: {},
  config: {}
};

const useAxios = ({
  service,
  data = defaultProps.data,
  config = defaultProps.config,
  fetchOnMount = true
}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(fetchOnMount);

  const fetchData = useCallback(async () => {
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
  }, [service, data, config]);

  useEffect(() => {
    if (fetchOnMount) {
      fetchData();
    }
  }, [fetchData, fetchOnMount]);

  return { response, error, loading, fetchData };
};

export default useAxios;
