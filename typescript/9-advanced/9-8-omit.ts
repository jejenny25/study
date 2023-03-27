{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, 'url' | 'data'>; //내가 선택한 것만 빼고

  function getVideo2(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data',
    };
  }
  function getVideoMetadata2(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}
