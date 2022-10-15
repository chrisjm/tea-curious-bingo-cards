<script lang="ts">
	const selectedCard = [
		['Cold brew', 'Total new to you', 'Taiwan', 'Dark roast', 'With a friend'],
		['Mix 2 teas', 'Sample size', 'Floral', 'Gaiwan brew', 'Favorite vendor'],
		['Fruity', 'Currently dislike', 'Read about tea making', 'Reach 5+ steeps', 'With music'],
		['Gifted by a friend', 'China', 'With a meal', 'Toasty', 'Bowl brew'],
		['Texture', 'Sparkling brew', 'Side by side', 'Favorite teaware', 'Outside Taiwan & China']
	];

	let currentSelection = [new Array(5), new Array(5), new Array(5), new Array(5), new Array(5)];
</script>

<div class="bg-gradient-to-b from-cyan-300 to-cyan-500">
	<div class="max-w-2xl mx-auto p-4">
		<h1 class="text-2xl font-semibold text-cyan-50 uppercase text-center tracking-wider">
			Tea Curious <span class="font-light">Tea Challenge</span>
		</h1>
		<h2 class="text-6xl font-bold text-cyan-50 text-center">Moving Oolong!</h2>

		<div class="grid grid-cols-5 gap-3 mt-4 relative">
      <div class="absolute text-xl font-bold text-white text-cyan-300 uppercase rotate-[270deg] bottom-12 -right-20">Mist Card</div>
			<div class="col-span-5 p-2 text-center uppercase bg-sky-700 text-white">Start</div>
			{#each selectedCard as row, i}
				{#each row as square, j}
					<button
						class="flex items-center justify-center text-center h-20 p-2 bg-cyan-200 hover:bg-cyan-300 cursor-pointer font-light focus:outline-cyan-400"
						class:bg-cyan-700={currentSelection[i][j]}
						class:text-white={currentSelection[i][j]}
            class:hover:bg-cyan-700={currentSelection[i][j]}
						on:click={() => (currentSelection[i][j] = !currentSelection[i][j])}
					>
						{selectedCard[i][j]}
					</button>
				{/each}
			{/each}
			<div class="col-span-5 p-2 text-center uppercase bg-emerald-700 text-white">Finish</div>
		</div>
	</div>
</div>
