function register(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let aadhar=document.getElementById("aadhar").value;
    let address=document.getElementById("address").value;
    let phone=document.getElementById("phone").value;
    let city=document.getElementById("city").value;
    let area=document.getElementById("area").value;
    let pin=document.getElementById("pin").value;
    $.ajax({
        type:"POST",
        url:"http://agaram.academy/api/action.php",
        data:{
            request : 'create_candidate',
            name : name,
            email : email,
            password : password,
            aadhar : aadhar,
            address : address,
            phone:phone,
            city:city,
            area:area,
            pin:pin
            },
        success:function(response){
          console.log(response)
        },
        error:function(err){
            console.log(err)
        }
    })
    // window.location="login.html"
}

function login(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    $.ajax({
        type:"POST",
        url:"http://agaram.academy/api/action.php",
        data:{
            request : 'candidate_login',
            email : email,
            password : password,
            },
        success:function(response){
          console.log(response)
          window.location="show.html"
        },
        error:function(err){
            console.log(err)
        }
    })
}

function get(){
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:{
            request : 'getAllMembers'
          
            },
        success:function(response){
          console.log(response)
        //   let data1=response
          // console.log(response)
          let parseitem=JSON.parse(response)
          let parse2=parseitem.data
          let data=""
          for(i=0;i<parse2.length;i++){
              data=data+`
              <tr>
              <td>${parse2[i].name}</td>
              <td>${parse2[i].email}</td>
              <td>${parse2[i].password}</td>
              <td>${parse2[i].aadhar}</td>
              <td>${parse2[i].address}</td>
              <td>${parse2[i].phone}</td>
              <td>${parse2[i].city}</td>
              <td>${parse2[i].area}</td>
              <td>${parse2[i].pin}</td>
              </tr>
              `
          }
          $("#table_list").html(data)
        },
        error:function(err){
            console.log(err)
        }
    })
  
}