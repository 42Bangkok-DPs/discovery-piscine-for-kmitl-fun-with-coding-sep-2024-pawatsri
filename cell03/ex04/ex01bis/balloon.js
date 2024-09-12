$(document).ready(function(){
    const $balloon = $('.balloon');
    const rgb = ['red', 'green', 'blue'];
    let i = 1;
    let size = 200;

    $balloon.on('click', function(){
        size += 10;
        if (size > 420){
            size = 200;
        }
        $balloon.css({
            width: `${size}px`,  
            height: `${size}px`, 
            backgroundColor: rgb[i]
        });
        i = (i + 1) % rgb.length; 
    });

    $balloon.on('mouseleave', function() {
        size -= 5;
        if (size < 200) {
            size = 200;
        }
        $balloon.css({
            width: `${size}px`,  
            height: `${size}px`, 
            backgroundColor: rgb[i]
        });
        i = (i - 1 + rgb.length) % rgb.length; 
    });
});
