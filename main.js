window.addEventListener('load', () => {
  const firstCard = document.querySelector('.firstCardContainer');
  const cardFirst = document.querySelectorAll('.rollingCard')[0];
  let cardMarginTop = window.getComputedStyle(cardFirst).marginTop || cardFirst.currentStyle.marginTop;

  const firstCardLength = window.innerWidth > 768 ? firstCard.offsetHeight : firstCard.offsetWidth;
  const addGoingUp = parseFloat(cardMarginTop.match(/(.*)px/)[1]) + firstCardLength;

  // Vertical animation for large screens
  const verticalAnimation = `
  @keyframes goingUp {
      0% {
          top: 0;
      }
      100% {
          top: -${addGoingUp}px;
      }
  }`;

  // Horizontal animation for small screens
  const horizontalAnimation = `
  @keyframes goingSide {
      0% {
          left: 0;
      }
      100% {
          left: -${addGoingUp}px;
      }
  }`;

  let newTag = document.createElement('style');
  
  // Detect screen size and apply the corresponding animation
  if (window.innerWidth > 768) {
      newTag.innerHTML = verticalAnimation;
  } else {
      newTag.innerHTML = horizontalAnimation;
  }

  document.body.append(newTag);

  // Listen for window resize to dynamically switch animations
  window.addEventListener('resize', () => {
      const newFirstCardLength = window.innerWidth > 768 ? firstCard.offsetHeight : firstCard.offsetWidth;
      const newAddGoingUp = parseFloat(cardMarginTop.match(/(.*)px/)[1]) + newFirstCardLength;

      if (window.innerWidth > 768) {
          newTag.innerHTML = `
          @keyframes goingUp {
              0% {
                  top: 0;
              }
              100% {
                  top: -${newAddGoingUp}px;
              }
          }`;
      } else {
          newTag.innerHTML = `
          @keyframes goingSide {
              0% {
                  left: 0;
              }
              100% {
                  left: -${newAddGoingUp}px;
              }
          }`;
      }
  });
});


