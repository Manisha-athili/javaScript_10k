let body = document.body;

let btn1 = document.createElement('button')
let btn2 = document.createElement('button')
let btn3 = document.createElement('button')

let inp1 = document.querySelectorAll('input')[0]
let inp2 = document.querySelectorAll('input')[1]
let inp3 = document.querySelectorAll('input')[2]
let inp4 = document.querySelectorAll('input')[3]
let inp5 = document.querySelectorAll('input')[4]
let inp6 = document.querySelectorAll('input')[5]
let inp7 = document.querySelectorAll('input')[6]
let inp8 = document.querySelectorAll('input')[7]
let inp9 = document.querySelectorAll('input')[8]

let div = document.createElement("div");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");
let div5 = document.createElement("div");
let div6 = document.createElement("div");
let div7 = document.createElement("div");
let div8 = document.createElement("div");

let head1 = document.createElement('h2');
let head2 = document.createElement('h2');
let head3 = document.createElement('h2');
let head4 = document.createElement('h2');
let head5 = document.createElement('h2');
let head6 = document.createElement('h2');
let head7 = document.createElement('h2');
let head8 = document.createElement('h2');

let name1 = document.createElement('h4');
let name2 = document.createElement('h4');
let name3 = document.createElement('h4');
let name4 = document.createElement('h4');
let name5 = document.createElement('h4');
let name6 = document.createElement('h4');
let name7 = document.createElement('h4');
let name8 = document.createElement('h4');

let price1 = document.createElement('h4');
let price2 = document.createElement('h4');
let price3 = document.createElement('h4');
let price4 = document.createElement('h4');
let price5 = document.createElement('h4');
let price6 = document.createElement('h4');
let price7 = document.createElement('h4');
let price8 = document.createElement('h4');

let stock1 = document.createElement('h4');
let stock2 = document.createElement('h4');
let stock3 = document.createElement('h4');
let stock4 = document.createElement('h4');
let stock5 = document.createElement('h4');
let stock6 = document.createElement('h4');
let stock7 = document.createElement('h4');
let stock8 = document.createElement('h4');


btn1.innerText="Add Product"
btn2.innerHTML="Update Product"
btn3.innerHTML="Delect Product"

// for i in [1,2,3,4,5,6,7,8]:
head1.innerHTML="Product ID : 45"
name1.innerHTML="<h3>Name: </h3>paints"
price1.innerHTML="<h3>Price: </h3>500"
stock1.innerHTML="<h3>Stock: </h3>100"

head2.innerHTML="Product ID : 4"
name2.innerHTML="<h3>Name: </h3>petrol"
price2.innerHTML="<h3>Price: </h3>500"
stock2.innerHTML="<h3>Stock: </h3>100"

head3.innerHTML="Product ID : 10"
name3.innerHTML="<h3>Name: </h3> -"
price3.innerHTML="<h3>Price: </h3> - "
stock3.innerHTML="<h3>Stock: </h3> - "






// API FETCH
// let apiRespond = await fetch('http://localhost:3000/products')
// let final = await apiRespond.json()
// function add data
btn1.addEventListener('click',addData)
async function addData(e){
    e.preventDefault()
    // alert(inp1.value)
    let obj = {
        id :  Number(inp1.value),
        Name : inp2.value,
        Price: inp3.value,
        Stock: inp4.value
    }

    

    let apiRespond = await fetch('http://localhost:3000/products',{
        method:"POST",
        headers:{
            "content-Type":"Application/json"
        },
        body:JSON.stringify(obj)
    })
    console.log(obj);
    inp1.value=""
    inp2.value=""
    inp3.value=""
    inp4.value=""
    
}
let toupdate = {
        id :  inp5.value,
        Name : inp6.value,
        Price: inp7.value,
        Stock: inp8.value
}


btn2.addEventListener('click',update)

async function update(e) {
    let modify = inp5.value
    alert(modify)
    await fetch(`http://localhost:3000/products/${modify}`,{
        method:"PATCH",
        headers:{
            "content-type":"Application/json"
        },
        body:JSON.stringify(toupdate)
    })   
}

btn3.addEventListener('click',delect)

async function delect(e) {
    let del = inp9.value;
alert(del)
     await fetch(`http://localhost:3000/products/${del}`,{
        method:"DELECT"
     })
     
}


// adding products to page dynamically
let box = document.getElementById('box')
// console.log(box);



box.insertAdjacentElement("afterend",div)
div.append(div1,div2,div3,div4,div5,div6,div7,div8)

// added buttons forms dynamically to Perfom function
inp4.insertAdjacentElement('afterend',btn1)
inp8.insertAdjacentElement('afterend',btn2)
inp9.insertAdjacentElement('afterend',btn3)

div1.append(head1,name1,price1,stock1)
div2.append(head2,name2,price2,stock2)
div3.append(head3,name3,price3,stock3)
div4.append(head4,name4,price4,stock4)
div5.append(head5,name5,price5,stock5)
div6.append(head6,name6,price6,stock6)
div7.append(head7,name7,price7,stock7)
div8.append(head8,name8,price8,stock8)
console.log(document);

