function start() {
    alert("hello")
    $.ajax({
        type:"get",
        url:"https://jsonplaceholder.typicode.com/posts",
        data:{},
        success:function(response){
                console.log(response)
                let tabledata=""
                for(i=0;i<response.length;i++){
                    tabledata=tabledata+`<tr>
                    <td id="iddd">${response[i].body}</td>
                    <td id="iddd"><button type="button" onclick="idd('${response[i].id}')" >${response[i].id}</button></td>
                    <td id="iddd">${response[i].title}</td>
                    <td >${response[i].userId}</td>
                    </tr>`
                }
                document.getElementById("table_list").innerHTML=tabledata;

        },
        error:function(error){
              console.log(error)
        },     
            
    })   
}

function post(){
    alert("hello")
    $.ajax({
        type:"post",
        url:"https://jsonplaceholder.typicode.com/posts",
        data:{body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            userId:1},
        success:function(response){
                console.log(response)
                // let tabledata=""
                // for(i=0;i<response.length;i++){
                //     tabledata=tabledata+`<tr>
                //     <td>${response[i].body}</td>
                //     <td>${response[i].id}</td>
                //     <td>${response[i].name}</td>
                //     <td>${response[i].email}</td>
                //     </tr>`
                // }
                // document.getElementById("table_list").innerHTML=tabledata;

        },
        error:function(error){
              console.log(error)
        },     
            
    })   
}

function idd(a){
    console.log(a)
    
}