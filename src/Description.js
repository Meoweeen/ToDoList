import NavBar from "./NavBar";
import Snoop from "./Snoop"

export default function Description() {
  return (
  <>
    <NavBar/>
    <Snoop/>
    
    <div className="crutch">
      <div className="header">
        <h2>Invoices</h2>
      </div>
      <div className="info">
        Description
      </div>
    </div>
  </>
  );
}