var Link = {
  setColor : function (link) { //':' 추가해야 함
    var alist = document.querySelectorAll('a'); //태그는 따옴표 안에!! + All 붙이기!!
      var i = 0;
      while (i<alist.length) { //if는 한번만 반복, while은 여러번 반복 + 길이 추가!!
        alist[i].style.color = link; //alist[i]=i번째 링크 말하는 것 
        i = i + 1;
      }
  }
}

var Body = {
  setColor : function (font) {
    document.querySelector('body').style.color = font;
  },

  setBackgroundcolor : function (background) {
    document.querySelector('body').style.backgroundColor = background; //대문자 중요!!
  }
}

function nightdayHandler(self) {
  if (self.value === 'night') { //조건문 등호 3개!!
    Body.setColor('white'); //매개변수 명이 아닌 함수명()
    Body.setBackgroundcolor('black'); //body.body+ㅇㅇ() -> 허용X
    Link.setColor('powderblue'); //이때 Body는 변수
    self.value = 'day';
  } else {
    Body.setColor('black'); 
    Body.setBackgroundcolor('white');
    Link.setColor('blue');
    self.value = 'night';
  }
}