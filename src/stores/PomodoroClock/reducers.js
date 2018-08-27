import Types from './Constants'

const pomodoroClock = (state = {}, action) => {
	switch(action.type) {
		case Types.BREAKINCREMENT:
			return (state.breakLength !== 60 && !state.active) ? 
					(state.timeLeftType === 'Break') ? 
						{
							...state,
							breakLength: state.breakLength + 1,
							timeLeft: (state.breakLength + 1) * 60
						} : {
							...state,
							breakLength: state.breakLength + 1,
						}
					: state
		case Types.BREAKDECREMENT:
			return (state.breakLength !== 1 && !state.active) ? 
					(state.timeLeftType === 'Break') ? 
						{
							...state,
							breakLength: state.breakLength - 1,
							timeLeft: (state.breakLength - 1) * 60
						} : {
							...state,
							breakLength: state.breakLength - 1,
						}
					: state
		case Types.SESSIONINCREMENT:
			return (state.sessionLength !== 60 && !state.active) ? 
					(state.timeLeftType === 'Session') ?
						{
							...state,
							sessionLength: state.sessionLength + 1,
							timeLeft: (state.sessionLength + 1) * 60
						} : {
							...state,
							sessionLength: state.sessionLength + 1,
						} 
					: state
		case Types.SESSIONDECREMENT:
			return (state.sessionLength !== 1 && !state.active) ? 
					(state.timeLeftType === 'Session') ?
						{
							...state,
							sessionLength: state.sessionLength - 1,
							timeLeft: (state.sessionLength - 1) * 60
						} : {
							...state,
							sessionLength: state.sessionLength - 1,
						} 
					: state
		case Types.STARTSTOP:
			return (state.active) ?
				{
					...state,
					active: false,
				} : 		
				{
					...state,
					active: true
				}				
		case Types.TICK:
			return (state.timeLeft === 0) ?
					(state.timeLeftType === 'Session') ? 
						{
							...state,
							timeLeftType: 'Break',
							timeLeft: state.breakLength * 60
						} : 
						{
							...state,							
							timeLeftType: 'Session',
							timeLeft: state.sessionLength * 60							
						}
					:
					{
						...state,
						timeLeft: state.timeLeft - 1
					}
		case Types.RESET: 
			return {
				...state,
				breakLength: 5,
				sessionLength: 25,
				timeLeft: 1500,
				timeLeftType: 'Session',
				countdown: false,
				active: false
			}
		default:
			return state
	}
}

export default pomodoroClock