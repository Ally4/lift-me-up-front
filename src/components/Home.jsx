import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="Home">
    <h2>Welcome Home</h2>
    Go to <Link to="/landing" >Langing</Link> page
    </div>
  )
}

export default Home