$(document).ready(function() { var height = $('.navbar-header').height();
    $('#start-content').css('margin-top', height); });
var firebaseConfig = { apiKey: "AIzaSyAuPuaJCP08o5JKW09F1XUWAy5GIiJ_cf8", authDomain: "link-save-d79c8.firebaseapp.com", databaseURL: "https://link-save-d79c8-default-rtdb.firebaseio.com", projectId: "link-save-d79c8", storageBucket: "link-save-d79c8.appspot.com", messagingSenderId: "567380847437", appId: "1:567380847437:web:eaca395ec37919f2f8a504", measurementId: "G-RWXYFREXB0" };
firebase.initializeApp(firebaseConfig);
var user_ID = "";
const auth = firebase.auth();
document.querySelector("#show-register").addEventListener("click", () => { showRegistration() });
const showRegistration = () => { document.querySelector("#registration-page").classList.remove("hide"), document.querySelector("#login-page").classList.add("hide"), document.querySelector("#homepage").classList.add("hide"), $(".show-signout").hide() };
document.querySelector("#show-login").addEventListener("click", () => { showLogin() });
const showLogin = () => { document.querySelector("#registration-page").classList.add("hide"), document.querySelector("#login-page").classList.remove("hide"), document.querySelector("#homepage").classList.add("hide"), $(".show-signout").hide() };
document.querySelector(".signout").addEventListener("click", () => { signOut() });
const register = () => { const e = document.querySelector("#registration-email").value,
        t = document.querySelector("#registration-reemail").value,
        a = document.querySelector("#registration-password").value; "" == e.trim() ? alert("Enter Email") : a.trim().length < 7 ? alert("Password must be at least 7 characters") : e != t ? alert("emails do not match") : auth.createUserWithEmailAndPassword(e, a).catch(function(e) { e.code; var t = e.message;
        alert(t) }) };
document.querySelector("#register").addEventListener("click", () => { register() }), document.querySelector("#registration-password").addEventListener("keyup", e => { 13 === event.keyCode && (e.preventDefault(), register()) });
const login = () => { const e = document.querySelector("#login-email").value,
        t = document.querySelector("#login-password").value; "" == e.trim() ? alert("Enter Email") : "" == t.trim() ? alert("Enter Password") : authenticate(e, t) };
document.querySelector("#login").addEventListener("click", () => { login() }), document.querySelector("#login-password").addEventListener("keyup", e => { 13 === event.keyCode && (e.preventDefault(), login()) });
const authenticate = (e, t) => { firebase.auth().signInWithEmailAndPassword(e, t), firebase.auth().signInWithEmailAndPassword(e, t).catch(function(e) { e.code; var t = e.message;
            alert(t) }) },
    showHomepage = () => { document.querySelector("#registration-page").classList.add("hide"), document.querySelector("#login-page").classList.add("hide"), document.querySelector("#homepage").classList.remove("hide"), $(".show-signout").show() },
    signOut = () => { firebase.auth().signOut().then(function() { location.reload() }).catch(function(e) { alert("error signing out, check network connection") }) };
auth.onAuthStateChanged(e => { e && (document.querySelector("#registration-page").classList.add("hide"), document.querySelector("#login-page").classList.add("hide"), document.querySelector("#homepage").classList.remove("hide"), $(".show-signout").show(), user_ID = e.uid, $("#email_login").html(e.email), loadData()) }), document.querySelector("#forgot-password").addEventListener("click", () => { const e = document.querySelector("#login-email").value; "" == e.trim() ? alert("Enter Email") : forgotPassword(e) });
const forgotPassword = e => { auth.sendPasswordResetEmail(e).then(function() { alert("email sent") }).catch(function(e) { alert("invalid email or bad network connection") }) };
var dbRef = firebase.database(),
    contactsRef = dbRef.ref("contacts");

function loadData() { contactsRef.orderByChild("userId").equalTo(user_ID).on("child_added", function(e) { console.log("added", e.key, e.val()), $("#contacts").append(contactHtmlFromObject(e.val())) }) }

function contactHtmlFromObject(e) { console.log(e); var t = "";
    (t += '<li class="list-group-item contact">', t += "<div>", "" != e.name && (t += '<p class="lead">' + e.name + "</p>"), t += '<p><a href="' + e.email + '" target="_blank">' + e.email + "</a></p>", "" != e.location.city && (t += '<p><small title="' + e.location.zip + '">' + e.location.city + ", " + e.location.state + "</small></p>"), null != e.time) && (t += "<p>" + new Date(e.time).toLocaleString() + "</p>"); return t += "</div>", t += "</li>" }
$(".addValue").on("click", function(e) { e.preventDefault(), "" != $("#name").val() || "" != $("#email").val() ? (contactsRef.push({ name: $("#name").val().replace(/<[^>]*>/gi, ""), email: $("#email").val().replace(/<[^>]*>/gi, ""), location: { city: $("#city").val().replace(/<[^>]*>/gi, ""), state: $("#state").val().replace(/<[^>]*>/gi, ""), zip: $("#zip").val().replace(/<[^>]*>/gi, "") }, time: (new Date).getTime(), userId: user_ID }), contactForm.reset()) : alert("Please fill atlease name or email!") });