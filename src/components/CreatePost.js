import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

function CreatePost({ open, handleClose, data }) {
   const [editablePost, setEditablePost] = useState({
      id: (data.length + 1),
      title: "",
      description: "",
      image: "",
      category: "",
      comments: [],
   });

   useEffect(() => {
      if (data) {
         setEditablePost({
            id: (data.length + 1),
            title: "",
            description: "",
            image: "",
            category: "",
            comments: [],
         })
      }
   }, [data])

   const handleCancel = () => {
      setEditablePost({
         id: (data.length + 1),
         title: "",
         description: "",
         image: "",
         category: "",
         comments: [],
      });
      handleClose();
   };

   const handleOk = () => {
      const newData = [...data, editablePost];
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
            <DialogTitle sx={{ fontSize: "1.8rem" }}>Create Post</DialogTitle>
            <DialogContent>
               <Box sx={{ width: "400px", display: "flex", flexFlow: "column", gap: "20px" }}>
                  <TextField
                     sx={{ width: "100%" }}
                     onChange={(e) => handleChange(e)}
                     name="title"
                     label="Title"
                     variant="standard"
                     defaultValue={""}
                  />
                  <TextField
                     sx={{ width: "100%" }}
                     onChange={(e) => handleChange(e)}
                     name="description"
                     multiline rows={5}
                     label="Description"
                     variant="standard"
                     defaultValue={""}
                  />
                  <FormControl variant="standard" sx={{ width: "100%" }}>
                     <InputLabel id="simple-select">Category</InputLabel>
                     <Select
                        onChange={(e) => handleChange(e)}
                        labelId="simple-select"
                        id="simple-select"
                        label="Category"
                        name="category"
                        defaultValue={""}
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
                     defaultValue={""}
                  />

               </Box>
            </DialogContent>
            <DialogActions sx={{ display: "flex", gap: "20px" }}>
               <Button autoFocus onClick={handleCancel}>
                  Cancel
               </Button>
               <Button color="primary" variant="contained" onClick={handleOk}>
                  Save
               </Button>
            </DialogActions>
         </Box>

      </Dialog>
   );
}

export default CreatePost;