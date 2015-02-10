# ab-modal

Minimal Vanilla JS Modal.

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
		closeOnOKClick 			: false,
		type 					: 'simple',
		titleText				: 'Title',
		textText				: 'Text',
		confirmButtonText 		: 'OK',
		cancelButtonText 		: 'Cancel',
		showTitle 				: true,
		showText 				: true,
		fontFamily 				: 'sans serif',
		titleMarginBottom 		: '30px',
		buttonsMarginTop 		: '30px',
		addButtons 				: false,
		showConfirmButton 		: true,
		showCancelButton 		: true,
		confirmButtonColor 		: '#27AE60',
		cancelButtonColor 		: '#E74C3C',
		confirmButtonTextColor	: 'white',
		cancelButtonTextColor	: 'white',
		defaultCancelIsClose	: true,
		defaultOKIsClose		: false,
		cancelCallback			: null,
		confirmCallback			: null,
		fadeOut					: true,
		modalPadding			: '30px 70px 30px 70px',
	});

## License

MIT
