import { Position } from "./position";
import { Entity, generateId } from "./entity";

export interface Renderable extends Entity {
	position: Position;
	visible: boolean;
	bgColor: string;
	fgColor: string;
	char?: string;
}

export class PlayerRenderable implements Renderable {
	public id: number;
	public position: Position;
	public visible: boolean;
	public bgColor: string;
	public fgColor: string;
	public char?: string;

	constructor(
		position: Position,
		visible: boolean,
		bgColor: string,
		fgColor: string,
		char: string
	) {
		this.id = generateId();
		this.position = position;
		this.visible = visible;
		this.bgColor = bgColor;
		this.fgColor = fgColor;
		this.char = char;
	}
}

export function render(ctx: CanvasRenderingContext2D, renderable: Renderable) {
	if (!renderable.visible) {
		return;
	}

	ctx.fillStyle = renderable.bgColor;
	ctx.fillRect(
		renderable.position.x,
		renderable.position.y,
		renderable.position.width,
		renderable.position.height
	);

	if (renderable.char) {
		ctx.fillStyle = renderable.fgColor;
		ctx.fillText(
			renderable.char,
			renderable.position.x,
			renderable.position.y + 15
		);
	}
}
