// userDetails={};

// function test(a,p_key){
//     if(p_key){
//         userDetails[p_key.name]
//     }
//     userDetails[a.name]=a.value;
//     console.log(userDetails)
// }
let resumeDetails={};
let each_tmp={};
let work_tmp={};



function test(a,detail){
    if(detail){
        if(resumeDetails[detail]){
            resumeDetails[detail]={...resumeDetails[detail]}
        }
        else{
            resumeDetails[detail]={}
        }
        resumeDetails[detail][a.name]=a.value
    }
    else{
        resumeDetails[a.name]=a.value
    }
    
display()
}
// function add(p_key,ele_id,show_table){
//     if(!resumeDetails[p_key]){
//         resumeDetails[p_key]=[]
//     }
//     resumeDetails[p_key].push(document.getElementById(ele_id).value);
//     // let skill_list="";
//     // for(i=0;resumeDetails[p_key].length;i++){
//         // skill_list=skill_list + `<p id="hiddenlist+'${i}'">${resumeDetails[p_key][i]}<button onclick=remove('${resumeDetails[p_key][i]}')>x</button></p>`
//     // }
//     // document.getElementById("hidden").innerHTML=skill_list; 

//     let skillist=''
//     let languagelist=''
//    for( i=0;i<resumeDetails[p_key].length;i++){
//     // let skills =resumeDetails[p_key][i]
   
 
//    skillist=skillist+`<h5>${resumeDetails[p_key][i]}<button type="button" onclick="remove('${resumeDetails[p_key][i]}')">delete</button></h5>`}
//     languagelist= languagelist+`<h5>${resumeDetails[p_key][i]}<button type="button" onclick="remove('${resumeDetails[p_key][i]}')">delete</button></h5>`
//    document.getElementById('showskills').innerHTML=skillist;
//    document.getElementById('showlanguage').innerHTML=languagelist;

//     document.getElementById(ele_id).value=""
//     dispaly()
// }

// function dispaly(){
//     document.getElementById("display").innerHTML=JSON.stringify(resumeDetails,undefined,2)
    
// }
// function remove(skills){
//     console.log(JSON.parse(resumeDetails[skills]));
//     // for(i=0;i<resumeDetails.length;i++)
//     alert(skills)
// }
         
    
    
//     document.getElementById('showskills').innerHTML=newskills;
// }


// function remove(skills){
// delete skills[1]
// // let data = [...resumeDetails[p_key]]
// // let new_data=[]
// // for (i = 0; i < data.length; i++) {
// //     if (data[i] != skills){
// //         new_data.push(data[i])

// //     }
// // }
// // user_details[p_key]=new_data

// dispaly()
// }

function mulData1(p_key){
    if(!resumeDetails[p_key]){
        resumeDetails[p_key]=[]
    }
    resumeDetails[p_key].push(each_tmp)
    let keys=Object.keys(each_tmp)
    console.log(keys)
    each_tmp={}
   
  const inputs = document.querySelectorAll('#a, #b,#c, #d');

  inputs.forEach(input => {
    input.value = '';
  });

    display()
    document.getElementById("showeducation").innerHTML=`  
    
      <tr>
        <th scope="col">Institute</th>
        <th scope="col">Level</th>
        <th scope="col">Year</th>
        <th scope="col">Precentage</th> 
        <th scope="col">Delete</th> 
      </tr>
    
  `
  console.log(resumeDetails[p_key][0].level)
    console.log(each_tmp)
    let edudata=""
    for (i=0;i<resumeDetails[p_key].length;i++){
        console.log("ss")
         edudata=edudata+`<tr id="edu_tr${i}">
         <td>${resumeDetails[p_key][i].instituename}</td>
            <td>${resumeDetails[p_key][i].level}</td>
            <td>${resumeDetails[p_key][i].year}</td>
            <td>${resumeDetails[p_key][i].precentage}</td>
            <td><button type="button" onclick="remov1('${[i]}','${p_key}')" class="btn btn-primary">
            remove</button></td></tr>
            `
        }
        document.getElementById("table_list").innerHTML=edudata;
    
}

function mulData2(p_key){
    if(!resumeDetails[p_key]){
        resumeDetails[p_key]=[]
    }
    resumeDetails[p_key].push(work_tmp)
    let keys=Object.keys(work_tmp)
    console.log(keys)
    work_tmp={}
   
  const inputs = document.querySelectorAll('#b,#c, #d');

  inputs.forEach(input => {
    input.value = '';
  });

    display()
    document.getElementById("showwork").innerHTML=`    
      <tr>
        <th scope="col">Company</th>
        <th scope="col">Position</th>
        <th scope="col">Duration</th>
        <th scope="col">Delete</th> 
      </tr> 
  `
  console.log(resumeDetails[p_key][0].level)
    console.log(work_tmp)
    let edudata=""
    for (i=0;i<resumeDetails[p_key].length;i++){
        console.log("ss")
         edudata=edudata+`<tr id="work_tr${i}">
         <td>${resumeDetails[p_key][i].company}</td>
            <td>${resumeDetails[p_key][i].position}</td>
            <td>${resumeDetails[p_key][i].duration}</td>
            <td><button type="button" onclick="remov2('${[i]}','${p_key}')" class="btn btn-primary">
            remove</button></td></tr>
            `
        }
        document.getElementById("work_list").innerHTML=edudata;
    
}

function remov1(id,edu){
    alert("deleted")
     resumeDetails[edu].splice(id,1)   //remove inside
    result=document.getElementById(`edu_tr${id}`)         //remove display
    result.remove()
    display()
}

function remov2(id,edu){
    alert("deleted")
     resumeDetails[edu].splice(id,1)   //remove inside
    result=document.getElementById(`work_tr${id}`)         //remove display
    result.remove()
    display()
}
   



function add(key,id,tbl_id){
    // if(edu){
    //     if(!resumeDetails[edu]){
    //         resumeDetails[edu]=[]
    //     }
    //     resumeDetails[edu].push(each_tmp)
    //     // let keys=Object.keys(each_tmp)
    //     // for(i=0;i<keys.length;i++){
    //     //     document.getElementById(keys[i]).value=""
    //     // }
    //      each_tmp={}
         
    //     display()
    // }{
        if(!resumeDetails[key]){
            resumeDetails[key]=[]
        }
        resumeDetails[key].push(document.getElementById(id).value)
        document.getElementById(id).value=""
        display()
        let htmldata=""
        for(i=0;i<resumeDetails[key].length;i++){
            htmldata=htmldata+`<div id="${key[i]}">
            ${resumeDetails[key][i]}  <button type="button" onclick="del('${[i]}','${key}')" class="btn btn-primary">
            remove</button></div>`
        }
        document.getElementById(tbl_id).innerHTML=htmldata}
// }
function display(){
    document.getElementById("display").innerHTML=JSON.stringify(resumeDetails,undefined,2)
}
function del(i,key){
    resumeDetails[key].splice(i,1)   //remove inside
    result=document.getElementById(`${key[i]}`)         //remove display
    result.remove()
    display()
    
}


function mulData(ele){
    each_tmp[ele.name]=ele.value;
    
}

function workData(ele){
    work_tmp[ele.name]=ele.value;
    
}

function finish(){
    $.ajax({
        type:"POST",
        url:"http://agaram.academy/api/action.php",
        data:{
            request : "create_resume",
            user : "sobith",
            resume:resumeDetails
        },
        success:function(response){
            // console.log(JSON.parse(res))
            // let reset=JSON.parse(response)
            // console.log(reset)
            //  window.location="show.html"
            // let tabledata=""
            // for(i=0;i<reset.length;i++){
            //     tabledata=tabledata+`<tr>
            //     <td >${reset[i].id}</td>
            //     <td >${reset[i].user}</td>
            //     <td><input  type="button"  value="delete"></td>
               
            //     </tr>`
            // }
            // // window.location="show.html"
            // document.getElementById("table_list").innerHTML=tabledata;

        },
        error:function(err){
            console.log(err)
        }
    })
    alert("hii")

    window.location="show.html"
}

// function show(){
//     window.location="show.html"
// }

function get(){
    // window.location="show.html"
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:{
            request : "get_user_resume",
            user : "sobith",
            
        },
        success:function(response){
            // console.log(JSON.parse(response))
            // let reset=JSON.parse(response)
            console.log(JSON.parse(response))
            //  window.location="show.html"
            let reset=JSON.parse(response)
            let tabledata=""
            for(i=0;i<reset.data.length;i++){
                tabledata=tabledata+`<tr>
                <td >${reset.data[i].id}</td>
                <td >${reset.data[i].user}</td>
                <td><input  type="button"  value="delete" onclick="delet('${reset.data[i].id}')"></td>
                <td><a href="template1.html?id=${reset.data[i].id}">Template 1</a></td>
                <td><a href="template2.html?id=${reset.data[i].id}">Template 2</a></td>
                <td><a href="template3.html?id=${reset.data[i].id}">Template 3</a></td>
                </tr>`
            }
           
            document.getElementById("table_list").innerHTML=tabledata;
            // window.location="choose.html"
            
        },
        error:function(err){
            console.log(err)
        }
    })
    // alert("hii")
}

function delet(a){
    alert(a)
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:{
            request : "delete_user_resume",
            user : "sobith",
            id:a
        },
        success:function(response){
            // console.log(response)
            get()
   
        },
        error:function(err){
            console.log(err)
        }
    })
    // alert("hii")
}

function getbyid(b){
    console.log(b)
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:{
            request : "get_resume_by_id",
            user : "sobith",
            id:b
        },
        success:function(response){
            console.log(JSON.parse(response))
            let resumevalue=JSON.parse(response)
            // for(i=0;i<resumevalues.length;i++){
            //     console.log("hi")

            // }
            let resumevalues=JSON.parse(resumevalue.data.data)
            console.log(resumevalues)
            console.log(resumevalues.name)

            document.getElementById("name").innerHTML=resumevalues.name;
            document.getElementById("email").innerHTML=resumevalues.email;
            document.getElementById("address").innerHTML=resumevalues.address;
            document.getElementById("phone").innerHTML=resumevalues.phonenum;
            document.getElementById("objective").innerHTML=resumevalues.objective;
            document.getElementById("declaration").innerHTML=resumevalues.declaration;
            let skills=""
            for(i=0;i<resumevalues.Skills.length;i++){
                skills=skills+
                `<li>${resumevalues.Skills[i]}
                </li>`
            }
             document.getElementById("skills").innerHTML=skills;

            let lang=""
            for(i=0;i<resumevalues.languages.length;i++){
                lang=lang+
                `<li>${resumevalues.languages[i]}
                </li>`
            }
             document.getElementById("languages").innerHTML=lang;

             let hobbies=""
             for(i=0;i<resumevalues.hobbies.length;i++){
                 hobbies=hobbies+
                 `<li>${resumevalues.hobbies[i]}
                 </li>`
             }
              document.getElementById("hobbies").innerHTML=hobbies;

                let strengths=""
                for(i=0;i<resumevalues.strengths.length;i++){
                    strengths=strengths+
                    `<li>${resumevalues.strengths[i]}
                    </li>`
                }
                 document.getElementById("strengths").innerHTML=strengths;

                 let achivements=""
                 for(i=0;i<resumevalues.achivements.length;i++){
                    achivements=achivements+
                     `<li>${resumevalues.achivements[i]}
                     </li>`
                 }
                  document.getElementById("achivements").innerHTML=achivements;
   
                  let activities=""
                  for(i=0;i<resumevalues.activities.length;i++){
                      activities=activities+
                      `<li>${resumevalues.activities[i]}
                      </li>`
                  }
                   document.getElementById("activities").innerHTML=activities;
   

            document.getElementById("father").innerHTML=resumevalues.personalDetails.father_name;
            document.getElementById("martial").innerHTML=resumevalues.personalDetails.maritial_status;
            document.getElementById("dateOfBirth").innerHTML=resumevalues.personalDetails.dateOfBirth;
            document.getElementById("gender").innerHTML=resumevalues.personalDetails.gender;

            let edu_1=(resumevalues.Education)
           let edu_2=(edu_1[0].level)
            console.log(edu_2)
        
            let educate=""
            for(i=0;i<edu_1.length;i++){
                educate=educate+`<tr>
                <td>${edu_1[i].year}</td>
                <td>${edu_1[i].instituename}</td>
                <td>${edu_1[i].level}</td>
                <td>${edu_1[i].precentage}</td>
                </tr>`
            }
            document.getElementById("edu_list").innerHTML=educate;

            let work_1=(resumevalues.workExperience)
            console.log(work_1)
             let work=""
             for(i=0;i<work_1.length;i++){
                 work=work+`<tr>
                 <td>${work_1[i].company}</td>
                 <td>${work_1[i].position}</td>
                 <td>${work_1[i].duration}</td> 
                
                 </tr>`
             }
             document.getElementById("workex_list").innerHTML=work; 
        },
        error:function(err){
            console.log(err)
        }
    })
    // alert("hii")
}

// var getUrlParameter = function getUrlParameter(sParam) {
//     var sPageURL = window.location.search.substring(1),
//         sURLVariables = sPageURL.split('&'),
//         sParameterName,
//         i;

//     for (i = 0; i < sURLVariables.length; i++) {
//         sParameterName = sURLVariables[i].split('=');

//         if (sParameterName[0] === sParam) {
//             return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
//         }
//     }
//     return false;
// };
function download() {
    alert('ok')
const page = document.getElementById('test');
var opt = {
margin:
1,
filename: 'Demopdf.pdf',
image:
{ type: 'jpeg', quality: 0.98 },
html2canvas:
{ scale: 2 },
jsPDF:
{ unit: 'in', format: 'letter', orientation: 'portrait' }
};
// Choose the element that our invoice is rendered in.
html2pdf().set(opt). from (page).save();
}