let waves = [{
  id: 1,
  color: "#000",
  amplitude: 40,
  period: 80
}, {
  id: 2,
  color: "#000",
  amplitude: 40,
  period: 60
}, {
  id: 3,
  color: "#000",
  amplitude: 40,
  period: 40
}, {
  id: 4,
  color: "#000",
  amplitude: 40,
  period: 20
}];
function drawWave(ctx, wave) {
  ctx.strokeStyle = wave.color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  const x0 = 0;
  const y0 = ctx.canvas.height / 2;
  ctx.moveTo(x0, y0);
  for (let x = 0; x < ctx.canvas.width; x++) {
    const y = y0 - wave.amplitude * Math.sin(2 * Math.PI * x / wave.period);
    ctx.lineTo(x, y);
  }
  ctx.stroke();
  wave.points = [];
  const pixels = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height).data;
  for (let x = 0; x < ctx.canvas.width; x++) {
    const y = Math.round(y0 - wave.amplitude * Math.sin(2 * Math.PI * x / wave.period));
    const pixelIndex = (y * ctx.canvas.width + x) * 4;
    if (pixels[pixelIndex] > 0) {
      wave.points.push({
        x,
        y
      });
    }
  }
}
function drawWaves() {
  waves.forEach(wave => {
    const canvas = document.getElementById(`canvas${wave.id}`);
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWave(ctx, wave);
  });
}
function init() {
  waves.forEach(wave => {
    const canvas = document.getElementById(`canvas${wave.id}`);
    drawWave(canvas.getContext("2d"), wave);
  });
}
init();