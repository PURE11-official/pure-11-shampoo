const originalPrice = 2330;
const discountedPrice = 1350;

function calculateDiscount() {
    const diff = originalPrice - discountedPrice;
    const percentage = Math.round((diff / originalPrice) * 100);
    
    const badge = document.getElementById('discountBadge');
    const tag = document.getElementById('calculatedOff');
    if (badge) badge.innerText = `${percentage}% OFF`;
    if (tag) tag.innerText = `SAVE ${percentage}%`;
}

function closeModal(element, src) {
    const mainImg = document.getElementById('activeImage');
    if (mainImg) mainImg.src = src;

    if (element) {
        const thumbs = document.querySelectorAll('.thumb');
        thumbs.forEach(t => t.classList.remove('active'));
        element.classList.add('active');
    }
}
// Image Switcher and Full View Modal
function switchImage(element, src) {
    // 1. اگر مین پروڈکٹ کی تصویر کو تبدیل کرنا ہو
    const mainImg = document.getElementById('activeImage');
    if (mainImg) mainImg.src = src;

    if (element) {
        const thumbs = document.querySelectorAll('.thumb');
        thumbs.forEach(t => t.classList.remove('active'));
        element.classList.add('active');
    }

    // 2. گیلری کی تصویر پر کلک کرنے سے فل سکرین میں تصویر دکھانا
    const modal = document.getElementById('imageModal');
    const fullImg = document.getElementById('fullImage');
    
    if (modal && fullImg) {
        modal.style.display = "block";
        fullImg.src = src;
    }
}

// Modal کو بند کرنے کا فنکشن
function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = "none";
    }
}
let currentQty = 1;
function updateQty(change) {
    currentQty += change;
    if (currentQty < 1) currentQty = 1;
    document.getElementById('qtyInput').value = currentQty;
}

let totalCartCount = 0;
function addToCart() {
    totalCartCount += currentQty;
    document.getElementById('cartCount').innerText = totalCartCount;

    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMsg');
    if (toast && toastMsg) {
        toastMsg.innerText = `${currentQty} x Pure11 Shampoo added to cart!`;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

function openCartAlert() {
    if (totalCartCount === 0) {
        alert("Your cart is empty.");
    } else {
        alert(`Cart Summary:\n${totalCartCount} Pure11 Shampoo(s)\nTotal Price: Rs. ${totalCartCount * discountedPrice}`);
    }
}

document.addEventListener('DOMContentLoaded', calculateDiscount);
