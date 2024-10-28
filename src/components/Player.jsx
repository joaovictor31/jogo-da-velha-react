import { useState } from "react"

export default function Player({name, symbol}){
      // isEditing inicia como false (não estamos no modo de edição)
    const [isEditing, setIsEditing] = useState(false);
    
    function active(){
        setIsEditing(true) // muda isEditing para true ao clicar em Edit
    }

    console.log(isEditing); // mostra o valor atual de isEditing no console


    return(
        <li>
        <span className="player">
            {/* Só mostra o name quando isEditing é falso */}
         {!isEditing && <span className="player-name">{name}</span>}
         {isEditing && <span><input type="text" required/></span>}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={active}>Edit</button>
         {/* Não preciso executar a função, apenas colocar o valor dela*/}
      
      </li>
    )
}