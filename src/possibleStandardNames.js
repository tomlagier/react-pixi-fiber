import { TYPES } from "./types";

// http://pixijs.download/release/docs/PIXI.DisplayObject.html
const eventsStandardNames = {
  added: "added",
  click: "click",
  mousedown: "mousedown",
  mousemove: "mousemove",
  mouseout: "mouseout",
  mouseover: "mouseover",
  mouseup: "mouseup",
  mouseupoutside: "mouseupoutside",
  pointercancel: "pointercancel",
  pointerdown: "pointerdown",
  pointermove: "pointermove",
  pointerout: "pointerout",
  pointerover: "pointerover",
  pointertap: "pointertap",
  pointerup: "pointerup",
  pointerupoutside: "pointerupoutside",
  removed: "removed",
  rightclick: "rightclick",
  rightdown: "rightdown",
  rightup: "rightup",
  rightupoutside: "rightupoutside",
  tap: "tap",
  touchcancel: "touchcancel",
  touchend: "touchend",
  touchendoutside: "touchendoutside",
  touchmove: "touchmove",
  touchstart: "touchstart",
};

// http://pixijs.download/release/docs/PIXI.DisplayObject.html
const displayObjectStandardNames = {
  ...eventsStandardNames,
  alpha: "alpha",
  buttonmode: "buttonMode",
  cacheasbitmap: "cacheAsBitmap",
  cursor: "cursor",
  filterarea: "filterArea",
  filters: "filters",
  hitarea: "hitArea",
  interactive: "interactive",
  mask: "mask",
  name: "name",
  pivot: "pivot",
  position: "position",
  renderable: "renderable",
  rotation: "rotation",
  scale: "scale",
  skew: "skew",
  transform: "transform",
  visible: "visible",
  x: "x",
  y: "y",
};

// http://pixijs.download/release/docs/PIXI.Container.html
const containerStandardNames = {
  ...displayObjectStandardNames,
  height: "height",
  interactivechildren: "interactiveChildren",
  width: "width",
};

// http://pixijs.download/release/docs/PIXI.extras.BitmapText.html
const bitmapTextStandardNames = {
  ...containerStandardNames,
  align: "align",
  anchor: "anchor",
  font: "font",
  maxwidth: "maxWidth",
  text: "text",
  tint: "tint",
};

// http://pixijs.download/release/docs/PIXI.Graphics.html
const graphicsStandardNames = {
  ...containerStandardNames,
  blendmode: "blendMode",
  boundspadding: "boundsPadding",
  cacheasbitmap: "cacheAsBitmap",
  fillalpha: "fillAlpha",
  ismask: "isMask",
  linecolor: "lineColor",
  linewidth: "lineWidth",
  nativelines: "nativeLines",
  tint: "tint",
};

// http://pixijs.download/release/docs/PIXI.particles.ParticleContainer.html
const particleContainerStandardNames = {
  ...containerStandardNames,
  autoResize: "autoResize",
  batchsize: "batchSize",
  blendmode: "blendMode",
  interactivechildren: "interactiveChildren",
  maxsize: "maxSize",
  properties: "properties",
  roundPixels: "roundPixels",
  tint: "tint",
};

// http://pixijs.download/release/docs/PIXI.Sprite.html
const spriteStandardNames = {
  ...containerStandardNames,
  anchor: "anchor",
  blendmode: "blendMode",
  height: "height",
  pluginname: "pluginName",
  shader: "shader",
  texture: "texture",
  tint: "tint",
  width: "width",
};

// http://pixijs.download/release/docs/PIXI.Text.html
const textStandardNames = {
  ...containerStandardNames,
  canvas: "canvas",
  context: "context",
  height: "height",
  resolution: "resolution",
  style: "style",
  text: "text",
  width: "width",
};

// http://pixijs.download/release/docs/PIXI.extras.TilingSprite.html
const tilingSpriteStandardNames = {
  ...containerStandardNames,
  clampmargin: "clampMargin",
  height: "height",
  pluginname: "pluginName",
  tileposition: "tilePosition",
  tilescale: "tileScale",
  tiletransform: "tileTransform",
  uvrespectanchor: "uvRespectAnchor",
  uvtransform: "uvTransform",
  width: "width",
};

const possibleStandardNames = {
  [TYPES.BITMAP_TEXT]: bitmapTextStandardNames,
  [TYPES.CONTAINER]: containerStandardNames,
  [TYPES.GRAPHICS]: graphicsStandardNames,
  [TYPES.PARTICLE_CONTAINER]: particleContainerStandardNames,
  [TYPES.SPRITE]: spriteStandardNames,
  [TYPES.TEXT]: textStandardNames,
  [TYPES.TILING_SPRITE]: tilingSpriteStandardNames,
};

export default possibleStandardNames;
