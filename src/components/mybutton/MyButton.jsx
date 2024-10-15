import { Button } from "@mui/material";
import { useState } from "react";
import React from "react";
//controlar si esta hover el button

//se le añaden propiedades por defecto 
function MyButton({
    isFollowing,
    children,
    textColor = 'black',
    backgroundColor = 'transparent',
    borderWidth = '1px',
    size = 'medium',
    textColorHover = 'white',
    backgroundColorHover = 'blue',
    disabled = false,
    onClick
}) {

    const [isHovered, setIsHovered] = useState(false);


    return (
        <Button
            onMouseEnter={() => setIsHovered(true)}  
            onMouseLeave={() => setIsHovered(false)} 
            variant='outlined'
            size={size}
            disabled={disabled}
            onClick={onClick}
            sx={{
                borderRadius: 10,
                color: textColor,
                backgroundColor: backgroundColor,
                borderWidth: borderWidth,
                borderColor: textColor, 
                '&:hover': {
                    backgroundColor: backgroundColorHover,
                    color: textColorHover,
                    borderColor: textColorHover
                    
                }, 
            }}
        >
            {isFollowing ? (isHovered ? "Dejar de seguir" : children): children}       </Button>
    );
}

export default MyButton; 