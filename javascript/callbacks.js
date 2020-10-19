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



const setToLocalStorage = () => {
  const userInfo = { token, isLoggedIn, username};
  localStorage.setItem('userInfo', JSON.stringify(userInfo));

  console.log('successfully added the data to Local Storage', userInfo);
}

const postExecution = () => console.log('hey i am executed');
const callBack = () => console.log(' i am a callback');

// after page load
const postLogin = (data, updateLocateStorage, afterLogin) => {
  const firstNameElement = document.getElementById('first-name');
  firstNameElement.innerText = data.userInfo.firstName;

  const emailElement = document.getElementById('email');
  emailElement.innerText = data.userInfo.email;  

  if (updateLocateStorage) {
    updateLocateStorage();
  }

  if (afterLogin) {
    afterLogin();
  }
  
};

const wrappingAllCallbacks = () => {
  postExecution();
  // setToLocalStorage();
  callBack();
}


const captureValue = (event) => {
  const { value } = event.target;
  if (value) {
    localStorage.setItem('input', value)
  }
};


// executeSomeMethod();

const execuetFallback = () => {
  console.log('executing the fall back method');
}

const executeSomeMethod = () => {
  console.log('my try block will not fail');
}


 // try catch
// try {
//   captureValue();
// } catch(err) {
//   console.log('error message', err);
//  execuetFallback();
// } finally {
//   console.log(' i will always execute, i am inside finally');
// }


// promises

 // Promise State - pending, resolved -> fullfilled , reject -> rejected
 // Promise Value - undefined, argument value, argument value

const fetchUserDetails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(simpleJson.userInfo);
    }, 2000);
    // resolve('username');
    // resolve('somne other info');
    // reject('Invalid user');
  });
};

const fetchProductInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(simpleJson.products);
    }, 2000);
  });
};


const addUserInfoToLocalStorage = (userDetails) => {
  localStorage.setItem('userInfo', JSON.stringify(userDetails));
  console.log('successfully added the data to Local Storage', userDetails);
}

const getInfo = async () => {
  const userDetails = await fetchUserDetails().then((data) => data).catch((err) => err);
  const productInfo = await fetchProductInfo().then((data) => data).catch((err) => err);
  console.log('user and Product details', userDetails, productInfo);
}

getInfo();
console.log(' am free to execute');
execuetFallback();
executeSomeMethod();

// data();
// console.log(fetchUserName());


// Bank transaction
// balance - 10K
// trigger transaction 1 -> 20 sec -> 8k
// trigger transaction 2 -> 100 ms -> 8k

// input
// onchange  of input value -> trigger api call to get the product info