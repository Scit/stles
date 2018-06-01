import dataProvider from 'services/dataProvider';
import {
    ACTION_LOAD
} from './constants';

export const updateConfiguration = function(newConfiguration) {
    return {
        type: ACTION_LOAD,
        payload: newConfiguration
    }
};

export const resetConfiguration = function() {
    return {
        type: ACTION_LOAD,
        payload: dataProvider.getDefaultConfiguration()
    }
};
