import React from 'react'

function Hero() {
  return (
    <>
    <div className="container">
  
  <div className="main-content">
    <div className="article-card">
      <div className="image-wrapper">
       
        <img
          className="article-image"
          src="https://via.placeholder.com/800x400"
          alt="Article"
        />
        <button className="play-button">
          <svg
            className="play-icon"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
      <div className="article-details">
        <h2 className="article-title">Title Heading</h2>
        <p className="article-description">Title description, April 7, 2014</p>
        <p className="article-content">
          Mauris neque quam, fermentum ut nisi vitae, convallis maximus
          nisl. Sed mattis nunc id lorem euismod placerat.
        </p>
        <button className="read-more">Read More</button>
      </div>
    </div>
  </div>


  <div className="sidebar">
   
    <div className="profile-section">
      <h3 className="profile-name">My Name</h3>
      <p className="profile-description">
        Just me, myself, and I, exploring the universe of unknownment...
      </p>
    </div>

  
    <div className="popular-posts">
      <h3 className="section-title">Popular Posts</h3>
      <ul>
        <li><a href="#" className="post-link">Lorem</a><p className="post-meta">Sed mattis nunc</p></li>
        <li><a href="#" className="post-link">Ipsum</a><p className="post-meta">Sed mattis nunc</p></li>
        <li><a href="#" className="post-link">Dorum</a><p className="post-meta">Sed mattis nunc</p></li>
        <li><a href="#" className="post-link">Mingsum</a><p className="post-meta">Sed mattis nunc</p></li>
      </ul>
    </div>

  
    <div className="tags-section">
      <h3 className="section-title">Tags</h3>
      <div className="tags">
        <span className="tag">Travel</span>
        <span className="tag">New York</span>
        <span className="tag">London</span>
        <span className="tag">DIY</span>
        <span className="tag">Family</span>
        <span className="tag">Ideas</span>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Hero