export interface GameObj {
	width: number
	height: number
	size: number
	type: string
	gameItems?: GameItemsEntity[] | null
	fighter?: FighterEntity[] | null
	dungeon: Dungeon
	player: Player
	enemy: Enemy
}
export interface GameItemsEntity {
	id: number
	name: string
	type: string
	value: number
}
export interface FighterEntity {
	id: number
	name: string
	hp: number
	atc: number
	def: number
	mana: number
}
export interface Dungeon {
	map?: (number[] | null)[] | null
	items?: ItemsEntityOrEnemysEntity[] | null
	enemys?: ItemsEntityOrEnemysEntity[] | null
	position: Position
}
export interface ItemsEntityOrEnemysEntity {
	x: number
	y: number
	slug: number
}
export interface Position {
	x: number
	y: number
}
export interface Player {
	name: string
	hp: number
	atc: number
	def: number
	mana: number
	maxHp: number
	maxMana: number
	level: number
	inventory?: InventoryEntity[] | null
}
export interface InventoryEntity {
	name: string
	type: string
	value: number
}
export interface Enemy {
	name: string
	hp: number
	atc: number
	def: number
	mana: number
	maxHp: number
	maxMana: number
}
// export {GameObj, GameItemsEntity,FighterEntity,Dungeon,ItemsEntityOrEnemysEntity,Position,Player,InventoryEntity,Enemy}
