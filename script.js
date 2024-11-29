function showProgressBar(callback) {
    const overlay = document.getElementById('progressOverlay');
    const progress = overlay.querySelector('.progress');
    
    // Afficher l'overlay
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
  
    // Animation de la barre de progression
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 10;
      progress.style.width = progressValue + '%';
      
      if (progressValue >= 100) {
        clearInterval(interval);
        callback(); // Appeler la fonction après la progression complète
      }
    }, 300);
  }
  
  function goToNextPage() {
    showProgressBar(() => {
      window.location.href = 'nextpage.html'; // Redirige vers une autre page
    });
  }
  