$(document).ready(function() {

    var animating = false;
    var cardsCounter = 0;
    var numOfCards = 6;
    var decisionVal = 80;
    var pullDeltaX = 0;
    var deg = 0;
    var $card, $cardReject, $cardLike;

    // addNewCart();
    getFileData()

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

    $(document).on("click", ".answer li", function(e) {

        var an = $(this).closest('.answer').attr('data-right');

        var index = $(this).index();
        $(this).closest('.answer').find('li').removeClass('right');
        $(this).closest('.answer').find('li').removeClass('wrong');

        if (index + 1 == an) {
            $(this).addClass('right');
        } else {
            $(this).addClass('wrong');
        }
        var id_in_list = $(this).closest('.demo__card ').attr('data-vid');
        checkSet(id_in_list, index + 1, parseInt(an));

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
        for (let index = 0; index < atLazy.length; index++) {
            const element = $(atLazy[index]);
            element.removeClass('lazy')
            var src = element.attr('data-src');
            element.attr("src", src);

        }
        // if (atLazy.length > 0) {
        //     atLazy.removeClass('lazy')
        //     var src = atLazy.attr('data-src');
        //     atLazy.attr("src", src);
        // }


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


    function getFileData() {
        // $.getJSON("asset/listQuestion_small.json", function(data) {
        $.getJSON("asset/listQuestion_ans.json", function(data) {
                //console.log("success");
                // console.log(data)
                addNewCart(data);

            }).done(function() {
                //console.log("second success");
            })
            .fail(function() {
                //console.log("error");
            })
            .always(function() {
                //console.log("complete");
            });
    }

    function getData() {

        var data = [{
                "0": "Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là gì?",
                "1": "Phần mặt đường và lề đường.",
                "2": "Phần đường xe chạy.",
                "3": "Phần đường xe cơ giới.",
                "more": {
                    "7": "2",
                    "17": "Phần đường xe chạy là phần của đường bộ được sử dụng cho phương tiện giao thông qua lại."
                }
            },
            {
                "0": "“Làn đường” là gì?",
                "1": "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "2": "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn.",
                "3": "Là đường cho xe ô tô chạy, dừng, đỗ an toàn.",
                "more": {
                    "7": "2",
                    "17": "Làn đường có bề rộng đủ cho xe chạy an toàn."
                }
            }, {
                "0": "Trong tình huống dưới đây, xe con màu vàng vượt xe con màu đỏ là đúng quy tắc giao thông hay không?",
                "1": "Đúng.",
                "2": "Không đúng.",
                "more": {
                    "7": "1",
                    "pic": "q599.png",
                    "17": "Xe màu đỏ đang tránh về phía bên phải, xe màu vàng đã có tín hiệu xin vượt, vạch kẻ đường theo hướng xe chạy là nét đứt , không có xe ngược chiều. Nên xe vàng vượt đúng quy tắc giao thông."
                }
            }
        ];
        // console.log(data);
        return data;
        //data = data.split('\n');
        //data = data.map(i => i.trim());
        return data;
    }

    function addNewCart(data) {
        // var data = getData();
        data = changeSort(data);
        numOfCards = data.length;
        var str = '';
        var max = data.length;
        // max = 2;
        for (let index = 0; index < max; index++) {
            //console.log(data[index][0])
            //const element = data[index][0];
            var text_question = max - index + ': ' + data[index][0];

            var child = data[index];
            var listtext = [];
            // console.log(child)
            for (var i in child) {
                // console.log(i)
                if (i != '0' && i != 'more') {
                    listtext.push(child[i]);
                }
            }
            var for_right = child['more'][7];
            var is_right = '';
            switch (for_right) {
                case '1':
                    is_right = 1
                    break;
                case '2':
                    is_right = 2
                    break;
                case '4':
                    is_right = 3
                    break;
                case '8':
                    is_right = 4
                    break;
                default:
                    break;
            }
            listtext = listtext.join('</li><li>');
            listtext = '<ol class="normal"><li>' + listtext + '</li></ol>';
            var pic_quest = '';
            // console.log(child['more']['pic'])
            if (typeof child['more']['pic'] != 'undefined') {
                pic_quest = child['more']['pic'];
                pic_quest = `<img class="pic-ques lazy" data-src="https://demo.03way.net/600/images/` + pic_quest + `">`;
            }
            // console.log(listtext)
            // var text_ans = data[index][1] + '<br/>' + data[index][2];
            var imgid = getRndInteger(1, 600);
            var attr_image = `data-src="asset/pics/` + imgid + `.jpeg"`;
            if (index == max - 1) {
                attr_image = `src="asset/pics/` + imgid + `.jpeg"`;
            }
            var below_class = '';
            var last_id = parseInt(getLocal('last_id')) - 1;
            // var last_choose = getAt(last_id);

            // if (last_choose.length > 0) {
            //     console.log(last_choose[0].text)
            // }

            // if (index > 500) {
            if (index > last_id) {
                below_class = 'below';
            }
            if (index == last_id) {
                attr_image = `src="asset/pics/` + imgid + `.jpeg"`;
            }
            str +=
                `<div class="demo__card ` + below_class + `" data-vid="` + index + `">
                <div class="demo__card__top brown">
                    <div class="demo__card__img">
                    <img class="avatar lazy" ` + attr_image + `>
                    </div>
                    <p class="demo__card__name">` + index + `</p>
                </div>
                <div class="demo__card__btm">
                    <p class="demo__card__we">` + text_question + `</p>
                    <div class="answer" data-right="` + is_right + `">` + pic_quest + listtext + `</div>
                    
                </div>
                <div class="demo__card__choice m--reject"></div>
                <div class="demo__card__choice m--like"></div>
                <div class="demo__card__drag"></div>
            </div>`;
        }
        $('#contents').prepend($(str));
        setNumberCards($('#contents .demo__card').length)
    }

    function changeSort(ob) {
        var list = [];
        var max = ob.length;
        for (let index = 1; index <= max; index++) {
            list.push(ob[max - index]);
        }
        return list;
    }

    function setNumberCards(numb) {
        numOfCards = numb;
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});

//"atIndexCurrent"
function setLocalJson(key, data) {
    localStorage.setItem(key, AddToLocalStorage(data));
}

function setLocal(key, data) {
    localStorage.setItem(key, data);
}

function getLocal(key) {
    return localStorage.getItem(key);
}

function getLocalJson(key) {
    return JSON.parse(localStorage.getItem(key)) == null ? [] : JSON.parse(localStorage.getItem(key));
}

function AddToLocalStorage(data) {
    if (typeof data != "string") { data = JSON.stringify(data); }
    return data;
}

function checkSet(id, text, view) {
    if (checkAt(id)) {
        deleteId(id);
        setIdText(id, text, view);
    } else {
        setIdText(id, text, view);
    }
}

function setIdText(id, text, view) {
    setLocal('last_id', id);
    if (id == null) { return }
    var myData = getLocalJson("added-items");

    var temp = {};
    temp.id = id;
    temp.is_right = (text == view) ? 1 : 0;
    temp.text = text; // selected
    temp.view = view; //is right

    if (myData == null) {
        localStorage.setItem('added-items', AddToLocalStorage([temp]));
    } else {
        myData.push(temp);
        localStorage.setItem('added-items', AddToLocalStorage(myData));
    }
}

function deleteId(id) {
    var myData = getLocalJson("added-items");
    if (myData.length != 0) {
        var newArray = myData.filter(function(element) {
            return element.id !== id;
        });
        localStorage.setItem('added-items', AddToLocalStorage(newArray));
    }
}

function checkAt(id) {
    var myData = getLocalJson("added-items");
    var atId = myData.filter(function(element) {
        return element.id == id;
    });
    if (atId.length == 0) {
        return false;
    } else {
        return true;
    }
}

function getAt(id) {
    var myData = getLocalJson("added-items");
    var atId = myData.filter(function(element) {
        return element.id == id;
    });
    return atId;
}