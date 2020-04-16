var prodauctNameInp = document.getElementById("ProductName");
var prodauctPriceInp = document.getElementById("ProductPrice");
var prodauctCataInp = document.getElementById("ProductCatago");
var prodauctDescInp = document.getElementById("ProductDesc");
var addBtn=document.getElementById("add-btn");
var currentindex=0;
var productContianer ;

addBtn.addEventListener("click" , function(){
    if (addBtn.innerHTML == "add")
    {
        addProduct()
    }
    else
    {
        savaUpdata();
    }
})
function savaUpdata(){
    var products=
    {
        name : prodauctNameInp.value ,
        price : prodauctPriceInp.value ,
        cate : prodauctCataInp.value ,
        desc : prodauctDescInp.value ,

    }
    productContianer[currentindex]=products
    localStorage.setItem("allProductStorge" , JSON.stringify(productContianer) );
    productDisply();
    clearData();

}



/*
if (localStorage.getItem("allProductStorge")!=null) {              //msh fady
    productContianer=JSON.parse(localStorage.getItem("allProductStorge"));
    productDisply();

}
else{
    productContianer=[];
}
*/



if (localStorage.getItem("allProductStorge") !=null ){    //msh fady
    productContianer = JSON.parse(localStorage.getItem("allProductStorge"));
    productDisply()
} 
else{
    productContianer=[];
}

function addProduct()
{
    var products=
    {
        name : prodauctNameInp.value ,
        price : prodauctPriceInp.value ,
        cate : prodauctCataInp.value ,
        desc : prodauctDescInp.value ,

    }

    productContianer.push(products);
    console.log(productContianer);
    localStorage.setItem("allProductStorge" , JSON.stringify(productContianer) );
    productDisply();
    clearData();

}


function productDisply()
{
    var cartoona ="";
    for (var i = 0; i < productContianer.length ; i++)
    {
        cartoona +=`<tr><td>`+productContianer[i].name+`</td>`+
        `<td>`+productContianer[i].price+`</td>`+
        `<td>`+productContianer[i].cate+`</td>`+
        `<td>`+productContianer[i].desc+`</td>`+
        `<td><button class="btn btn-info" onclick="deletProduct(`+i+`)">delet</button></td>`+
        `<td><button class="btn btn-warning" onclick="updataProduct(`+i+`)">Updata</button></td>`+
        `</tr>`;
        
    }


    document.getElementById("tableAdd").innerHTML=cartoona;

}


function clearData(){
    document.getElementById("ProductName").value="";
    document.getElementById("ProductPrice").value="";
    document.getElementById("ProductCatago").value="";
    document.getElementById("ProductDesc").value="";
}

/*
function serachProduct(e){
    var term="";
for (var i = 0; i < productContianer.length; i++) {
    if (productContianer[i].name.includes(e)   ) {
        term +=`<tr><td>`+productContianer[i].name+`</td>`+
        `<td>`+productContianer[i].price+`</td>`+
        `<td>`+productContianer[i].cate+`</td>`+
        `<td>`+productContianer[i].desc+`</td>`+
        `<td><button class="btn btn-info" onclick="deletProduct(`+i+`)">delet</button></td>`+
        `</tr>`;
    }

}
document.getElementById("tableAdd").innerHTML=term;
}
function deletProduct(e){
    productContianer.splice(e,1);
    localStorage.setItem("allProductStorge" , JSON.stringify(productContianer) );
    productDisply();

}

*/


function serachProduct(e){
    term=""
    for (var i = 0; i < productContianer.length ; i++) {
        if (     productContianer[i].name.includes(e)       ) {
            term+=`<tr><td>`+productContianer[i].name+`</td>`+
            `<td>`+productContianer[i].price+`</td>`+
            `<td>`+productContianer[i].cate+`</td>`+
            `<td>`+productContianer[i].desc+`</td>`+
            `<td><button class="btn btn-info" onclick="deletProduct(`+i+`)">delet</button></td>`+
            `<td><button class="btn btn-warning" onclick="updataProduct(`+i+`)">Updata</button></td>`+
            `</tr>`;
            
        }
    }
    document.getElementById("tableAdd").innerHTML=term;
}



function deletProduct(e){
    productContianer.splice(e,1);
    localStorage.setItem("allProductStorge" , JSON.stringify(productContianer));
    productDisply();

}

function updataProduct(e){
    currentindex =e;
    prodauctNameInp.value=productContianer[e].name ;
    prodauctPriceInp.value=productContianer[e].price ;
    prodauctCataInp.value=productContianer[e].cate ;
    prodauctDescInp.value=productContianer[e].desc;

    addBtn.innerHTML="updata";    

}
