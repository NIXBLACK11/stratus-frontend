import { atom } from 'recoil';

export const signinState = atom<boolean>({
    key: 'signinState',
    default: false,
});