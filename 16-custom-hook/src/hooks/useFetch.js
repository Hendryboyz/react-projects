import {useEffect, useState} from "react";

export function useFetch(initialValue, fetchFn) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const fetchedData = await fetchFn();
        setData(fetchedData);
      } catch (error) {
        setError({message: error.message || 'Failed to fetch data.'});
      } finally {
        setIsFetching(false);
      }
    }
    fetchData();
  }, [fetchFn]);

  return {isFetching, error, data, setData};
}