//Кнопка-CA
function copyText() {
  const button = document.querySelector('.copy-button');
  const buttonText = document.getElementById('button-text');
  const textToCopy = "BFxf3u8VkvuTeR3XqyhmEXEro1N26bLzVbLk99V3pump";
  
  navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Text copied to clipboard!');
      

      button.classList.add('clicked');
      buttonText.textContent = 'Copied: BFxf3u8VkvuTeR3XqyhmEXEro1N26bLzVbLk99V3pump';
      
      setTimeout(() => {
          button.classList.remove('clicked');
          buttonText.textContent = 'Token adress: BFxf3u8VkvuTeR3XqyhmEXEro1N26bLzVbLk99V3pump';
      }, 3000);
  }).catch(err => {
      console.error('Failed to copy text: ', err);
  });
}
