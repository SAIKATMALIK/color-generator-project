

function changecolor() {
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomncolor = "#" + randomnumber.toString(16);
    document.querySelector('.color-withcode').style.backgroundColor = randomncolor;
    document.querySelector('.hex-color').innerHTML=randomncolor;
  }

  
  let changebtn = document.querySelector('.change-btn');
  changebtn.addEventListener('click', () => {
    changecolor();

  });


  