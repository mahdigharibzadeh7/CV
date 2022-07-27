class draggable {
  constructor(option) {
    this.setupList(option);
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
}
