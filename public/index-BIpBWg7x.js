(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();i();function i(){const s={brand:"yappy-logo-brand.svg",dark:"yappy-logo-dark.svg"};document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",'<link rel="stylesheet" href="https://pagosbg.bgeneral.com/assets/css/styles.css" />');const r=`<img src="https://pagosbg.bgeneral.com/assets/img/${s.brand}">`,e="Pagar con&nbsp;";document.getElementById("Yappy_Checkout_Button").classList.add("ecommerce","yappy","brand"),document.getElementById("Yappy_Checkout_Button").innerHTML=e+r,document.getElementById("Yappy_Checkout_Button").addEventListener("click",function(){document.getElementById("yappyForm").submit()})}
