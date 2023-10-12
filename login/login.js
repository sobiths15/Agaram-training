 let userDetails=[{
                     email:"sobiths15@gmail.com",
                     password:"1234",
                     name_1:"Sobith"
                 },
               {
                     email:"ajay@gmail.com",
                     password:"12345",
                     name_1:"Ajay"
                  }]




 // let form_2=JSON.parse("details")
 // localStorage.getItem("data",form_2)
 // console.log(data)

 function login(){
     let login_email=document.getElementById("email").value;
     let login_pass=document.getElementById("password").value;
     let data_3= JSON.parse(localStorage.getItem("details"))

    // alert(login_email)
    // alert(login_pass)
   //   let form=JSON.stringify(a);
   //   localStorage.setItem("details",form)
   //   let data_2=localStorage.getItem("details")
   //   console.log(data_2)
   //   let data_3=JSON.parse(data_2)
   //   console.log(data_3)
     for(i=0;i<data_3.length;i++){
          if (data_3[i].email==login_email && data_3[i].password==login_pass){
             localStorage.setItem("loggedin",true)
             alert("sucess")
             
             document.getElementById("form").style.display="none"
             document.getElementById("first").style.display="block"
             document.getElementById("welcome").innerHTML=`welcome ${data_3[i].name_1}`
             document.getElementById("table").style.display="block";
             tables()
             
          }  
         
         // console.log(data_3[1])
     }
      }

     
   

   //   }
    
// // function logedin(){
// //    if (localStorage.setItem("logedin",true)){
// //       document.getElementById("form)").style.display="block"
// //    }
 function logout(){
    document.getElementById("form").style.display="block"
    document.getElementById("first").style.display="none"
 }
// // function stable(){
// //    if (localStorage.getItem("loggedin")){
// //       console.log("gfgdg")
// //    document.getElementById("form").style.display="none"
// //    document.getElementById("first").style.display="block"
// //    document.getElementById("welcome").innerHTML=`welcome ${data_3[i].name_1}`
// // }}

 function register(){
    document.getElementById("form").style.display="none"
    document.getElementById("register").style.display="block"
    // document.getElementById("form").style.display="none"
 }
 function data(){
    let regMail=document.getElementById("email_2").value;
    let regPass=document.getElementById("pass_2").value;
    let regName=document.getElementById("name_2").value;
    

    console.log(regMail)
    console.log(regPass)
    console.log(regName)

//    // if(localStorage.getItem("details")){
//    //    let parselocalData=JSON.parse(localStorage.getItem("details"))
//    // }
//    // else{
//    //    let parselocalData=[]
//    // }
//    // let localdata=localStorage.getItem("details");
//    // let parselocalData=JSON.parse(localdata)
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
    
 }
 
 function tables(){
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
            console
           
         }
      }
      let newlist=JSON.stringify(newdata)
      localStorage.setItem("details",newlist);
      tables()
      // prompt("sobith","ajil")
 }
 
 function edit(change){
   let b=JSON.parse(localStorage.getItem("details"))
     let newedit=[]
     let proname=prompt("name",change)
   //   let promail=prompt("mail",b[i].email)
    for(i=0;i<b.length;i++){ 
    
   //    // if(b[i].name_1==change){
        if(b[i].name_1!=proname){
        
             document.getElementById("name").innerHTML=proname;
             newedit.push(proname)
   //       }
   //       if(promail!=b[i].email){
   //          document.getElementById("newmail").innerHTML=proname;
   //          newedit.push(promail)
   //       }
    
   //       //  newedit.push(promname)
   //    }
   // }
   //  
 }}
//  let newchange=JSON.stringify(newedit)
//   localStorage.setItem("details",newchange)
}