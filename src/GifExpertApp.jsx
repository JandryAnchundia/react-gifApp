
import { createElement, useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory)=> {

      if(categories.includes(newCategory)) return;
      setCategories([newCategory, ...categories ]);
      // Y si se quiere al inicio 
      // setCategories(['One Piece', ...categories ]);
      // setCategories( cat => [...cat, 'Object']);
      // Al ponerle un callback estoy haciendo que la variable nuea que createElement
      // se emplee para multiples situaciones segun las necesidades que haya por otra parte al no hacer un callback lo limito a lo que estaba haciendo antes.
  }
  return (

    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory
        // setCategories = {setCategories}
        onNewCategory = {event=> onAddCategory(event)}
        currentCategories = {categories}
      />
     

      {/* Lista de Gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
  
        {
            categories.map( (category) =>(
               <GifGrid 
                    key= {category}   
                    category = {category}/>
              )
            )
        }
        {/* Si ubico llaves tengo que poner return peri si ubico parentesis no hace falta el return */}
   
      {/* Gif Items */}
    </>
    
    
  )
}

