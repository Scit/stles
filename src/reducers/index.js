import {
    ACTION_LOAD
} from 'actions/constants';

export default function(state = {}, action) {
    if (action.type === ACTION_LOAD) {
        return action.payload
    } else {
        return state;
    }
}
