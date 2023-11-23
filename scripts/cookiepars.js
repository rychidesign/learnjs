const infWrapper = document.getElementById("inflation_wrapper");

function getCookie(name, num) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${num}${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }



    for (let i = 0; i <= countryNum; i++) {
        // Získání a zobrazení hodnoty cookie
        
        function createP (id ,clss, inner){
            let para = document.createElement("p");
            para.innerHTML = inner;
            para.classList.add(clss);
            para.classList.add(id);
            
            if(id == 'p_month' && getCookie('month', i) < 0){
                para.classList.add('green');
            } else if(id == 'p_month' && getCookie('month', i) >= 0) {
                para.classList.add('red');
            }
            
            infWrapper.appendChild(para);
        }
        createP('p_country','align_left', getCookie('country', i));
        createP('p_month', 'align_right', getCookie('month', i) + ' %');
        createP('p_year', 'align_right', getCookie('year', i) + ' %');
    };
    
    const infCountry = document.getElementsByClassName("p_country");
    const infMonth = document.getElementsByClassName("p_month");
    const infYear = document.getElementsByClassName("p_year");