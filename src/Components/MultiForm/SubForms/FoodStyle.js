import React, {useRef} from 'react'
import './SubForm.css'

export default function FoodStyle(props) {

    const preventFunc = (e) => {
        e.preventDefault()
    }
    
    const handleReturn = () => {
        props.modifyIndex(2)
    }

    return (
        <form 
        className="checkbox-form"
        onSubmit={preventFunc}>
            <p>
                Quelles sont tes cuisines préférées ?
            </p>
            <span>Choix multiples.</span>
            <label htmlFor="italian">Italienne</label>
            <input type="checkbox" 
            id="italian"
            value="italian"/>

            <label htmlFor="french">Française</label>
            <input type="checkbox" 
            id="french"
            value="french"/>

            <label htmlFor="japanese">japonaise</label>
            <input type="checkbox" 
            id="japanese"
            value="japanese"/>

            <label htmlFor="thai">Thailandaise</label>
            <input type="checkbox" 
            id="thai"
            value="thai"/>

            <label htmlFor="indian">indienne</label>
            <input type="checkbox" 
            id="indian"
            value="indian"/>

            <label htmlFor="Chineese">Chinoise</label>
            <input type="checkbox" 
            id="Chineese"
            value="Chineese"/>

            <div className="container-nav-btns">
                <button type="button" className="prev" onClick={handleReturn}>precedent</button>
                <button>valider</button>
            </div>

        </form>
    )
}