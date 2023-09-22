// let a="sobith";
// console.log(typeof(a))
my_resume={
    name:"sobith",
e_mail:"sobiths15@gmail.com",
mobile_no:9629305926,
soft_skills:["python","communication"],
hard_skills:["content writting"],
educational_qualifications:[
{course:"sslc",institute:"G.H.S.kaliyakkavilai",percentage:94,passed_year:2017,place:"kaliyakkavilai"},
{course:"+12",institute:"st.josphs higer secondary school",percentage:73,passed_year:2019,place:"thiruthuvapuram"},
{course:"B.E",institute:"Loyola institute",percentage:80,passed_year:2023,place:"thovali"}],
project:[
{tittle:"electroplating",cost:"50,000",role:"team leader"}],
experience:[{company_name:"amazon",experience:1,role:"developer"},
{company_name:"zoho",experience:2,role:"senior developer"}],
hobbies:["playing","movies watching","travelling"],
personal_details:{fathers_name:"soman",fathers_occupation:"cooli",languages_known:["tamil","english"],date_of_birth:"01/05/2002",gender:"male",martial_status:"single",address:"kaliyakkavilai"},
objectives:" who wishes to equip myself with additional skills and hone my leadership skills by working with a team that enables me to develop and work hard."}
console.log(my_resume)

// let days=["sunday","monday"]
// console.log(days[3]) 
// let day=["tuesday","wednesday"]
// console.log(day[1])
// console.log(day.length)
// console.log(day[day.length-2])

// let a=["sunday","mondy","tuesday"]
// // console.log(a.pop())
// a[2]="wednesday"
// console.log(a)
// a.pop()
// console.log(a)

// my_resume.state="Tamilnadu"
// my_resume.educational_qualifications[0].city="nagercoil"
// console.log(my_resume.soft_skills)
// console.log(my_resume)

// function getname(){
//     console.log("welcome")
// }
// getname()

// for loop
for(i=0;i<5;i++){
    console.log(i)
}
for(i=0;i>-10;i--){
    console.log(i)
}
for(i=0;i<my_resume.soft_skills.length;i++){
    console.log(my_resume.soft_skills[i])
} 
// function getvalue(a){
//  for(i=0;i<a.length;i++){
//      console.log(i+1+"."+a[i].course)
//  }   
//  }
//  getvalue(my_resume.educational_qualifications)

// function getname(a){
//     for(i=0;i<a.length;i++)
//     console.log(i+1+"."+a[i].role)
// }
// getname(my_resume.experience)

function getvalue(a){
    for(i=a.length-1;i>=0;i--){
        console.log(i+1+"."+a[i].course)
    }   
    }
    getvalue(my_resume.educational_qualifications)

localStorage.setItem("name",["1",'2']);
// var name_2=JSON.stringify("name")
// var name_3=JSON.parse("name")

console.log(localStorage.getItem("name")[0])

//   var list_1=['a','b','c']
//   var strlist=JSON.stringify(list_1);
//   localStorage.setItem("list_2",list_1)
// var list_3=localStorage.getItem(strlist)
//   var clist=JSON.parse(list_3)
//  console.log(localStorage.getItem(clist[1]))

var a=["a","b","c"]
var b=JSON.stringify(a)
var c=JSON.parse(b)
localStorage.setItem("d",c)
console.log(localStorage.getItem("d")[2])

// var list_1=["a","b","c"]
// // localStorage.setItem("array",list_1);
// var list_2=JSON.stringify(list_1)
// var list_3=JSON.parse(list_2)
// localStorage.setItem("array_2",list_3)
// console.log(localStorage.getItem("array_2").length)
