import { Button, Card, CardActions, CardContent, CardMedia, FormControl, FormHelperText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from '../../styles/Post.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/router";
import Comment from "../components/Comment";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import axios from "axios";

function HeroPost({ data, updateData }) {
   const router = useRouter();
   const [comment, setComment] = useState("");
   const [isWrong, setIsWrong] = useState(false);

   function handleSubmit() {
      if (!comment) return setIsWrong(true);
      setIsWrong(false)
      const newComment = { author: localStorage.getItem("user"), content: comment };
      updateData({ ...data, comments: [...data.comments, newComment] });
      setComment("");
      axios.patch(`http://localhost:8000/posts/${data.id}`, { comments: [...data.comments, newComment] });
   }

   function handleChange(e) {
      setComment(e.target.value)
   }

   return (
      <div className={styles.cardContainer} >
         <Card key={data.id} className={styles.card}>
            <CardMedia
               component="img"
               image={data.image}
               height="560"
               alt="image"
            />
            <CardContent className={styles.cardContent}>
               <CardActions className={styles.cardActions}>
                  <Button onClick={() => router.push(`/`)} aria-label="create" size="small" className={styles.backButton}>
                     <ArrowBackIcon />
                     <Typography variant="body1">
                        View posts
                     </Typography>
                  </Button>
               </CardActions>
               <Typography className={styles.cardTitle} variant="h3">
                  {data.title}
               </Typography>

            </CardContent>

         </Card>
         <Box className={styles.bottomCardContainer}>
            <Box className={styles.description}>
               <Typography variant="h5">
                  {data.description}
               </Typography>
            </Box>
            {
               data.comments.length > 0 &&
               <Box className={styles.commentSection}>
                  <Typography variant="body1" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                     Comments
                  </Typography>
                  {data.comments.map((comment, index) => (
                     <Comment key={index} author={comment.author} content={comment.content} />
                  ))}
               </Box>
            }
            <Box className={styles.commentPost}>
               <FormControl variant="standard">
                  <TextField
                     id="component-error-text"
                     label="Write a comment"
                     multiline
                     rows={4}
                     variant="standard"
                     style={{ width: "100%" }}
                     error={isWrong}
                     onChange={handleChange}
                     value={comment}
                  />
                  <FormHelperText style={{ visibility: isWrong ? "visible" : "hidden" }} error={isWrong} id="component-error-text">
                     This field is required
                  </FormHelperText>
               </FormControl>
               <Button onClick={handleSubmit} variant="contained" style={{ width: "60px" }}>
                  Add
               </Button>
            </Box>
         </Box>
      </div>

   );
}

export default HeroPost;