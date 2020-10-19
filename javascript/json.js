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

console.log('simple Json', simpleJson.userInfo);

const firstNameElement = document.getElementById('first-name');
firstNameElement.innerText = simpleJson.userInfo.firstName;

const emailElement = document.getElementById('email');
emailElement.innerText = simpleJson.userInfo.email;


const stringifiedJson = JSON.stringify(simpleJson.userInfo);
console.log('string json', stringifiedJson);

const parsedJson = JSON.parse('{sdwsd}');
console.log(parsedJson);