import styles from "../../styles/Home.module.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PostCard from "./PostCard";
import { Typography } from "@mui/material";

function PostList(props) {

   return (
      <div className={styles.postsContainer}>
         <div className={styles.postsList}>
            {props.data.length > 0 && props.data.map((post) => (
               <PostCard key={post.id} post={post} />
            ))}
         </div>

         {props.data.length < 1 &&
            <Card>
               <CardContent style={{ backgroundColor: "#f8f9fb" }} >
                  <Typography variant="h4" style={{ padding: "0 20px" }}>
                     <span>No records found</span>
                  </Typography>
               </CardContent>
            </Card>
         }
      </div>
   );
}

export default PostList;