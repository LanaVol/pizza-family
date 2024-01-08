export class DOMHelper {
  static select(selector) {
    return document.querySelector(selector);
  }

  static #validateDOMElement(element) {
    if (element instanceof Element) {
      return true;
    }
    return false;
  }

  static addClass(element, className) {
    if (!DOMHelper.#validateDOMElement(element)) return;

    element.classList.add(className);
  }

  static removeClass(element, className) {
    if (!DOMHelper.#validateDOMElement(element)) return;

    element.classList.remove(className);
  }

  static setTextContent(element, text) {
    if (!DOMHelper.#validateDOMElement(element)) return;

    element.textContent = text;
  }

  static toggleClass(element, removeClass, addClass) {
    if (!DOMHelper.#validateDOMElement(element)) return;

    DOMHelper.removeClass(element, removeClass);
    DOMHelper.addClass(element, addClass);
  }

  // static isContainsClass(element, className) {
  //   if (!DOMHelper.#validateDOMElement(element)) return;

  //   if (element.classList.contains(className)) {
  //     return true;
  //   }
  //   return false;
  // }
}
