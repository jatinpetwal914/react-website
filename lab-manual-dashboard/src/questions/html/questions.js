const htmlQuestions = [
  {
    id: 'html-1',
    folder: '04 Feb',
    number: 1,
    tech: 'HTML',
    title: 'Text Formatting Tags',
    code: `<h1>Text Formatting Demo</h1>
<p><b>Bold</b>, <strong>Strong</strong>, <i>Italic</i>, <em>Emphasis</em></p>
<p><u>Underline</u>, <mark>Highlight</mark>, <small>Small text</small></p>
<p><del>Deleted</del>, <ins>Inserted</ins>, H<sub>2</sub>O, 10<sup>2</sup></p>`,
  },
  {
    id: 'html-2',
    folder: '04 Feb',
    number: 2,
    tech: 'HTML',
    title: 'Star Pattern Figure',
    code: `<pre>
      *
    * * *
  * * * * *
* * * * * * *
</pre>`,
  },
  {
    id: 'html-3',
    folder: '04 Feb',
    number: 3,
    tech: 'HTML',
    title: 'Table Printing',
    code: `<table border="1" cellpadding="8">
  <tr><th>Roll No</th><th>Name</th><th>Branch</th></tr>
  <tr><td>101</td><td>Aman</td><td>CSE</td></tr>
  <tr><td>102</td><td>Priya</td><td>CSE</td></tr>
</table>`,
  },
  {
    id: 'html-4',
    folder: '04 Feb',
    number: 4,
    tech: 'HTML',
    title: 'Images with Hyperlinks in Table',
    code: `<table border="1" cellpadding="10">
  <tr>
    <td><a href="https://react.dev"><img src="https://picsum.photos/120?1" alt="React"></a></td>
    <td><a href="https://vite.dev"><img src="https://picsum.photos/120?2" alt="Vite"></a></td>
  </tr>
</table>`,
  },
  {
    id: 'html-5',
    folder: '11 Feb',
    number: 5,
    tech: 'HTML',
    title: 'Image Map with Hotspots',
    code: `<img src="https://picsum.photos/500/250" usemap="#infoMap" alt="Map">
<map name="infoMap">
  <area shape="rect" coords="20,20,180,120" href="https://developer.mozilla.org" alt="MDN">
  <area shape="rect" coords="220,40,420,180" href="https://react.dev" alt="React">
</map>`,
  },
  {
    id: 'html-6',
    folder: '11 Feb',
    number: 6,
    tech: 'HTML',
    title: 'Snapshot Style Layout',
    code: `<h2>College Portal</h2>
<hr>
<p>This layout represents a snapshot style page with title, menu and content sections.</p>
<ul><li>Home</li><li>About</li><li>Contact</li></ul>`,
  },
  {
    id: 'html-7',
    folder: '11 Feb',
    number: 7,
    tech: 'HTML',
    title: 'Hotel Customer Profile Form',
    code: `<form>
  <input placeholder="Name"><br><br>
  <textarea placeholder="Address"></textarea><br><br>
  <input type="number" placeholder="Age"><br><br>
  Gender: <label><input type="radio" name="g">Male</label> <label><input type="radio" name="g">Female</label><br><br>
  Room: <select><option>A/C</option><option>Non-A/C</option><option>Deluxe</option></select><br><br>
  Payment: <label><input type="checkbox">Cash</label> <label><input type="checkbox">Card</label> <label><input type="checkbox">Coupons</label><br><br>
  <button>Submit</button>
</form>`,
  },
  {
    id: 'html-8',
    folder: '13 Feb',
    number: 8,
    tech: 'HTML',
    title: 'HTML5 Semantic and Media Tags',
    code: `<header><h1>Lab Manual</h1></header>
<nav><a href="#">Home</a> | <a href="#">Practicals</a></nav>
<article><p>Semantic section using article.</p></article>
<video controls width="240"><source src="" type="video/mp4"></video>
<audio controls><source src="" type="audio/mpeg"></audio>
<embed src="https://www.wikipedia.org" width="300" height="120">
<input list="langs"><datalist id="langs"><option value="HTML"><option value="CSS"></datalist>
<p><bdi>abc123</bdi></p>
<output>Sample output tag</output>
<footer>Footer content</footer>`,
  },
  {
    id: 'html-9',
    folder: '13 Feb',
    number: 9,
    tech: 'HTML',
    title: 'Nested List Design',
    code: `<ol>
  <li>Frontend
    <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>
  </li>
  <li>Frameworks
    <ul><li>React</li><li>Vue</li></ul>
  </li>
</ol>`,
  },
]

export default htmlQuestions
