var pauseBttn = document.getElementById("start_stop");

    var merkurOrbit = document.getElementById("merkur_orbit");
    var venuseOrbit = document.getElementById("venuse_orbit");
    var earthOrbit = document.getElementById("earth_orbit");
    var moonOrbit = document.getElementById("moon_orbit");
    var pressed = "0";
    function pausePlay(){
      switch (pressed) {
        case "0":
          merkurOrbit.classList.add("pause");
          pauseBttn.innerHTML = "stop venus";
          pressed = "1";
          break;
        case "1":
          venuseOrbit.classList.add("pause");
          pauseBttn.innerHTML = "stop moon";
          pressed = "2";
          break;
        case "2":
          moonOrbit.classList.add("pause");
          pauseBttn.innerHTML = "stop earth";
          pressed = "3";
          break;
        case "3":
          earthOrbit.classList.add("pause");
          pauseBttn.innerHTML = "play all";
          pressed = "4";
          break
        case "4":
          merkurOrbit.classList.remove("pause");
          venuseOrbit.classList.remove("pause");
          earthOrbit.classList.remove("pause");
          moonOrbit.classList.remove("pause");
          pauseBttn.innerHTML = "stop mercury";
          pressed = "0";
          break;
      }
    }
    pauseBttn.addEventListener("click", function(){
      pausePlay();
    });