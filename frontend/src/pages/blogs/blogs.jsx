import './blogs.css'
import blogSites from './blogsData'

export default function Blogs(){
    return (
        <div className="blogs">
            
            <div className="blogs-header">
        <h1>Latest Blogs and News</h1>
        <p className="blogs-subtitle">
          Explore the current trends and latest news.
        </p>
      </div>
            <div className="blog-cards">
                {blogSites.map((item,idx) => (
                    <div className='blog-card'>
                        <div className="blog-card-image">
                            <img src={item.logo} alt="" />
                        </div>
                        <div className="blog-card-info">
                            <span>{item.site_name}</span>
                        <p>{item.description}</p>
                        <a href={item.link}>View <span className="arrow">→</span></a>
                        </div>
                        
                    </div>

                ))}
            </div>
        </div>
    )
}