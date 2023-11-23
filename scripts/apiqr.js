const inUrl = document.getElementById('in_url');
const getQrBttn = document.getElementById('generate_qr');



getQrBttn.addEventListener('click', function() {


    //kontrola vyplnenych poli
    
//sestaveni vcf
let vcf = `BEGIN:VCARD
VERSION:4.0
FN:Jiří Rysanek
N:Rysanek;Jiri;;;
BDAY:--1011
GENDER:M
EMAIL;TYPE=work:jiri.rysanek@vkontextu.cz
END:VCARD
`
    
    
    
    
    //request
    let getUrl = inUrl.value;
    let qrUrl = 'https://api.api-ninjas.com/v1/qrcode?format=svg&data=' + vcf;
    fetch(qrUrl, {
        method: 'GET',
        headers: {
            'x-api-key': 'SOYayEFfOQQs3Vxcdgu/hA==DBnngeaHWuNAXitX',
            'accept': 'image/svg+xml'
        }
    })



    .then(response => response.text()) // Použijte response.text() pro SVG data
    .then(svgData => {
        // Vložení SVG dat do elementu s ID "mySvg" na stránce
        let myImage = document.getElementById('qr_image');
        myImage.innerHTML = svgData;
        myImage.children[0].setAttribute('width', '100%');
        myImage.children[0].setAttribute('height', '100%');
        
        console.log(vcf)
    })
    .catch(error => console.error('Chyba:', error));

});