import { combineReducers } from 'redux';
import SoundReducer from './SoundReducer';
import SoundFiles from './SoundFiles';
import SelectionReducer from './SelectionReducer'

export default combineReducers({
    soundTypes: SoundReducer,
    sounds: SoundFiles,
    selectedType: SelectionReducer

});