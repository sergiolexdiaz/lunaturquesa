function setLang(lang) {
  document.querySelectorAll('.text').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.' + lang).forEach(el => el.classList.remove('hidden'));
}
