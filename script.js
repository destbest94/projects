

document.querySelector('.expansion-wrapper__button').addEventListener('click', function() {
  const content = document.querySelector('.expansion-wrapper__content');

  if (content.style.display == 'none') {
    content.style.display = 'block';
  
  } else {
    content.style.display = 'none';
  }

});

document.querySelector('.display--buttons__device').addEventListener('click', function() {
  
  if (document.querySelector('.display--buttons__device').innerHTML == 'Mobile') {
    document.querySelector('.display--buttons__device').innerHTML = 'Desktop';
    document.querySelector('.display__iframe').style.width = '375px';
  } else {
    document.querySelector('.display--buttons__device').innerHTML = 'Mobile';
    document.querySelector('.display__iframe').style.width = '100%';
  }
});


document.querySelector('.display--buttons__back').addEventListener('click', function() {
  document.querySelector('.wrapper').style.display = 'block';
  document.querySelector('.display').style.display = 'none';
});

document.querySelector('.mobile').addEventListener('click', function() {
  document.querySelector('.wrapper').style.display = 'none';
  document.querySelector('.display').style.display = 'block';
});