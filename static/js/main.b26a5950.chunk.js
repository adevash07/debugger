(this.webpackJsonpdebugger=this.webpackJsonpdebugger||[]).push([[0],{295:function(e,a,t){},296:function(e,a,t){},297:function(e,a,t){},298:function(e,a,t){},299:function(e,a,t){},300:function(e,a,t){},303:function(e,a,t){},304:function(e,a,t){},305:function(e,a,t){},306:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(72),i=t.n(c),r=(t(79),t(26)),s=t(27),m=t(14),o=t(29),d=t(28),u=t.p+"static/media/logo.00b42e35.svg",g=(t(80),t(81),function(){return n.a.createElement("div",{className:"toggler",id:"toggler"},n.a.createElement("button",{className:"toggler-btn1",id:"toggler-btn1"}),n.a.createElement("button",{className:"toggler-btn2",id:"toggler-btn2"}),n.a.createElement("button",{className:"toggler-btn3",id:"toggler-btn3"}),n.a.createElement("button",{className:"toggler-btn4",id:"toggler-btn4"}))}),E=(t(82),function(){return n.a.createElement("div",{className:"mobileNav",id:"mobileNav"},n.a.createElement("nav",{className:"modalNav"},n.a.createElement("div",{className:"img"},n.a.createElement("img",{id:"logo",src:u,alt:"debugger",style:{width:"6rem"}})),n.a.createElement("div",{className:"list"},n.a.createElement("ul",{className:"links"},n.a.createElement("li",null,n.a.createElement("a",{href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"#about"},"About Me")),n.a.createElement("li",null,n.a.createElement("a",{href:"#projects"},"Projects")),n.a.createElement("li",null,n.a.createElement("a",{href:"#contact"},"Contact")),n.a.createElement("li",null,n.a.createElement("a",{href:"#blog"},"Blog"))))))}),h=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={clicked:!1},l.colorChange=l.colorChange.bind(Object(m.a)(l)),l.animate=l.animate.bind(Object(m.a)(l)),l.modalTurnONOFF=l.modalTurnONOFF.bind(Object(m.a)(l)),l.stateSwicher=l.stateSwicher.bind(Object(m.a)(l)),l}return Object(s.a)(t,[{key:"colorChange",value:function(){document.body.scrollTop>=70||document.documentElement.scrollTop>=70?document.getElementById("header").classList.add("purple"):document.getElementById("header").classList.remove("purple")}},{key:"stateSwicher",value:function(){this.setState({clicked:!this.state.clicked}),console.log("state has been switched"),this.animate(),this.modalTurnONOFF()}},{key:"modalTurnONOFF",value:function(){this.state.clicked?(document.getElementById("mobileNav").classList.add("show"),console.log("modal has been on")):document.getElementById("mobileNav").classList.remove("show")}},{key:"animate",value:function(){var e=document.getElementById("toggler-btn1"),a=document.getElementById("toggler-btn2"),t=document.getElementById("toggler-btn3"),l=document.getElementById("toggler-btn4");this.state.clicked?(l.classList.add("moveUp"),e.classList.add("moveDown"),setTimeout((function(){a.style.display="none",t.style.display="none",e.style.animationPlayState="paused",l.style.animationPlayState="paused"}),1999)):(e.style.animationPlayState="running",l.style.animationPlayState="running",e.classList.remove("moveDown"),l.classList.remove("moveUp"),a.style.display="block",t.style.display="block")}},{key:"componentDidMount",value:function(){var e=this;window.onscroll=function(){e.colorChange()},document.getElementById("toggler").addEventListener("click",e.stateSwicher),console.log("toggler has been fectched")}},{key:"render",value:function(){return n.a.createElement("div",{className:"header",id:"header"},n.a.createElement(E,null),n.a.createElement("nav",{className:"nav"},n.a.createElement("div",{className:"img"},n.a.createElement("img",{id:"logo",src:u,alt:"debugger",style:{width:"4rem"}})),n.a.createElement("div",{className:"list"},n.a.createElement("ul",{className:"links"},n.a.createElement("li",null,n.a.createElement("a",{href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"#about"},"About Me")),n.a.createElement("li",null,n.a.createElement("a",{href:"#projects"},"Projects")),n.a.createElement("li",null,n.a.createElement("a",{href:"#contact"},"Contact")),n.a.createElement("li",null,n.a.createElement("a",{href:"#blog"},"Blog")))),n.a.createElement(g,null)))}}]),t}(n.a.Component),b=t(73),p=t.n(b),v=(t(295),function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(p.a,{className:"particles",params:{particles:{number:{value:7,density:{enable:!0,value_area:800}},color:{value:"#961396"},shape:{type:["circle","star","edge","triangle"],stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:6,random:!0,anim:{enable:!1,speed:1,size_min:.1,sync:!0}},line_linked:{enable:!1,distance:150,color:"#961396",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"bubble"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}})}}]),t}(n.a.Component)),f=(t(296),t.p+"static/media/link.854c91fa.svg"),y=t.p+"static/media/twitter.b18937b3.svg",N=t.p+"static/media/git.e47e22be.svg",w=t.p+"static/media/e-mail.25adf0c8.svg",k=function(){return n.a.createElement("div",{className:"social"},n.a.createElement("a",{href:"mailto:adeyemiibrahim223@mail.com"},n.a.createElement("img",{src:w,alt:"E-mail",className:"purplemail"})),n.a.createElement("a",{href:"https://github.com/adevash07"},n.a.createElement("img",{src:N,alt:"github link"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/adeyemi-ibrahim-185765183/"},n.a.createElement("img",{src:f,alt:"linkedin"})),n.a.createElement("a",{href:"https://github.com/adevash07"},n.a.createElement("img",{src:y,alt:"twitter"})))},j=(t(297),function(){return n.a.createElement("div",{className:"home",id:"home"},n.a.createElement(v,null),n.a.createElement("div",{className:"inner"},n.a.createElement("div",{className:"name"},n.a.createElement("h1",null,"ADEYEMI IBRAHIM ",n.a.createElement("br",null),n.a.createElement("span",null,"Web & Software Developer")),n.a.createElement("span",{className:"imgOuter"},n.a.createElement("span",{className:"imgInner"}))),n.a.createElement("div",{className:"btn"},n.a.createElement("a",{href:"#a"},n.a.createElement("button",{className:"btn_button",style:{marginRight:"20%"}},"Download CV")),n.a.createElement("a",{href:"#contact"},n.a.createElement("button",{className:"btn_button",style:{marginLeft:"20%"}},"Contact ME")))),n.a.createElement("div",{className:"buttom"},n.a.createElement(k,null),n.a.createElement("div",{className:"swipe"})))}),I=(t(298),function(){return n.a.createElement("div",{className:"about",id:"about"},n.a.createElement("div",null,n.a.createElement("h2",null,"A Little About Me."),n.a.createElement("hr",null),n.a.createElement("p",null,"Hey",n.a.createElement("span",{role:"img","aria-label":"hello"},"\ud83d\udc4b"),". My name is Ibrahim Adeyemi a.k.a debugger",n.a.createElement("span",{role:"img","aria-label":"debugger"},"\ud83e\udd16")," , I'm a 23 year old Front end developer based in Nigeria. I have developed great passion in doing what i find most enjoyable, satisfying and meaningful, which is coding. it has offered me a fulfilling creative path of problem solving, a field that is ever evolving, challenging and requires constant effort in expanding your knowledge.",n.a.createElement("br",null),n.a.createElement("br",null),"So i'm eager to keep learning more advanced concepts and frameworks. I'm interested in building aesthetically pleasing and interactive websites that are accessible and deliver a great user experience. Apart from broadening my coding knowledge I'd love to learn more about UX/UI design.",n.a.createElement("br",null),n.a.createElement("br",null),"Having managed & delivered a several project, collaborate with other developers on projects and undergone a few FrontEnd Web Development internships, these given a focus on team building & collaboration and equipped me with good problem-solving skills and trained me to work well under pressure to meet tight timelines. Outside of coding,     ")))}),O=t.p+"static/media/project.41fb4544.svg",W=t.p+"static/media/DinenWine.73c49108.svg",B=t.p+"static/media/Oke-clothings.0f414c91.svg",S=t.p+"static/media/Robofriends.fd514486.svg",_=t.p+"static/media/LogoGit.4ac2cd25.svg",F=t.p+"static/media/html.247012dc.svg",M=t.p+"static/media/css.b972a047.svg",q=t.p+"static/media/boot.aedba2f9.svg",C=t.p+"static/media/react.84a8a54b.svg",D=t.p+"static/media/sass.a6e01bcd.svg",L=t.p+"static/media/figma.57339c10.svg",A=t.p+"static/media/js.56b8bb64.svg",P=t.p+"static/media/api.bf1ed924.svg",x=t.p+"static/media/npm.7f3d4e8e.svg",T=t.p+"static/media/heroku.f9bb8397.svg",U=(t(299),function(){return n.a.createElement("div",{className:"skills"},n.a.createElement("h2",null,"Skills"),n.a.createElement("hr",null),n.a.createElement("div",{className:"skillList"},n.a.createElement("img",{src:F,alt:"a",className:"equalWidth"}),n.a.createElement("img",{src:M,alt:"b",className:"equalWidth"}),n.a.createElement("img",{src:A,alt:"c",className:"equalWidth"}),n.a.createElement("img",{src:L,alt:"d",className:"equalWidth"}),n.a.createElement("img",{src:D,alt:"e",className:"equalWidth"}),n.a.createElement("img",{src:P,alt:"f",className:"equalWidth"}),n.a.createElement("img",{src:_,alt:"g",className:"equalWidth"}),n.a.createElement("img",{src:q,alt:"h",className:"equalWidth"}),n.a.createElement("img",{src:C,alt:"i",className:"equalWidth"}),n.a.createElement("img",{src:x,alt:"g",className:"equalWidth"}),n.a.createElement("img",{src:T,alt:"h",className:"equalWidth"})))}),H=(t(300),function(){return n.a.createElement("div",{className:"projects",id:"projects"},n.a.createElement("div",{className:"imgpro"},n.a.createElement("div",{className:"mypro"},n.a.createElement("img",{src:O,alt:"My Projects",className:"res",style:{width:"50%"}})),n.a.createElement("a",{href:"https://adevash07.github.io/DineNWine",className:"MainP"},n.a.createElement("img",{className:"big",src:W,alt:"project demo 1",style:{width:"100%"}})),n.a.createElement("div",null,n.a.createElement("div",{className:"flip-card"},n.a.createElement("div",{className:"flip-card-inner"},n.a.createElement("div",{className:"flip-card-front"},n.a.createElement("img",{src:B,alt:"project demo 2",className:"small1",style:{width:"100%",objectFit:"fill"}})),n.a.createElement("a",{href:"https://adevash07.github.io/Oke-clothings",className:"flip-card-back"},n.a.createElement("div",{className:"link-add"},n.a.createElement("div",{className:"add"},n.a.createElement("div",null,n.a.createElement("p",null,"Project Name : Oke-Clothings"),n.a.createElement("p",null,"Description: ",n.a.createElement("span",null," Fashion shopping site with hot trends"))),n.a.createElement("div",null,n.a.createElement("button",{href:""},"Click here to visit site"))))))),n.a.createElement("div",{className:"flip-card"},n.a.createElement("div",{className:"flip-card-inner"},n.a.createElement("div",{className:"flip-card-front"},n.a.createElement("img",{src:S,alt:"project demo 3",className:"small2",style:{width:"100%",objectFit:"fill"}})),n.a.createElement("a",{href:"https://adevash07.github.io/robofriends",className:"flip-card-back"},n.a.createElement("div",{className:"link-add"},n.a.createElement("div",{className:"add"},n.a.createElement("div",null,n.a.createElement("p",null,"Project Name : RoboFriends"),n.a.createElement("p",null,"Description: ",n.a.createElement("span",null,' A cross match of robot from the movie "Star Wars"'))),n.a.createElement("div",{className:"btn"},n.a.createElement("button",{className:"btn_button",href:"#"},"Click here to visit site"))))))))),n.a.createElement(U,null))}),R=t.p+"static/media/phone.44f0d392.svg",z=t.p+"static/media/conemail.1a2606e1.svg",Y=t(74),J=t.n(Y),V=(t(303),function(){return n.a.createElement("div",{className:"contact",id:"contact"},n.a.createElement("h2",null,"Contact Me"),n.a.createElement("hr",null),n.a.createElement("ul",{className:"contactLinks"},n.a.createElement("li",null,n.a.createElement("a",{href:"#home"},n.a.createElement("img",{src:R,alt:"My E-mail address"})," ",n.a.createElement("span",null,"+2348186591479"))),n.a.createElement("li",null,n.a.createElement("a",{href:"#about"},n.a.createElement("img",{src:z,alt:"My Phone number"}),n.a.createElement("span",null,"adeyemiibrahim223@gmail.com"))),n.a.createElement("div",{className:"leave"},n.a.createElement("h3",null," OR "),n.a.createElement("h4",null,"Leave Me a Direct Message"),n.a.createElement("h4",{className:"whatsUp"},"What\u2019s Up?, let connect"),n.a.createElement("div",{id:"sent",className:"sent"},n.a.createElement("p",null,"Mail Sent!, talk soon."))),n.a.createElement("form",{id:"myForm",onSubmit:function(e){e.preventDefault(),J.a.sendForm("gmail","template_29p81ad",e.target,"user_fEueVQeSACwnF7mjUuWIU").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),document.getElementById("myForm").reset(),document.getElementById("sent").style.visibility="visible",setTimeout((function(){document.getElementById("sent").style.visibility="hidden"}),3e3)}},n.a.createElement("input",{type:"text",name:"from_name",className:"name",placeholder:"What is your name",align:"bottom",required:!0}),n.a.createElement("br",null),n.a.createElement("input",{type:"email",name:"reply_to",className:"email",placeholder:"Youremailaddress@abc.com",required:!0}),n.a.createElement("br",null),n.a.createElement("textarea",{type:"textarea",name:"message",className:"textarea",rows:"10",placeholder:"High heels historically were predominantly wore by men in early 1700s",required:!0}),n.a.createElement("br",null),n.a.createElement("input",{type:"submit",className:"submit",value:"SEND"}))))}),X=(t(304),function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"me"}),n.a.createElement("div",{className:"flex madeBy"},n.a.createElement("p",null,"Made By ",n.a.createElement("span",{className:"trans_color"},"Adeyemi Ibrahim ",n.a.createElement("br",null),"Web & Software Developer"),n.a.createElement("br",null),n.a.createElement("span",{className:"copy"},"\xa9")," ",n.a.createElement("span",null,"Ibrahim Adeyemi - 2020"))),n.a.createElement(k,null)))});t(305);var G=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,null),n.a.createElement(j,null),n.a.createElement(I,null),n.a.createElement(H,null),n.a.createElement(V,null),n.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){}},[[306,1,2]]]);
//# sourceMappingURL=main.b26a5950.chunk.js.map