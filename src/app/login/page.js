"use client"
import React from "react"
import "./login.css"
import { register } from "../services/firebase/auth";

export default function Register(email, password, displayName) {

    const[state,setState] = React.useState({
        email:"",
        password:"",
        displayName:""
    });

    function onChange(event) {
        
        const value = event.target.value;
        const name = event.target.name;
        
        setState({
            ...state, 
            [name]: value
        })
    
        
    }

    

    function onRegister(event) {
        //const email = state.email;
        //const password = state.password;
        //const displayName = state.displayName;
        event.preventDefault();

        const args ={email, password, displayName}

        register(args);
    }

    return (
     <div >
       <form onSubmit={onRegister} className="container">
            <input name="email" onChange={onChange} value={state.email} type="text" placeholder="Correo"/> <br></br>

            <input name="password" 
            onChange={onChange} 
            value={state.password} 
            type="password" 
            placeholder="Password"
            required
            /> <br></br>

            <input name="displayName"
                onChange={onChange}
                value={state.displayName}
                placeholder="Tu Nombre"
                type="text"
                required
            /> <br></br>
 
            <button action="submit">Enviar Formulario</button>
        </form>
     </div>
    )
  }


