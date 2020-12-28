
     var images = [
        '/source/photo/img/1.jpg',
        '/source/photo/img/2.jpg',
        '/source/photo/img/3.jpg',
        '/source/photo/img/4.jpg',
     ];
     var test2 = [
        '/source/photo/test2/1.jpg',
        '/source/photo/test2/2.jpg',
        '/source/photo/test2/3.jpg',
        '/source/photo/test2/4.jpg',
     ]
     var playscore = 0;
     let butt = [
         '/source/play.png',
         '/source/pause.png',
     ]
     let about = [
         'photo \n1',
         'photo 2',
         'photo 3',
         'photo 4',
     ]
    var num = 0;
    let t;

    // следующее изображение
     function next() { 
        var slider = document.getElementById('slider');
        num++;
        if(num >= images.length) {
            num = 0;
        }
        slider.style.opacity='0';
        slider.style.transition='1s'
        setTimeout(fade, 1000);
        let el = document.getElementById('pcount');
        el.innerHTML = `${num+1} из ${images.length}`; 
         
    }
    let fade = () =>{
        slider.src = images[num];
        slider.style.opacity='1'
    }
    // предыдущее изображение
    function prev() {
        var slider = document.getElementById('slider');
        num--;
        if(num < 0) {
            num = images.length-1;
         }
         slider.style.opacity='0';
         slider.style.transition='1s'
         setTimeout(fade, 1000);
        let el = document.getElementById('pcount');
        el.innerHTML = `${num+1} из ${images.length}`;
    }
    // счётчик номера изображения
    let count = () => {
        let el = document.getElementById('pcount');
        el.innerHTML = `${num+1} из ${images.length}`;
    }        
    // следующее изображение, но по-другому
    let move = () => {
        num++;
        if(num >= images.length) {
            num = 0;
        }            
        slider.style.opacity='0';
        slider.style.transition='1s'
        setTimeout(fade, 1000);
        let el = document.getElementById('pcount');
        el.innerHTML = `${num+1} из ${images.length}`;
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
let indexPage = () =>{
    num++;
    if(num >= images.length) {
        num = 0;
    }
    body.style.backgroundImage=`${images[num]}`;
}
setInterval(indexPage(),1000);


let back = () => {
    window.location.href = '/index.html'
}