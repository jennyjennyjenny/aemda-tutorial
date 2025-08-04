export default function decorate(block) {
  const mobileWrap = document.createElement('div');
  mobileWrap.setAttribute('class', 'desktop-hide');

  const desktopWrap = document.createElement('div');
  desktopWrap.setAttribute('class', 'mobile-hide tablet-hide');

  [...block.children].forEach((row) => {
    const textContents = row.firstElementChild;
    // const imageContent = row.children[1];
    // build mobile contents
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    const summContent = textContents.firstElementChild;
    summary.append(summContent);
    details.prepend(summary);
  });
}
