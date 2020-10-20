enum Gender {
  male,
  female
}

interface IProduct {
  name: string;
  rating: number;
  description?: string;
  price?: number;
};

interface ISellerInfo {
  name: string;
  address: string;
}

interface IStreet {
  firstLine: string;
  secondLine: string;
  thirdLine?: string;
}

interface IAddress {
  street: IStreet;
  pincode?: number;
}

interface IOtherInfo {
  name: string;
  isQualified: boolean;
  graduatedOn: Date;
  address: IAddress;
  street?: IStreet;
}

interface IUserInfo {
  username: string;
  email: string;
  firstName: string;
  token: string;
  isLoggedIn: boolean;
  lastLoginTime: string
  gender: Gender;
  otherInfo: IOtherInfo;
}

interface IApplicationState {
  categories: Array<string>;
  products: Array<IProduct>;
  userInfo: IUserInfo;
};



const applicationState: IApplicationState = {
  categories: [
    'Electronics', 'Mobiles', ''
  ],
  products: [
    {
      name: 'name',
      rating: 5
    }
  ],
  userInfo: {
    username: 'ranjith',
    email: 'ranjith@appknit.io',
    firstName: 'Ranjith',
    token: 'sakdjhaskdm',
    isLoggedIn: true,
    lastLoginTime: 'Wed Oct 14 2020 06:45:45 GMT+0530 (India Standard Time)',
    gender: Gender.male,
    otherInfo: {
      name: 'some name',
      isQualified: true,
      graduatedOn: new Date(),
      address : {
        street: {
          firstLine: '35',
          secondLine: 'Some nagar',
        }
      }
    }
  },
};

const productState: Pick<IApplicationState, 'categories' | 'products'> = {
  categories: ['sdsdssd'],
  products: [{name: 'asas', rating: 5, description: 'sasaa'}],
};


const userDetails: Pick<IUserInfo, 'firstName' | 'email'>  = {
  firstName: 'sdsdsds',
  email: 'sdsdsdds'
};

// extending
interface IDetailedProductInfo extends IProduct {
  price: number;
  sellerInfo: ISellerInfo;
};

interface IDetailedProduct {
  price: number;
  sellerInfo: string;

}

const productInfo: IProduct & IDetailedProduct = {
  name: 'asasa',
  rating: 5,
  description: 'sdsdsd',
  price: 5,
  sellerInfo: ''
};

const getuserName = (): never => {
  if(false) {
    return;
  }
};