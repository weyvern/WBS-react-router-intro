import { NavLink } from 'react-router-dom';
import '../assets/styles.css';

const Navbar = () => {
  const styles = { display: 'flex', justifyContent: 'space-around' };
  return (
    <ul style={styles}>
      <NavLink exact to='/' activeClassName='active'>
        Home
      </NavLink>
      <NavLink to='/about' activeClassName='active'>
        About
      </NavLink>
      <NavLink to='/contact' activeClassName='active'>
        Contact
      </NavLink>
    </ul>
  );
};

export default Navbar;
