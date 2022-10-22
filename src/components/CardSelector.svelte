<script lang="ts">
	import type { Card } from '../cards';
	import { currentCard } from '../stores/localStorage';

	interface Tab {
		id: string;
		label: string;
	}

	export let cards: Record<string, Card>;
	export let handleSelection: (id: string) => void;

	$: tabs = Object.values(cards).map((tab) => {
		return {
			id: tab.id,
			label: tab.name
		};
	}) as Tab[];
</script>

<div class="mb-4">
	<div class="sm:hidden">
		<label for="tabs" class="sr-only">Select a tab</label>
		<select
			id="tabs"
			name="tabs"
			class="block w-full rounded-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
			bind:value={$currentCard}
			on:change={() => {
				handleSelection($currentCard);
			}}
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
					class:bg-gray-100={tab.id === $currentCard}
					class:text-gray-700={tab.id === $currentCard}
					on:click={() => handleSelection(tab.id)}>{tab.label}</button
				>
			{/each}
		</nav>
	</div>
</div>
