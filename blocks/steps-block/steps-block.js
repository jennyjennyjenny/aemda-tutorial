const createMobileStep = (item) => {
  const stepItem = `
    <details class="step-item">
      <summary>${item.step}: ${item.title}</summary>
      ${item.richText}
    </details>
  `;

  return stepItem;
};

const createMobileContent = (stepsContent) => {
  const mobileContentContainer = document.createElement('div');
  mobileContentContainer.setAttribute('class', 'desktop-hide');

  const mobileContents = stepsContent.map((item) => createMobileStep(item));

  mobileContentContainer.append(mobileContents);

  return mobileContentContainer;
};

const createLargeStepListItem = (item) => {
  const stepListItem = `
    <li>
      <a href="#step${item.index}">${item.step}</a>
      <p>${item.title}</p>
    </li>
  `;

  return stepListItem;
};

const createLargeStepContent = (item) => {
  const stepContent = `
    <div class="step-content">
      <a name="step${item.index}">${item.step}</a>
      <h2>${item.title}</h2>
      <div class="step-rt">
        ${item.richText}
      </div>
    </div>
  `;

  return stepContent;
};

const createDesktopContent = (stepsContent) => {
  const desktopContentContainer = document.createElement('div');
  desktopContentContainer.setAttribute('class', 'mobile-hide tablet-hide');

  const stepListWrapper = document.createElement('div');
  stepListWrapper.setAttribute('class', 'steps-list');

  const stepListElement = document.createElement('ul');

  const stepContentWrapper = document.createElement('div');
  stepContentWrapper.setAttribute('class', 'steps-full');

  const largeStepContent = stepsContent.map((item) => createLargeStepContent(item));
  stepContentWrapper.append(largeStepContent);

  const stepsListItems = stepsContent.map((item) => createLargeStepListItem(item));
  stepListElement.append(stepsListItems);

  desktopContentContainer.append(stepContentWrapper);
  desktopContentContainer.prepend(stepListElement);

  return desktopContentContainer;
};

async function buildStepsBlock(dataLink) {
  const { pathname } = new URL(dataLink);
  const resp = await fetch(pathname);
  const json = await resp.json();
  const stepsContent = json.data;
  if (stepsContent.length < 1) {
    return;
  }

  const blockContainer = document.createElement('div');
  blockContainer.setAttribute('class', 'steps-block');

  const mobileContent = createMobileContent(stepsContent);
  const desktopContent = createDesktopContent(stepsContent);

  blockContainer.append(desktopContent);
  blockContainer.prepend(mobileContent);

  /* eslint-disable-next-line consistent-return */
  return blockContainer;
}

export default async function decorate(block) {
  const links = [...block.querySelectorAll('a')].map((a) => a.href);
  const dataLink = links.find((link) => link.endsWith('stepcontent.json'));
  if (!dataLink) return;

  const stepsBlock = await buildStepsBlock(dataLink);
  block.replaceChildren(stepsBlock);
}
