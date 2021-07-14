

var productName = document.getElementById("pName");
var productCategory = document.getElementById("pCategory");
var productPrice = document.getElementById("pPrice");
var productDesc = document.getElementById("pDesc");
var seach = document.getElementById("search");



// var productList = [];



if(localStorage.getItem("myData")== null){

 var productList = [];

}
else{
     

   var productList = JSON.parse(localStorage.getItem("myData"));


}
console.log(productList);

display();

function addProduct(){
    var product = {
        name: productName.value,
        category: productCategory.value,
        price: productPrice.value ,
        describtion: productDesc.value,
    };
    
    productList.push(product);

    console.log(product);

    localStorage.setItem("myData",JSON.stringify(productList));


    display();
    clear();

}

function display(){

    var tds = "";

    for(var i =0;i<productList.length;i++){

        tds += `
        <tr>
            <td>${i+1}</td>
            <td> ${productList[i].name}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].describtion}</td>
            <td><button class="btn btn-success" onclick="test()" >Update</button></td>
            <td><button class="btn btn-danger" onclick="deletePro(${i})">Delete</button></td>
        </tr>`;
    }

    document.getElementById("tBody"). innerHTML = tds;

    console.log(tds);
}

function clear(){

    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDesc.value = "";

    console.log(productList)
};

function deletePro(i){

    
    productList.splice(i,1);
    localStorage.setItem("myData",JSON.stringify(productList));


    display();
};

function searcho(){

    var tds = "";

    for(var i=0;i<productList.length;i++){

        if(productList[i].name.toLowerCase().includes(search.value.toLowerCase())){

            tds += `
            <tr>
                <td>${i}</td>
                <td> ${productList[i].name.replace(seach.value.toLowerCase(),`<span style="background-color: yellow;">${seach.value.toLowerCase()}</span>`)}</td>
                <td>${productList[i].category}</td>
                <td>${productList[i].price}</td>
                <td>${productList[i].describtion}</td>
                <td><button class="btn btn-success" onclick="test()" >Update</button></td>
                <td><button class="btn btn-danger" onclick="deletePro(${i})">Delete</button></td>
            </tr>`;
        
            document.getElementById("tBody"). innerHTML = tds;

            console.log(tds);
        }
       
    };
};
