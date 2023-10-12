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

 var dataRef = db.ref("registeredUsers");
 console.log(db)

function register(){
   console.log('register function called');
   let reg_name=document.getElementById("name_2").value
   let reg_email=document.getElementById("email_2").value
   let reg_password=document.getElementById("pass_2").value

   let reg_data = {
           name : reg_name,
           email : reg_email,
           password : reg_password,
   }

   dataRef.once('value')
       .then(function(snapshot) {
           let data = snapshot.val();
           console.log(data);
           if(data){
               data.push(reg_data);
               db.ref("registeredUsers").set(data);
           }
           else{
               db.ref(`registeredUsers/${0}`).set(reg_data);
           }
       })
       alert("register success")
}

function login(){

   let user_detail=document.getElementById("email").value
   let Password=document.getElementById("password").value
       dataRef.once('value')
       .then(function(response) {
           let data = response.val();
           console.log(data);
           if(data){
               for(i=0;i<data.length;i++){

                   if ((data[i].email==user_detail) && (data[i].password==Password))
                   {
                       alert("login successfully")
                       localStorage.setItem("loggedin",true)
                       localStorage.setItem("logname",data[i].name)
                       window.location="home.html";
                       
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
 function data(){
    let regMail=document.getElementById("email_2").value;
    let regPass=document.getElementById("pass_2").value;
    let regName=document.getElementById("name_2").value;
    
   if(localStorage.getItem("details")){
     parselocalData= JSON.parse(localStorage.getItem("details"))
     parselocalData.push({
      email:regMail,
      password:regPass,
      name_1:regName
   })
   }
   else{
    let parselocalData=[]
    console.log(parselocalData)
    parselocalData.push({
      email:regMail,
      password:regPass,
      name_1:regName
   })
   }
   let file=JSON.stringify(parselocalData)
   localStorage.setItem("details",file)  
   window.location="loginreg.html"
   
 }

//  function login(){
//     let login_email=document.getElementById("email").value;
//     let login_pass=document.getElementById("password").value;
//     let data_3= JSON.parse(localStorage.getItem("details"))

  
//     for(i=0;i<data_3.length;i++){
//          if (data_3[i].email==login_email && data_3[i].password==login_pass){
//             localStorage.setItem("loggedin",true)
//             localStorage.setItem("loginperson",data_3[i].name_1)
//             console.log(data_3[i].name_1)
//             alert("sucess")
//             window.location="home.html"
//             // document.getElementById("form").style.display="none"
          
//             // document.getElementById("table").style.display="block";
          
//             tables()
      
//          }console.log(data_3[i].name_1)
//       }
//       }
         
     function tables(){
    //    document.getElementById("first").style.display="none"
       document.getElementById("welcome").innerHTML=`welcome ${data_3[i].name_1}` 
      let data_4=localStorage.getItem("details")
      let data_5=JSON.parse(data_4)
     let htmldata="";
     for(i=0;i<data_5.length;i++){
        htmldata=htmldata+`<tr>
                             <td id="newname"> ${data_5[i].name_1}</td>
                             <td id="newmail"> ${data_5[i].email}</td>
                             <td><button onclick="edit('${data_5[i].name_1}')">edit</button></td>
                             <td> <button onclick="deletes('${data_5[i].email}')">delete</button></td>
                             </tr>`
                             console.log(data_5[i].email)
     }
     console.log("print")
    document.getElementById("list_table_body").innerHTML=htmldata;}

    function deletes(mail){
         let a=JSON.parse(localStorage.getItem("details"))
         alert("deleted")
         let newdata=[]
         for(i=0;i<a.length;i++){
            if(a[i].email!=mail){
   
               newdata.push(a[i])
               
            }
         }
         let newlist=JSON.stringify(newdata)
         localStorage.setItem("details",newlist);
      //    tables()
         // prompt("sobith","ajil")
    }  
    

     
     function logout(){
    //    document.getElementById("form").style.display="block"
    //    document.getElementById("first").style.display="none"
          window.location="loginreg.html"
          
   }

     function secure(){
      if (!localStorage.getItem("loggedin")){
      window.location="loginreg.html"
     }}
     