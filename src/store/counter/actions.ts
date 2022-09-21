import slice from 'store/counter/slice';
import { incrementAsync, incrementIfOdd } from 'store/counter/thunks';

const { decrement, increment, incrementByAmount } = slice.actions;
export { decrement, increment, incrementByAmount, incrementAsync, incrementIfOdd };
