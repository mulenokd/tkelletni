$(document).ready(function(){

    function resize(){

       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
    }

    $(window).resize(resize);
    resize();

    $.fn.placeholder = function() {
        if(typeof document.createElement("input").placeholder == 'undefined') {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });
            });
        }
    }
    $.fn.placeholder();

    var myPlace = {lat: 54.003005, lng: 86.641193};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: myPlace,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      scrollwheel: false,
      zoomControl: true,
    });

    var marker = new google.maps.Marker({
      position: myPlace,
        map: map,
        icon: {
            scaledSize: new google.maps.Size(40, 58), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(23,50), // anchor
        },
        title: "Интеллект"
    });

    $(document).ready(function() {
        $(".tab").click(function () { 
            $(".tab").removeClass("active");
            $(this).addClass("active");
            var id = $(this).attr("data-id");
            $(".price").addClass("hide");
            $("#"+id).removeClass("hide");
        });

        $(".fancy").click(function(){
                $("input[name=device]").val($(this).attr("data-popup"));
        });

        if( typeof autosize == "function" )
        autosize(document.querySelectorAll('textarea'));
    });

});