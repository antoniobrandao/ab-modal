# ab-modal

Hyper-minimal Vanilla JS Modal. 

- Plug&Play, no Markup or CSS are required.
- Can be styled using the options object.
- DOM is only used while modal is active. The modal is removed from the DOM on close.
- All UI elements (title / text / OK button / CANCEL button) are optional and customizable.
- A simple fade-out is enabled by default when closing the model, can be disabled.
- Individual callbacks can be passed to the OK or CANCEL buttons.

## Install

With [npm](http://npmjs.org) do:

```bash
$ npm install ab-modal --save-dev
```

## Usage
	
	var modal = require('ab-modal');
	
	// All the default values are shown here

	modal.createModal(
	{
		debug 					: false,
		closeOnOKClick 			: false,
		titleText				: 'Title',
		textText				: 'Text',
		confirmButtonText 		: 'OK',
		cancelButtonText 		: 'Cancel',
		showTitle 				: true,
		showText 				: true,
		fontFamily 				: null,
		titleMarginBottom 		: '30px',
		buttonsMarginTop 		: '30px',
		modalBorderRadius 		: '2px',
		buttonsBorderRadius 	: '2px',
		showConfirmButton 		: true,
		showCancelButton 		: true,
		confirmButtonColor 		: '#2ecc71',
		cancelButtonColor 		: '#333',
		confirmButtonTextColor	: 'white',
		cancelButtonTextColor	: 'white',
		defaultCancelIsClose	: true,
		defaultOKIsClose		: false,
		cancelCallback			: null,
		confirmCallback			: null,
		fadeOut					: true,
		modalPadding			: '26px 70px 20px 70px',
	});

	// Standard example: Modal with title, text, OK and CANCEL

	modal.createModal(
	{
		titleText				: 'Question of the day',
		textText				: 'Do you like coffee?',
		confirmButtonText 		: 'Yes',
		cancelButtonText 		: 'No',
		confirmCallback			: function() { console.log('So we will bring coffee!')},
		cancelCallback			: function() { console.log('So we will bring tea!')},
	});

	// Simplest example: Modal with title, OK

	modal.createModal(
	{
		titleText				: 'Coffee is over',
		confirmButtonText 		: 'OK',
	});

## License

MIT
