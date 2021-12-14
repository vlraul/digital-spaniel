import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((receivedData) => {
        setData(receivedData);
        setLoading(false);
      });
  }, []);

  return {
    data,
    loading,
  };
};
export default useFetch;