(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))m(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const S of l.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&m(S)}).observe(document,{childList:!0,subtree:!0});function c(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function m(n){if(n.ep)return;n.ep=!0;const l=c(n);fetch(n.href,l)}})();const b=document.querySelector("#changeTheme");let y;const h={DARK:"dark",LIGHT:"light"},Y=()=>{b.checked===!0?(y=h.DARK,document.body.classList.add(h.DARK)):(y=h.LIGHT,document.body.classList.remove(h.DARK))};function E(){setTimeout(()=>{Y(),localStorage.setItem("StyleTheme",y)},100)}localStorage.getItem("StyleTheme")&&(y=localStorage.getItem("StyleTheme"),y===h.DARK?(E(),b.checked=!0):b.checked=!1);b.addEventListener("change",E);let a=document.querySelector(".calculator__input-first"),F={"+":(e,t)=>e+t,"-":(e,t)=>e-t,"/":(e,t)=>e/t,"*":(e,t)=>e*t},L="";document.querySelectorAll(".calculator__action .calculator__btn").forEach(e=>{e.addEventListener("click",function(){L=e.dataset.action})});let i=document.querySelector(".calculator__input-second"),I=document.querySelector(".calculator__result");document.querySelector('[data-action="="]').addEventListener("click",function(){i.style.border="",a.style.border="",a.placeholder="Введіть число",i.placeholder="Введіть число";let e=t=>/^-?\d+(\.\d+)?$/.test(t);if(a.value.trim().length===0){a.style.border="1px solid red",a.placeholder="Ви нічого не ввели";return}else if(e(a.value))if(i.value.trim().length===0){i.style.border="1px solid red",i.placeholder="Ви нічого не ввели";return}else if(e(i.value))if(Number(i.value)===0&&L==="/"){i.style.border="1px solid red",I.textContent="На нуль ділити не можна";return}else I.textContent=F[L](Number(a.value),Number(i.value));else{i.style.border="1px solid red",I.textContent="Не може містити букви або символи";return}else{a.style.border="1px solid red",I.textContent="Не може містити букви або символи";return}});let x=document.querySelector(".time-calculator__input"),f=document.querySelector(".time-calculator__result");x.addEventListener("input",function(){let e=Number(x.value.trim()),t=x.value.trim().split("");if(isNaN(e)||e<0||t[0]==="0"&&t[1]!="."){f.textContent="Введіть коректне значення";return}if(/^0{2,}/.test(x.value)){f.textContent="Не може містити два і більше нуля спочатку";return}let c=Math.floor(e/60),m=Math.floor(c/24),n=Math.floor(e*60);e<1440?(f.textContent=`${c} год. ${e-c*60} хв`,e<1&&(f.textContent=`0 год. 0 хв. ${n} сек`)):e>=1440&&(f.textContent=`${m} дн. ${c-m*24} год. ${e-c*60} хв`)});function V(){const e=parseInt(document.getElementById("year").value);let t="";isNaN(e)?t="Введіть коректний рік":e%4!==0?t="Ви народилися не у високосний рік!":e%100!==0||e%400===0?t="Ви народилися у високосний рік!":t="Ви народилися не у високосний рік!",document.getElementById("leap-year__result").textContent=t}const j=document.getElementById("leap-year__btn");j.addEventListener("click",function(){V()});const v=document.querySelector(".dino__btn"),D=document.querySelector(".dino__result");let o=document.getElementById("dino-board"),s=o.getContext("2d"),u=700,w=200;o.width=u;o.height=w;let z=44,A=47,Q=50,r,d=[],U=15,Z=35,ee=50,T=35,te=u,ne=w-T,R=new Image;R.src="images/dino/cactus1.png";let k=new Image;k.src="images/dino/cactus2.png";let $=new Image;$.src="images/dino/cactus3.png";let re=-6,p=0,le=.4,N=w-A,C=0,_=!1,J=null;const K=new Image;K.src="images/dino/dino-run1.png";const M=new Image;M.src="images/dino/dino-run2.png";const G=new Image;G.src="images/dino/dino-jump.png";const H=new Image;H.src="images/dino/dino-dead.png";const W=new Image;W.src="images/dino/dino.png";let g=0,ie=6;const O=new Image;O.src="images/dino/track.png";function B(){r={x:Q,y:N,width:z,height:A,ySpeed:0,isJumping:!1,isDead:!1,frame:0},p=0}function q(e){let t;e.isDead?t=H:e.isJumping?t=G:e.frame===1?t=K:e.frame===2?t=M:t=W,s.drawImage(t,e.x,e.y,e.width,e.height)}function oe(e){e.code==="Space"&&!r.isJumping&&!_&&(p=-10,r.isJumping=!0)}function ce(){let e={img:null,x:te,y:ne,width:null,height:T},t=Math.random();if(t>.9)e.img=$,e.width=ee;else if(t>.7)e.img=k,e.width=Z;else if(t>.3)e.img=R,e.width=U;else return;d.push(e),d.length>5&&d.shift()}function ae(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function P(){g-=ie,g<=-u&&(g=0),s.drawImage(O,g,w-20,u,20),s.drawImage(O,g+u,w-20,u,20)}function X(){if(!_){requestAnimationFrame(X),s.clearRect(0,0,o.width,o.height),P(),p+=le,r.y+=p,r.y>N&&(r.y=N,p=0,r.isJumping=!1),r.frame=C%20<10?1:2,q(r);for(let e=0;e<d.length;e++){let t=d[e];if(t.x+=re,s.drawImage(t.img,t.x,t.y,t.width,t.height),ae(r,t)){_=!0,r.isDead=!0,q(r),v.disabled=!1,v.textContent="Перезапустити",clearInterval(J);return}}C++,D.textContent=`Результат: ${C}`}}function se(){C=0,_=!1,d=[],B(),v.disabled=!0,v.textContent="Гра триває...",D.textContent="Результат: 0",s.clearRect(0,0,o.width,o.height),J=setInterval(ce,1e3),requestAnimationFrame(X)}v.addEventListener("click",()=>{se()});document.addEventListener("keydown",e=>{e.preventDefault(),oe(e)});window.onload=function(){B(),s.clearRect(0,0,o.width,o.height),P(),q(r),D.textContent="Результат: 0"};
