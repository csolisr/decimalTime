//@license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt

/*
 * @licstart  The following is the entire license notice for the
 * JavaScript code in this page.
 *
 * Copyright (C) 2013 Carlos Solís
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * Affero General Public License (GNU AGPL) as published by the Free
 * Software Foundation, either version 3 of the License, or (at your
 * option) any later version.
 *
 * The code is distributed WITHOUT ANY WARRANTY; without even the
 * implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
 * PURPOSE.  See the GNU AGPL for more details.
 *
 * As additional permission under GNU AGPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU AGPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
*/

var decimalTime = function(date, isLocal, precision){
	if (date == null){
		date = new Date();
	}
	if (isLocal == null){
		isLocal = false;
	}
	if (precision == null){
		precision = 5;
	}
	if (isLocal){
		var yr = date.getFullYear()-1970;
		var mt = date.getMonth()+1;
		var dy = date.getDate();
		var hr = date.getHours();
		var mn = date.getMinutes();
		var sc = date.getSeconds();
		var ms = date.getMilliseconds();
	} else {
		var yr = date.getUTCFullYear()-1970;
		var mt = date.getUTCMonth()+1;
		var dy = date.getUTCDate();
		var hr = date.getUTCHours();
		var mn = date.getUTCMinutes();
		var sc = date.getUTCSeconds();
		var ms = date.getUTCMilliseconds();
	}

	//Day number
	var fd = dy;
	//Leap years
	if (yr%4==0 && (yr%100!=0 || yr%400==0) ){
		fd+=1;
	}
	switch (mt) {
		case 1:
			fd+=0;
			break;
		case 2:
			fd+=31;
			break;
		case 3:
			fd+=31+28;
			break;
		case 4:
			fd+=31+28+31;
			break;
		case 5:
			fd+=31+28+31+30;
			break;
		case 6:
			fd+=31+28+31+30+31;
			break;
		case 7:
			fd+=31+28+31+30+31+30;
			break;
		case 8:
			fd+=31+28+31+30+31+30+31;
			break;
		case 9:
			fd+=31+28+31+30+31+30+31+31;
			break;
		case 10:
			fd+=31+28+31+30+31+30+31+31+30;
			break;
		case 11:
			fd+=31+28+31+30+31+30+31+31+30+31;
			break;
		case 12:
			fd+=31+28+31+30+31+30+31+31+30+31+30;
			break;
	}

	var ft = 0;
	ft = ft + hr/24;
	ft = ft + mt/24/60;
	ft = ft + sc/24/60/60;
	ft = ft + ms/24/60/60/1000;

	var dt = fd+ft;
	dt = dt.toFixed(precision);

	var output = yr+"T"+dt;
	if (isLocal) {
		var offset = date.getTimezoneOffset()/(-60);
		if (offset > 0){
			if (offset < 10){
				offset = "0"+offset;
			}
			offset = "L+"+offset;
		} else if (offset < 0){
			offset = offset * -1;
			if (offset < 10){
				offset = "0"+offset;
			}
			offset = "L-"+offset;
		} else {
			offset = "M";
		}
		output = output+offset;
	} else {
		output = output+"M";
	}
	return output;
};

//@license-end
