'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 56);

  var max = -1;

  var getMaxTime = function (times) {
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }

    return max;
  }

  var getRandomColor = function () {
    return 'rgba(0, 0, 255, ' + Math.random() + ')';
  }

  var drawBar = function (initialX, initialY, barWidth, indent) {
    ctx.fillRect(initialX + (barWidth + indent) * i, initialY, barWidth, -(times[i] * step));
  }

  var drawText = function (names, initialX, initialY, barWidth, indent) {
    ctx.fillText(names[i], initialX + (barWidth + indent) * i, initialY + 20);
  }

  var drawTime = function (times, initialX, initialY, barWidth, indent) {
    ctx.fillText(times[i].toFixed(0), initialX + (barWidth + indent) * i, initialY - times[i] * step - 10);
  }

  getMaxTime(times);

  var histogramHeight = 150;
  var step = histogramHeight / max;

  var initialX = 140;
  var initialY = 240;
  var barWidth = 40;
  var indent = 50;

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor();
    }
    drawBar(initialX, initialY, barWidth, indent);
    ctx.fillStyle = '#000000';
    drawText(names, initialX, initialY, barWidth, indent);
    drawTime(times, initialX, initialY, barWidth, indent);
  }
};
