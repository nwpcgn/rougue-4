import type {
	Fighter,
	Assets,
	Loot,
	Level,
	Room,
	Position,
	Corridor
} from './Game'
import generateMap from './generateMap'

export class Player {
	name: string = $state('')
	hp: number = $state(0)
	atc: number = $state(0)
	def: number = $state(0)
	mana: number = $state(0)
	maxHp: number = $state(0)
	maxMana: number = $state(0)
	level: number = $state(0)
	inventory: Loot = $state(null)
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

export class Dungeon {
	map: string[][] | null = $state()
	items: string[] = $state([])
	enemys: string[] = $state([])
	outside: string[] = $state([])
	freeCells: string[] = $state([])
	corridors: Corridor[] = $state([])
	rooms: Room[] = $state([])
	position: Position = $state({
		x: 0,
		y: 0
	})
	generate(width = 40, height = 40, type = 'Uniform') {
		const data = generateMap(width, height, type)
		// console.log(data)
		this.map = data.map
		this.rooms = data.rooms
		this.items = data.items
		this.freeCells = data.freeCells
		this.enemys = data.enemys
		this.position = data.position
		this.corridors = data.corridors
		this.outside = data.outside
	}
}

export class Game {
	#width: number = $state(25)
	#height: number = $state(25)
	#size: number = $state(20)
	#type: string = $state('Uniform')
	#name: string = $state('')
	gridStyle: string = $derived(
		`--grid-cols: ${this.#width};--grid-rows: ${this.#height};--grid-size: ${this.#size}px;`
	)
	assets: Assets = $state({
		loot: [],
		fighter: []
	})
	dungeon: Level = new Dungeon()
	player: Fighter = $state(null)
	enemy: Fighter = $state(null)

	shuffle(array = []) {
		const copy = [...array]
		for (let i = copy.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[copy[i], copy[j]] = [copy[j], copy[i]]
		}
		return copy
	}

	init(daten) {
		this.assets.loot = this.shuffle(daten.loot)
		this.assets.fighter = this.shuffle(daten.fighter)
		this.createMap()
		this.createChars()
		this.printMap()
	}
	createMap() {
		this.dungeon.generate(this.width, this.height, this.type)
	}
	createChars() {
		const p = this.assets.fighter?.shift()
		const e = this.assets.fighter?.shift()
		this.player = new Player(p)
		this.enemy = new Player(e)
	}

	printMap() {
		console.log(this.dungeon)
	}

	get name() {
		return this.#name
	}

	set name(value = '') {
		this.#name = value
	}
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
}

class Item {
	constructor(name, type, value) {
		this.name = name
		this.type = type
		this.value = value
	}

	use(player) {
		switch (this.type) {
			case 'medkit':
				const healAmount = Math.min(
					this.value,
					player.maxHealth - player.health
				)
				player.health += healAmount
				console.log(
					`${player.name} heilt um ${healAmount} Punkte. Neue Gesundheit: ${player.health}`
				)
				break
			case 'energiezelle':
				player.attackPower += this.value
				console.log(
					`${player.name}'s Angriffskraft erhöht sich um ${this.value}. Neue Angriffskraft: ${player.attackPower}`
				)
				break
			case 'munition':
				console.log(
					`${player.name} füllt Munition auf. Nächster Angriff verursacht zusätzlichen Schaden.`
				)
				// Implement logic for extra damage in the next attack
				break
		}
	}
}

export const game = new Game()
