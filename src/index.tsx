import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import for React 18+
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import moodReducer from './reducer';  // Ensure the path is correct
import HappyIncrementor from './HappyIncrementor';
import SadIncrementor from './SadIncrementor';
import HappyTracker from './HappyTracker';
import SadTracker from './SadTracker';

const store = createStore(moodReducer);

const App: React.FC = () => (
  <Provider store={store}>
    <div>
      <HappyTracker />
      <SadTracker />
      <HappyIncrementor />
      <SadIncrementor />
    </div>
  </Provider>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}