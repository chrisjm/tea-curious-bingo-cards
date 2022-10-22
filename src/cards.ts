export interface Card {
	id: string;
	name: string;
	backgroundGradient: string;
	cardLabelClass: string;
	data: string[][];
}

export const cards: Record<string, Card> = {
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
			['Unusual cultivar', 'High mtn.', 'Outside Taiwan & China', 'Dancong', 'Gifted by a friend'],
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
	nightshift: {
		id: 'nightshift',
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
