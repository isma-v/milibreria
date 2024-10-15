import React from 'react';
import MyFavouriteBorder from '../MyFavouriteBorder';

const Example = () => {
    return (
        <div>
            <MyFavouriteBorder
                iconColor="purple"
                disabled={false}
                onClick={() => alert("Favorito agregado!")}
            />
            <MyFavouriteBorder
                iconColor="gray"
                disabled={true}
                onClick={() => alert("No se puede agregar, está deshabilitado")}
            />
        </div>
    );
};

export default Example;