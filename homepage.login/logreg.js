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

 function login(){
    let login_email=document.getElementById("email").value;
    let login_pass=document.getElementById("password").value;
    let data_3= JSON.parse(localStorage.getItem("details"))

  
    for(i=0;i<data_3.length;i++){
         if (data_3[i].email==login_email && data_3[i].password==login_pass){
            localStorage.setItem("loggedin",true)
            localStorage.setItem("loginperson",data_3[i].name_1)
            console.log(data_3[i].name_1)
            alert("sucess")
            window.location="home.html"
            // document.getElementById("form").style.display="none"
          
            // document.getElementById("table").style.display="block";
          
            tables()
      
         }console.log(data_3[i].name_1)
      }
      }
         
     function tables(){
       document.getElementById("first").style.display="none"
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
       document.getElementById("form").style.display="block"
       document.getElementById("first").style.display="none"
      
   }

     function secure(){
      if (!localStorage.getItem("loggedin")){
      window.location="loginreg.html"
     }}
     