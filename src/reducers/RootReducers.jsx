import {combineReducers} from 'redux'
import FormReducers from './FormReducers'

const rootReducers= combineReducers({
    form: FormReducers
})

export default rootReducers;