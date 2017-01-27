//this is a function that can produce checkboxes
var _user$project$Main$checkbox = F2(							//F2 takes a function as input. It returns a wrapper. This wrapper contains all the information to execute the input function.
	function (msg, name) {															//This function takes 2 arguments: msg and name
		return A2(																	// Apply label function to 2 args 
			_elm_lang$html$Html$label,
			{																		// this is a html label that carries a list (::) with a style tag 
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(								//the style tag has a list containing all the style attributes
					{
						ctor: '::',														// in this case there is only 1 tuple with style attr and value (padding 20px)
						_0: {ctor: '_Tuple2', _0: 'padding', _1: '20px'},				
						_1: {ctor: '[]'}	//end of list
					}),
				_1: {ctor: '[]'}		
			},
			{
				ctor: '::',															// a list containing:
				_0: A2(																// apply Html.input function to 2 args					
					_elm_lang$html$Html$input,										 
					{																//the contents of this input tag:
						ctor: '::',															//a list with the input attributes
						_0: _elm_lang$html$Html_Attributes$type_('checkbox'),				//a checkobox with an onClick event that produces a message msg
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(msg),					
							_1: {ctor: '[]'}
						}
					},
					{ctor: '[]'}),
				_1: {																		//a text field (the text next to the checkbox
					ctor: '::',  															
					_0: _elm_lang$html$Html$text(name),								//text() translates the name in the html text 
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Main$update = F2(													//update function. Gets a msg and the model.
	function (msg, model) {
		var _p0 = msg;
		switch (_p0.ctor) {															 
			case 'ToggleNotifications':												// it returns the model where it has been toggled a bool field
				return _elm_lang$core$Native_Utils.update(							
					model,
					{notifications: !model.notifications});							
			case 'ToggleAutoplay':
				return _elm_lang$core$Native_Utils.update(
					model,
					{autoplay: !model.autoplay});
			default:																
				return _elm_lang$core$Native_Utils.update(
					model,
					{location: !model.location});
		}
	});
var _user$project$Main$Model = F3(													//The model declaration: it is a F3 function that returns an instantiated object 
	function (a, b, c) {
		return {notifications: a, autoplay: b, location: c};						//the fieldname is the name as declared in the Elm code
	});
var _user$project$Main$optOut = A3(_user$project$Main$Model, true, true, true);		//the model inizialization. A3 applier. It applies the Model function just declared to 3 boolean values
var _user$project$Main$ToggleLocation = {ctor: 'ToggleLocation'};					//These are the Msg types. They are stored in variables as records
var _user$project$Main$ToggleAutoplay = {ctor: 'ToggleAutoplay'};
var _user$project$Main$ToggleNotifications = {ctor: 'ToggleNotifications'};			
var _user$project$Main$view = function (model) {									//This is the view. It takes the model and returns html msg's. In this case a function applier of a function with 2 args. 
	return A2(																		// an html fieldset function, and 2 lists. the first list is the fieldset's attributes, 
		_elm_lang$html$Html$fieldset,												// the second list is the fieldset's content
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(_user$project$Main$checkbox, _user$project$Main$ToggleNotifications, 'Email Notifications'),		//it contiains an application of the function checkbox with the typemsg and text. 
			_1: {																									// The msg will be passed to the update function that will modify the state. 
				ctor: '::',	
				_0: A2(_user$project$Main$checkbox, _user$project$Main$ToggleAutoplay, 'Video Autoplay'),
				_1: {
					ctor: '::',
					_0: A2(_user$project$Main$checkbox, _user$project$Main$ToggleLocation, 'Use Location'),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Main$main = _elm_lang$html$Html$beginnerProgram(										//this is the runtime. It assigns the initialized model to the program's model, the update function to the update field, and the view to the view field.
	{model: _user$project$Main$optOut, update: _user$project$Main$update, view: _user$project$Main$view})();		

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _user$project$Main$main !== 'undefined') {
    _user$project$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}



