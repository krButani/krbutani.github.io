var desktop_nav=document.getElementById("desktop-nav"),mobile_nav=document.getElementById("mobile-nav"),link_about=document.getElementById("link-about");!function(){var t=[].slice.call(document.querySelectorAll(".pages > .page")),o=0;revealer=new Revealer({nmbLayers:3,bgcolor:["#eee","#ffb400","#eee"],effect:"anim--effect-3",onStart:function(n){var e=t[0===o?0:o];classie.add(e,"page--animate-"+n)},onEnd:function(n){t[0===o?t.length-1:0].className="page"}});for(var n=document.querySelectorAll(".desktop-nav-element"),e=0;e<n.length;e++)n[e].addEventListener("click",(function(){this.classList.contains("active")||(document.body.classList.contains("animation-top")?c("top"):document.body.classList.contains("animation-bottom")?c("bottom"):document.body.classList.contains("animation-right")?c("right"):document.body.classList.contains("animation-left")?c("left"):document.body.classList.contains("animation-cornertopleft")?c("cornertopleft"):document.body.classList.contains("animation-cornertopright")?c("cornertopright"):document.body.classList.contains("animation-cornerbottomleft")?c("cornerbottomleft"):document.body.classList.contains("animation-cornerbottomright")?c("cornerbottomright"):c("top"))}));var i=document.querySelectorAll(".mobile-nav-element");for(e=0;e<i.length;e++)i[e].addEventListener("click",(function(){this.classList.contains("active")||(document.body.classList.contains("animation-top")?c("top"):document.body.classList.contains("animation-bottom")?c("bottom"):document.body.classList.contains("animation-right")?c("right"):document.body.classList.contains("animation-left")?c("left"):document.body.classList.contains("animation-cornertopleft")?c("cornertopleft"):document.body.classList.contains("animation-cornertopright")?c("cornertopright"):document.body.classList.contains("animation-cornerbottomleft")?c("cornerbottomleft"):document.body.classList.contains("animation-cornerbottomright")?c("cornerbottomright"):c("top")),setTimeout((function(){document.getElementById("inputmobile").click()}),500),this.classList.contains("home-link")?setTimeout((function(){document.body.classList.add("home")}),500):setTimeout((function(){document.body.classList.remove("home")}),500)}));function c(n){ex=o,revealer.reveal(n,750,(function(){classie.remove(t[o],"page--current"),o=a,classie.add(t[a],"page--current")})),setTimeout((function(){document.querySelector(".page--current").scrollTop=0}),500)}var a=0;desktop_nav.addEventListener("click",(function(t){var o=t.target.closest("li"),n=Array.from(o.closest("ul").children);a=n.indexOf(o)})),mobile_nav.addEventListener("click",(function(t){var o=t.target.closest("li"),n=Array.from(o.closest("ul").children);a=n.indexOf(o)})),link_about.addEventListener("click",(function(){a=1,document.body.classList.contains("animation-top")?c("top"):document.body.classList.contains("animation-bottom")?c("bottom"):document.body.classList.contains("animation-right")?c("right"):document.body.classList.contains("animation-left")?c("left"):document.body.classList.contains("animation-cornertopleft")?c("cornertopleft"):document.body.classList.contains("animation-cornertopright")?c("cornertopright"):document.body.classList.contains("animation-cornerbottomleft")?c("cornerbottomleft"):document.body.classList.contains("animation-cornerbottomright")?c("cornerbottomright"):c("top");var t=document.querySelectorAll(".mobile-nav-element"),o=document.querySelectorAll(".desktop-nav-element");setTimeout((function(){document.body.classList.remove("home");for(var n=0;n<t.length;n++)t[n].classList.remove("active");for(var e=0;e<t.length;e++)o[e].classList.remove("active");desktop_nav.querySelector("li:nth-child(2)").classList.add("active"),mobile_nav.querySelector("li:nth-child(2)").classList.add("active")}),500)}))}();