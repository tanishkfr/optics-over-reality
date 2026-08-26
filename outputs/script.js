const body = document.body;
const frameViewport = document.querySelector('#frame-viewport');
const sceneImage = document.querySelector('#scene-image');
const expandButton = document.querySelector('#expand-frame');
const nextCaseButton = document.querySelector('#next-case');
const replayButton = document.querySelector('#replay-experience');
const discoverState = document.querySelector('#discover-state');
const understandState = document.querySelector('#understand-state');
const seeState = document.querySelector('#see-state');
const frameReveal = document.querySelector('#frame-reveal');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const scrollBehavior = reducedMotion ? 'auto' : 'smooth';

const cases = [
  {
    image: './images/cases/ahmedabad-trump-mural.jpg',
    alt: 'A public-facing Ahmedabad wall painted with a USA India mural before the 2020 Trump visit',
    location: 'AHMEDABAD / THE WALL',
    event: 'TRUMP VISIT · 2020',
    summary: 'A polished route for a global visitor can make the city beyond it disappear.',
    publicView: 'A BARRIER BECOMES THE BACKDROP.',
    narrow: 'A finished barrier frames the motorcade route.',
    title: 'THE WALL HID THE SETTLEMENT. IT DID NOT REMOVE IT.',
    finding: 'Ahead of Donald Trump’s February 2020 visit, Ahmedabad built a wall along his motorcade route. Officials cited security and beautification; critics said it blocked the view of a nearby slum.',
    context: 'THE ROUTE LOOKS ORDERED. THE SETTLEMENT IS STILL THERE.',
    source: 'https://www.latimes.com/world-nation/story/2020-02-18/india-hastily-builds-wall-along-slum-ahead-of-trump-visit',
    sourceLabel: 'REPORTING · ASSOCIATED PRESS VIA LOS ANGELES TIMES · 18 FEBRUARY 2020',
    sourceDetail: 'Associated Press reporting records a 1,640-foot wall erected before Trump’s visit; officials cited security and beautification while critics said it blocked the view of a nearby slum.',
    credit: 'Image: Associated Press via Los Angeles Times ↗',
    creditHref: 'https://www.latimes.com/world-nation/story/2020-02-18/india-hastily-builds-wall-along-slum-ahead-of-trump-visit',
    frameTop: '46%',
    frameBottom: '28%',
    objectPosition: '50% 52%'
  },
  {
    image: './images/cases/delhi-g20-flyover.jpg',
    alt: 'G20 welcome banners and a green screen line a Delhi road before the 2023 summit',
    location: 'NEW DELHI / THE MAKEOVER',
    event: 'G20 SUMMIT · 2023',
    summary: 'A city dressed for delegates can make disruption read like a footnote.',
    publicView: 'WELCOME DELEGATES. KEEP MOVING.',
    narrow: 'Banners, curbs and traffic turn the road into a welcome image.',
    title: 'THE MAKEOVER WAS VISIBLE. THE DISPLACEMENT WAS NOT.',
    finding: 'Ahead of the 2023 G20 summit, New Delhi resurfaced roads, added lights, murals and flowers. AP reported that hundreds of houses and roadside stalls were demolished, displacing thousands; many residents received short-notice evictions.',
    context: 'THE ROAD IS READY. THE DISPLACEMENT IS OFF-ROUTE.',
    source: 'https://apnews.com/article/9d449f133d5ed0aa8855ee65485ce873',
    sourceLabel: 'REPORTING · ASSOCIATED PRESS · 4 SEPTEMBER 2023',
    sourceDetail: 'The AP report connects the visible makeover to demolished homes, roadside stalls and the loss of livelihood described by residents and activists.',
    credit: 'Image: Newslaundry / 2023 G20 preparations ↗',
    creditHref: 'https://www.newslaundry.com/2023/09/07/g20-beautification-drive-pwd-workers-clean-up-makeshift-homes-under-delhi-flyovers-before-eviction',
    frameTop: '39%',
    frameBottom: '37%',
    objectPosition: '50% 52%'
  },
  {
    image: './images/cases/delhi-cwg-stadium.jpg',
    alt: 'Jawaharlal Nehru Stadium in New Delhi during the Commonwealth Games era',
    location: 'NEW DELHI / THE GAMES',
    event: 'COMMONWEALTH GAMES · 2010',
    summary: 'The opening image turns a host city into an event venue.',
    publicView: 'A STADIUM MAKES READINESS VISIBLE.',
    narrow: 'The stadium image turns a city into an event venue.',
    title: 'THE STADIUM WAS CENTRAL. RESETTLEMENT WAS NOT.',
    finding: 'Bhan and Menon-Sen’s study followed nearly 3,000 households evicted during preparations for Delhi’s Commonwealth Games and relocated to Bawana on the city’s edge, documenting losses of rights and livelihoods.',
    context: 'THE VENUE IS CENTRAL. THE RESETTLEMENT SITE IS NOT.',
    source: 'https://iihs.co.in/publication/swept-off-the-map-surviving-eviction-and-resettlement-in-delhi/',
    sourceLabel: 'STUDY · BHAN & MENON-SEN · YODA PRESS · 2008',
    sourceDetail: 'Bhan and Menon-Sen followed nearly 3,000 evicted households relocated to Bawana, a distant site, and documented how resettlement undermined rights, livelihoods and everyday access to the city.',
    credit: 'Image: Wikimedia Commons / Bhaumik J · CC BY 3.0 ↗',
    creditHref: 'https://commons.wikimedia.org/wiki/File:Jawaharlal_Nehru_Stadium1.jpg',
    frameTop: '38%',
    frameBottom: '38%',
    objectPosition: '50% 48%'
  },
  {
    image: './images/cases/ahmedabad-riverfront.jpg',
    alt: 'The developed Sabarmati Riverfront in Ahmedabad',
    location: 'AHMEDABAD / THE RIVERFRONT',
    event: 'URBAN RENEWAL · 2003–2011',
    summary: 'A new edge can look public after the people who lived there have been moved.',
    publicView: 'A CLEAN EDGE MAKES DEVELOPMENT LEGIBLE.',
    narrow: 'A finished riverfront reads as a shared civic improvement.',
    title: 'THE NEW EDGE WAS VISIBLE. THE OLD HOMES WERE NOT.',
    finding: 'Research on Ahmedabad’s “world-class city” projects estimates 28,000 houses in 47 slums were demolished from 2003 to 2010, followed by another 1,000 houses from 20 slums along the Sabarmati riverfront in May 2011.',
    context: 'THE NEW EDGE IS VISIBLE. THE OLD LIVELIHOODS ARE NOT.',
    source: 'https://journals.sagepub.com/doi/10.1177/0956247815569128',
    sourceLabel: 'STUDY · PATEL / SLUIZAS / MATHUR · E&U · 2015',
    sourceDetail: 'Patel, Sliuzas and Mathur place the Sabarmati Riverfront within Ahmedabad’s world-class city projects and document demolition, distant resettlement and the impoverishment risks that followed.',
    credit: 'Image: Chintan Varma / Wikimedia Commons · CC BY-SA 3.0 ↗',
    creditHref: 'https://commons.wikimedia.org/wiki/File:Sabarmati_Riverfront_Ahmedabad.jpg',
    frameTop: '43%',
    frameBottom: '30%',
    objectPosition: '50% 50%'
  }
];

let currentCase = 0;

const elements = {
  caseProgress: document.querySelector('#case-progress'),
  crtChannel: document.querySelector('#crt-channel'),
  crtViewState: document.querySelector('#crt-view-state'),
  caseCount: document.querySelector('#case-count'),
  caseIndex: document.querySelector('#case-index'),
  caseTitle: document.querySelector('#case-title'),
  caseEvent: document.querySelector('#case-event'),
  caseSummary: document.querySelector('#case-summary'),
  frameLabel: document.querySelector('#frame-label'),
  publicView: document.querySelector('#public-view'),
  expandedKicker: document.querySelector('#expanded-kicker'),
  expandedTitle: document.querySelector('#expanded-title'),
  expandedFinding: document.querySelector('#expanded-finding'),
  expandedSource: document.querySelector('#expanded-source'),
  contextNote: document.querySelector('#context-note'),
  caseCaption: document.querySelector('#case-caption'),
  imageCredit: document.querySelector('#image-credit'),
  narrowReadout: document.querySelector('#narrow-readout'),
  evidenceReadout: document.querySelector('#evidence-readout'),
  sourceDetail: document.querySelector('#source-detail'),
  sourceMetadata: document.querySelector('#source-metadata'),
  sourceLink: document.querySelector('#source-link'),
  nextCaseNumber: document.querySelector('#next-case-number'),
  caseNavButtons: Array.from(document.querySelectorAll('.case-nav-button')),
  crtCaseButtons: Array.from(document.querySelectorAll('.crt-case-button'))
};

function setCaseProgress(index) {
  const count = String(index + 1).padStart(2, '0');
  const total = String(cases.length).padStart(2, '0');
  elements.caseCount.textContent = count;
  if (elements.crtChannel) elements.crtChannel.textContent = count + ' / ' + total;
  elements.caseProgress.setAttribute('aria-label', 'Case ' + (index + 1) + ' of ' + cases.length);
  elements.caseIndex.textContent = 'CASE ' + count + ' / ' + total;
  elements.frameLabel.textContent = 'PUBLIC-FACING VIEW / ' + count;
  elements.expandedKicker.firstChild.nodeValue = 'A1 CASE / ' + count + ' ';
  elements.nextCaseNumber.textContent = count;
}

function updateCaseNavigation(index) {
  elements.caseNavButtons.forEach((button, buttonIndex) => {
    const isCurrent = buttonIndex === index;
    button.classList.toggle('is-current', isCurrent);
    button.setAttribute('aria-current', String(isCurrent));
  });
  elements.crtCaseButtons.forEach((button, buttonIndex) => {
    const isCurrent = buttonIndex === index;
    button.classList.toggle('is-current', isCurrent);
    button.setAttribute('aria-current', String(isCurrent));
  });
}

function setCase(index) {
  currentCase = (index + cases.length) % cases.length;
  const item = cases[currentCase];

  frameViewport.style.setProperty('--frame-top', item.frameTop);
  frameViewport.style.setProperty('--frame-bottom', item.frameBottom);
  sceneImage.style.objectPosition = item.objectPosition;
  sceneImage.src = item.image;
  sceneImage.alt = item.alt;
  frameViewport.setAttribute('aria-label', 'Public-facing view for ' + item.location + '; expand to see the documented context');

  elements.caseTitle.textContent = item.location;
  elements.caseEvent.textContent = item.event;
  elements.caseSummary.textContent = item.summary;
  elements.publicView.textContent = item.publicView;
  elements.expandedTitle.textContent = item.title;
  elements.expandedFinding.textContent = item.finding;
  elements.expandedSource.href = item.source;
  elements.contextNote.textContent = item.context;
  elements.caseCaption.textContent = 'Image shows a public-facing scene; the claim is in the linked source.';
  elements.imageCredit.href = item.creditHref;
  elements.imageCredit.textContent = item.credit;
  elements.narrowReadout.textContent = item.narrow;
  elements.evidenceReadout.textContent = item.finding;
  elements.sourceDetail.textContent = item.sourceDetail;
  elements.sourceMetadata.textContent = item.sourceLabel;
  elements.sourceLink.href = item.source;
  elements.sourceLink.textContent = 'OPEN CASE SOURCE ↗';
  setCaseProgress(currentCase);
  updateCaseNavigation(currentCase);
}

function setExpanded(expanded) {
  body.classList.toggle('is-expanded', expanded);
  expandButton.setAttribute('aria-expanded', String(expanded));
  discoverState.setAttribute('aria-hidden', String(!expanded));
  understandState.setAttribute('aria-hidden', String(!expanded));
  frameReveal.setAttribute('aria-hidden', String(!expanded));
  expandButton.disabled = expanded;
  expandButton.querySelector('.button-label').textContent = expanded ? 'RECORD OPEN' : 'ZOOM OUT';
  elements.crtViewState.textContent = expanded ? 'WIDER RECORD' : 'ON AIR';
}

function resetToCase(index, { scroll = true, focus = true } = {}) {
  setExpanded(false);
  setCase(index);
  if (scroll) seeState.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
  if (focus) window.setTimeout(() => expandButton.focus(), reducedMotion ? 0 : 650);
}

expandButton?.addEventListener('click', () => setExpanded(true));
nextCaseButton?.addEventListener('click', () => resetToCase(currentCase + 1));
elements.caseNavButtons.forEach((button) => {
  button.addEventListener('click', () => resetToCase(Number(button.dataset.case)));
});
elements.crtCaseButtons.forEach((button) => {
  button.addEventListener('click', () => resetToCase(Number(button.dataset.case), { scroll: false, focus: false }));
});
replayButton?.addEventListener('click', () => resetToCase(0));

sceneImage.addEventListener('error', () => {
  frameViewport.dataset.imageError = 'true';
});
sceneImage.addEventListener('load', () => {
  delete frameViewport.dataset.imageError;
});

setCase(0);
