import { INCREMENT_HAPPY, INCREMENT_SAD } from './actions';

interface MoodState {
  happyCount: number;
  sadCount: number;
}

const initialState: MoodState = {
  happyCount: 0,
  sadCount: 0,
};

const moodReducer = (state = initialState, action: { type: string }): MoodState => {
  switch (action.type) {
    case INCREMENT_HAPPY:
      return { ...state, happyCount: state.happyCount + 1 };
    case INCREMENT_SAD:
      return { ...state, sadCount: state.sadCount + 1 };
    default:
      return state;
  }
};

export default moodReducer;
