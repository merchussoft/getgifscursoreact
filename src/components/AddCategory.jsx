import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] =  useState('') ;

    const onInputChange = ({target}) => {
        //console.log( target.value );
        //setInputValue('hola mundo');
        setInputValue( target.value );
    }

    const onSubmitForm = (ev) => {
        ev.preventDefault();

        if(inputValue.trim().length <= 1) return;
        //setCategories( categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }


    {/* onChange={(event) => onInputChange(event)} */}
    {/* onSubmit={(event) => onSubmitForm(event)} */}

    return (

        <form onSubmit={onSubmitForm}>
            <input 
                type="text" 
                placeholder="buscar gifs" 
                value ={inputValue} 
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )

}