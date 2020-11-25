const container = document.querySelector('.container');
const content = document.querySelector('.content');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

plus.addEventListener('click', () => {
    let result = content.innerHTML;
    result++;
    content.innerHTML = result;

});

minus.addEventListener('click', () => {
    let result = content.innerHTML;
    result--;
    content.innerHTML = result;

});
// container.addEventListener('click', () => {
//     let result = content.innerHTML;
//     result++;
//     content.innerHTML = result;
// });

// document.addEventListener('keydown', () => {
//     let result = content.innerHTML;
//     result--;
//     content.innerHTML = result;
// });
// div.addEventListener("mouseover", () => {
//     alert('mouse over');
// });

// div.addEventListener("mouseout", () => {
//     alert('mouse out');
// });

// document.addEventListener("", () => {
//     alert('key down');
// });

//1 прочитать понять повторить эвент линстенеры 
//2 свободно владеть флексом
//3 Сделать счетчик