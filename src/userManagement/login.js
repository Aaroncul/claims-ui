import { useState } from "react";
import { useDispatch} from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import { login } from "../data/DataFunctions";

const Login = () => {

    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    
    const updateUsername = (event) => {
        setUsername(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(username, password)
            .then (result => {
                if (result.status === 200) {
                    dispatch(
                        {type : "login",
                        value : {username : username, password: password, 
                            role : result.data.role, 
                            name : result.data.username} 
                    });
                    if(searchParams.get("target")==null)
                    {
                        navigate("/home");
                    }
                    navigate(searchParams.get("target"));   
                }
            })
            .catch (error => {
                console.log("error ", error);
            })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input onChange={updateUsername} value={username} id="username"></input>

                <label htmlFor="password">Password</label>
                <input onChange={updatePassword} value={password} id="password"></input>

                <button type="submit">log in</button>
            </form>
        </div>
    )


}

export default Login;