import "./style.css";
import Dragmap from "./utils/Dragmap";

let dom: HTMLDivElement | null = document.querySelector<HTMLDivElement>("#app");

function init() {
  if (!dom) return;
  const dragmap = new Dragmap(dom);

  console.log(dragmap);
}

init();
