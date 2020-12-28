var images = [
    './source/photo/img/1.jpg',
    './source/photo/img/2.jpg',
    './source/photo/img/3.jpg',
    './source/photo/img/4.jpg',
 ];
 var num = 0;
 var i = 0;
let play = () => {
    num++;
    let indexPage = document.getElementById('indexPage');
    if(num > images.length-1){
        num = 0;
    };
    indexPage.style.transition='2s';
    indexPage.style.backgroundImage = `url(${images[num]})`;
    
};

let preload = () =>{
    i++;
    let preload = document.getElementById('preload');
    if (i > images.length){
        return 0;
    }
    preload.style.backgroundImage = `url(${images[i-1]})`;
};
let mouseOver = () => {
    let indexPage = document.getElementById('indexPage');
    indexPage.style.filter = 'blur(2px)';
}
let mouseOut = () => {
    let indexPage = document.getElementById('indexPage');
    indexPage.style.filter = 'blur(0px)';
}

window.onload = n =() =>{
    setInterval(play,3000);
    setInterval(preload,100);
};