import '../styles/Home.css'

const HomePage = ()=> {
    return (
    <section>
        <figure className="flex">
            <img src={require("../img/IMG_2610.jpg")} alt="A head picture of Josh Torres" width="100%"/>
        </figure>
        <section className="flex black">
            <div className="section padding">
                <h2 className="h2_border">About Me</h2>
                <div>
                    <p>Full Stack web developer leveraging a background in customer service to provide great communication and patience. Earned a certificate in Full Stack Web Development from the University Of Washington Coding Boot Camp. Innovative problem-solver who is enthusiastic about developing apps with a primary focus on mobile design first. Strengths in teamwork, creativity, ingenuity, and building projects from ideas to finished Applications.</p>
                </div>
            </div>
        </section>
    </section>
    )
}

export default HomePage;