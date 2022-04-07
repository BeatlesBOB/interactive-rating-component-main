let counter = 0;
let buttons = document.querySelectorAll('.btn--rate')
let submit = document.querySelector('.btn--submit')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.getAttribute('data-value');
        if(counter === value){
            buttons.forEach(btn =>{
                btn.classList.remove('active');
            })
        }else if(counter > value){
            for(let i = counter;i>value;i--){
                let temp = document.querySelector(`[data-value="${i}"]`)
                temp.classList.remove('active');
            } 
        }else{
            for(let i = 1;i<=value;i++){
                let temp = document.querySelector(`[data-value="${i}"]`)
                temp.classList.add('active');
            }  
        }
        counter = value;
    });
});

submit.addEventListener('click', (e) => {
    document.querySelector('.card--rate').classList.add('d-none');
    document.querySelector('.card--result').classList.remove('d-none')
    document.querySelector('.counter').innerHTML = `&nbsp${counter}&nbsp`
});