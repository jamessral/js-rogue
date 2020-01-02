import { move, PlayerPosition } from "./entities/position";
import { PositionSystem } from "./systems/position";
import { RenderSystem } from "./systems/render";
import { PlayerRenderable, render } from "./entities/render";

declare global {
	interface Window {
		Globals: {
			lastId: number;
		};
	}
}

const main = () => {
	const canvas = document.createElement("canvas")!;
	canvas.height = 600;
	canvas.width = 800;
	document.body.appendChild(canvas);
	window.Globals = {
		lastId: 1
	};

	const ctx = canvas.getContext("2d");
	ctx!.font = "bold 1.2rem sans-serif";

	const positionSystem = new PositionSystem();
	const renderSystem = new RenderSystem();

	const playerPosition = new PlayerPosition(20, 20, 20, 20);
	const playerRenderable = new PlayerRenderable(
		playerPosition,
		true,
		"#8accc4",
		"#222",
		"@"
	);
	positionSystem.entries.push(playerPosition);
	renderSystem.entries.push(playerRenderable);

	document.addEventListener("keydown", (event: KeyboardEvent) => {
		event.preventDefault();
		switch (event.code) {
			case "ArrowRight": {
				move(playerPosition, 20, 0);
				break;
			}
			case "ArrowLeft": {
				move(playerPosition, -20, 0);
				break;
			}
			case "ArrowDown": {
				move(playerPosition, 0, 20);
				break;
			}
			case "ArrowUp": {
				move(playerPosition, 0, -20);
				break;
			}
			default: {
				console.log(event.code);
				return;
			}
		}
	});

	function clear() {
		ctx!.clearRect(0, 0, canvas.width, canvas.height);
		ctx!.fillStyle = "#223344";
		ctx!.fillRect(0, 0, canvas.width, canvas.height);
	}

	function renderGame() {
		clear();

		for (let i = 0; i < renderSystem.entries.length; i++) {
			render(ctx!, renderSystem.entries[i]);
		}
		requestAnimationFrame(renderGame);
	}

	renderGame();
};

window.onload = main;
