
var surah_now = 114;
var ayah_now = 1;
var totalAyah_now = 0;




function QuranTextHandling(data) {
  //console.log(text);
  //alert("TextHandling is called");
  var dataArabic = data['data'][0];
  var surah_arabic = dataArabic['text'];
  var surah_name = dataArabic['surah']['englishName'];
  var surah_number = dataArabic['surah']['number'];
  var surah_ayah = dataArabic['numberInSurah'];

  if (surah_arabic.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ") & surah_number != 1 & surah_ayah == 1 ){
    var surah_arabic = surah_arabic.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"," ")
  }

  document.getElementById("p").innerHTML=surah_arabic;
  document.getElementById("name").innerHTML=`${surah_name} ${surah_number}: ${surah_ayah}`;

}


function translationHandling(data){
  var dataEnglish = data['data'][1]
  var surah_english = dataEnglish['text'];

  document.getElementById("translate").innerHTML = surah_english;

}


async function get(surah,ayah) {
    //console.log("hello world")

    //alert("'get' function is getting called");
    var response = await fetch(`http://api.alquran.cloud/v1/ayah/${surah}:${ayah}/editions/quran-uthmani,en.asad,en.pickthall`);

    //console.log(response.status);
    //console.log(response.statusText);

    if (response.status === 200) {
        let data = await response.json();
        text = data['data'][0]['text']
        //console.log(data);
        totalAyah_now = data['data'][0]['surah']['numberOfAyahs'];
        QuranTextHandling(data);
        translationHandling(data);
        //console.log(data['data'][0]['text']);
        //document.getElementById("p").innerHTML= data['data'][0]['text'];
    }
    else if (response.status === 404){
      document.getElementById("p").innerHTML="undefined";
      document.getElementById("translate").innerHTML = "undefined";
      document.getElementById("name").innerHTML="undefined";
      alert("the page that you are trying to request does not exist");


    }
}

function test(){
	//console.log("hello world")
}

function nav(direction) {
  //console.log(ayah_now < totalAyah_now);
  //console.log(totalAyah_now);
  if ( 0 <= ayah_now & ayah_now <= totalAyah_now) {
    //console.log('hjeloo')
    if (direction === 'right' & ayah_now < totalAyah_now){
      ayah_now = ayah_now + 1;
    }
    else if (direction === 'left' & 1 < ayah_now){
      ayah_now = ayah_now - 1;
    }
    //console.log(ayah_now)
  }
  else {
    //console.log('exceeded the amount')
  }
  get(surah_now,ayah_now)

}


function get_entry(){
  surahGet = document.getElementById("surah").value;
  ayahGet = document.getElementById("ayah").value;
  console.log(surahGet)
  if (surahGet.length != 0 & ayahGet.length != 0) {
    surah_now = parseInt(surahGet)
    ayah_now = parseInt(ayahGet)
    get(surah_now,ayah_now)
  }
  document.getElementById("surah").value = "";
  document.getElementById("ayah").value = "";


}

function download () {
   html2canvas(document.querySelector('.specific')).then(canvas => {

    var link = document.createElement("a");
    link.download = `SimpleQuran ${surah_now}: ${ayah_now}`;
    link.href = Canvas2Image.convertToPNG(canvas,canvas.width,canvas.height).src;
    link.click();
    //canvas.toBlob(function(blob) {
    //  var link=window.URL.createObjectURL(blob);
    //  window.location=link;
    //});
});
}

