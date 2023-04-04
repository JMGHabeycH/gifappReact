import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    //Evento que detecta el cambio en el teclado
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }
    //Evento del form para detectar el submit
    //Ademas ejecuta el agregar la nueva info
    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim();
        if(newInputValue.length <= 1) return;
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory( newInputValue );
        setInputValue('');
    }

    return (
        
        <form onSubmit={ onSubmit }>

            <input 
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
        
    )
}
