import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([  ]);

    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories]);
        // setCategories( cat => [...cat, 'Valorant']);
        // console.log(newCategory);

    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        {/* Enviamos una property desde GifExpert hasta AddCategory */}
        < AddCategory 
            // setCategories={ setCategories }
            //Cuando un nombre tiene (on) significa que esta emitiendo algo
            onNewCategory={ (value) => onAddCategory(value) }
        />
        
        {/* Listado de Gif */}
        { 
            categories.map( (category) => (
                <GifGrid key={ category } category={ category }/>
            )) 
        }

        
        
        
        
    </>
  )
}
