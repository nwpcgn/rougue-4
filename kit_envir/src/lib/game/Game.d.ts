export interface Dungeon {
	width: number;
	height: number;
	size: number;
	type: string;
	player: Fighter;
	enemy: Fighter;
	assets: Assets;
	level: Level;
}
export interface Fighter {
	name: string;
	hp: number;
	atc: number;
	def: number;
	mana: number;
}
export interface Assets {
	loot?: Loot[] | null;
	fighter?: Fighter[] | null;
}
export interface Loot {
	name: string;
	type: string;
	value: number;
}
export interface Level {
	map?: (string[] | null)[] | null;
	rooms?: Room[] | null;
	items?: string[] | null;
	freeCells?: string[] | null;
	enemys?: string[] | null;
	position: Position;
	corridors?: Corridor[] | null;
	outside?: string[] | null;
}
export interface Room {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	doors?: Position[] | null;
	centerX: number;
	centerY: number;
	roomId: number;
}
export interface Position {
	x: number;
	y: number;
}
export interface Corridor {
	_startX: number;
	_startY: number;
	_endX: number;
	_endY: number;
	_endsWithAWall: boolean;
	corrId: number;
}

// export {Fighter,Assets,Loot,Level,Room,Position,Corridor}
