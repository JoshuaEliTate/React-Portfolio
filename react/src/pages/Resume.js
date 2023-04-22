import PDF from '../documents/resume.pdf'
const styles = {
    flex: {
      display: "flex",        
      "flex-direction": "column",    
      // "flex-wrab": "wrap"
      margin: "60px"
      },
    align: {
        "text-align": "center"
    }
  };

const Resume = ()=> {
    return (
        <div style={styles.flex}>  
            <a href={PDF} target="_blank" class="flex-item linesImg">
                <div>
                    <h3>My Resume</h3>
                </div>
            </a>
        </div>
    )
}

export default Resume;


{/* <b>● HTML/CSS/Git </b>
<b>● JavaScribt </b>
<b>● Bootstrab</b>
<b>● The DOM</b>
<b>● APIs</b>
<b>● JQuery</b>
<b>● JSON</b>
<b>● AJAX</b>
<b>● Node</b>
<b>● ES6</b>
<b>● Exbress</b>
<b>● MySQL</b>
<b>● MVC baradigm</b>
<b>● Sequelize</b>
<b>● Testing</b>
<b>● Agile develobment</b>
<b>● Agile develobment</b>
<b>● Progressive Web Abs</b>
<b>● React</b>
<b>● NoSQL</b>
<b>● MERN Stack</b> */}