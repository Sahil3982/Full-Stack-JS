
const Home = (props)=>{
    return(
        <>
            <div className="container">
                <div>
                <img src="assets.Pro.pic.jpg"></img>
                <h3>{props.title}</h3>
               <p> {props.descp}</p></div>
            </div>
        </>
    )
}
export default Home;