const themeBttn = document.getElementById("mode_toggler");

    const root = document.querySelector(":root");

    let colorMode = "dark";
    function toggler(){
      if (colorMode == "dark"){
        root.style.setProperty("--background","#aaabab");
        root.style.setProperty("--background_01","#cccdcd");
        root.style.setProperty("--foreground","#122323");
        colorMode = "light";
      }else{
        root.style.setProperty("--background","#122323");
        root.style.setProperty("--background_01","#233434");
        root.style.setProperty("--foreground","#aaabab");
        colorMode = "dark";
      }
    };
    themeBttn.addEventListener("click", function(){
      toggler();
    });
    