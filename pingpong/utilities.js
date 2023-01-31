/*
 ****************************
 *         Utilities        *
 *    by widgetschmie.de    *
 ****************************
 */


// opens an URL in the browser
function gotoURL(url) {
	if(window.widget) {
		widget.openURL(url);
	}
}



// returns the object, whether you supply an id (string) or an object itself
function getObj(id) {
	var obj;
	if(typeof(id) == "string") {
		obj = getById(id) ? getById(id) : null;
	}
	else if(typeof(id) == "object") {
		obj = id;
	}
	
	return obj;
}

// returns the object with the correspondent ID
function getById(id) {
	if(document.getElementById)
		return document.getElementById(id);
	else if(document.all)
		return document.all[id];
	else
		return false;
}

// cleans a node from its childs
function cleanNode(node) {
	if(typeof(node) != "object") {
		node = getObj(node);
		if(typeof(node) != "object")
			return false;
	}
	
	while(node.firstChild != null) {
		node.removeChild(node.firstChild);
	}
}

// gets the last node
function getLastNode(obj, name) {
	if(!obj)
		return null;
	
	var arr = obj.childNodes;
	if(!name)
		return arr[arr.length - 1];
	
	for(var i = arr.length; i > 0; i--) {
		if(arr[i-1].nodeName == name)
			return arr[i-1];
	}
}



function inArray(value, arr)
{
	if("object" != typeof(arr)) return false;
	
	for(var i = 0; i < arr.length; i++)
	{
		if(arr[i] == value) return true;
	}
	return false;
}

function selectVal(clicked) {
	var elem = getObj(clicked);
	while(null != elem.previousSibling) {
		if('input' == elem.previousSibling.nodeName.toLowerCase()) {
			if(! elem.previousSibling.disabled)
				elem.previousSibling.checked = ! elem.previousSibling.checked;
			return;
		}
		elem = elem.previousSibling;
	}
}

// toggles an input-elements "enabled" value
function toggleDisabledIfChecked(check, element) {
	var disable = (getObj(check) && (false == getObj(check).checked));
	var elem = getObj(element);
	
	if(elem) {
		
		// disable main element
		if(('span' == elem.nodeName.toLowerCase()) || ('div' == elem.nodeName.toLowerCase()))
			elem.className = disable ? elem.className.replace(/ *disabled/g, '') + ' disabled' : elem.className.replace(/ *disabled/g, '');
		else
			elem.disabled = disable;
		
		// also disable corresponding Text
		while(null != elem.nextSibling) {
			if(('span' == elem.nextSibling.nodeName.toLowerCase()) && (elem.nextSibling.className && elem.nextSibling.className.match(/clicksel/))) {
				var thisclass = elem.nextSibling.className;
				var newclass = disable ? thisclass.replace(/ *disabled/g, '') + ' disabled' : thisclass.replace(/ *disabled/g, '');
				
				elem.nextSibling.className = newclass;
				return;
			}
			elem = elem.nextSibling;
		}
	}
}

// unchecks an input-element if another gets checked
function uncheckIfChecked(elements, reference) {
	var all_elems = new Array();
	if('string' == typeof(elements))
		all_elems.push(elements);
	else
		all_elems = elements;
	
	var uncheck = (getObj(reference) && (true == getObj(reference).checked));
	if(!uncheck)
		return;
	
	for(var i = 0; i < all_elems.length; i++) {
		var elem = getObj(all_elems[i]);
		
		if(elem) {
			elem.checked = false;
		}
	}
}

// selects a value in a drop-down element
function selectValue(element, value) {
	if(!element) return;
	
	for (i = 0; i < element.length; i++)
	{
		if (element.options[i].value == value)
		{
			element.selectedIndex = i;
			return;
		}
	}
}


function debug(string)
{
	if (!debugMode) return;
	alert(string);
}


// returns the property the browser calculated, if that`s not supported, from the style.
function getComputedValue(prop, obj) {
	var myObj = getObj(obj);
	var getit;
	if(document.defaultView.getComputedStyle)
		getit = document.defaultView.getComputedStyle(myObj, null).getPropertyValue(prop);
	else
		getit = myObj.style[prop];
	
	return getit;
}


function has1043Features() {
	var version = navigator.appVersion;
	var regExp = /.+AppleWebKit\/([\d\.]+).+/;
	var result = regExp.exec(version);
	
	return (parseFloat(result[1]) >= 416.11);
}

