import "./footer.css"

function Footer() {
  return (
    <div>
    <footer>
      <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="https://www.linkedin.com/in/rowan-kinross-512940284/" target="_blank">
        <h6 className="linkedIn">LinkedIn</h6>
      </a>

      <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="https://github.com/RowanKinross" target="_blank">
        <h6 className="github">GitHub</h6>
      </a>

      <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href={`mailto:rowan.kinross@outlook.com`} target="_blank">
        <h6 className="email">rowan.kinross@outlook.com</h6>
      </a> 

      <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="src/assets/CV/Rowan_Kinross_Web_Developer_CV_2023.pdf" target="_blank">CV</a>
    </footer>
    </div>
  )
}

export default Footer