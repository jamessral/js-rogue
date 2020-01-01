window.onload = () => {
  let canvas = document.createElement("canvas");
  canvas.height = 600;
  canvas.width = 800;
  document.body.appendChild(canvas);

  let ctx = canvas.getContext("2d");

  let player = new Player(20, 20, 20, 20);

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    event.preventDefault();
    switch (event.code) {
      case "ArrowRight": {
        player.move(20, 0);
        break;
      }
      case "ArrowLeft": {
        player.move(-20, 0);
        break;
      }
      case "ArrowDown": {
        player.move(0, 20);
        break;
      }
      case "ArrowUp": {
        player.move(0, -20);
        break;
      }
      default: {
        console.log(event.code);
        return;
      }
    }
  });

  function clear() {
    ctx!.fillStyle = "#223344";
    ctx!.fillRect(0, 0, 800, 600);
  }

  function render() {
    clear();
    player.render(ctx!);
    requestAnimationFrame(render);
  }

  render();
};

class Player {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  public move(x: number, y: number) {
    this.x += x;
    this.y += y;

    if (this.x < 0) {
      this.x = 0;
    } else if (this.x >= 800 - this.width) {
      this.x = 800 - this.width;
    }

    if (this.y < 0) {
      this.y = 0;
    } else if (this.y > 600 - this.height) {
      this.y = 600 - this.height;
    }
  }

  public render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#108a66";
    ctx.fillText("@", this.x + 5, this.y + 12);
  }
}
