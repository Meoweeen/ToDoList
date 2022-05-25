import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <input type="checkbox" id="nav-toggle" hidden></input>
      <div className="nav">
        <label for="nav-toggle" className="nav-toggle" onclick></label>
        <h2 class="logo"><a href="google.com">1</a></h2>
        <ul>
          <li><Link to="/">ToDo</Link></li>
          <li><Link to="/Description">Description</Link></li>
        </ul>
      </div>
    </>
  );  
}