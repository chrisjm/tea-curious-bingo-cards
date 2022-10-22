import { writable } from 'svelte-local-storage-store';

export const currentSelection = writable<Record<string, boolean[][]>>('currentSelection', {});
