export function getNavbarHeight(): number {
  if (typeof window === 'undefined') return 80;
  const bar = document.querySelector<HTMLElement>('[data-navbar-bar]');
  if (bar) {
    return bar.getBoundingClientRect().height;
  }
  return window.innerWidth >= 768 ? 80 : 64;
}

export function scrollToSection(href: string): void {
  if (typeof document === 'undefined') return;
  const el = document.querySelector<HTMLElement>(href);
  if (!el) return;

  const navHeight = getNavbarHeight();
  const extraDownOffset = href === '#specialisation' ? 10 : 0;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight + extraDownOffset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  });
}
