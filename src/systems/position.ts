import { Position } from "../entities/position";
import { System } from "./system";

export class PositionSystem implements System<Position> {
	public entries: Position[] = [];

	public getById(id: number): Position | null {
		return this.entries.find(pos => pos.id === id) || null;
	}
}
