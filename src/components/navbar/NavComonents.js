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

          <li className="element animtaion no-blur">Home</li>
          <li className="element animtaion no-blur">About</li>
          <li className="element animtaion no-blur">Components</li>
          <li className="element animtaion no-blur">Creators</li>
        </ul>
      </div>
    </div>
  );
};

export default NavComponenst;
