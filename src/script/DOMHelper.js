export class DOMHelper {
  static select(selector) {
    return document.querySelector(selector);
  }

  static addClass(element, className) {
    element.classList.add(className);
  }

  static removeClass(element, className) {
    element.classList.remove(className);
  }

  static setTextContent(element, text) {
    element.textContent = text;
  }
}
