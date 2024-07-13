import '../styles/Home.css'
import { Link } from 'react-router-dom'

const HomePage = ()=> {
    return (
    <section>
    <section className='flexer'>
        <div>
                <h1 className='large'>I am Josh Torres</h1>
                <h1 className='xxlarge gradientText'>Web Developer</h1>
                <Link to="/contact">
                    <p className='gradientBackground'>Contact Me</p>
                </Link>
        </div>
        <figure className="imgAlign">
            <img className="border" src={require("../img/IMG_2612.jpg")} alt="A head picture of Josh Torres" width="60%"/>
        </figure>

    </section>
        <div className="section padding">
            <div className="leftBorder">
                <h2 className="h2_border large">About Me</h2>
                <h1 className="xlarge">I am a Full-Stack Web Developer</h1>
                <p>Full Stack web developer leveraging a background in customer service to provide great <strong>communication and patience</strong>. Earned a certificate in Full Stack Web Development from the University Of Washington. <strong>Innovative problem-solver</strong> who is enthusiastic about developing apps with a primary focus on <strong>mobile design first</strong>. Strengths in <strong>teamwork, creativity, ingenuity</strong>, and building projects from ideas to finished Applications.</p>
            </div>
            <figure className="imgAlign">
            <img className="stockImg" src={require("../img/orangeImg3.png")} alt="A head " width="300px"    style={{
        background: 'radial-gradient(circle, rgb(232 228 217) 53%, rgb(38 38 38) 71%)',
        // borderRadius: '50%',  // Makes the image circular
        objectFit: 'cover',   // Maintains aspect ratio and covers the circle
        borderRadius: '50%',
    }}/>
        </figure>
        </div>

        {/* <div className="section padding">
            <div className="leftBorder">
                <h2 className="h2_border large">Experience</h2>
                <h1 className="xlarge"></h1>
            </div>
        </div> */}

        <div className="section padding">
            <div className="leftBorder">
                <h2 className="h2_border large">Largest Project</h2>
                <h1 className="xlarge">Butler Voice to Voice Chat</h1>
                <p style={{marginBottom: "25px"}}>My most current and fulfilling project to date would have to be this one. i have spent a great amount of time developing, styling, and refining this project, with only the help of constructive cristicism. This project started with an over the phone AI chatbot, which had overly long response times. I ultimately decided to change the idea around to a web application with interchangeable voices and personalities. Overall this project has given me good insight into how to develop with AI, as well as refine my front and backend capabilities as a developer. On a side note, I also looked into and ended up building my own GPT model through Python, but in the end decided that i could not train it proficiently enough with my current setup to build my project off of.</p>
                <a href="https://sunfleurchat-8f12c33801be.herokuapp.com/" target="_blank" class="gradientBackground" style={{margin: "5%"}}>Try Yourself</a>
                {/* <p className='gradientBackground'>Try Yourself</p> */}
            <figure className="imgAlign" style={{padding: "30px 0px 15px"}}>
                <img  src={require("../img/butlerImage1.png")} alt="A head " width="100%"/>
            </figure>
            <figure className="imgAlign" style={{padding: "15px 0px"}}>
                <img className="stockImg" src={require("../img/butlerImage2.png")} alt="A head " width="100%"/>
            </figure>
            </div>
        
        </div>
    </section>
    )
}

export default HomePage;

{/* <p>in the summer, I really enjoy going out and exploring rivers to find the most beautiful swimming holes, where I can then jump in and relax</p> */}
{/* <p>I also love to go mountain skiing, where i either teach individuals how to ski, or have fun on the mountain with friends</p> */}