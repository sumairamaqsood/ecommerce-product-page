'use strict';

const cartIcon = document.querySelector('.cart_content img');
const cartBox = document.querySelector('.cart_box');
const normalPrice = document.querySelector('.normal_price');
const qtylabel = document.querySelector('.qty_label');
const procontainer = document.querySelector('.pro_content');
const cartEmpty = document.querySelector('.cart_empty');

//btns increment decrement
const qty = document.querySelector('.qty_number');
const decr = document.querySelector('.decrement');
const incr = document.querySelector('.increment');
const addCart = document.querySelector('.add_cart');

let proPrice = 125;
let totalQty = qty.innerHTML;
let totalprice;

decr.addEventListener('click', () => {
  if (totalQty == 1) {
    totalQty == 1;
  } else {
    totalQty--;
  }
  totalprice = proPrice * totalQty;
  normalPrice.textContent = '$' + totalprice + '.00';
  qty.textContent = totalQty;
});
incr.addEventListener('click', () => {
  totalQty++;
  totalprice = proPrice * totalQty;
  normalPrice.textContent = '$' + totalprice + '.00';
  qty.textContent = totalQty;
});

cartIcon.addEventListener('click', () => {
  cartBox.classList.toggle('display');
});

addCart.addEventListener('click', () => {
  qtylabel.style.display = 'block';
  qtylabel.innerHTML = totalQty;
  procontainer.innerHTML = '';
  let html = ` <img src="./images/image-product-1-thumbnail.jpg" alt="">
                        <div class="p_details">
                            <p class="pro_txt"> Fall Limited Edition Sneakers </p>
                            <p class="price"> $125.00 <span>x</span> <span class="times">${totalQty}</span> <span
                                    class="total">${totalprice}</span></p>
                        </div>
                        <div class="trash">
                            <img src="./images/icon-delete.svg" alt="" class= 'trash_img'>
                        </div>`;
  procontainer.insertAdjacentHTML('afterbegin', html);
  cartEmpty.innerHTML = '';
  document.querySelector('.trash_img').addEventListener('click', () => {
    cartEmpty.innerHTML = 'Your cart is empty';
    procontainer.innerHTML = '';
    qtylabel.style.display = 'none';
  });
});
