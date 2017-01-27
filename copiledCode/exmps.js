//EXAMPLES
//Various compiled functions

var _user$project$succ = function (x) {						
	return x + 1;
};

var fact = function (n) {
	return (cmp(n, 1) < 0) ? 1 : (n * fact(n - 1));
};

var add = F2(
	function (x, y) {
		return x + y;
	});
	
	
var prod = F2(
	function (x, y) {
		var _p0 = x;
		switch (_p0) {
			case 0:
				return 0;
			case 1:
				return y;
			default:
				return A2( add, y, A2(prod, _p0 - 1, y));
		}
	});
	
// ELM source for add and prod
add : Int -> Int -> Int
add x y = x + y

prod : Int -> Int -> Int
prod x y = 
  case x of
    0 -> 0
    1 -> y
    x -> add y (prod (x-1) y)
	
//Type declaration translated
	
var _user$project$Name = function (a) {			//type Msg = Name String
	return {ctor: 'Name', _0: a};

//Lists

var _user$project$emptyList = {ctor: '[]'};

var _user$project$list = {
	ctor: '::',
	_0: {ctor: '_Tuple2', _0: 'First', _1: 1},
	_1: {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'Second', _1: 2},
		_1: {ctor: '[]'}
	}
};

//Sample update function

var _user$project$update = F2(
	function (msg, model) {
		var _p1 = msg;
		switch (_p1.ctor) {
			case 'Name':
				return _elm_lang$core$Native_Utils.update(
					model,
					{name: _p1._0});
			case 'Password':
				return _elm_lang$core$Native_Utils.update(
					model,
					{password: _p1._0});
			default:
				return _elm_lang$core$Native_Utils.update(
					model,
					{passwordAgain: _p1._0});
		}
	});

//code of Native_Utils.update

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}

//Sample function that outputs Html

var _user$project$viewValidation = function (model) {
	var _p0 = _elm_lang$core$Native_Utils.eq(model.password, model.passwordAgain) ? {ctor: '_Tuple2', _0: 'green', _1: 'OK'} : {ctor: '_Tuple2', _0: 'red', _1: 'Passwords do not match!'};
	var color = _p0._0;
	var message = _p0._1;
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'color', _1: color},
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(message),
			_1: {ctor: '[]'}
		});
};