import type {
	Game,
	Attacks,
	Note,
	Lock,
	Assets,
	Grid,
	Fighter,
	Player,
	DungeonMap,
	Rooms,
	Position,
	Corridors
} from './types/Game'
import getRandomFighter from './game/generateFighter'
import generateMap from './game/generateMap'
import { uuid } from '$lib'

class Fighter {
	id: string = $state('')
	name: string = $state('')
	info: string = $state()
	health: number = $state()
	maxHealth: number = $state()
	attacks: Attacks[] = $state([])
	constructor({ name, info, health, maxHealth, attacks }) {
		this.name = name
		this.info = info
		this.health = health
		this.maxHealth = maxHealth
		this.attacks = [...attacks]
	}
}

class Player {
	name: string = $state('')
	level: number = $state(0)
	hero: Fighter = $state(null)
	inventory: Assets[] = $state([])
	constructor(name: string, hero: Fighter) {
		this.name = name
		this.hero = new Fighter(hero)
		this.level = 1
		this.inventory = [
			new Item({
				id: uuid(),
				name: 'Elixir of Time',
				type: 'potion',
				value: 7
			})
		]
	}
}

class Dungeon {
	map: string[][] | null = $state()
	items: string[] = $state([])
	enemys: string[] = $state([])
	outside: string[] = $state([])
	freeCells: string[] = $state([])
	corridors: Corridors[] = $state([])
	rooms: Rooms[] = $state([])
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
	updatePosition(obj: Position) {
		this.position = obj
	}

	removeItem(x: number, y: number) {
		const key = `${x},${y}`
		this.items = this.items.filter((el) => el !== key)
		return this.items
	}
	isItem(x: number, y: number) {
		const key = `${x},${y}`
		const res = this.items.find((el) => el === key)
		return res
	}
}
class Message {
	title: string = $state('')
	type: string = $state('info')
	text: string = $state('')
	#isOpen: boolean = $state(false)
	#isReady: boolean = $state(false)

	add(text = '', type = 'info', title = '') {
		this.text = text
		this.type = type
		this.title = title
		this.show()
	}

	show() {
		this.#isReady = false
		this.#isOpen = true
	}
	hide() {
		this.#isReady = true
		this.#isOpen = false
	}
	get isOpen() {
		return this.#isOpen
	}

	set isOpen(value) {
		this.#isOpen = value
	}

	get isReady() {
		return this.#isReady
	}

	set isReady(value) {
		this.#isReady = value
	}
}
class Game {
	name: string = $state('Dungerue Manner')
	grid: Grid = $state({ width: 30, height: 30, size: 30, type: 'Uniform' })
	lock: Lock = $state({ render: false, keys: false })
	assets: Assets[] = $state([])
	dungeon: DungeonMap = new Dungeon()
	player: Player = $state(null)
	opponents: Fighter[] = $state([])
	msg: Note = new Message()
	gridStyle: string = $derived(
		`--grid-cols: ${this.grid.width};--grid-rows: ${this.grid.height};--grid-size: ${this.grid.size}px;`
	)
	constructor(name = '') {
		this.name = name
	}

	init(daten, config = {}) {
		this.assets = this.shuffle(daten?.loot)
		if (Object.keys(config).length) this.updateGrid(config)

		this.createMap()
		this.createChars()
	}
	createMap() {
		this.dungeon.generate(this.grid.width, this.grid.height, this.grid.type)
	}
	updateGrid(config = {}) {
		this.grid = { ...this.grid, ...config }
	}

	createChars() {
		const p = getRandomFighter(3)
		this.player = new Player('Caryn Dynasty', p)

		for (let index = 0; index < 10; index++) {
			// const element = array[index];
			const e = getRandomFighter(2)
			this.opponents.push(new Fighter(e))
		}
	}

	updateHero(obj = { x: 0, y: 0 }) {
		this.dungeon.updatePosition(obj)
	}
	isPlayer(x: number, y: number) {
		return this.dungeon.position.x == x && this.dungeon.position.y == y
	}
	inDistance(x1: number, y1: number) {
		const rad = Math.hypot(
			this.dungeon.position.x - x1,
			this.dungeon.position.y - y1
		)
		return rad < 2.8
	}
	addInventar() {
		const newInv = { ...this.assets.shift(), id: uuid() }
		this.player.inventory.push(new Item(newInv))
	}
	shuffle(array) {
		const copy = [...array]
		for (let i = copy.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[copy[i], copy[j]] = [copy[j], copy[i]]
		}
		return copy
	}
}

class Item {
	constructor({ id, name, type, value }) {
		this.id = id
		this.name = name
		this.type = type
		this.value = value
	}
}

export const game: Game = new Game('Dungerue Manner')
