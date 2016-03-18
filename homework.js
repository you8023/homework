//第一题
function Person (name) {
	this.name = name;
	if (this instanceof Person) {
		Person.prototype.a ++;
	};
}

Person.prototype = {
	toString: function () {
		return this.name;
	},
	a:0,
	get count () {
		return this.a;
	}	
}


var ling = new Person('ling');
console.log(ling.toString());

var long = new Person('long');
console.log(long.toString());

console.log(ling.count); // 2
      
console.log(long.count); // 2
      
var another = new Person('hah');     
console.log(ling.count); // 3      
console.log(long.count); // 3

var another = new Person('hah');      
console.log(another.count); // 3
      
//第二题
function Complex (x, y) {
	if (isNaN(x) || isNaN(y)) {
		throw new TypeError();
	};
	this.x = x;
	this.y = y;
}
Complex.prototype = {
	mul: function (its) {
		return new Complex (this.x*its.y + this.y*its.x, this.y*its.y - this.x*its.x);
	},
	add: function (its) {
		return new Complex (this.x + its.x, this.y + its.y);
	},
	mag: function () {
		return Math.sqrt(this.x*this.x + this.y*this.y);
	},
	neg: function () {
		return new Complex (-this.x, -this.y)
	},
	equal: function (its) {
		if (this.x == its.x && this.y == its.y) {
			return true;
		}
		else
			return false;
	},
	toString: function () {
		return 'the number real is ' + this.x + '\n' + 'the number imaginary is ' + this.y;
	}
}
var num1 = new Complex(1, -1);
      
var num2 = new Complex(-1, 1);
      
num1.mul(num2);
num1.add(num2);
num1.mag();
num1.neg();
num1.equal(num2);
num1.toString();
