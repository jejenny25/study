{
  type PageInfo = {
    tit: string;
  };
  type Page = 'home' | 'about' | 'contact';

  const nav: Record<Page, PageInfo> = {
    // 맵과 비슷하게 하나를 키로 쓰고 나머지를 다른 타입으로 묶고 싶을 때
    home: { tit: 'Home' },
    about: { tit: 'About' },
    contact: { tit: 'Contact' },
  };
}
