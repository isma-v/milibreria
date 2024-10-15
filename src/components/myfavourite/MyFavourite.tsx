import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

function MyFavourite({ iconColor = undefined, disabled = false, onClick=() => {} }) {
  return (
    <IconButton onClick={onClick} disabled={disabled} aria-label="add to favorites">
      <FavoriteIcon color={iconColor} />
    </IconButton>
  );
}

export default MyFavourite;