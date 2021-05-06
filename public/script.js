$(document).ready(function(){
    $("#kelar").click(function(){
        $('#icon_kelar').removeClass('fa-check');
        $('#icon_kelar').addClass('fa-spinner');
        $('#icon_kelar').addClass('fa-pulse');
        $('#kelar').prop('disabled', true);
        setTimeout(function() {
            window.location.reload();
        }, 1500);
        $.ajax({
            url: '/gilired-task/api/kelar',
            type: 'post',
            data: {
                'giliran' : document.getElementById('nextgiliran').innerHTML,
            },
        });
    });
});  