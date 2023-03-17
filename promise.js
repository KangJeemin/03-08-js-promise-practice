//Promise is a JavaScript object for asychronous operation
//State : pending -> fullfilled or rejected
//Producer vs Consumer

//1.Producer
//when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve,reject)=>{
  //doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(()=>{
    //resolve('elle')
    reject(new Error('no network'));
  },2000);
});

//2.Consumers: then, catch, finally
promise.then((value)=>{
  console.log(value);
})
.catch((error)=>{
console.log(error);
})
.finally(()=>{
  console.log('finally');
});

//3.Promise chaining
const fetchNumber = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(1)
  },1000)
})

fetchNumber
.then((num)=>{num*2})
.then((num)=>{num*3})
.then((num)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(num-1)},1000);
  });
})
.then((num)=>{console.log(num)})

//4.Error Handling
const gethen = () => 
  new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('닭')},1000)
  })

const getEgg = hen => 
  new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(`${hen}=>계란`)},1000)
  })
const cook = egg =>
  new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(`${egg}=>계란후라이`)},1000)
  })

  gethen()
  .then((hen)=>getEgg(hen))
  .then((egg)=>cook(egg))
  .then((comple)=>console.log(comple))