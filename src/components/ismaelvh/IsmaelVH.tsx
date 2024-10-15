import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IconButton from '@mui/material/IconButton';

const IsmaelVH = ({  onClick = () => {}, disabled = false }: any) => {



  return (
    <div>
    
      <IconButton onClick={onClick} disabled={disabled} aria-label="add to favorites">
        <ChatBubbleOutlineIcon />
      </IconButton>
    </div>
  );
};

export default IsmaelVH;