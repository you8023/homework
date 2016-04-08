/*不用任何字母写出niubi*/
(1[0] + {})[1] + (1[0] + {})[5] + (1[0] + {})[0] + (1[0] + {})[11] + (1[0] + {})[5];

/*将二维数组转化为一维数组*/
var x = [1, 3,[4,6]];
function change (a) {
	var b = [];
	var k = 0;
	//var b;
	for (var i = 0; i < a.length; i++) {
		if (a[i].length == undefined) {
			 b[k] = a[i];
			 k ++;
		}
		else {
			for (var j = 0; j < a[i].length; j++) {
			  b[k] = a[i][j];
			  k++;
		    };
		};
		
	};
	return b;
}
change(x);
/*调用前一个函数实现相加*/
function sum () {
	var summary = 0;
    for (var i = 0; i < change(arguments).length; i++) {
     	summary += change(arguments)[i];
     };
    return summary;
}
sum (1, 2, [1,4,6]);

/*二维数组转化成一维数组并相加*/
sum (1, 2, [1,4,6]);
function sum () {
	var b = [];
	var k = 0;
	var summary = 0;
	for (var i = 0; i < arguments.length; i++) {
		  if (arguments[i].length == undefined) {
			 b[k] = arguments[i];
			 k ++;
		}
		else {
			for (var j = 0; j < arguments[i].length; j++) {
			  b[k] = arguments[i][j];
			  k++;
		    };
		};
	};
    for (var i = 0; i < b.length; i++) {
     	summary += b[i];
     };
    return summary;
}
/*写一个foreach函数*/
var arr = [1, 2, 3];
function forEach (arr,action) {
	console.log(arr.forEach(action));
}
forEach (arr, function (item, index, arr) {
	console.log('item:' + item);
	console.log('index:' + index);
	console.log('arr:' + arr);
});
/*写一个clone函数实现深拷贝，默认深拷贝*/
var obj = {
	name: 'daming',
	age: '13'
}
var obj2 = {}
function clone (obj, choice) {
	if (choice == true) {
		for (key in obj) {
			var objCopy = obj[key];
			obj2[key] = objCopy;

		}
	    console.log(obj2);
	}
	else {
		obj2 = obj;
		console.log(obj2);
	}
}
clone (obj, true);