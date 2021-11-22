import Fab from '@mui/material/Fab';
import PersonIcon from '@mui/icons-material/Person';

function Layout({ children }) {
   return (
      <div className="layout-container">
         <Fab size="small" >
            <PersonIcon />
         </Fab>
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