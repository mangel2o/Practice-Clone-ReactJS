import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { Box } from "@mui/system";

function DeletePost({ open, handleClose, post, data }) {
   const handleCancel = () => {
      handleClose();
   };

   const handleOk = () => {
      const newData = data.filter((value) => value.id !== post.id)
      handleClose(newData, post);
   };

   return (
      <Dialog sx={{ width: "100%", maxHeight: "100%" }} open={open}>
         <Box sx={{
            display: "flex",
            flexFlow: "column",
            gap: "20px",
            padding: "20px",
            alignItems: "center",
            justifyContent: "center"
         }}>
            <DialogTitle sx={{ fontSize: "1.8rem" }}>Delete Post</DialogTitle>
            <DialogContent >
               <Typography variant="h2" sx={{ textAlign: "center", fontSize: "1.6rem", fontWeight: "bold" }}>
                  Are you sure you want to delete this post?
               </Typography>
            </DialogContent>
            <DialogActions sx={{ display: "flex", gap: "20px" }}>
               <Button autoFocus onClick={handleCancel}>
                  Cancel
               </Button>
               <Button color="warning" variant="contained" onClick={handleOk}>
                  Delete
               </Button>
            </DialogActions>
         </Box>

      </Dialog>
   );
}

export default DeletePost;