//async & await
//clear style of using promise 

//1.async (promise랑 동일한 기능을 하는데, async가 함수 앞에 붙으면 코드블럭이 promise 형태로 반환한다.)
//자스는 기본적으로 동기적.
async function fetchUser() {
  //do network request in 10 secs...
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//2.await (async 안의 함수에서만 쓸 수 있다. ) 해당 열이 끝날 때 까지 기다림.
function delay(ms) {
  return new Promise(resolve=>setTimeout(resolve,ms));
}

async function getApple() {
  await delay(1000);
  return "a"
}
async function getBanana() {
  await delay(1000);
  return "b"
}

//function pickFruits() {
//  return getApple().then(apple=>{
//    return getBanana().then(banana => `${apple} + ${banana}`)})
//}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
} 

pickFruits().then(console.log);