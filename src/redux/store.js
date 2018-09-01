import { 
	createStore, 
	applyMiddleware,
} from 'redux'
import middleware from './middleware'
import initialState from './state'
import rootReducer from './rootReducer'


const storeFactory = (state = initialState) => 
	applyMiddleware(...middleware)(createStore)(rootReducer, state)
const store = storeFactory()

export default store