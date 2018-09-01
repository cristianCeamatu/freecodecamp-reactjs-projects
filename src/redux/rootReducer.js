import {combineReducers} from 'redux'
import {reducer as pomodoroClockReducer} from '../components/front-end-libraries/PomodoroClock/redux'


export default combineReducers(
		{
			pomodoroClock: pomodoroClockReducer
		}
	)