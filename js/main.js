
  const hero = document.querySelector('.hero');
  const text = hero.querySelector('h1');
  const walk = 100;

  function shadow(e) {
    const { clientWidth: width, clientHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 #111,
      ${xWalk * -1}px ${yWalk}px 0 #333,
      ${yWalk}px ${xWalk * -1}px 0 #555,
      ${yWalk * -1}px ${xWalk}px 0 #777
      `;


  }

  hero.addEventListener('mousemove', shadow);
