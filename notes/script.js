/* jQuery is a JavaScript library written to simplify the process of writing JavaScript code

   jQuery allows you to change things but doesn't keep track of the changes
   This gets to be confusing with larger apps
   React, Angular & Vue work better in the context of larger apps

   jQuery directly manipulates the DOM, which uses a lot of resources
   React & the others use a virtual DOM instead
*/

console.log($); // $ means you're writing jQuery

console.log(document.getElementsByTagName('div'));
console.log(document.querySelector('.container'));
console.log(document.getElementsByClassName('.container'));

console.dir($('.container'));
console.log($('#row p'))

// jQuery targets with CSS rules & adds listeners as methods
$('#hide').click(function(){
    $('#thing').hide();
});

$('#show').click(function(){
    $('#thing').show();
});

$('#toggle').click(function(){
    $('#thing').toggle();
});

$('#html').click(function(){
    $('#thing').html("<p>FLASH THE MESSAGE</p>");
});

$('#text').click(function(){
    $('#thing').text("<p>LSD</p>");
});

$('#css').click(function(){
    $('#thing').css({
        "background-color":"green",
        "border-radius":"5px",
        "font-size":"30px"
    }); //Takes a JavaScript object: Key = String for CSS Property & Value = What You Want To Apply
});

$('#add-class').click(function(){
    $('#thing').addClass('btn-danger');
});

$('#remove-class').click(function(){
    $('#thing').removeClass('btn-danger');
});

$('#toggle-class').click(function(){
    $('#thing').toggleClass('btn-danger');
});

$('#prepend').click(function(){
    $('#thing').prepend('WOOF');
});

$('#append').click(function(){
    $('#thing').append('MEOW');
});

$('#fade-out').click(function(){
    $('#thing').fadeToggle(300);
})

$('#slide').click(function(){
    $('#thing').slideToggle(300);
})

$('#animate').click(function(){
    $('#thing').animate({
        "background-color":"chartreuse",
        "height":"200px",
        "margin-left":"100px",
    },300);
})

$('#fade-in').click(function(){
    $("#dizzang").fadeIn();
})

$('#position').click(function(){
    let pos = $('#thing').position();
    $('#thing').html(`Position: ${pos.top} ${pos.left}`);
});

$('#wrap-all').click(function(){
    $('.btn').wrapAll("<ul><li></li></ul>");
});

$('#replace').click(function(){
    $('#thing').replaceWith("<button class='btn btn-warning' id='thing'>DOG</button>");
});

$('#squish').click(function(){
    $('#thing').css({
        "width":"50px",
        "height":"200px",
    })
});