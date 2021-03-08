// index.js
import Button from './packages/button/index.js';
import Link from './packages/link/index.js';
import DraggableContainer from "./packages/draggableContainer/index.js";

const components = [
  Button,
  Link,
  DraggableContainer
];

const install = function (Vue, opt = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Link,
  DraggableContainer
};