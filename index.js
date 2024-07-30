const app = new PIXI.Application();
await app.init({width:1920, height: 1080});
document.body.appendChild(app.canvas);

await PIXI.Assets.load('pixelFox.png');
let sprite = PIXI.Sprite.from('pixelFox.png');
app.stage.addChild(sprite);

let elapsed = 0.0;
app.ticker.add((ticker)=>{
    elapsed += ticker.deltaTime;
    sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
});