import NavLink from "./NavLink";

const Dropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="dropdown">
      {["/", "/nosotros", "/areaEspecialidad", "/perfiles", "/adwiseUniversity", "/contacto"].map((href, index) => (
        <NavLink key={index} href={href} onClick={onClose}>
          {["Inicio", "Nosotros", "Área De Especialidad", "Perfiles", "Adwise University", "Contacto"][index]}
        </NavLink>
      ))}
    </div>
  );
};

export default Dropdown;
