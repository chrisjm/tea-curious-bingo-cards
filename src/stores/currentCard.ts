import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = 'mist';
const initialValue = browser
	? window.localStorage.getItem('currentCard') ?? defaultValue
	: defaultValue;

export const currentCard = writable<string>(initialValue);

currentCard.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('currentCard', value);
	}
});
