import {
  InputDialog,
  MediaData,
  TextData,
} from './components/dialog/dialog.js';
import { Component } from './components/components.js';
import { VideoComponent } from './components/page/item/video.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from './components/page/page.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T;
};
class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    this.bindElementToDialog<MediaSectionInput>(
      '#new-image',
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );

    this.bindElementToDialog<MediaSectionInput>(
      '#new-video',
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
    );

    this.bindElementToDialog<TextSectionInput>(
      '#new-note',
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.body)
    );

    this.bindElementToDialog<TextSectionInput>(
      '#new-todo',
      TextSectionInput,
      (input: TextSectionInput) => new TodoComponent(input.title, input.body)
    );

    // for demo
    this.page.addChild(
      new ImageComponent('Image title 1', 'https://picsum.photos/800/400')
    );
    this.page.addChild(
      new VideoComponent(
        'Video title 1',
        'https://www.youtube.com/watch?v=dP95z1QgnXk'
      )
    );
    this.page.addChild(
      new ImageComponent('Image title 2', 'https://picsum.photos/800/400')
    );
    this.page.addChild(
      new NoteComponent('노트 타이틀 1', '안녕하세요. 반갑습니다')
    );
    this.page.addChild(
      new TodoComponent('TODO title 1', '타입스크립트 공부하기')
    );
    this.page.addChild(
      new VideoComponent(
        'Video title 2',
        'https://www.youtube.com/watch?v=d-3cEQ1d1E4'
      )
    );
    this.page.addChild(
      new TodoComponent('TODO title 2', '오늘은 날씨가 좋으니 산책')
    );
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener('click', () => {
      const dialog = new InputDialog();
      const input = new InputComponent();
      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        //섹션을 만들어서 페이지에 추가
        const image = makeSection(input);
        this.page.addChild(image);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
