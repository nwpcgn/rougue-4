export interface Game {
	width: number
	height: number
	size: number
	type: string
	name: string
	gridStyle: string
	assets: Assets
	enemy: Fighter
	player: Player
	dungeon: Dungeon
	renderLock: boolean
	keyLock: boolean
}
export interface Assets {
	loot?: Loot[] | null
	fighter?: Fighter[] | null
}
export interface Loot {
	name: string
	type: string
	value: number
}
export interface Fighter {
	name: string
	hp: number
	atc: number
	def: number
	mana: number
	maxHp: number
	maxMana: number
}

export interface Player {
	level: number
	name: string
	hero: Fighter
	inventory?: Loot[] | null
}
interface DungeonMap {
	map?: (string[] | null)[] | null
	rooms?: Rooms[] | null
	items?: string[] | null
	freeCells?: string[] | null
	enemys?: string[] | null
	position: Position
	corridors?: Corridors[] | null
	outside?: string[] | null
}
interface Rooms {
	x1: number
	y1: number
	x2: number
	y2: number
	doors?: Position[] | null
	centerX: number
	centerY: number
	roomId: number
}
interface Position {
	x: number
	y: number
}
interface Corridors {
	_startX: number
	_startY: number
	_endX: number
	_endY: number
	_endsWithAWall: boolean
	corrId: number
}
export {
	Game,
	Assets,
	Loot,
	Fighter,
	Player,
	DungeonMap,
	Rooms,
	Position,
	Corridors
}
