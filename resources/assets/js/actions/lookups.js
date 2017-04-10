import Axios from 'Axios';

/**
 * Get editions
 * @returns {{type: string, payload: *}}
 */
export function getEditions() {
    const data = Axios.get('api/editions/').then((response) => response.data);

    return {
        type: 'GET_LOOKUP_EDITIONS',
        payload: data
    };
}

/**
 * Get settings
 * @returns {{type: string, payload: *}}
 */
export function getSettings() {
    const data = Axios.get('api/settings/').then((response) => response.data);

    return {
        type: 'GET_LOOKUP_SETTINGS',
        payload: data
    };
}

/**
 * Get adventure length filters
 * @returns {{type: string, payload: *}}
 */
export function getAdventureLengths() {
    const data = Axios.get('api/moduleLengths/').then((response) => response.data);

    return {
        type: 'GET_LOOKUP_LENGTHS',
        payload: data
    };
}