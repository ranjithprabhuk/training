const simpleJson = {
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
    otherInfo: {
      name: 'some name',
      isQualified: true,
      graduatedOn: new Date(),
      address : {
        street: {
          firstLine: '35',
          secondLine: 'Some nagar',
          others: {
            asdsd: {
              sdas: {

              }
            }
          }
        }
      }
    }
  },
};

const { token, isLoggedIn, username } = simpleJson.userInfo;
console.log(`token: ${token}, isLoggedIN: ${isLoggedIn}, username: ${username}`);


// console.log('userInfo', userInfo);


// ``
// setTimeout(() => {
//   localStorage.clear();
// }, 2000);

const getFromLocalStorage = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  // const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  const inputInfo = localStorage.getItem('input');
  console.log('user info from local storage', userInfo, inputInfo);
};

const setToLocalStorage = () => {
  const userInfo = { token, isLoggedIn, username};
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  sessionStorage.setItem('userInfo', JSON.stringify(userInfo));

  console.log('successfully added the data to Local Storage', userInfo);
}

const clearLocalStorage = () => {
  localStorage.clear();
}
