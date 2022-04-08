import { GitHub, LinkedIn, Mail } from '@mui/icons-material';
const Avatar = ({item}) => {
  return (
   <>
        <div className="author-wrapper">
                    <div className="author-img">
                        <img src={item.img} alt="loading..." className="avatar" />
                    </div>
                    <div className="author-detail">
                        <h2>{item.name}</h2>
                        <p>{item.position}</p>
                        <div className="author-social">
                        <Mail className="author-social-icon"/>
                            <GitHub className="author-social-icon"/>
                            <LinkedIn className="author-social-icon"/>
                        </div>
                    </div>
                    <div className="author-desc">
                    <h1>{item.name}</h1>
                   {item.description}
                    </div>
                </div>
   </>
  )
}

export default Avatar
