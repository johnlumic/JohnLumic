     /** let start_photo = () => {
        let start = document.getElementById('leftabout');
        let center = document.createElement('img')
        center.id = 'center_photo'
        center = document.getElementById('center');
        center.innerHTML = `<img id='slider' src=${images[num]} class='img' onclick='close()'>`
        document.start.after(center);
     }
     
     */
     
     
     var images = [
        './source/photo/img/1.jpg',
        './source/photo/img/2.jpg',
        './source/photo/img/3.jpg',
        './source/photo/img/4.jpg',
     ];
     var playscore = 0;
     let butt = [
         './source/play.png',
         './source/pause.png',
     ]
     let about = [
         'катя',
         'туман',
         'череп',
         'котятки',
     ]
    let num = 0;
    let i = 1;
    let t;

    // следующее изображение
     function next() { 
        i++;
        count();         
        var slider = document.getElementById('slider');
        num++;
        if(num >= images.length) {
            num = 0;
        }

        slider.style.opacity='0';
        slider.style.transition='1s'
        setTimeout(fade, 1000);
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
        i--
        count();

    }
    // счётчик номера изображения
    let count = () => {
        let el = document.getElementById('pcount');
        if(i <= 0){
            i = images.length;
        }
        if (i > images.length){
            i = 1;
        }
        el.innerHTML = `${i} из ${images.length}`;
    }        
    // следующее изображение, но по-другому
    let move = () => {
        count();
        num++;
        if(num >= images.length) {
            num = 0;
        }            
        slider.style.opacity='0';
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

let back = () => {
    window.location.href = '/index.html'
}