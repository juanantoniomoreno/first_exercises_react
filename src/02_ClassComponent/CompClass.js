import React, {Component, Fragment} from "react";
import './comp_class.css'

export default class CompdeClase extends Component {

    render(){

        const name = 'María'

        const buttonStyle = {
            backgroundColor: 'green',
            color: 'white',
            width: "fit-content",
            height: '50px',
            borderRadius: '15px'
        }

        const saludar = (name) => console.log('Buenas tardes', name);

        const despedir = () => console.log('Hata luego');

        return (
            <Fragment>
                <div className="cont_comp_clase">
                    <div style = {{ 
                        border: "1px solid black",
                        backgroundColor: "#bbdf80"
                        }}>
                        <h1>Componente de clase</h1>
                        <p>Nombre: {name}</p>
                    </div>

                    <button 
                    style={buttonStyle} 
                    onClick = {() => saludar('Juan')} 
                    >Saludar</button>

                    <button style={buttonStyle} 
                    onClick = {despedir} 
                    >Despedir</button>
                </div>
            </Fragment>
        )
    }
}