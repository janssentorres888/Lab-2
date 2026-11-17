import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Students", path: "/students" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Student Portal
      </div>

      <div className="navbar-links">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
