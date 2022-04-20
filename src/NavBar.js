import { Link } from "react-router-dom";

export default function NavBar() {
 return (
    <>
      <input type="checkbox" id="nav-toggle" hidden></input>
      <div className="nav">
        <label for="nav-toggle" className="nav-toggle" onclick></label>
        <h2 class="logo"><a href="google.com">qwe</a></h2>
        <ul>
          <li><Link to="/">Invoices</Link></li>
          <li><Link to="/Description">Invoices</Link></li>
        </ul>
      </div>
    </>
  );  
}