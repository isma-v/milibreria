import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

function MyFavourite({ iconColor = 'default', disabled = false, onClick }) {
  return (
    <IconButton onClick={onClick} disabled={disabled}>
      <FavoriteIcon style={{ color: iconColor }} />
    </IconButton>
  );
}

export default MyFavourite;