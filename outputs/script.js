const body = document.body;
const expandButton = document.querySelector('#expand-frame');
const replayButton = document.querySelector('#replay-experience');
const discoverState = document.querySelector('#discover-state');
const understandState = document.querySelector('#understand-state');
const seeState = document.querySelector('#see-state');
const frameReveal = document.querySelector('#frame-reveal');
const stageCount = document.querySelector('#stage-count');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const scrollBehavior = reducedMotion ? 'auto' : 'smooth';

function setStage(number) {
  if (stageCount) stageCount.textContent = String(number).padStart(2, '0');
}

function setExpanded(expanded) {
  body.classList.toggle('is-expanded', expanded);
  expandButton?.setAttribute('aria-expanded', String(expanded));
  discoverState?.setAttribute('aria-hidden', String(!expanded));
  understandState?.setAttribute('aria-hidden', String(!expanded));
  frameReveal?.setAttribute('aria-hidden', String(!expanded));
  if (expandButton) expandButton.disabled = expanded;
  if (expandButton) {
    expandButton.querySelector('.button-label').textContent = expanded ? 'FRAME EXPANDED' : 'EXPAND THE FRAME →';
  }
  setStage(expanded ? 2 : 1);
}

expandButton?.addEventListener('click', () => setExpanded(true));

replayButton?.addEventListener('click', () => {
  setExpanded(false);
  seeState?.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
  window.setTimeout(() => expandButton?.focus(), reducedMotion ? 0 : 650);
});

const stageObserver = new IntersectionObserver((entries) => {
  if (!body.classList.contains('is-expanded')) {
    setStage(1);
    return;
  }

  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    setStage(entry.target.id === 'understand-state' ? 3 : 2);
  });
}, { threshold: 0.45 });

if (discoverState) stageObserver.observe(discoverState);
if (understandState) stageObserver.observe(understandState);
