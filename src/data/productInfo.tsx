const productInfo = [
  {
    id: 1,
    title: 'Pen',
    price: 5,
    description: 'Its a pen.'
  },
  {
    id: 2,
    title: 'Pencel',
    price: 3,
    description: 'Its a pencil.'
  },
  {
    id: 3,
    title: 'Computer',
    price: 50,
    description: 'Its a computer'
  },
  {
    id: 1,
    title: 'Pen',
    price: 5,
    description: 'Its a pen.'
  },
  {
    id: 2,
    title: 'Pencel',
    price: 3,
    description: 'Its a pencil.'
  },
  {
    id: 3,
    title: 'Computer',
    price: 50,
    description: 'Its a computer'
  },
  {
    id: 1,
    title: 'Pen',
    price: 5,
    description: 'Its a pen.'
  },
  {
    id: 2,
    title: 'Pencel',
    price: 3,
    description: 'Its a pencil.'
  },
  {
    id: 3,
    title: 'Computer',
    price: 50,
    description: 'Its a computer'
  },
  {
    id: 1,
    title: 'Pen',
    price: 5,
    description: 'Its a pen.'
  },
  {
    id: 2,
    title: 'Pencel',
    price: 3,
    description: 'Its a pencil.'
  },
  {
    id: 3,
    title: 'Computer',
    price: 50,
    description: 'Its a computer'
  },
  {
    id: 1,
    title: 'Pen',
    price: 5,
    description: 'Its a pen.'
  },
  {
    id: 2,
    title: 'Pencel',
    price: 3,
    description: 'Its a pencil.'
  },
  {
    id: 3,
    title: 'Computer',
    price: 50,
    description: 'Its a computer'
  }
];

export const product = {
  id: 0
};
export enum Rating {
  Bad,
  Better,
  Average,
  Good,
  Best
}

export interface ISeller  {
name: string;
description: string;
rating: number;
updateRating?: (rating: number) => void;
updateTitle?: (data: {title: string, id: number}) => void;
addToCart?: (product: any) => void;
}

export const sellerInfo: ISeller = {
  name: 'Smart ERP',
  description: ' he is a seller',
  rating: 4,
  updateRating: (rating: number) => {
    console.log('datda');
    sellerInfo.rating = rating;
  }
};

 export default productInfo;


 /**
  * product list page -> http://localhost:3000/products
  * product page -> http://localhost:3000/product/[product-id]
  * Eg: -> http://localhost:3000/product/569852 -> Product component
  * 
  * server side rendering
  * Next JS
  * react router
  */