import FloatingDiv from "../FloatingDiv/FloatingDiv";
import "./Intro.css";

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Salom! I'm</span>
          <span>Davronbek Turdiyev</span>
          <p>
            I'm a full-stack developer and graphic designer, with a passion for
            technology and design. I have a background in Computer Science and a
            minor in Art. I'm currently working remotely, but I'm always open to
            collaborating on projects.
          </p>
        </div>
        <button className="i-button button">Hire me</button>
        <div className="i-icons">
          <a href="#">
            {" "}
            <img src="./img/github.png" alt="github" />
          </a>
          <a href="#">
            {" "}
            <img src="./img/linkedin.png" alt="github" />
          </a>
          <a href="#">
            <img src="./img/instagram.png" alt="github" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src="./img/Vector1.png" alt="" />
        <img src="./img/Vector2.png" alt="" />
        <img src="./img/boy.png" alt="" />
        <div className="floating-wrapper">
          <FloatingDiv txt1="Web" txt2="Developer" />
        </div>
        <div className="floating-wrapper">
          <FloatingDiv txt1="Best Design" txt2="Award" />
        </div>
        <div className="blur" style={{background: "rgb(238 210 255)"}}>

        </div>
      </div>
    </div>
  );
}

export default Intro;
