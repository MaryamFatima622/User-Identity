// // ARRAY METHODS (PUSH, POP, shift, unshift)
// const array = [1, 2, 5, 10, 15];
// array.push(3);
// array.pop();
// array.shift()
// array.unshift("apple");

// const newArray = array.map(function (item, i , arr){ // { Array Modification
//     return item * 2;
// })

// console.log(newArr);
// const newArr = array.forEach(function (item, i , arr) { // Loop, doesn't provide new array
//     console.log(item); // display data
// })
// console.log(newArr);

// const filteredArr = array.filter(function (item) {
//   return item === 10;
// });
// console.log(filteredArr);

const users = [
    {
      name: prompt("Enter user name"),
      occupation: prompt("Enter your occupation"),
      profileImage: prompt("Enter profile url"),
    },
    // {
    //   name: "Maryam",
    //   occupation: "Graphic Designer",
    //   streak: true,
    //   profileImage:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYhcUzij1sbBprfH1JrjBvAzO2O333GXHldw&s",
    // },
  
    {
      name: "Zainab",
      occupation: "Programmer",
      streak: false,
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQAzTZ4tzzuF_w-uqUB5ozYA-JMaDFfUX_Q&s",
    },
  
    {
      name: "Alisha",
      occupation: "Software Engineer",
      streak: true,
      profileImage:
        "data:image/jpeg;base64,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",
    },
  ];
  
  function getUsers() {
    const main = document.getElementById("main");
  
  setTimeout(() => {
    users.forEach(function (item) {
      const div = document.createElement("div");
      div.classList.add("user");
      main.append(div);
  
      const img = document.createElement("img");
      img.classList.add("img");
      img.src = item.profileImage;
      div.append(img);
  
      const div2 = document.createElement("div");
      const p = `<p class="p-1">${item.name}</p>
          <p class="p-2">${item.occupation}</p>`
      div2.innerHTML = p
      div.append(div2)
    });
  
    document.getElementById("loader").innerHTML=""
  }, 2000);
  }
  
  getUsers();