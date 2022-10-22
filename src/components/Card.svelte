<script lang="ts">
	import type { Card } from 'src/cards';

	export let cards: Record<string, Card>;
	export let selectedCard: string;
	export let currentSelection: boolean[][];
	export let handleSelection: (i: number, j: number) => void;
</script>

<div class="grid grid-cols-5 gap-1 sm:gap-3 mt-4 relative">
	<div class="col-span-5 p-2 text-center uppercase bg-sky-700 text-white">Start</div>
	{#each cards[selectedCard]?.data ?? [] as row, i}
		{#each row as square, j}
			<button
				class="flex items-center justify-center text-center h-12 sm:h-20 text-xs sm:text-sm p-2 bg-cyan-200 hover:bg-cyan-300 cursor-pointer font-light focus:outline-cyan-400"
				class:bg-cyan-700={currentSelection[i][j]}
				class:text-white={currentSelection[i][j]}
				class:hover:bg-cyan-700={currentSelection[i][j]}
				on:click={() => handleSelection(i, j)}
			>
				{cards[selectedCard].data[i][j]}
			</button>
		{/each}
	{/each}
	<div class="col-span-5 p-2 text-center uppercase bg-emerald-700 text-white">Finish</div>
</div>
