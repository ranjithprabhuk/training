let user: string = 'training';
let userId: number = 0;
let isLoggedIn: boolean = false;

let lastLoggedIn: Date = new Date();

let products: Array<string | number | null> = ['pen', 'pencil', 'computer', 4545, 'adada', null];


interface IUserReferenceProps {
  username: string | number | boolean;
  id: number | string;
  isLoggedIn?: boolean;
  isTokengenerated?: boolean;
  getLoggedInInfo?: (userid: number | string, username? : string) => boolean;
  addUser?(): string;

}

const singleUser: IUserReferenceProps = {
  id: 4,
  username: 'training',
  isLoggedIn: false,
  getLoggedInInfo: (id: IUserReferenceProps['id']): boolean => {
    return true;
  }
};


const userReference: IUserReferenceProps[] = [
  {
    username: 'a',
    id: 0
  },
  {
    username: 'b',
    id: 1,
    isTokengenerated: true,
  },
  {
    username: 'c',
    id: 2,
    isLoggedIn: true,
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


const getUsername = (id: IUserReferenceProps['id']): IUserReferenceProps['username'] => {
  const user = userReference.find(user => user.id === id);

  return user ? user.username : 'user not found';
};


console.log(getUsername(2))
console.log(getUsername(8))
console.log(getUsername('sdsd'))
console.log(getUsername(6))

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