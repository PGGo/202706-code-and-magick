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
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }


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
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(initialX + (barWidth + indent) * i, initialY, barWidth, -(times[i] * step));
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], initialX + (barWidth + indent) * i, initialY + 20);
    ctx.fillText(times[i].toFixed(0), initialX + (barWidth + indent) * i, initialY - times[i] * step - 10);
  }
};
