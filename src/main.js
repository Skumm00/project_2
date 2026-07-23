import './style.css'


document.querySelector('#app').innerHTML = `
 <section class = "search-bar">
 <form class = "search-form" id = "search-form">
   <input id = "search-input" type="text" name = "q" placeholder="Search..." />
   <button type="submit">Search</button>
 </form>
 </section>
`

const form = document.getElementById('search-form');
const searchInput = form.querySelector('#search-input');
function parseUrl(input) {
  let target = input.trim();

}
if (!/^https?:\/\//i.test(target)) {
    target = 'https://' + target;
  }
  try {
    const url = new URL(target);
    return url.href;
  } catch (e) {
    return null;
  }
 form.addEventListener('submit', e => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    const GoogleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = GoogleUrl;
  }
});