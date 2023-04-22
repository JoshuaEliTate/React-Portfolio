import '../styles/Portfolio.css'

const Portfolio = ()=> {
    return (
                <div class="section padding">
                    <h2 class="h2_border">Work</h2>
                    <section class="flex">        
                        <a href="https://skillswap100.herokuapp.com/" target="_blank" class="flex-item linesImg">
                            <div>
                            <h3>SkillSwap</h3>
                            <span>MERN Stack/React/Apollo/Mongoose/JWT/GraphQl</span>
                            </div>
                        </a>
                        
                        <a href="https://chatdown.herokuapp.com/" target="_blank" class="flex-item linesImg">
                            <div>
                            <h3>ChatDown</h3>
                            <span>MySql/CSS/JS/Joi/HandleBars</span>
                            </div>
                        </a>
                        <a href="https://joshuaelitate.github.io/ExpRecipe/" class="flex-item linesImg">
                            <div>
                            <h3>ExpRecipe</h3>
                            <span>React/JavaScript/CSS</span>
                            </div>
                        </a>
                        </section>
                </div>       
    )
}

export default Portfolio;