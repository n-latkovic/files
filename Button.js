// This is the ONLY place the button's markup and behavior are defined.
// Anything that imports this function gets the same button —
// change it here, and every page that imports it updates too.

export function createButton(label, onClick) {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.textContent = label;
  if (onClick) btn.addEventListener('click', onClick);
  return btn;
}
