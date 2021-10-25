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
        var data =
            `Cau già dao sắc lại non, nạ dòng trang điểm vẫn còn như xưa.
            Mộc mạc ưa nhìn lọ trang điểm.
            Đi giày cao đế, ngồi ghế bành tượng.
            Áo chân cáy, váy chân sứa.
            Nhiều tiền may áo năm tà, ít tiền may viền hố bâu.
            Mua váy phòng khi cả dạ.
            Trẻ may ra, già may vào.
            Đông the, hè đụp.
            Ăn lấy chắc, mặc lấy bền.
            Cơm là gạo, áo là tiền.
            Được no bụng, còn lo ấm cật.
            Giầy thừa, guốc thiếu.
            Lụa tốt xem biên.
            Khéo vá vai, tài vá nách.Sai sải áo vải bền lâu.
            Áo rách thay vai, quần rách đổi ống.
            Tay đâm ra, tà đâm xuống.
            Có trăng, phụ đèn.
            Ăn mít bỏ sơ, ăn cá bỏ lờ.
            Chanh chua chớ phụ, ngọt bòng chớ ham.
            Ông sư có ngãi, bà vãi có nghì.
            Đường mòn ân nghĩa không mòn.
            Bền người hơn bền của.
            Tiền ngắn, mặt dài.
            Tiền là gạch, ngãi là vàng.
            Thèm lòng, chẳng ai thèm thịt.
            Vị tình vị nghĩa, ai vị đĩa xôi đầy.
            Uống nước nhớ kẻ đào giếng.
            Uống nước nhớ nguồn.
            Ăn bát cơm dẻo, nhớ nẻo đường đi.
            Nhờ phèn nước mới trong.
            Sợ người ở phải, hãi người cho ăn.
            Có ơn phải sợ, có nợ phải trả.
            Anh ngủ em thức, em chực, anh đi nằm.
            Anh em trong nhà đóng cửa dạy nhau.
            Anh thuận em hòa là nhà có phúc.
            Chẳng khôn thể chị lâu ngày, chị đái ra váy cũng tày em khôn.
            Cắt dây bầu dây bí, ai nỡ cắt dây chị dây em.
            Em khôn cũng là em chị, chị dại cũng là chị em.
            Thương chồng phải bồng con ghẻ.
            Cây muốn lặng gió chẳng đừng.
            Đánh chó, ngó chủ nhà.
            Ném chuột, ghê chạn bát.
            Bán bụi tre, đè bụi hóp.
            Dùi đánh đục thì đục đánh chạm.
            Ở giữa chết chẹt.
            Trâu bò húc nhau, ruồi muỗi chết.
            Có đắt hàng tôi, mới trôi hàng bà.
            Được mùa thầy chùa no bụng.
            Dân được mùa, sãi chùa có oản.
            Làng được mùa, sãi chùa ăn no.`;
        data = data.split('\n');
        data = data.map(i => i.trim());
        return data;
    }

    function addNewCart() {
        var data = getData();
        numOfCards = data.length;
        var str = '';
        var max = data.length;
        max = 3;
        for (let index = 0; index < max; index++) {
            const element = data[index];
            var imgid = getRndInteger(1, 600);
            var attr_image = `data-src="asset/pics/` + imgid + `.jpeg"`;
            if (index == max - 1) {
                attr_image = `src="asset/pics/` + imgid + `.jpeg"`;
            }
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