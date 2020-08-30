import $ from "jquery";

//accordian expand and contract mechanism using jquery
$('body').on('click', '.accordian-heading', function(e) {
    $('.accordian').find('.accordian-content').stop().slideUp(500);
    $(this).closest('.accordian').find('.accordian-content').stop().slideToggle();
});

//accordian sign rotation logic
$('.accordian-sign').click(function(){
    this.classList.toggle('rotated');
});

//floating navigation menu links with smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});