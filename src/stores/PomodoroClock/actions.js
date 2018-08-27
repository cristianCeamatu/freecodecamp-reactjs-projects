import Types from './Constants'

export const incrementBreak = () => {
	return {
		type: Types.BREAKINCREMENT
	}
}

export const decrementBreak = () => {
	return {
		type: Types.BREAKDECREMENT
	}
}

export const incrementSession = () => {
	return {
		type: Types.SESSIONINCREMENT
	}
}
export const decrementSession = () => {
	return {
		type: Types.SESSIONDECREMENT
	}
}

export const reset = () => {
	return {
		type: Types.RESET
	}
}

export const startStop = () => {
	return {
		type: Types.STARTSTOP
	}
}

export const tick = () => {
	return {
		type: Types.TICK
	}
}