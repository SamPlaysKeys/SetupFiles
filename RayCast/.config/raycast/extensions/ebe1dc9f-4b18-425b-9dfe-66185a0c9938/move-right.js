"use strict";var p=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var f=(i,e)=>{for(var o in e)p(i,o,{get:e[o],enumerable:!0})},g=(i,e,o,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let h of w(e))!m.call(i,h)&&h!==o&&p(i,h,{get:()=>e[h],enumerable:!(s=c(e,h))||s.enumerable});return i};var u=i=>g(p({},"__esModule",{value:!0}),i);var x={};f(x,{default:()=>R});module.exports=u(x);var t=require("@raycast/api");var n=require("@raycast/api");async function T(){let i=await(0,n.getApplications)();return i.some(({bundleId:e})=>e==="com.knollsoft.Hookshot")?"rectangle-pro":i.some(({bundleId:e})=>e==="com.knollsoft.Rectangle")?"rectangle":"none"}async function r(){let i=await T();if(i==="none"){let e={style:n.Toast.Style.Failure,title:"Rectangle is not installed.",message:"You can download it from rectangleapp.com \u{1F609}",primaryAction:{title:"Open https://rectangleapp.com in default browser",onAction:o=>{(0,n.open)("https://rectangleapp.com"),o.hide()}}};await(0,n.showToast)(e)}return i}var d=require("react"),a=require("react/jsx-runtime");var l=i=>async()=>{let e=await r();if(e==="none")return;let o=`${e}://execute-action?name=${i}`;try{await(0,t.getFrontmostApplication)()}catch(s){(0,t.captureException)(s),await(0,t.showToast)({style:t.Toast.Style.Failure,title:`Failed to run action "${i}: unable to obtain focused window"`});return}await(0,t.closeMainWindow)();try{await(0,t.open)(o)}catch(s){(0,t.captureException)(s),await(0,t.showToast)({style:t.Toast.Style.Failure,title:`Failed to run action "${i}"`})}};var R=l("move-right");