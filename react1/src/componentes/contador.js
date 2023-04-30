import { useState, useEffect, useCallback } from "react";
import "./contador.css"

const Contador = (props) =>{
    const [count,setCount] = useState(0);
    const [nombre,SetNombre] = useState(props.nombre);
    const [producto,setProducto] = useState("");
    useEffect(()=>{
        console.log(`El producto agregado fue:${producto}`)
    })
    return(
        <div>
            <h1>Hola {nombre}</h1>
            <button on onClick={()=>SetNombre("Pedro")}>Cambiar Nombre</button>
            <h1>El valor actual es: {count}</h1>
            <button on onClick={()=>setCount(count - 1)}>Restar</button>
            <button on onClick={()=>setCount(count + 1)}>Sumar</button>
            <input type="text" onChange={(e)=>setProducto(e.target.value)} />
            <h1>El producto ingresado fue: {producto }</h1>
        </div>
    )
}

export default Contador;