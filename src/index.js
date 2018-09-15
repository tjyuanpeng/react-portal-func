import { render as ReactDomRender, unmountComponentAtNode } from "react-dom";

export default (render, { tagName = "div", unmountDelay = 0 } = {}) => {
  const dom = document.createElement(tagName);
  document.getElementsByTagName("body")[0].appendChild(dom);

  let _render = (resolve, reject) => () =>
    ReactDomRender(render({ resolve, reject, render: _render }), dom);

  const p = new Promise((resolve, reject) => {
    _render = _render(resolve, reject, _render);
    _render();
  });

  const callback = () => {
    _render();
    setTimeout(() => {
      unmountComponentAtNode(dom);
    }, unmountDelay);
  };
  p.then(callback, callback);
  return p;
};
