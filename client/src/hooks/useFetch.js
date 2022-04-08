import { useState, useEffect } from 'react';

function useFetch(api) {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
    api().then((response) => setData(response));
  }, []);

  return {
    data, setData,
  };
}

export default useFetch;
