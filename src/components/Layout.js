import Fab from '@mui/material/Fab';
import PersonIcon from '@mui/icons-material/Person';
import { useEffect, useState } from 'react';
import SignIn from './SignIn';
import SignOut from './SignOut';

function Layout({ children }) {
   const [loggedIn, setLoggedIn] = useState(typeof window !== "undefined" ? localStorage.getItem("user") : null);
   const [openSignIn, setOpenSignIn] = useState(false);
   const [openSignOut, setOpenSignOut] = useState(false);


   useEffect(() => {
      if (!loggedIn) {
         setOpenSignIn(true)
      }
   }, [loggedIn])

   const handleSignIn = (value) => {
      localStorage.setItem("user", value);
      setLoggedIn(true);
      setOpenSignIn(false);
   }

   const handleSignOut = () => {
      localStorage.removeItem("user");
      setLoggedIn(false);
      setOpenSignOut(false);
   }

   return (
      <div className="layout-container">
         <Fab onClick={() => setOpenSignOut(true)} size="small" >
            <PersonIcon />
         </Fab>
         <SignIn open={openSignIn} handleClose={handleSignIn} />
         <SignOut open={openSignOut} handleClose={handleSignOut} />
         <div className="title">
            <div className="slogan">
               <span style={{ fontSize: "2rem" }}>[ </span>
               <span> Making your Life Easier </span>
               <span style={{ fontSize: "2rem" }}>] </span>
            </div>
            <span style={{ fontSize: "3rem", fontWeight: "bold" }}>Discovering the World</span>
         </div>
         {children}
      </div>
   );
}

export default Layout;