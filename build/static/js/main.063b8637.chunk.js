(this["webpackJsonppost-and-comments"]=this["webpackJsonppost-and-comments"]||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),s=n(21),a=n.n(s),i=(n(27),n(6)),r=n(14),l=n(2),m=(n(28),n(4)),j="http://test.flcd.ru/api",u=function(t,e,n){return fetch("".concat(j,"/comment"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},body:JSON.stringify({text:t,post_id:e,reply_to_comment:n})}).then((function(t){return t.ok?t.json():Promise.reject(t.status)}))},d=(n(29),n.p+"static/media/edite.fe1039f7.svg"),b=n.p+"static/media/delete.3b402c45.svg",p=n(3),h=n(0);var f=function(t){var e=Object(m.i)().path;return Object(h.jsxs)("div",{className:"main",children:[Object(h.jsxs)("div",{className:"main__container",children:[t.inLogged?Object(h.jsx)("button",{onClick:t.onSignOut,className:"main__button",to:"/login",children:"\u0412\u044b\u0439\u0442\u0438"}):Object(h.jsx)(p.b,{className:"link",to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"}),Object(h.jsx)(p.b,{className:"link",to:"/add-post",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442"})]}),t.dataPost.map((function(n,c){return Object(h.jsxs)("div",{className:"post",children:[Object(h.jsx)(p.b,{className:"post-link",to:"".concat(e,"/").concat(n.id),children:Object(h.jsx)("p",{className:"post__text",children:n.text})}),t.userId===n.user_id?Object(h.jsxs)("div",{className:"post__buttons",children:[Object(h.jsx)(p.b,{className:"post-link",to:"".concat(e,"/edit/").concat(n.id),children:Object(h.jsx)("button",{className:"post__button",children:Object(h.jsx)("img",{src:d,alt:"\u0438\u043a\u043e\u043d\u043a\u0430"})})}),Object(h.jsx)("button",{onClick:function(){t.onClickDelete(n.id)},className:"post__button",children:Object(h.jsx)("img",{src:b,alt:"\u0438\u043a\u043e\u043d\u043a\u0430"})})]}):null]},c)}))]})},O=n(10),x=(n(36),function(t){var e=t.onLogin,n=Object(c.useState)({name:"",email:""}),o=Object(l.a)(n,2),s=o[0],a=o[1];function r(t){var e=t.target,n=e.name,c=e.value;a(Object(i.a)(Object(i.a)({},s),{},Object(O.a)({},n,c)))}return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)(p.b,{className:"link",to:"/post",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),Object(h.jsx)("h1",{className:"title-form",children:"\u0412\u0445\u043e\u0434"}),Object(h.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault();var n=s.email,c=s.password;e(n,c)},children:[Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{className:"input__title",children:"Email"}),Object(h.jsx)("input",{className:"form__input",type:"email",name:"email",value:s.email||"",onChange:r,id:"user-email",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443"})]}),Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{className:"input__title",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(h.jsx)("input",{className:"form__input",type:"password",name:"password",value:s.password||"",onChange:r,id:"user-password-login",required:!0,minLength:"8",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),Object(h.jsx)("button",{className:"form__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(h.jsxs)("p",{className:"form__link",children:["\u0438\u043b\u0438"," ",Object(h.jsxs)(p.b,{className:"link",to:"/register",children:[" ","\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"]})]})]})}),_=(n(37),function(t){var e=t.onRegister,n=(t.userData,Object(c.useState)({name:"",email:"",password:"",password_confirmation:""})),o=Object(l.a)(n,2),s=o[0],a=o[1];function r(t){var e=t.target,n=e.name,c=e.value;a(Object(i.a)(Object(i.a)({},s),{},Object(O.a)({},n,c)))}return Object(h.jsxs)("div",{className:"register",children:[Object(h.jsx)(p.b,{className:"link",to:"/post",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),Object(h.jsx)("h1",{className:"title-form",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(h.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault();var n=s.name,c=s.email,o=s.password,a=s.password_confirmation;o===a&&e(n,c,o,a)},children:[Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{className:"input__title",children:"\u0418\u043c\u044f"}),Object(h.jsx)("input",{className:"form__input",type:"text",name:"name",value:s.name||"",onChange:r,id:"user-name",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"})]}),Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{className:"input__title",children:"Email"}),Object(h.jsx)("input",{className:"form__input",type:"email",name:"email",value:s.email||"",onChange:r,id:"user-email",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443"})]}),Object(h.jsxs)("div",{className:"input-container",children:[" ",Object(h.jsx)("label",{className:"input__title",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(h.jsx)("input",{className:"form__input",type:"password",name:"password",value:s.password||"",onChange:r,id:"password-register",required:!0,minLength:"8",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{className:"input__title",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"}),Object(h.jsx)("input",{className:"form__input",type:"password",name:"password_confirmation",value:s.password_confirmation||"",onChange:r,id:"password-retype-register",required:!0,minLength:"8",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),Object(h.jsx)("button",{className:"form__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(h.jsxs)("p",{className:"form__link",children:["\u0438\u043b\u0438"," ",Object(h.jsx)(p.b,{className:"link",to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}),C=(n(38),function(t){var e=t.createPost,n=Object(c.useState)({text:""}),o=Object(l.a)(n,2),s=o[0],a=o[1];return Object(h.jsxs)("div",{className:"add-post",children:[Object(h.jsx)(p.b,{className:"link",to:"/post",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),Object(h.jsx)("h1",{className:"title-form",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442"}),Object(h.jsxs)("form",{className:"add-post__form",onSubmit:function(t){t.preventDefault(),e(s)},children:[Object(h.jsx)("textarea",{className:"add-post__text",name:"text",type:"text",value:s.text||"",onChange:function(t){var e=t.target,n=e.name,c=e.value;a(Object(i.a)(Object(i.a)({},s),{},Object(O.a)({},n,c)))}}),Object(h.jsx)("button",{className:"form__button",type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})}),N=function(t){var e=Object(m.h)().id,n=t.data.find((function(t){return t.id.toLocaleString()===e.toLocaleString()})),s=Object(c.useState)({text:""}),a=Object(l.a)(s,2),i=a[0],r=a[1];return o.a.useEffect((function(){r(n.text)}),[n]),Object(h.jsxs)("div",{className:"add-post",children:[Object(h.jsx)(p.b,{className:"link",to:"/post",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),Object(h.jsx)("h1",{className:"title-form",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u0442"}),Object(h.jsxs)("form",{className:"add-post__form",onSubmit:function(n){n.preventDefault(),t.onUpdatePost({text:i},e)},children:[Object(h.jsx)("textarea",{className:"add-post__text",name:"text",type:"text",value:i||"",onChange:function(t){r(t.target.value)}}),Object(h.jsx)("button",{className:"form__button",type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})},v=(n(39),function(t){var e=t.addComment,n=t.isClickComment,o=t.addCommentAnswer,s=(t.answComment,t.editComment,Object(c.useState)({text:""})),a=Object(l.a)(s,2),r=a[0],m=a[1];function j(t){var e=t.target,n=e.name,c=e.value;m(Object(i.a)(Object(i.a)({},r),{},Object(O.a)({},n,c)))}return Object(h.jsx)("div",{className:"add-comments",children:n?Object(h.jsxs)("form",{className:"add-comments__form",onSubmit:function(t){t.preventDefault(),o(r),t.target.reset()},children:[Object(h.jsx)("textarea",{className:"add-comments__text",name:"text",type:"text",rows:"3",value:r.text||"",onChange:j,placeholder:"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439... "}),Object(h.jsx)("button",{className:"add-comments__button",type:"submit",children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]}):Object(h.jsxs)("form",{className:"add-comments__form",onSubmit:function(t){t.preventDefault(),e(r),t.target.reset()},children:[Object(h.jsx)("textarea",{className:"add-comments__text",name:"text",type:"text",rows:"3",value:r.text||"",onChange:j,placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439... "}),Object(h.jsx)("button",{className:"add-comments__button",type:"submit",children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]})})}),g=function(t){t.addComment,t.addCommentAnswer;var e=t.answComment,n=t.editComment,s=Object(c.useState)({text:""}),a=Object(l.a)(s,2),i=a[0],r=a[1];return o.a.useEffect((function(){r(e.text)}),[e]),Object(h.jsx)("div",{className:"add-comments",children:Object(h.jsxs)("form",{className:"add-comments__form",onSubmit:function(t){t.preventDefault(),n({text:i},e.id),t.target.reset()},children:[Object(h.jsx)("textarea",{className:"add-comments__text",name:"text",type:"text",rows:"3",value:i||"",onChange:function(t){r(t.target.value)},placeholder:"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439... "}),Object(h.jsx)("button",{className:"add-comments__button",type:"submit",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]})})},k=(n(40),n(41),function(t){var e=t.item,n=t.userId,c=t.onClickDeleteComment,o=t.handleClickComment,s=t.handleClickEdite;return Object(h.jsxs)("div",{className:"comment",children:[Object(h.jsx)("p",{className:"comment__text",children:e.text}),Object(h.jsxs)("div",{className:"comment__container",children:[n===e.user_id?Object(h.jsxs)("div",{className:"comment__buttons",children:[Object(h.jsx)("button",{className:"post__button",onClick:s,children:Object(h.jsx)("img",{src:d,alt:"\u0438\u043a\u043e\u043d\u043a\u0430"})}),Object(h.jsx)("button",{className:"post__button",onClick:function(){c(e.id)},children:Object(h.jsx)("img",{src:b,alt:"\u0438\u043a\u043e\u043d\u043a\u0430"})})]}):null,Object(h.jsx)("button",{className:"comment__answer",onClick:o,children:"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"})]}),Object(h.jsx)(w,{answerComments:e.replies,onClickDeleteComment:c,handleClickComment:o,handleClickEdite:s})]})}),w=function(t){var e=t.answerComments,n=t.userId,c=t.onClickDeleteComment,o=t.handleClickComment,s=t.handleClickEdite;return Object(h.jsx)("div",{children:!(!e||0===e.length)&&e.map((function(t,e){return Object(h.jsx)(k,{item:t,onClickDeleteComment:c,userId:n,handleClickComment:o,handleClickEdite:s},e)}))})},y=function(t){var e=t.item,n=t.userId,o=(t.comments,t.setComments,t.onClickEditeButton),s=t.onClickDeleteComment,a=t.onClickButtonComment,i=Object(c.useState)([]),r=Object(l.a)(i,2),m=r[0],u=r[1];Object(c.useEffect)((function(){var t;(t=e.id,fetch("".concat(j,"/comment/").concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(t.status))}))).then((function(t){u(t.replies)})).catch((function(t){console.error(t)}))}),[m]);var p=function(){a(e)},f=function(){o(e)};return Object(h.jsxs)("div",{className:"comment",children:[Object(h.jsx)("p",{className:"comment__text",children:e.text}),Object(h.jsxs)("div",{className:"comment__container",children:[n===e.user_id?Object(h.jsxs)("div",{className:"comment__buttons",children:[Object(h.jsx)("button",{className:"post__button",onClick:f,children:Object(h.jsx)("img",{src:d,alt:"\u0438\u043a\u043e\u043d\u043a\u0430"})}),Object(h.jsx)("button",{className:"post__button",onClick:function(){s(e.id)},children:Object(h.jsx)("img",{src:b,alt:"\u0438\u043a\u043e\u043d\u043a\u0430"})})]}):null,Object(h.jsx)("button",{className:"comment__answer",onClick:p,children:"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"})]}),Object(h.jsx)(w,{handleClickEdite:f,answerComments:m,onClickDeleteComment:s,userId:n,handleClickComment:p})]})},S=function(t){return Object(h.jsx)("div",{className:"comments",children:t.comments.map((function(e,n){return Object(h.jsx)(y,{comments:t.comments,onClickEditeButton:t.onClickEditeButton,setComments:t.setComments,item:e,userId:t.userId,onClickDeleteComment:t.onClickDeleteComment,onClickButtonComment:t.onClickButtonComment},n)}))})};var E=function(t){var e=Object(m.h)().id,n=Object(c.useState)([]),o=Object(l.a)(n,2),s=o[0],a=o[1],f=Object(c.useState)(!1),O=Object(l.a)(f,2),x=O[0],_=O[1],C=Object(c.useState)(!1),N=Object(l.a)(C,2),k=N[0],w=N[1],y=Object(c.useState)({}),E=Object(l.a)(y,2),D=E[0],A=E[1],I=t.data.find((function(t){return t.id.toLocaleString()===e.toLocaleString()}));Object(c.useEffect)((function(){(function(t){return fetch("".concat(j,"/post/").concat(t,"/comments"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(t.status))}))})(e).then((function(t){a(t)})).catch((function(t){console.error(t)}))}),[]);var P=function(t,e){(function(t,e){return fetch("".concat(j,"/comment/").concat(e),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},body:JSON.stringify(t)}).then((function(t){return t.ok?t.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(t.status))}))})(t,e).then((function(t){var n=s.map((function(n){return e===n.id&&(n=Object(i.a)({},t)),n}));a(n)})).catch((function(t){console.error(t)}))};return Object(h.jsxs)("div",{children:[Object(h.jsx)(p.b,{className:"link",to:"/post",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),Object(h.jsxs)("div",{className:"post",children:[Object(h.jsx)("p",{className:"post__text",children:I.text}),Object(h.jsxs)("div",{className:"post__container",children:[Object(h.jsx)("p",{className:"post__date"}),t.userId===I.user_id?Object(h.jsxs)("div",{className:"post__buttons",children:[Object(h.jsx)(p.b,{className:"post-link",to:"/post/edit/".concat(I.id),children:Object(h.jsx)("button",{className:"post__button",children:Object(h.jsx)("img",{src:d,alt:"\u0438\u043a\u043e\u043d\u043a\u0430"})})}),Object(h.jsx)("button",{onClick:function(){t.onClickDelete(I.id)},className:"post__button",children:Object(h.jsx)("img",{src:b,alt:"\u0438\u043a\u043e\u043d\u043a\u0430"})})]}):null]}),Object(h.jsx)(S,{userId:t.userId,comments:s,onClickEditeButton:function(t){A(t),_(!1),w(!0)},onClickDeleteComment:function(t){(function(t){return fetch("".concat(j,"/comment/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){return t.ok?t.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(t.status))}))})(t).then((function(){var e=s.filter((function(e){return e.id!==t}));a(e)})).catch((function(t){console.error(t)}))},onClickButtonComment:function(t){A(t),w(!1),_(!0)}}),k?Object(h.jsx)(g,{answComment:D,editComment:P}):Object(h.jsx)(v,{answComment:D,addComment:function(t){var e=t.text;u(e,I.id).then((function(t){a([t].concat(Object(r.a)(s)))})).catch((function(t){console.error(t)}))},addCommentAnswer:function(t){var e=t.text;u(e,D.post_id,D.id).then((function(t){a([t].concat(Object(r.a)(s)))})).catch((function(t){console.error(t)}))},isClickComment:x,editComment:P})]})]})};var D=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],s=e[1],a=o.a.useState({name:"",email:"",password:"",password_confirmation:""}),u=Object(l.a)(a,2),d=u[0],b=u[1],p=o.a.useState(!1),O=Object(l.a)(p,2),v=O[0],g=O[1],k=Object(m.g)();o.a.useEffect((function(){y()}),[]),Object(c.useEffect)((function(){fetch("".concat(j,"/post"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(t.status))})).then((function(t){return s(t)})).catch((function(t){console.error(t)}))}),[]);var w=function(t){(function(t){return fetch("".concat(j,"/post/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){return t.ok?t.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(t.status))}))})(t).then((function(){var e=n.filter((function(e){return e.id!==t}));s(e)})).catch((function(t){console.error(t)}))},y=function(){localStorage.getItem("jwt")&&g(!0)};return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(m.d,{children:[Object(h.jsx)(m.b,{path:"/post",exact:!0,children:Object(h.jsx)(f,{dataPost:n,userId:50,onClickDelete:w,inLogged:v,onSignOut:function(){localStorage.removeItem("jwt"),g(!1)}})}),Object(h.jsx)(m.b,{exact:!0,path:"/",children:Object(h.jsx)(m.a,{to:"/post"})}),Object(h.jsx)(m.b,{path:"/login",children:Object(h.jsx)(x,{onLogin:function(t,e){(function(t,e){return fetch("".concat(j,"/token"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:e})}).then((function(t){return t.ok?t.json():Promise.reject(t.status)}))})(t,e).then((function(t){t.token&&(localStorage.setItem("jwt",t.token),b({email:t.email,password:t.password}),g(!0))})).catch((function(t){console.error(t)})).finally(k.push("/post"))}})}),Object(h.jsx)(m.b,{path:"/add-post",children:Object(h.jsx)(C,{createPost:function(t){(function(t){return fetch("".concat(j,"/post"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},body:JSON.stringify(t)}).then((function(t){return t.ok?t.json():Promise.reject(t.status)}))})(t).then((function(t){s([t].concat(Object(r.a)(n)))})).catch((function(t){console.error(t)})).finally(k.push("/post"))}})}),Object(h.jsx)(m.b,{exact:!0,path:"/post/:id",children:Object(h.jsx)(E,{data:n,userId:50,onClickDelete:w})}),Object(h.jsx)(m.b,{path:"/post/edit/:id",children:Object(h.jsx)(N,{data:n,onUpdatePost:function(t,e){(function(t,e){return fetch("".concat(j,"/post/").concat(e),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},body:JSON.stringify(t)}).then((function(t){return t.ok?t.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(t.status))}))})(t,e).then((function(t){var c=n.map((function(n){return e===n.id&&(n=Object(i.a)({},t)),n}));s(c)})).catch((function(t){console.error(t)})).finally(k.push("/post"))}})}),Object(h.jsx)(m.b,{path:"/register",children:Object(h.jsx)(_,{onRegister:function(t,e,n,c){(function(t,e,n,c){return fetch("".concat(j,"/register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:t,email:e,password:n,password_confirmation:c})}).then((function(t){return t.ok?t.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(t.status))}))})(t,e,n,c).then((function(t){console.log(t),b({name:t.name,email:t.email,password:t.password,password_confirmation:t.password_confirmation})})).catch((function(t){console.error(t)})).finally(k.push("/login"))},userData:d})})]})})};a.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(p.a,{children:Object(h.jsx)(D,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.063b8637.chunk.js.map