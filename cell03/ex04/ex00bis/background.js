function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$(document).ready(function() {
    $('#changeBG').click(function() {
        const randomColor = getRandomColor(); 
        $('body').css('background-color', randomColor);  
    });
});
