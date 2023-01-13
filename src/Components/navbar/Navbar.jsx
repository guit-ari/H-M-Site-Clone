import "./Navbar.css";
import Logo from "./Logo";
import NavbarItem from "./NavbarItem";

const itemsName = ["Contacts", "About us", "Services"];

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <Logo />
        {itemsName.map((item) => {
          return <NavbarItem e={item} />; // e è il nome della variabile che decido io come chiamare
        })}
      </header>
    </>
  );
}
