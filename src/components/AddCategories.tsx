import { useState } from "react"

export const AddCategories = ( { setCategories }:any) => {

    const [inputvalue, setInputvalue] = useState('')

    const handleInputChange = ( e :any) =>{
        setInputvalue(e.target.value)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setCategories(cats => [...cats, inputvalue])
        setInputvalue('')
        
        

    }


    return (

    <>

        <form onSubmit={handleSubmit}>
        <input 
            type='text'
            value={inputvalue}
            onChange={ handleInputChange }

        />

        </form>

        
    </>
)


}