<script lang="ts">
	import type { Card } from '../cards';
	import { currentCard } from '../stores/localStorage';
	import Square from './Square.svelte';

	export let cards: Record<string, Card>;
	export let currentSelection: boolean[][];
	export let handleSelection: (i: number, j: number) => void;
</script>

<div class="grid grid-cols-5 gap-1 sm:gap-3 mt-4 relative">
	<div class="col-span-5 p-1 rounded text-center uppercase bg-sky-700 text-white font-light">
		Start
	</div>
	{#each cards[$currentCard]?.data ?? [] as row, i}
		{#each row as square, j}
			<Square
				selected={currentSelection[i][j]}
				{handleSelection}
				row={i}
				column={j}
			/>
		{/each}
	{/each}
	<div class="col-span-5 p-1 rounded text-center uppercase bg-emerald-700 text-white font-light">
		Finish
	</div>
</div>
