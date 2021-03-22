// Keybord: music + button activation

document.addEventListener('keydown', playSound);

  function playSound(event) {
    const audio = document.querySelector(`audio[data-letter="${event.keyCode}"]`);
    const pkey = document.querySelector(`.pkey[data-letter="${event.keyCode}"]`);
    pkey.classList.add('active');
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
audio.addEventListener('ended', () => {
   pkey.classList.remove('active');
});
  }
// Keyboard part ends



// Mouse active movement

  const pkey = document.querySelectorAll(`.pkey`);
  const piano = document.getElementById('piano');


  const startSound = (event) => {
    event.target.classList.add('active');
  }
  const stopSound = (event) => {
    event.target.classList.remove('active');
  }


const startCorrespondOver = (event)=> {
    if (event.target.classList.contains('pkey')){
        event.target.classList.add('active');
    }

    pkey.forEach((elem) => {
        elem.addEventListener('mouseover', startSound)
        elem.addEventListener('mouseout', stopSound)
});
}
const stopCorrespondOver = ()=> {
       pkey.forEach((elem) => {
           elem.classList.remove("active");
        elem.removeEventListener('mouseover', startSound);
        elem.removeEventListener('mouseout', stopSound);
    });
    }

 piano.addEventListener('mousedown', startCorrespondOver, false);
piano.addEventListener('mouseup', stopCorrespondOver);

// Mouse active movement ends





// Функция fullscreen

const fullbutton = document.getElementById('fullscreenbutton');
const startFullScreen = (event)=> {
    if (event.target.classList.contains('fullscreen')){

      document.documentElement.requestFullscreen(event);
    }
    if (event.target.classList.contains('fullscreen')){
        document.exitFullscreen(event);
       }
 };
 document.addEventListener('click', startFullScreen) ;

//Функция fullscreen закончилась









// Not ready   Функция для изменения Notes




 const btns = document.querySelectorAll('btn');
 document.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn')) {
        btns.forEach((btn) => {
        if(btn.classList.contains('btn')) {
          btn.classList.add('btn-active');
        }
      });
      event.target.classList.add('btn-active');
    }

  });
// Not ready   Функция для изменения Notes

