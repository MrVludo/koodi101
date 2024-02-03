
export function myDate () {
    let ajankohta = Date();
    let tiedot = ["","","","","",""]; // vp = "", kk = "", pm = "", vuosi = "", aika = "", gmt = "";
    let j = 0; 
    for (let i = 0; i < ajankohta.length; i++) {
        if (ajankohta[i] == " ") {
            j++;
            continue;
        }
        tiedot[j] += ajankohta[i];
    }
    
    let kaikkivp = {"Mon":"maanantai", "Tue":"tiistai", "Wed":"keskiviikko", "Thu":"torstai",
                    "Fri":"perjantai", "Sat":"lauantai", "Sun":"sunnuntai"};
    let kaikkikk = {"Jan":"01","Feb":"02","Mar":"03","Apr":"04","May":"05","Jun":"06","Jul":"07",
                    "Aug":"08","Sep":"09","Oct":"10","Nov":"11","Dec":"12"}

    let ulos = {vp: kaikkivp[tiedot[0]], kk: kaikkikk[tiedot[1]], pm: tiedot[2],  
                vuosi: tiedot[3], aika: tiedot[4], gmt: tiedot[5]};
    
    return ulos;
}

// const p = document.querySelectorAll('p#aika') [ 0 ];

// p.innerHTML = myDate();
// // 