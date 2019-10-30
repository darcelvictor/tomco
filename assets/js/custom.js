"use strict";

/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */
(function ($) {
  // Site title and description.
  wp.customize('blogname', function (value) {
    value.bind(function (to) {
      $('.site-title a').text(to);
    });
  });
  wp.customize('blogdescription', function (value) {
    value.bind(function (to) {
      $('.site-description').text(to);
    });
  }); // Header text color.

  wp.customize('header_textcolor', function (value) {
    value.bind(function (to) {
      if ('blank' === to) {
        $('.site-title, .site-description').css({
          'clip': 'rect(1px, 1px, 1px, 1px)',
          'position': 'absolute'
        });
      } else {
        $('.site-title, .site-description').css({
          'clip': 'auto',
          'position': 'relative'
        });
        $('.site-title a, .site-description').css({
          'color': to
        });
      }
    });
  });
})(jQuery);
"use strict";

Chart.pluginService.register({
  afterUpdate: function afterUpdate(chart) {
    if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
      var arc = chart.getDatasetMeta(0).data[chart.config.options.elements.arc.roundedCornersFor];
      arc.round = {
        x: (chart.chartArea.left + chart.chartArea.right) / 2,
        y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
        radius: (chart.outerRadius + chart.innerRadius) / 2,
        thickness: (chart.outerRadius - chart.innerRadius) / 2 - 1,
        backgroundColor: arc._model.backgroundColor
      };
    }
  },
  afterDraw: function afterDraw(chart) {
    if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
      var ctx = chart.chart.ctx;
      var arc = chart.getDatasetMeta(0).data[chart.config.options.elements.arc.roundedCornersFor];
      var startAngle = Math.PI / 2 - arc._view.startAngle;
      var endAngle = Math.PI / 2 - arc._view.endAngle;
      ctx.save();
      ctx.translate(arc.round.x, arc.round.y);
      console.log(arc.round.startAngle);
      ctx.fillStyle = arc.round.backgroundColor;
      ctx.beginPath();
      ctx.arc(arc.round.radius * Math.sin(startAngle), arc.round.radius * Math.cos(startAngle), arc.round.thickness, 0, 2 * Math.PI);
      ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }
}); // write text plugin

Chart.pluginService.register({
  afterUpdate: function afterUpdate(chart) {
    var helpers;
    var centerConfig;
    var globalConfig;
    var ctx;
    var fontStyle;
    var fontFamily;
    var fontSize;

    if (chart.config.options.elements.center) {
      helpers = Chart.helpers;
      centerConfig = chart.config.options.elements.center;
      globalConfig = Chart.defaults.global;
      ctx = chart.chart.ctx;
      fontStyle = helpers.getValueOrDefault(centerConfig.fontStyle, globalConfig.defaultFontStyle);
      fontFamily = helpers.getValueOrDefault(centerConfig.fontFamily, globalConfig.defaultFontFamily);

      if (centerConfig.fontSize) {
        fontSize = centerConfig.fontSize;
      } else {
        ctx.save();
        fontSize = helpers.getValueOrDefault(centerConfig.minFontSize, 1);
        ctx.restore();
      }

      var newChart = chart;
      newChart.center = {
        font: helpers.fontString(fontSize, fontStyle, fontFamily),
        fillStyle: helpers.getValueOrDefault(centerConfig.fontColor, globalConfig.defaultFontColor)
      };
    }
  },
  afterDraw: function afterDraw(chart) {
    if (chart.center) {
      var centerConfig = chart.config.options.elements.center;
      var ctx = chart.chart.ctx;
      ctx.save();
      ctx.font = chart.center.font;
      ctx.fillStyle = chart.center.fillStyle;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
      var helpers = Chart.helpers;
      var fontSize = helpers.getValueOrDefault(centerConfig.minFontSize, 1);
      var text = centerConfig.text1.split('<br>');
      ctx.fillText(text[0], centerX, centerY - fontSize / 2);
      ctx.fillText(text[1], centerX, centerY + fontSize / 2);
      ctx.fillText(centerConfig.text, centerX, centerY);
      ctx.restore();
    }
  }
});

function config(myValues, myTxt) {
  this.type = 'doughnut', this.data = {
    datasets: [{
      data: myValues,
      backgroundColor: ["#5DC976", "#232741"]
    }]
  }, this.options = {
    maintainAspectRatio: false,
    cutoutPercentage: 80,
    title: {
      display: false
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    elements: {
      arc: {
        roundedCornersFor: 0
      },
      center: {
        // the longest text that could appear in the center
        maxText: '50%',
        text: '',
        text1: myTxt,
        fontColor: '#000000',
        fontFamily: "'muli', sans-serif",
        fontStyle: 'normal',
        //fontSize: 12,
        // if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
        // if these are not specified either, we default to 1 and 256
        minFontSize: 23,
        maxFontSize: 23
      }
    }
  };
}

;

function drawMyChart(myId) {
  var ctx1 = document.getElementById(myId).getContext("2d");
  var myValues1 = document.getElementById(myId).dataset.values;
  var myTxt1 = document.getElementById(myId).dataset.text;
  myValues1 = myValues1.split(",");
  myTxt1 = String(myTxt1);
  var config1 = new config(myValues1, myTxt1);
  var myChart = new Chart(ctx1, config1);
}

;
drawMyChart("myChart1");
drawMyChart("myChart2");
drawMyChart("myChart3");
"use strict";

window.onload = function () {
  console.log("Loading particles.js");
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 160,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 50,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false
  });
  console.log("Particles.js is running");
}; // var myElement = document.getElementById('mySecondCanvas');
// var ctx1 = myElement.getContext('2d');
// var myValue = monelement.dataset.value;
// var myDoughnutChart = new Chart(ctx1, {
//     type: 'doughnut',
//     data: [75],
//     options:{
//       backgroundColor : 'rgba(0, 0, 0, 0.1)',
//     }
// });
"use strict";

var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination'
  },
  autoplay: {
    delay: 6000
  }
});