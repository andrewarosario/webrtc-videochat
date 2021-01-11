(function () {
    "use strict";
  
    document.addEventListener('click', async event => {
      if (event.target.id === 'button') {
        try {
            const stream = await window.navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            const video = document.getElementById('video');
            video.srcObject = stream;
            video.play();
        } catch(err) {
            alert('Access Denied');
        }
      }
    });
  
})();