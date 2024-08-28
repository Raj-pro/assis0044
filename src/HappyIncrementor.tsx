import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementHappy } from './actions';
import Button from './Button';

const HappyIncrementor: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Are you happy?</p>
      <Button 
        onClick={() => dispatch(incrementHappy())} 
        label="Yes" 
        color="#D2691E"
      />
    </div>
  );
};

export default HappyIncrementor;
