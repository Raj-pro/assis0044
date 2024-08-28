import React from 'react';
import HappyIncrementor from './HappyIncrementor';
import SadIncrementor from './SadIncrementor';
import HappyTracker from './HappyTracker';
import SadTracker from './SadTracker';

const App = () => {
  return (
    <div>
      <HappyIncrementor />
      <SadIncrementor />
      <HappyTracker />
      <SadTracker />
    </div>
  );
};

export default App;