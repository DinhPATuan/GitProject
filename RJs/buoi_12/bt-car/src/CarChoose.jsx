import React from "react";

const Car = () =>{
    const [select, setSelect] = React.useState(
        {car: 'Toyota',
        color:'Red'}
    );
    
    const selectCar = (e) => {
        setSelect({
            ...select,
            car : e.target.value
        })
    };

    const selectColor = (e) => {
        setSelect({
            ...select,
            color : e.target.value
        })
    };

    return(
        <div>
            <h1>Select your car</h1>
            <label>Choose a car:</label>
                <select onChange={e => selectCar(e)} value={select.car}>
                    <option value="Toyota">Toyota</option>
                    <option value="Suzuki">Suzuki</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Honda">Honda</option>
                </select>
                <br />
                <br />
            <label>Choose a color:</label>
                <select  onChange={e => selectColor(e)} value={select.color} >
                    <option value="Red">Red</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Blue">Blue</option>
                </select>  
            <h1>You selected a {select.color} - {select.car}</h1>  
        </div>
    )
}
export default Car;