import React from 'react';
import { useSelector } from 'react-redux';

const HappyTracker: React.FC = () => {
  const happyCount = useSelector((state: any) => state.happyCount);

  return (
    <div style={{ backgroundColor: '#D2691E', color: 'white', padding: '10px' }}>
      You were happy {happyCount} times
    </div>
  );
};

export default HappyTracker;
