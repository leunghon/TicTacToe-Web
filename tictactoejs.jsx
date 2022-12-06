function checkplayer2() {
    var checkBox = document.getElementById("playercheck");
    var text = document.getElementById("player2");

    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }