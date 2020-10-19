const applicationState: unknown = {
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
    // gender: Gender.male,
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

//console.log(applicationState.userInfo.username);