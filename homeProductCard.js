const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (product) => {
 if(!product){
    return false;
 }
 product.forEach((curPro)=>{
    const {id, name,category,brand,price,stock,description,image}=curPro;
    const productclone = document.importNode(productTemplate.content, true);
    productclone.querySelector('.productName').textContent = name;
    productclone.querySelector('.productImage').src=image;
    productclone.querySelector('.productImage').alt=name;
    productclone.querySelector('.productDescription').textContent = description;
    productclone.querySelector('.productStock').textContent=stock;
    productclone.querySelector('.category').textContent = category;
    productContainer.append(productclone);
 })
};
