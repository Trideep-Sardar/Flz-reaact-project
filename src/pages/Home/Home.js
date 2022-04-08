import { Link } from 'react-router-dom';
import homeImg from '../../images/home.png';
import './home.css';
const Home = () => {
  return (
   <>
       <div className="home-container">
           <div className="home-wrapper">
               <div className="info-wrapper">
                   <p className="info">
                       Flexagn is a global learning platform that brings kids together through play
                   </p>
                   <Link to='/about'><button className="home-btn">Get Started</button></Link>
               </div>
               <div className="image-wrapper">
                   <img src={homeImg} alt="" className="home-image" />
               </div>
           </div>
       </div>
   </>
  )
}

export default Home
