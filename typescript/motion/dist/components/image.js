export class ImageComponent {
    constructor() {
        this.element = document.createElement('img');
        this.element.src = 'assets/image1.jpg';
        this.element.alt = 'alt text';
    }
    attachTo(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}
