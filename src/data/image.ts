export interface Image {
    src: string;
    title: string;
    description: string;
  }
  
  export const images: Image[] = [
    {
      src: 'https://picsum.photos/200/300',
      title: '여기어때',
      description: 'Description for Image 1',
    },
    {
      src: 'https://picsum.photos/200/301',
      title: '저기어때',
      description: 'Description for Image 2',
    },
    {
      src: 'https://picsum.photos/200/302',
      title: '여긴어때',
      description: 'Description for Image 3',
    },
    {
      src: 'https://picsum.photos/200/303',
      title: '저긴어때',
      description: 'Description for Image 4',
    },
  ];
  