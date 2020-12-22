$(document).click(function(e) {
    if ($(e.target).closest("#profile_menu").length > 0) {
        return false;
    }
    if ($(e.target).closest("#item-3").length > 0) {
        return false;
    }
    if ($(e.target).closest("#more-menu").length > 0) {
        return false;
    }
    if ($(e.target).closest("#more_menu_btn").length > 0) {
        return false;
    }
    $('#profile_menu').removeClass('active');
    $('#more-menu').removeClass('active');
});

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loading-overlay").style.visibility = "visible";
    } else {
        document.querySelector("#loading-overlay").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};


$(document).on('click', 'ul li', function() {
    $(this).addClass('active').siblings().removeClass('active')


});

$('#more_menu_btn').click(function() {
    $('#more-menu').toggleClass('active');

});


$('#item-3').click(function() {
    $('#profile_menu').toggleClass('active');
});

var btn = document.querySelector('#item-1')
var btn2 = document.querySelector('#btn2')
var targett = document.querySelector("#search")

var more_menu_btn = document.querySelector('#menu-4')
var more_menu = document.querySelector('#more-menu')
var pro_menu = document.querySelector('#profile_menu')
var pro_menu_btn = document.querySelector('#item-3')

function Show_search() {
    document.getElementById('item-2').style.display = "block";
    targett.style.transform = 'scale(1)';
    document.getElementById('item-2').setAttribute('onclick', 'Hide_search()')
    btn.style.display = 'none'
    targett.style.display = 'flex'
}

function Hide_search() {
    document.getElementById('item-2').style.display = "none";
    btn.style.display = 'block'
    targett.style.transform = 'scale(0)';
    targett.style.display = 'none'
    btn.setAttribute('onclick', 'Show_search()')
}