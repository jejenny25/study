import { InputDialog, } from './components/dialog/dialog.js';
import { VideoComponent } from './components/page/item/video.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent, PageItemComponent, } from './components/page/page.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';
class App {
    constructor(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog('#new-image', MediaSectionInput, (input) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog('#new-video', MediaSectionInput, (input) => new VideoComponent(input.title, input.url));
        this.bindElementToDialog('#new-note', TextSectionInput, (input) => new NoteComponent(input.title, input.body));
        this.bindElementToDialog('#new-todo', TextSectionInput, (input) => new TodoComponent(input.title, input.body));
        this.page.addChild(new ImageComponent('Image title 1', 'https://picsum.photos/800/400'));
        this.page.addChild(new VideoComponent('Video title 1', 'https://www.youtube.com/watch?v=dP95z1QgnXk'));
        this.page.addChild(new ImageComponent('Image title 2', 'https://picsum.photos/800/400'));
        this.page.addChild(new NoteComponent('노트 타이틀 1', '안녕하세요. 반갑습니다'));
        this.page.addChild(new TodoComponent('TODO title 1', '타입스크립트 공부하기'));
        this.page.addChild(new VideoComponent('Video title 2', 'https://www.youtube.com/watch?v=d-3cEQ1d1E4'));
        this.page.addChild(new TodoComponent('TODO title 2', '오늘은 날씨가 좋으니 산책'));
    }
    bindElementToDialog(selector, InputComponent, makeSection) {
        const element = document.querySelector(selector);
        element.addEventListener('click', () => {
            const dialog = new InputDialog();
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const image = makeSection(input);
                this.page.addChild(image);
                dialog.removeFrom(this.dialogRoot);
            });
        });
    }
}
new App(document.querySelector('.document'), document.body);
