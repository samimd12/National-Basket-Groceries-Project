const product = [
    {
        id: 0,
        image: 'image/atta1.png',
        title: 'AATA',
        price: 65,
    },
    {
        id: 1,
        image: 'image/dates.webp',
        title: 'Dates',
        price: 1100,
    },
    {
        id: 2,
        image: 'image/india-gate-basmati-rice.jpg',
        title: 'Rice',
        price: 120,
    },
    {
        id: 3,
        image: '/image/product-6.png',
        title: 'Almond',
        price: 1080,
    },
    {
        id: 3,
        image: '/image/3roses.webp',
        title: 'Tea Powder',
        price: 560,
    },
    {
        id: 3,
        image: '/image/ghee.webp',
        title: 'Ghee',
        price: 550,
    },
    {
        id: 3,
        image: '/image/onion.webp',
        title: 'Onion',
        price: 30,
    },
    {
        id: 3,
        image: '/image/dhall3.png',
        title: 'Dal',
        price: 80,
    },
    {
        id: 3,
        image: '/image/oats.webp',
        title: 'Oats',
        price: 80,
    },
    {
        id: 3,
        image: '/image/walnut3.webp',
        title: 'Walnut',
        price: 1100,
    },
    {
        id: 3,
        image: '/image/raisins.webp',
        title: 'Raisins',
        price: 150,
    },
    {
        id: 3,
        image: '/image/cashew.webp',
        title: 'Cashew',
        price: 780,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h4>kg</h4>
        <h2>₹ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₹ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "₹ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>₹ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}