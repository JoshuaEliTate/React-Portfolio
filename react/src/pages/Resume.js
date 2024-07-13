import PDF from '../documents/resume.pdf'
const styles = {
    center: {
        "padding-top": "80px"
      },
    align: {
        "text-align": "center",
        padding: "0% 25%",
        "padding-top": "10%"
    },
    decoration:{
        "text-decoration": "none",
        color: "#B3BFB8"
    }
  };

const Resume = ()=> {
    return (
        <div style={styles.align}>  
        <a style={styles.decoration} href={PDF} target="_blank">View Resume</a>
            <a href={PDF} target="_blank" class="resumeSize resumeIcon">

            </a>
        </div>
    )
}

export default Resume;
