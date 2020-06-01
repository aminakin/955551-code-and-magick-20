'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;
var BORDER_PADDING = 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  renderText(ctx, 'Ура, вы победили!', CLOUD_X + BORDER_PADDING, CLOUD_Y + BORDER_PADDING);
  renderText(ctx, 'Список результатов:', CLOUD_X + BORDER_PADDING, CLOUD_Y + 2 * BORDER_PADDING);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'hsl(240, 100%, ' + Math.round((Math.random() * 100)) + '%)';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(CLOUD_X + BORDER_PADDING * 2 + (BAR_GAP + BAR_WIDTH) * i, 95 + BAR_MAX_HEIGHT - Math.round((BAR_MAX_HEIGHT * times[i]) / maxTime), BAR_WIDTH, Math.round((BAR_MAX_HEIGHT * times[i]) / maxTime));
    renderText(ctx, players[i], CLOUD_X + BORDER_PADDING * 2 + (BAR_GAP + BAR_WIDTH) * i, BORDER_PADDING * 4.75 + BAR_MAX_HEIGHT + GAP);
    renderText(ctx, Math.round(times[i]), CLOUD_X + BORDER_PADDING * 2 + (BAR_GAP + BAR_WIDTH) * i, BORDER_PADDING * 4.75 + BAR_MAX_HEIGHT - Math.round((BAR_MAX_HEIGHT * times[i]) / maxTime) - BORDER_PADDING);
  }
};
