import React from 'react';
import MyButton from '../MyButton';

const Example = () => {
  const handleClick = () => alert('Button clicked!');

  return (
    <div>
      <h1>MyButton Examples</h1>

      <h2>Default</h2>
      <MyButton 
        isFollowing={false} 
        onClick={handleClick} 
        textColor="black" 
        backgroundColor="transparent">
        Seguir
      </MyButton>

      <h2>Following</h2>
      <MyButton 
        isFollowing={true} 
        onClick={handleClick} 
        textColor="white" 
        backgroundColor="blue">
        Siguiendo
      </MyButton>

      <h2>Disabled</h2>
      <MyButton 
        isFollowing={false} 
        onClick={handleClick} 
        textColor="gray" 
        backgroundColor="lightgray" 
        disabled>
        Seguir
      </MyButton>

      <h2>Custom Styles</h2>
      <MyButton 
        isFollowing={false} 
        onClick={handleClick} 
        textColor="purple" 
        backgroundColor="yellow" 
        borderWidth="2px" 
        size="large" 
        textColorHover="yellow" 
        backgroundColorHover="purple">
        Custom Button
      </MyButton>
    </div>
  );
};

export default Example;