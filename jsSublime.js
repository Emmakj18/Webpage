$(document).ready(function() {
    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow');
        $('.buyspecific, .slide').fadeOut('slow');
    });
    $('.cancelbtn').click(function() {
        $('.panel').slideToggle('slow');
        $('.buyspecific, .slide').fadeIn('slow');
    });
    $(document).ready(function() {
    var header = $('.background');
    var backgrounds = new Array(
        'url("https://upload.wikimedia.org/wikipedia/commons/6/69/Raspberries05.jpg")',
        'url("http://i.huffpost.com/gen/1016565/images/o-LEMON-BENEFITS-facebook.jpg")',
        'url("http://alexandersmkt.com/wp-content/uploads/2014/03/grapefruit.jpg")',
        'url("http://www.maninthehatmusic.co.uk/wp-content/uploads/2014/11/wood-panel-background.jpg")'
    );
   var current = 0;

    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        header.css('background-image',backgrounds[current]);
        //$('.background').fadeTo('backgrounds', 'slow');//
    }

    setInterval(nextBackground, 5000);

header.css('background-image', backgrounds[0]);
    });

    $('.login').click(function() {
        $('.panel').slideToggle('slow');
        $('.buyspecific, .slide').fadeIn('slow');
        var uname = $('input[name= uname]').val();
        $('.hello').append('<div class="item">'+ uname + '</div>');
    });
    $(document).on('click', '.item', function() {
        $('.item').remove();
        $('input[name=uname]').remove();
        $('.replace').append('<input type="text" placeholder="Enter Username" name="uname" required><br>');//also make it reset the uname input//
    });
});
