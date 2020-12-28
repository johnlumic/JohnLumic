
let open1 = () => {
    let div = document.createElement('div');
    div.id = 'full';
    div.innerHTML = '<iframe src="./wind.html" width="100%" height="100%" frameborder="0"> </iframe>';
    document.body.append(div);

    let close_but = document.createElement('button');
    close_but.id = 'close';
    close_but.innerHTML = '<button class="close" onclick="but_close()">X</button>';
    document.body.append(close_but); 

    let blur = document.getElementById('blur')
    blur.style.filter = 'blur(5px)';
}
let but_close = () => {
    document.getElementById('full').remove();
    document.getElementById('close').remove();
    document.getElementById('blur').style.filter = 'blur(0px)';
    let nav = document.getElementById('nav');
    nav.style.filter = 'blur(0px)';
}