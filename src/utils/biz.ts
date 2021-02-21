import Final from '@/config/keys';

export const getToken = () => localStorage.getItem(Final.TOKEN) || '';
