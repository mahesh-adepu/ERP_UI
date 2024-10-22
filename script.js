let nav = document.querySelector('.navigation');
let main = document.querySelector('.main');
let toggle = document.querySelector('.toggle');

toggle.onclick = function(){
    nav.classList.toggle('active');
    main.classList.toggle('active');
} 

fetch("https://dummyjson.com/users")
.then(response=>response.json())
.then(res =>{
    const data = res.users;
    let rows = "";
    data.forEach(ele => {
        rows += `<tr>
        <td>${ele.firstName}</td>
        <td>${ele.lastName}</td>
        <td>${ele.age}</td>
        <td>${ele.email}</td>
        <td>${ele.phone}</td>
        </tr>`
    });
    document.getElementById('tabledata').innerHTML = rows;
})
.catch(error => console.log(error))