import { Button } from "@mui/material";

function MyButton({
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
    return (
        <Button
            variant='outlined'
            size={size}
            disabled={disabled}
            onClick={onClick}
            sx={{
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
            {children}
        </Button>
    );
}

export default MyButton; 