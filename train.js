

let deneme = 4; // kaç deneme hakkı olacak
let tahmin;
let sayac = 0;
let sVagon = Math.floor((Math.random() * 10) + 1);  //Hırsızın durduğu vagon


for (deneme; deneme > 0; deneme--){
    sayac++;

    tahmin = Number(prompt('Lütfen vagon numarasını giriniz'));
    if (sVagon == tahmin) {
        console.log("Tebrikler Süpheliyi ${sayac} denemede buldun");
        console.log("puan: ${100-(20)*(sayac-1)}")
        break;
    } else if (sVagon > tahmin) {
        alert("Olmadı! Daha büyük bir sayı gir! Şüpheli burada değil");
    } else {
        alert("Olmadı! Daha küçük bir sayı gir! Şüpheli burada değil");
    }
    if (deneme == 1) {
        console.log('Maalesef deneme sınırına ulaştınız. Hırsız yakalanamadı')
    }
} 