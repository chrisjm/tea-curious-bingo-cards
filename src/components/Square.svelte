<script lang="ts">
	import { cards } from '../cards';
	import { currentCard } from '../stores/currentCard';

	export let selected: boolean;
	export let handleSelection: (i: number, j: number) => void;
	export let row: number;
	export let column: number;

	$: selectedClasses = selected ? '!bg-cyan-700 text-white hover:bg-cyan-700' : '';
</script>

<button
	class="flex items-center justify-center text-center rounded h-16 sm:h-20 text-xs sm:text-sm p-2 bg-cyan-200 hover:bg-cyan-300 cursor-pointer font-light focus:outline-cyan-400 {selectedClasses}"
	on:click={() => handleSelection(row, column)}
>
	{cards[$currentCard].data[row][column]}
</button>
