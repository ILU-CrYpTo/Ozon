//Кнопка-CA
function copyText() {
  const button = document.querySelector('.copy-button');
  const buttonText = document.getElementById('button-text');
  const textToCopy = "Sosal?";
  
  navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Text copied to clipboard!');
      

      button.classList.add('clicked');
      buttonText.textContent = 'Copied: CA is not generated yet...';
      
      setTimeout(() => {
          button.classList.remove('clicked');
          buttonText.textContent = 'Token adress: CA is not generated yet...';
      }, 3000);
  }).catch(err => {
      console.error('Failed to copy text: ', err);
  });
}