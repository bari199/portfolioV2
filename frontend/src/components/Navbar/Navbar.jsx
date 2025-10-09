import React,{useState,useRef} from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import themepartern from "../../assets/theme_pattern.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";


const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <img src={menu_open} onClick={openMenu} className="nav-mob-open"/>
      </div>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={themepartern} />: ""}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={themepartern} />: ""}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={themepartern} />: ""}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={themepartern} />: ""}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={themepartern} />: ""}</li>
      </ul>

      {/* Button */}
      <button className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></button>
    </div>
  );
};

export default Navbar;