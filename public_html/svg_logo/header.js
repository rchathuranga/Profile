this.menuIcon = document.querySelector(".menu-icon");
this.nav = document.querySelector(".nav");
this.navLis = document.querySelectorAll(".nav li");
this.navContainer = this.nav.querySelector(".nav-container");
this.navBgClose = this.nav.querySelector(".nav-bg-close");
this.navClose = this.nav.querySelector(".close");
var that = this;
$(this.menuIcon).click(function(){
    TweenMax.set(that.nav,{autoAlpha:1});
    TweenMax.to(that.navBgClose,0.7,{opacity:1});
    TweenMax.to(that.navContainer,0.7,{x:0,ease:Expo.easeOut});
    TweenMax.staggerFromTo(that.navLis,1,{x:-50,opacity:0},{x:0,opacity:1,ease:Quint.easeOut,delay:0.1},0.03);
});

$(this.navBgClose).click(function(){
    TweenMax.set(that.nav,{autoAlpha:0,delay:0.3});
    TweenMax.to(that.navBgClose,0.3,{opacity:0});
    TweenMax.to(that.navContainer,0.3,{x:-340,ease:Expo.easeOut});
});

$(this.navClose).click(function(){
    TweenMax.set(that.nav,{autoAlpha:0,delay:0.3});
    TweenMax.to(that.navBgClose,0.3,{opacity:0});
    TweenMax.to(that.navContainer,0.3,{x:-340,ease:Expo.easeOut});
});

var videoPlayer = document.querySelector(".videoplayer");
var videoPlayerBG = document.querySelector(".videoplayer .bg");
var videoPlayerContent = document.querySelector(".videoplayer .content");
var videoPlayerIframe = document.querySelector(".videoplayer iframe");

$(videoPlayerBG).click(closeVideo);

function openVideo(id){
    videoPlayerIframe.src = "https://www.youtube.com/embed/"+id+"?autoplay=1";
    TweenMax.fromTo(videoPlayerBG,0.7,{opacity:0},{opacity:1});
    TweenMax.fromTo(videoPlayerContent,0.7,{opacity:0},{opacity:1,delay:0.2});
    TweenMax.set(videoPlayer,{autoAlpha:1,display:"block"});
}

function closeVideo(){
    TweenMax.to(videoPlayer,0.5,{autoAlpha:0,display:"none",onComplete:function(){
            videoPlayerIframe.src = "";
        }});
}