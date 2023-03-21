import React from "react";

const Form = ()=>{
    const [form,setForm]=React.useState({
        user:"",
        email:"",
        password:"",
        confpassword:""
    })

    const [error,setError]=React.useState({})

    const REGEX = {
        user: /^[a-zA-Z]{8,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#$%^&*)(+=._-]{8,}$/
    };

    const handleChange = (e) =>{
        const myError = {...error};
        if(e.target.name === 'user') {
            if(e.target.value.length === 0){
                myError.username = "Không được để trống"
            }else{
                if(!REGEX[e.target.name].test(e.target.value)){
                myError.username = "Chấp nhận các kí tự từ a-z, A-Z, tối thiểu 8 kí tự"
                } else {
                myError.username = ""
                }
            }
        }

        if(e.target.name === 'email' ){
            if(e.target.value.length === 0){
                myError.email = "Không được để trống"
            }else{
                if(!REGEX[e.target.name].test(e.target.value)){
                    myError.email =  "Chấp nhận các kí tự a-z, A-Z, 0-9, dấu +, - trước @ Cần có kí tự @ Chấp nhận kí tự a-z, A-Z, 0-9, dấu - sau @"
                }else{
                    myError.email = ""
                }
            }
        }

        if(e.target.name === 'password'){
            if(e.target.value.length === 0){
                myError.password = "Không được để trống"
            }else{
                if(!REGEX[e.target.name].test(e.target.value)){
                    myError.password = "Chấp nhận các kí tự a-z, A-Z, 0-9, !, @, #, $,%, ^, &, các kí tự trong (+=._-) Tối thiểu 8 kí tự"
                }else{
                    myError.password = ""
                }
            }
        }

        if(e.target.name === 'confpassword' ){
            if(e.target.value.length === 0){
                myError.confpassword = "Không được để trống"
            }else{
                if(e.target.value !== form.password){myError.confpassword = "Chưa trùng khớp với MK đã nhập"
                console.log(e.target.value)
                console.log(form.password)
            }else{
                    myError.confpassword = ""
                }
            }
        };
        setError({
            ...error,
            ...myError
        })

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const isValid = () => {
        const check = form.user && form.email && form.password && form.confpassword;
        alert(check ? "Sign in success!!!" : "Please fill out all the fields!!!");
    };
      

    return(
        <div>
            <h1>Sign up</h1>
            <form action="">
                <div>
                    <label>User name</label><br />
                    <input name="user" onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)}/>
                    {error?.username && <p className="error">{error.username}</p>}
                </div>
                <div>
                    <label>Email</label><br />
                    <input name="email" onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)}/>
                    {error?.email && <p className="error">{error.email}</p>}
                </div>
                <div>
                    <label>Password</label><br />
                    <input name="password" onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)}/>
                    {error?.password && <p className="error">{error.password}</p>}
                </div>
                <div>
                    <label>Confirm Password</label><br />
                    <input name="confpassword" onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)}/>
                    {error?.confpassword && <p className="error">{error.confpassword}</p>}
                </div>
                <button onClick={isValid}>Submit</button>
            </form>
        </div>
    )
}
export default Form;