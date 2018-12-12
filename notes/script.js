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

$('#thing').click(function(){
    //Give it a second
});