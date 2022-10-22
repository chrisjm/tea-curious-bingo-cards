<script lang="ts">
	import clone from 'just-clone';
	import CardSelector from '../components/CardSelector.svelte';
	import Card from '../components/Card.svelte';
	import Header from '../components/Header.svelte';
	import { cards } from '../cards';
	import { Confetti } from 'svelte-confetti';

	const emptySelection: boolean[][] = [
		new Array(5),
		new Array(5),
		new Array(5),
		new Array(5),
		new Array(5)
	];

	let currentSelection = clone(emptySelection);
	let selectedCard = 'mist';

	// Hacky and lenient: Check each row if at least one selection is true on every row
	// TODO: Better way would be to check each row and ensure the previous row's offset is <= 1
	$: completed = currentSelection.map((row) => row.some(Boolean)).every(Boolean);

	$: backgroundGradient = cards[selectedCard ?? 0].backgroundGradient;

	function handleCardSelection(id: string) {
		selectedCard = id;
		currentSelection = clone(emptySelection);
	}

	function handleSquareSelection(i: number, j: number) {
		currentSelection[i][j] = !currentSelection[i][j];
	}
</script>

<svelte:head>
	<title>Tea Curious - Moving Oolong! Challenge</title>
</svelte:head>

{#if completed}
	<div class="confetti-container">
		<Confetti x={[-5, 5]} y={[0, 0.1]} amount={500} fallDistance="100vh" duration={3000} infinite />
	</div>
{/if}

<div class="bg-cover {selectedCard} h-screen sm:h-auto">
	<div class="max-w-sm sm:max-w-lg mx-auto p-4">
		<CardSelector {cards} handleSelection={handleCardSelection} {selectedCard} />
		<Header />

		{#if selectedCard}
			<Card {cards} {selectedCard} {currentSelection} handleSelection={handleSquareSelection} />
		{/if}
	</div>
</div>

<style>
	.confetti-container {
		position: fixed;
		top: -50px;
		left: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		overflow: hidden;
		pointer-events: none;
	}

	.mist {
		background-image: url('/mist.jpg');
	}

	.nightshift {
		background-image: url('/nightshift.jpg');
	}

	.woodfire {
		background-image: url('/woodfire.jpg');
	}
</style>
