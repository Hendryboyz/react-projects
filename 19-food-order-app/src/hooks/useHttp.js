import {useCallback, useEffect, useState} from "react";

export default function useHttp(url, fetchConfig, initialData) {
  const [data, setData] = useState(initialData);
  // useEffect will be triggered after components render so initial loading=true
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (json = undefined) => {
    setIsLoading(true);
    try {
      const resp = await fetch(url, {
        ...fetchConfig,
        body: json,
      });
      if (resp.ok) {
        setData(await resp.json());
      }
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  }, [url, fetchConfig]);

  useEffect(() => {
    if (!url || fetchConfig.method !== 'GET') return;
    sendRequest();
  }, [sendRequest]);

  const reset = () => {
    setData(initialData);
    setIsLoading(false);
    setError(null);
  };

  return {
    data,
    isLoading,
    error,
    sendRequest,
    reset,
  }
}