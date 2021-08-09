import { createElement } from '../utils.js';
const createNoEventTemplate = () => '<p class="trip-events__msg">Click New Event to create your first point</p>';

export default class NoEvent {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNoEventTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}