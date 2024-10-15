import { default as React } from 'react';
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
declare function MyButton({ isFollowing, children, textColor, backgroundColor, borderWidth, size, textColorHover, backgroundColorHover, disabled, onClick }: MyButtonProps): import("react/jsx-runtime").JSX.Element;
export default MyButton;
