import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementSad } from './actions';
import Button from './Button';

const SadIncrementor: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Are you sad?</p>
      <Button 
        onClick={() => dispatch(incrementSad())} 
        label="Yes" 
        color="#1E90FF"
      />
    </div>
  );
};

export default SadIncrementor;
