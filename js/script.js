const numberListDOM = document.querySelector('.ivy_container ul');

for (i = 1; i <= 100; i++){
let numberItemDOM = document.createElement('li');
    if (i % 3 === 0 && i % 5 !== 0){
        numberItemDOM.append('Fizz');
    } else if (i % 5 === 0 && i % 3 !== 0) {
        numberItemDOM.append('Buzz');
    } else if (i % 3 === 0 && i % 5 === 0){
        numberItemDOM.append('FizzBuzz')
    } else {
        numberItemDOM.append(i)
    }
    numberListDOM.append(numberItemDOM);
}

