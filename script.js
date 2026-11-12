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
