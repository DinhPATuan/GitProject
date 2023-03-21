import { Formik } from 'formik';
import React from 'react';

const Formlh = () =>{
    const [form, setForm] = React.useState({})
    const REGEX = {
            email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            phone: /^[0-9]/,
    };

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleValidate = () =>{
        const errors = {};
        if (!form.user) {
            errors.user = "Required";
        }

        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Email không hợp lệ";
        }
          
        if(!form.phone){
            errors.phone = "Required";
        } else if(!REGEX.phone.test(form.phone)) {
            errors.phone = "Chỉ được sủ dụng số"
        }

         return errors;
    }

    const handleSubmit = ()  => {
        alert("Login in successfully!!!");
      }

      
    return(
        <div>
            <Formik initialValues = {form} validate = {handleValidate} onSubmit = {handleSubmit}>
                {({ errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <h1>Contact form</h1>
                        <div >
                            <label>Name</label>
                            <input name='user' value={form.user || ""} onChange={(e) => handleChange(e)}/>
                            <p className='error'>{errors.user}</p>
                        </div>
                        <div>
                            <label>Email</label>
                            <input name='email' value={form.email || ""} onChange={(e) => handleChange(e)}/>
                            <p className='error'>{errors.email}</p>
                        </div>
                        <div>
                            <label>Phone</label>
                            <input name='phone' value={form.phone || ""} onChange={(e) => handleChange(e)}/>
                            <p className='error'>{errors.phone}</p>
                        </div>
                        <div>
                            <label>Message</label>
                            <input name='message' value={form.Message} onChange={(e) => handleChange(e)}/>
                        </div>
                        <button>Submit</button>
                    </form>)}
            </Formik>
        </div>
    )

}

export default Formlh;