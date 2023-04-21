import Particle from './js/Particle.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const dpr = window.devicePixelRatio;
let canvasWidth = innerWidth;
let canvasHeight = innerHeight;
const interval = 1000 / 60;

const particles = [];

function init() {
  canvasWidth = innerWidth;
  canvasHeight = innerHeight;
  
  canvas.style.width = canvasWidth + 'px';
  canvas.style.height = canvasHeight + 'px';
  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;
  ctx.scale(dpr, dpr);
}

function createRing() {
  const PARTICLE_NUM = 1000;
  for (let i = 0; i < PARTICLE_NUM; i++) {
    particles.push(new Particle());
  }
}

function render() {
  let now, delta
  let then = Date.now(); 

  const frame = () => {
    requestAnimationFrame(frame)
    now = Date.now();
    delta = now - then;
  
    if (delta < interval) return

    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    for (let i = particles.length - 1; i >= 0; i-- ) {
      particles[i].update();
      particles[i].draw(ctx);

      if(particles[i].opacity < 0) particles.splice(i, 1);
    }
  
    then = now - (delta % interval);
  }
  requestAnimationFrame(frame)
}

window.addEventListener('load', () => {
  init();
  render();
})

window.addEventListener('resize', () => {
  init();
})

window.addEventListener('click', () => {
  createRing();
})