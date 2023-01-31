/*
 ****************************
 *       Preferences        *
 *    by widgetschmie.de    *
 ****************************
 */


var _sections = new Array('look', 'physics', 'about');
var DEF_OP = 0.85;


function showPrefs() {
	if(KIOSK_MODE)
		return;
	
	var front = getObj("front");
	var back = getObj("back");
	
	if(window.widget) {
		window.resizeTo(250, 180);
		widget.prepareForTransition("ToBack");
	}
	
	front.style.display = "none";
	back.style.display = "block";
	
	theField.togglePause(1);
	
	// the opacity slider; need to wait till here and the back is visible to the webkit
	slider.areaWidth = parseInt(getComputedValue('width', getObj('opacityArea')));
	slider.leftOffset = Math.round((window.innerWidth - slider.areaWidth) / 2);
	slider.sliderWidth = parseInt(getComputedValue('width', getObj('opacitySlider')));
	
	adjustPrefs();		// adjusts the prefs
	getCurrentVersion();		// sets version-number
	
	if(window.widget)
		setTimeout("widget.performTransition();", 0);
}


// adjusts the prefs and sets important variables
function adjustPrefs() {
	var prefform = getObj('prefform');
	
	prefform.elements['clocktype'][(12 == _clocktype) ? 0 : 1].checked = true;
	prefform.elements['bouncemode'][('absolute' == _bouncemode) ? 1 : 0].checked = true;
	prefform.elements['showglass'].checked = _showglass;
	prefform.elements['fullscreen_showglass'].checked = _fullscreen_showglass;
	prefform.elements['ballinterval'][(20 == _ball_interval) ? 1 : 0].checked = true;
	
	setSliderTo(_fullscreen_opacity);
}


function savePrefs() {
	var prefform = getObj('prefform');
	
	// get clock type
	var clocktypes = prefform.elements['clocktype'];
	_clocktype = clocktypes[0].checked ? 12 : 24;
	
	// get if glass should be shown
	_showglass = prefform.elements['showglass'].checked;
	_fullscreen_showglass = prefform.elements['fullscreen_showglass'].checked;
	theField.showGlass(_showglass);
	
	// get bounce mode
	var bouncemodes = prefform.elements['bouncemode'];
	_bouncemode = bouncemodes[0].checked ? 'relative' : 'absolute';
	
	// get CPU usage
	var intvls = prefform.elements['ballinterval'];
	_ball_interval = intvls[1].checked ? 20 : 40;
	
	// save all
	if(window.widget) {
		widget.setPreferenceForKey(_clocktype, 'clocktype');
		widget.setPreferenceForKey(_showglass, 'showglass');
		widget.setPreferenceForKey(_fullscreen_showglass, 'fullscreen_showglass');
		widget.setPreferenceForKey(_fullscreen_opacity, 'opacity');
		widget.setPreferenceForKey(_bouncemode, 'bouncemode');
		widget.setPreferenceForKey(_ball_interval, 'ballinterval');
	}
	
	hidePrefs();
}


function hidePrefs() {
	var front = getObj("front");
	var back = getObj("back");
	
	if(window.widget) {
		widget.prepareForTransition("ToFront");
		window.resizeTo(166, 126);
	}
	
	front.style.display = "block";
	back.style.display = "none";
	
	setTimeout("play(theField)", 600);
	
	if(window.widget)
		setTimeout("widget.performTransition();", 0);
}


function switchPrefTab(tab)
{
	var found = false;
	var thedivs = _sections ? _sections : new Array();
	
	for(var i = 0; i < thedivs.length; i++) {
		if(tab == thedivs[i]) {
			getObj("tab_" + thedivs[i]).setAttribute("class", "tabitem selected");
			getObj("prefs_" + thedivs[i]).style.display = "block";
			found = true;
		}
		else {
			getObj("tab_" + thedivs[i]).setAttribute("class", "tabitem");
			getObj("prefs_" + thedivs[i]).style.display = "none";
		}
	}
	
	if(!found) {
		getObj("prefs_widget").style.display = "block";
	}
}


function scrollDivTo(div, anchor) {
	var div = getObj(div);
	var anchor = getObj(anchor);
	if(div && anchor) {
		div.scrollTop = anchor.offsetTop;
	}
}


function getClockType() {
	var type = 24;
	if(window.widget) {
		type = widget.preferenceForKey('clocktype');
		type = (24 == type || 12 == type) ? type : 24;
	}
	
	return type;
}

function getOpacity() {
	var op = DEF_OP;
	if(window.widget) {
		op = widget.preferenceForKey('opacity');
		op = (op >= 0 && op <= 1) ? op : DEF_OP;
	}
	
	return op;
}

function getBounceMode() {
	var mode = 'relative';
	if(window.widget) {
		mode = widget.preferenceForKey('bouncemode');
		mode = ('absolute' == mode) ? mode : 'relative';
	}
	
	return mode;
}

function getShowGlass() {
	var show = true;
	if(window.widget) {
		show = widget.preferenceForKey('showglass');
		show = (null != show) ? show : true;
	}
	
	return show;
}

function getFullscreenShowGlass() {
	var show = false;
	if(window.widget) {
		show = widget.preferenceForKey('fullscreen_showglass');
		show = (null != show) ? show : false;
	}
	
	return show;
}

function getBallInterval() {
	var intv = 40;
	if(window.widget) {
		intv = widget.preferenceForKey('ballinterval');
		intv = (intv > 5) ? intv : 40;
	}
	
	return intv;
}



/*
 *	Opacity Slider
 */

var slider = { areaWidth:0, leftOffset:0, sliderWidth:0 }		// will be set on showPrefs()
var sliderActive = false;


function setSliderTo(op) {
	op = (op >= 0 && op <= 1) ? op : DEF_OP;
	var left = op * (slider.areaWidth - slider.sliderWidth);
	
	getObj('opacitySlider').style.left = left + 'px';
}


// adjusts opacity while dragging
function adjustOpacity(event) {
	if(sliderActive) {
		var x = (event.x - (slider.sliderWidth / 2)) - slider.leftOffset;
		var fraction = x / (slider.areaWidth - slider.sliderWidth);
		
		// round fraction to 0.05
		fraction = parseInt(fraction * 100);
		fraction -= (fraction % 5);
		fraction /= 100;
		fraction = (fraction < 0) ? 0 : ((fraction > 1) ? 1 : fraction);
		
		// show effects
		setSliderTo(fraction);
		//getObj('back').style.opacity = fraction;
		
		var indicator = getObj('opacityValue');
		indicator.innerHTML = fraction;
		indicator.style.left = (1* x + ((fraction >= DEF_OP) ? -20 : 20)) + 'px';
		indicator.style.display = 'block';
		var css_class = (fraction < 0.15) ? 'opacityWarn' : 'opacityHint';
		indicator.setAttribute('class', (DEF_OP == fraction) ? 'opacityMark' : css_class);
		
		_fullscreen_opacity = fraction;
	}
	else {
		sliderReleased();
	}
}

function sliderPressed(event) {
	sliderActive = true;
	document.addEventListener('mousemove', adjustOpacity, false);
	document.addEventListener('mouseup', sliderReleased, false);
}

function sliderReleased() {
	sliderActive = false;
	document.removeEventListener('mousemove', adjustOpacity, false);
	document.removeEventListener('mouseup', sliderReleased, false);
	
	resetSliderPreview();
}


function resetSliderPreview() {
	getObj('back').style.opacity = 1;
	getObj('opacityValue').style.display = 'none';
}






