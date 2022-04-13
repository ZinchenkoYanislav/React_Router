import api from '../../../api';

export function fetchUsers() {
    return api.get('users');
}
