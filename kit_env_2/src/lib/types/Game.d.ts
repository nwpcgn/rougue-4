export interface Game {
	name: string
	gridStyle: string
	lock: Lock
	assets?: Assets[] | null
	opponents?: Fighter[] | null
	player: Player
	grid: Grid
	dungeon: Dungeon
	msg: Note
}
export interface Lock {
	render: boolean
	keys: boolean
}
export interface Assets {
	id: string
	name: string
	type: string
	value: number
}
export interface Fighter {
	id: string
	name: string
	info: string
	health: number
	maxHealth: number
	attacks?: Attacks[] | null
}
export interface Attacks {
	name: string
	dice: string
	damage: number
	description: string
}
export interface Player {
	level: number
	name: string
	fighter?: Fighter[] | null
	inventory?: Assets[] | null
}
export interface Grid {
	width: number
	height: number
	size: number
	type: string
}
export interface DungeonMap {
	map?: (string[] | null)[] | null
	rooms?: Rooms[] | null
	items?: string[] | null
	freeCells?: string[] | null
	enemys?: string[] | null
	position: Position
	corridors?: Corridors[] | null
	outside?: string[] | null
}
export interface Rooms {
	x1: number
	y1: number
	x2: number
	y2: number
	doors?: Position[] | null
	centerX: number
	centerY: number
	roomId: number
}
export interface Position {
	x: number
	y: number
}
export interface Corridors {
	_startX: number
	_startY: number
	_endX: number
	_endY: number
	_endsWithAWall: boolean
	corrId: number
}
export interface Note {
	title: string
	type: string
	text: string
	isOpen: boolean
	isReady: boolean
}

/* export {
	Game,
	Assets,
	Grid,
	Fighter,
	Player,
	DungeonMap,
	Rooms,
	Position,
	Corridors
}
 */
