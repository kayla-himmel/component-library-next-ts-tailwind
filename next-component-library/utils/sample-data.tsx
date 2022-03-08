import { Component } from '../interfaces';
import Image from 'next/image';

/* Used to create the component list */
export const sampleComponentData: Component[] = [
  { name: 'Card' },
  { name: 'Button' },
  { name: 'Carousel' },
  { name: 'Modal' },
  { name: 'Accordion' },
];

interface MockDataPaginationType {
  image: string;
  caption: string;
}

// returns array with the html for each object--very specific to the pageMockData
export const transformDataToHtml = () => {
  const newItemArray = [];

  pageMockData.map((item, index) => {
    const newItem = (
      <div className="card-wrapper flex flex-col items-center" key={index}>
        <Image src={item.image} alt={item.caption} height={150} width={150} />
        <p>{item.caption}</p>
      </div>
    );
    newItemArray.push(newItem);
  });
  return newItemArray as [];
};

export const pageMockData: MockDataPaginationType[] = [
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 1',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 2',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 3',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 4',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 5',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 6',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 7',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 8',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 9',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 10',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 11',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 12',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 13',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 14',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 15',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 16',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 17',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 18',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 19',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 20',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 21',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 22',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 23',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 24',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 25',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 26',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 27',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 28',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 29',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 30',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 31',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 32',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 33',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 34',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 35',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 36',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 37',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 38',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 39',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 40',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 41',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 42',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 43',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 44',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 45',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 46',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 47',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 48',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 49',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 50',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 51',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 52',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 53',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 54',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 55',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 56',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 57',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 58',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 59',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 60',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 61',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 62',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 63',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 64',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 25',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 66',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 67',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 68',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 69',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 70',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 71',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 72',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 73',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 74',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 75',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 76',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 77',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 78',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 79',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 80',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 81',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 82',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 83',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 84',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 85',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 86',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 87',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 88',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 89',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 90',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 91',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 92',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 93',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 94',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 95',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 96',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 97',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 98',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 99',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 100',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 101',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 102',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 103',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 104',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 105',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 106',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 107',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 108',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 109',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 110',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 111',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 112',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 113',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 114',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 115',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 116',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 117',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 118',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 119',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 120',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 121',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 122',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 123',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 124',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 125',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 126',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 127',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 128',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 129',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 130',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 131',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 132',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 133',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 134',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 135',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 136',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 137',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 138',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 139',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 240',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 21',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 22',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 23',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 24',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 25',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 26',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 27',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 28',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 29',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 30',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 31',
  },
];
