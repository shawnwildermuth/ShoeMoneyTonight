import{_ as F}from"./ZodError.vue_vue_type_script_setup_true_lang-DVmqoHIw.js";import{_ as I,a as z}from"./ChevronLeftIcon-DxOCReAT.js";import{_ as E}from"./CheckoutProgress-DTQRSyl6.js";import{d as M,u as P,a as R,r as y,b as T,c as N,e as n,f as e,g as t,h as p,w as r,v as c,n as m,m as $,k as j,O as A,l as k}from"./index-BM_g7QBN.js";const D={class:"w-full sm:w-4/5 lg:w-2/3 mx-auto"},J={class:"flex justify-end gap-2 mb-4"},q={key:0,class:"border rounded border-slate-500/50 p-2"},G=e("div",{class:"bg-base-100 -mt-5 mb-2 w-40"},"Customer Information",-1),H={class:"input-label"},K=e("div",{class:"label"},[e("span",{class:"label-text"},"Name")],-1),L={class:"input-label"},Q=e("div",{class:"label"},[e("span",{class:"label-text"},"Company Name")],-1),W={class:"input-label"},X=e("div",{class:"label"},[e("span",{class:"label-text"},"Email")],-1),Y={class:"input-label"},Z=e("div",{class:"label"},[e("span",{class:"label-text"},"Phone")],-1),ee={class:"input-label"},oe=e("div",{class:"label"},[e("span",{class:"label-text"},"Notes")],-1),re=M({__name:"CustomerInfo",setup(se){const C=P(),i=j(),o=R(),l=y(null),_=y(!1);T(()=>{o.isOrderValid()||i.push("/checkout")});function b(){_.value=!0,l.value=null;const u=A.safeParse(o.order);return u.success||(l.value=u.error.format()),u.success}function V(){_.value&&b()}function U(){b()&&(o.processCustomer()?i.push("/payment"):C.error="Could not save payment information.")}return(u,s)=>{var v,f,h,x,w,g;const B=E,O=I,S=z,d=F;return k(),N("div",D,[n(B,{stage:2}),e("div",J,[e("button",{onClick:s[0]||(s[0]=a=>t(i).back()),class:"whitespace-nowrap btn btn-sm btn-ghost"},[n(O),p(" Back")]),e("button",{onClick:U,class:"whitespace-nowrap btn btn-sm btn-success"},[n(S),p(" Next")])]),p(),e("div",{onFocusout:V},[t(o).order?(k(),N("div",q,[G,e("label",H,[K,r(e("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=a=>t(o).order.contact=a),class:m(["grow",{error:(v=l.value)==null?void 0:v.contact}]),placeholder:"John Smith"},null,2),[[c,t(o).order.contact]]),n(d,{errors:(f=l.value)==null?void 0:f.contact},null,8,["errors"])]),e("label",L,[Q,r(e("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=a=>t(o).order.companyName=a),class:"grow",placeholder:"Acme Rocket Supplies, Inc."},null,512),[[c,t(o).order.companyName]])]),e("label",W,[X,r(e("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=a=>t(o).order.email=a),class:m({error:(h=l.value)==null?void 0:h.email}),placeholder:"shawn@aol.com"},null,2),[[c,t(o).order.email]]),n(d,{errors:(x=l.value)==null?void 0:x.email},null,8,["errors"])]),e("label",Y,[Z,r(e("input",{type:"text","onUpdate:modelValue":s[4]||(s[4]=a=>t(o).order.phoneNumber=a),placeholder:"+1 404 555 1212 "},null,512),[[c,t(o).order.phoneNumber]])]),e("label",ee,[oe,r(e("textarea",{rows:"4","onUpdate:modelValue":s[5]||(s[5]=a=>t(o).order.notes=a),class:m([{error:(w=l.value)==null?void 0:w.notes},"h-24"]),placeholder:"For your records..."},null,2),[[c,t(o).order.notes]]),n(d,{errors:(g=l.value)==null?void 0:g.notes},null,8,["errors"])])])):$("",!0)],32)])}}});export{re as default};