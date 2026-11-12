'use strict';
document.documentElement.classList.add('js');
const menuButton = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
function closeMenu() {
  menu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '菜单';
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '收起' : '菜单';
  menu.classList.toggle('is-open', open);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const projects = [...document.querySelectorAll('#projects-grid [data-category]')];
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach(other => {
    other.setAttribute('aria-pressed', String(other === button));
    other.classList.toggle('active', other === button);
  });
  let count = 0;
  projects.forEach(project => {
    project.hidden = filter !== 'all' && project.dataset.category !== filter;
    if (project.hidden) project.querySelectorAll('video').forEach(video => video.pause());
    else count += 1;
  });
  document.getElementById('filter-status').textContent = `显示 ${count} 个项目`;
}));

// Deep links reveal the selected project while native details still work without JS.
function revealLinkedProject() {
  const target = document.getElementById(location.hash.slice(1));
  if (target && target.matches('details.experience')) target.open = true;
}
window.addEventListener('hashchange', revealLinkedProject);
revealLinkedProject();

const experimentDialog = document.getElementById('experiment-dialog');
if (experimentDialog && typeof experimentDialog.showModal === 'function') {
  const player = document.getElementById('experiment-player');
  let opener;
  document.querySelectorAll('[data-experiment]').forEach((link, index) => {
    link.style.setProperty('--order', index);
    link.addEventListener('click', event => {
      event.preventDefault(); opener = link;
      document.getElementById('experiment-title').textContent = link.dataset.experiment;
      player.src = link.href; experimentDialog.showModal();
      player.play().catch(() => {});
    });
  });
  document.getElementById('close-experiment').addEventListener('click', () => experimentDialog.close());
  experimentDialog.addEventListener('close', () => {
    player.pause(); player.removeAttribute('src'); player.load();
    if (opener) opener.focus({preventScroll:true});
  });
}
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('reveal-arrived'); observer.unobserve(entry.target);
    });
  }, {threshold:0.12});
  document.querySelectorAll('.section h2,.section figure,.research-rows article,.project-info,.paper,.experience,.software-list article,.about-copy>p,.contact-columns>div,.video-entry,.loop-steps article,.exploration-list article,.trajectory-list article,.question-layout article').forEach(el => observer.observe(el));
}
