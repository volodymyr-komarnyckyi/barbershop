(function () {
    const clockContainer = document.querySelector(
      ".testimonials__clockContainer-clock"
    );
  
    function updateCLock() {
      clockContainer.innerText = new Date().toLocaleTimeString();
    }
  
    setInterval(updateCLock, 1000);
  })();
  