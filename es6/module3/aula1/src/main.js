const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('Ok') }, 2000);
});

// async function executaPromise() {
//   console.log(await minhaPromise())
//   console.log(await minhaPromise())
//   console.log(await minhaPromise())
// }

const executaPromise = async () => {
  console.log(await minhaPromise())
  console.log(await minhaPromise())
  console.log(await minhaPromise())
} 

executaPromise()