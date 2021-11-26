import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeroPost from "../../src/components/HeroPost";
import useFetch from "../../src/hooks/useFetch";
import styles from '../../styles/Post.module.css'

function BlogPost() {
   const router = useRouter()
   const { id } = router.query;
   const { data, setData, loading, error, updateCache } = useFetch(`http://localhost:8000/posts/${id}`);

   const updateData = (newData) => {
      setData(newData);
      updateCache(newData);
   }

   return (
      <div className={styles.container}>
         <div className={styles.postsContainer}>
            {loading && <div>Loading...</div>}
            {error && <div>{JSON.stringify(error)}</div>}
            {data && <HeroPost data={data} updateData={updateData} />}
         </div>
      </div>
   );
}

export default BlogPost;