<script lang="ts">
	import type { Card } from '../cards';
	import Square from './Square.svelte';

	export let cards: Record<string, Card>;
	export let selectedCard: string;
	export let currentSelection: boolean[][];
	export let handleSelection: (i: number, j: number) => void;
</script>

<div class="grid grid-cols-5 gap-1 sm:gap-3 mt-4 relative">
	<div class="col-span-5 p-2 rounded text-center uppercase bg-sky-700 text-white">Start</div>
	{#each cards[selectedCard]?.data ?? [] as row, i}
		{#each row as square, j}
			<Square
				selected={currentSelection[i][j]}
				{selectedCard}
				{handleSelection}
				row={i}
				column={j}
			/>
		{/each}
	{/each}
	<div class="col-span-5 p-2 rounded text-center uppercase bg-emerald-700 text-white">Finish</div>
</div>
