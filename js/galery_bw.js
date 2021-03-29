let open = () => {
    let div = document.getElementById('frame');
    div.style.display = 'inline';

    let fullImage = document.createElement('div');
    fullImage.innerHTML = `<img id='slider' src=${images_bw[num]} class='img' ></img>` 
    document.getElementById('center').append(fullImage)


    let count = document.createElement('p');
    count.innerHTML = `<p id="pcount">${num+1} из ${images_bw.length}</p>`;
    document.getElementById('count').append(count);

    let close_but = document.createElement('button');
    close_but.id = 'close';
    close_but.innerHTML = '<button class="close" onclick="but_close()">X</button>';
    document.body.append(close_but); 

    let blur = document.getElementById('blur')
    blur.style.filter = 'blur(5px)';

    let costl = document.createElement('button');
    costl.id = 'costl';
    costl.innerHTML="<button onclick='but_close()' class='costl'></button>"
    document.body.append(costl);
}
let but_close = () => {
    document.getElementById('frame').style.display = 'none';
    document.getElementById('slider').remove();
    document.getElementById('pcount').remove();
    document.getElementById('close').remove();
    document.getElementById('costl').remove();
    document.getElementById('blur').style.filter = 'blur(0px)';
    let nav = document.getElementById('nav');
}


let op = document.createElement('div');
op.innerHTML = `<td id='center' onclick='next()'><img id='slider' src='./source/photo/img/1.jpg' class='img' onclick='close()'></td>`
let number = 0;
let the = document.getElementById('the');

let op1 = () => { num = 0; open();};
let op2 = () => { num = 1; open();};
let op3 = () => { num = 2; open();};
let op4 = () => { num = 3; open();};
let op5 = () => { num = 4; open();};
let op6 = () => { num = 5; open();};
let op7 = () => { num = 6; open();};
let op8 = () => { num = 7; open();};
let op9 = () => { num = 8; open();};
let op10 = () => { num = 9; open();};


var images = [
    './source/photo/img/1.jpg',
    './source/photo/img/2.jpg',
    './source/photo/img/3.jpg',
    './source/photo/img/4.jpg',
 ];
var images_bw =[
    './source/photo/img/bw/1.jpg',
    './source/photo/img/bw/2.jpg',
    './source/photo/img/bw/3.jpg',
    './source/photo/img/bw/4.jpg',
    './source/photo/img/bw/5.jpg',
    './source/photo/img/bw/6.jpg',
    './source/photo/img/bw/7.jpg',
    './source/photo/img/bw/8.jpg',
    './source/photo/img/bw/9.jpg',
    './source/photo/img/bw/10.jpg',
];
 var playscore = 0;
 let butt = [
     './source/play.png',
     './source/pause.png',
 ]
 let about = [
     'me',
     'legs',
     'scull',
     'nick',
     'sheeps',
     'mother',
     'tv',
     'cage',
     'lil doge',
     'circul',
 ]
let num = 0;
let i = num+1;
let t;

// следующее изображение
 function next() { 

    var slider = document.getElementById('slider');
    num++;
    if(num >= images_bw.length) {
        num = 0;
    }

    slider.style.opacity='0';
    slider.style.transition='1s'
    setTimeout(fade, 000);
    count();         

}
let fade = () =>{
    slider.src = images_bw[num];
    slider.style.opacity='1'
}
// предыдущее изображение
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images_bw.length-1;
     }
    slider.style.opacity='0';
    i--;
    slider.style.transition='1s'
    setTimeout(fade, 1000);
    
    count();

}
// счётчик номера изображения
let count = () => {
    let el = document.getElementById('pcount');
    el.innerHTML = `${num+1} из ${images_bw.length}`;
}        
// следующее изображение, но по-другому
let move = () => {
    count();
    num++;
    if(num >= images_bw.length) {
        num = 0;
    }            
    slider.style.visibility='hidden';
    slider.style.transition='1s'
    setTimeout(fade, 1000);
}
// кнопка запуск / пауза
let play = () => {
    let buttplay = document.getElementById('buttplay');
    playscore++;
    if(playscore > butt.length-1){
        playscore = 0;
    }
    buttplay.src = butt[playscore]
    if (playscore == 1){
        t = setInterval(move, 3000);
    } 
    if(playscore === 0){
        clearInterval(t);
    }
}

// ебать костыль
setInterval(() => {
let left = document.getElementById('leftpan');
left.innerHTML = `${about[num]}`;
}, 0);

//main page
/** let indexPage = () =>{
num++;
if(num >= images.length) {
    num = 0;
}
body.style.backgroundImage=`${images[num]}`;
}
setInterval(indexPage(),1000);
*/
