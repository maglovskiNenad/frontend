import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const takeMeBackHandler = () => {
    navigate("/home");
    console.log("radi");
  };
  return (
    <div className="error-page">
      <div className="error-text">
        <p className="text number">404</p>
        <p className="text">
          <span className="sorry">sorry</span>,we couldn't find that page
        </p>
      </div>
      <div className="error-btn-wraper">
        <button className="error-btn" onClick={takeMeBackHandler}>
          Take me back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
