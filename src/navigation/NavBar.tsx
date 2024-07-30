import { Link } from "react-router-dom";

const NavBar = () => {
  return ( 
    <nav>
      <Link to={'/home'} className="colored">home</Link>
      <Link to={'/products'}>products</Link>
      <Link to={'/contact'}>contact</Link>
    </nav>
  );
}
 
export default NavBar;