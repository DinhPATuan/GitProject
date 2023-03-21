import {useFormik} from 'formik';
import React from 'react';

const Book = () =>{
    const REGEX = {amount: /^[0-9]/,};
    const {errors,values, handleSubmit,handleChange} = useFormik({
        initialValues:{
            title:"",
            amount:""
        },
        validate:(values)=>{
            const errors = {};
            if (!values.title) {
                errors.title = "Required";
            }

            if (!values.amount) {
                errors.amount = "Required";
            } else if (!REGEX.amount.test(values.amount)) {
                errors.amount = "Chỉ được sủ dụng số";
            }
            return errors;
        },
        onSubmit:(values)=>{
            console.log(values)
        }
    })

    const [books,setBooks] = React.useState({
        title:[new Set()],
        amount:[new Set()],
        edit:[new Set()],
        deleted:[new Set()]
    })

    const edited = () => {}
    const deleteBook = () => {}

    const addItem = () =>{
        const {title} = {...books}
        const {amount} = {...books}
        const {edit} = {...books}
        const {deleted} = {...books}
        const myTitle = new Set(title)
        const myAmount = new Set(amount)
        const myEdit = new Set(edit)
        const myDelete = new Set(deleted)
        if(myTitle.has(values.title)){
            alert('Da co roi')
        } else if(REGEX.amount.test(values.amount)) {
            myTitle.add(values.title)
            myAmount.add(values.amount)
            myEdit.add(<button onClick={edited}>Edit</button>)
            myDelete.add(<button onClick={deleteBook}>Delete</button>)
        }

        setBooks({
            ...books,
            title: Array.from(myTitle),
            amount: Array.from(myAmount),
            edit: Array.from(myEdit),
            deleted: Array.from(myDelete)
        })
    }
    
    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Libary</h1>
                    <div>
                       <label>Tiêu đề</label>
                        <input name='title' value={values.title} onChange={handleChange}/>
                        {errors.title && <p>{errors.title}</p>}
                   </div>
                    <div>
                        <label>Số lượng</label>
                        <input name='amount' value={values.amount} onChange={handleChange}/>
                        {errors.amount && <p>{errors.amount}</p>}
                    </div>
                    <button type='submit' onClick={addItem}>Add</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Number</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>                                
                                <td>{books.title.map((title,index)=>(
                                    <p key={index}>{title}</p>
                                ))}</td>
                                <td>{books.amount.map((amount,index)=>(
                                    <p key={index}>{amount}</p>
                                ))}</td>                               
                                <td>{books.edit.map((edit,index)=>(
                                    <p key={index}>{edit}</p>
                                ))}</td>
                                <td>{books.deleted.map((deleted,index)=>(
                                    <p key={index}>{deleted}</p>
                                ))}</td>                               
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}
export default Book;