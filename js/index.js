

function lightup(id, count) {
    var f = document.getElementById(id).children;

   setTimeout(function() {
   	for (i = 0; i <= f.length - 1; i++) {
        f[i].style.opacity = '50%';
    }
    setTimeout(function() {
         for (i = 0; i <= f.length - 1; i++) {
                 f[i].style.opacity = '100%';
             }
             if (count > 1) {
             	lightup(id, count-1);
             }
      }, 100);

   }, 100);
    
   
}
