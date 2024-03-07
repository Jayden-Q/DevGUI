const _0x247685 = _0x2a77;
(function (_0x3c3c28, _0x271ad2) {
  const _0x429ab9 = _0x2a77,
    _0x6897d6 = _0x3c3c28();
  while (!![]) {
    try {
      const _0xc02012 =
        (-parseInt(_0x429ab9(0x175)) / 0x1) *
          (parseInt(_0x429ab9(0x152)) / 0x2) +
        (parseInt(_0x429ab9(0x126)) / 0x3) *
          (-parseInt(_0x429ab9(0x17f)) / 0x4) +
        (-parseInt(_0x429ab9(0x171)) / 0x5) *
          (-parseInt(_0x429ab9(0x153)) / 0x6) +
        -parseInt(_0x429ab9(0x15c)) / 0x7 +
        -parseInt(_0x429ab9(0x178)) / 0x8 +
        (-parseInt(_0x429ab9(0x142)) / 0x9) *
          (parseInt(_0x429ab9(0x160)) / 0xa) +
        (parseInt(_0x429ab9(0x172)) / 0xb) * (parseInt(_0x429ab9(0x130)) / 0xc);
      if (_0xc02012 === _0x271ad2) break;
      else _0x6897d6["push"](_0x6897d6["shift"]());
    } catch (_0x1492c4) {
      _0x6897d6["push"](_0x6897d6["shift"]());
    }
  }
})(_0x28ba, 0xcd927);
const content = { title: "DevGUI", credit: _0x247685(0x15e) },
  html =
    _0x247685(0x14a) +
    content[_0x247685(0x156)] +
    _0x247685(0x148) +
    content[_0x247685(0x140)] +
    "\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>\x0a";
document["body"][_0x247685(0x127)]("beforebegin", html);
const css = _0x247685(0x125),
  s = document[_0x247685(0x16a)](_0x247685(0x149));
(s[_0x247685(0x165)] = css),
  document[_0x247685(0x15b)]["insertAdjacentElement"](_0x247685(0x133), s);
const DOMElements = Object["freeze"]({
  container: document[_0x247685(0x168)](".dev-gui-container"),
  draggable: document[_0x247685(0x168)](_0x247685(0x14b)),
  minimize_btn: document[_0x247685(0x168)](_0x247685(0x122)),
  exit_btn: document[_0x247685(0x168)](_0x247685(0x12b)),
  tabs: document[_0x247685(0x155)](".dev-gui-tab"),
  contents: document[_0x247685(0x155)](".dev-gui-content"),
  source_code: document[_0x247685(0x168)](_0x247685(0x121)),
  code_editor: document[_0x247685(0x168)](_0x247685(0x157)),
  inject_btn: document[_0x247685(0x168)](".dev-gui-inject-btn"),
  local_storage_list: document[_0x247685(0x168)](".dev-gui-local-storage"),
  bg_col_option: document[_0x247685(0x168)](_0x247685(0x164)),
});
DOMElements[_0x247685(0x163)][_0x247685(0x165)] =
  document[_0x247685(0x166)][_0x247685(0x17d)];
let prevPosX, prevPosY, curPosX, curPosY;
prevPosX = prevPosY = curPosX = curPosY = 0x0;
const MIN_X = -0x9e,
  MIN_Y = 0xc8,
  MAX_X = window[_0x247685(0x14f)] + window[_0x247685(0x12d)] - 0x1d9;
let MAX_Y = window[_0x247685(0x14d)] + window["innerHeight"] + 0x97;
function _0x2a77(_0x48ff6a, _0x315137) {
  const _0x28ba36 = _0x28ba();
  return (
    (_0x2a77 = function (_0x2a77d3, _0x415254) {
      _0x2a77d3 = _0x2a77d3 - 0x121;
      let _0x9cea4c = _0x28ba36[_0x2a77d3];
      return _0x9cea4c;
    }),
    _0x2a77(_0x48ff6a, _0x315137)
  );
}
window[_0x247685(0x16e)](
  _0x247685(0x128),
  () => (MAX_Y = window[_0x247685(0x14d)] + window[_0x247685(0x16d)] + 0x97)
);
function _0x28ba() {
  const _0x539b8e = [
    "scroll",
    "checked",
    "selectionStart",
    ".dev-gui-exit",
    "inject_btn",
    "innerWidth",
    "designMode",
    "input",
    "48YIzupr",
    "backgroundColor",
    "top",
    "beforeend",
    "left",
    ",\x20CurY:\x20",
    "CurX:\x20",
    "exit_btn",
    "true",
    "Tab",
    "classList",
    "click",
    "length",
    "touchend",
    "touchmove",
    "mousemove",
    "credit",
    "mouseup",
    "386082yVZlCs",
    "draggable",
    "script",
    "dev-gui-selected",
    "off",
    "minimize_btn",
    "</h2>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22dev-gui-minimize\x22>_</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22dev-gui-exit\x22>x</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22dev-gui-navbar\x22>\x0a\x20\x20\x20\x20\x20\x20<ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22dev-gui-tab\x22>Source</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22dev-gui-tab\x20dev-gui-selected\x22>Injector</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22dev-gui-tab\x22>LocalStorage</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22dev-gui-tab\x22>Misc</li>\x0a\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22dev-gui-body\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22dev-gui-content\x20dev-gui-source-tab\x20dev-gui-hidden\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2>Source\x20Code</h2>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dev-gui-code\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22dev-gui-content\x20dev-gui-injector-tab\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2>Injector</h2>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22dev-gui-editor\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20spellcheck=\x22false\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20placeholder=\x22Javascript\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20></textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22dev-gui-inject-btn\x22>Inject</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22dev-gui-content\x20dev-gui-local-storage-tab\x20dev-gui-hidden\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2>Local\x20Storage</h2>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22dev-gui-local-storage\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Key</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Value</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22dev-gui-content\x20dev-gui-misc-tab\x20dev-gui-hidden\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2>Miscellaneous</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dev-gui-option\x20dev-gui-bg-col-changer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22bg-col\x22>Background\x20Color:\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20name=\x22bg-col\x22\x20class=\x22dev-gui-bg-col\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dev-gui-option\x20dev-gui-content-editable-toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22content-editable-toggle\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20>Toggle\x20Content\x20Editing\x20Mode:</label\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22checkbox\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22content-editable-toggle\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22dev-gui-content-editable-toggle-checkbox\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22dev-gui-footer\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "style",
    "\x0a<div\x20class=\x22dev-gui-container\x22>\x0a\x20\x20<div\x20class=\x22dev-gui-window\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22dev-gui-header\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22dev-gui-draggable\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20class=\x22dev-gui-logo\x22>",
    ".dev-gui-draggable",
    ".dev-gui-content-editable-toggle-checkbox",
    "scrollY",
    "log",
    "scrollX",
    "local_storage_list",
    "clientX",
    "266lZWytu",
    "231414xUrvka",
    "change",
    "querySelectorAll",
    "title",
    ".dev-gui-editor",
    "insertAdjacentElement",
    "dev-gui-hidden",
    "\x20-\x20",
    "head",
    "9979242iZyCYL",
    "target",
    "Made\x20by\x20Jayden\x20Q",
    "appendChild",
    "20YrMolx",
    "offsetTop",
    "value",
    "source_code",
    ".dev-gui-bg-col",
    "innerText",
    "documentElement",
    "clientY",
    "querySelector",
    "spellcheck",
    "createElement",
    "offsetLeft",
    "PrevX:\x20",
    "innerHeight",
    "addEventListener",
    "code_editor",
    "end",
    "185XJyLpP",
    "9819062dYVIwp",
    "tabs",
    "contents",
    "3225sVSNgW",
    "bg_col_option",
    "dev-gui-local-storage-val",
    "7510552apOezK",
    "add",
    "body",
    "preventDefault",
    "localStorage",
    "outerHTML",
    "changedTouches",
    "848WbLjsU",
    "contentEditable",
    "key",
    "dev-gui-local-storage-key",
    "mousedown",
    "remove",
    "container",
    ".dev-gui-code",
    ".dev-gui-minimize",
    "removeEventListener",
    "CurPosX:\x20",
    "\x0a/*\x20Global\x20to\x20window*/\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-hidden\x20{\x20display:\x20none\x20!important;\x20}\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-selected\x20{\x20background-color:\x20#444\x20!important;\x20}\x0a\x0a.dev-gui-container\x20.dev-gui-window\x20input,\x20.dev-gui-container\x20.dev-gui-window\x20textarea\x20{\x0a\x20\x20\x20\x20background:\x20#1a1a1a\x20!important;\x0a\x20\x20\x20\x20color:\x20#eee\x20!important;\x0a\x20\x20\x20\x20caret-color:\x20#eee\x20!important;\x0a\x20\x20\x20\x20outline:\x20none\x20!important;\x0a\x20\x20\x20\x20border:\x20none\x20!important;\x0a\x20\x20\x20\x20word-wrap:\x20break-word\x20!important;\x0a\x20\x20\x20\x20font-size:\x202vh\x20!important;\x0a}\x0a\x0a.dev-gui-container\x20.dev-gui-window\x20*::selection\x20{\x0a\x20\x20\x20\x20background:\x20#eee\x20!important;\x0a\x20\x20\x20\x20color:\x20#1a1a1a\x20!important;\x0a}\x0a\x0a/*\x20Container\x20*/\x0a.dev-gui-container\x20{\x0a\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20top:\x2050%;\x20right:\x2050%;\x0a\x20\x20\x20\x20transform:\x20translate(50%,\x20-50%);\x0a\x20\x20\x20\x20width:\x20315px\x20!important;\x0a\x20\x20\x20\x20height:\x20400px\x20!important;\x0a\x20\x20\x20\x20font-family:\x20monospace\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x200\x20!important;\x0a\x20\x20\x20\x20box-sizing:\x20border-box\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999\x20!important;\x0a}\x0a\x0a.dev-gui-container\x20*\x20{\x0a\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20padding:\x200;\x0a\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20user-select:\x20none;\x0a}\x0a\x0a/*\x20Window\x20*/\x0a.dev-gui-container\x20.dev-gui-window\x20{\x0a\x20\x20\x20\x20position:\x20relative\x20!important;\x0a\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20background:\x20#333\x20!important;\x0a\x20\x20\x20\x20color:\x20#eee;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a}\x0a\x0a/*\x20Header\x20*/\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-header\x20{\x0a\x20\x20\x20\x20position:\x20relative\x20!important;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20background:\x20#222\x20!important;\x0a\x20\x20\x20\x20padding:\x205px\x20!important;\x0a\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#ccc\x20!important;\x0a}\x0a\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-header\x20.dev-gui-draggable\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20left:\x200\x20!important;\x0a\x20\x20\x20\x20top:\x200\x20!important;\x0a\x20\x20\x20\x20width:\x2080%\x20!important;\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a}\x0a\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-header\x20h2\x20{\x20font-size:\x201.75rem\x20!important;\x20color:\x20#eee\x20!important;\x20}\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-header\x20div\x20{\x20display:\x20flex;\x20}\x0a\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-header\x20div\x20p\x20{\x0a\x20\x20\x20\x20font-size:\x201.5rem\x20!important;\x0a\x20\x20\x20\x20padding:\x205px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20bold\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a}\x0a\x0a/*\x20Navbar\x20*/\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-navbar\x20ul\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-evenly\x20!important;\x0a\x20\x20\x20\x20list-style:\x20none\x20!important;\x0a}\x0a\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-navbar\x20ul\x20li\x20{\x0a\x20\x20\x20\x20background:\x20#2a2a2a\x20!important;\x0a\x20\x20\x20\x20flex:\x201\x20!important;\x0a\x20\x20\x20\x20padding:\x200\x205px\x20!important;\x0a\x20\x20\x20\x20border-right:\x201px\x20solid\x20#555\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a}\x0a\x0a/*\x20Body\x20*/\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-body\x20{\x0a\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20flex:\x201\x20!important;\x0a\x20\x20\x20\x20overflow-y:\x20auto\x20!important;\x0a}\x0a\x0a/*\x20Content\x20*/\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-body\x20.dev-gui-content\x20{\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a}\x0a\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-body\x20.dev-gui-content\x20h2\x20{\x0a\x20\x20\x20\x20padding:\x205px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20underline\x20!important;\x0a\x20\x20\x20\x20text-underline-offset:\x205px\x20!important;\x0a\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a}\x0a\x0a\x0a/*\x20Source\x20*/\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-body\x20.dev-gui-content.dev-gui-source-tab\x20.dev-gui-code\x20{\x0a\x20\x20\x20\x20background:\x20#1a1a1a\x20!important;\x0a\x20\x20\x20\x20width:\x2090%\x20!important;\x0a\x20\x20\x20\x20height:\x20265px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20padding:\x203px\x20!important;\x0a\x20\x20\x20\x20overflow-y:\x20auto\x20!important;\x0a\x20\x20\x20\x20word-wrap:\x20break-word\x20!important;\x0a\x20\x20\x20\x20user-select:\x20text\x20!important;\x0a}\x0a\x0a/*\x20Injector\x20*/\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-body\x20.dev-gui-content.dev-gui-injector-tab\x20.dev-gui-editor\x20{\x0a\x20\x20\x20\x20width:\x2090%\x20!important;\x0a\x20\x20\x20\x20height:\x20245px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20padding:\x203px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x205px\x20!important;\x0a\x20\x20\x20\x20resize:\x20none\x20!important;\x0a}\x0a\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-body\x20.dev-gui-content.dev-gui-injector-tab\x20.dev-gui-inject-btn\x20{\x0a\x20\x20\x20\x20outline:\x20none\x20!important;\x0a\x20\x20\x20\x20border:\x20none\x20!important;\x0a\x20\x20\x20\x20width:\x2090%\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20padding:\x207px\x20!important;\x0a\x20\x20\x20\x20background:\x20#111\x20!important;\x0a\x20\x20\x20\x20color:\x20#eee\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20bold\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.1rem\x20!important;\x0a}\x0a\x0a/*\x20Local\x20Storage\x20*/\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-body\x20.dev-gui-content.dev-gui-local-storage-tab\x20.dev-gui-local-storage\x20{\x0a\x20\x20\x20\x20width:\x2090%\x20!important;\x0a}\x0a\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-body\x20.dev-gui-content.dev-gui-local-storage-tab\x20.dev-gui-local-storage\x20tr\x20{\x0a\x20\x20\x20\x20background:\x20#1a1a1a\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-around\x20!important;\x0a\x20\x20\x20\x20//\x20gap:\x201rem;\x0a\x20\x20\x20\x20padding:\x201px\x202px\x20!important;\x0a}\x0a\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-body\x20.dev-gui-content.dev-gui-local-storage-tab\x20.dev-gui-local-storage\x20th\x20{\x20font-size:\x201rem;\x20}\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-body\x20.dev-gui-content.dev-gui-local-storage-tab\x20.dev-gui-local-storage\x20td\x20{\x0a\x20\x20\x20\x20flex:\x201\x20!important;\x0a\x20\x20\x20\x20word-break:\x20break-word\x20!important;\x0a\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#333\x20!important;\x0a}\x0a\x0a/*\x20Miscellaneous\x20*/\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-body\x20.dev-gui-content.dev-gui-misc-tab\x20.dev-gui-option\x20{\x0a\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20padding:\x200\x2010px\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20margin-top:\x200.5rem;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a}\x0a\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-body\x20.dev-gui-content.dev-gui-misc-tab\x20.dev-gui-option\x20input[type=\x22color\x22]\x20{\x0a\x20\x20\x20\x20background:\x20none\x20!important;\x0a\x20\x20\x20\x20border:\x20none\x20!important;\x0a}\x0a\x0a/*\x20Toggle\x20Content\x20Editing\x20Mode\x20*/\x0a.dev-gui-container\x20.dev-gui-window\x20.dev-gui-body\x20.dev-gui-content.dev-gui-misc-tab\x20.dev-gui-content-editable-toggle\x20{\x0a\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20padding:\x200\x2010px\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a}\x0a\x0a/*\x20Footer\x20*/\x0a.dev-gui-footer\x20{\x0a\x20\x20padding:\x2010px\x208px\x20!important;\x0a\x20\x20text-align:\x20end;\x0a}\x0a",
    "18063iNTmtv",
    "insertAdjacentHTML",
  ];
  _0x28ba = function () {
    return _0x539b8e;
  };
  return _0x28ba();
}
const onMouseDown = (_0x17b89c) => {
    const _0xd1ab25 = _0x247685;
    _0x17b89c[_0xd1ab25(0x17b)](),
      (curPosX =
        _0x17b89c?.[_0xd1ab25(0x17e)]?.[0x0]?.[_0xd1ab25(0x151)] ??
        _0x17b89c["clientX"]),
      (curPosY =
        _0x17b89c?.[_0xd1ab25(0x17e)]?.[0x0]?.[_0xd1ab25(0x167)] ??
        _0x17b89c[_0xd1ab25(0x167)]),
      document[_0xd1ab25(0x16e)](_0xd1ab25(0x141), onMouseUp),
      document[_0xd1ab25(0x16e)](_0xd1ab25(0x13f), onMouseMove),
      document[_0xd1ab25(0x16e)](_0xd1ab25(0x13d), onMouseUp),
      document[_0xd1ab25(0x16e)](_0xd1ab25(0x13e), onMouseMove),
      console[_0xd1ab25(0x14e)](
        _0xd1ab25(0x16c) + prevPosX + ",\x20PrevY:\x20" + prevPosY
      ),
      console[_0xd1ab25(0x14e)](
        _0xd1ab25(0x136) + curPosX + _0xd1ab25(0x135) + curPosY
      );
  },
  onMouseUp = () => {
    const _0x594a07 = _0x247685;
    (prevPosX = prevPosY = curPosX = curPosY = 0x0),
      document[_0x594a07(0x123)](_0x594a07(0x141), onMouseUp),
      document[_0x594a07(0x123)](_0x594a07(0x13f), onMouseMove),
      document[_0x594a07(0x123)](_0x594a07(0x13d), onMouseUp),
      document[_0x594a07(0x123)]("touchmove", onMouseMove);
  },
  onMouseMove = (_0x2b5fb2) => {
    const _0x381e87 = _0x247685;
    _0x2b5fb2[_0x381e87(0x17b)](),
      console["log"](
        _0x381e87(0x124) +
          curPosX +
          ",\x20e:\x20" +
          (_0x2b5fb2?.[_0x381e87(0x17e)]?.[0x0]?.[_0x381e87(0x151)] ??
            _0x2b5fb2[_0x381e87(0x151)])
      ),
      console["log"](
        curPosX +
          _0x381e87(0x15a) +
          (_0x2b5fb2?.[_0x381e87(0x17e)]?.[0x0]?.[_0x381e87(0x151)] ??
            _0x2b5fb2[_0x381e87(0x151)]) +
          "\x20=\x20" +
          (curPosX -
            (_0x2b5fb2?.[_0x381e87(0x17e)]?.[0x0]?.[_0x381e87(0x151)] ??
              _0x2b5fb2["clientX"]))
      ),
      (prevPosX =
        curPosX -
        (_0x2b5fb2?.[_0x381e87(0x17e)]?.[0x0]?.[_0x381e87(0x151)] ??
          _0x2b5fb2[_0x381e87(0x151)])),
      (prevPosY =
        curPosY -
        (_0x2b5fb2?.[_0x381e87(0x17e)]?.[0x0]?.[_0x381e87(0x167)] ??
          _0x2b5fb2[_0x381e87(0x167)])),
      (curPosX =
        _0x2b5fb2?.[_0x381e87(0x17e)]?.[0x0]?.[_0x381e87(0x151)] ??
        _0x2b5fb2[_0x381e87(0x151)]),
      (curPosY =
        _0x2b5fb2?.[_0x381e87(0x17e)]?.[0x0]?.[_0x381e87(0x167)] ??
        _0x2b5fb2[_0x381e87(0x167)]);
    let _0x10096a = DOMElements[_0x381e87(0x185)][_0x381e87(0x161)] - prevPosY,
      _0x59fda7 = DOMElements[_0x381e87(0x185)][_0x381e87(0x16b)] - prevPosX;
    (_0x10096a = _0x10096a < MIN_Y ? MIN_Y : _0x10096a),
      (_0x10096a = _0x10096a > MAX_Y ? MAX_Y : _0x10096a),
      (_0x59fda7 = _0x59fda7 < MIN_X ? MIN_X : _0x59fda7),
      (_0x59fda7 = _0x59fda7 > MAX_X ? MAX_X : _0x59fda7),
      (DOMElements["container"][_0x381e87(0x149)][_0x381e87(0x132)] =
        _0x10096a + "px"),
      (DOMElements[_0x381e87(0x185)][_0x381e87(0x149)][_0x381e87(0x134)] =
        _0x59fda7 + "px");
  },
  minimize_window = () => {
    const _0x3ee2f4 = _0x247685;
    (DOMElements[_0x3ee2f4(0x185)]["style"][_0x3ee2f4(0x134)] =
      MIN_X + 0xf + "px"),
      (DOMElements["container"][_0x3ee2f4(0x149)]["top"] = MAX_Y + "px");
  },
  exit_window = () => DOMElements[_0x247685(0x185)]["remove"]();
DOMElements["draggable"]["addEventListener"](_0x247685(0x183), onMouseDown),
  DOMElements[_0x247685(0x143)][_0x247685(0x16e)]("touchstart", onMouseDown),
  DOMElements[_0x247685(0x147)][_0x247685(0x16e)](
    _0x247685(0x13b),
    minimize_window
  ),
  DOMElements[_0x247685(0x137)]["addEventListener"](
    _0x247685(0x13b),
    exit_window
  );
const select_tab = (_0x32c6ee, _0xaac7c2) => {
  const _0x17d30f = _0x247685;
  for (
    let _0x935c32 = 0x0;
    _0x935c32 < DOMElements[_0x17d30f(0x173)][_0x17d30f(0x13c)];
    _0x935c32++
  )
    DOMElements["tabs"][_0x935c32][_0x17d30f(0x13a)][_0x17d30f(0x184)](
      _0x17d30f(0x145)
    );
  _0x32c6ee["classList"]["add"](_0x17d30f(0x145));
  for (
    let _0x30f7e8 = 0x0;
    _0x30f7e8 < DOMElements[_0x17d30f(0x174)][_0x17d30f(0x13c)];
    _0x30f7e8++
  )
    DOMElements["contents"][_0x30f7e8][_0x17d30f(0x13a)][_0x17d30f(0x179)](
      "dev-gui-hidden"
    );
  _0xaac7c2[_0x17d30f(0x13a)][_0x17d30f(0x184)](_0x17d30f(0x159));
};
for (let i = 0x0; i < DOMElements[_0x247685(0x173)]["length"]; i++)
  DOMElements[_0x247685(0x173)][i][_0x247685(0x16e)](_0x247685(0x13b), () =>
    select_tab(
      DOMElements[_0x247685(0x173)][i],
      DOMElements[_0x247685(0x174)][i]
    )
  );
DOMElements[_0x247685(0x16f)]["addEventListener"]("keydown", (_0x298b9b) => {
  const _0x2ebabd = _0x247685;
  _0x298b9b[_0x2ebabd(0x181)] == _0x2ebabd(0x139) &&
    (_0x298b9b[_0x2ebabd(0x17b)](),
    DOMElements["code_editor"]["setRangeText"](
      "\x20\x20",
      DOMElements["code_editor"][_0x2ebabd(0x12a)],
      DOMElements["code_editor"]["selectionStart"],
      _0x2ebabd(0x170)
    ));
});
for (key in window[_0x247685(0x17c)]) {
  const lk = key,
    tr = document[_0x247685(0x16a)]("tr"),
    k = document[_0x247685(0x16a)]("td"),
    v = document["createElement"]("td"),
    i = document["createElement"](_0x247685(0x12f));
  k[_0x247685(0x13a)][_0x247685(0x179)](_0x247685(0x182)),
    v[_0x247685(0x13a)][_0x247685(0x179)](_0x247685(0x177)),
    (k[_0x247685(0x165)] = key),
    (i["type"] = "text"),
    (i["value"] = window[_0x247685(0x17c)][key]),
    (i[_0x247685(0x169)] = ![]),
    tr["appendChild"](k),
    tr["appendChild"](v),
    v[_0x247685(0x15f)](i),
    DOMElements[_0x247685(0x150)][_0x247685(0x158)](_0x247685(0x133), tr),
    i[_0x247685(0x16e)](
      _0x247685(0x12f),
      (_0x4455c8) =>
        (window["localStorage"][lk] =
          _0x4455c8[_0x247685(0x15d)][_0x247685(0x162)])
    );
}
DOMElements[_0x247685(0x12c)][_0x247685(0x16e)](_0x247685(0x13b), () => {
  const _0x536b24 = _0x247685,
    _0x2a6234 = document["createElement"](_0x536b24(0x144));
  (_0x2a6234["innerText"] = DOMElements["code_editor"][_0x536b24(0x162)]),
    document[_0x536b24(0x15b)][_0x536b24(0x15f)](_0x2a6234);
});
const changeBgCol = (_0x23969a) => {
  const _0x1d69fd = _0x247685;
  document[_0x1d69fd(0x17a)][_0x1d69fd(0x149)][_0x1d69fd(0x131)] =
    _0x23969a[_0x1d69fd(0x15d)][_0x1d69fd(0x162)];
};
DOMElements[_0x247685(0x176)][_0x247685(0x16e)](_0x247685(0x12f), changeBgCol);
const contentEditableToggleCheckbox = document["querySelector"](
  _0x247685(0x14c)
);
contentEditableToggleCheckbox[_0x247685(0x16e)](_0x247685(0x154), () => {
  const _0x2d5b56 = _0x247685,
    _0x5da5bb = contentEditableToggleCheckbox[_0x2d5b56(0x129)];
  (document["body"][_0x2d5b56(0x180)] = _0x5da5bb ? _0x2d5b56(0x138) : "false"),
    (document[_0x2d5b56(0x12e)] = _0x5da5bb ? "on" : _0x2d5b56(0x146));
});
