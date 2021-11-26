import axios from "axios";
import { useEffect, useState } from "react";

const cache = new Map();

function useFetch(url) {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [data, setData] = useState(null);

   const updateCache = (newData) => {
      cache.set(url, newData);
   }

   const runFetch = (url, controller) => {
      axios.get(url, { signal: controller.signal })
         .then((fetchedData) => {
            cache.set(url, fetchedData.data);
            setData(fetchedData.data)
            setLoading(false);
         })
         .catch((err) => {
            if (err.response) {
               setError(err.response.data);
               setLoading(false);
            }
         })
   }

   useEffect(() => {
      const controller = new AbortController();
      if (!cache.has(url)) {
         runFetch(url, controller);
      } else {
         setData(cache.get(url));
         setError(null);
         setLoading(false);
      }
      runFetch(url, controller);
      return () => {
         controller.abort();
      }
   }, [url])

   return { data, setData, loading, error, updateCache };
}

export default useFetch;