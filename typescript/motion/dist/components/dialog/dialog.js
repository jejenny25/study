import { BaseComponent } from './../components.js';
export class InputDialog extends BaseComponent {
    constructor() {
        super(`<dialog class="dialog">
            <div class="dialog__container">
              <button class="close">X</button>
              <div id="dialog__body"></div>
              <button class="dialog_submit">Add</button>
            </div>
          </dialog>`);
        const closeBtn = this.element.querySelector('.close');
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
        const submiBtn = this.element.querySelector('.dialog_submit');
        submiBtn.onclick = () => {
            this.submitListener && this.submitListener();
        };
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
    setOnSubmitListener(listener) {
        this.submitListener = listener;
    }
    addChild(child) {
        const body = this.element.querySelector('#dialog__body');
        child.attachTo(body);
    }
}
