import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, color }) => {
  return (
    <button 
      onClick={onClick} 
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '10px 20px',
        margin: '5px',
        border: 'none',
        borderRadius: '5px'
      }}>
      {label}
    </button>
  );
};

export default Button;
