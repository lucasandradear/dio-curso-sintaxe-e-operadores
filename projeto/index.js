const validaNums = (num1, num2) => {
  num1 = Number(num1)
  num2 = Number(num2)
  let invalidos = Number.isNaN(num1) || Number.isNaN(num2)
  if(invalidos) {
    console.log('Informe valores válidos.')
    return [0, 0]
  }
  return [num1, num2]
}

const numsIguais = (num1, num2) => num1 === num2
const somaNums = (num1, num2) => num1 + num2
const maiorQue10 = soma => soma > 10
const maiorQue20 = soma => soma > 20

const comparaNums = (nums) => {
  let msg = ``
  let num1 = nums[0]
  let num2 = nums[1]

  if(numsIguais(num1, num2)){
    msg = msg.concat(`Os números ${num1} e ${num2} são iguais. `)
  } else {
    msg = msg.concat(`Os números ${num1} e ${num2} são distintos. `)
  }

  msg = msg.concat(`A sua soma é ${somaNums(num1, num2)} `)

  if(maiorQue10(somaNums(num1, num2))) {
    msg = msg.concat(`que é maior do que 10 e `)
  } else {
    msg = msg.concat(`que é menor do que 10 e `)
  }

  if(maiorQue20(somaNums(num1, num2))) {
    msg = msg.concat(`maior do que 20.`)
  } else {
    msg = msg.concat(`menor do que 20.`)
  }

  return msg
}

console.log(comparaNums(validaNums(1, 2)))
console.log(comparaNums(validaNums(15, 7)))
console.log(comparaNums(validaNums(6, 6)))
console.log(comparaNums(validaNums(0, 0)))
console.log(comparaNums(validaNums('string', 0))) // irá retornar zero nas atribuições
console.log(comparaNums(validaNums(0, 'string'))) // irá retornar zero nas atribuições
console.log(comparaNums(validaNums('string', 'string'))) // irá retornar zero nas atribuições