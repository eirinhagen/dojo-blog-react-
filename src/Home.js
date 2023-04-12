const Home = () => {

    const handleClick = (name) => { console.log('hei '+ name)}
    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <button onClick={()=>handleClick('kisa')}>Click</button>
            
        </div>
     );
}
 
export default Home;