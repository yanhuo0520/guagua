(function(window){var svgSprite='<svg><symbol id="icon-sousuo" viewBox="0 0 1025 1024"><path d="M1017.749333 987.52 720.746667 690.538667c66.24-73.386667 106.965333-170.24 106.965333-276.672 0-228.202667-185.621333-413.866667-413.866667-413.866667C185.664 0 0 185.664 0 413.866667c0 228.224 185.664 413.866667 413.845333 413.866667 106.453333 0 203.306667-40.725333 276.693333-106.965333L987.52 1017.749333C991.701333 1021.909333 997.162667 1024 1002.624 1024c5.482667 0 10.965333-2.090667 15.125333-6.250667C1026.090667 1009.365333 1026.090667 995.882667 1017.749333 987.52zM42.730667 413.866667c0-204.650667 166.485333-371.136 371.114667-371.136 204.650667 0 371.157333 166.485333 371.136 371.136 0 204.629333-166.485333 371.136-371.136 371.136C209.216 785.002667 42.730667 618.496 42.730667 413.866667z"  ></path></symbol><symbol id="icon-fangdajing" viewBox="0 0 1024 1024"><path d="M951.867146 907.125129 740.245378 695.503361c56.622602-66.858734 90.769306-153.358807 90.769306-247.834528 0-211.911364-171.788551-383.699915-383.699915-383.699915S63.61383 235.756445 63.61383 447.668833s171.788551 383.699915 383.699915 383.699915c94.595448 0 181.193759-34.233686 248.087285-90.985224l211.604372 211.604372c9.792017 9.792017 25.668613 9.792017 35.461653 0l9.401114-9.401114C961.660186 932.793742 961.660186 916.917146 951.867146 907.125129zM128.600937 447.360817c0-176.893826 143.401014-320.29484 320.29484-320.29484s320.29484 143.401014 320.29484 320.29484-143.401014 320.29484-320.29484 320.29484S128.600937 624.254643 128.600937 447.360817z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)