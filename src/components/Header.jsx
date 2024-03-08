import { FaAlignJustify, FaComments, FaGears, FaPlus } from "react-icons/fa6";
import { BiLogIn } from "react-icons/bi";

import "../assets/header.scss";

const Header = () => {
  const headerBtns = [
    {
      icon: FaAlignJustify,
      label: "BROWSE",
    },
    {
      icon: FaPlus,
      label: "ADD NEW QUESTIONS",
    },
    {
      icon: FaGears,
      label: "API",
    },
    {
      icon: FaComments,
      label: "DISCUSS",
    },
    {
      icon: BiLogIn,
      label: "LOGIN",
    },
  ];

  return (
    <nav className="navbar">
      <div>
        {headerBtns.map((elm, index) => (
          <button key={`nav-btn-${index}`}>
            <elm.icon />
            <span>{elm.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Header;
