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

  var getMaxTime = function (timesArr) {
    var max = -1;
    for (var i = 0; i < timesArr.length; i++) {
      var time = timesArr[i];
      if (time > max) {
        max = time;
      }
    }

    return max;
  };

  var getRandomColor = function () {
    return 'rgba(0, 0, 255, ' + Math.random() + ')';
  };

  var drawBar = function (x, y, width, height) {
    ctx.fillRect(x, y, width, height);
  };

  var drawText = function (text, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  };

  var maxTime = getMaxTime(times);

  var histogramHeight = 150;
  var step = histogramHeight / maxTime;

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

    var barX = initialX + (barWidth + indent) * i;
    var barY = initialY;
    var barHeight = -(times[i] * step);
    var textY = initialY + 20;
    var color = '#000000';
    var timeY = initialY - times[i] * step - 10;

    drawBar(barX, barY, barWidth, barHeight);
    drawText(names[i], barX, textY, color);
    drawText(times[i].toFixed(0), barX, timeY, color);
  }
};
