

function onUserSignup() { // <------------------on user sign up data will be saved at firbase users collection node tree by getting r1 ---------------->
    // get input values
    var fullname = document.getElementById("fullname")
    var email = document.getElementById("email");
    var password = document.getElementById("password")
    var Address = document.getElementById("Address")
    var Age = document.getElementById("Age")
    var MobileNumber = document.getElementById("MobileNumber")
    var message = document.getElementById("message")



    var user = {
        fullname: fullname.value,
        email: email.value,
        password: password.value,
        Address: Address.value,
        Age: Age.value,
        MobileNumber: MobileNumber.value

    }
    if (user.fullname == "") { }
    else if (user.email == "") { }
    else if (user.password == "") { }
    else if (user.Address == "") { }
    else if (user.Age == "") { }
    else if (user.MobileNumber == "") { }


    else {

        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // console.log(user)
                message.innerHTML = "Signup Successfull "
                setTimeout(() => {
                    message.innerHTML = "";

                }, 3000);

                var user = {
                    fullname: fullname.value,
                    email: email.value,
                    password: password.value

                }
                //database "c" create or add or insert an object in db
                firebase.database().ref(`users/${userCredential.user.uid}`).set(user)
                    .then(() => {
                        //   alert("User register hogaya")
                        window.location = "login.html"
                    })


                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                message.innerHTML = errorMessage
                setTimeout(() => {
                    message.innerHTML = "";

                }, 2000);
            });
    }
}

function onResSignup() { // <------------------on Res user sign up data will be saved at firbase users collection node tree by getting r1 ---------------->
    // get input values
    var fullname = document.getElementById("fullname")
    var email = document.getElementById("email");
    var password = document.getElementById("password")
    var Address = document.getElementById("Address")
    var Age = document.getElementById("Age")
    var MobileNumber = document.getElementById("MobileNumber")
    var message = document.getElementById("message")



    var user = {
        fullname: fullname.value,
        email: email.value,
        password: password.value,
        Address: Address.value,
        Age: Age.value,
        MobileNumber: MobileNumber.value

    }
    if (user.fullname == "") { }
    else if (user.email == "") { }
    else if (user.password == "") { }
    else if (user.Address == "") { }
    else if (user.Age == "") { }
    else if (user.MobileNumber == "") { }


    else {

        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // console.log(user)
                message.innerHTML = "Signup Successfull "
                setTimeout(() => {
                    message.innerHTML = "";

                }, 3000);

                var user = {
                    fullname: fullname.value,
                    email: email.value,
                    password: password.value

                }
                //database "c" create or add or insert an object in db
                firebase.database().ref(`Res users/${userCredential.user.uid}`).set(user)
                    .then(() => {
                        //   alert("User register hogaya")
                        window.location = "login.html"
                    })


                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                message.innerHTML = errorMessage
                setTimeout(() => {
                    message.innerHTML = "";

                }, 2000);
            });
    }
}

function onResLogin() {  // get User  values from user 
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let message = document.getElementById("message");
    let user = {
        email: email.value,
        password: password.value,

    }
    if (user.email == "") { } else if (user.password == "") { }
    else {
        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
            .then((userCredential) => {
                // Signed in

                firebase.database().ref(`users/${userCredential.user.uid}`).on('value', (data) => {
                    console.log(data.val())
                })





                var user = userCredential.user;
                message.innerHTML = "Signin Successfull "
                setTimeout(() => {
                    message.innerHTML = "";
                    location.href = "dashboard.html";
                }, 3000);


                // ...
            })

            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                message.innerHTML = errorMessage
                setTimeout(() => {
                    message.innerHTML = "";

                }, 2000);
                console.log(errorCode)
                console.log(errorMessage)
                // ..

            });
    }
}

function onUserLogin() {  // get Res User  values from admin user 
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let message = document.getElementById("message");
    let user = {
        email: email.value,
        password: password.value,

    }
    if (user.email == "") { } else if (user.password == "") { }
    else {
        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
            .then((userCredential) => {
                // Signed in

                firebase.database().ref(`users/${userCredential.user.uid}`).on('value', (data) => {
                    console.log(data.val())
                })





                var user = userCredential.user;
                message.innerHTML = "Signin Successfull "
                setTimeout(() => {
                    message.innerHTML = "";
                    location.href = "index.html";
                }, 3000);


                // ...
            })

            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                message.innerHTML = errorMessage
                setTimeout(() => {
                    message.innerHTML = "";

                }, 2000);
                console.log(errorCode)
                console.log(errorMessage)
                // ..

            });
    }
}







































    // var email = document.getElementById("email");
    // var password = document.getElementById("password");
    // var message = document.getElementById("message");

    // var user = {
    //     email: email.value,
    //     password: password.value,
    // }

    // var users = JSON.parse(localStorage.getItem("users")) || [];
    // // get indx
    // var currentUser = users.find(function (val) {
    //     return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
    // });

    // if (currentUser) {
    //     localStorage.setItem("user", JSON.stringify(currentUser));
    //     // user login
    //     location.href = "index.html";
    // } else {
    //     message.innerHTML = "Invalid credentials";
    // }
    // // clear state
    // setTimeout(() => {
    //     message.innerHTML = "";
    // }, 2000);
// }

function onLogout() {
  
    setTimeout(() => {
        location.href = "login.html";
    }, 1000);
}

// function getCurrentUser() {
//     var detial = document.getElementById("detial");
//     var user = JSON.parse(localStorage.getItem("user"));
//     detial.innerHTML = user.email;

// }

// var list = document.getElementById("list");

// function getDetail() {
//     var title = document.getElementById("title").value;
//     var description = document.getElementById("description").value;
//     if (title != "" && description != "") {
//         var li = document.createElement("li");
//         li.innerHTML = `
//     <div class="card" style="width: 18rem;">
//   <img src="https://image.freepik.com/free-vector/paper-style-luxury-background_52683-64817.jpg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${title}</h5>
//     <p class="card-text">${description}</p>
//   </div>
// </div>
//     `;
//         list.appendChild(li);
//         document.getElementsByClassName("center")[0].children[1].value = ""
//         document.getElementsByClassName("target")[0].children[1].value = "";

//     } else {
//         alert("Please Enter Right Information! ")
//     }




// }

















































































