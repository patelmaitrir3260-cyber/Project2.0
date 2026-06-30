const btn1=document.querySelector("#btn1")
const btn2=document.querySelector("#btn2");
const registerBox=document.querySelector(".registerBox")
const loginBox=document.querySelector(".loginBox")
const loginbtn=document.querySelector("#login");
const FinTrack=document.querySelector(".FinTrack");
const Darkmod=document.querySelector("#Darkmod");
const plus=document.querySelector("#plus");
const regiterform=document.querySelector(".register form")
const loginform=document.querySelector(".login form")
const transactionform=document.querySelector(".save form");
const resg=document.querySelector("#resg");
const saveTransaction=document.querySelector(".saveTransaction")
const userid=document.querySelector("#userid ")
const current=document.querySelector("#current");
const total=document.querySelector("#total");
const expense=document.querySelector("#expense");
const count=document.querySelector("#count");
const logout=document.querySelector("#logout");
const Data=document.querySelector(".Data");
const Description=document.querySelector(".Description");
const Category=document.querySelector(".Category");
const Amount=document.querySelector(".Amount");
const Type=document.querySelector(".Type");
const reset=document.querySelector("#ResetData");
const Adding=document.querySelector(".Adding");
const isLoggedIn = localStorage.getItem("isLoggedIn");
let arr=JSON.parse(localStorage.getItem("userName"))||[];
let arr2=JSON.parse(localStorage.getItem("final"))||[];
if(arr.length===0){
      localStorage.removeItem("isLoggedIn");
      
}
let totalval=0;
let  expenseval=0;
let currentincome=0;
count.textContent=arr2.length;
let val=arr2.map(element => {
    if(element.type==="Income"){
    total.textContent= ( totalval)+= Number(element.amount);
    currentincome += Number(element.amount);
     let h4=document.createElement("h4");
    h4.innerHTML=`${element.date}`
    Data.appendChild(h4);
    let des=document.createElement("h4");
    des.innerHTML=`${element.description}`
    Description.appendChild(des);
    let cate=document.createElement("h4");
    cate.innerHTML=`${element.category}`
    Category.appendChild(cate);
    let amou=document.createElement("h4");
    amou.innerHTML=`${element.amount}`;
    Amount.appendChild(amou);
    let type=document.createElement("h4");
    type.innerHTML=`${element.type}`;
    Type.appendChild(type);

    }
});

let val2=arr2.map((element)=>{
if(element.type==="Expense"){
 expenseval=expenseval+Number(element.amount);
 expense.textContent=expenseval;
  currentincome -= Number(element.amount);
   let h4=document.createElement("h4");
    h4.innerHTML=`${element.date}`
    Data.appendChild(h4);
    let des=document.createElement("h4");
    des.innerHTML=`${element.description}`
    Description.appendChild(des);
    let cate=document.createElement("h4");
    cate.innerHTML=`${element.category}`
    Category.appendChild(cate);
    let amou=document.createElement("h4");
    amou.innerHTML=`${element.amount}`;
    Amount.appendChild(amou);
    let type=document.createElement("h4");
    type.innerHTML=`${element.type}`;
    Type.appendChild(type);
}
})
current.textContent=currentincome;
btn2.addEventListener("click",()=>{
registerBox.style.display="flex";
loginBox.style.display="none";
})
btn1.addEventListener("click",()=>{
    loginBox.style.display="flex";
    registerBox.style.display="none";

})
const ctx = document.getElementById("myChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["January", "February", "March", "April"],
        datasets: [
            {
                label: "Income",
                data: [1200, 1500, 1800, 2200],
                backgroundColor: "green"
            },
            {
                label: "Expenses",
                data: [900, 1100, 1400, 1600],
                backgroundColor: "red"
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: "Income vs Expenses"
            }
        }
    }
});
// loginbtn.addEventListener("click",(delt)=>{
//     delt.preventDefault();
//     FinTrack.style.display="flex";
//     loginBox.style.display="none";
// })
Darkmod.addEventListener("click",()=>{
 document.body.classList.toggle("dark");
 document.body.classList.toggle("box");
  document.body.classList.toggle("mid");
   document.body.classList.toggle("colar");
   document.body.classList.toggle("position");
   

})
plus.addEventListener("click",()=>{
saveTransaction.style.display="flex";

})
regiterform.addEventListener("submit",(delt)=>{
    arr.pop();
   delt.preventDefault();
  let userName=delt.target[0].value;
  let password=delt.target[1].value;
  if(userName.trim()=="" || password.trim()==""){
    alert("it's not allowed")
    return;
  }
  let data={
    userName,
    password,
  }
arr.push(data);
localStorage.setItem("userName",JSON.stringify(arr));
userid.textContent=arr[0].userName;
alert("Registration completed successfully!");
setTimeout(() => {
    loginBox.style.display = "flex";
    registerBox.style.display = "none";
}, 2000);
 delt.target[0].value="";
 delt.target[1].value="";
})
if (isLoggedIn === "true") {
    loginBox.style.display = "none";
    FinTrack.style.display = "flex";
     userid.textContent=arr[0].userName;
} else {
    loginBox.style.display = "flex";
    FinTrack.style.display = "none";
}

loginform.addEventListener("submit",(delt)=>{
   delt.preventDefault();
   if(arr.length===0){
    alert("firstly registration");
    delt.target[0].value="";
  delt.target[1].value="";
    return;
   }
   let userName=delt.target[0].value;
  let password=delt.target[1].value;
  if(userName.trim()=="" || password.trim()==""){
    alert("it's not allowed")
    return;
  }
  if(userName!==arr[0].userName || password!==arr[0].password){
 alert("username and password are wrong");
 delt.target[0].value="";
  delt.target[1].value="";
 return;
  }else{
    localStorage.setItem("isLoggedIn", "true");
     loginBox.style.display = "none";
    FinTrack.style.display = "flex";
  }
 delt.target[0].value="";
  delt.target[1].value="";
})

  
const type=document.querySelector("#Type")
transactionform.addEventListener("submit",(delt)=>{
delt.preventDefault();
let type=delt.target[0].value;
let description=delt.target[1].value;
let amount=delt.target[2].value;
let date=delt.target[3].value;
let category=delt.target[4].value;
let obj={
    type,
    description,
    amount,
    date,
    category
}
arr2.push(obj);
if(description.trim()==""||amount.trim()==""){
    alert("fill all input")
    return;
}else{
    localStorage.setItem("final",JSON.stringify(arr2));
    FinTrack.style.display="flex";
    saveTransaction.style.display="none";
}
if(delt.target[0].value==="Income"){
    total.textContent=totalval+Number(delt.target[2].value);
    current.textContent=currentincome+Number(delt.target[2].value)
    count.textContent=arr2.length;
}else{
    expense.textContent=expenseval+Number(delt.target[2].value);
    current.textContent=currentincome-Number(delt.target[2].value)
    count.textContent=arr2.length;
}
Data.append(document.createElement("h4").textContent=delt.target[3].value);
Description.append(document.createElement("h4").textContent=delt.target[1].value);
Category.append(document.createElement("h4").textContent=delt.target[4].value);
Amount.append(document.createElement("h4").textContent=delt.target[2].value);
Type.append(document.createElement("h4").textContent=delt.target[0].value);
saveTransaction.style.display="none";
FinTrack.style.display="flex";
delt.target[1].value="";
delt.target[2].value="";
delt.target[3].value="";
delt.target[4].value="";
})
logout.addEventListener("click",()=>{
    localStorage.removeItem("isLoggedIn");
loginBox.style.display = "flex";
FinTrack.style.display = "none";
})
reset.addEventListener("click", () => {

    let ans = confirm("Are you sure you want to delete all transactions?");

    if (ans) {
        arr2 = [];
        localStorage.setItem("final", JSON.stringify(arr2));

        count.textContent = 0;
        total.textContent = 0;
        expense.textContent = 0;
        current.textContent = 0;
        
    }

});



