
let myDate = function () {
    let ajankohta = Date();
    let vp = "", kk = "", pm = "", vuosi = "", aika = "", gmt = "";
    let j = 0; 
    for (let i = 0; i < ajankohta.length; i++) {
        if (ajankohta[i] == " ") {
            j++;
            continue;
        }
        switch (j) {
            case 0:
                vp += ajankohta[i];
                break;
            case 1:
                kk += ajankohta[i];
                break;
            case 2:
                pm += ajankohta[i];
                break;
            case 3:
                vuosi += ajankohta[i];
                break;
            case 4:
                aika += ajankohta[i];
                break;
            case 5:
                gmt += ajankohta[i];
                break;
            break;
        }
    }
    
    let kaikkivp = {"Mon":"maanantai", "Tue":"tiistai", "Wed":"keskiviikko", "Thu":"torstai",
                    "Fri":"perjantai", "Sat":"lauantai", "Sun":"sunnuntai"};
    let kaikkikk = {"Jan":"01","Feb":"02","Mar":"03","Apr":"04","May":"05","Jun":"06","Jul":"07",
                    "Aug":"08","Sep":"09","Oct":"10","Nov":"11","Dec":"12"}
    let ulos = "viikonpäivä on: " + kaikkivp[vp] 
         + "<br>päivämäärä on: " + pm + "." + kaikkikk[kk] 
         + "<br>vuosi on: " + vuosi 
         + "<br>aika on: " + aika
         + "<br>gmt: " + gmt;
    
    // let ulos = {vp: kaikkivp[vp], pm};
    
    return ulos;
}

const p = document.querySelectorAll('p#aika') [ 0 ];

p.innerHTML = myDate();
