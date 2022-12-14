<script lang="ts">
	import clone from 'just-clone';
	import CardSelector from '../components/CardSelector.svelte';
	import Card from '../components/Card.svelte';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import { cards } from '../cards';
	import { currentCard } from '../stores/currentCard';
	import { currentSelection } from '../stores/currentSelection';
	import { Confetti } from 'svelte-confetti';

	const emptySelection: boolean[][] = [
		new Array(5),
		new Array(5),
		new Array(5),
		new Array(5),
		new Array(5)
	];

	$: {
		if ($currentCard && !$currentSelection[$currentCard]) {
			$currentSelection = {
				...$currentSelection,
				[$currentCard]: clone(emptySelection)
			};
		}
	}

	// Hacky and lenient: Check each row if at least one selection is true on every row
	// TODO: Better way would be to check each row and ensure the previous row's offset is <= 1
	$: completed = ($currentSelection?.[$currentCard] ?? [])
		.map((row) => row.some(Boolean))
		.every(Boolean);

	function handleCardSelection(id: string) {
		$currentCard = id;
	}

	function handleSquareSelection(i: number, j: number) {
		$currentSelection[$currentCard][i][j] = !$currentSelection[$currentCard][i][j];
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

{#if $currentCard}
	<div class="bg-cover {$currentCard}">
		<div class="flex flex-col max-w-sm sm:max-w-lg mx-auto p-4">
			<CardSelector {cards} handleSelection={handleCardSelection} />
			<Header />
			<Card {cards} handleSelection={handleSquareSelection} />
			<Footer />
		</div>
	</div>
{/if}

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
		z-index: 10;
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
