import React from 'react';
import MyFavourite from '../MyFavourite';

const Example = () => {
    const handleClick = () => {
        alert("Favorito añadido!");
    };

    return (
        <div>
            <h3>MyFavourite Example</h3>
            <MyFavourite
                iconColor="red"
                disabled={false}
                onClick={handleClick}
            />
            <MyFavourite
                iconColor="gray"
                disabled={true}
                onClick={() => alert("No se puede añadir, está deshabilitado")}
            />
        </div>
    );
};

export default Example;