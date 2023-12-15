let myPromise = new Promise((resolve, reject) => {

  let nome = 'Carlos'

  if(nome == 'Carlos'){
    resolve('Usuário encontrado')
  } else {
    reject('Usuário não encontrado')
  }
})

myPromise.then((data) => {
  console.log(data)
})