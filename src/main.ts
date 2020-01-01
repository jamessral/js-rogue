window.onload = () => {
  let canvas = document.createElement("canvas");
  canvas.height = 800;
  canvas.width = 600;
  document.body.appendChild(canvas);

  let ctx = canvas.getContext("2d");

  let player = new Player(20, 20, 20, 20);

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    switch (event.code) {
      case "ArrowRight": {
        player.x += 20;
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

  public render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#efea23";
    ctx.fillRect(this.x, this.y, 20, 20);
  }
}
