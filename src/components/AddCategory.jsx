import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue ] = useState('');

    //Function to capture the information of the input and allow write 
    const onInputValue = ( event ) => {
        setinputValue( event.target.value );
    };

    //Function to prevent the restart of the page and not loss the information of the input
    const onSubmit = ( event ) => {
        event.preventDefault();

        if ( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() ); 

        //clean the input
        setinputValue('');

    };


    return (
        <form onSubmit={ onSubmit }> 
            <input 
                type="text" 
                placeholder="Buscar"
                value={inputValue}
                onChange={ onInputValue }
            />
        </form>
    )
}
