class draggable {
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
    element.addEventListener("dragend", this.handleDragEnd.bind(this));
    element.addEventListener("dragenter", this.handleDragEnter.bind(this));
    element.addEventListener("drop", this.handleDragDrop.bind(this));
  }

  handleDragStart(e) {
    // console.log("drag Start", e.target);
  }
  handleDragOver(e) {
    // console.log("drag Over", e.target);
  }
  handleDragLeave(e) {
    // console.log("drag Leave", e.target);
  }
  handleDragEnd(e) {
    // console.log("drag End", e.target);
  }
  handleDragEnter(e) {
    // console.log("drag Enter", e.target);
  }
  handleDragDrop(e) {
    // console.log("drag Drop", e.target);
  }
}
