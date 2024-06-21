import{_ as Z}from"./ZodError.vue_vue_type_script_setup_true_lang-DVmqoHIw.js";import{_ as Q,a as ee}from"./ChevronLeftIcon-DxOCReAT.js";import{_ as ae}from"./CheckoutProgress-DTQRSyl6.js";import{o as K,s as c,d as ne,u as te,a as oe,r as m,b as se,c as _,e as o,f as e,g as B,h as H,w as r,v as d,n as u,i as le,F as ie,j as re,k as de,l as C,t as be}from"./index-BM_g7QBN.js";const ue=[{name:"Alabama",abbreviation:"AL"},{name:"Alaska",abbreviation:"AK"},{name:"American Samoa",abbreviation:"AS"},{name:"Arizona",abbreviation:"AZ"},{name:"Arkansas",abbreviation:"AR"},{name:"California",abbreviation:"CA"},{name:"Colorado",abbreviation:"CO"},{name:"Connecticut",abbreviation:"CT"},{name:"Delaware",abbreviation:"DE"},{name:"District Of Columbia",abbreviation:"DC"},{name:"Federated States Of Micronesia",abbreviation:"FM"},{name:"Florida",abbreviation:"FL"},{name:"Georgia",abbreviation:"GA"},{name:"Guam",abbreviation:"GU"},{name:"Hawaii",abbreviation:"HI"},{name:"Idaho",abbreviation:"ID"},{name:"Illinois",abbreviation:"IL"},{name:"Indiana",abbreviation:"IN"},{name:"Iowa",abbreviation:"IA"},{name:"Kansas",abbreviation:"KS"},{name:"Kentucky",abbreviation:"KY"},{name:"Louisiana",abbreviation:"LA"},{name:"Maine",abbreviation:"ME"},{name:"Marshall Islands",abbreviation:"MH"},{name:"Maryland",abbreviation:"MD"},{name:"Massachusetts",abbreviation:"MA"},{name:"Michigan",abbreviation:"MI"},{name:"Minnesota",abbreviation:"MN"},{name:"Mississippi",abbreviation:"MS"},{name:"Missouri",abbreviation:"MO"},{name:"Montana",abbreviation:"MT"},{name:"Nebraska",abbreviation:"NE"},{name:"Nevada",abbreviation:"NV"},{name:"New Hampshire",abbreviation:"NH"},{name:"New Jersey",abbreviation:"NJ"},{name:"New Mexico",abbreviation:"NM"},{name:"New York",abbreviation:"NY"},{name:"North Carolina",abbreviation:"NC"},{name:"North Dakota",abbreviation:"ND"},{name:"Northern Mariana Islands",abbreviation:"MP"},{name:"Ohio",abbreviation:"OH"},{name:"Oklahoma",abbreviation:"OK"},{name:"Oregon",abbreviation:"OR"},{name:"Palau",abbreviation:"PW"},{name:"Pennsylvania",abbreviation:"PA"},{name:"Puerto Rico",abbreviation:"PR"},{name:"Rhode Island",abbreviation:"RI"},{name:"South Carolina",abbreviation:"SC"},{name:"South Dakota",abbreviation:"SD"},{name:"Tennessee",abbreviation:"TN"},{name:"Texas",abbreviation:"TX"},{name:"Utah",abbreviation:"UT"},{name:"Vermont",abbreviation:"VT"},{name:"Virgin Islands",abbreviation:"VI"},{name:"Virginia",abbreviation:"VA"},{name:"Washington",abbreviation:"WA"},{name:"West Virginia",abbreviation:"WV"},{name:"Wisconsin",abbreviation:"WI"},{name:"Wyoming",abbreviation:"WY"}];function ce(){return{id:0,orderId:0,attentionTo:"Shawn",line1:"123 Main Street",line2:"",cityTown:"Atlanta",stateProvince:"GA",postalCode:"30303",country:"USA",shippingPhoneNumber:"+1 404 555 1212"}}const ve=K({line1:c().min(1,"Required"),cityTown:c().min(1,"Required"),stateProvince:c().min(1,"Required"),postalCode:c().min(1,"Required"),shippingPhoneNumber:c().min(1,"Required")});var G=(v=>(v[v.Cash=0]="Cash",v[v.Check=1]="Check",v[v.CreditCard=2]="CreditCard",v))(G||{});function me(){return{id:0,paymentType:G.CreditCard,orderId:0,amount:0,cardNumber:"4000 0000 0000 0000",cvv:"123",expiration:"04/26",cardholder:"Shawn Wildermuth",postalCode:"10101"}}const pe=K({cardNumber:c().min(16,"Must be a valid credit card number"),cvv:c().min(1,"Required").max(4),expiration:c().regex(/^(0[1-9]|1[0-2])\/\d{2}$/,"Must match mm/yy"),cardholder:c().min(1,"Required"),postalCode:c().min(1,"Required")}),he={class:"w-full sm:w-4/5 lg:w-2/3 mx-auto"},_e={class:"flex justify-end gap-2 mt-8"},Ce=e("div",{class:"text-lg font-bold mb-4"},"Payment Information",-1),ge={class:"border rounded border-slate-500/50 p-2"},xe=e("div",{class:"bg-base-100 -mt-5 mb-2 w-48"},"Shipping/Billing Address",-1),fe={class:"input-label"},we=e("div",{class:"label"},[e("span",{class:"label-text"},"Shipping Contact")],-1),Ne={class:"input-label"},ye=e("div",{class:"label"},[e("span",{class:"label-text"},"Shipping Phone")],-1),Me={class:"input-label"},Ve=e("div",{class:"label"},[e("span",{class:"label-text"},"Street Address")],-1),Se={class:"input-label"},Ae={class:"flex gap-1"},Pe={class:"input-label"},ke=e("div",{class:"label"},[e("span",{class:"label-text"},"City")],-1),Ie={class:"input-label"},Te=e("div",{class:"label"},[e("span",{class:"label-text"},"State/Province")],-1),Ue=e("option",{value:"",selected:"",disabled:""},"Pick One...",-1),Re=["value"],Oe={class:"input-label"},De=e("div",{class:"label"},[e("span",{class:"label-text"},"Postal Code")],-1),We={class:"border rounded border-slate-500/50 p-2 mt-8"},Ee=e("div",{class:"bg-base-100 -mt-5 mb-2 w-48"},"Credit Card",-1),qe={class:"input-label"},Fe=e("div",{class:"label"},[e("span",{class:"label-text"},"Card Number")],-1),Le={class:"input-label"},Be=e("div",{class:"label"},[e("span",{class:"label-text"},"Expiration")],-1),He={class:"input-label"},Ke=e("div",{class:"label"},[e("span",{class:"label-text"},"CVV")],-1),Ge={class:"input-label"},Ye=e("div",{class:"label"},[e("span",{class:"label-text"},"Cardholder's Name")],-1),je={class:"input-label"},ze=e("div",{class:"label"},[e("span",{class:"label-text"},"Cardholder's Postal Code")],-1),Qe=ne({__name:"Payment",setup(v){const Y=te(),h=de(),g=oe(),s=m(me()),t=m(ce()),l=m(null),i=m(null),x=m(!1);se(()=>{g.isOrderValid()||h.push("/checkout")});function f(){x.value=!0,l.value=null,i.value=null;const p=pe.safeParse(s.value);p.success||(l.value=p.error.format());const a=ve.safeParse(t.value);return a.success||(i.value=a.error.format()),p.success&&a.success}function j(){x.value&&f()}function z(){f()&&(g.processPayment(s.value,t.value)?h.push("/confirmation"):Y.error="Could not save payment information.")}return(p,a)=>{var w,N,y,M,V,S,A,P,k,I,T,U,R,O,D,W,E,q,F,L;const J=ae,$=Q,X=ee,b=Z;return C(),_("div",he,[o(J,{stage:3}),e("div",_e,[e("button",{onClick:a[0]||(a[0]=n=>B(h).back()),class:"whitespace-nowrap btn btn-sm btn-ghost"},[o($),H(" Back")]),e("button",{onClick:z,class:"whitespace-nowrap btn btn-sm btn-success"},[o(X),H(" Next")])]),e("div",{onFocusout:j},[Ce,e("div",ge,[xe,e("label",fe,[we,r(e("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=n=>t.value.attentionTo=n),class:"grow",placeholder:"John Smith"},null,512),[[d,t.value.attentionTo]])]),e("label",Ne,[ye,r(e("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=n=>t.value.shippingPhoneNumber=n),class:u([{error:(w=i.value)==null?void 0:w.shippingPhoneNumber},"grow"]),placeholder:"+1 404 555 1212"},null,2),[[d,t.value.shippingPhoneNumber]]),o(b,{errors:(N=i.value)==null?void 0:N.shippingPhoneNumber},null,8,["errors"])]),e("label",Me,[Ve,r(e("input",{type:"text","onUpdate:modelValue":a[3]||(a[3]=n=>t.value.line1=n),class:u([{error:(y=i.value)==null?void 0:y.line1},"grow"]),placeholder:"123 Main Street"},null,2),[[d,t.value.line1]]),o(b,{errors:(M=i.value)==null?void 0:M.line1},null,8,["errors"])]),e("label",Se,[r(e("input",{type:"text","onUpdate:modelValue":a[4]||(a[4]=n=>t.value.line2=n),class:"grow",placeholder:"Suite 400"},null,512),[[d,t.value.line2]])]),e("div",Ae,[e("label",Pe,[ke,r(e("input",{type:"text","onUpdate:modelValue":a[5]||(a[5]=n=>t.value.cityTown=n),class:u([{error:(V=i.value)==null?void 0:V.cityTown},"grow"]),placeholder:"Atlanta"},null,2),[[d,t.value.cityTown]]),o(b,{errors:(S=i.value)==null?void 0:S.cityTown},null,8,["errors"])]),e("label",Ie,[Te,r(e("select",{class:u(["select grow",{error:(A=i.value)==null?void 0:A.stateProvince}]),"onUpdate:modelValue":a[6]||(a[6]=n=>t.value.stateProvince=n)},[Ue,(C(!0),_(ie,null,re(B(ue),n=>(C(),_("option",{value:n.abbreviation},be(n.name),9,Re))),256))],2),[[le,t.value.stateProvince]]),o(b,{errors:(P=i.value)==null?void 0:P.stateProvince},null,8,["errors"])]),e("label",Oe,[De,r(e("input",{type:"text",class:u(["grow",{error:(k=i.value)==null?void 0:k.postalCode}]),placeholder:"10101","onUpdate:modelValue":a[7]||(a[7]=n=>t.value.postalCode=n)},null,2),[[d,t.value.postalCode]]),o(b,{errors:(I=i.value)==null?void 0:I.postalCode},null,8,["errors"])])])]),e("div",We,[Ee,e("label",qe,[Fe,r(e("input",{type:"text","onUpdate:modelValue":a[8]||(a[8]=n=>s.value.cardNumber=n),class:u(["grow",{error:(T=l.value)==null?void 0:T.cardNumber}]),placeholder:"4000 0000 0000 0000"},null,2),[[d,s.value.cardNumber]]),o(b,{errors:(U=l.value)==null?void 0:U.cardNumber},null,8,["errors"])]),e("label",Le,[Be,r(e("input",{type:"text","onUpdate:modelValue":a[9]||(a[9]=n=>s.value.expiration=n),class:u(["grow",{error:(R=l.value)==null?void 0:R.expiration}]),placeholder:"04/24"},null,2),[[d,s.value.expiration]]),o(b,{errors:(O=l.value)==null?void 0:O.expiration},null,8,["errors"])]),e("label",He,[Ke,r(e("input",{type:"text","onUpdate:modelValue":a[10]||(a[10]=n=>s.value.cvv=n),class:u(["grow",{error:(D=l.value)==null?void 0:D.cvv}]),placeholder:"456"},null,2),[[d,s.value.cvv]]),o(b,{errors:(W=l.value)==null?void 0:W.cvv},null,8,["errors"])]),e("label",Ge,[Ye,r(e("input",{type:"text","onUpdate:modelValue":a[11]||(a[11]=n=>s.value.cardholder=n),class:u(["grow",{error:(E=l.value)==null?void 0:E.cardholder}]),placeholder:"Bill Smith"},null,2),[[d,s.value.cardholder]]),o(b,{errors:(q=l.value)==null?void 0:q.cardholder},null,8,["errors"])]),e("label",je,[ze,r(e("input",{type:"text","onUpdate:modelValue":a[12]||(a[12]=n=>s.value.postalCode=n),class:u(["grow",{error:(F=l.value)==null?void 0:F.postalCode}]),placeholder:"10101"},null,2),[[d,s.value.postalCode]]),o(b,{errors:(L=l.value)==null?void 0:L.postalCode},null,8,["errors"])])])],32)])}}});export{Qe as default};
