document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');
  const sections = document.querySelectorAll('section');

  function switchTab(event) {
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    sections.forEach(section => section.style.display = 'none');

    const activeSection = document.querySelector(`.${event.target.textContent.toLowerCase()}`);
    activeSection.style.display = 'block';
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', switchTab);
  });

  document.querySelector('.about').style.display = 'block';
  document.querySelector('.tab').classList.add('active'); 
});


const introVideo = document.getElementById('intro-video');
const mainContainer = document.querySelector('.container');
const videoElement = document.querySelector('#intro-video video');

document.body.style.overflow = 'hidden';

videoElement.onended = () => {
introVideo.style.display = 'none';

mainContainer.style.display = 'flex';
};

