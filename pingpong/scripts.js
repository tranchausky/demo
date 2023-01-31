/*
 *********************************************************************************************************************************************
 *  Copyright 2005-2007, Widgetschmiede                                                                                                      *
 *  http://www.widgetschmie.de/widgets/pongClock                                                                                             *
 *                                                                                                                                           *
 *  This Widget is Freeware and will always be. However, if you`d like to use some of its code, please tell us at "support@widgetschmie.de"  *
 *********************************************************************************************************************************************
 */



// Settings
var _mode = "clock";						// "clock" or "game"
var _clocktype = getClockType();				// can be '12' or '24' for 12- or 24-hours clock, respectively
var _bouncemode = getBounceMode();					// 'relative' or 'absolute'
var _fullscreen_opacity = getOpacity();					// fullscreen opacity (e.g. 0.85 = 85%)
var _showglass = getShowGlass();							// show or hide the glass? (bool)
var _fullscreen_showglass = getFullscreenShowGlass();			// show or hide the glass in fullscreen? (bool)
var _ball_interval = getBallInterval();						// milliseconds between each call to ballMove(). Prefs set this to 20ms for fast machines, 40ms for slower machines.

var KIOSK_MODE = false;							// disables Prefs? (bool)
var LAUNCH_FULLSCREEN = false;					// start in fullscreen mode? (bool)
var FULLSCREEN_CONTROLLER_TIMEOUT = 1200;		// milliseconds until the controller hides again
var DEBUG = false;								// display debug information


// Globals
var theField = null;
var paused = false;
var lastTimeUpdate = 0;


// dimension control
var ballControl = {
				ballSize:6,					// size of the ball and the width of the playerbars (orig:6)
				barHeight:24,				// height of the playerbars (orig:24)
				bounceDist:18,				// distance of the bar-surface (where the ball hits) to the border of the playfield
				fieldTotalWidth:150,		// width of the field (orig: 150)
				fieldTotalHeight:110,		// full height (orig: 110)
				
				startSpeed:1000,			// ms to perform one length of the playfield (till the player hits) (orig:1000)
				competitionSpeed:0.65,		// that much time of the total ball-time needs the human player to move the bar from top to bottom
				startAngle:30,				// positive angle means up, negative angle means down
				maxAngle:65					// maximum allowed angle
			};

// these are the same values as above, but only get applied to fullscreen-mode; if they are set to false, however, they'll be calculated from screen width
var fullscreenForce = {
				width:false,				// screen width
				height:false,				// screen height
				ballSize:false,				// screen width / 28
				barHeight:false,			// screen height / 5
				bounceDist:false,			// 3 * ballSize
				speed:false					// 50 * (screen width / ball size)
}

// game levels (speed)
var gameLevels = new Array();
gameLevels[0] = 1.4;
gameLevels[1] = 1.3;
gameLevels[2] = 1.2;
gameLevels[3] = 1.1;
gameLevels[4] = 1.0;
gameLevels[5] = 0.9;
gameLevels[6] = 0.8;
gameLevels[7] = 0.7;
gameLevels[8] = 0.6;
gameLevels[9] = 0.5;
gameLevels[10] = 0.4;
gameLevels[11] = 0.3;
gameLevels[12] = 0.2;

// used variables
var isFullscreen = false;

// Globals for Apple
var flipShown = false;
var animation = { timer:null, duration:0, starttime:0, to:1.0, now:0.0, from:0.0, firstElement:null, secondElement:null };




// Dashboard Setup
function setup() {
	_version = getCurrentVersion();
	switchPrefTab(_sections[0]);
	createGenericButton(getObj("done"), "done", savePrefs);
	
	// widget-events
	if(window.widget) {
		widget.onshow = onShow;
		widget.onhide = onHide;
		widget.onremove = doCleanup;
	}
	
	// images
	for(var i = 0; i < 10; i++) {
		var img = new Image();
		img.src = "./Images/smallDigits/" + i + ".gif";
		img.src = "./Images/largeDigits/" + i + ".gif";
	}
	
	// start
	theField = new Playfield();
	theField.showTime();
	
	if(LAUNCH_FULLSCREEN) {
		setTimeout("toggleFullscreen(null, true)", 50);
	}
}



function toggleMode(event) {
	if(KIOSK_MODE)
		return;
	
	_mode = ("clock" == _mode) ? "game" : "clock";
	var toggle = getObj("modeToggle");
	theField.setBallSpeed();
	
	if("game" == _mode) {
		stop(theField);
		theField.startGame();
		theField.togglePause(1);
		document.addEventListener("keydown", keyDown, true);
		document.addEventListener("keyup", keyUp, true);
		event.stopPropagation();
		event.preventDefault();
		toggle.setAttribute('src', isFullscreen ? "Images/fullscreen_clock.png" : "Images/clock.png");
		toggle.alt = "clock";
	}
	else {
		stop(theField);
		theField.gameOver = true;
		theField.togglePause(2);
		theField.hideSign();
		document.removeEventListener("keydown", keyDown, true);
		document.removeEventListener("keyup", keyUp, true);
		event.stopPropagation();
		event.preventDefault();
		toggle.setAttribute('src', isFullscreen ? "Images/fullscreen_game_on.png" : "Images/game_on.png");
		toggle.alt = "play!";
	}
	
	return;
}



function toggleFullscreen(event, force_toggle) {
	if(KIOSK_MODE && !force_toggle)
		return;
	
	// ****
	// revert from fullscreen
	if(isFullscreen) {
		var x = event.x;
		var y = event.y;
		var width = 150;
		var height = 110;
		
		// RESIZE
		if(window.widget) {
			widget.resizeAndMoveTo(x - 83, y - 62, 1* width + 16, 1* height + 16);
		}
		else {
			window.moveTo(x, y);
			//window.resizeTo(width, height);
		}
		isFullscreen = false;
		
		if(theField) {
			theField.resizeTo(false, width, height);
		}
	}
	
	// ****
	// move to fullscreen
	else {
		var screenWidth = window.widget ? screen.width : (window.innerWidth ? window.innerWidth : 1024);
		var screenHeight = window.widget ? screen.height : (window.innerHeight ? window.innerHeight : 768);
		var width = fullscreenForce.width ? fullscreenForce.width : screenWidth;
		var height = fullscreenForce.height ? fullscreenForce.height : screenHeight;
		
		if((window.widget && widget.resizeAndMoveTo) || !window.widget) {
			if(window.widget) {
				widget.resizeAndMoveTo(0, 0, width, height);
			}
			else {
				window.moveTo(0, 0);
				//window.resizeTo(width, height);
			}
			isFullscreen = true;
			
			if(theField) {
				theField.resizeTo(true, width, height);
			}
		}
		else {
			alert('fullscreen is not supported on your System. Upgrade Tiger to enable it.');
		}
	}
}




function displayNumber(where, number) {			// 1 means right, -1 means left
	if(! where)
		return;
	
	if(isNaN(number)) {
		number = 0;
	}
	
	var strlen = number.toString().length;
	
	// remove old images
	while(where.lastChild)
		where.removeChild(where.lastChild);
	
	// set new images
	for(var i = 0; i < strlen; i++) {
		var img = document.createElement("img");
		img.setAttribute("class", (isFullscreen ? "largeNumber" : "smallNumber"));
		img.src = "./Images/" + (isFullscreen ? "largeDigits/" : "smallDigits/") + number.toString().substring(i, i + 1) + ".gif";
		where.appendChild(img);
	}
}

var keyPressed = false;
function keyDown(event) {
	if('game' != _mode)
		return;
	
	if(theField.gameOver) {
		theField.startGame();
		return;
	}
	
	if(paused) {
		theField.togglePause();
		return;
	}
	
	var which = (event.which == 40) ? "downR" : ((event.which == 38) ? "upR" : "pause");
	
	keyPressed = which;
	switch(which) {
		case "upR":
		case "downR":
		case "upL":
		case "downL":
			theField.rightBar.starttime = (new Date()).getTime();
			theField.rightBar.moveManual();
			break;
		
		default:
			theField.togglePause();
			break;
	}
}

function keyUp(event) {
	keyPressed = false;
}

function onShow() {
	play(theField);
}

function onHide() {
	stop(theField);
}

function doCleanup() {
	return;
}

// fades the controller out while in fullscreen
var fullscreenControllerTimeout = null;

function moveFullscreenController(event) {
	if(KIOSK_MODE)
		return;
	
	if(fullscreenControllerTimeout) {
		clearTimeout(fullscreenControllerTimeout);
		fullscreenControllerTimeout = null;
	}
	
	// get position
	var x = event.x;
	var y = event.y;
	
	// move controller to position
	var div = getObj('controllerDiv');
	if(div) {
		div.style.opacity = 1;
		
		var xWidth = 200;
		var currX = parseInt(div.style.left);
		currX = isNaN(currX) ? 100 : currX;
		
		var yHeight = 80;
		var currY = parseInt(div.style.top);
		currY = isNaN(currY) ? 100 : currY;
		
		if(x < currX) {
			div.style.left = x + 'px';
		}
		if(y < currY) {
			div.style.top = y + 'px';
		}
		if(x > (1* currX + xWidth)) {
			div.style.left = (x - xWidth) + 'px';
		}
		if(y > (1* currY + yHeight)) {
			div.style.top = (y - yHeight) + 'px';
		}
	}
	
	fullscreenControllerTimeout = setTimeout("hideFullscreenController()", FULLSCREEN_CONTROLLER_TIMEOUT);
}


function hideFullscreenController() {
	if(isFullscreen) {
		if (animation.timer != null) {
			clearInterval (animation.timer);
			animation.timer  = null;
		}
		var starttime = (new Date).getTime() - 13;
 		
 		animation.duration = 500;
		animation.starttime = starttime;
		animation.firstElement = getObj("controllerDiv");
		animation.timer = setInterval ("animate();", 13);
		animation.from = 1.0;
		animation.to = 0.0;
		animate();
	}
}













/*
 *********************************
 *      Technical functions      *
 *********************************
 */

// calculates delta-y from delta-x and the given angle.
function getDeltaY(deltaX, angle, advanced_functions) {
	if(!deltaX || deltaX == 0 || isNaN(angle))
		return 0;
	
	var deltaY = 0;
	var deltaYfull = eval(deltaX * Math.tan(angle * Math.PI / 180));
	
	var direction = -1;			// -1 is down (add deltaY to old Y-value)
	if(deltaYfull < 0) {
		direction = 1;
		deltaYfull = Math.abs(deltaYfull);
	}
	
	if(advanced_functions) {
		deltaYfull = Math.abs(deltaYfull + theField.ball.topYRounded);
	}
	
	while(deltaYfull > 1) {
		deltaYfull -= 1;
		deltaY += 1;
	}
	
	if(advanced_functions)
		theField.ball.topYRounded = deltaYfull;
	
	return deltaY * direction;
}


function play(field) {
	if(!field)
		return;
	
	field.ball.run = true;
	if('clock' == _mode) {
		field.showTime();
		field.ball.start();
	}
	else if(!paused && !theField.gameOver) {
		field.ball.start();
	}
}

function stop(field) {
	if(!field)
		return;
	
	theField.ball.run = false;
	theField.ball.moving = false;
}







/*
 *********************************
 *      The Playfield-Class      *
 *********************************
 */

function Playfield() {
	if( ! (this instanceof Playfield))		// ensure we successfully created the Playfield
		return new Playfield();
	
	// settings
	this.width = ballControl.fieldTotalWidth;
	this.innerWidth = 0;							// distance from bar-surface to bar-surface
	this.height = ballControl.fieldTotalHeight;
	this.innerHeight = 0;							// full height minus the ball size (used to give the ball an y-value)
	this.bounceDist = ballControl.bounceDist;		// distance of the bar-surface (where the ball hits) to the border of the playfield
	this.obstacles = new Array();
	
	this.startAngle = ballControl.startAngle;
	this.maxAngle = ballControl.maxAngle;
	this.gameOver = true;
	this.gameLevel = 4;	
	
	
	// Elements
	this.div = document.createElement('div');
	this.div.className = "smallPlayField";
	getObj('front').appendChild(this.div);
	
	this.glass = document.createElement('img');
	this.glass.id = "glass";
	this.glass.src = "Images/Glass.png";
	this.div.appendChild(this.glass);
	
	this.leftBar = new Player(this, 'left');
	this.obstacles.push(this.leftBar);
	this.rightBar = new Player(this, 'right');
	this.obstacles.push(this.rightBar);
	this.ball = new Ball(this);
	
	this.scoreBoard = document.createElement('div');
	this.scoreBoard.className = "scoreBoard";
	this.leftScore = document.createElement('div');
	this.leftScore.className = "scoreLeft";
	this.rightScore = document.createElement('div');
	this.rightScore.className = "scoreRight";
	this.scoreBoard.appendChild(this.leftScore);
	this.scoreBoard.appendChild(this.rightScore);
	this.div.appendChild(this.scoreBoard);
	
	this.sign = null;
	
	
	// init some last vars
	this.setWidth(ballControl.fieldTotalWidth);
	this.setHeight(ballControl.fieldTotalHeight);
	this.setBallSpeed();
	this.showGlass(_showglass);
	
	this.ball.init();
	this.ball.startTimed();
}

Playfield.prototype.setWidth = playfieldSetWidth;
Playfield.prototype.setHeight = playfieldSetHeight;
Playfield.prototype.setBounceDist = playfieldSetBounceDist;
Playfield.prototype.resizeTo = playfieldResizeTo;
Playfield.prototype.setBallSpeed = playfieldSetBallSpeed;
Playfield.prototype.showGlass = playfieldShowGlass;
Playfield.prototype.startGame = playfieldStartGame;
Playfield.prototype.togglePause = playfieldTogglePause;
Playfield.prototype.showTime = playfieldShowTime;
Playfield.prototype.refreshScore = playfieldRefreshScore;
Playfield.prototype.updateScore = playfieldUpdateScore;
Playfield.prototype.showSign = playfieldShowSign;
Playfield.prototype.hideSign = playfieldHideSign;


function playfieldSetWidth(x) {
	this.width = x;
	this.innerWidth = x - (2* this.bounceDist);
	this.div.style.width = x + 'px';
	if(this.rightBar) {
		this.rightBar.setX(this.width - this.bounceDist);
	}
}

function playfieldSetHeight(y) {
	this.height = y;
	this.innerHeight = y - this.ball.size;
	this.div.style.height = y + 'px';
}

function playfieldSetBounceDist(b) {
	if(this.leftBar && this.rightBar) {
		this.leftBar.setBounceDist(b);
		this.rightBar.setBounceDist(b);
		this.bounceDist = b;
		this.setWidth(this.width);
	}
}


// resizes the field
function playfieldResizeTo(is_fullscreen, width, height) {
	var ballSize = is_fullscreen ? (fullscreenForce.ballSize ? fullscreenForce.ballSize : Math.round(width / 28)) : ballControl.ballSize;
	var barHeight = is_fullscreen ? (fullscreenForce.barHeight ? fullscreenForce.barHeight : Math.round(height / 5)) : ballControl.barHeight;
	this.bounceDist = is_fullscreen ? (fullscreenForce.bounceDist ? fullscreenForce.bounceDist : Math.round(3 * ballSize)) : ballControl.bounceDist;
	
	// general
	document.body.style.fontSize = is_fullscreen ? "50px" : "10px";
	getObj('front').setAttribute('class', is_fullscreen ? '' : 'front');
	getObj('front').setAttribute('style', is_fullscreen ? 'width:' + width + 'px; height:' + height + 'px;' : '');
	
	getObj('controllerDiv').setAttribute('class', is_fullscreen ? 'fullscreenController' : 'smallController');
	getObj('flip').style.display = is_fullscreen ? 'none' : 'block';
	
	getObj('modeToggle').setAttribute('class', is_fullscreen ? 'fullscreenControls' : 'smallControls');
	getObj('fullscreenToggle').setAttribute('class', is_fullscreen ? 'fullscreenControls' : 'smallControls');
	getObj('fullscreenToggle').setAttribute('src', is_fullscreen ? "Images/fullscreen_toggle.png" : "Images/toggle.png");
	
	if(is_fullscreen) {
		getObj('modeToggle').setAttribute('src', ('clock' == _mode) ? "Images/fullscreen_game_on.png" : "Images/fullscreen_clock.png");
		this.div.style.backgroundColor = "rgba(0,0,0," + _fullscreen_opacity + ")";
	}
	else {
		getObj('controllerDiv').setAttribute('style', 'opacity:1.0;');
		getObj('modeToggle').setAttribute('src', ('clock' == _mode) ? "Images/game_on.png" : "Images/clock.png");
	}
	
	// the glass
	this.showGlass(is_fullscreen ? _fullscreen_showglass : _showglass);
	this.glass.src = is_fullscreen ? "Images/fullscreenGlass.png" : "Images/Glass.png";
	this.glass.style.width = is_fullscreen ? width + "px" : '';
	this.glass.style.height = is_fullscreen ? Math.round(height * 0.55) + "px" : '';
	
	this.div.setAttribute('class', is_fullscreen ? 'fullscreenPlayField' : (_showglass ? "smallPlayFieldGlossy" : "smallPlayField"));
	
	// sizes
	this.ball.setSize(ballSize);
	this.setWidth(width);
	this.setHeight(height);
	
	this.leftBar.setWidth(ballSize);
	this.leftBar.setHeight(barHeight);
	this.rightBar.setWidth(ballSize);
	this.rightBar.setHeight(barHeight);
	
	// the ball
	this.setBounceDist(this.bounceDist);
	this.setBallSpeed(this.gameLevel);
	this.ball.direction = 1;
	this.ball.init();
	
	// the players' Y position
	this.leftBar.setY(Math.round(barHeight * 1.2));
	this.rightBar.setY(Math.round(barHeight * 0.4));
	
	// run if clock, pause if game
	if('game' == _mode) {
		theField.refreshScore();
		theField.togglePause(1);
	}
	else {
		theField.showTime();
		this.ball.startTimed();
	}
}

// sets the speed of the ball and the depending playermovingspeeds
function playfieldSetBallSpeed(game_level) {
	if(this.ball) {
		game_level = (game_level && gameLevels[game_level]) ? gameLevels[game_level] : gameLevels[4];
		var speed = isFullscreen ? (fullscreenForce.speed ? fullscreenForce.speed : Math.round(50 * (this.width / this.ball.size))) : ballControl.startSpeed;
		speed = Math.round(game_level * speed);
		this.ball.speed = speed;
		
		this.rightBar.setCompetitionSpeed();
		this.rightBar.speed = Math.round(0.7 * speed);		// 70% of the time the ball needs to travel from player to player
		this.leftBar.setCompetitionSpeed();
		this.leftBar.speed = Math.round(0.7 * speed);
	}
}

function playfieldShowGlass(sure) {
	this.glass.style.display = sure ? 'block' : 'none';
	this.div.setAttribute('class', sure ? "smallPlayFieldGlossy" : "smallPlayField");
	return sure;
}


function playfieldTogglePause(force) {		// if force is 1, force a pause, if it is anything but false or 1, force a start
	if(force) {
		paused = (1 == force) ? false : true;
	}
	
	paused = !paused;
	
	if(paused) {
		stop(theField);
		if('clock' != _mode) {
			this.showSign("PAUSED", new Array('press any key'));
		}
	}
	else {
		play(theField);
		this.hideSign();
	}
}

function playfieldStartGame() {
	if('game' != _mode)
		return;
	
	this.gameOver = false;
	this.hideSign();
	this.togglePause(2);
	this.updateScore(1);
}

function playfieldShowTime(hour, minute) {
	if('clock' != _mode)
		return;
	
	var now = new Date();
	
	if(!hour)
		hour = now.getHours();
	if(!minute)
		minute = now.getMinutes();
	
	if(_clocktype == 12)
		hour = hour % 12;
	
	lastTimeUpdate = now;
	lastTimeUpdate.setSeconds(0);
	//alert('last: ' + lastTimeUpdate);
	
	displayNumber(this.leftScore, hour);
	displayNumber(this.rightScore, minute);
}


// used when switching from/to fullscreen
function playfieldRefreshScore() {
	displayNumber(this.leftScore, this.leftBar.score);
	displayNumber(this.rightScore, this.rightBar.score);
}

// if we pass an argument (init), the score gets reset. Else we count on.
function playfieldUpdateScore(init) {
	if('game' != _mode)
		return;
	
	if(!init && !this.gameOver) {
		if(1 == this.ball.direction)
			this.leftBar.score++;
		else
			this.rightBar.score++;
	}
	else {
		this.leftBar.score = 0;
		this.rightBar.score = 0;
	}
	
	displayNumber(this.leftScore, this.leftBar.score);
	displayNumber(this.rightScore, this.rightBar.score);
	
	if((this.leftBar.score < 10) && (this.rightBar.score < 10)) {
		this.ball.init();
		setTimeout("theField.ball.start()", 2500);
	}
	else {
		var sign = null;
		
		// you win
		if(this.rightBar.score > this.leftBar.score) {
			this.gameLevel++;
			this.showSign("YOU WIN!", new Array('celebrate a moment, then', 'press any key to game on'), true);
		}
		
		// you lose
		else {
			this.gameLevel--;
			this.gameLevel = (this.gameLevel < 0) ? 0 : this.gameLevel;
			this.showSign("YOU LOSE", new Array('the widget beat you', 'press any key to play again'), true);
		}
		
		this.gameOver = true;
		
		// change gamespeed
		this.setBallSpeed(this.gameLevel);
	}
}

// displays a message (bigInner), some lines of text (array lines) and switches the level (showlevel)
function playfieldShowSign(bigInner, lines, showlevel) {
	this.hideSign();
	
	this.sign = document.createElement('div');
	this.sign.className = isFullscreen ? 'fullscreenSign' : 'smallSign';
	var foo = document.createElement('span');
	foo.className = 'big';
	foo.appendChild(document.createTextNode(bigInner));
	this.sign.appendChild(foo);
	
	if(lines.length > 0) {
		for(var i = 0; i < lines.length; i++) {
			this.sign.appendChild(document.createElement('br'));
			this.sign.appendChild(document.createTextNode(lines[i]));
		}
	}
	
	if(showlevel) {
		this.sign.appendChild(document.createElement('br'));
		this.sign.appendChild(document.createTextNode('level: '));
		var bar = document.createElement('span');
		bar.innerText = this.gameLevel;
		this.sign.appendChild(bar);
	}
	
	this.div.appendChild(this.sign);
}


function playfieldHideSign() {
	if(this.sign) {
		this.div.removeChild(this.sign);
		this.sign = null;
	}
}







/*
 ***********************************************
 *      Moving the Bars; the Player-Class      *
 ***********************************************
 */

function Player(field, side) {
	if( ! (this instanceof Player))		// ensure we successfully created the Player
		return new Player();
	
	if( ! (field instanceof Playfield))
		return;
	
	this.field = field;
	this.side = ('left' == side) ? 'left' : 'right';
	this.noHitFrom = ('left' == side) ? 1 : -1;
	this.width = ballControl.ballSize;
	this.height = ballControl.barHeight;
	this.topY = 30;
	this.bottomY = 1* this.topY + this.height;
	this.leftX = ('left' == this.side) ? (this.field.bounceDist - ballControl.ballSize) : (this.field.width - this.field.bounceDist);
	this.rightX = 1* this.leftX + this.width;
	this.score = 0;

	this.start = this.topY;
	this.aim = 70;
	this.anglePercentageChange = 0.15;		// on the outmost hit-point, the angle of the ball changes this much compared to his old angle (in relative mode)
	
	this.starttime = 0;
	this.endtime = 0;
	this.timeout = null;
	this.speed = Math.round(0.6 * (this.field.ball ? this.field.ball.speed : ballControl.startSpeed));
	this.competitionSpeed = Math.round(ballControl.competitionSpeed * (this.field.ball ? this.field.ball.speed : ballControl.startSpeed));
	
	this.div = document.createElement('div');
	this.div.setAttribute("class", "bar");
	this.div.setAttribute("style", "top:" + this.topY + "px; left:" + this.leftX + "px;");
	this.setWidth(this.width);
	this.setHeight(this.height);
	
	this.field.div.appendChild(this.div);
}
Player.prototype.getX = getX;
Player.prototype.getY = getY;
Player.prototype.setY = playerSetY;
Player.prototype.setX = playerSetX;
Player.prototype.setWidth = playerSetWidth;
Player.prototype.setHeight = playerSetHeight;
Player.prototype.setBounceDist = playerSetBounceDist;
Player.prototype.startAutoMove = playerStartAutoMove;
Player.prototype.moveTimed = playerMoveTimed;
Player.prototype.moveCompetition = playerMoveCompetition;
Player.prototype.moveManual = playerMoveManual;
Player.prototype.setCompetitionSpeed = playerSetCompetitionSpeed;


function getX() {
	return this.leftX;
}

function getY() {
	return this.topY;
}

// sets a new x-value for the bar.
function playerSetX(x) {
	var newX = (x < 0) ? 0 : ((x > Math.abs(this.field.width - this.width)) ? Math.abs(this.field.width - this.width) : x);
	
	this.leftX = newX;
	this.rightX = 1* newX + this.width;
	this.div.style.left = newX + 'px';
}

// sets a new y-value for the bar. Takes care of overshooting the borders of the playfield.
function playerSetY(y) {
	var newY = (y < 0) ? 0 : ((y > Math.abs(this.field.height - this.height)) ? Math.abs(this.field.height - this.height) : y);
	
	this.topY = newY;
	this.bottomY = newY + this.height;
	this.div.style.top = newY + 'px';
}

function playerSetWidth(w) {
	this.width = w;
	this.div.style.width = w + 'px';
}

function playerSetHeight(h) {
	h = isNaN(h) ? 24 : h
	this.height = h;
	this.div.style.height = h + 'px';
	
	if(this.getY() > (this.field.height - this.height)) {
		this.setY(this.getY());
	}
}

// should only be called by Playfield.player.setBounceDist() !!!
function playerSetBounceDist(b) {
	var newBounce = isNaN(b) ? (4 * this.width) : b;
	newBounce = ('left' == this.side) ? (newBounce - this.width) : (this.field.width - newBounce);
	
	this.setX(newBounce);
}

function playerStartAutoMove() {
	var now = new Date();

	if('clock' != _mode) {
		if(('left' == this.side) && (-1 == theField.ball.direction)) {
			this.starttime = now.getTime();
			this.moveCompetition();
		}
		return;
	}
	
	var new_hour = (now.getMinutes() == 0);
	var too_late = (now.getSeconds() <= 5);
	
	// lets the ball hit at the center of the bar
	var centerOffset = Math.round((this.height - theField.ball.size) / 2);
	
	// lets the ball hit at a random point on the bar. A fourth of the bar-height will be randomizable; due to imperfectness of the hit-prediction, the rest is a security-margin
	var randOffset = Math.round((Math.random() * (this.height / 4)) - (this.height / 8));
	
	// set start and aim
	this.start = this.topY;
	this.aim = theField.ball.projectedY - centerOffset + randOffset;
	
	if(('left' == this.side) && !new_hour && too_late)
		this.aim = (this.aim < this.height) ? (this.aim + this.height) : (this.aim - this.height);			// left player misses every minute but 59th
	else if(('right' == this.side) && new_hour && too_late)
		this.aim = (this.aim < this.height) ? (this.aim + this.height) : (this.aim - this.height);			// on new hour, right player misses
	
	this.starttime = (new Date()).getTime();
	this.endtime = this.starttime + this.speed;
	this.moveTimed();
}


// used to move both players in clock mode
function playerMoveTimed() {
	var now = (new Date()).getTime();
	
	// last move, go to aimed position
	if(now >= this.endtime) {
		this.setY(this.aim);
	}
	
	// new position
	else {
		var delta = (now - this.starttime) / this.speed;
		var fraction = ((delta * delta) * 3.0) - ((delta * delta * delta) * 2.0);
		var curr = Math.round(this.start + (fraction * (this.aim - this.start)));
		
		this.setY(curr);
		
		clearTimeout(this.timeout);
		if(theField.ball.run) {
			this.timeout = setTimeout(('left' == this.side) ? "theField.leftBar.moveTimed()" : "theField.rightBar.moveTimed()", 60);
		}
	}
}

// move computer player according to ball position
function playerMoveCompetition() {
	if(('game' != _mode) || ('left' != this.side) || !theField.ball.moving)
		return;
	
	var now = (new Date()).getTime();
	var ourCenter = 1* this.topY + ((this.height - theField.ball.size) / 2);
	var newY = this.topY;
	
	var gap = now - this.starttime;
	gap = (gap > (this.competitionSpeed / 4)) ? (this.competitionSpeed / 4) : gap;
	var moveBy = Math.round((this.field.height - this.height) / this.competitionSpeed * gap);
	
	// ball above the player
	if(theField.ball.topY < this.topY)
		newY = this.topY - moveBy;
	
	// ball below player
	else if(theField.ball.bottomY > this.bottomY)
		newY = 1* this.topY + moveBy;
	
	this.setY(newY);
	
	clearTimeout(this.timeout);
	if((!theField.ball.inGoal) && (-1 == theField.ball.direction)) {
		this.starttime = now;
		this.timeout = setTimeout("theField.leftBar.moveCompetition()", _ball_interval);
	}
}

// move the human player as long as a key is pressed
function playerMoveManual() {
	if(paused)
		theField.togglePause();
	
	var now = (new Date()).getTime();
	if(keyPressed) {
		var gap = now - this.starttime;
		gap = (gap > (this.competitionSpeed / 4)) ? (this.competitionSpeed / 4) : gap;
		var moveBy = Math.round((this.field.height - this.height) / this.competitionSpeed * gap);
		var current = this.topY;
		var add = (keyPressed == "upR") ? -1 * moveBy : moveBy;
		
		// assign new top
		this.setY(1* current + add);
		
		this.starttime = now;
		clearTimeout(this.timeout);
		this.timeout = setTimeout("theField.rightBar.moveManual()", _ball_interval);
	}
}

function playerSetCompetitionSpeed() {
	var ms = (theField && theField.ball) ? theField.ball.speed : ballControl.startSpeed;
	
	// the right side moves at a fraction of the ball speed, left side the exact same amount
	if('right' == this.side) {
		ms = ballControl.competitionSpeed * ((theField && theField.ball) ? theField.ball.speed : ballControl.startSpeed);
		ms = (ms > 720) ? 720 : ms;
	}
	ms = Math.round(ms);
	
	this.competitionSpeed = ms;
}







/*
 ****************************
 *      The ball-class      *
 ****************************
 */
function Ball(field) {
	if( ! (this instanceof Ball))		// ensure we successfully created a ball
		return new Ball();
	
	if( ! (field instanceof Playfield))
		return;
	
	this.field = field;
	this.size = ballControl.ballSize;
	this.run = true;
	this.leftX = 10;
	this.rightX = 1* this.leftX + this.size;
	this.topY = -10;
	this.bottomY = 1* this.topY + this.size;
	this.lastLeftX = this.leftX;
	this.lastRightX = this.rightX;
	this.lastTopY = this.topY;
	this.lastBottomY = this.bottomY;
	this.noHitFrom = 0;
	
	this.angle = this.field.startAngle;
	this.XRounded = 0;				// saves how many decimals were rounded to full pixel values while calculating the next X-value
	this.topYRounded = 0;				// saves how many decimals were rounded to full pixel values while calculating the next Y-value
	this.direction = 1;
	this.targetBar = null;
	this.moving = false;
	this.speed = ballControl.startSpeed;
	this.projectedY = -10;
	this.lastStart = (new Date()).getTime();
	this.timeout = null;
	
	this.inGoal = false;
	
	this.div = document.createElement('div');
	this.div.setAttribute("class", "ball");
	this.div.setAttribute("style", "left:" + this.leftX + "px; top:" + this.topY + "px;");
	this.setSize(this.size);
	
	this.field.div.appendChild(this.div);
}

Ball.prototype.getX = getX;
Ball.prototype.getY = getY;
Ball.prototype.setX = ballSetX;
Ball.prototype.setY = ballSetY;
Ball.prototype.setSize = ballSetSize;
Ball.prototype.init = ballInit;
Ball.prototype.start = ballStart;
Ball.prototype.startTimed = ballStartTimed;
Ball.prototype.move = ballMove;
Ball.prototype.hitsObstacle = ballHitsObstacle;
Ball.prototype.setProjectedY = ballSetProjectedY;
Ball.prototype.outOfBounds = ballOutOfBounds;


// functions used by the Ball-Objects

function ballSetX(x) {
	if(isNaN(x))
		x = 10;
	
	this.lastLeftX = this.leftX;
	this.lastRightX = this.rightX;
	this.leftX = x;
	this.rightX = 1* x + this.size;
	this.div.style.left = x + 'px';
}

function ballSetY(y) {
	if(isNaN(y))
		y = 10;
	
	// bounce the ball off the top and off the bottom
	while((y < 0) || (y > this.field.innerHeight)) {
		
		// bounce off top
		if(y < 0) {
			y = y * -1;
			this.angle *= -1;
			this.div.style.top = '0px';
		}
		
		// bounce off the bottom
		else if(y > this.field.innerHeight) {
			y = this.field.innerHeight - (y - this.field.innerHeight);
			this.angle *= -1;
			this.div.style.top = (this.field.innerHeight - this.size) + 'px';
		}
	}
	
	// set
	this.lastTopY = this.topY;
	this.lastBottomY = this.bottomY;
	this.topY = y;
	this.bottomY = 1* y + this.size;
	this.div.style.top = y + 'px';
}

// sets the balls size
function ballSetSize(s) {
	this.size = s;
	this.div.style.width = s + 'px';
	this.div.style.height = s + 'px';
}


// sets a random start-position for the ball
function ballInit() {
	var x = (1 == this.direction) ? (-1 * this.size) : (1* this.field.width + this.size);
	var y = Math.round(Math.random() * this.field.innerHeight);		// a more or less random y-start-position
	
	this.setX(x);
	this.setY(y);
	
	this.moving = false;
	this.angle = this.field.startAngle;
	this.inGoal = false;
}


function ballStart() {
	if(!this.run)
		return;
	
	this.lastStart = (new Date()).getTime();
	this.moving = true;
	this.move();
	
	if(-1 == this.direction) {
		clearTimeout(this.field.leftBar.timeout);
		//theField.leftBar.startAutoMove();
		this.field.leftBar.timeout = setTimeout("theField.leftBar.startAutoMove()", Math.round(this.speed / 5));
	}
	else if('clock' ==  _mode) {
		clearTimeout(this.field.rightBar.timeout);
		//theField.rightBar.startAutoMove();
		this.field.rightBar.timeout = setTimeout("theField.rightBar.startAutoMove()", Math.round(this.speed / 5));
	}
}


function ballStartTimed() {
	if("clock" != _mode)
		return;
	
	var second = (new Date()).getSeconds();
	
	// while we count the seconds, place the ball and call start, which moves the ball
	if(second > 5) {
		this.init();
		this.setProjectedY();
		this.start();
		
		if(1 == this.direction) {
			clearTimeout(this.field.rightBar.timeout);
			this.field.rightBar.timeout = setTimeout("theField.rightBar.startAutoMove()", Math.round(this.speed / 5));
		}
		else {
			clearTimeout(this.field.leftBar.timeout);
			this.field.leftBar.timeout = setTimeout("theField.leftBar.startAutoMove()", Math.round(this.speed / 5));
		}
	}
		
	// one minute passed
	else {
		var milli = (new Date()).getMilliseconds();
		setTimeout("theField.ball.startTimed()", (1000 * (6 - second)) - milli);		// re-calls itself to relaunch on the 6th second of the minute
	}
}


function ballMove() {
	if(!this.run || !this.moving)
		return;
	
	var now = (new Date()).getTime();
	var milli = now - this.lastStart;				// how long did it take from the last move?
	milli = (0 == milli) ? 1 : milli;					// remove a 0-ms-offset
	milli = (milli > 300) ? 20 : milli;						// if it took too long from last call (paused, maybe?), simply assume a 20 ms delay
	var fraction = Math.abs(milli / this.speed);				// get the fraction (the amount we need to move of the total playfield-width)
	
	// calc a new x-value (put the rounded decimals to stack until they make a full pixel)
	var deltaX = 0;
	var deltaXfull = Math.abs((this.field.innerWidth * fraction) + this.XRounded);
	
	while(deltaXfull > 1) {
		deltaXfull -= 1;
		deltaX += 1;
	}
	this.XRounded = deltaXfull;
	
	var nextX = (1* this.leftX) + (this.direction * deltaX);
	
	// calculate the Y-value
	var deltaY = getDeltaY(deltaX, this.angle, true);
	var nextY = 1* this.topY + deltaY;
	this.setY(nextY);
	this.setX(nextX);
	
	// handle bounces from the Players
	this.hitsObstacle();
	
	// handle ball out of bounds
	this.outOfBounds();
	
	clearTimeout(this.timeout);
	if(this.run && this.moving) {
		if(DEBUG)
			this.timeout = setTimeout("theField.ball.move()", (this.direction > 0 && nextX > 105) ? 1500 : _ball_interval);
		else
			this.timeout = setTimeout("theField.ball.move()", _ball_interval);
		this.lastStart = now;
	}
	
	debug1(this.direction + '  ' + this.angle + ' X:' + this.leftX + ' Y:' + this.topY);
}


// checks if the ball hit anything on the playfield, returns a bool after handling anything necessary (altering angles and direction)
function ballHitsObstacle() {
	if(this.field.obstacles && this.field.obstacles.length > 0) {
		
		// ******
		// check all obstacles
		for(var i = 0; i < this.field.obstacles.length; i++) {
			var obs = this.field.obstacles[i];
			if(obs.noHitFrom == this.direction) {
				continue;
			}
			
			// check if X is within a parameter of the last and the current position values
			var bLeftX = Math.min(this.lastLeftX, this.leftX);
			var bRightX = Math.max(this.lastRightX, this.rightX);
			
			// if we miss the x-axis, continue to the next obstacle
			if(bLeftX >= obs.rightX || bRightX <= obs.leftX) {
				debug2('X miss');
				continue;
			}
			
			// hit is possible, move the ball to possible X-hit-position and check Y. Do NOT move the ball further than it was on the last move!
			var ballDelta = Math.abs(this.rightX - this.lastRightX);
			var deltaX = (this.direction > 0) ? (obs.leftX - this.rightX) : (obs.rightX - this.leftX);
			var deltaY = getDeltaY(deltaX, this.angle);
			
			
			// ********** X - HIT
			// if true, we have a hit on the X-axis along the height of the Y-axis; display the ball on the obstacles surface and alter the direction
			if((ballDelta >= Math.abs(deltaX)) && ((1* this.bottomY + deltaY) > obs.topY) && ((1* this.topY + deltaY) < obs.bottomY)) {
				this.setX(1* this.leftX + deltaX);
				this.setY(1* this.topY + deltaY);
				
				// calculate a new angle depending on hit-position; diffY will become how far away from center view the ball hits
				var diffY = (1* this.getY() + (this.size / 2)) - (1* obs.topY + (obs.height / 2));
				var part = (diffY < 0) ? 1 : -1;											// -1 = hit in lower part, 1 = hit in upper part of the bar
				
				// change angle
				if('absolute' == _bouncemode) {
					var angleChange = Math.abs(this.field.maxAngle * (diffY / (obs.height / 2)));
					var lastAngle = Math.round(this.angle);
					this.angle = Math.round(angleChange * part);
				}
				else if(Math.abs(diffY) > (obs.height / 5)) {
					var angleChange = Math.abs(this.angle * obs.anglePercentageChange * (diffY / (obs.height / 2)));
					var lastAngle = Math.round(this.angle);
					this.angle = Math.round(1* this.angle + (angleChange * part));
				}
				
				this.angle = (this.angle > 0) ? Math.min(this.angle, this.field.maxAngle) : Math.max(this.angle, -1 * this.field.maxAngle);
				this.direction *= -1;
				this.setProjectedY();
				
				// move the player
				if('left' == obs.side) {
					clearTimeout(this.field.rightBar.timeout);
					setTimeout("theField.rightBar.startAutoMove()", Math.round(this.speed / 5));
				}
				else if('right' == obs.side) {
					clearTimeout(this.field.leftBar.timeout);
					setTimeout("theField.leftBar.startAutoMove()", Math.round(this.speed / 5));
				}
				
				debug2('X hit');
				return true;
			}
			
			
			// still here, so we might still hit the obstacle on the Y axis. Check if Y is within a rectangle of the last and the current position values
			var bTopY = Math.min(this.lastTopY, this.topY);
			var bBottomY = Math.max(this.lastBottomY, this.bottomY);
			
			
			// check if we miss the Y axis
			if(bTopY >= obs.bottomY || bBottomY <= obs.topY) {
				debug2('Y miss')
				continue;
			}
			
			
			// still here, most probably hit on Y (since we already confirmed a hit on X). Move the ball to possible Y-hit-position
			ballDelta = Math.abs(this.topY - this.lastTopY);
			var deltaY = (this.angle > 0) ? (obs.bottomY - this.topY) : (obs.topY - this.bottomY);
			var deltaX = getDeltaY(deltaY, (this.angle > 0) ? (90 - this.angle) : (-1* (90 - Math.abs(this.angle))));
			//debug2('(' + this.topY + ' - ' + this.lastTopY + ') ' + ballDelta + ' ' + deltaY);
			
			// ********** Y - HIT
			if(ballDelta >= Math.abs(deltaY)) {
				this.setX(1* this.leftX + deltaX);
				this.setY(1* this.topY + deltaY);
				
				this.angle *= -1;
				this.setProjectedY();
				
				debug2('Y hit');
				return true;
			}
		}
	}
	
	return false;
}


function ballSetProjectedY() {
	var deltaX = (this.direction == 1) ?
						(1* this.field.innerWidth + this.field.bounceDist - (1* this.leftX + this.size)) : 
						(this.leftX - this.field.bounceDist);		// distance from current ball-position to surface of the matching playerbar
	var projY = (this.topY * 1) + getDeltaY(deltaX, this.angle);
	while((projY < 0) || (projY > this.field.innerHeight)) {
		
		// top
		if(projY < 0)
			projY = projY * -1;
		
		// bottom
		else if(projY > this.field.innerHeight)
			projY = Math.abs(this.field.innerHeight - (projY - this.field.innerHeight));
	}
	
	this.projectedY = projY;
	
	if(DEBUG) {
		var cross = getObj('projectedIndicator');
		if(!cross) {
			var cross = document.createElement('div');
			cross.setAttribute('id', 'projectedIndicator');
			this.field.div.appendChild(cross);
		}
		cross.style.top = (projY - 2) + 'px';
		cross.style.left = ((1 == this.direction) ? (this.field.width - this.field.bounceDist - 2) : (this.field.bounceDist - 2)) + 'px';
	}
}


// checks if the ball is still on the playing-field (checks only x, since the ball bounces from the top and bottom). If the ball`s out, sets it to the opposite side.
function ballOutOfBounds() {
	if((-1 == this.direction && this.leftX < (this.size * -1)) || (1 == this.direction && this.leftX > this.field.width)) {
		this.setX((1 == this.direction) ? (this.size * -1) : (1* this.field.width + this.size));
		this.moving = false;
		
		if("clock" == _mode) {
			this.startTimed();
			this.field.showTime();
		}
		else {
			this.field.updateScore();
		}
		
		return true;
	}
		
	return false;
}




// DEBUG
function debug(text, id) {
	if(!DEBUG)
		return;
	
	id = id ? id : 'ballMoveDebug';
	var pre = getObj(id);
	if(!pre && theField) {
		pre = document.createElement('pre');
		pre.setAttribute('id', id);
		theField.div.appendChild(pre);
	}
	if(pre)
		pre.innerHTML = text;
}

function debug1(text) {
	debug(text, 'ballMoveDebug');
}

function debug2(text) {
	debug(text, 'ballHitDebug');
}



/*
 **********************
 *      by Apple      *
 **********************
 */

function mousemove(event) {
	if(KIOSK_MODE)
		return;
	
	// fullscreen effects
	if(isFullscreen) {
		moveFullscreenController(event);
	}
	
	
	// fade flip and control elements
	else if(! flipShown) {
		if (animation.timer != null) {
			clearInterval (animation.timer);
			animation.timer  = null;
		}
		var starttime = (new Date).getTime() - 13;
 
		animation.duration = 500;
		animation.starttime = starttime;
		animation.firstElement = getObj("flip");
		animation.secondElement = getObj("controllerDiv");
		animation.timer = setInterval ("animate();", 13);
		animation.from = animation.now;
		animation.to = 1.0;
		animate();
		flipShown = true;
	}
}


function mouseexit (event) {
	if(isFullscreen) {
	
	}
	
	// fade out control elements and the info button
	else if(flipShown) {
		if (animation.timer != null) {
			clearInterval (animation.timer);
			animation.timer  = null;
		}

		var starttime = (new Date).getTime() - 13;

		animation.duration = 500;
		animation.starttime = starttime;
		animation.firstElement = getObj("flip");
		animation.secondElement = getObj("controllerDiv");
		animation.timer = setInterval ("animate();", 13);
		animation.from = animation.now;
		animation.to = 0.0;
		animate();
		flipShown = false;
	}
}

function animate() {
	var T;
	var ease;
	var time = (new Date).getTime();
   

	T = limit_3(time-animation.starttime, 0, animation.duration);

	if (T >= animation.duration)
	{
		clearInterval (animation.timer);
		animation.timer = null;
		animation.now = animation.to;
	}
	else
	{
		ease = 0.5 - (0.5 * Math.cos(Math.PI * T / animation.duration));
		animation.now = computeNextFloat (animation.from, animation.to, ease);
	}

	if(animation.firstElement)
		animation.firstElement.style.opacity = animation.now;
	if(animation.secondElement)
		animation.secondElement.style.opacity = animation.now;
}

function limit_3 (a, b, c) {
	return a < b ? b : (a > c ? c : a);
}

function computeNextFloat (from, to, ease) {
	return from + (to - from) * ease;
}

// these functions are called when the info button itself receives onmouseover and onmouseout events (by Apple)

function enterflip(event) {
	getObj("fliprollie").style.display = "block";
}

function exitflip(event) {
	getObj("fliprollie").style.display = "none";
}

