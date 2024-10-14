import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function MyFavouriteBorder({ iconColor = 'default', disabled = false, onClick = () => {} }) {
  return (
    <IconButton onClick={onClick} disabled={disabled}>
      <FavoriteBorderIcon style={{ color: iconColor }} />
    </IconButton>
  );
}

// PropTypes para validar las props
MyFavouriteBorder.propTypes = {
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MyFavouriteBorder;