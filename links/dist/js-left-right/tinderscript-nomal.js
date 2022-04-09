$ = jQuery;
$(document).ready(function() {

    var animating = false;
    var cardsCounter = 0;
    var numOfCards = 6;
    var decisionVal = 80;
    var pullDeltaX = 0;
    var deg = 0;
    var $card, $cardReject, $cardLike;

    addNewCart();

    function pullChange() {
        animating = true;
        deg = pullDeltaX / 10;
        $card.css("transform", "translateX(" + pullDeltaX + "px) rotate(" + deg + "deg)");

        var opacity = pullDeltaX / 100;
        var rejectOpacity = (opacity >= 0) ? 0 : Math.abs(opacity);
        var likeOpacity = (opacity <= 0) ? 0 : opacity;
        $cardReject.css("opacity", rejectOpacity);
        $cardLike.css("opacity", likeOpacity);
    };

    function release() {

        if (pullDeltaX >= decisionVal) {
            $card.addClass("to-right");
        } else if (pullDeltaX <= -decisionVal) {
            $card.addClass("to-left");
        }

        if (Math.abs(pullDeltaX) >= decisionVal) {
            $card.addClass("inactive");

            setTimeout(function() {
                $card.addClass("below").removeClass("inactive to-left to-right");
                cardsCounter++;
                if (cardsCounter === numOfCards) {
                    cardsCounter = 0;
                    $(".demo__card").removeClass("below");
                }
            }, 300);
        }

        if (Math.abs(pullDeltaX) < decisionVal) {
            $card.addClass("reset");
        }

        setTimeout(function() {
            $card.attr("style", "").removeClass("reset")
                .find(".demo__card__choice").attr("style", "");

            pullDeltaX = 0;
            animating = false;
        }, 300);
    };

    $(document).on("dblclick", ".demo__card__drag", function(e) {
        var newImg = imgNewRandom();
        $(this).closest('.demo__card').find('.demo__card__img img').attr('src', newImg)
    })
    $(document).on("mousedown touchstart", ".demo__card:not(.inactive)", function(e) {
        if (animating) return;

        $card = $(this);
        $cardReject = $(".demo__card__choice.m--reject", $card);
        $cardLike = $(".demo__card__choice.m--like", $card);
        var startX = e.pageX || e.originalEvent.touches[0].pageX;

        var getId = parseInt($card.attr('data-vid'));
        var one = getId - 1;
        var atLazy = $('.demo__card[data-vid="' + one + '"]').find('.lazy');
        if (atLazy.length > 0) {
            atLazy.removeClass('lazy')
            var src = atLazy.attr('data-src');
            atLazy.attr("src", src);
        }


        $(document).on("mousemove touchmove", function(e) {
            var x = e.pageX || e.originalEvent.touches[0].pageX;
            pullDeltaX = (x - startX);
            if (!pullDeltaX) return;
            pullChange();
        });

        $(document).on("mouseup touchend", function() {
            $(document).off("mousemove touchmove mouseup touchend");
            if (!pullDeltaX) return; // prevents from rapid click events
            release();
        });
    });


    function getData() {
        var data = infor ? infor : "";
        data = data.split('\n');
        data = data.filter(i => i.trim());
        return data;
    }

    function imgNewRandom() {
        var imgid = getRndInteger(1, 600);
        return glb_root + `/wp-content/themes/my-theme/pics/` + imgid + `.jpeg`;
    }

    function addNewCart() {
        var data = getData();
        if (data.length == 0) {
            data = ['Cuối cùng mọi thứ sẽ ổn. Nếu nó chưa ổn, thì chưa phải cuối cùng.', 'Ngủ 6 tiếng là đàn ông, ngủ 7 tiếng là đàn bà, ngủ 8 tiếng là những kẻ ngu dốt khờ khạo.'];
        }
        // data.sort();
        numOfCards = data.length;
        var str = '';
        var max = data.length;
        // max = 3;
        // alert(max)
        for (let index = max - 1; index >= 0; index = index - 1) {
            // alert(index)
            const element = data[index];
            var imgid = getRndInteger(1, 600);
            var attr_image = `data-src="` + glb_root + `/wp-content/themes/my-theme/pics/` + imgid + `.jpeg"`;
            // if (index == max - 1) {
            attr_image = `src="` + glb_root + `/wp-content/themes/my-theme/pics/` + imgid + `.jpeg"`;
            // }
            str +=
                `<div class="demo__card" data-vid="` + index + `">
                <div class="demo__card__top brown">
                    <div class="demo__card__img">
                    <img class="avatar lazy" ` + attr_image + `>
                    </div>
                    <p class="demo__card__name">` + index + `</p>
                </div>
                <div class="demo__card__btm">
                    <p class="demo__card__we">` + data[index] + `</p>
                </div>
                <div class="demo__card__choice m--reject"></div>
                <div class="demo__card__choice m--like"></div>
                <div class="demo__card__drag"></div>
            </div>`;
        }
        $('#contents').prepend($(str));
        setNumberCards($('#contents .demo__card').length)
    }

    function setNumberCards(numb) {
        numOfCards = numb;
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});