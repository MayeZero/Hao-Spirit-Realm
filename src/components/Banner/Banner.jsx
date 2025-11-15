import banner from "/pictures/web-banner.png"
import github from "/pictures/github.png"
import linkedin from "/pictures/linkedin.png"
import email from "/pictures/email.png"
import './Banner.css'

export default function Banner(){
    const githubPage = () => {
        window.open("https://github.com/MayeZero");
    }

    const linkedinPage = () => {
        window.open("https://www.linkedin.com/in/ninghao-zhu/");
    }  

    return(
        <>
            <div className="BannerContainer">
                <img src={banner} alt="banner" />
                <div className="LinksContainer">
                    <div className="frontLinksContainer">
                        <button onClick={githubPage} className="github-link">
                            <img src={github} alt="github" />
                        </button>
                        <button onClick={linkedinPage} className="linkedin-link">
                            <img src={linkedin} alt="linkedin" />
                        </button>
                    </div>
                    <div className="midLinksContainer">

                    </div >
                    <div className="backLinksContainer">
                        <img className="email-link" src={email} alt="email" />
                        <h3>
                            zhuwh2023@163.com
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}