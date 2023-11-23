
let mojeData;
let country = ['Czech Republic', 'Slovakia', 'Hungary', 'Poland', 'Austria', 'Germany'];
let countryNum = country.length -1;

console.log(countryNum);

// OTESTOVANI JESTLI BYL PROVEDENY REQUEST
if(!document.cookie.includes("requested=true")) {
  
  // PROVEDE SE POKUD NENI NASTAVENA COOKIE
  document.cookie = "requested=true; max-age=3600;";
  
  for (let i = 0; i <= countryNum; i++) {
      
      let apiUrl = 'https://api.api-ninjas.com/v1/inflation?country=' + country[i];

  // REQUEST NA API
  fetch(apiUrl, {
    method: 'GET',
    headers: {
        'x-api-key': 'SOYayEFfOQQs3Vxcdgu/hA==DBnngeaHWuNAXitX'
    }
  })
  .then(response => response.json())
  .then(data => {
      
      
      // VYTVORENI OBJEKTU S DATY
      // uložení dat do cookies
      mojeData = data[0];
      document.cookie = `${i}country=${mojeData.country}; max-age=86400;`;
      document.cookie = `${i}month=${mojeData.monthly_rate_pct}; max-age=86400;`;
      document.cookie = `${i}year=${mojeData.yearly_rate_pct}; max-age=86400;`;
      
  })
  .catch(error => console.error('Chyba:', error));
  };
}else{
    console.log("request se neprovedl");
};