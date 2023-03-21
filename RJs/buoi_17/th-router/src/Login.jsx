import { useNavigate } from "react-router-dom";
import React from 'react';

const Login = () =>{
    const navigate = useNavigate()
    const[form,setForm] = React.useState({
        email:'',
        pass:''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    const check = () => {
        if(form.email === 'admin@gmail.com' && form.pass === 'letmein'){
            navigate('/Employee');
        } else {
            alert("Thong tin sai")
        }
    };
    
    return(
        <div>
            <h1>Form</h1>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" name="email" onChange={(e) => handleChange(e)}/>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="text" name='pass' onChange={(e) => handleChange(e)}/>
            </div>
            <button onClick={check}>Login</button>
        </div>
    )
}

export default Login;