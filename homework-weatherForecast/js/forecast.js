window.onload = function () {
	var aFore = document.getElementById('forecast');
	var aUl = document.getElementsByTagName('ul');
	var aA = aUl[0].getElementsByTagName('li');
	var aNum = aUl[1].getElementsByTagName('li');
	var aDay = document.getElementsByTagName('h1');
	var aH2 = document.getElementsByTagName('h2');
	var aIcon = document.getElementsByTagName('i');
	var aTemp = document.getElementById('temp');
	var aDescription = document.getElementById('description');
	var aSpeed = aH2[0];
	var aClouds = aH2[1];
	var aRain = aH2[2];
	var timer = play = null;
	var i = index = 0;
	//切换按钮
	for (i = 0; i < 7; i++) {
		aNum[i].index = i;
		aNum[i].onmouseover = function () {
			show(this.index)
		}
	}
	
	
	//鼠标划过关闭定时器
	aFore.onmouseover = function () {
		clearInterval(play)
	};
	//鼠标离开启动自动播放
	aFore.onmouseout = function () {
		autoPlay()
	};
	//自动播放函数autoPlay
	function autoPlay () {
		play = setInterval(function() {
			index++;
			index >= 7 && (index = 0);
			show(index);
			
		},4500);
	}
	autoPlay();//应用
	//ajax请求数据
	var req = new XMLHttpRequest();
    if (req != null) {
    	req.open("GET", "http://openweathermap.org/data/2.5/forecast/daily?id=1814906&appid=b1b15e88fa797225412429c1c50c122a", true);
        req.send(null);
        req.onreadystatechange = function() {

            if ((req.status >= 200 && req.status < 300) || req.status == 304) {
                console.log("success");
            }
            else {
                alert("Request was unsuccessful: " + req.status);
            }
        };
    }

	//数据切换
	function show (a) {
		index = a;
		var data = JSON.parse(req.responseText);
		var alpha = 0;
		for (var i = 0; i < 7; i++) {
			aNum[i].className = "";
		}
		aNum[index].className = "liCurrent";
		var day = new Date(data.list[index].dt * 1000);
		var speed = data.list[index].speed;
	    var clouds = data.list[index].clouds;
		var rain = data.list[index].rain;
		aDay[0].innerHTML = day.getFullYear() + "年" + (day.getMonth() + 1) + "月" + day.getDate() + "日";
		aSpeed.innerHTML = speed;
		aClouds.innerHTML = clouds;
		aRain.innerHTML = rain;
		aTemp.innerHTML = data.list[index].temp.day + " °" + "C";
		aDescription.innerHTML = data.list[index].weather[0].description;
		switch (data.list[index].weather[0].main) {
			case "Rain": aIcon[0].innerHTML = "&#xe630;";
			break;
			case "Cloud": aIcon[0].innerHTML = "&#xe705;";
			break;
			case "Sun": aIcon[0].innerHTML = "&#xe649;";
			break;
		}
		clearInterval(timer);
	}
};
