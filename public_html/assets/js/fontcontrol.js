(function($) {
class AlterTextColor {
  
  objects = new Array();
	
  constructor(obj, color) {
	  this.css(obj,color);
	  //obj.css("color",color);
  }
  
  css(object,color) {
	  //this.objects[object] = color;
	  this.objects.push([object,$(object)]);  
	  this.color = color;
	  this.object = object;
	  console.log(this.objects);
	  //this.objects[object].css("color",color);
	  return this.objects.find(this.findElem,this)[1].css("color",color);
  }
  
  findElem(element, index, array){
	  if ( element[0] == this.object ){
	    return element;
	  } 
  }
}

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
	console.log(scrollPos);
  // Do something with the scroll position
  if ( scrollPos == 0 ){
	let navbarAlterTextColor = new AlterTextColor('#mainNav.navbar-light.navbar-expand-md.navbar.navbar-expand-lg.fixed-top .nav-link','#800000');
  } else {
	let navbarAlterTextColor = new AlterTextColor('#mainNav.navbar-light.navbar-expand-md.navbar.navbar-expand-lg.fixed-top .nav-link','#fff');
  }

}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});


$('.flatpop').on('click', function() {
	$('.imagepreview').attr('src', $(this).attr('src'));
	$('#imagemodal').modal('show');   
});

})(jQuery); // End of use strict