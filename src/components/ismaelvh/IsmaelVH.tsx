import  { useState } from 'react';
import { TextField } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IconButton from '@mui/material/IconButton';

const IsmaelVH = ({  onClick = () => {}, disabled = false }: any) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event: any) => {
    setComment(event.target.value);
  };

  return (
    <div>
      <TextField
        value={comment}
        onChange={handleCommentChange}
        label="Comment"
        variant="outlined"
      />
      <IconButton onClick={onClick} disabled={disabled} aria-label="add to favorites">
        <ChatBubbleOutlineIcon />
      </IconButton>
    </div>
  );
};

export default IsmaelVH;