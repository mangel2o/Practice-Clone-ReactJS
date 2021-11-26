import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function EditPost({ open, handleClose, post, data }) {
   const [originalPost] = useState(post);
   const [editablePost, setEditablePost] = useState(post);

   const handleCancel = () => {
      setEditablePost(originalPost);
      handleClose();
   };

   const handleOk = () => {
      const newData = data.map((value) => value.id !== post.id ? value : editablePost)
      handleClose(newData, editablePost);
   };

   const handleChange = (e) => {
      let newPost = { ...editablePost };
      newPost[e.target.name] = e.target.value;
      setEditablePost(newPost);
   }

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
            <DialogTitle sx={{ fontSize: "1.8rem" }}>Edit Post</DialogTitle>
            <DialogContent>
               <Box sx={{ width: "400px", display: "flex", flexFlow: "column", gap: "20px" }}>
                  <TextField
                     sx={{ width: "100%" }}
                     onChange={(e) => handleChange(e)}
                     name="title"
                     label="Title"
                     variant="standard"
                     defaultValue={originalPost.title}
                  />
                  <TextField
                     sx={{ width: "100%" }}
                     onChange={(e) => handleChange(e)}
                     name="description"
                     multiline rows={5}
                     label="Description"
                     variant="standard"
                     defaultValue={originalPost.description}
                  />
                  <FormControl variant="standard" sx={{ width: "100%" }}>
                     <InputLabel id="simple-select">Category</InputLabel>
                     <Select
                        onChange={(e) => handleChange(e)}
                        labelId="simple-select"
                        id="simple-select"
                        defaultValue={originalPost.category}
                        label="Category"
                        name="category"
                     >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Travel">Travel</MenuItem>
                        <MenuItem value="Lifestyle">Lifestyle</MenuItem>
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="Food">Food</MenuItem>
                        <MenuItem value="Work">Work</MenuItem>
                     </Select>
                  </FormControl >
                  <TextField
                     sx={{ width: "100%" }}
                     onChange={(e) => handleChange(e)}
                     name="image"
                     label="URL of the image"
                     variant="standard"
                     defaultValue={originalPost.image}
                  />

               </Box>
            </DialogContent>
            <DialogActions sx={{ display: "flex", gap: "20px" }}>
               <Button autoFocus onClick={handleCancel}>
                  Cancel
               </Button>
               <Button color="primary" variant="contained" onClick={handleOk}>
                  Update
               </Button>
            </DialogActions>
         </Box>

      </Dialog>
   );
}

export default EditPost;