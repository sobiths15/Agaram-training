var firebaseConfig = {
    apiKey: "AIzaSyAwWni2HcqCO_wzXYvUEXBZPktYF_68rHQ",
    authDomain: "sample-contactform.firebaseapp.com",
    databaseURL: "https://sample-contactform-default-rtdb.firebaseio.com",
    projectId: "sample-contactform",
    storageBucket: "sample-contactform.appspot.com",
    messagingSenderId: "1055716660300",
    appId: "1:1055716660300:web:6378412dedd06a559650e9"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.database();
var auth = firebase.auth();

var dataRef = db.ref("registeredUsers");
console.log(db)

function register() {
    console.log('register function called');
    let reg_name = document.getElementById("name_2").value
    let reg_email = document.getElementById("email_2").value
    let reg_password = document.getElementById("pass_2").value

    auth.createUserWithEmailAndPassword(reg_email, reg_password).then(function () {
        let registeredUsers = auth.currentuser;


        let reg_data = {
            name: reg_name,
            email: reg_email,
            password: reg_password,
        }

        dataRef.once('value')
            .then(function (response) {
                let data = response.val();
                console.log(data);
                if (data) {
                    data.push(reg_data);
                    db.ref("registeredUsers").set(data);
                }
                else {
                    db.ref(`registeredUsers/${0}`).set(reg_data);
                }
            })
        alert("register success")
        window.location = "firelogin.html"
    }
    )
}

function login() {

    let user_detail = document.getElementById("email").value
    let Password = document.getElementById("password").value

    // auth.signInUserWithEmailAndPassword(user_detail,Password).then(function()
    // {

    // })

    dataRef.once('value')
        .then(function (response) {
            let data = response.val();
            console.log(data);
            if (data) {
                for (i = 0; i < data.length; i++) {

                    if ((data[i].email == user_detail) && (data[i].password == Password)) {
                        alert("login successfully")
                        localStorage.setItem("loggedin", true)
                        localStorage.setItem("logname", data[i].name)
                        window.location = "firehome.html";

                        break;
                    }

                    //    else{
                    //        alert("Please Register First");  
                    //        break;              
                    //    }
                }
            }
        })
}

//  function tables(){
//     let data_4=localStorage.getItem("details")
//     let data_5=JSON.parse(data_4)
//    let htmldata="";
//    for(i=0;i<data_5.length;i++){
//       htmldata=htmldata+`<tr>
//                            <td id="newname"> ${data_5[i].name_1}</td>
//                            <td id="newmail"> ${data_5[i].email}</td>
//                            <td><button onclick="edit('${data_5[i].name_1}')">edit</button></td>
//                            <td> <button onclick="deletes('${data_5[i].email}')">delete</button></td>
//                            </tr>`
//                            console.log(data_5[i].email)
//    }
//    console.log("print")
//   document.getElementById("list_table_body").innerHTML=htmldata;}
let alldata = ""
function getitem() {
    // console.log("hi")
    dataRef.once('value')
        .then(function (response) {
            console.log(response.val());
            alldata = response.val();
            display()
        }
        )
}
getitem()

function display() {

    // console.log(alldata[1].name)
    dataRef.once('value').then(shot => {
        let store = shot.val();

        let htmldata = "";
        for (let i = 0; i < store.length; i++) {
            // console.log(alldata[i].email)
            // list_name=(alldata[i].name)
            // list_email=alldata[i].email
            htmldata = htmldata + `<tr>
                            <td id="newname+'${i}'"> ${store[i].name}</td>
                            <td id="newemail+'${i}'"> ${store[i].email}</td>
                            <td><button onclick="updates('${store[i].email}')">edit</button></td>
                            <td> <button onclick="deletes('${store[i].email}')">delete</button></td>
                            </tr>`
        }
        document.getElementById("list_table_body").innerHTML = htmldata

    })
}




function logout() {
    window.location = "firelogin.html"
}

function deletes(mail) {
    dataRef.once(`value`).then(shot => {
        let data = shot.val();
        let a = data;
        let newdata = []
        for (i = 0; i < a.length; i++) {
            if (a[i].email != mail) {
                newdata.push(a[i])
                alert("super")
            }
        }
        alert(mail)
        db.ref("registeredUsers").set(newdata)
        // window.onload="firehome.html"
        display()
    })
}
function updates(mail) {
    document.getElementById("updates").style.display = "block"
    document.getElementById("first").style.display = "none"
    // u_name=document.getElementById("name_3").value
    // u_email=document.getElementById("email_3").value
    // dataRef.once(`value`).then(shot =>{
    //     let data=shot.val();
    //     let a=data;
    //     let newdata=[]
    edit_name = document.getElementById("name_3").value
    edit_email = document.getElementById("email_3").value
    dataRef.once(`value`).then(shot => {
        let data = shot.val();
        let a = data;
        let newdata = []
        for (i = 0; i < a.length; i++) {
            if (a[i].email === mail) {
                edit_name = document.getElementById("name_3").value
                edit_email = document.getElementById("email_3").value
                if(edit_name!=null){
                    document.getElementById(`newname+'${i}'`).innerHTML=edit_name
                }
                if(edit_email!=null){
                    document.getElementById(`newemail+'${i}'`).innerHTML=edit_email
                }
                a[i]=({
                    email:edit_email,
                    password:a[i].password,
                    name:edit_name
                })
            }

        }
        db.ref("registeredUsers").set(a)
    })
}

//   function edit(){
//     edit_name=document.getElementById("name_3").value
//     edit_email=document.getElementById("email_3").value
//     dataRef.once(`value`).then(shot =>{
//         let data=shot.val();
//             let a=data;
//             let newdata=[]
//         for (i=0;i<data.length;i++){
//             if(data[i].email==edit_email){

//             }
//         }    
//   }

