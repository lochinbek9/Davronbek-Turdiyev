import  "./Intro.css"

function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Salom! I'm</span>
                <span>Davronbek Turdiyev</span>
                <p>
                    I'm a full-stack developer and graphic designer, with a passion for technology and design. I have a background in Computer Science and a minor in Art. I'm currently working remotely, but I'm always open to collaborating on projects.
                </p>
            </div>
            <button className="i-button button">Hire me</button>
        </div>
        <div className="i-right">
            I am right side
        </div>
    </div>
  )
}

export default Intro