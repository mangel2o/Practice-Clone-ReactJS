import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeroPost from "../../src/components/HeroPost";
import useFetch from "../../src/hooks/useFetch";
import styles from '../../styles/Post.module.css'

function BlogPost() {
   const router = useRouter()
   const { id } = router.query;
   const { data, loading, error } = useFetch(`http://localhost:8000/posts/${id}`);
   const [post, setPost] = useState(null);

   useEffect(() => {
      if (data) {
         setPost(data);
      }
   }, [data]);

   return (
      <div className={styles.container}>
         <div className={styles.postsContainer}>
            {loading && <div>Loading...</div>}
            {error && <div>{JSON.stringify(error)}</div>}
            {post && <HeroPost data={post} comments={post.comments} />}
         </div>
      </div>
   );
}

export default BlogPost;