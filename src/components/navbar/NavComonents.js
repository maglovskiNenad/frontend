import "./NavComponenets.css";

const NavComponenst = () => {
  return (
    <div className="nav-fragment">
      <div className="nav">
        <ul className="u-list">
          <li className="burger-menu">
            <span className="one"></span>
            <span className="one two"></span>
            <span className="one"></span>
          </li>

          <li className="element">Home</li>
          <li className="element">About</li>
          <li className="element">Components</li>
          <li className="element">Creators</li>
        </ul>
      </div>
    </div>
  );
};

export default NavComponenst;
