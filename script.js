function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.toggle('active');
  }
  
  function copyToClipboard() {
    const input = document.querySelector('#lightbox input');
    input.select();
    navigator.clipboard.writeText(input.value).then(() => {
      alert('Link copied to clipboard!');
    }, (err) => {
      console.error('Failed to copy link:', err);
    });
  }


 
  