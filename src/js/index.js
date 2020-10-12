import smoothscroll from 'smoothscroll-polyfill';
import '../css/normalize.css'
import '../css/index.less'

smoothscroll.polyfill();
// 节流
function throttle(fun,time){
    let lasttime = 0
    return function(){
        let nowtime = Date.now()
        if(nowtime - lasttime > time){
            fun()
            lasttime = nowtime
        }
    }
}

// 封装获取滚动条高度的函数
function getScrollTop() {
    let scroll_top = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scroll_top = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scroll_top = document.body.scrollTop;
    }
    return scroll_top;
}

window.onscroll = throttle(()=>{
    showHeader()
},200)

function showHeader(){
    let aboutMe = document.querySelector('.aboutMe')
    let height = aboutMe.offsetTop
    let scrollHeight = getScrollTop()
    if(scrollHeight>height){
        let header = document.querySelector('header')
        header.classList.add('header-scroll')
    }else{
        let header = document.querySelector('header')
        header.classList.remove('header-scroll')
    }
}

document.querySelector('.icon').addEventListener('click',()=>{
    let mask = document.querySelector('.mask')
    mask.classList.add('mask-show')
    let mobileNav = document.querySelector('.mobileNav')
    mobileNav.classList.add('mobileNav-show')
})

document.querySelector('.nav-iconbox').addEventListener('click',()=>{
    let mask = document.querySelector('.mask')
    mask.classList.remove('mask-show')
    let mobileNav = document.querySelector('.mobileNav')
    mobileNav.classList.remove('mobileNav-show')
})

document.querySelector('.mask').addEventListener('click',()=>{
    let mask = document.querySelector('.mask')
    mask.classList.remove('mask-show')
    let mobileNav = document.querySelector('.mobileNav')
    mobileNav.classList.remove('mobileNav-show')
})


