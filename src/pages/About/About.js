import './about.css';
import {avatarData as data} from '../../Db';
import Avatar from '../../components/Avatar/Avatar'
import aboutImg from '../../images/home.png';
const About = () => {
  return (
    <>
        <div className="about-container">
            <div className="about-wrapper">
                <div className="about-detail-wrapper">
                    <div className="about-title">
                        <span>About</span>
                    </div>
                    <div className="about-heading">
                        Flexagn is designed to make daily learning intuitive, self-driven and fun!
                    </div>
                    <div className="about-desc">
                    Flexagn offers the best in educational apps for children ages 12 and under! Our fun, child-friendly, interactive educational content fuels their curiosity. It enables them to explore their interests and develop their critical thinking and problem-solving skills through access to various new content every day of the year.
                    </div>
                </div>
                <div className="about-image-wrapper">
                <img src={aboutImg} alt="loading..." className="about-img" />
                </div>
            </div>
            <div className="about-bottom">

            <div className="bottom-wrapper">
              {
                  data.map((e)=>{
                      return <Avatar item={e} key={e.id}/>
                  })
              }
            </div>
            </div>
        </div>
    </>
  )
}

export default About
