const cssQuestions = [
  {
    id: 'css-1',
    folder: '06 April',
    number: 1,
    tech: 'CSS',
    title: 'Hyperlink States Styling',
    code: `a:link { color: pink; text-decoration: none; }
a:active { color: blue; }
a:visited { color: green; }`,
    outputHtml: `<a href="https://react.dev" target="_blank">React Link</a>`,
  },
  {
    id: 'css-2',
    folder: '06 April',
    number: 2,
    tech: 'CSS',
    title: 'Box Shadow and Text Shadow',
    code: `.card { padding: 20px; box-shadow: 0 8px 20px rgba(0,0,0,.3); }
h1 { text-shadow: 2px 2px 4px #00d1ff; }`,
    outputHtml: `<div class="card"><h1>Shadow Demo</h1></div>`,
  },
  {
    id: 'css-3',
    folder: '06 April',
    number: 3,
    tech: 'CSS',
    title: 'Rounded Corners',
    code: `.box { width: 220px; height: 120px; border-radius: 22px; background: linear-gradient(45deg,#9a4dff,#00d1ff); }`,
    outputHtml: `<div class="box"></div>`,
  },
  {
    id: 'css-4',
    folder: '13 April',
    number: 4,
    tech: 'CSS',
    title: 'Newspaper Multi-Column Layout',
    code: `.news { column-count: 3; column-gap: 24px; text-align: justify; }`,
    outputHtml: `<div class="news">Web technology practicals include HTML, CSS, JavaScript and React modules. This is sample long text to demonstrate newspaper style columns with clean reading and balanced spacing in the layout.</div>`,
  },
  {
    id: 'css-5',
    folder: '13 April',
    number: 5,
    tech: 'CSS',
    title: 'Transition Effect',
    code: `.box { width: 120px; height: 120px; background: #9a4dff; transition: transform .4s, background .4s; }
.box:hover { transform: scale(1.2); background: #00d1ff; }`,
    outputHtml: `<div class="box"></div>`,
  },
  {
    id: 'css-6',
    folder: '13 April',
    number: 6,
    tech: 'CSS',
    title: 'Fixed Background Image',
    code: `body { background: url('https://picsum.photos/1200/800?land') center/cover fixed; min-height: 100vh; }`,
    outputHtml: `<h1>Scroll to test fixed background</h1><p style="height:900px;">Background remains fixed.</p>`,
  },
  {
    id: 'css-7',
    folder: '18 March',
    number: 7,
    tech: 'CSS',
    title: 'Background Position and Repeat',
    code: `.banner { background-image: url('https://picsum.photos/90'); background-repeat: repeat-x; background-position: top center; height: 180px; }`,
    outputHtml: `<div class="banner"></div>`,
  },
  {
    id: 'css-8',
    folder: '18 March',
    number: 8,
    tech: 'CSS',
    title: 'CSS Position Properties',
    code: `.static{position:static}.relative{position:relative;left:20px}.absolute{position:absolute;top:10px;right:10px}
.fixed{position:fixed;bottom:8px;right:8px}.sticky{position:sticky;top:0;background:#111}`,
    outputHtml: `<div class="sticky">Sticky Bar</div><div class="static">Static</div><div class="relative">Relative</div><div class="absolute">Absolute</div><div style="height:500px"></div><div class="fixed">Fixed</div>`,
  },
  {
    id: 'css-9',
    folder: '18 March',
    number: 9,
    tech: 'CSS',
    title: 'Fonts, Background, Links, Cursor and Layers',
    code: `body { font-family: 'Segoe UI'; background: url('https://picsum.photos/1200/700?bg') no-repeat center/cover; }
a:hover { cursor: pointer; color: #00d1ff; }
.layer1 { position: relative; z-index: 1; }
.layer2 { position: relative; z-index: 2; }`,
    outputHtml: `<div class="layer1">Layer 1</div><div class="layer2">Layer 2</div><a href="#">Hover me</a>`,
  },
]

export default cssQuestions
