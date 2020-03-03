/* Import depedencies */
window.Reveal = require('reveal.js/js/reveal.js');
window.marked = require('reveal.js/plugin/markdown/marked.js');
window.markdown = require('reveal.js/plugin/markdown/markdown.js');
window.hljs = require('highlight.js');

/* Import all images with webpack */
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../img', true, /\.(png|jpe?g|svg|mp4|ico)$/));

/* Init libs */
Reveal.initialize({
  controls: true,
  progress: true,
  slideNumber: true,
  autoSlide: 0,
  mouseWheel: true,
  width: "100%",
	height: "100%"
});
hljs.initHighlightingOnLoad();

/* Check if print mode */
if (window.location.search == '?print-pdf') {
  window.print();
}

/* For DEV purpose, uncomment */
//Reveal.slide(5, 20)

/* Demo JS alert */
window.ma_fonction = function () {
  alert('Hello world!');
}
