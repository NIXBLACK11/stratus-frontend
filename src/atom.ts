import { atom } from 'recoil';
import { Details } from './interface/detailsInterface';

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
});

export const successState = atom<string | null>({
    key: 'successState',
    default: null,
});

export const editState = atom<boolean>({
    key: 'editState',
    default: false,
});

export const editValueState = atom<Details>({
    key: 'editValueState',
    default: {
        username: '',
        projectname: '',
        AlertTriggers: []
    }
});
