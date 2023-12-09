import creatorNumOne from "../../images/nenad.png";
import creatorNumTwo from "../../images/edi.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import "./Creators.css";

const Creators = () => {
  const mouseMove = () => {
    const ticketElm = document.getElementById("ticket");
    const { x, y, width, height } = ticketElm.getBoundingClientRect();

    const centerPoint = { x: x + width / 2, y: y + height / 2 };
    window.addEventListener("mousemove", (e) => {
      const degreeX = (e.clientY - centerPoint.y) * 0.1;
      const degreeY = (e.clientX - centerPoint.x) * -0.1;

      ticketElm.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
    });
  };
  // const mouseMove = window.addEventListener("mousemove", (e) => {});

  return (
    <div className="creators">
      <div className="ticket-visual_visual" id="ticket">
        <div className="left"></div>
        <div className="right"></div>
        <div className="ticket-visual-wrapper" onMouseMove={mouseMove}>
          <div className="nenad-creator">
            <img
              src={creatorNumOne}
              className="creator-num-one shadow"
              alt="creator-num-one"
            />
            <div className="description">
              <p className="name">Nenad Maglovski</p>
              <p className="role">DevOps</p>
              <div className="contact-icons">
                <FaGithub />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className="edi-creator">
            <img
              src={creatorNumTwo}
              className="creator-num-two shadow"
              alt="creator num two"
            />
            <div className="description">
              <p className="name">Edvard Radjenovic</p>
              <p className="role">Frontend Developer</p>
              <div className="contact-icons">
                <FaGithub />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creators;
