const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Eirin's blog</h1>
            <div className="links">
                <a href="/">Home</a>
        <a href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#6B76BE',
          borderRadius: '8px' 
        }}>New Blog</a>
                
            </div>
        </nav>
     );
}
 
export default Navbar;