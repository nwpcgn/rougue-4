// place files you want to import through the `$lib` alias in this folder.
// place files you want to import through the `$lib` alias in this folder.
//@index('./components/*.svelte', (f, _) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}'`)
export { default as Badge } from './components/Badge.svelte'
export { default as BattleCard } from './components/BattleCard.svelte'
export { default as Button } from './components/Button.svelte'
export { default as Dialog } from './components/Dialog.svelte'
export { default as GenerateLevel } from './components/GenerateLevel.svelte'
export { default as Hero } from './components/Hero.svelte'
export { default as InfoPanel } from './components/InfoPanel.svelte'
export { default as LoadingBar } from './components/LoadingBar.svelte'
export { default as NesContainer } from './components/NesContainer.svelte'
export { default as Options } from './components/Options.svelte'
export { default as Splash } from './components/Splash.svelte'
//@endindex
//@index('./utils/*.js', (f, _) => `export { default as ${f.name} } from '${f.path}'`)

//@endindex
export { default as fetchData } from './utils//fetchData'
export { game } from './game/game.svelte.ts'
export { default as randNum } from './utils/randNum'
export { default as shuffle } from './utils/shuffle'
export { default as sleep } from './utils/sleep'
export const nav = [
	{
		slug: 'start',
		name: 'Lobby',
		icon: 'nwp-home'
	},
	{
		slug: 'map',
		name: 'Start Game',
		icon: 'nwp-game'
	},
	{
		slug: 'settings',
		name: 'Map Settings',
		icon: 'nwp-options'
	},
	{
		slug: 'story',
		name: 'Dungeon Lore',
		icon: 'nwp-dice'
	}
]
