var sayilar = document.querySelectorAll('.sayi');
var cevap = document.querySelector('.cevap');
var hesapla = document.querySelector('.hesapla');
var islemler = document.querySelectorAll('.islem');
var sifirla = document.querySelector('.sifirla');
var islem = null;
var s1 = '';
var s2 = '';
var sonuc;
sayilar.forEach((sayi) => {
  sayi.addEventListener('click', () => {
    if (islem === null) {
      s1 += sayi.textContent;
      cevap.value = s1;
    } else {
      s2 += sayi.textContent;
      cevap.value = s2;
    }
  });
});

islemler.forEach((btn) => {
  btn.addEventListener('click', () => {
    islem = btn.value;
    cevap.value = '0';
  });
});

hesapla.addEventListener('click', () => {
  s1 = parseInt(s1);
  s2 = parseInt(s2);

  if (islem == 'toplama') {
    sonuc = s1 + s2;
  } else if (islem == 'cikarma') {
    sonuc = s1 - s2;
  } else if (islem == 'carpma') {
    sonuc = s1 * s2;
  } else if (islem == 'bolme') {
    sonuc = s1 / s2;
  }

  cevap.value = sonuc;
  s1 = '';
  s2 = '';
  islem = null;
});

sifirla.addEventListener('click', () => {
  cevap.value = 0;
});
