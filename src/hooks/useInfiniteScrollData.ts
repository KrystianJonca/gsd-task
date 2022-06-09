import { useState, useEffect, useCallback } from 'react';

const ITEMS_PER_PAGE = 5;

const useInfiniteScrollData = <T>(baseURL: string) => {
  const [nextIndex, setNextIndex] = useState(0);
  const [url, setUrl] = useState(
    `${baseURL}?per_page=${ITEMS_PER_PAGE}&since=${nextIndex}`
  );
  const [data, setData] = useState<Array<T>>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMore = useCallback(
    () => setUrl(`${baseURL}?per_page=${ITEMS_PER_PAGE}&since=${nextIndex}`),
    [baseURL, nextIndex]
  );

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setNextIndex(json.at(-1).id);
        setIsLoading(false);
        setData((d) => (!d ? [...json] : [...(d as Array<T>), ...json]));
      } catch (error) {
        let msg = 'Unknown error';
        if (error instanceof Error) msg = error.message;
        setIsLoading(false);
        setError(msg);
      }
    })();
  }, [url]);

  return { data, isLoading, error, fetchMore };
};

export default useInfiniteScrollData;
