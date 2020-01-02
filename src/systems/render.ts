import { Renderable } from "../entities/render";
import { System } from "./system";

export class RenderSystem implements System<Renderable> {
	public entries: Renderable[] = [];

	public getById(id: number) {
		return this.entries.find(renderable => renderable.id === id) || null;
	}
}
