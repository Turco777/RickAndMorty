
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

function Nav(props){
    return (
        <div>
            
            <SearchBar onSearch={props.onSearch} />
            
            <Link to='/about'> 
                <h3> ABOUT </h3>
            </Link>
            
            <Link to='/home'>
                <h3> HOME </h3> 
            </Link>
            
        </div>
    );
}

export default Nav;