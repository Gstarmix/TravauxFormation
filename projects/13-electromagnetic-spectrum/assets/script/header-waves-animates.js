let waves2 = [{
  id: 1,
  color: "#000",
  amplitude: 40,
  period: 90
}, {
  id: 2,
  color: "#000",
  amplitude: 40,
  period: 70
}, {
  id: 3,
  color: "#000",
  amplitude: 40,
  period: 50
}];
function drawWave(ctx, wave, time) {
  ctx.strokeStyle = wave.color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  const x0 = 0;
  const y0 = ctx.canvas.height / 2;
  ctx.moveTo(x0, y0);
  for (let x = 0; x < ctx.canvas.width; x++) {
    const y = y0 - wave.amplitude * Math.sin(2 * Math.PI * x / wave.period + time * 100 * Math.PI / (1000 * wave.period));
    ctx.lineTo(x, y);
  }
  ctx.stroke();
}
function drawWaves() {
  const now = new Date();
  const time = now.getTime();
  waves2.forEach(wave => {
    const canvas = document.getElementById(`canvasAnimate${wave.id}`);
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWave(ctx, wave, time);
  });
  requestAnimationFrame(drawWaves);
}
function init() {
  waves2.forEach(wave => {
    const canvas = document.getElementById(`canvasAnimate${wave.id}`);
    drawWave(canvas.getContext("2d"), wave, 0);
  });
  requestAnimationFrame(drawWaves);
}
init();