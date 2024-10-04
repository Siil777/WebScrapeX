let productList = [];
async function fetchShopData(){
    try{
        const response = await fetch('http://localhost:999/get');
        const data = await response.json();
        console.log('goods', data);

        const Elements = Object.keys(data);
        productList = data[Elements];
        UserI();
        console.log('The most frequent phone', mode());
    }catch(e){
        console.error(e);
    }
}
function UserI(Goods = productList){
    const container = document.getElementById('container');
    container.classList.add('d-flex','justify-content-center','mt-5');
    container.innerText = '';
    const topDiv = document.createElement('div');
    topDiv.classList.add('list-group')
    Goods.forEach((good)=>{
        const goodNameDiv = document.createElement('a');
        goodNameDiv.href = "javascript:void(0);";
        goodNameDiv.classList.add('list-group-item','list-group-item-action');
        goodNameDiv.textContent = `Product type: ${good.name}`;
        topDiv.appendChild(goodNameDiv);
    });
    container.appendChild(topDiv);
}
function mode(arr=productList){
    const frequentElement = {};

    arr.forEach((v)=>{
        const name = v.name;
        frequentElement[name] = (frequentElement[name] ||0) +1;
    });
    let maxVal = 0;
    let nodeValue = null;

    for(const[key,value] of Object.entries(frequentElement)){
        if(value>maxVal){
            maxVal = value;
            nodeValue = key;
        }
    }
    if(!isNaN(nodeValue)){
        nodeValue = Number(nodeValue);
    }
    return nodeValue;
}
document.addEventListener('DOMContentLoaded', ()=>{
    fetchShopData();
});
