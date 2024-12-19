Number.prototype.clamp = function(min, max) 
{
  return Math.max(min, Math.min(this, max));
};

const timestamp = _ => new Date().getTime();

const accelerate = (v, accel, dt) => v + accel * dt;

const isCollide = (x1, w1, x2, w2) => (x1 - x2) ** 2 <= (w2 + w1) ** 2;

function getRand(min, max) 
{
  return (Math.random() * (max - min) + min) | 0;
}

function randomProperty(obj) 
{
  let keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
}
//i understand this next one up to 'px', is it adding a string to the result?
function drawQuad(element, layer, color, x1, y1, w1, x2, y2, w2) 
{
  element.style.zIndex = layer;
  element.style.background = color;
  element.style.top = y2 + `px`;
  element.style.left = x1 - w1 / 2 - w1 + `px`;
  element.style.width = w1 * 3 + `px`;
  element.style.height = y1 - y2 + `px`;

  let leftOffset = w1 + x2 - x1 + Math.abs(w2 / 2 - w1 / 2);
  element.style.clipPath = `polygon(${leftOffset}px 0, ${leftOffset +
    w2}px 0, 66.66% 100%, 33.33% 100%)`;
}
