var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});


//square
function hitungLuasPersegi() {
  var sisi = parseFloat(document.getElementById("sisiLuasPersegi").value);
  var luas = sisi * sisi;
  document.getElementById("rumusLuasPersegi").innerHTML = "L = Sisi x Sisi";
  document.getElementById("nilaiRumusLuasPersegi").innerHTML = "L = " + sisi + " X " + sisi;
  document.getElementById("hasilLuasPersegi").innerHTML = "L = " + luas;
}

function resetHitungLuasPersegi() {
  document.getElementById("rumusLuasPersegi").innerHTML = "";
  document.getElementById("nilaiRumusLuasPersegi").innerHTML = "";
  document.getElementById("sisiLuasPersegi").value = "";
  document.getElementById("hasilLuasPersegi").innerHTML = "";
}

function hitungKelilingPersegi() {
  var sisi = parseFloat(document.getElementById("sisiKelilingPersegi").value);
  var keliling = sisi * 4;
  document.getElementById("rumusKelilingPersegi").innerHTML = "K = 4 x Sisi";
  document.getElementById("nilaiRumusKelilingPersegi").innerHTML = "K = 4 X " + sisi;
  document.getElementById("hasilKelilingPersegi").innerHTML = "K = " + keliling;
}

function resetHitungKelilingPersegi() {
  document.getElementById("rumusKelilingPersegi").innerHTML = "";
  document.getElementById("nilaiRumusKelilingPersegi").innerHTML = "";
  document.getElementById("sisiKelilingPersegi").value = "";
  document.getElementById("hasilKelilingPersegi").innerHTML = "";
}




// rectangle
function hitungLuasPersegiPanjang() {
  var panjang = parseFloat(document.getElementById("panjangLuasPersegiPanjang").value);
  var lebar = parseFloat(document.getElementById("lebarLuasPersegiPanjang").value);
  var luas = panjang * lebar;
  document.getElementById("rumusLuasPersegiPanjang").innerHTML = "L = Panjang x Lebar";
  document.getElementById("nilaiRumusLuasPersegiPanjang").innerHTML = "L = " + panjang + " X " + lebar;
  document.getElementById("hasilLuasPersegiPanjang").innerHTML = "L = " + luas;

}

function resetHitungLuasPersegiPanjang() {
  document.getElementById("panjangLuasPersegiPanjang").value = "";
  document.getElementById("lebarLuasPersegiPanjang").value = "";
  document.getElementById("rumusLuasPersegiPanjang").innerHTML = "";
  document.getElementById("nilaiRumusLuasPersegiPanjang").innerHTML = "";
  document.getElementById("hasilLuasPersegiPanjang").innerHTML = "";
}

function hitungKelilingPersegiPanjang() {
  var panjang = parseFloat(document.getElementById("panjangKelilingPersegiPanjang").value);
  var lebar = parseFloat(document.getElementById("lebarKelilingPersegiPanjang").value);
  var keliling = 2 * (panjang + lebar);
  document.getElementById("rumusKelilingPersegiPanjang").innerHTML = "K = 2 (Panjang + Lebar)";
  document.getElementById("nilaiRumusKelilingPersegiPanjang").innerHTML = "K = 2 (" + panjang + " + " + lebar + ")";
  document.getElementById("hasilKelilingPersegiPanjang").innerHTML = "K = " + keliling;
}

function resetHitungKelilingPersegiPanjang() {
  document.getElementById("panjangKelilingPersegiPanjang").value = "";
  document.getElementById("lebarKelilingPersegiPanjang").value = "";
  document.getElementById("rumusKelilingPersegiPanjang").innerHTML = "";
  document.getElementById("nilaiRumusKelilingPersegiPanjang").innerHTML = "";
  document.getElementById("hasilKelilingPersegiPanjang").innerHTML = "";

}