import axios from "axios";
import { useEffect, useState } from "react";

const cache = new Map();

function useFetch(url) {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [data, setData] = useState(null);

   useEffect(() => {
      const controller = new AbortController();
      if (!cache.has(url)) {
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
      } else {
         setData(cache.get(url));
         setError(null);
         setLoading(false);
      }
      return () => {
         controller.abort();
      }
   }, [url])

   return { data, loading, error };
}

export default useFetch;