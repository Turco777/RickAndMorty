import {useState} from "react";
import validation from "./validation";

const Form = ( {login} ) => {

    const[userData, setUserData] = useState({
        username: '',
        password: '',
    });
    const[errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setUserData({ ...userData, [property]: value});
        validation({...userData, [property]: value}, errors, setErrors); 
        //setErrors(validation({...userData, [property]: value}))
    };

    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
    };


    return (
        <form onSubmit={submitHandler} >
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={userData.username} onChange = {handleInputChange}/>
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={userData.password} onChange = {handleInputChange}/>
                {errors.password && <p>{errors.password}</p>}
            </div>
            
            <button>LOGIN</button>
        </form>
    );
};


export default Form;