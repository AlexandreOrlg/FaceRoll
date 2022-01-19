import { writable } from 'svelte/store';

export const canvas = writable(document.createElement("canvas"));