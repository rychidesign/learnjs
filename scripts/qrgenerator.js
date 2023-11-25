const getQrBttn = document.getElementById('generate_qr');

getQrBttn.addEventListener('click', function() {
    const inName = document.getElementById('in_name').value;
    const inSurename = document.getElementById('in_surename').value;
    const inCompany = document.getElementById('in_company').value;
    const inPhone = document.getElementById('in_phone').value;
    const inEmail = document.getElementById('in_email').value;
    var qrcode = new QRCode({
        content:
            "BEGIN:VCARD\n" +
            "VERSION:4.0\n" +
            "FN:" + inName + " " + inSurename + "\n" +
            "N:" + inSurename + ";" + inName + ";;;\n" +
            "ORG:" + inCompany + "\n" +
            "TEL;TYPE=CELL:" + inPhone + "\n" +
            "EMAIL;TYPE=work:" + inEmail + "\n" +
            "END:VCARD",
        container: "svg-viewbox",
        color: "#000000",
        background: "#aaabab",
        join: true
    });

    var svg = qrcode.svg();
    document.getElementById("qr_image").innerHTML = svg;
});

// ULOZENI OBRAZKU

document.getElementById('save_qr_bttn').addEventListener('click', function() {
            let svg = document.querySelector('svg');
            let svgData = new XMLSerializer().serializeToString(svg);

            let blob = new Blob([svgData], { type: 'image/svg+xml' });
            let url = URL.createObjectURL(blob);

            let a = document.createElement('a');
            a.href = url;
            a.download = 'obrazek.svg';
            document.body.appendChild(a);
            a.click();

            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });



// SDILENI OBRAZKU

document.getElementById('share_qr_bttn').addEventListener('click', function() {
            let svg = document.querySelector('svg');
            var svgData = new XMLSerializer().serializeToString(svg);

            // Vytvoření datové URL z SVG
            let blob = new Blob([svgData], { type: 'image/svg+xml' });
            let url = URL.createObjectURL(blob);

            // Použití Web Share API, pokud je dostupné
            if (navigator.share) {
                navigator.share({
                    title: 'Sdílení SVG',
                    text: 'Obrázek pro sdílení',
                    url: url
                })
                .then(() => console.log('Sdílení bylo úspěšné'))
                .catch((error) => console.log('Chyba při sdílení', error));
            } else {
                // Pokud Web Share API není k dispozici, otevře se standardní dialog
                window.location.href = 'mailto:?body=' + encodeURIComponent('Zde je odkaz na SVG obrázek: ' + url);
            }
        });
