import type {
	GameItemsEntity,
	FighterEntity,
	Dungeon,
	ItemsEntityOrEnemysEntity,
	Position,
	Player,
	InventoryEntity,
	Enemy
} from './Game'
import generateMap from './generateMap'
function shuffleArray(array) {
	const copy = [...array]
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[copy[i], copy[j]] = [copy[j], copy[i]]
	}
	return copy
}
class Player {
	name: string = $state('')
	hp: number = $state(0)
	atc: number = $state(0)
	def: number = $state(0)
	mana: number = $state(0)
	maxHp: number = $state(0)
	maxMana: number = $state(0)
	level: number = $state(0)
	inventory: InventoryEntity = $state(null)
	constructor({ name, hp, atc, def, mana }) {
		this.name = name
		this.hp = hp
		this.atc = atc
		this.def = def
		this.mana = mana
		this.maxHp = this.hp
		this.maxMana = this.mana
		this.level = 1
		this.inventory = {
			name: 'Health Potion',
			type: 'potion',
			value: 7
		}
	}
}
class Enemy {
	name: string = $state('')
	hp: number = $state(0)
	atc: number = $state(0)
	def: number = $state(0)
	mana: number = $state(0)
	maxHp: number = $state(0)
	maxMana: number = $state(0)
	constructor({ name, hp, atc, def, mana }) {
		this.name = name
		this.hp = hp
		this.atc = atc
		this.def = def
		this.mana = mana
		this.maxHp = this.hp
		this.maxMana = this.mana
	}
}
class Dungeon {
	map: string[][] | null = $state()
	items: ItemsEntityOrEnemysEntity[] | null = $state()
	enemys: ItemsEntityOrEnemysEntity[] | null = $state()
	position: Position = $state({
		x: 0,
		y: 0
	})
	generate(width = 40, height = 40, type = 'Uniform') {
		const data = generateMap(width, height, type)
		// { map, rooms, items, freeCells, enemys, position }
		this.map = data.map
		this.items = data.items
		this.enemys = data.enemys
		this.position = data.position
	}
}

class Game {
	#width: number = $state(40)
	#height: number = $state(40)
	#size: number = $state(40)
	#type: string = $state('Uniform')
	loot: GameItemsEntity | null = $state([])
	fighter: FighterEntity | null = $state()
	dungeon: Dungeon = new Dungeon()
	player: Player | null = $state()
	enemy: Enemy | null = $state()

	get width() {
		return this.#width
	}

	set width(value = 10) {
		this.#width = value
	}

	get height() {
		return this.#height
	}

	set height(value = 10) {
		this.#height = value
	}

	get size() {
		return this.#size
	}

	set size(value = 10) {
		this.#size = value
	}

	get type() {
		return this.#type
	}

	set type(value = 'Uniform') {
		this.#type = value
	}

	async init() {
		await this.loadLootFromUrl('/data/game.json')
		this.dungeon.generate(this.width, this.height, this.type)
		this.player = new Player({
			name: 'Mew',
			hp: 30,
			atc: 6,
			def: 5,
			mana: 7
		})
		const opponent = this.fighter.shift()
		this.enemy = new Enemy(opponent)
	}
	async loadLootFromUrl(url) {
		try {
			const res = await fetch(url)
			const { loot, fighter } = await res.json()
			this.loot = shuffleArray(loot)
			this.fighter = shuffleArray(fighter)
		} catch (err) {
			console.error('Failed to load loot:', err)
		}
	}
}

export const game = new Game()
