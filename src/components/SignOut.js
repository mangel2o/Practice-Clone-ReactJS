import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { Box } from "@mui/system";

function SignOut({ open, handleClose }) {
   const handleCancel = () => {
      handleClose(true);
   };

   const handleOk = () => {
      handleClose();
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
            <DialogTitle sx={{ fontSize: "1.8rem" }}>Sign Out</DialogTitle>
            <DialogContent >
               <Typography variant="h2" sx={{ textAlign: "center", fontSize: "1.6rem", fontWeight: "bold" }}>
                  Are you sure you want to sign out?
               </Typography>
            </DialogContent>
            <DialogActions sx={{ display: "flex", gap: "20px" }}>
               <Button autoFocus onClick={handleCancel}>
                  Cancel
               </Button>
               <Button color="primary" variant="contained" onClick={handleOk}>
                  Sign out
               </Button>
            </DialogActions>
         </Box>

      </Dialog>
   );
}

export default SignOut;