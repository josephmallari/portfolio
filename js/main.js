const main = document.querySelector('.overlay');

document.querySelector('.current').onmouseover = (e) => {
  main.style.backgroundImage = 'url(../images/code.png)';

  e.target.onmouseleave = () => {
    main.style.backgroundImage = 'none';
  }
}

document.querySelector('.fader').onmouseover = (e) => {
  main.style.backgroundImage = 'url(../images/fader.png)';

  e.target.onmouseleave = () => {
    main.style.backgroundImage = 'none';
  }
}

document.querySelector('.natgeo').onmouseover = (e) => {
	console.log('natgeo hover');

  e.target.onmouseleave = () => {
    console.log('natgeo leave');
  }
}

document.querySelector('.bluemoonfund').onmouseover = (e) => {
	console.log('blue moon hover');

  e.target.onmouseleave = () => {
    console.log('blue moon leave');
  }
}

document.querySelector('.lot').onmouseover = (e) => {
	console.log('lot hover');

  e.target.onmouseleave = () => {
    console.log('lot leave');
  }
}

document.querySelector('.pp').onmouseover = (e) => {
	console.log('pp hover');

  e.target.onmouseleave = () => {
    console.log('pp leave');
  }
}
