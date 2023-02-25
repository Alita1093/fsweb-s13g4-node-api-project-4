const { v1: uuidv1 } = require("uuid");

function createId() {
  return uuidv1();
}

const initialUsers = () => {
  let initialUser = [
    { id: createId(), kullaniciadi: "furkan", sifre: "furkan321321" },
    { id: createId(), kullaniciadi: "furkan1", sifre: "furkan321321" },
    { id: createId(), kullaniciadi: "furkan2", sifre: "furkan321321" },
    { id: createId(), kullaniciadi: "furkan3", sifre: "furkan321321" },
    { id: createId(), kullaniciadi: "furkan4", sifre: "furkan321321" },
    { id: createId(), kullaniciadi: "furkan5", sifre: "furkan321321" },
  ];
  return initialUser;
};

const users = initialUsers();

const getAllUsers = () => {
  return users;
};
const createUser = (user) => {
  user.id = createId();
  users.push(user);
  return user;
};

const findUser = (user) => {
  let isExistUser = false;
  users.forEach((userItem) => {
    if (
      userItem.kullaniciadi == user.kullaniciadi &&
      userItem.sifre == user.sifre
    ) {
      isExistUser = true;
      return isExistUser;
    }
  });
  return isExistUser;
};
const checkUserName = (kullaniciadi) => {
  let isExistUserName = false;
  for (let i = 0; i < users.length; i++) {
    const userItem = users[i];
    if (userItem.kullaniciadi == kullaniciadi) {
      isExistUserName = true;
      break;
    }
  }
  return isExistUserName;
};
module.exports = {
  getAllUsers,
  createUser,
  findUser,
  checkUserName,
};
