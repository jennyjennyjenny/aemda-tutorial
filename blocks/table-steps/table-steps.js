export default function decorate(block) {
  const mobileWrap = document.createElement('div');
  mobileWrap.setAttribute('class', 'desktop-hide');

  const desktopWrap = document.createElement('div');
  desktopWrap.setAttribute('class', 'mobile-hide tablet-hide');
  block.setAttribute('class', 'testy');

  // let stepNumText;
  // [...block.children].forEach((row) => {
  //   if (row.firstElementChild.textContent == 'number') {

  //   }
  // });
}
