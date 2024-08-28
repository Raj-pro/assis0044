import React from 'react';
import { useSelector } from 'react-redux';

const SadTracker: React.FC = () => {
  const sadCount = useSelector((state: any) => state.sadCount);

  return (
    <div style={{ backgroundColor: '#1E90FF', color: 'white', padding: '10px' }}>
      You were sad {sadCount} times
    </div>
  );
};

export default SadTracker;
