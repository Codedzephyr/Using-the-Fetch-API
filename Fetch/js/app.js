
/*
$.getJSON('https://jsonplaceholder.typicode.com/todos/2', function(data){
    var text = `Title: ${data.title}<br>
                completed : ${data.completed}`
                $(".list-group").html(text);
});
*/

/*
function getUsers(){
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
        let output = `<h2 class = "mb-3">list</h2>`
        data.forEach(function(users){
            output += `
            <ul class = "list-group"></ul>
            <li class = "list-group-item"> Title : ${users.title}</li>
            <li class = "list-group-item"> Completed : ${users.completed}</li>
            </ul>
          `;  
          console.log(users);
        });
        document.getElementById('output').innerHTML = output;
        console.log(users);
        })
        .catch((err)=> {
            console.log(err);
        });
}
*/
document.getElementById('button1').addEventListener('click', getUsers);

function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then((data) => {
            let output = ``;
            data.forEach(function(user){
                output += `
                <ul class = "list-group">
                <li class = "list-group-item">Title : ${user.title}</li>
                <li class = "list-group-item"> Completed : ${user.completed}</li>
                </ul>
              `;  
            });
            document.getElementById('output').innerHTML = output;
            //document.getElementsByClassName('list-group').innerHTML = output;
            })
            .catch((err)=> {
                console.log(err);
            })
    }
    