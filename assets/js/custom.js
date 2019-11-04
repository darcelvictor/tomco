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

try {
  var config = function config(myValues, myTxt) {
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
  };

  var drawMyChart = function drawMyChart(myId) {
    var ctx1 = document.getElementById(myId).getContext("2d");
    var myValues1 = document.getElementById(myId).dataset.values;
    var myTxt1 = document.getElementById(myId).dataset.text;
    myValues1 = myValues1.split(",");
    myTxt1 = String(myTxt1);
    var config1 = new config(myValues1, myTxt1);
    var myChart = new Chart(ctx1, config1);
  };

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
  ;
  ;
  drawMyChart("myChart1");
  drawMyChart("myChart2");
  drawMyChart("myChart3");
} catch (e) {
  console.error(e);
}
"use strict";

window.onload = function () {
  try {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 200,
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
          "image": {}
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
          "distance": 100,
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
      "retina_detect": true
    });
  } catch (e) {
    console.error(e);
    console.clear();
  }
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

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function () {
  var container, button, menu, links, i, len;
  container = document.getElementById('site-navigation');

  if (!container) {
    return;
  }

  button = container.getElementsByTagName('button')[0];

  if ('undefined' === typeof button) {
    return;
  }

  menu = container.getElementsByTagName('ul')[0]; // Hide menu toggle button if menu is empty and return early.

  if ('undefined' === typeof menu) {
    button.style.display = 'none';
    return;
  }

  menu.setAttribute('aria-expanded', 'false');

  if (-1 === menu.className.indexOf('nav-menu')) {
    menu.className += ' nav-menu';
  }

  button.onclick = function () {
    if (-1 !== container.className.indexOf('toggled')) {
      container.className = container.className.replace(' toggled', '');
      button.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-expanded', 'false');
    } else {
      container.className += ' toggled';
      button.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-expanded', 'true');
    }
  }; // Get all the link elements within the menu.


  links = menu.getElementsByTagName('a'); // Each time a menu link is focused or blurred, toggle focus.

  for (i = 0, len = links.length; i < len; i++) {
    links[i].addEventListener('focus', toggleFocus, true);
    links[i].addEventListener('blur', toggleFocus, true);
  }
  /**
   * Sets or removes .focus class on an element.
   */


  function toggleFocus() {
    var self = this; // Move up through the ancestors of the current link until we hit .nav-menu.

    while (-1 === self.className.indexOf('nav-menu')) {
      // On li elements toggle the class .focus.
      if ('li' === self.tagName.toLowerCase()) {
        if (-1 !== self.className.indexOf('focus')) {
          self.className = self.className.replace(' focus', '');
        } else {
          self.className += ' focus';
        }
      }

      self = self.parentElement;
    }
  }
  /**
   * Toggles `focus` class to allow submenu access on tablets.
   */


  (function (container) {
    var touchStartFn,
        i,
        parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');

    if ('ontouchstart' in window) {
      touchStartFn = function touchStartFn(e) {
        var menuItem = this.parentNode,
            i;

        if (!menuItem.classList.contains('focus')) {
          e.preventDefault();

          for (i = 0; i < menuItem.parentNode.children.length; ++i) {
            if (menuItem === menuItem.parentNode.children[i]) {
              continue;
            }

            menuItem.parentNode.children[i].classList.remove('focus');
          }

          menuItem.classList.add('focus');
        } else {
          menuItem.classList.remove('focus');
        }
      };

      for (i = 0; i < parentLink.length; ++i) {
        parentLink[i].addEventListener('touchstart', touchStartFn, false);
      }
    }
  })(container);
})();
"use strict";

/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function () {
  var isIe = /(trident|msie)/i.test(navigator.userAgent);

  if (isIe && document.getElementById && window.addEventListener) {
    window.addEventListener('hashchange', function () {
      var id = location.hash.substring(1),
          element;

      if (!/^[A-z0-9_-]+$/.test(id)) {
        return;
      }

      element = document.getElementById(id);

      if (element) {
        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
          element.tabIndex = -1;
        }

        element.focus();
      }
    }, false);
  }
})();
"use strict";

try {
  var mySwiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination'
    },
    autoplay: {
      delay: 6000
    }
  });
} catch (e) {
  console.error(e);
}

console.clear();