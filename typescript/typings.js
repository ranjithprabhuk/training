var user = 'training';
var userId = 0;
var isLoggedIn = false;
var lastLoggedIn = new Date();
var products = ['pen', 'pencil', 'computer', 4545, 'adada', null];
var singleUser = {
    id: 4,
    username: 'training',
    isLoggedIn: false,
    getLoggedInInfo: function (id) {
        return true;
    }
};
var userReference = [
    {
        username: 'a',
        id: 0
    },
    {
        username: 'b',
        id: 1,
        isTokengenerated: true
    },
    {
        username: 'c',
        id: 2,
        isLoggedIn: true
    },
    {
        username: 'd',
        id: 3
    },
    {
        username: 'e',
        id: 4
    },
    {
        username: 'f',
        id: 5
    },
];
var getUsername = function (id) {
    var user = userReference.find(function (user) { return user.id === id; });
    return user ? user.username : 'user not found';
};
console.log(getUsername(2));
console.log(getUsername(8));
console.log(getUsername('sdsd'));
console.log(getUsername(6));
console.log(singleUser.getLoggedInInfo(12, 'qwe'));
// class UserDetails {
//   public username: string;
//   public id: number;
//   constructor() {
//     this.username = '';
//     this.id = null;
//   }
//   map(data) {
//     this.username = data.username;
//     this.id = data.id;
//   }
// }
// const userDetails: UserDetails = new UserDetails();
// userDetails.map(singleUser);
// console.log('user details >>', userDetails);
