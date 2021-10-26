import React, {useState} from 'react'
import './SubForm.css'


export default function DietForm(props) {

    const [formData, setFormData] = useState({
        DietForm: 'nodiet'
    })

    const handleRadio = e => {
        setFormData({
            DietForm: e.target.value
        })
    }


    const preventFunc = e => e.preventDefault()

    return(
        <form onSubmit={preventFunc}
        className="diet-form">
            <p>Quel est ton régime alimentaire</p>

            <label htmlFor="nodiet">Pas de régime en particulier</label>
            <input type="radio"
            onChange={handleRadio} 
            name="diet"
            id="nodiet"
            value="nodiet"/>

            <label htmlFor="omnivore">Omnivore</label>
            <input type="radio"
            onChange={handleRadio} 
            name="diet"
            id="omnivore"
            value="omnivore"/>

            <label htmlFor="vegetarien">Vegetarien</label>
            <input type="radio"
            onChange={handleRadio} 
            name="diet"
            id="vegetarien"
            value="vegetarien"/>

            <label htmlFor="vegan">vegan</label>
            <input type="radio"
            onChange={handleRadio} 
            name="diet"
            id="vegan"
            value="vegan"/>

            <button onClick={ () => props.modifyIndex(3, formData)}>Valider</button>
        </form>
    )
}