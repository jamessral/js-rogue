import { Entity, generateId } from "./entity";

export interface Position extends Entity {
	x: number;
	y: number;
	width: number;
	height: number;
}

export const TILE_SIZE = 20;

export class PlayerPosition implements Position {
	public id: number;
	public x: number;
	public y: number;
	public width: number;
	public height: number;

	constructor(x: number, y: number, width: number, height: number) {
		this.id = generateId();
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
}

export function move(pos: Position, x: number, y: number) {
	pos.x += x;
	pos.y += y;

	if (pos.x < 0) {
		pos.x = 0;
	} else if (pos.x >= 800 - pos.width) {
		pos.x = 800 - pos.width;
	}

	if (pos.y < 0) {
		pos.y = 0;
	} else if (pos.y > 600 - pos.height) {
		pos.y = 600 - pos.height;
	}
}
