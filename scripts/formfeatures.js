
const inp = document.getElementById('inptext');
let str
const valCapital = document.getElementById('val_capital');
const valNumber = document.getElementById('val_number');
const valLength = document.getElementById('val_length');


function containsCapital(st) {
    return /[A-Z]/.test(st);
};
function containsNumber(st) {
    return /[0-9]/.test(st);
}
function containsLength (st){
    return st.length;
}

inp.addEventListener('keyup', function(event){
    str = inp.value;
    console.log('zmena')
    // kontrola velkého pismena
    if(containsCapital(str) == true){
        valCapital.style.setProperty("color", "var(--green)");
    } else {
        valCapital.style.setProperty("color", "var(--foreground)");
        console.log('neobsahuje velke pismeno')
    }
    
    // kontrola cislice
    if(containsNumber(str) == true){
        valNumber.style.setProperty("color", "var(--green)");
    } else {
        valNumber.style.setProperty("color", "var(--foreground)");
        console.log('neobsahuje cislo')
    }
    
    // kontrola delky
      if(containsLength(str) >= 8){
        valLength.style.setProperty("color", "var(--green)");
    } else {
        valLength.style.setProperty("color", "var(--foreground)");
        console.log('neobsahuje 8 znaku')
    }
    
    // kontrola vsech
    if (containsNumber(str) && containsCapital(str) && containsLength(str) >= 8) {
        inp.style.setProperty('border-bottom', '1px solid var(--green)')
    } else if (inp.matches(':focus')) {
        inp.style.setProperty('border-bottom', '1px solid var(--background)')
    }
    
    /*
    // kontrola prazdneho inputu
    if (containsLength(str) == 0 && !inp.matches(':focus')) {
        inp.style.setProperty('border-bottom', '1px solid var(--background)')
    } else if (inp.matches(':focus')) {
        inp.style.setProperty('border-bottom', '1px solid var(--foreground)')
    }
    */
});