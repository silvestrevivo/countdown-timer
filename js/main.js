(function countdownTimer(){

  //VARIABLES
  var canvas = d3.select('#countdownTimer')
              .append('svg')
              //.style('border', '1px solid red')
              // .attr('width', 1010)
              // .attr('height', 300)
              .attr('viewBox', '0 0 1010 300');

  var lineCircle = 'M0,88.65894039735099 C0,39.69395523178804 39.69395523178798,0 88.65894039735088,0 C137.6239255629141,0 177.31788079470198,39.69395523178804 177.31788079470198,88.65894039735099 C177.31788079470198,137.6239255629137 137.6239255629141,177.31788079470198 88.65894039735088,177.31788079470198 C39.69395523178798,177.31788079470198 0,137.6239255629137 0,88.65894039735099 Z ';

  var lineRectangle = 'M46.05205984832935,-1.1368683772161603e-13 L263.9479401516703,-1.1368683772161603e-13 Q310,-1.1368683772161603e-13 310,46.405762304921865 L310,113.59423769507796 Q310,159.9999999999999 263.9479401516703,159.9999999999999 L46.05205984832935,159.9999999999999 Q0,159.9999999999999 0,113.59423769507796 L0,46.405762304921865 Q0,-1.1368683772161603e-13 46.05205984832935,-1.1368683772161603e-13 Z';


  //Gradient
  var defs = canvas.append("defs");
  var gradient = defs.append("linearGradient")
     .attr("id", "svgGradient")
     .attr("x1", "0%")
     .attr("x2", "100%")
     .attr("y1", "0%")
     .attr("y2", "100%");
  gradient.append("stop")
     .attr('class', 'start')
     .attr("offset", "0%")
     .attr("stop-color", "#10c73b")//green
     .attr("stop-opacity", 1);
  gradient.append("stop")
     .attr('class', 'end')
     .attr("offset", "100%")
     .attr("stop-color", "#122e79") //blue
     .attr("stop-opacity", 1);

  //----------------------
  //GEOMETRY//
  //----------------------

  //CIRCLE1
  var circle1 = canvas.append('g')
                .attr('class', 'circle1')
                .attr('transform', 'translate(20, 20)');
  //circleBig
  circle1.append('path')
          .attr('d', lineCircle)
          //.attr('stroke', 'blue')
          .attr("stroke", "url(#svgGradient)")
          .attr("fill", "none")
          .attr('stroke-width', 20)
          .attr('stroke-miterlimit', 3) //????
          .attr('fill', 'none')
          .attr('class', 'circleBig')
          .attr('stroke-dasharray', 557)
          .attr('stroke-dashoffset', -557)
          .transition()
          .delay(500)
          .duration(1500)
          .attr('stroke-dashoffset', -400);
  //circleSmall
  circle1.append('path')
          .attr('d', lineCircle)
          //.attr('stroke', 'blue')
          .attr("stroke", "url(#svgGradient)")
          .attr("fill", "none")
          .attr('stroke-width', 5)
          .attr('stroke-miterlimit', 3) //????
          .attr('fill', 'none')
          .attr('class', 'circleSmall');
  //Text Numer
  circle1.append('text')
        .attr('transform', 'translate(90, 120)')
        //.attr('fill', 'blue')
        .attr("fill", "url(#svgGradient)")
        .text('25')
        .style('font-size',80)
        .style('font-family', 'Verdana, sans-serif')
        .style('font-weight', 'bold')
        .attr('text-anchor', 'middle')
        .attr('class', 'text-counter');
  //Text Title
  circle1.append('text')
        .attr('transform', 'translate(90, 250)')
        //.attr('fill', 'blue')
        .attr("fill", "url(#svgGradient)")
        .text('dagen')
        .style('font-size', 30)
        .style('font-family', 'Verdana')
        .attr('text-anchor', 'middle')
        .attr('class', 'text-title');


  //CIRCLE2
  var circle2 = canvas.append('g')
                .attr('class', 'circle2')
                .attr('transform', 'translate(240, 20)');
  //circleBig
  circle2.append('path')
          .attr('d', lineCircle)
          //.attr('stroke', 'blue')
          .attr("stroke", "url(#svgGradient)")
          .attr("fill", "none")
          .attr('stroke-width', 20)
          .attr('stroke-miterlimit', 3) //????
          .attr('fill', 'none')
          .attr('class', 'circleBig')
          .attr('stroke-dasharray', 557)
          .attr('stroke-dashoffset', -557)
          .transition()
          .delay(500)
          .duration(1500)
          .attr('stroke-dashoffset', -600);
  //circleSmall
  circle2.append('path')
          .attr('d', lineCircle)
          //.attr('stroke', 'blue')
          .attr("stroke", "url(#svgGradient)")
          .attr("fill", "none")
          .attr('stroke-width', 5)
          .attr('stroke-miterlimit', 3) //????
          .attr('fill', 'none')
          .attr('class', 'circleSmall');
  //Text Numer
  circle2.append('text')
        .attr('transform', 'translate(90, 120)')
        //.attr('fill', 'blue')
        .attr("fill", "url(#svgGradient)")
        .text('25')
        .style('font-size',80)
        .style('font-family', 'Verdana, sans-serif')
        .style('font-weight', 'bold')
        .attr('text-anchor', 'middle')
        .attr('class', 'text-counter');
  //Text Title
  circle2.append('text')
        .attr('transform', 'translate(90, 250)')
        //.attr('fill', 'blue')
        .attr("fill", "url(#svgGradient)")
        .text('uur')
        .style('font-size', 30)
        .style('font-family', 'Verdana')
        .attr('text-anchor', 'middle')
        .attr('class', 'text-title');

  //CIRCLE3
  var circle3 = canvas.append('g')
                .attr('class', 'circle3')
                .attr('transform', 'translate(460, 20)');
  //circleBig
  circle3.append('path')
          .attr('d', lineCircle)
          //.attr('stroke', 'blue')
          .attr("stroke", "url(#svgGradient)")
          .attr("fill", "none")
          .attr('stroke-width', 20)
          .attr('stroke-miterlimit', 3) //????
          .attr('fill', 'none')
          .attr('class', 'circleBig')
          .attr('stroke-dasharray', 557)
          .attr('stroke-dashoffset', -557)
          .transition()
          .delay(500)
          .duration(1500)
          .attr('stroke-dashoffset', -900);
  //circleSmall
  circle3.append('path')
          .attr('d', lineCircle)
          //.attr('stroke', 'blue')
          .attr("stroke", "url(#svgGradient)")
          .attr("fill", "none")
          .attr('stroke-width', 5)
          .attr('stroke-miterlimit', 3) //????
          .attr('fill', 'none')
          .attr('class', 'circleSmall');
  //Text Numer
  circle3.append('text')
        .attr('transform', 'translate(90, 120)')
        //.attr('fill', 'blue')
        .attr("fill", "url(#svgGradient)")
        .text('25')
        .style('font-size',80)
        .style('font-family', 'Verdana, sans-serif')
        .style('font-weight', 'bold')
        .attr('text-anchor', 'middle')
        .attr('class', 'text-counter');
  //Text Title
  circle3.append('text')
        .attr('transform', 'translate(90, 250)')
        //.attr('fill', 'blue')
        .attr("fill", "url(#svgGradient)")
        .text('minuten')
        .style('font-size', 30)
        .style('font-family', 'Verdana')
        .attr('text-anchor', 'middle')
        .attr('class', 'text-title');


  //Reactangle
  var rectangle = canvas.append('g')
                  .attr('class', 'reactangle')
                  .attr('transform', 'translate( 680, 27)');
  //reactangleBig
  rectangle.append('path')
          .attr('d', lineRectangle)
          //.attr('stroke', 'blue')
          .attr("stroke", "url(#svgGradient)")
          .attr("fill", "none")
          .attr('stroke-width', 20)
          .attr('stroke-miterlimit', 3) //????
          .attr('fill', 'none')
          .attr('class', 'reactangleBig')
          .attr('stroke-dasharray', 870)
          .attr('stroke-dashoffset', -870)
          .transition()
          .delay(500)
          .duration(1500)
          .attr('stroke-dashoffset', -1600);
  //reactangleSmall
  rectangle.append('path')
          .attr('d', lineRectangle)
          .attr("stroke", "url(#svgGradient)")
          .attr("fill", "none")
          //.attr('stroke', 'blue')
          .attr('stroke-width', 5)
          .attr('stroke-miterlimit', 3) //????
          .attr('fill', 'none')
          .attr('class', 'reactangleSmall');
  //Text Numer
  rectangle.append('text')
        .attr('transform', 'translate(155, 110)')
        //.attr('fill', 'blue')
        .attr("fill", "url(#svgGradient)")
        .text('250')
        .style('font-size',80)
        .style('font-family', 'Verdana, sans-serif')
        .style('font-weight', 'bold')
        .attr('text-anchor', 'middle')
        .attr('class', 'text-counter');
  //Text Title
  rectangle.append('text')
        .attr('transform', 'translate(150, 245)')
        //.attr('fill', 'blue')
        .attr("fill", "url(#svgGradient)")
        .text('verkopen')
        .style('font-size', 30)
        .style('font-family', 'Verdana')
        .attr('text-anchor', 'middle')
        .attr('class', 'text-title');


  var shape = document.querySelector('.reactangleBig');
  console.log(shape.getTotalLength());


})();
