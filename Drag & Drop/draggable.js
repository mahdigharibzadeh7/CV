class draggable {
  dragSrcEl;
  constructor(option) {
    this.setupList(option);
    for (const listItem of option.el.children) {
      this.addDnDHandler(listItem);
    }
  }

  setupList(option) {
    let { List, el: element, template } = option;
    if (!element) throw Error("The list is not exist!");
    if (!List) throw Error("The data is not exist!");
    if (!Array.isArray(List)) throw Error("The list is not an array!");
    if (!template) throw Error("This is not a template function!");
    if (typeof template !== "function")
      throw Error("The template is not a function!");

    List.forEach((item) => {
      element.innerHTML += template(item);
    });
  }

  addDnDHandler(element) {
    element.setAttribute("draggable", true);

    element.addEventListener("dragstart", this.handleDragStart.bind(this));
    element.addEventListener("dragover", this.handleDragOver.bind(this));
    element.addEventListener("dragleave", this.handleDragLeave.bind(this));
    element.addEventListener("drop", this.handleDragDrop.bind(this));
    element.addEventListener("dragend", this.handleDragEnd.bind(this));
    element.addEventListener("dragenter", this.handleDragEnter.bind(this));
  }

  handleDragStart(e) {
    this.dragSrcEl = e.target
    e.dataTransfer.setData('text/html', e.target.outerHTML)
    e.target.classList.add('dragEl')
  } 

  handleDragOver(e) {
    if (e.preventDefault) e.preventDefault()
    e.target.classList.add('over')
  }

  handleDragLeave(e) {
    e.target.classList.remove("over");
  }

  handleDragDrop(e) {
    let target = e.target.closest('.list-item')
    if (target !== this.dragSrcEl) {
      target.parentNode.removeChild(this.dragSrcEl);
      let dropHTML = e.dataTransfer.getData('text/html')
      target.insertAdjacentHTML('beforebegin', dropHTML)
      this.addDnDHandler(target.previousSibling)
    }
    e.target.classList.remove('over')
  }

  handleDragEnd(e) {
    e.target.classList.remove("dragEl");
  }

  handleDragEnter(e) {
  }
}
