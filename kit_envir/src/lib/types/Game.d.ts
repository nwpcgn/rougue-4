interface DungeonMap {
	map?: (string[] | null)[] | null
	rooms?: Rooms[] | null
	items?: string[] | null
	freeCells?: string[] | null
	enemys?: string[] | null
	position: Position
	corridors?: Corridors[] | null
	type: string
	width: number
	height: number
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

interface DungeonGame {
	width: number
	height: number
	size: number
	type: string
	player: Fighter
	enemy: Fighter
	assets: Assets
	level: Level
}

interface Assets {
	loot?: Loot[] | null
	fighter?: Fighter[] | null
}

interface Fighter {
	name: string
	hp: number
	atc: number
	def: number
	mana: number
}
interface Loot {
	name: string
	type: string
	value: number
}

export {
	Assets,
	Corridors,
	DungeonGame,
	DungeonMap,
	Fighter,
	Loot,
	Position,
	Rooms
}
