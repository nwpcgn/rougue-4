export class DungeonGenerator {
	constructor(mapSize, maxRooms = 12, minRoomSize = 4, maxRoomSize = 14) {
		this.mapSize = mapSize
		this.maxRooms = maxRooms
		this.minRoomSize = minRoomSize
		this.maxRoomSize = maxRoomSize
		this.roomsLeft = maxRooms - 1
		this.tiles = this.createEmptyMap()
		this.allRooms = []
		this.allDoors = []
	}

	createEmptyMap() {
		const grid = []
		for (let i = 0; i < this.mapSize.x; ++i) {
			grid.push([])
			for (let j = 0; j < this.mapSize.y; ++j) {
				grid[i].push(1)
			}
		}
		return grid
	}

	randMinMax(min, max) {
		return Math.ceil(Math.random() * (max - min)) + min
	}

	createRandomRoom() {
		const x =
			Math.floor(Math.random() * (this.mapSize.x - this.maxRoomSize - 2)) + 1
		const y =
			Math.floor(Math.random() * (this.mapSize.y - this.maxRoomSize - 2)) + 1
		const w = this.randMinMax(this.minRoomSize, this.maxRoomSize)
		const h = this.randMinMax(this.minRoomSize, this.maxRoomSize)
		return { x, y, w, h }
	}

	setFloor(room) {
		for (let i = room.x; i < room.x + room.w; ++i) {
			for (let j = room.y; j < room.y + room.h; ++j) {
				this.tiles[i][j] = 0
			}
		}
	}

	isValid(room) {
		const { x, y, w, h } = room
		if (this.roomsLeft <= 0) return false
		if (x < 0 || x + w >= this.mapSize.x || y < 0 || y + h >= this.mapSize.y)
			return false

		for (let i = x - 1; i < x + w + 1; ++i) {
			for (let j = y - 1; j < y + h + 1; ++j) {
				if (this.tiles[i] && this.tiles[i][j] === 0) return false
			}
		}
		return true
	}

	growMap(lastRoom) {
		this.allRooms.push(lastRoom)
		const directions = ['up', 'down', 'left', 'right'].sort(
			() => 0.5 - Math.random()
		)

		for (const dir of directions) {
			if (this.roomsLeft <= 0) return

			switch (dir) {
				case 'up': {
					if (lastRoom.y < this.minRoomSize + 2) continue

					const width = this.randMinMax(this.minRoomSize, this.maxRoomSize)
					const minX = Math.max(lastRoom.x - (width - 2), 1)
					const maxX = Math.min(
						lastRoom.x + lastRoom.w - 2,
						this.mapSize.x - this.minRoomSize - 1
					)
					const x = this.randMinMax(minX, maxX)
					const height = Math.min(
						this.randMinMax(this.minRoomSize, this.maxRoomSize),
						lastRoom.y - 2
					)
					const y = lastRoom.y - height - 1

					const room = { x, y, w: width, h: height }
					if (this.isValid(room)) {
						this.setFloor(room)
						const doorX = this.randMinMax(
							Math.max(lastRoom.x + 1, x),
							Math.min(lastRoom.x + lastRoom.w - 2, x + width - 2)
						)
						const doorY = lastRoom.y - 1
						this.tiles[doorX][doorY] = 0
						this.allDoors.push({ x: doorX, y: doorY })
						this.roomsLeft--
						this.growMap(room)
					}
					break
				}

				case 'down': {
					if (lastRoom.y + lastRoom.h > this.mapSize.y - this.minRoomSize - 2)
						continue

					const width = this.randMinMax(this.minRoomSize, this.maxRoomSize)
					const minX = Math.max(lastRoom.x - (width - 2), 1)
					const maxX = Math.min(
						lastRoom.x + lastRoom.w - 2,
						this.mapSize.x - this.minRoomSize - 1
					)
					const x = this.randMinMax(minX, maxX)
					const height = Math.min(
						this.randMinMax(this.minRoomSize, this.maxRoomSize),
						this.mapSize.y - lastRoom.y - lastRoom.h - 2
					)
					const y = lastRoom.y + lastRoom.h + 1

					const room = { x, y, w: width, h: height }
					if (this.isValid(room)) {
						this.setFloor(room)
						const doorX = this.randMinMax(
							Math.max(lastRoom.x + 1, x),
							Math.min(lastRoom.x + lastRoom.w - 2, x + width - 2)
						)
						const doorY = y - 1
						this.tiles[doorX][doorY] = 0
						this.allDoors.push({ x: doorX, y: doorY })
						this.roomsLeft--
						this.growMap(room)
					}
					break
				}

				case 'left': {
					if (lastRoom.x < this.minRoomSize + 2) continue

					const height = this.randMinMax(this.minRoomSize, this.maxRoomSize)
					const minY = Math.max(lastRoom.y - (height - 2), 1)
					const maxY = Math.min(
						lastRoom.y + lastRoom.h - 2,
						this.mapSize.y - this.minRoomSize - 1
					)
					const y = this.randMinMax(minY, maxY)
					const width = Math.min(
						this.randMinMax(this.minRoomSize, this.maxRoomSize),
						lastRoom.x - 2
					)
					const x = lastRoom.x - width - 1

					const room = { x, y, w: width, h: height }
					if (this.isValid(room)) {
						this.setFloor(room)
						const doorY = this.randMinMax(
							Math.max(lastRoom.y + 1, y),
							Math.min(lastRoom.y + lastRoom.h - 2, y + height - 2)
						)
						const doorX = lastRoom.x - 1
						this.tiles[doorX][doorY] = 0
						this.allDoors.push({ x: doorX, y: doorY })
						this.roomsLeft--
						this.growMap(room)
					}
					break
				}

				case 'right': {
					if (lastRoom.x + lastRoom.w > this.mapSize.x - this.minRoomSize - 2)
						continue

					const height = this.randMinMax(this.minRoomSize, this.maxRoomSize)
					const minY = Math.max(lastRoom.y - (height - 2), 1)
					const maxY = Math.min(
						lastRoom.y + lastRoom.h - 2,
						this.mapSize.y - this.minRoomSize - 1
					)
					const y = this.randMinMax(minY, maxY)
					const width = Math.min(
						this.randMinMax(this.minRoomSize, this.maxRoomSize),
						this.mapSize.x - lastRoom.x - lastRoom.w - 2
					)
					const x = lastRoom.x + lastRoom.w + 1

					const room = { x, y, w: width, h: height }
					if (this.isValid(room)) {
						this.setFloor(room)
						const doorY = this.randMinMax(
							Math.max(lastRoom.y + 1, y),
							Math.min(lastRoom.y + lastRoom.h - 2, y + height - 2)
						)
						const doorX = x - 1
						this.tiles[doorX][doorY] = 0
						this.allDoors.push({ x: doorX, y: doorY })
						this.roomsLeft--
						this.growMap(room)
					}
					break
				}
			}
		}
	}

	generate() {
		const seedRoom = this.createRandomRoom()
		this.setFloor(seedRoom)
		this.growMap(seedRoom)
		return {
			tiles: this.tiles,
			rooms: this.allRooms,
			doors: this.allDoors
		}
	}
}


export default DungeonGenerator