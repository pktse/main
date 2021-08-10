function lightup(id) {
    var f = document.getElementById(id).children;
    for (i = 0; i <= f.length - 1; i++) {
        f[i].style.opacity = '50%';
    }
   setTimeout(function() {
         for (i = 0; i <= f.length - 1; i++) {
                 f[i].style.opacity = '100%';
             }
      }, 100);
}
