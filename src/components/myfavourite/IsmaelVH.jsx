import React from 'react';
import Avatar from '@mui/material/Avatar';

function IsmaelVH({ firstName, lastName, bgColor = 'blue', textColor = 'white', size = 'medium', onClick }) {
  // Función para obtener iniciales
  const getInitials = (name, surname) => {
    return `${name.charAt(0)}${surname.charAt(0)}`.toUpperCase();
  };

  // Definir el tamaño del avatar
  const avatarSize = {
    small: { width: 40, height: 40, fontSize: 16 },
    medium: { width: 60, height: 60, fontSize: 20 },
    large: { width: 80, height: 80, fontSize: 28 }
  }[size];

  return (
    <Avatar
      onClick={onClick}
      sx={{
        bgcolor: bgColor,
        color: textColor,
        width: avatarSize.width,
        height: avatarSize.height,
        fontSize: avatarSize.fontSize,
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {getInitials(firstName, lastName)}
    </Avatar>
  );
}

export default IsmaelVH;