import { Box } from "@mui/system";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from "@mui/material";
import styles from '../../styles/Post.module.css'

function Comment({ author, content }) {
   return (
      <Box className={styles.commentContainer}>
         <Box className={styles.commentAuthor}>
            <AccountCircleIcon fontSize="large" />
            <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
               {author}
            </Typography>
         </Box>
         <Typography variant="body1" className={styles.commentContent}>
            {content}
         </Typography>
      </Box>
   );
}

export default Comment;