import Headshot from '/headshot.jpg'
import './home.css'

function Home() {
  return (
    <div className='home'>
      <div className="container text-center">
        <div className='row'>
          <div className='col-sm-4'>
            <img src={Headshot} alt="Headshot" className='headshot'/>
          </div>
          <div className='col-sm-8 p-5 brandStatement'>
            <div className=''>
              <h2>Rowan Kinross </h2>
              <br></br>
              <p>
                ~ Junior Front-End Developer, UK | Seeking opportunities in the charity & social enterprise sector
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;