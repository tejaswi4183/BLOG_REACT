import { BoltRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Tejaswi Blog</h1>
      <div className="links">
        <Link to="/" style={{ 
          color: 'white',
          fontWeight:'bold',
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
          
        }}>Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          fontWeight:'bold',
          borderRadius: '8px' 
        }}>New Blog</Link>
        <Link to="/about" style={{ 
          color: 'white',fontWeight:'bold',
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
          
        }}>Aboutme</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;