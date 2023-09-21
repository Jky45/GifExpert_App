import { useState } from 'react';
import { AddCategories } from './components/AddCategories';


export const GifExpert_App = () => {

  const [categorias, setCategories] = useState(['Buli','Jky','Amoxito'])
  
  
  const handle_adds = () =>{

    setCategories([...categorias , 'almohadita'])
  }
  
  
  console.log(categorias)

  return (
  <>
  <h1>GifExpert-App</h1>

  <AddCategories setCategories={setCategories}/>
  <hr/>
  <button className="btn btn-outline-primary" onClick={handle_adds}>Agregar</button>

  <ol>
    {
      categorias.map(category => {return <li key={category}> {category}</li>})
    }
    


  </ol>


  </>);
}

