export default class Dragmap {
  dom: HTMLDivElement | null = null;
  container: HTMLDivElement | null = null;
  image: HTMLImageElement | null = null;

  constructor(dom:HTMLDivElement) {
    const width = dom.offsetWidth;
    const height = dom.offsetHeight;
    console.log({ width, height });
    const container = document.createElement("div");
 
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.background = "black";
    container.style.position = "relative";
    container.style.overflow = "hidden";
 
    dom.appendChild(container);




    this.dom = dom

  }
}
