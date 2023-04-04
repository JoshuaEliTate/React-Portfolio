import '../styles/Portfolio.css'

const Portfolio = ()=> {
    return (
                <div class="section padding">
                    <h2 class="h2_border">Work</h2>
                    <section class="flex">        
                        <a href="#" class="flex-item linesImg">
                            <div>
                            <h3>Surf Report</h3>
                            <span>MERN Stack</span>
                            </div>
                        </a>
                        
                        <a href="https://chatdown.herokuapp.com/" target="_blank" class="flex-item linesImg">
                            <div>
                            <h3>ChatDown</h3>
                            <span>MySql/CSS/JS/Joi/HandleBars</span>
                            </div>
                        </a>
                        <a href="#" class="flex-item linesImg">
                            <div>
                            <h3>Calculator</h3>
                            <span>React/JavaScript/CSS</span>
                            </div>
                        </a>
                
                        <a href="#" class="flex-item linesImg">
                            <div>
                            <h3>Pastel Puzzels</h3>
                            <span>MERN Stack</span>
                            </div>
                        </a>
                
                    
                        <a href="#" class="flex-item linesImg">
                            <div>
                            <h3>Run Buddy</h3>
                            <span>HTML/CSS</span>
                            </div>
                        </a>
                        </section>
                </div>       
    )
}

export default Portfolio;