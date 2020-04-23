import axios from '../utils/request';

export const menuData = () => axios.get('/static/menu.json')