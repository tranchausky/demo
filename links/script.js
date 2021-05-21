$(document).ready(function () {
    var height = $('.navbar-header').height();
    $('#start-content').css('margin-top', height);
    $('#myNavbar a').click(function () {

        if (user_ID == '') {
            alert('Need Login First')
            return
        }

        var atrHref = $(this).attr('href')
        $('.v-m-content').addClass('hide');
        $(atrHref).removeClass('hide');

        $('#myNavbar li').removeClass('active');
        $(this).closest('li').addClass('active');

        if (atrHref == '#calendar') {
            getAllCalendar()
        }
        if (atrHref == '#photo') {
            $('.list-select-option-photo').html(buildSelectPhotoCat(''))
            $('.list-cat-btn').html('<option value="">All</option>' + buildSelectPhotoCat(''))
            getListPhoto()
        }
        if (atrHref == '#todo') {
            getListTodoCompleted()
            getListTodoNew()
        }
        if (atrHref == '#swot') {
            getListSWOT()
        }

    })

    // $("document").on('click', '#tb-calendar tr td', function() {
    // $('#tb-calendar tr').on('click','td', function () {
    jQuery(document.body).on('click', '#tb-calendar tr td', function (event) {
        // alert(123)
        // alert('123')
        checkDetailCalendar(this)
    })

    //calendar reload 
    $('.prev-month,.next-month').click(function () {
        hideEventCalendar()
        getAllCalendar()
    })
    jQuery(document.body).on('click', '#photo .list-image img', function (event) {
        return
        // $('#photo .list-image img').click(function() {
        var src = $(this).attr('str-big')
        // alert(src)
        $('#image-img-photo').attr('src', src)
    })

    $('#add-task').click(function () {
        pushTodo()
    })

    $(document.body).on('click', '.list-todo-new .edit', function (event) {
        var text = $(this).closest('.at-task').find('label').eq(0).text()
        var key = $(this).closest('.at-task').attr('data-key')
        $(this).closest('.at-task').after(addEventTodo(text, key))
    })
    $(document.body).on('click', '.list-todo-new .save', function (event) {
        var key = $(this).closest('.form-event').attr('data-key')
        var text = $(this).closest('.form-event').find('input').eq(0).val()
        updateTodo(text, 'new', key);
    })
    $(document.body).on('click', '.list-todo-new input[type="checkbox"]', function (event) {
        var isCheck = $(this).is(":checked");
        if (isCheck == true) {
            var key = $(this).closest('.at-task').attr('data-key')
            updateTodo(allTaskNew[key]['task'], 'completed', key)
        }
    })
    $(document.body).on('click', '.list-todo-completed input[type="checkbox"]', function (event) {
        var isCheck = $(this).is(":checked");
        if (isCheck == true) {
            var key = $(this).closest('.at-task').attr('data-key')
            updateTodo(allTaskComplete[key]['task'], 'new', key)
        }
    })

    $(document.body).on('click', '.list-todo-completed .delete', function (event) {
        var text = $(this).closest('.at-task').find('label').eq(0).text()
        var key = $(this).closest('.at-task').attr('data-key')
        updateTodo(allTaskComplete[key]['task'], 'delete', key)
    })


    $(document.body).on('change', '.list-cat-btn', function (event) {
        getListPhoto()
    })
    $(document.body).on('change', '.list-cat-btn-edit', function (event) {
        updatePhoto()
    })
    $(document.body).on('change', '#edit-private-photo', function (event) {
        updatePhoto()
    })


});

function addEventTodo(text, key) {
    var str = '<div class="form-event" data-key="' + key + '">' +
        '<div class="col-sm-9 text">' +
        '<input type="text" class="form-control" value="' + text + '">' +
        '</div>' +
        '<div class="col-sm-3">' +
        '<button class="btn btn-default save">Save</button>' +
        '</div>' +
        '</div>'
    return str
}

function changeLinkImage(link, cat_id, key) {
    // var src = $(this).attr('str-big')
    $('#image-img-photo').attr('src', link)
    $('#image-img-photo').attr('key-id', key)
    var d = new Date(allPhoto[key].time);

    $('#edit-private-photo').prop('checked', false);
    if (allPhoto[key].is_show == true) {
        $('#edit-private-photo').prop('checked', true);
    }
    $('#photo-time').html(d.toLocaleString())
    $('.list-cat-btn-edit').html('<option value="">All</option>' + buildSelectPhotoCat(cat_id))
    // var select = filterSelect(key, listOptionPhoto)
}

function checkDetailCalendar(at) {
    var attrDate = $(at).attr('data-day')
    if (attrDate == undefined) return

    showEventCalendar()

    $('#tb-calendar tr td').removeClass('at')
    $(at).addClass('at')

    // console.log($(this).attr('data-day'))
    // alert(attrDate)
    $('#date-at').val(attrDate)
    getCalendarDate(attrDate)
    if ($(at).hasClass('had')) {
        $('#btnAddCalen').hide()
        $('#btnUpdateCalen').show()

        var listDate = attrDate.split('/')
        var dateInt = new Date(listDate[2], listDate[1] - 1, listDate[0]).getTime();
        console.log('dateInt')
        console.log(dateInt)
        var temp = returnDateDatainALl(dateInt)
        keyCalendar = temp[1]
        $('#date-content').val(temp[0].content)

    } else {
        $('#btnAddCalen').show()
        $('#btnUpdateCalen').hide()
        $('#date-content').val('')
    }
}


var listOption = {};
listOption.note = {
    3.0: 'Different',
    3.1: 'Video/Movie',
    3.2: 'Motivation',
    3.3: 'Music',
    3.4: 'Game',
    3.5: 'Link',
}
listOption.work = {
    1.1: 'Php',
    1.2: 'Wordpress',
    1.3: 'Template',
    1.4: 'Hosting',
    1.5: 'Server',
    1.6: 'Config',
    1.7: 'Codeigniter',
    1.8: 'Work',
}
listOption.learning = {
    2.1: 'Developer',
    2.2: 'Language',
    2.3: 'Love',
    2.4: 'Family',
    2.5: 'Book',
    2.6: 'Author',
}

var listOptionPhoto = {
    1: 'Entertainment',
    2: 'Defferent',
    3: 'Health',
    4: 'Companys',
    5: 'Important',
    6: 'Works',
    7: 'Desktop',
    8: 'Want',
    9: 'People',
    10: 'Month',
    11: 'Year',
}



var firebaseConfig = {
    apiKey: "AIzaSyAuPuaJCP08o5JKW09F1XUWAy5GIiJ_cf8",
    authDomain: "link-save-d79c8.firebaseapp.com",
    databaseURL: "https://link-save-d79c8-default-rtdb.firebaseio.com",
    projectId: "link-save-d79c8",
    storageBucket: "link-save-d79c8.appspot.com",
    messagingSenderId: "567380847437",
    appId: "1:567380847437:web:eaca395ec37919f2f8a504",
    measurementId: "G-RWXYFREXB0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_ID = '';

//invokes firebase authentication. 

const auth = firebase.auth();
document.querySelector("#show-register").addEventListener("click", () => {
    showRegistration();
});

const showRegistration = () => {
    document.querySelector("#registration-page").classList.remove("hide");
    document.querySelector("#login-page").classList.add("hide");
    document.querySelector("#homepage").classList.add("hide");
    // document.querySelector(".show-signout").classList.add("hide");
    $('.show-signout').hide()
};

document.querySelector("#show-login").addEventListener("click", () => {
    showLogin();
});


const showLogin = () => {
    document.querySelector("#registration-page").classList.add("hide");
    document.querySelector("#login-page").classList.remove("hide");
    document.querySelector("#homepage").classList.add("hide");
    // document.querySelector(".show-signout").classList.add("hide");
    $('.show-signout').hide()
};

firebase.auth().onAuthStateChanged(user => {
    if (user) { } else {
        showLogin();
    }
})

document.querySelector(".signout").addEventListener("click", () => {
    signOut();
});

const register = () => {
    const email = document.querySelector("#registration-email").value;
    const reemail = document.querySelector("#registration-reemail").value;
    const password = document.querySelector("#registration-password").value;

    if (email.trim() == "") {
        alert("Enter Email");
    } else if (password.trim().length < 7) {
        alert("Password must be at least 7 characters");
    } else if (email != reemail) {
        alert("emails do not match");
    } else {
        auth
            .createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
                // ...
            });
    }
};

document.querySelector("#register").addEventListener("click", () => {
    register();
});

//register when you hit the enter key
document
    .querySelector("#registration-password")
    .addEventListener("keyup", (e) => {
        if (event.keyCode === 13) {
            e.preventDefault();

            register();
        }
    });

const login = () => {
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;

    if (email.trim() == "") {
        alert("Enter Email");
    } else if (password.trim() == "") {
        alert("Enter Password");
    } else {
        authenticate(email, password);
    }
};

document.querySelector("#login").addEventListener("click", () => {
    login();
});

//sign in when you hit enter
document
    .querySelector("#login-password")
    .addEventListener("keyup", (e) => {
        if (event.keyCode === 13) {
            e.preventDefault();

            login();
        }
    });

const authenticate = (email, password) => {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password);
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
};

const showHomepage = () => {
    document.querySelector("#registration-page").classList.add("hide");
    document.querySelector("#login-page").classList.add("hide");
    document.querySelector("#homepage").classList.remove("hide");
    // document.querySelector(".show-signout").classList.remove("hide");
    $('.show-signout').show()
};

const signOut = () => {
    firebase
        .auth()
        .signOut()
        .then(function () {
            location.reload();
        })
        .catch(function (error) {
            alert("error signing out, check network connection");
        });
};

auth.onAuthStateChanged((firebaseUser) => {

    if (firebaseUser) {
        showHomepage();
        user_ID = firebaseUser.uid
        $('#email_login').html(firebaseUser.email)
        loadData()
        buildSelect()
    }
});

document
    .querySelector("#forgot-password")
    .addEventListener("click", () => {
        const email = document.querySelector("#login-email").value;
        if (email.trim() == "") {
            alert("Enter Email");
        } else {
            forgotPassword(email);
        }
    });

const forgotPassword = (email) => {
    auth
        .sendPasswordResetEmail(email)
        .then(function () {
            alert("email sent");
        })
        .catch(function (error) {
            alert("invalid email or bad network connection");
        });
};

// Ready to function

// var config = {
//     apiKey: "AIzaSyAuPuaJCP08o5JKW09F1XUWAy5GIiJ_cf8",
// 	  authDomain: "link-save-d79c8.firebaseapp.com",
// 	  databaseURL: "https://link-save-d79c8-default-rtdb.firebaseio.com",
// 	  projectId: "link-save-d79c8",
// 	  storageBucket: "link-save-d79c8.appspot.com",
// 	  messagingSenderId: "567380847437",
// 	  appId: "1:567380847437:web:eaca395ec37919f2f8a504",
// 	  measurementId: "G-RWXYFREXB0"
// };

// firebase.initializeApp(config);

//create firebase database reference
var dbRef = firebase.database();
var contactsRef = null;
//var calendarsRef = dbRef.ref('calendars/useriD');
var calendarsRef = null;
var photoRef = null;
var lengthSize = 0
var last = {}
var last_Key = ''
var pageLength = 5
var allContacts = {}
var allCalendar = {}
var allPhoto = {}
var keyCalendar = '';
var allTaskNew = {}
var allTaskComplete = {}
var allSWOT = {}

function sortDescObj(list, key) {
    if (list == null || list == [] || list == {}) {
        return null
    }
    var sortedKeys = Object.keys(list).sort(function (a, b) {
        return list[a][key] > list[b][key] ? -1 : 1
    });
    var newObjectSort = {}
    var tem = []
    for (let index = 0; index < sortedKeys.length; index++) {
        tem = []
        //newObjectSort.push(list[sortedKeys[index]])
        newObjectSort[sortedKeys[index]] = list[sortedKeys[index]]
    }
    return newObjectSort
}

function loadData() {
    //load older conatcts as well as any newly added one...

    var previousLastKey = ''
    contactsRef = dbRef.ref('contacts/' + user_ID)
    // ".indexOn": ["time"],
    // contactsRef.orderByChild('time').limitToFirst(6).startAt(1609037750431).on("child_added", function(snap) {
    contactsRef.orderByChild('time').on("value", function (snapshot) {

        allContacts = snapshot.val()
        var newObjectSort = sortDescObj(allContacts, 'time')
        showContentContact(newObjectSort)
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

    /*
    contactsRef.orderBy('time').limit(pageLength).on("child_added", function(snap) {
            console.log("added", snap.key, snap.val());
            // //console.log(snap.val())
            // lengthSize++
            // console.log(lengthSize)
            // $('#size-list').html(lengthSize)
            // $('#contacts').append(contactHtmlFromObject(snap.val()));
            var data = snap.val()
            last_Key = snap.key
            last = data
            showContent(data)
                //return snap.val()
        })
        // console.log(data)
        // showContent(data)
        */
}

function showContentContact(data) {

    // data.sort((a, b) => (a.time > b.time) ? 1 : -1)

    // $('#size-list').html(lengthSize)
    // $('#contacts').append(contactHtmlFromObject(snap.val()));
    // lengthSize++
    lengthSize = Object.keys(data).length
    $('#size-list').html(lengthSize)
    for (var key in data) {
        $('#contacts').append(contactHtmlFromObject(data[key]));
    }
}

function getNextPage() {
    return
    console.log(user_ID + '---' + last_Key)
    contactsRef.orderByChild('userId').startAt(user_ID, last_Key).limitToFirst(pageLength).on("child_added", function (snap) {
        // console.log("added", snap.key, snap.val());
        // //console.log(snap.val())
        // lengthSize++
        // console.log(lengthSize)
        // $('#size-list').html(lengthSize)
        // $('#contacts').append(contactHtmlFromObject(snap.val()));
        last_Key = snap.key
        last = data
        var data = snap.val()
        showContent(data)
        //return snap.val()
    })
}

function nextPage(last) {
    return
    return ref.orderBy(field)
        .startAfter(last[field])
        .limit(pageSize);
}

function prevPage(first) {
    return
    return ref.orderBy(field)
        .endBefore(first[field])
        .limitToLast(pageSize);
}

//save contact
$('.addValue').on("click", function (event) {
    event.preventDefault();
    if ($('#name').val() != '' || $('#email').val() != '') {
        contactsRef.push({
            name: $('#name').val().replace(/<[^>]*>/ig, ""),
            email: $('#email').val().replace(/<[^>]*>/ig, ""),
            location: {
                city: $('#city').val().replace(/<[^>]*>/ig, ""),
                state: $('#state').val().replace(/<[^>]*>/ig, ""),
                zip: $('#zip').val().replace(/<[^>]*>/ig, "")
            },
            time: new Date().getTime(),
            userId: user_ID
        })
        contactForm.reset();
    } else {
        alert('Please fill atlease name or email!');
    }
});

function addCalendar() {

    var date = $('#date-at').val()
    var content = $('#date-content').val()
    calendarsRef = dbRef.ref('calendars/' + user_ID)

    // time: new Date().getTime(),
    // var monthYear = $('#monthyear').attr("month-year")
    var listDate = date.split('/')
    var dateInt = new Date(listDate[2], listDate[1] - 1, listDate[0]).getTime();

    calendarsRef.push({
        date: dateInt,
        content: content,
        time: new Date().getTime(),
        userId: user_ID
    })
    hideEventCalendar()
}

function updateCalendar() {
    var date = $('#date-at').val()
    var content = $('#date-content').val()
    var key = keyCalendar;

    var listDate = date.split('/')
    var dateInt = new Date(listDate[2], listDate[1] - 1, listDate[0]).getTime();

    calendarsRef = dbRef.ref('calendars/' + user_ID + "/" + key)
    calendarsRef.update({
        date: dateInt,
        content: content,
        time: new Date().getTime(),
        userId: user_ID
    })
    hideEventCalendar()
}

function hideEventCalendar() {
    $('.calendar-event').hide()
    $('.list-calendar').removeClass('limit')
}

function showEventCalendar() {

    $('.calendar-event').show()
    $('.list-calendar').addClass('limit')
}

function getAllCalendar() {
    calendarsRef = dbRef.ref('calendars/' + user_ID)

    var monthYear = $('#monthyear').attr("month-year")
    var listDate = monthYear.split('/')
    var lastDate = getDaysInMonth(listDate[0], listDate[1])

    var first = new Date(listDate[1], listDate[0], 1).getTime();
    var end = new Date(listDate[1], listDate[0], lastDate).getTime();


    console.log(listDate[1], listDate[0], 1)
    console.log(listDate[1], listDate[0], lastDate)

    console.log('first, end')
    // console.log('reaload')
    // alert('reaload')

    //calendarsRef.orderByChild('time').startAt(1608531964751).endAt(1608531997520).on("value", function (snapshot) {
    calendarsRef.orderByChild('date').startAt(first).endAt(end).on("value", function (snapshot) {
        console.log(snapshot.val());
        allCalendar = snapshot.val()

        // console.log(typeof allCalendar)
        // var output =  allCalendar.filter(employee => employee.date == "12/12/2012"); 
        // console.log(output)
        // var startDate = 1;
        // var atday = $('#date-at').val()
        for (var key in allCalendar) {
            // console.log(allCalendar[key])
            var dataAt = allCalendar[key]
            var day = dataAt.date

            var d = new Date(day);
            var temp = d.toLocaleDateString();

            var listDate = temp.split('/')
            //var dateInt = new Date(listDate[2], listDate[1] - 1, listDate[0]).getTime();
            var dmy = listDate[1] + '/' + listDate[0] + '/' + listDate[2]
            // console.log(temp)
            //var listDate = date.split('/')
            //var dateInt = new Date(listDate[2], listDate[1], listDate[0]).getTime();

            $('#tb-calendar').find('td[data-day="' + dmy + '"]').addClass('had')
            // console.log(day)
            // console.log($('#tb-calendar').find('td[data-day="' + day + '"]'))
        }
        // allCalendar.for
        buildListCalendar(allCalendar)

        // alert(lastDate)

    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
    return
    calendarsRef.on("child_added", function (snap) {


        //alert(1)
        console.log("added - calendar", snap.key, snap.val());
        //console.log(snap.val())
        // lengthSize++
        // console.log(lengthSize)
        // $('#size-list').html(lengthSize)
        // $('#contacts').append(contactHtmlFromObject(snap.val()));
        // last_Key = snap.key
        // last = data
        var data = snap.val()
        allCalendar[snap.key] = {}
        allCalendar[snap.key] = data
        // allCalendar.push(data)
        //$('#date-content').text(data.content)
    })
}

function buildListCalendar(dataIn) {

    if (dataIn != undefined) {
        if ($('#monthyear #number').length != 0) {
            $('#monthyear #number').html('(' + Object.keys(dataIn).length + ')')
        } else {
            $('#monthyear').append('<sup id="number">(' + Object.keys(dataIn).length + ')</sup>')
        }

    }

    dataIn = sortobjkey(dataIn, 'date')

    var str = '';
    for (var key in dataIn) {
        str += '<li>'
        // console.log(allCalendar[key])
        var dataAt = dataIn[key]
        var day = dataAt.date
        // $('#tb-calendar').find('td[data-day="'+day+'"]').addClass('had')
        // console.log(day)
        // console.log($('#tb-calendar').find('td[data-day="'+day+'"]'))
        var d = new Date(day);
        var temp = d.toLocaleDateString();
        var listD = temp.split('/')

        str += '<p>' + listD[1] + '/' + listD[0] + '/' + listD[2] + '</p>'
        str += '<pre>' + escape(dataAt.content) + '</pre>'
        str += '</li>'
    }
    $('#list-calendar').html(str);
}

function escape(str) {

    return $('<div>').text(str).html();
    c = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#039;',
        '#': '&#035;'
    };
    return str.replace(/[<&>'"#]/g, function (s) { return c[s]; });


    return text.replace(/[<>\&\"\']/g, function (c) {
        return '&#' + c.charCodeAt(0) + ';';
    });
}


function sortobjkey(obj, key) {
    if (obj == {} || obj == undefined || obj == '') return {}
    var keys = Object.keys(obj);
    var kva = keys.map(function (k, i) {
        return [k, obj[k]];
    });
    kva.sort(function (a, b) {
        k = key;
        if (a[1][k] < b[1][k]) return -1;
        if (a[1][k] > b[1][k]) return 1;
        return 0
    });
    var o = {}
    kva.forEach(function (a) { o[a[0]] = a[1] })
    return o;
}


function returnDateDatainALl(inDay) {
    for (var key in allCalendar) {
        // console.log(allCalendar[key])
        var dataAt = allCalendar[key]
        var day = dataAt.date
        if (day == inDay) {
            return [dataAt, key]
        }
    }
}

function getCalendarDate(date) {
    //getAllCalendar()
    return
    if (date == undefined) return
    $('#date-content').val()
    calendarsRef = dbRef.ref('calendars/' + user_ID)

    //calendarsRef.orderByChild('date').equalTo(date).limitToFirst(1).on("child_added", function (snap) {
    calendarsRef.on("child_added", function (snap) {
        alert(1)
        console.log("added", snap.key, snap.val());
        console.log(snap.val())
        // lengthSize++
        // console.log(lengthSize)
        // $('#size-list').html(lengthSize)
        // $('#contacts').append(contactHtmlFromObject(snap.val()));
        // last_Key = snap.key
        // last = data
        var data = snap.val()
        $('#date-content').text(data.content)

    })
    // calendarsRef.off('value', function () {
    //     alert('2')
    // });
}

//prepare conatct object's HTML
function contactHtmlFromObject(contact) {
    // console.log(contact);
    var html = '';
    html += '<li class="list-group-item contact">';
    html += '<div>';
    if (contact.name != '') {
        html += '<p class="lead">' + contact.name + '</p>';
    }
    html += '<p><a href="' + contact.email + '" target="_blank" title="' + contact.email + '">' + contact.email + '</a></p>';
    var textSelect = ''
    if (contact.location != undefined) {
        textSelect = filterSelect(contact.location.city, listOption)
    }

    if (textSelect != '') {


        var strZip = contact.location.zip == "" ? '' : '--' + contact.location.zip
        var strState = contact.location.state == "" ? '' : ',' + contact.location.state
        html += '<p><small>' + '<b>' + textSelect + '</b>' + strState + strZip + '</small></p>';
    }
    if (contact.time != undefined) {
        var d = new Date(contact.time);
        html += '<p>' + d.toLocaleString() + '</p>';
    }
    html += '</div>';
    html += '</li>';
    return html;
}


function buildSelect() {
    var str = '';
    for (const prop in listOption) {
        str += '<optgroup label="' + prop + '">'
        //console.log(listOption[prop])
        for (const prop1 in listOption[prop]) {
            // console.log(listOption[prop][prop1])
            str += '<option value="' + prop1 + '">' + listOption[prop][prop1] + '</option>'
        }
        str += '</optgroup>'
    }
    //str += '</select>';
    //console.log(str)
    $('.list-select-option').html(str)
}

function buildSelectPhotoCat(key) {
    var str = '';
    for (const prop in listOptionPhoto) {
        if (key == prop) {
            str += '<option value="' + prop + '" selected>' + listOptionPhoto[prop] + '</option>'
        } else {
            str += '<option value="' + prop + '">' + listOptionPhoto[prop] + '</option>'
        }

    }
    //str += '</select>';
    //console.log(str)
    return str //
}

function filterSelect(atId, oBject) {
    //var strReturn = '';
    for (const prop in oBject) {
        for (const prop1 in oBject[prop]) {
            if (prop1 == atId) {
                return oBject[prop][prop1]
            }
        }
    }
    return ''
}

function getDaysInMonth(m, y) {
    m++
    return m === 2 ? y & 3 || !(y % 25) && y & 15 ? 28 : 29 : 30 + (m + (m >> 3) & 1);
}

function pushPhoto(image) {
    var is_show = $('#img_is_show').is(':checked');
    var id_cat = $(".list-select-option-photo option:selected").val();
    var image = image
    photoRef = dbRef.ref('photos/' + user_ID)

    photoRef.push({
        is_show: is_show,
        pic: image,
        id_cat: id_cat,
        time: new Date().getTime(),
        userId: user_ID
    })
}

var lastTimePhoto = ''

function getListPhoto() {
    photoRef = dbRef.ref('photos/' + user_ID)
    var id_cat_show = $(".list-cat-btn option:selected").val();
    var query = photoRef.limitToLast(50);

    if (id_cat_show != '') {
        query = photoRef.orderByChild("id_cat").equalTo(id_cat_show)
    }
    query.on("value", function (snapshot) {
        //photoRef.on("value", function(snapshot) {
        // console.log(snapshot.val());
        allPhoto = snapshot.val()
        var newObjectSort = sortDescObj(allPhoto, 'time')
        var str = buildListPhoto(newObjectSort)
        $('#photo .list-image').html(str);
        if (snapshot.val() != null)
            lastTimePhoto = newObjectSort[Object.keys(newObjectSort)[Object.keys(newObjectSort).length - 1]].time
    })
}

function getListPhotoNext() {
    return
    photoRef = dbRef.ref('photos/' + user_ID)
    var id_cat_show = $(".list-cat-btn option:selected").val();
    // var query = photoRef.limitToLast(10);

    var query = photoRef.orderByChild('time').limitToFirst(11).startAt(lastTimePhoto)

    // if (id_cat_show != '') {
    //     query = photoRef.orderByChild("id_cat").equalTo(id_cat_show)
    // }
    query.on("value", function (snapshot) {
        //photoRef.on("value", function(snapshot) {
        // console.log(snapshot.val());
        // allPhoto = {...allPhoto, ...snapshot.val() };
        $.extend(allPhoto, snapshot.val())
        console.log('allPhoto update')
        console.log(allPhoto)
        var str = buildListPhoto(allPhoto)

        $('#photo .list-image').append(str);
        lastTimePhoto = allPhoto[Object.keys(allPhoto)[Object.keys(allPhoto).length - 1]].time
        console.log(lastTimePhoto)

    })
}

function updatePhoto() {
    var id_cat_new = $(".list-cat-btn-edit option:selected").val();
    var is_show_new = $('#edit-private-photo').is(':checked');
    var key = $("#image-img-photo").attr('key-id');
    photoRef = dbRef.ref('photos/' + user_ID + '/' + key)
    photoRef.update({
        is_show: is_show_new,
        pic: allPhoto[key]['pic'],
        id_cat: id_cat_new,
        time: new Date().getTime(),
        userId: user_ID
    })
}

function buildListPhoto(dataIn) {
    var str = '';
    for (var key in dataIn) {
        var dataAt = dataIn[key]
        if (dataAt.is_show == false) {
            str += '<div class="col-sm-3 col-xs-4"><img class="img-thumbnail" onclick="changeLinkImage(&apos;' + dataAt.pic + '&apos;,&apos;' + dataAt.id_cat + '&apos;,&apos;' + key + '&apos;)" str-big="' + dataAt.pic + '" src="' + getThump(dataAt.pic) + '" alt=""></div>'
        } else {
            str += '<div class="col-sm-3 col-xs-4"><img class="img-thumbnail hiden" onclick="changeLinkImage(&apos;' + dataAt.pic + '&apos;,&apos;' + dataAt.id_cat + '&apos;,&apos;' + key + '&apos;)" str-big="' + dataAt.pic + '" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt=""></div>'
        }
    }
    return str;
}

function getThump(str) {
    var res = str.split(".");
    res[res.length - 2] = res[res.length - 2] + 's'
    var re = res.join('.')
    return re
}

var feedback = function (res) {
    if (res.success === true) {
        console.log(res.data.link)
        pushPhoto(res.data.link)
    }
};

new Imgur({
    clientid: '8d5315fbe5fbbcd',
    callback: feedback
});


function pushTodo() {
    var todo = $('#add-todo').val();
    if (todo == '') {
        return
    }
    todoRef = dbRef.ref('todos/' + user_ID)

    todoRef.push({
        task: todo,
        status: 'new',
        time: new Date().getTime(),
        userId: user_ID
    })
    $('#add-todo').val('');
}

function updateTodo(todo, status, key) {
    todoRef = dbRef.ref('todos/' + user_ID + '/' + key)
    todoRef.update({
        task: todo,
        status: status,
        time: new Date().getTime(),
        userId: user_ID
    })
}

function getListTodoNew() {
    todoRef = dbRef.ref('todos/' + user_ID)
    todoRef.orderByChild('status').equalTo('new').on("value", function (snapshot) {
        // console.log(snapshot.val());
        allTaskNew = snapshot.val()
        var newObjectSort = sortDescObj(allTaskNew, 'time')
        buildListTodoNew(newObjectSort)
    })
}

function getListTodoCompleted() {
    todoRef = dbRef.ref('todos/' + user_ID)
    todoRef.orderByChild('status').equalTo('completed').on("value", function (snapshot) {
        console.log(snapshot.val());
        allTaskComplete = snapshot.val()
        var newObjectSort = sortDescObj(allTaskComplete, 'time')
        buildListTodoCompleted(newObjectSort)
    })
}

function getListSWOT() {
    //var listKey = ['s','w','o','t'];
    //for (let index = 0; index < listKey.length; index++) {
    //var atId = listKey[index];
    var atId = 's';
    console.log(atId)
    var swoftRef = dbRef.ref('swot/' + user_ID + '/' + atId)
    //contactsRef.orderByChild('time').on("value", function (snapshot) {
    //swoftRef.orderByChild('status').equalTo('new').on("value", function (snapshot) {
    swoftRef.orderByChild('time').on("value", function (snapshot) {
        console.log(snapshot.val());
        allSWOT[atId] = snapshot.val()
        // if(allSWOT == null){
        //     pushSWOTFirst();
        // }
        // console.log(allSWOT)
        var newObjectSort = sortDescObj(allSWOT[atId], 'number')
        buildListSwot('s', newObjectSort)
    })


    atId = 'w';
    //console.log(atId)
    swoftRef = dbRef.ref('swot/' + user_ID + '/' + atId)
    swoftRef.orderByChild('time').on("value", function (snapshot) {
        console.log(snapshot.val());
        allSWOT[atId] = snapshot.val()
        // if(allSWOT == null){
        //     pushSWOTFirst();
        // }
        // console.log(allSWOT)
        // var newObjectSort = sortDescObj(allTaskNew, 'time')
        // buildListTodoNew(newObjectSort)
        var newObjectSort = sortDescObj(allSWOT[atId], 'number')
        buildListSwot('w', newObjectSort)
    })

    atId = 'o';
    //console.log(atId)
    swoftRef = dbRef.ref('swot/' + user_ID + '/' + atId)
    swoftRef.orderByChild('time').on("value", function (snapshot) {
        console.log(snapshot.val());
        allSWOT[atId] = snapshot.val()
        // if(allSWOT == null){
        //     pushSWOTFirst();
        // }
        // console.log(allSWOT)
        var newObjectSort = sortDescObj(allSWOT[atId], 'number')
        buildListSwot('o', newObjectSort)
    })
    atId = 't';
    //console.log(atId)
    swoftRef = dbRef.ref('swot/' + user_ID + '/' + atId)
    swoftRef.orderByChild('time').on("value", function (snapshot) {
        console.log(snapshot.val());
        allSWOT[atId] = snapshot.val()
        // if(allSWOT == null){
        //     pushSWOTFirst();
        // }
        // console.log(allSWOT)
        var newObjectSort = sortDescObj(allSWOT[atId], 'number')
        buildListSwot('t', newObjectSort)
    })
    console.log(allSWOT);
    //}
}
function editSwot(){
    var idType = $('#keySwot').val();
    if (idType == '' || idType == null) {
        return;
    }
    var text = $('#name1').val();
    if(text ==''){
        return
    }
    var idKey = $('#keyAtId').val();
    if(idKey =='' || idKey ==null){
        return
    }
    updateSwot(idType,idKey,text);
    $('#name1').val('');
}
function deleteSwot(){
    var result = confirm("Want to delete?");
    if (!result) {
        return
    }

    var idType = $('#keySwot').val();
    if (idType == '' || idType == null) {
        return;
    }
    
    var idKey = $('#keyAtId').val();
    if(idKey =='' || idKey ==null){
        return
    }
    swoftRef = dbRef.ref('swot/' + user_ID + '/' + idType + '/' + idKey)
    swoftRef.remove();

}
function updateSwot(idType, idKey, text) {
    swoftRef = dbRef.ref('swot/' + user_ID + '/' + idType + '/' + idKey)
    swoftRef.update({
        status: 'edit',
        text: text,
        timeEdit: new Date().getTime(),
        // userId: user_ID
    })
}
function updateSortSwot(idType, idKey, number) {
    swoftRef = dbRef.ref('swot/' + user_ID + '/' + idType + '/' + idKey)
    swoftRef.update({
        status: 'edit',
        number: number,
        timeEdit: new Date().getTime(),
        // userId: user_ID
    })
}
function addSWOT() {
    var keyType = $('#keySwot').val();
    if (keyType == '' || keyType == null) {
        return;
    }
    var text = $('#name1').val();
    if(text ==''){
        return
    }
    var swoftRef = dbRef.ref('swot/' + user_ID + '/' + keyType)
    swoftRef.push({
        text: text,
        number: 0,
        status: 'new',
        time: new Date().getTime(),
        // userId: user_ID
    })
    $('#name1').val('');
}
// function pushSWOTFirst() {
//     var text = '';
//     var swoftRef = dbRef.ref('swot/' + user_ID)
//     swoftRef.push({
//         task: text,
//         type: 's',
//         time: new Date().getTime(),
//         userId: user_ID
//     })
//     swoftRef.push({
//         task: text,
//         type: 'w',
//         time: new Date().getTime(),
//         userId: user_ID
//     })
//     swoftRef.push({
//         task: text,
//         type: 'o',
//         time: new Date().getTime(),
//         userId: user_ID
//     })
//     swoftRef.push({
//         task: text,
//         type: 't',
//         time: new Date().getTime(),
//         userId: user_ID
//     })
//     getListSWOT()
// }

function buildListTodoNew(dataIn) {
    var str = '';
    for (var key in dataIn) {
        var dataAt = dataIn[key]

        str +=
            '<div class="at-task" data-key="' + key + '">' +
            '<div class="col-sm-9">' +
            '<input type="checkbox" name="remember" />&nbsp;<label>' + dataAt.task + '</label>' +
            '</div>' +
            '<div class="col-sm-3 event"><button class="btn btn-default edit">Edit</button></div>' +
            '</div>';

    }
    $('.list-todo-new .list-group').html(str);
}
function buildListSwot(keySwot, dataIn) {
    var str = '';
    for (var key in dataIn) {
        var dataAt = dataIn[key]

        str += '<li keyid="' + key + '"><span class="title">' + dataAt['text'] + '</span><span class="drag-area"></span></li>';

    }
    $('h3[data-key="' + keySwot + '"]').closest('.list-drap-drop').find('ul.drag-list').html(str);

    $('.list-drap-drop li').arrangeable({
        dragSelector: '.drag-area',
    //     dragEndEvent: function(){
    //         alert('Drag End');
    //    }
    });
}
function updateKeySwot() {
    var keyId = $('#keySwot').val();
    var list = $('.title-select-swot').closest('.list-drap-drop').find('ul.drag-list li');
    var listIndex = []
    list.each(function (index, v) {
        var idAt = $(v).attr('keyid');
        updateSortSwot(keyId, idAt, index)
    })
}

function buildListTodoCompleted(dataIn) {
    var str = '';
    for (var key in dataIn) {
        var dataAt = dataIn[key]

        str +=
            '<div class="at-task" data-key="' + key + '">' +
            '<div class="col-sm-9">' +
            '<input type="checkbox" name="remember" />&nbsp;<label> ' + dataAt.task + '</label>' +
            '</div>' +
            '<div class="col-sm-3 event"><button class="btn btn-default delete">Delete</button></div>' +
            '</div>';

    }
    $('.list-todo-completed .list-group').html(str);
}