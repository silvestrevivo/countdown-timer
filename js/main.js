//AutoCall function to display SVG
(function countdownTimer(){

  //VARIABLES
  var canvas = d3.select('#countdownTimer')
              .append('svg')
              // .attr('width', 1010) //for absolute distance
              // .attr('height', 300) //for absolute distance
              .attr('viewBox', '0 0 1010 300'); //responsive design

  var lineCircle = 'M0,88.65894039735099 C0,39.69395523178804 39.69395523178798,0 88.65894039735088,0 C137.6239255629141,0 177.31788079470198,39.69395523178804 177.31788079470198,88.65894039735099 C177.31788079470198,137.6239255629137 137.6239255629141,177.31788079470198 88.65894039735088,177.31788079470198 C39.69395523178798,177.31788079470198 0,137.6239255629137 0,88.65894039735099 Z ';

  var lineRectangle = 'M46.05205984832935,-1.1368683772161603e-13 L263.9479401516703,-1.1368683772161603e-13 Q310,-1.1368683772161603e-13 310,46.405762304921865 L310,113.59423769507796 Q310,159.9999999999999 263.9479401516703,159.9999999999999 L46.05205984832935,159.9999999999999 Q0,159.9999999999999 0,113.59423769507796 L0,46.405762304921865 Q0,-1.1368683772161603e-13 46.05205984832935,-1.1368683772161603e-13 Z';

  var currently = new Date().toDateString();
      document.querySelector('#currently').innerHTML = currently;

  var offsetCircle = 558;
  var offsetRectangle = 870;

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
          .attr("stroke", "url(#svgGradient)")
          .attr("fill", "none")
          .attr('stroke-width', 3)
          .attr('stroke-miterlimit', 3)
          .attr('fill', 'none')
          .attr('class', 'circleBig1')
          .attr('stroke-dasharray', offsetCircle)
          .attr('stroke-dashoffset', -offsetCircle)
          .attr('stroke-linecap', 'round');
  //circleSmall
  circle1.append('path')
          .attr('d', lineCircle)
          //.attr('stroke', 'blue')
          .attr("stroke", "url(#svgGradient)")
          .attr("fill", "none")
          .attr('stroke-width', 3)
          .attr('stroke-miterlimit', 3)
          .attr('fill', 'none')
          .attr('class', 'circleSmall');
  //Text Numer
  circle1.append('text')
        .attr('transform', 'translate(90, 120)')
        .attr("fill", "url(#svgGradient)")
        .text('0')
        .style('font-size',80)
        .style('font-family', 'Verdana, sans-serif')
        .style('font-weight', 'bold')
        .attr('text-anchor', 'middle')
        .attr('class', 'text-counter')
        .attr('id', 'text-counter1');
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
          .attr('stroke-width', 3)
          .attr('stroke-miterlimit', 3)
          .attr('fill', 'none')
          .attr('class', 'circleBig2')
          .attr('stroke-dasharray', offsetCircle)
          .attr('stroke-dashoffset', -offsetCircle)
          .attr('stroke-linecap', 'round');
  //circleSmall
  circle2.append('path')
          .attr('d', lineCircle)
          .attr("stroke", "url(#svgGradient)")
          .attr("fill", "none")
          .attr('stroke-width', 3)
          .attr('stroke-miterlimit', 3)
          .attr('fill', 'none')
          .attr('class', 'circleSmall');
  //Text Numer
  circle2.append('text')
        .attr('transform', 'translate(90, 120)')
        .attr("fill", "url(#svgGradient)")
        .text('0')
        .style('font-size',80)
        .style('font-family', 'Verdana, sans-serif')
        .style('font-weight', 'bold')
        .attr('text-anchor', 'middle')
        .attr('class', 'text-counter')
        .attr('id', 'text-counter2');
  //Text Title
  circle2.append('text')
        .attr('transform', 'translate(90, 250)')
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
          .attr("stroke", "url(#svgGradient)")
          .attr("fill", "none")
          .attr('stroke-width', 3)
          .attr('stroke-miterlimit', 3)
          .attr('fill', 'none')
          .attr('class', 'circleBig3')
          .attr('stroke-dasharray', offsetCircle)
          .attr('stroke-dashoffset', -offsetCircle)
          .attr('stroke-linecap', 'round');
  //circleSmall
  circle3.append('path')
          .attr('d', lineCircle)
          .attr("stroke", "url(#svgGradient)")
          .attr("fill", "none")
          .attr('stroke-width', 3)
          .attr('stroke-miterlimit', 3)
          .attr('fill', 'none')
          .attr('class', 'circleSmall');
  //Text Numer
  circle3.append('text')
        .attr('transform', 'translate(90, 120)')
        .attr("fill", "url(#svgGradient)")
        .text('0')
        .style('font-size',80)
        .style('font-family', 'Verdana, sans-serif')
        .style('font-weight', 'bold')
        .attr('text-anchor', 'middle')
        .attr('class', 'text-counter')
        .attr('id', 'text-counter3');
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
                  .attr('class', 'rectangle')
                  .attr('transform', 'translate( 680, 27)');
  //reactangleBig
  rectangle.append('path')
          .attr('d', lineRectangle)
          //.attr('stroke', 'blue')
          .attr("stroke", "url(#svgGradient)")
          .attr("fill", "none")
          .attr('stroke-width', 3)
          .attr('stroke-miterlimit', 3)
          .attr('fill', 'none')
          .attr('class', 'rectangleBig')
          .attr('stroke-dasharray', offsetRectangle)
          .attr('stroke-dashoffset', -offsetRectangle)
          .attr('stroke-linecap', 'round');
  //reactangleSmall
  rectangle.append('path')
          .attr('d', lineRectangle)
          .attr("stroke", "url(#svgGradient)")
          .attr("fill", "none")
          //.attr('stroke', 'blue')
          .attr('stroke-width', 3)
          .attr('stroke-miterlimit', 3)
          .attr('fill', 'none')
          .attr('class', 'rectangleSmall');
  //Text Numer
  rectangle.append('text')
        .attr('transform', 'translate(155, 110)')
        //.attr('fill', 'blue')
        .attr("fill", "url(#svgGradient)")
        .text('0')
        .style('font-size',80)
        .style('font-family', 'Verdana, sans-serif')
        .style('font-weight', 'bold')
        .attr('text-anchor', 'middle')
        .attr('class', 'text-counter')
        .attr('id', 'text-counter4');
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


  var shape = document.querySelector('.circleBig1');
  //console.log(shape.getTotalLength());

})();


//Function Counter Number animation
function animateValue(id, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function() {
      current += increment;
      //obj.innerHTML = current;
      $(obj).text(current)
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
}



//ACTIONS AFTER SVG DISPLAY

//We listen de imput event
var inputDate = document.querySelector('#dateInput');
inputDate.addEventListener('input', function(event){

  // Set the date we're counting down to
  var countDownDate = new Date(event.target.value).getTime();
  // Get todays date and time
  var now = new Date().getTime();
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  //results
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // console.log(days);
  // console.log(hours);
  // console.log(minutes);
  // console.log(seconds);

  //set timer at zero
  $('#text-counter*').text('0');
  $('path.circleBig1, path.circleBig2, path.circleBig3').attr('stroke-dashoffset', -557);
  $('path.rectangleBig').attr('stroke-dashoffset', -870);

  //Calling the counter
  if(distance < 0){
    $('#text-counter1, #text-counter2, #text-counter3, #text-counter4').text('0');
    return false;
  } else{

    animateValue("text-counter1", 0, days, 750);
    animateValue("text-counter2", 0, hours, 750);
    animateValue("text-counter3", 0, minutes, 750);
    animateValue("text-counter4", 0, 125, 750);

    d3.select('path.circleBig1').transition()
      .duration(1000)
      .attr('stroke-width', 12)
      .attr('stroke-dashoffset', -700);

    d3.select('path.circleBig2').transition()
      .duration(1000)
      .attr('stroke-width', 12)
      .attr('stroke-dashoffset', -577 - (hours/24) * 577);

    d3.select('path.circleBig3').transition()
      .duration(1000)
      .attr('stroke-width', 12)
      .attr('stroke-dashoffset', -577 - (minutes/60) * 577);

    d3.select('path.rectangleBig').transition()
      .duration(1000)
      .attr('stroke-width', 12)
      .attr('stroke-dashoffset', -1600);
  }

});
