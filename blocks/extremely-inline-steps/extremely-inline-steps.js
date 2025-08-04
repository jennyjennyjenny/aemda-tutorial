/* eslint-disable */

export default function decorate(block) {
  const mobileWrap = document.createElement('div');
  mobileWrap.setAttribute('class', 'desktop-hide');

  const desktopWrap = document.createElement('div');
  desktopWrap.setAttribute('class', 'mobile-hide tablet-hide');

  [...block.children].forEach((row) => {
    const contentWrapper = row.firstElementChild;
    const stepNum = contentWrapper.querySelector('h6'); // h6 cannot be in the real content on the page becaue we're using it for this
    const title = contentWrapper.querySelector('h2'); 
    const icon = contentWrapper.querySelector('picture'); // only one picture element per step allowed
    const iconAltText = contentWrapper.querySelector('blockquote'); // cannot use blockquote for real content in the step

    // mark richtext start and end
    const hRules = contentWrapper.querySelectorAll('hr'); 
    // this assumes only one instance of richtext per step content
    const rtStart = hRules[0];
    rtStart.setAttribute('class', 'rt-start');
    const rtEnd = hRules[1];
    rtEnd.setAttribute('class', 'rt-end');

    // collect elements between rt-start and rt-end as richtext block
    // wrap them with a div, put a class on it for FED uses

    // build mobile elements

    // build desktop elements

    // put it all on the page

  });
}