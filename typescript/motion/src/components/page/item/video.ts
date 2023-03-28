import { BaseComponent } from './../../components.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player"><iframe class="video__iframe"></iframe></div>
            <h3 class="page-item__title video__title"></h3>
          </section>`);

    const iframe = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;
    iframe.src = this.convertToEmbededUrl(
      'https://www.youtube.com/embed/8vC1i9NgOoo'
    ); // url -> videoId 만 추출
    console.log(url);

    const titleElement = this.element.querySelector(
      '.video__title'
    )! as HTMLHeadElement;
    titleElement.textContent = title;
  }
  // input
  // https://www.youtube.com/watch?v=8vC1i9NgOoo
  // https://youtu.be/8vC1i9NgOoo
  // output
  // https://www.youtube.com/embed/8vC1i9NgOoo
  // 정규표현식 Regex
  private convertToEmbededUrl(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
// <iframe
//   width='1262'
//   height='710'
//   src='https://www.youtube.com/embed/8vC1i9NgOoo'
//   title='𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 지친 마음을 달래줄 따뜻한 지브리 OST 모음 | 오케스트라 버전 | 가사 없는 음악 | Studio Ghibli OST'
//   frameborder='0'
//   allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//   allowfullscreen
// ></iframe>;
