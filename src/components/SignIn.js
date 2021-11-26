import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function SignIn({ open, handleClose }) {
   const [userName, setUserName] = useState("");

   const handleOk = () => {
      handleClose(userName);
   };

   const handleChange = (e) => {
      setUserName(e.target.value);
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
            <DialogTitle sx={{ fontSize: "1.8rem" }}>Sign In</DialogTitle>
            <DialogContent >
               <TextField
                  sx={{ width: "100%" }}
                  onChange={(e) => handleChange(e)}
                  name="name"
                  label="Name"
                  variant="standard"
               />
            </DialogContent>
            <DialogActions>
               <Button color="primary" variant="contained" onClick={handleOk}>
                  Sign in
               </Button>
            </DialogActions>
         </Box>

      </Dialog>
   );
}

export default SignIn;