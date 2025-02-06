'use strict';

const cartIcon = document.querySelector('.cart_content img');
const cartBox = document.querySelector('.cart_box');
const normalPrice = document.querySelector('.normal_price');
const qtylabel = document.querySelector('.qty_label');
const procontainer = document.querySelector('.pro_content');
const cartEmpty = document.querySelector('.cart_empty');
const checkoutBtn = document.querySelector('.checkout-btn');

//btns increment decrement
const qty = document.querySelector('.qty_number');
const decr = document.querySelector('.decrement');
const incr = document.querySelector('.increment');
const addCart = document.querySelector('.add_cart');

//images

const imageLarge = document.querySelector('.img_thumbnail img');
const thumbImage = document.querySelectorAll('.img_small img');

//modal
const modalEl = document.querySelector('.modal');
const closeModal = document.querySelector('.close_icon');
const LImgModal = document.querySelector('.img_thumbnail_modal img');
const sImgModal = document.querySelectorAll('.img_small_modal img');

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
                        </div>
                       `;
  procontainer.insertAdjacentHTML('afterbegin', html);
  cartEmpty.innerHTML = '';
  document.querySelector('.trash_img').addEventListener('click', () => {
    cartEmpty.innerHTML = 'Your cart is empty';
    procontainer.innerHTML = '';
    qtylabel.style.display = 'none';
  });
});

thumbImage.forEach((img, indx) => {
  indx++;
  img.addEventListener('click', (e) => {
    imageLarge.src = `images/image-product-${indx}.jpg`;
    thumbImage.forEach((thumb) => thumb.classList.remove('active'));
    img.classList.add('active');
  });
});

imageLarge.addEventListener('click', () => {
  modalEl.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modalEl.style.display = 'none';
});

sImgModal.forEach((mimg, indx) => {
  indx++;
  mimg.addEventListener('click', () => {
    LImgModal.src = `images/image-product-${indx}.jpg`;
    sImgModal.forEach((thumb) => thumb.classList.remove('active'));
    mimg.classList.add('active');
  });
});
