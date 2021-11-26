import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography, Modal } from "@mui/material";
import { Box } from "@mui/system";
import styles from "../../styles/Home.module.css"
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from "react";
import { useRouter } from 'next/router'
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";
import axios from "axios";


function PostCard({ post, data, updateData }) {
   const [openEdit, setOpenEdit] = useState(false);
   const [openDelete, setOpenDelete] = useState(false);
   const router = useRouter()

   const handleEdit = (newData, newValue) => {
      setOpenEdit(false);

      if (newData && newValue) {
         updateData(newData);
         axios.put(`http://localhost:8000/posts/${post.id}`, newValue);
      }

   }

   const handleDelete = (newData, deletedValue) => {
      setOpenDelete(false);

      if (newData && deletedValue) {
         updateData(newData);
         axios.delete(`http://localhost:8000/posts/${post.id}`, deletedValue);
      }
   }



   return (
      <div className={styles.cardContainer}>
         <Card key={post.id} className={styles.card}>
            <CardActionArea onClick={() => router.push(`/posts/${post.id}`)}>
               <CardMedia
                  component="img"
                  image={post.image}
                  height="600"
                  alt="image"
               />
               <CardContent className={styles.cardContent}>
                  <Typography style={{ fontSize: "50px", lineHeight: "1.4", fontWeight: "100" }} variant="h3">
                     {post.title}
                  </Typography>
                  <Box style={{ display: "flex", flexFlow: "column", gap: "20px" }}>
                     <Typography style={{ fontStyle: "italic", display: "flex", alignItems: "center", gap: "6px" }} variant="body1">
                        {post.comments.length} Comments <ForumOutlinedIcon size="small" />
                     </Typography>
                     <Typography variant="body1">
                        {post.description}
                     </Typography>
                  </Box>
                  <Typography style={{ letterSpacing: "4px" }} variant="body1">
                     {post.category}
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardActions}>
               <IconButton onClick={() => setOpenEdit(true)} aria-label="create" size="small" style={{ color: "#ffffff" }}>
                  <CreateIcon />
               </IconButton>
               <IconButton onClick={() => setOpenDelete(true)} aria-label="delete" size="small" style={{ color: "#ffffff" }}>
                  <DeleteIcon />
               </IconButton>
            </CardActions>
         </Card>

         <EditPost open={openEdit} handleClose={handleEdit} data={data} post={post} />
         <DeletePost open={openDelete} handleClose={handleDelete} data={data} post={post} />

      </div>

   );
}

export default PostCard;