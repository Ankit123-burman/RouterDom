import React from 'react'

function Blog() {
  return (
   <>
   <div class="container">
 
  <div class="main-content">
    <div class="article-card">
    
      <div class="article-header">
        <h2 class="article-title">Amazing Article Heading</h2>
        <p class="article-meta">Published on April 7, 2014 by Author Name</p>
      </div>

      <div class="article-body">
        <p class="article-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <p class="article-content">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </div>

      <div class="article-footer">
        <button class="read-more">Read Full Article</button>
      </div>
    </div>
  </div>

  
  <div class="sidebar">
  
    <div class="profile-section">
      <h3 class="profile-name">About the Author</h3>
      <p class="profile-description">
        Hello! I'm an enthusiastic writer sharing insights about various
        topics like technology, travel, and more.
      </p>
    </div>

   
    <div class="latest-posts">
      <h3 class="section-title">Latest Posts</h3>
      <ul>
        <li><a href="#" class="post-link">New Tech Trends in 2024</a></li>
        <li><a href="#" class="post-link">Best Travel Destinations</a></li>
        <li><a href="#" class="post-link">How to Start a Blog</a></li>
        <li><a href="#" class="post-link">Creative Writing Tips</a></li>
      </ul>
    </div>

    
    <div class="tags-section">
      <h3 class="section-title">Tags</h3>
      <div class="tags">
        <span class="tag">Tech</span>
        <span class="tag">Travel</span>
        <span class="tag">Lifestyle</span>
        <span class="tag">Writing</span>
        <span class="tag">Productivity</span>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Blog