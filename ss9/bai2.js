const obj = {
  fullname: "Nguyễn Việt Hoàng",
  age: 21,
  email: "viethoang2952002@gmail.com"
}

const show = (object) => {
  let arr = [];
  for (const key in object) {
    arr.push(key + ": " + object[key]);
  }
  return arr;
}


console.log(show(obj));