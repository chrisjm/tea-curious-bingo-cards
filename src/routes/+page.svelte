<script lang="ts">
	import clone from 'just-clone';
	import { Confetti } from 'svelte-confetti';

	interface Card {
		id: string;
		name: string;
		backgroundGradient: string;
		cardLabelClass: string;
		data: string[][];
	}

	interface Tab {
		id: string;
		label: string;
	}

	const availableCards: Record<string, Card> = {
		mist: {
			id: 'mist',
			name: 'Mist',
			backgroundGradient: 'from-cyan-300 to-cyan-500',
			cardLabelClass: 'text-cyan-300',
			data: [
				['Cold brew', 'Total new to you', 'Taiwan', 'Dark roast', 'With a friend'],
				['Mix 2 teas', 'Sample size', 'Floral', 'Gaiwan brew', 'Favorite vendor'],
				['Fruity', 'Currently dislike', 'Read about tea making', 'Reach 5+ steeps', 'With music'],
				['Gifted by a friend', 'China', 'With a meal', 'Toasty', 'Bowl brew'],
				['Texture', 'Sparkling brew', 'Side by side', 'Favorite teaware', 'Outside Taiwan & China']
			]
		},
		woodfire: {
			id: 'woodfire',
			name: 'Woodfire',
			backgroundGradient: 'from-stone-300 to-stone-500',
			cardLabelClass: 'text-stone-300',
			data: [
				['Aged oolong', 'Bug bitten', 'Same tea 3 ways', 'High oxidation', 'Tea and food pairing'],
				[
					'Unusual cultivar',
					'High mtn.',
					'Outside Taiwan & China',
					'Dancong',
					'Gifted by a friend'
				],
				['Low elevation', 'Mix 2 teas', 'Wuyi', 'Old bush', 'Same cultivar, two teas'],
				['One tea 3 cups', 'Side by side', 'Sparkling brew', 'Anxi', 'Light roast'],
				[
					'Currently dislike',
					'Quin Xin cultivar',
					'Dark roast',
					'Totally new to you',
					'Home roasting'
				]
			]
		},
		nightShift: {
			id: 'nightShift',
			name: 'Night Shift',
			backgroundGradient: 'from-slate-300 to-slate-500',
			cardLabelClass: 'text-slate-300',
			data: [
				['Gifted by a friend', 'With music', 'Late night', 'Favorite vendor', 'Gaiwan brew'],
				['Brew bowl', 'Roasted tea', 'With friends', 'Home roasting', 'Old tea'],
				['Totally new to you', 'Cold brew', 'Hard at work', 'Mix 2 teas', 'Early morning'],
				['After a long day', 'While writing', 'Tea break', 'On the light side', 'High elevation'],
				['Same tea 3 ways', 'Favorite teaware', 'Early morning', 'Texture', 'Reach 5+ steeps']
			]
		}
	};

	const tabs: Tab[] = Object.values(availableCards).map((tab) => {
		return {
			id: tab.id,
			label: tab.name
		};
	});

	const emptySelection: boolean[][] = [
		new Array(5),
		new Array(5),
		new Array(5),
		new Array(5),
		new Array(5)
	];

	let currentSelection = clone(emptySelection);
	let selectedTab = 'mist';

	$: backgroundGradient = availableCards[selectedTab ?? 0].backgroundGradient;
	$: cardName = availableCards[selectedTab ?? 0].name;
	$: cardLabelClass = availableCards[selectedTab ?? 0].cardLabelClass;

	// Check each row if at least one selection is true on every row
	$: completed = currentSelection.map((row) => row.some(Boolean)).every(Boolean);
</script>

<svelte:head>
	<title>Tea Curious - Moving Oolong! Challenge</title>
</svelte:head>

{#if completed}
	<div class="confetti-container">
		<Confetti x={[-5, 5]} y={[0, 0.1]} amount={500} fallDistance="100vh" duration="3000" infinite />
	</div>
{/if}

<div class="bg-gradient-to-b {backgroundGradient} h-screen xs:h-full">
	<div class="max-w-sm sm:max-w-lg mx-auto p-4">
		<!-- Nav -->
		<div class="mb-4">
			<div class="sm:hidden">
				<label for="tabs" class="sr-only">Select a tab</label>
				<select
					id="tabs"
					name="tabs"
					class="block w-full rounded-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
					bind:value={selectedTab}
					on:change={() => (currentSelection = clone(emptySelection))}
				>
					{#each tabs as tab}
						<option value={tab.id}>{tab.label}</option>
					{/each}
				</select>
			</div>
			<div class="hidden sm:block">
				<nav class="flex space-x-4" aria-label="Tabs">
					{#each tabs as tab}
						<button
							class="text-gray-800 hover:text-gray-900 px-3 py-2 font-medium text-sm rounded-md"
							class:bg-gray-100={tab.id === selectedTab}
							class:text-gray-700={tab.id === selectedTab}
							on:click={() => {
								selectedTab = tab.id;
								currentSelection = clone(emptySelection);
							}}>{tab.label}</button
						>
					{/each}
				</nav>
			</div>
		</div>

		<!-- Header -->
		<h1 class="text-lg font-semibold text-cyan-50 uppercase text-center tracking-wider">
			Tea Curious <span class="font-light">Tea Challenge</span>
		</h1>
		<h2 class="text-3xl sm:text-4xl font-bold text-cyan-50 text-center tracking-wider">
			Moving Oolong!
		</h2>

		<!-- Card -->
		{#if selectedTab}
			<div class="grid grid-cols-5 gap-1 sm:gap-3 mt-4 relative">
				<div class="col-span-5 p-2 text-center uppercase bg-sky-700 text-white">Start</div>
				{#each availableCards[selectedTab]?.data ?? [] as row, i}
					{#each row as square, j}
						<button
							class="flex items-center justify-center text-center h-12 sm:h-20 text-xs sm:text-sm p-2 bg-cyan-200 hover:bg-cyan-300 cursor-pointer font-light focus:outline-cyan-400"
							class:bg-cyan-700={currentSelection[i][j]}
							class:text-white={currentSelection[i][j]}
							class:hover:bg-cyan-700={currentSelection[i][j]}
							on:click={() => (currentSelection[i][j] = !currentSelection[i][j])}
						>
							{availableCards[selectedTab].data[i][j]}
						</button>
					{/each}
				{/each}
				<div class="col-span-5 p-2 text-center uppercase bg-emerald-700 text-white">Finish</div>
			</div>
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
</style>
