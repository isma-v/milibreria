import { Button } from "@mui/material";
import { useState } from "react";
import React from "react";

// Define la interfaz para las propiedades del componente
interface MyButtonProps {
  isFollowing: boolean;
  children: React.ReactNode;
  textColor?: string;
  backgroundColor?: string;
  borderWidth?: string;
  size?: 'small' | 'medium' | 'large';
  textColorHover?: string;
  backgroundColorHover?: string;
  disabled?: boolean;
  onClick?: () => void;
}

// Componente MyButton
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
}: MyButtonProps) {
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
          backgroundColor: isHovered ? backgroundColorHover : backgroundColor,
          color: isHovered ? textColorHover : textColor,
          borderColor: isHovered ? textColorHover : textColor,
        }, 
      }}
    >
      {isFollowing ? (isHovered ? "Dejar de seguir" : children) : children}
    </Button>
  );
}

export default MyButton;