import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Box } from "@mui/system";

function EditPost(props) {
   const { onClose, value: valueProp, open } = props;
   const [value, setValue] = React.useState(valueProp);

   React.useEffect(() => {
      if (!open) {
         setValue(valueProp);
      }
   }, [valueProp, open]);

   const handleCancel = () => {
      onClose();
   };

   const handleOk = () => {
      onClose(value);
   };

   return (
      <Dialog sx={{ width: '80%', maxHeight: 435 }} open={open}>
         <DialogTitle>Phone Ringtone</DialogTitle>
         <DialogContent>
            <Box>
               something
            </Box>
         </DialogContent>
         <DialogActions>
            <Button autoFocus onClick={handleCancel}>
               Cancel
            </Button>
            <Button onClick={handleOk}>Ok</Button>
         </DialogActions>
      </Dialog>
   );
}

export default EditPost;