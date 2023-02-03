import '../Navbar.css'

import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav>
    <input type="checkbox" id="check"/>
    <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
    </label>
    <label className="logo">MyBlog</label>
    <ul>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/post/:postId">Post</Link></li> */}
        <li><Link to="/create-post">Create Post</Link></li>
        
    </ul>
</nav>

  )
}
