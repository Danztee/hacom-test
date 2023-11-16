import me from"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";/* empty css              */import{a as he}from"./articles-fb9670e2.js";var Se=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ae(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var fe={exports:{}};(function(r,x){(function(T,M){r.exports=M()})(typeof self<"u"?self:Se,()=>(()=>{var T={75:function(s){(function(){var u,p,S,f,b,y;typeof performance<"u"&&performance!==null&&performance.now?s.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(s.exports=function(){return(u()-b)/1e6},p=process.hrtime,f=(u=function(){var m;return 1e9*(m=p())[0]+m[1]})(),y=1e9*process.uptime(),b=f-y):Date.now?(s.exports=function(){return Date.now()-S},S=Date.now()):(s.exports=function(){return new Date().getTime()-S},S=new Date().getTime())}).call(this)},4087:(s,u,p)=>{for(var S=p(75),f=typeof window>"u"?p.g:window,b=["moz","webkit"],y="AnimationFrame",m=f["request"+y],A=f["cancel"+y]||f["cancelRequest"+y],L=0;!m&&L<b.length;L++)m=f[b[L]+"Request"+y],A=f[b[L]+"Cancel"+y]||f[b[L]+"CancelRequest"+y];if(!m||!A){var P=0,_=0,O=[];m=function(E){if(O.length===0){var C=S(),F=Math.max(0,16.666666666666668-(C-P));P=F+C,setTimeout(function(){var j=O.slice(0);O.length=0;for(var D=0;D<j.length;D++)if(!j[D].cancelled)try{j[D].callback(P)}catch(I){setTimeout(function(){throw I},0)}},Math.round(F))}return O.push({handle:++_,callback:E,cancelled:!1}),_},A=function(E){for(var C=0;C<O.length;C++)O[C].handle===E&&(O[C].cancelled=!0)}}s.exports=function(E){return m.call(f,E)},s.exports.cancel=function(){A.apply(f,arguments)},s.exports.polyfill=function(E){E||(E=f),E.requestAnimationFrame=m,E.cancelAnimationFrame=A}}},M={};function w(s){var u=M[s];if(u!==void 0)return u.exports;var p=M[s]={exports:{}};return T[s].call(p.exports,p,p.exports,w),p.exports}w.n=s=>{var u=s&&s.__esModule?()=>s.default:()=>s;return w.d(u,{a:u}),u},w.d=(s,u)=>{for(var p in u)w.o(u,p)&&!w.o(s,p)&&Object.defineProperty(s,p,{enumerable:!0,get:u[p]})},w.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),w.o=(s,u)=>Object.prototype.hasOwnProperty.call(s,u);var $={};return(()=>{w.d($,{default:()=>ge});var s=w(4087),u=w.n(s);const p=function(a){return new RegExp(/<[a-z][\s\S]*>/i).test(a)},S=function(a,t){return Math.floor(Math.random()*(t-a+1))+a};var f="TYPE_CHARACTER",b="REMOVE_CHARACTER",y="REMOVE_ALL",m="REMOVE_LAST_VISIBLE_NODE",A="PAUSE_FOR",L="CALL_FUNCTION",P="ADD_HTML_TAG_ELEMENT",_="CHANGE_DELETE_SPEED",O="CHANGE_DELAY",E="CHANGE_CURSOR",C="PASTE_STRING",F="HTML_TAG";function j(a){return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(a)}function D(a,t){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);t&&(o=o.filter(function(N){return Object.getOwnPropertyDescriptor(a,N).enumerable})),i.push.apply(i,o)}return i}function I(a){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?D(Object(i),!0).forEach(function(o){c(a,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):D(Object(i)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(i,o))})}return a}function H(a){return function(t){if(Array.isArray(t))return W(t)}(a)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(a)||function(t,i){if(t){if(typeof t=="string")return W(t,i);var o=Object.prototype.toString.call(t).slice(8,-1);return o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set"?Array.from(t):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?W(t,i):void 0}}(a)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function W(a,t){(t==null||t>a.length)&&(t=a.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=a[i];return o}function ve(a,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,oe(o.key),o)}}function c(a,t,i){return(t=oe(t))in a?Object.defineProperty(a,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[t]=i,a}function oe(a){var t=function(i,o){if(j(i)!=="object"||i===null)return i;var N=i[Symbol.toPrimitive];if(N!==void 0){var e=N.call(i,"string");if(j(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(a);return j(t)==="symbol"?t:String(t)}const ge=function(){function a(o,N){var e=this;if(function(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(this,a),c(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),c(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),c(this,"setupWrapperElement",function(){e.state.elements.container&&(e.state.elements.wrapper.className=e.options.wrapperClassName,e.state.elements.cursor.className=e.options.cursorClassName,e.state.elements.cursor.innerHTML=e.options.cursor,e.state.elements.container.innerHTML="",e.state.elements.container.appendChild(e.state.elements.wrapper),e.state.elements.container.appendChild(e.state.elements.cursor))}),c(this,"start",function(){return e.state.eventLoopPaused=!1,e.runEventLoop(),e}),c(this,"pause",function(){return e.state.eventLoopPaused=!0,e}),c(this,"stop",function(){return e.state.eventLoop&&((0,s.cancel)(e.state.eventLoop),e.state.eventLoop=null),e}),c(this,"pauseFor",function(n){return e.addEventToQueue(A,{ms:n}),e}),c(this,"typeOutAllStrings",function(){return typeof e.options.strings=="string"?(e.typeString(e.options.strings).pauseFor(e.options.pauseFor),e):(e.options.strings.forEach(function(n){e.typeString(n).pauseFor(e.options.pauseFor).deleteAll(e.options.deleteSpeed)}),e)}),c(this,"typeString",function(n){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(p(n))return e.typeOutHTMLString(n,l);if(n){var v=(e.options||{}).stringSplitter,g=typeof v=="function"?v(n):n.split("");e.typeCharacters(g,l)}return e}),c(this,"pasteString",function(n){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return p(n)?e.typeOutHTMLString(n,l,!0):(n&&e.addEventToQueue(C,{character:n,node:l}),e)}),c(this,"typeOutHTMLString",function(n){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,v=arguments.length>2?arguments[2]:void 0,g=function(B){var q=document.createElement("div");return q.innerHTML=B,q.childNodes}(n);if(g.length>0)for(var d=0;d<g.length;d++){var k=g[d],R=k.innerHTML;k&&k.nodeType!==3?(k.innerHTML="",e.addEventToQueue(P,{node:k,parentNode:l}),v?e.pasteString(R,k):e.typeString(R,k)):k.textContent&&(v?e.pasteString(k.textContent,l):e.typeString(k.textContent,l))}return e}),c(this,"deleteAll",function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return e.addEventToQueue(y,{speed:n}),e}),c(this,"changeDeleteSpeed",function(n){if(!n)throw new Error("Must provide new delete speed");return e.addEventToQueue(_,{speed:n}),e}),c(this,"changeDelay",function(n){if(!n)throw new Error("Must provide new delay");return e.addEventToQueue(O,{delay:n}),e}),c(this,"changeCursor",function(n){if(!n)throw new Error("Must provide new cursor");return e.addEventToQueue(E,{cursor:n}),e}),c(this,"deleteChars",function(n){if(!n)throw new Error("Must provide amount of characters to delete");for(var l=0;l<n;l++)e.addEventToQueue(b);return e}),c(this,"callFunction",function(n,l){if(!n||typeof n!="function")throw new Error("Callback must be a function");return e.addEventToQueue(L,{cb:n,thisArg:l}),e}),c(this,"typeCharacters",function(n){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!n||!Array.isArray(n))throw new Error("Characters must be an array");return n.forEach(function(v){e.addEventToQueue(f,{character:v,node:l})}),e}),c(this,"removeCharacters",function(n){if(!n||!Array.isArray(n))throw new Error("Characters must be an array");return n.forEach(function(){e.addEventToQueue(b)}),e}),c(this,"addEventToQueue",function(n,l){var v=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return e.addEventToStateProperty(n,l,v,"eventQueue")}),c(this,"addReverseCalledEvent",function(n,l){var v=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return e.options.loop?e.addEventToStateProperty(n,l,v,"reverseCalledEvents"):e}),c(this,"addEventToStateProperty",function(n,l){var v=arguments.length>2&&arguments[2]!==void 0&&arguments[2],g=arguments.length>3?arguments[3]:void 0,d={eventName:n,eventArgs:l||{}};return e.state[g]=v?[d].concat(H(e.state[g])):[].concat(H(e.state[g]),[d]),e}),c(this,"runEventLoop",function(){e.state.lastFrameTime||(e.state.lastFrameTime=Date.now());var n=Date.now(),l=n-e.state.lastFrameTime;if(!e.state.eventQueue.length){if(!e.options.loop)return;e.state.eventQueue=H(e.state.calledEvents),e.state.calledEvents=[],e.options=I({},e.state.initialOptions)}if(e.state.eventLoop=u()(e.runEventLoop),!e.state.eventLoopPaused){if(e.state.pauseUntil){if(n<e.state.pauseUntil)return;e.state.pauseUntil=null}var v,g=H(e.state.eventQueue),d=g.shift();if(!(l<=(v=d.eventName===m||d.eventName===b?e.options.deleteSpeed==="natural"?S(40,80):e.options.deleteSpeed:e.options.delay==="natural"?S(120,160):e.options.delay))){var k=d.eventName,R=d.eventArgs;switch(e.logInDevMode({currentEvent:d,state:e.state,delay:v}),k){case C:case f:var B=R.character,q=R.node,ie=document.createTextNode(B),z=ie;e.options.onCreateTextNode&&typeof e.options.onCreateTextNode=="function"&&(z=e.options.onCreateTextNode(B,ie)),z&&(q?q.appendChild(z):e.state.elements.wrapper.appendChild(z)),e.state.visibleNodes=[].concat(H(e.state.visibleNodes),[{type:"TEXT_NODE",character:B,node:z}]);break;case b:g.unshift({eventName:m,eventArgs:{removingCharacterNode:!0}});break;case A:var ye=d.eventArgs.ms;e.state.pauseUntil=Date.now()+parseInt(ye);break;case L:var se=d.eventArgs,we=se.cb,be=se.thisArg;we.call(be,{elements:e.state.elements});break;case P:var le=d.eventArgs,Y=le.node,V=le.parentNode;V?V.appendChild(Y):e.state.elements.wrapper.appendChild(Y),e.state.visibleNodes=[].concat(H(e.state.visibleNodes),[{type:F,node:Y,parentNode:V||e.state.elements.wrapper}]);break;case y:var Ee=e.state.visibleNodes,G=R.speed,Q=[];G&&Q.push({eventName:_,eventArgs:{speed:G,temp:!0}});for(var ce=0,xe=Ee.length;ce<xe;ce++)Q.push({eventName:m,eventArgs:{removingCharacterNode:!1}});G&&Q.push({eventName:_,eventArgs:{speed:e.options.deleteSpeed,temp:!0}}),g.unshift.apply(g,Q);break;case m:var Te=d.eventArgs.removingCharacterNode;if(e.state.visibleNodes.length){var J=e.state.visibleNodes.pop(),Me=J.type,U=J.node,ke=J.character;e.options.onRemoveNode&&typeof e.options.onRemoveNode=="function"&&e.options.onRemoveNode({node:U,character:ke}),U&&U.parentNode.removeChild(U),Me===F&&Te&&g.unshift({eventName:m,eventArgs:{}})}break;case _:e.options.deleteSpeed=d.eventArgs.speed;break;case O:e.options.delay=d.eventArgs.delay;break;case E:e.options.cursor=d.eventArgs.cursor,e.state.elements.cursor.innerHTML=d.eventArgs.cursor}e.options.loop&&(d.eventName===m||d.eventArgs&&d.eventArgs.temp||(e.state.calledEvents=[].concat(H(e.state.calledEvents),[d]))),e.state.eventQueue=g,e.state.lastFrameTime=n}}}),o)if(typeof o=="string"){var ae=document.querySelector(o);if(!ae)throw new Error("Could not find container element");this.state.elements.container=ae}else this.state.elements.container=o;N&&(this.options=I(I({},this.options),N)),this.state.initialOptions=I({},this.options),this.init()}var t,i;return t=a,(i=[{key:"init",value:function(){var o,N;this.setupWrapperElement(),this.addEventToQueue(E,{cursor:this.options.cursor},!0),this.addEventToQueue(y,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(o=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(N=document.createElement("style")).appendChild(document.createTextNode(o)),document.head.appendChild(N),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(o){this.options.devMode&&console.log(o)}}])&&ve(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),a}()})(),$.default})())})(fe);var Le=fe.exports;const Oe=Ae(Le);function Ce(){const x="https://api.whatsapp.com/send?phone=2347014207004";window.open(x,"_blank")}function Ne(r){const x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${r.getDate().toString().padStart(2,"0")} ${x[r.getMonth()]}, ${r.getFullYear()}`}const je=(r,x)=>{const T=document.getElementById(r),M=document.getElementById(x);T==null||T.addEventListener("click",()=>{M==null||M.classList.toggle("show-menu"),T.classList.toggle("show-icon")})};je("nav-toggle","nav-menu");const _e=[{title:"Smart Electricity Meter for Energy Efficiency",desc:"Experience a new era of energy management! Whether it's single or dual-source, take charge of your electricity consumption. Save money and reduce your carbon footprint. Efficiency meets sustainability, all in one meter.",link:"dual-meter.html",image:"/assets/single.jpg"},{title:"Smart Water Meter for Precision Conservation",desc:"Revolutionize your water management with FlowMaster AquaSync! This intelligent water meter not only tracks your usage but empowers you to save water and costs effortlessly. Stay in control, stay eco-conscious.",link:"water-meter.html",image:"/assets/WATER METER.png"},{title:"Smart Gas Meter, a Sentry for Efficient Energy",desc:"The guardian of your gas consumption. Monitor, optimize, and save with this cutting-edge gas meter. Effortlessly enhance your energy efficiency and reduce bills. Your pocket and the planet will thank you.",link:"gas-meter.html",image:"/assets/gas-meter.png"}],X=document.querySelector(".products-container"),K=document.querySelector(".services-container"),De=r=>`
    <div class="grid lg:grid-cols-2 gap-10 mt-16 md:mt-20 items-center">
      <aside class="flex flex-col gap-6 ${r.title.includes("Smart Water")?"md:order-last":""}">
        <h2 class="text-[var(--secondary-color)] text-2xl md:text-3xl font-bold">${r.title}</h2>
        <p class="text-[14px] md:text-[16px]">${r.desc}</p>
        <a href="${r.link}" class="w-fit border border-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-white rounded-full px-6 py-3 transition text-[var(--secondary-color)]">Learn more</a>
      </aside>
      <aside>
        <img src="${r.image}" alt="${r.title}" class="rounded-lg" />
      </aside>
    </div>
  `,He=()=>`
    <div class="">
      <div class="grid md:grid-cols-2 gap-10 md:gap-4 items-center py-20">
        <aside>
          <h1 class="text-center text-2xl md:text-5xl font-bold">Our services</h1>
          <p class="text-center text-sm md:text-lg mt-3 lg:w-[400px] mx-auto">
            Our comprehensive solutions are tailored to meet the unique
            requirements of businesses across various industries.
          </p>
        </aside>

        <aside>
          <a href="/orion-ami.html">
            <h1 class="text-xl lg:text-2xl font-bold">Orion AMI & Utility Analytics Platform</h1>
            <p class="mb-4 mt-2">
              The AMI software establishes communication with electricity
              providers, ensuring that there are no revenue leakages and that
              all revenue streams are effectively managed
            </p>
            <hr />
          </a>

          <a href="/oliva.html">
            <div class="mt-4">
              <h1 class="text-xl lg:text-2xl font-bold">Oliva Power vending</h1>
              <p class="mb-4 mt-2">
                Our Olivia software serves as the central hub where you can
                conveniently and securely purchase electricity for your needs.
                It's your go-to destination for managing and acquiring
                electrical power.
              </p>
              <hr />
            </div>
          </a>

          <a href="/mini-grid.html" class="">
            <div class="mt-4">
              <h1 class="text-xl lg:text-2xl font-bold">Mini Grid</h1>
              <p class="mb-4 mt-2">
                Our solar-powered mini grids play a pivotal role in enhancing
                power distribution efficiency and elevating asset performance to
                new heights by harnessing the sun's energy.
              </p>
              <hr />
            </div>
          </a>

          <a href="/premium-electricity.html" class="pt-4">
          <div class="mt-4">
            <h1 class="text-xl lg:text-2xl font-bold">Premium Electricity Providers & Consultancy Services</h1>
            <p class="mt-2">
              We offer premium electricity distribution through Franchise or Energy Trading. 
              Our capabilities include performing energy audits, as well as overseeing the 
              installation, rehabilitation, and maintenance of power infrastructure.
            </p>
          </div>
        </a>
        </aside>
      </div>
    </div>
  `,Pe=He();K==null||K.insertAdjacentHTML("beforeend",Pe);_e.forEach(r=>{const x=De(r);X==null||X.insertAdjacentHTML("beforeend",x)});const Ie=r=>`
    <div class="grid md:grid-cols-2 gap-4">
      <li class="list-none">
        <a target="_blank" href="${r[0].externalLink}" class="article-link big-article">
          <article class="flex gap-8 flex-col lg:flex-row">
            <figure class="flex items-center md:w-[100rem]">
              <img src="${r[0].img}" alt="ami-pic"/>
            </figure>

            <div>
              <h3 class="font-bold mb-8 text-[18px]">${r[0].title}</h3>
              <p>Experts in the electricity sector have emphasized that Nigeria
              might not be prepared to implement smart metering for all its
              electricity customers due to the absence of much needed
              communications infrastructure.</p>
              <div class="font-bold text-[var(--secondary-color)] mt-6">
                <p>LEARN MORE</p>
              </div>
            </div>
          </article>
        </a>
      </li>
      <div class="grid md:grid-cols-2 gap-4">
        ${r.slice(1,5).map((T,M)=>`
          <li class="list-none" key="${M}">
            <a href="${T.externalLink}" class="article-link" target="_blank">
              <aside class="flex flex-col h-[100%] justify-between small-article">
                <h3 class="font-bold mb-8 text-[18px]">${T.title}</h3>
                <div class="font-bold text-[var(--secondary-color)]">
                  <p>LEARN MORE</p>
                </div>
              </aside>
            </a>
          </li>
        `).join("")}
      </div>
    </div>
    <div class="flex justify-center mt-10">
      <button onclick="window.location.href = '/magazine.html'"
      class="bg-[var(--secondary-color)] hover:bg-transparent hover:border-[var(--secondary-color)] hover:border transition-all rounded-md px-6 py-3 text-white hover:text-[var(--secondary-color)]">
        View More
      </button>
    </div>
  `,Z=document.querySelector(".blog-container"),Re=Ie(he);Z==null||Z.insertAdjacentHTML("beforeend",Re);const $e=[{name:"Chika Nwosu",comment:"The gas metering solution from this company has greatly improved our control over gas consumption and billing. It's a game-changer for our business.",role:"Operations Manager"},{name:"Emeka Eze",comment:"The electricity metering system is a fantastic addition to our facilities. It ensures accurate billing and enhances our energy management efforts.",role:"Facility Manager"},{name:"Nkechi Okonkwo",comment:"We've been using the water metering solution for a while now, and it's been instrumental in reducing water wastage. Highly recommended for sustainable practices.",role:"Environmental Officer"},{name:"Tunde Adegoke",comment:"The prepaid gas meter has made it so convenient to manage our gas supply. No more unexpected interruptions, and the top-up process is straightforward.",role:"Homeowner"},{name:"Bisi Ogunleye",comment:"Our industrial facility uses the electricity meters from this company, and it has led to improved efficiency and cost savings. A valuable investment.",role:"Plant Manager"},{name:"Ifunanya Nwabueze",comment:"The gas metering solution has been a lifesaver for our household. We can budget our gas expenses more effectively now.",role:"Homemaker"},{name:"Oluwaseun Okoro",comment:"The water metering solution has significantly reduced our water bills. It's an eco-friendly choice for our family.",role:"Homeowner"},{name:"Chidi Onyekachi",comment:"The electricity metering system in our office has made it easy to monitor energy consumption and cut costs. Highly recommended for businesses.",role:"Business Owner"},{name:"Chioma Adebayo",comment:"The prepaid gas meter has made it so convenient to manage our gas supply. No more unexpected interruptions, and the top-up process is straightforward.",role:"Homeowner"}],de=document.querySelector(".testimonials-container");de&&(de.innerHTML=`
  <div class="flex items-center gap-4 relative pb-[9rem]">
    <div class="swiper">
      <div class="swiper-wrapper">
        ${$e.map(r=>`
        <aside class="swiper-slide">
          <div class="testimonial-card text-center border bg-white text-black p-4">
            <div class="min-h-[8rem]">
              <p>${r.comment}</p>
            </div>

            <div class="mt-4">
              <p class="name font-semibold">${r.name}</p>
              <p class="role text-xs text-[grey]">${r.role}</p>
            </div>
          </div>
        </aside>
        `).join("")}
      </div>
    </div>

    <div class="absolute bottom-[30px] flex gap-4 w-full justify-end">
      <div class="swiper-button image-swiper-button-prev">
        <div class="border rounded-full p-2 cursor-pointer bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-narrow-left"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l4 4" />
            <path d="M5 12l4 -4" />
          </svg>
        </div>
      </div>
      <div class="swiper-button image-swiper-button-next">
        <div class="border rounded-full p-2 cursor-pointer bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-narrow-right"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
          </svg>
        </div>
      </div>
    </div>
  </div>`,new me(".swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".image-swiper-button-next",prevEl:".image-swiper-button-prev",disabledClass:"swiper-button-disabled"},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:40}},autoplay:{delay:2500,disableOnInteraction:!1}}));const Fe=["Our platform establishes communication with electricity providers, ensuring that there are no revenue leakages and that all revenue streams are effectively captured and managed.","The Utility Analytics Platform is designed to handle the unique requirements of utility companies, providing advanced tools for collecting, processing, and analyzing data related to energy consumption, grid operations, customer behavior, and more.","It offers utilities valuable insights to improve efficiency, reliability, and customer service.","Grid Analytics Platform: This term is used specifically for applications that focus on the analysis of data within electrical grids, including power generation, distribution, and demand.","Meter Data Management (MDM) System: This is a specialized application that centralizes and manages data from utility meters, including power usage data, for billing, analysis, and reporting.","Demand Response Management System (DRMS): DRMS applications focus on optimizing energy consumption during periods of high demand, often incorporating analytics to make more informed decisions.","Distribution Management System (DMS): While broader in scope, DMS applications may include analytical capabilities for optimizing power distribution within a utility's grid.","Energy Efficiency Management System: This type of application specifically targets energy conservation and efficiency improvements within a utility's operations."],ue=document.querySelector(".what");ue&&(ue.innerHTML=`
  <div class="flex items-center gap-4 relative pb-16">
    <div class="swiper">
      <div class="swiper-wrapper">
        ${Fe.map(r=>`
        <aside class="swiper-slide">
          <div class="text-center text-xl">
            <p class="mt-4">${r}</p>
          </div>
        </aside>
        `).join("")}
      </div>
    </div>

    <div class="absolute bottom-0 flex gap-4 w-full justify-end">
      <div class="swiper-button image-swiper-button-prev">
        <div class="border rounded-full p-2 cursor-pointer bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-narrow-left"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l4 4" />
            <path d="M5 12l4 -4" />
          </svg>
        </div>
      </div>
      <div class="swiper-button image-swiper-button-next">
        <div class="border rounded-full p-2 cursor-pointer bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-narrow-right"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
          </svg>
        </div>
      </div>
    </div>
  </div>`,new me(".swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".image-swiper-button-next",prevEl:".image-swiper-button-prev",disabledClass:"swiper-button-disabled"}}));const ee=document.getElementById("openWhatsApp");ee==null||ee.addEventListener("click",Ce);document.addEventListener("DOMContentLoaded",function(){const r=document.getElementById("contactForm");r==null||r.addEventListener("submit",function(x){x.preventDefault();const T=document.querySelector('input[name="Name"]'),M=document.querySelector('input[name="Email"]'),w=document.querySelector('input[name="Subject"]'),$=document.getElementById("message");if(T&&M&&w&&$){const s=T.value,u=M.value,p=w.value,S=$.value,b=(()=>{const y="hello@hacomenergy.com",m=encodeURIComponent(p),A=encodeURIComponent(`Hello, I'm ${s}.
${S}`),L=encodeURIComponent(u);return`mailto:${y}?subject=${m}&body=${A}&cc=${L}`})();window.open(b,"_blank")}})});const Be=document.getElementById("text");new Oe(Be,{strings:["Property Owners.","Estate Association.","Facility Managers.","Mini Grid Operators.","Estate Managers.","Utility Providers.","Distribution Companies."],autoStart:!0,loop:!0,delaySpeed:2e3});const te=document.getElementById("magazine-container"),qe=r=>`
  <div
    class="bg-[#EEF9FF] overflow-hidden rounded-sm w-[350px] h-[550px] relative"
  >
    <div class="blog-img relative overflow-hidden bg-white border">
      <img
        src="${r.img}"
        alt="${r.title}"
        class="w-full h-[200px] transition-transform hover:scale-110"
      />
      <a
        class="absolute top-0 left-0 bg-[var(--secondary-color)] text-white mt-5 py-2 px-4"
        href="{externalLink}"
        target="_blank"
      >
        Hacom Energy
      </a>
    </div>

    <div class="p-4">
      <div class="flex mb-3 gap-4">
        <small class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-user"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2f90fa"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          ${r.author}
        </small>

        <small class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-calendar-event"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2f90fa"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
            />
            <path d="M16 3l0 4" />
            <path d="M8 3l0 4" />
            <path d="M4 11l16 0" />
            <path d="M8 15h2v2h-2z" />
          </svg>
          ${Ne(r.date)}
        </small>
      </div>
      <h4 class="mb-3 text-2xl font-semibold h-[140px]">${r.title}</h4>
      <p>${r.content.slice(0,100)+"..."}</p>

      <a
        target="_blank"
        href="${r.externalLink}"
        class="mt-8 uppercase flex items-center gap-2 text-[var(--secondary-color)]"
      >
        Read More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-arrow-narrow-right"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2f90fa"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M15 16l4 -4" />
          <path d="M15 8l4 4" />
        </svg>
      </a>
    </div>
  </div>
  `;he.forEach(r=>{const x=qe(r);te==null||te.insertAdjacentHTML("beforeend",x)});const ze=document.getElementById("currentYear");ze.textContent=new Date().getFullYear().toString();const ne=document.getElementById("acceptBtn"),re=document.getElementById("rejectBtn"),h=document.getElementById("cookiesModal"),Qe=()=>{localStorage.setItem("cookiesAccepted","true"),h==null||h.classList.add("modal-hidden")},Ue=()=>{localStorage.setItem("cookiesAccepted","false"),h==null||h.classList.add("modal-hidden")},pe=localStorage.getItem("cookiesAccepted");pe!=="true"&&pe!=="false"?(h==null||h.classList.add("modal-hidden"),setTimeout(()=>{h==null||h.classList.remove("modal-hidden"),h==null||h.classList.add("modal-visible")},1e3)):h==null||h.classList.add("modal-hidden");ne==null||ne.addEventListener("click",Qe);re==null||re.addEventListener("click",Ue);
