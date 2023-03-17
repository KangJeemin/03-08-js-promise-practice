setTimeout(function () {
  console.log("첫번째 함수");
  setTimeout(function () {
    console.log("두번째함수")
    setTimeout(function(){
      console.log("세번째함수")
      setTimeout(function(){
        console.log("네번째함수")
        setTimeout(function(){
          console.log("다섯번째함수")
        },1000)
      },1000)
    },1000)
  },1000)
},1000)