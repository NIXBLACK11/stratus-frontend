import { atom } from 'recoil';

export const signinState = atom<boolean>({
    key: 'signinState',
    default: false,
});

export const menuState = atom<string>({
    key: 'menuState',
    default: 'Projects',
});

export const emailState = atom<string>({
    key: 'emailState',
    default: '',
});

export const errorState = atom<string | null>({
    key: 'errorState',
    default: null,
})