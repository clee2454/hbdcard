function nextNama() {
    var nama = document.getElementById('nama').value;
    localStorage.setItem('nama', nama);
    if (!localStorage.getItem('nama')){
        alert("Silahkan isi nama terlebih dahulu :>")
        return false
    }
    else if(localStorage.getItem('nama')){
        return true
    }
}



function cektgl() {
    var tglLahir = document.getElementById('tgl').value;
    localStorage.setItem('Tanggal',tglLahir);
    var nama = localStorage.getItem('nama');
    var tglLahir = new Date(localStorage.getItem('Tanggal'));
    var today = new Date();

    if (tglLahir.getDate() === today.getDate() && tglLahir.getMonth() === today.getMonth()) {
        return true
    }
    else if(!localStorage.getItem('Tanggal')){
        alert('Tanggal lahir juga harus diisi dong :>')
    }
     else {
        alert ( 'Hari ini sayangnya bukan ulang tahun kamu, ' + nama + ' :<');
    }
}

function nextPerson(){
    var person = document.getElementById('person').value;
    localStorage.setItem('person',person);
    if (!localStorage.getItem('person')){
        alert("Orang favoritmu siapaa :>")
        return false;
    }
    else if(localStorage.getItem('person')){
        return true;
    }
    
}


document.addEventListener('DOMContentLoaded', function(){
    if (document.title === 'tgl') {
        cektgl();
    }
    
})
function next(){
    if (nextNama()&&nextPerson()&&cektgl()){
        window.location.href='ucapan.html'
    }
   

}
    
    
        

// ucapan();




// document.addEventListener('DOMContentLoaded', function() {
//     if (document.title === 'Ucapan') {
//         document.getElementById('ucapan').ucapan();
//     }
// });
