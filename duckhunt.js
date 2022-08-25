window.onload = function () {
  const body = document.body;

  console.log(body);

  function createDuck() {
    for (i = 0; i < 5; i++) {

      let ducks = document.createElement('div');
      ducks.className = "duck"
      document.body.appendChild(ducks)

    }
  }
  createDuck();

  let allDucks = document.querySelectorAll('.duck')

  function duckFlap() {

    for (i = 0; i < allDucks.length; i++) {
      if (allDucks[i].className === 'duck') {
        allDucks[i].classList.add('flap');

      } else if (allDucks[i].classList === 'duck', 'flap') {
        allDucks[i].classList.remove('flap')

      }
    }
  }

  duckFlap();
  setInterval(duckFlap, 250)

  function moveDuck(allDucks) {
    for (i = 0; i < allDucks.length; i++) {
      allDucks[i].style.left = `${Math.random() * window.innerWidth}px`
      allDucks[i].style.top = `${Math.random() * window.innerHeight}px`
    }
  }

  setInterval(() => moveDuck(allDucks), 1000)

  allDucks.forEach(duck => {
    duck.addEventListener('click', () => {
      duck.classList.add('shot')
      setTimeout(() => duck.remove(), 1000)
      setTimeout(() => checkForWinner(), 1000)

    })
  })

  function checkForWinner() {
    if (document.querySelectorAll('.duck').length < 1) {
      alert(`YOU WIN`)
    }

    allDucks.forEach(duck => {
      duck.addEventListener('click', checkForWinner)
    })
  }
};
