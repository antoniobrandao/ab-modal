'use strict';

var modal_base_element;
var modal_background;
var modal_element;
var text_element_title;
var text_element_text;
var buttons_container;
var button_confirm;
var button_cancel;
var button_confirm_p;
var button_cancel_p;

var settings = {

	debug 					: false,
	closeOnOKClick 			: false,
	titleText				: 'Title',
	textText				: 'Text',
	confirmButtonText 		: 'OK',
	cancelButtonText 		: 'Cancel',
	showTitle 				: true,
	showText 				: true,
	titleColor 				: '#333',
	textColor 				: '#888',
	fontFamily 				: 'sans-serif',
	titleMarginBottom 		: '10px',
	buttonsMarginTop 		: '20px',
	modalBorderRadius 		: '2px',
	buttonsBorderRadius 	: '2px',
	showConfirmButton 		: true,
	showCancelButton 		: false,
	confirmButtonColor 		: '#2ecc71',
	cancelButtonColor 		: '#333',
	confirmButtonTextColor	: 'white',
	cancelButtonTextColor	: 'white',
	cancelCallback			: null,
	confirmCallback			: null,
	fadeOut					: true,
	modalPadding			: '30px 70px 20px 70px',
	buttonsPadding			: '8px 20px 8px 20px',
};

module.exports = {

    createModal: function(options)
    {
		settings = extend(settings, options); // extend options

    	if (settings.debug) { console.log('ab-modal ::: createModal'); };

    	var w=window,
		d=document,
		e=d.documentElement,
		g=d.getElementsByTagName('body')[0],
		x=w.innerWidth||e.clientWidth||g.clientWidth,
		y=w.innerHeight||e.clientHeight||g.clientHeight;

		var window_width 		= x;
		var window_height 		= y;
		var window_width_px 	= String(window_width) + 'px';
		var window_height_px	= String(window_height) + 'px';

        modal_base_element		= document.createElement('DIV');
        modal_background		= document.createElement('DIV');
        modal_element 			= document.createElement('DIV');
        text_element_title 		= document.createElement('H3');
        text_element_text 		= document.createElement('p');

        modal_background.addClass('ab-modal-background');

		modal_base_element.setAttribute('id', 'ab-modal');
		modal_element.setAttribute('id', 'ab-modal-element');

		if (settings.cancelCallback)  { settings.showCancelButton = true };
		if (settings.confirmCallback) { settings.showConfirmButton = true };

        if (settings.showConfirmButton || settings.showCancelButton)
        {
        	buttons_container							= document.createElement('DIV');
        	buttons_container.style.marginTop 			= settings.buttonsMarginTop;
        	buttons_container.setAttribute('id', 		'ab-modal-buttons');

        	if (settings.showCancelButton)
        	{
	        	button_cancel							= document.createElement('DIV');
	        	button_cancel.addClass('ab-modal-button');
	        	button_cancel.addClass('cancel');
	        	button_cancel.style.backgroundColor 	= settings.cancelButtonColor;
	        	button_cancel.style.display 			= 'inline-block';
	        	button_cancel.style.color 				= settings.cancelButtonTextColor;
	        	button_cancel.style.borderRadius		= settings.buttonsBorderRadius;
	        	button_cancel.style.padding 			= settings.buttonsPadding;
				button_cancel.style.webkitUserSelect 	= 'none';
				button_cancel.style.mozUserSelect 		= 'none';
				button_cancel.style.msUserSelect 		= 'none';
				button_cancel.style.userSelect 			= 'none';
				button_cancel.style.fontFamily 			= settings.fontFamily
				button_cancel.style.cursor 				= 'pointer';
	        	if (settings.showConfirmButton ) 		{ button_cancel.style.marginRight = '40px'; };
	        	button_cancel.textContent 				= settings.cancelButtonText;
	        	buttons_container.appendChild(button_cancel);

	        	if (!settings.cancelCallback) 
	        	{ 		 button_cancel.addEventListener('click', closeModal);
	        	} else { button_cancel.addEventListener('click', handleCancelCallback); }
        	};

        	if (settings.showConfirmButton)
        	{
	        	button_confirm							= document.createElement('DIV');
	        	button_confirm.addClass('ab-modal-button');
	        	button_confirm.addClass('confirm');
	        	button_confirm.style.backgroundColor	=  settings.confirmButtonColor;
	        	button_confirm.style.color 				= settings.confirmButtonTextColor;
	        	button_confirm.style.borderRadius		= settings.buttonsBorderRadius;
	        	button_confirm.style.display 			= 'inline-block';
	        	button_confirm.style.padding 			= settings.buttonsPadding;
				button_confirm.style.webkitUserSelect 	= 'none';
				button_confirm.style.mozUserSelect 		= 'none';
				button_confirm.style.msUserSelect 		= 'none';
				button_confirm.style.userSelect 		= 'none';
				button_confirm.style.fontFamily 		= settings.fontFamily
				button_confirm.style.cursor 			= 'pointer';
	        	button_confirm.textContent 				= settings.confirmButtonText;
	        	buttons_container.appendChild(button_confirm);
	        	
	        	if (!settings.confirmCallback) 
	        	{ 			button_confirm.addEventListener('click', closeModal);
	        	} else { 	button_confirm.addEventListener('click', handleConfirmCallback); }
        	}
        }
        
        if (settings.showTitle) 
        {
        	text_element_title.textContent 			= settings.titleText;
        	text_element_title.style.marginBottom 	= settings.titleMarginBottom;
        	text_element_title.style.marginTop 		= '0';
        	if (settings.fontFamily) { text_element_title.style.fontFamily = settings.fontFamily; };
        	
        };
        
        if (settings.showText) 
        {
        	text_element_text.textContent 			= settings.textText;
        	text_element_text.style.maxWidth 		= '300px';
        	if (settings.fontFamily) { text_element_text.style.fontFamily = settings.fontFamily; };
        };

		modal_base_element.style.webkitTransition 	= 'all 0.5s';
		modal_base_element.style.mozTransition 		= 'all 0.5s';
		modal_base_element.style.msTransition 		= 'all 0.5s';
		modal_base_element.style.oTransition 		= 'all 0.5s';

		modal_base_element.style.position			= 'fixed';
		modal_base_element.style.top				= '0';
		modal_base_element.style.left				= '0';
		modal_base_element.style.zIndex				= '1000';
		modal_base_element.style.opacity			= '1';

		modal_background.style.position				= 'fixed';
		modal_background.style.top					= '0';
		modal_background.style.left					= '0';
		modal_background.style.width				= window_width_px;
		modal_background.style.height				= window_height_px;
		modal_background.style.backgroundColor 		= 'black';
		modal_background.style.display				= 'block';
		modal_background.style.opacity 				= '0.3';

		modal_element.style.position				= 'fixed';
        modal_element.style.backgroundColor 		= 'white';
		modal_element.style.display					= 'block';
		modal_element.style.textAlign				= 'center';
        modal_element.style.borderRadius			= settings.modalBorderRadius;
		modal_element.style.boxSizing				= 'border-box';
		modal_element.style.padding 				= settings.modalPadding;

		modal_base_element.appendChild(modal_background);
		modal_base_element.appendChild(modal_element);
		
        if (settings.showTitle) {
        	text_element_title.style.color = settings.titleColor;
        	modal_element.appendChild(text_element_title);
        };
        
        if (settings.showText) {
        	text_element_text.style.color = settings.textColor;
        	modal_element.appendChild(text_element_text);
        };

		if (settings.showConfirmButton || settings.showCancelButton) {
			modal_element.appendChild(buttons_container);
		};

		document.body.appendChild(modal_base_element);

		if (settings.closeOnBGClick) {
			modal_background.addEventListener('click', closeModal);
		};

		addViewportListeners();
		adjustViewPortModal();
    }
}

var closeModal = function()
{
	removeViewportListeners();
	
	if (settings.showCancelButton) 
	{
		if (settings.cancelCallback) 
		{
			button_cancel.removeEventListener('click', closeModal);
		}
		else
		{
			button_cancel.removeEventListener('click', settings.cancelCallback); 
		}
	};

	if (settings.showConfirmButton) 
	{
		if (settings.confirmCallback) 
		{
			button_confirm.removeEventListener('click', closeModal);
		} 
		else
		{ 
			button_confirm.removeEventListener('click', settings.confirmCallback);	
		}
	};

	var removeElement = function() {
		document.body.removeChild(document.getElementById('ab-modal'));
	}

	if (settings.fadeOut) 
	{
		modal_base_element.style.opacity = '0';
		
		setTimeout(function() { removeElement(); }, 500)
	}
	else { removeElement(); }
}

var addViewportListeners = function()
{
	console.log('addViewportListeners');
	if(window.attachEvent) 			 	{ console.log('1'); window.attachEvent('onresize', 	adjustViewPortModal);
	} else if(window.addEventListener) 	{ console.log('3'); window.addEventListener('resize', adjustViewPortModal, true);
	} else { 							//The browser does not support Javascript event binding
	}
}

var removeViewportListeners = function()
{
	console.log('removeViewportListeners');
	if(window.detachEvent)  				{ console.log('2'); window.detachEvent('onresize', 		adjustViewPortModal);
	} else if(window.removeEventListener) 	{ window.removeEventListener('resize', 	adjustViewPortModal);
	} else { 								//The browser does not support Javascript event binding
	}
}

var handleConfirmCallback = function()
{
	settings.confirmCallback();
	
	closeModal();
}

var handleCancelCallback = function()
{
	settings.cancelCallback();
	
	closeModal();
}

var adjustViewPortModal = function()
{
    var w=window,
		d=document,
		e=d.documentElement,
		g=d.getElementsByTagName('body')[0],
		x=w.innerWidth||e.clientWidth||g.clientWidth,
		y=w.innerHeight||e.clientHeight||g.clientHeight;

	var modal_instance = document.getElementById('ab-modal-element');
	
	if (modal_instance) {
		modal_background.style.width	= String(x) + 'px';
		modal_background.style.height	= String(y) + 'px';

		modal_instance.style.left		= String((x / 2) - (modal_instance.offsetWidth / 2)) + 'px';
		modal_instance.style.top		= String((y / 2) - (modal_instance.offsetHeight / 2)) + 'px';
	};
}

var extend = function ( defaults, options ) 
{
	var extended = {};
	var prop;

	for (prop in defaults) 
	{
		if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
			extended[prop] = defaults[prop];
		}
	}

	for (prop in options) 
	{
		if (Object.prototype.hasOwnProperty.call(options, prop)) 
		{
			extended[prop] = options[prop];
		}
	}
	return extended;
};
