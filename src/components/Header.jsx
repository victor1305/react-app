import '../assets/header.scss'

const Header = () => {
  const headerBtns = [
    {
      icon: "",
      label: "BROWSE",
    },
    {
      icon: "",
      label: "ADD NEW QUESTIONS",
    },
    {
      icon: "",
      label: "API",
    },
    {
      icon: "",
      label: "DISCUSS",
    },
    {
      icon: "",
      label: "LOGIN",
    },
  ];

  return (
    <nav className="navbar">
      <div className="">
        {headerBtns.map((elm, index) => (
          <button key={`nav-btn-${index}`}>{elm.label}</button>
        ))}
      </div>
    </nav>
  );
};

export default Header;
