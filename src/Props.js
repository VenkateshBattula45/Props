import react from "react";
import './App.css';

function Propos (props) {
    return(
        <><div className="Student">
             <h1>Student Data</h1>
        <p>Name: {props.name}</p>
        <h3>Age:{props.age}</h3>
        <h3>Qualification:{props.qualification}</h3>
        <h2>City:{props.city}</h2>
        </div>

        </>
    )
}

export default Propos;