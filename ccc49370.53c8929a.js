(window.webpackJsonp=window.webpackJsonp||[]).push([[62,10],{153:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(174),o=t(197),l=(t(158),t(193));var c=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(l.a,{to:t.permalink,sublabel:"Previous Post",label:t.title})),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(l.a,{to:a.permalink,sublabel:"Next Post",label:a.title,isNext:!0})))},s=t(195),m=t(198),p=t(189);a.default=function(e){var a=e.content,t=e.sidebar,n=a.frontMatter,l=a.metadata,u=l.title,d=l.description,g=l.nextItem,v=l.prevItem,b=l.editUrl,f=n.hide_table_of_contents;return r.a.createElement(i.a,{title:u,description:d,wrapperClassName:"blog-wrapper"},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:t})),r.a.createElement("main",{className:"col col--8"},r.a.createElement(o.a,{frontMatter:n,metadata:l,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,b&&r.a.createElement("a",{href:b,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(p.a,null),"Edit this page")),(g||v)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(c,{nextItem:g,prevItem:v}))),!f&&a.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(m.a,{toc:a.toc})))))}},155:function(e,a,t){"use strict";var n=t(1),r=t.n(n),i={className:r.a.string,size:r.a.number,stroke:r.a.string,fill:r.a.string,svgProps:r.a.object};a.a=i},161:function(e,a,t){"use strict";t.d(a,"a",(function(){return I}));var n=t(4),r=t(9),i=t(0),o=t.n(i),l=t(155),c=function(e){var a=e.size,t=Object(r.a)(e,["size"]),n=Object.assign({viewBox:"0 0 18 18",width:a||18,height:a||18},t);return o.a.createElement("svg",n,o.a.createElement("path",{d:"M17.4 2L16 .6l-7 7-7-7L.6 2l7 7-7 7L2 17.4l7-7 6.9 6.9 1.4-1.4L10.4 9z"}))};c.displayName="SVGS.Icon.CloseMenu",c.propTypes=Object.assign({},l.a);var s=c,m=function(e){var a=e.size,t=Object(r.a)(e,["size"]),n=Object.assign({viewBox:"0 0 22 18",width:a||22,height:a||18},t);return o.a.createElement("svg",n,o.a.createElement("path",{d:"M22 15H0v-2h22v2zm0-10H0V3h22v2z"}))};m.displayName="SVGS.Icon.HamburgerMenu",m.propTypes=Object.assign({},l.a);var p=m,u=function(e){var a=e.size,t=Object(r.a)(e,["size"]),n=Object.assign({viewBox:"0 0 33 32",width:a||33,height:a||32},t);return o.a.createElement("svg",n,o.a.createElement("path",{d:"M30.5 7h-27L17 18.2 30.5 7zM17 20.6L3.1 9.1V25h27.8V9.1L17 20.6z"}))};u.displayName="SVGS.Icon.Email",u.propTypes=Object.assign({},l.a);var d=u,g=function(e){var a=e.size,t=Object(r.a)(e,["size"]),n=Object.assign({viewBox:"0 0 33 32",width:a||33,height:a||32},t);return o.a.createElement("svg",n,o.a.createElement("path",{d:"M17 2C9.7 2 3.4 7 2.3 13.8s3.1 13.4 10 15.5c.7.1 1-.3 1-.7v-2.4c-4.2.8-5-1.9-5-1.9-.3-.8-.9-1.6-1.7-2-1.4-.9.1-.9.1-.9 1 .1 1.8.7 2.3 1.4.4.7 1.1 1.2 1.9 1.4.8.2 1.7.1 2.4-.3.1-.7.4-1.4.9-1.9-3.3-.4-6.8-1.6-6.8-6.9 0-1.4.5-2.7 1.5-3.8-.3-1-.3-2.3.3-3.5 0 0 1.3-.4 4.1 1.4 2.4-.6 5-.6 7.5 0 2.9-1.8 4.1-1.4 4.1-1.4.6 1.2.6 2.5.1 3.7 1 1 1.6 2.4 1.5 3.8 0 5.4-3.5 6.6-6.8 6.9.7.7 1.1 1.6 1 2.6v3.8c0 .4.3.8 1 .7 6.9-2.2 11.2-8.8 10-15.5S24.3 2 17 2"}))};g.displayName="SVGS.Icon.Github",g.propTypes=Object.assign({},l.a);var v=g,b=function(e){var a=e.size,t=Object(r.a)(e,["size"]),n=Object.assign({viewBox:"0 0 33 32",width:a||33,height:a||32},t);return o.a.createElement("svg",n,o.a.createElement("path",{d:"M20.9 24.1c1.7 0 3.1 1.3 3.1 2.9 0 1.6-1.4 2.9-3.1 2.9-1.7 0-3.1-1.3-3.1-2.9v-2.9h3.1zm-7.8-7.4c1.7 0 3.1 1.3 3.1 2.9V27c0 1.6-1.4 2.9-3.1 2.9-1.7 0-3.1-1.3-3.1-2.9v-7.4c-.1-1.5 1.3-2.9 3.1-2.9zm-4.7 0v2.9c0 1.6-1.4 2.9-3.1 2.9-1.7 0-3.1-1.3-3.1-2.9 0-1.6 1.4-2.9 3.1-2.9h3.1zm20.4 0c1.7 0 3.1 1.3 3.1 2.9 0 1.6-1.4 2.9-3.1 2.9h-7.9c-1.7 0-3.1-1.3-3.1-2.9 0-1.6 1.4-2.9 3.1-2.9h7.9zM13.1 9.4c1.7 0 3.1 1.3 3.1 2.9 0 1.6-1.4 2.9-3.1 2.9H5.2c-1.7 0-3.1-1.3-3.1-2.9 0-1.6 1.4-2.9 3.1-2.9h7.9zm15.7 0c1.7 0 3.1 1.3 3.1 2.9 0 1.6-1.4 2.9-3.1 2.9h-3.1v-2.9c-.1-1.6 1.4-2.9 3.1-2.9zM20.9 2C22.6 2 24 3.3 24 4.9v7.4c0 1.6-1.4 2.9-3.1 2.9-1.7 0-3.1-1.3-3.1-2.9V4.9c0-1.6 1.4-2.9 3.1-2.9zm-7.8 0c1.7 0 3.1 1.3 3.1 2.9v2.9h-3.1c-1.7 0-3.1-1.3-3.1-2.9C9.9 3.3 11.3 2 13.1 2z",fillRule:"evenodd",clipRule:"evenodd"}))};b.displayName="SVGS.Icon.Slack",b.propTypes=Object.assign({},l.a);var f=b,h=function(e){var a=e.size,t=Object(r.a)(e,["size"]),n=Object.assign({viewBox:"0 0 33 32",width:a||33,height:a||32},t);return o.a.createElement("svg",n,o.a.createElement("path",{d:"M31.9 7.3c-1.1.5-2.3.8-3.5.9 1.3-.7 2.2-1.8 2.7-3.2-1.2.7-2.5 1.1-3.9 1.4-1.9-1.9-4.9-2.4-7.4-1.1s-3.7 3.8-3.1 6.4c-4.9-.2-9.5-2.4-12.6-6-1.6 2.6-.8 6 1.9 7.7-1 0-1.9-.3-2.8-.7v.1c0 2.7 2.1 5.1 4.9 5.6-.9.2-1.8.3-2.8.1.8 2.3 3.1 3.9 5.7 4-2 1.5-4.7 2.4-7.5 2.4-.5 0-1 0-1.5-.1 2.8 1.7 6.1 2.6 9.4 2.6 11.3 0 17.4-8.8 17.4-16.3v-.7c1.3-.9 2.3-1.9 3.1-3.1z"}))};h.displayName="SVGS.Icon.Twitter",h.propTypes=Object.assign({},l.a);var E=h,y=function(e){var a=e.size,t=Object(r.a)(e,["size"]),n=Object.assign({viewBox:"0 0 19 20",width:a||19,height:a||20},t);return o.a.createElement("svg",n,o.a.createElement("title",null,"Open eye"),o.a.createElement("path",{d:"M9.7 19.7l-1.4-1.4 6.5-7.3H0V9h14.8L8.3 1.7 9.7.3l8.6 9.7z"}))};y.displayName="SVGS.Icon.Arrow",y.propTypes=Object.assign({},l.a);var x=y,w=t(1),N=t.n(w),_=t(2),O=_.c.svg.withConfig({displayName:"ChevronArrow__StyledChevronArrow",componentId:"sc-1mlskpp-0"})(["",""],(function(e){var a=e.rotate;return 0!==a&&Object(_.b)(["transform:rotate(","deg);"],a)})),j=function(e){var a=e.size,t=Object(r.a)(e,["size"]),n=Object.assign({viewBox:"0 0 16 18",width:a||16,height:a||18},t);return o.a.createElement(O,n,o.a.createElement("path",{d:"M14.3 12.1L8 6.6l-6.3 5.5-1.4-1.6L8 3.9l7.7 6.6z"}))};j.displayName="SVGS.Icon.ChevronArrow",j.propTypes=Object.assign({},l.a,{rotate:N.a.number});var k=j,z=_.c.svg.withConfig({displayName:"PrevNextArrow__StyledPrevNextArrow",componentId:"sc-1f3inpq-0"})(["",""],(function(e){var a=e.rotate;return 0!==a&&Object(_.b)(["transform:rotate(","deg);"],a)}));z.propTypes=Object.assign({},l.a,{rotate:N.a.number});var C=function(e){var a=e.size,t=Object(r.a)(e,["size"]),n=Object.assign({viewBox:"0 0 25 16",width:a||25,height:a||16},t);return o.a.createElement(z,n,o.a.createElement("title",null,"Directional arrow"),o.a.createElement("path",{d:"M17.7 15.7l-1.5-1.4L20.8 9H1V7h19.8l-4.6-5.3L17.7.3 24.3 8z"}))};C.displayName="SVGS.Icon.PrevNextArrow",C.propTypes=Object.assign({},l.a);var L=C,M=t(166),T={arrow:x,chevronArrow:k,prevNextArrow:L,twitter:E,email:d,slack:f,github:v,hamburgerMenu:p,closeMenu:s};function I(e){var a=e.icon,t=Object(r.a)(e,["icon"]),i=T[a];return i?o.a.createElement(i,Object(n.a)({},M.a,t)):null}I.propTypes=Object.assign({},l.a)},165:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"c",(function(){return m})),t.d(a,"b",(function(){return u}));var n=t(1),r=t.n(n),i=t(2),o=i.c.div.withConfig({displayName:"Heading",componentId:"s62stb-0"})(["color:var(",");> span{color:var( --"," );}",";"," ",";",";"],(function(e){var a=e.color;return a?"--"+a:"--header-color"}),(function(e){return e.color?"header-color":"color-secondary"}),(function(e){return e.underline&&Object(i.b)(["display:inline-block;border-bottom:3px solid var(--color-secondary);padding-bottom:0.25em;"])}),(function(e){return e.uppercase&&Object(i.b)(["text-transform:uppercase;letter-spacing:var(--letter-spacing-uppercase-narrow);line-height:var(--line-height-uppercase);font-size:var(--font-size-uppercase);"])}),(function(e){var a=e.size;return a&&Object(i.b)(["font-size:var(",");"],"--font-size-"+a)}),(function(e){var a=e.weight;return a&&Object(i.b)(["font-weight:var(--font-weight- ",");"],a)}));o.displayName="Typography.Heading",o.propTypes={color:r.a.string,underline:r.a.bool,weight:r.a.oneOf(["regular","medium","semi-bold"]),uppercase:r.a.bool};var l=o,c=t(5),s=i.c.span.withConfig({displayName:"Text",componentId:"wy8gq7-0"})(["color:var(",");",";",";",";",";"],(function(e){var a=e.color;return a?"--"+a:"--text-color"}),(function(e){return e.monospaced&&c.f}),(function(e){var a=e.underline,t=e.underlineColor;return a&&Object(i.b)(["display:inline-block;border-bottom:2px solid var(-- ",");padding-bottom:0.25em;"],t||"text-color")}),(function(e){var a=e.size;return a&&Object(i.b)(["font-size:var(",");"],"--font-size-"+a)}),(function(e){var a=e.weight;return a&&Object(i.b)(["font-weight:var(--font-weight- ",");"],a)}));s.displayName="Typography.Text",s.propTypes={color:r.a.string,underline:r.a.bool,underlineColor:r.a.string,size:r.a.string,monospaced:r.a.bool,weight:r.a.oneOf(["regular","medium","semi-bold"])};var m=s,p=i.c.a.withConfig({displayName:"Link",componentId:"sc-1e7n6ya-0"})(["display:inline-flex;align-items:center;line-height:2rem;transition:background 0.2s ease-in;"," ",' &:hover,&[data-selected="true"]{background-size:100% 2px;}',";> * + *{margin-left:10px;}"],Object(c.a)(),Object(c.d)(Object(i.b)(["transition:none;"])),(function(e){var a=e.size;return a&&Object(i.b)(["font-size:var(",");"],"--font-size-"+a)}));p.displayName="Typography.Link",p.propTypes={};var u=p},166:function(e,a,t){"use strict";a.a={xmlns:"http://www.w3.org/2000/svg",role:"img"}},167:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),o=t.n(i),l=t(2),c=t(9),s=t(155),m=t(166),p=function(e){var a=e.size,t=Object(c.a)(e,["size"]),n=Object.assign({viewBox:"0 0 34 35",width:a||38,height:a||38},m.a,t);return r.a.createElement("svg",n,r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.6 11.2l-2.5.8-3.9-1.5 6.4-2V6.3l-9.5 3.1-3.9-1.5 13.4-4.3V1.4L17.1 6.7.4.2v13.9L16 9.2v2.7L.4 16.8V19L16 14.1v2.7L.4 21.7v2.2L16 19v2.7L.4 26.6v2.2L16 23.9v2.7L.4 31.5v2.2L17 28.5l16.6 6.4z"}))};p.displayName="SVGs.Logo",p.propTypes=Object.assign({className:o.a.string},s.a);var u=p,d=function(e){var a=e.className;return r.a.createElement("a",{className:a,href:"./"},r.a.createElement(u,{size:38,className:a+"__logo"}),r.a.createElement("span",null,"Manifold"))};d.displayName="Global.HomeLink",d.propTypes={className:o.a.string,color:o.a.string,hoverColor:o.a.string};var g=Object(l.c)(d).withConfig({displayName:"HomeLink__StyledHomeLink",componentId:"sc-1u8ya0a-0"})(["margin-right:auto;display:flex;align-items:center;transition:color ease 0.2s;font-weight:var(--font-weight-semi-bold);font-size:1.125rem;&__logo{margin-right:16px;transition:color ease 0.2s;width:38px;height:38px;","}&:hover,&:hover &__logo{text-decoration:none;","}"],(function(e){var a=e.color;return Object(l.b)(["color:var(",");"],"--"+(a||"green"))}),(function(e){var a=e.hoverColor;return Object(l.b)(["color:var(",");"],"--"+(a||"text-color"))}));a.a=g},170:function(e,a,t){e.exports={navWrapper:"navWrapper_30CC"}},171:function(e,a,t){e.exports={footerWrapper:"footerWrapper_3W8k"}},182:function(e,a,t){"use strict";var n=t(9),r=t(0),i=t.n(r),o=t(183),l=t(157),c=t(159),s=t(1),m=t.n(s),p=t(2),u=t(5),d=t(167),g=t(4),v=t(158),b=p.c.button.withConfig({displayName:"Button",componentId:"xwdukr-0"})(["color:var(--header-color);border:2px solid var(--button-hover-color);background-color:var(--button-background);padding:7px 20px;display:inline-block;text-align:center;position:relative;transition:color ease-in 0.2s,background-color ease 0.2s,border-color ease-in 0.2s,transform ease-in 0.2s;cursor:pointer;font-size:var(--font-size-xs);white-space:nowrap;"," ",' &::after{content:"";display:block;position:absolute;top:7px;left:6px;bottom:-8px;right:-8px;border-right:2px solid var(--button-hover-color);border-bottom:2px solid var(--button-hover-color);transition:border-color ease-in 0.2s,transform ease-in 0.2s;}&:disabled{--button-hover-color:var(--neutral50);color:var(--neutral50);cursor:default;}&:hover:not(:disabled),&[aria-selected="true"]:not(:disabled),&[data-selected="true"]:not(:disabled){color:var(--background-color);background-color:var(--button-hover-color);transform:translate(2px,2px);'," &::after{transform:translate(-2px,-2px);","}}"],Object(u.b)(),(function(e){return e.block&&Object(p.b)(["display:block;width:100%;max-width:200px;"])}),Object(u.d)("transform: none;"),Object(u.d)("transform: none;"));b.propTypes={block:m.a.bool},b.displayName="Atomic.Button";var f=b,h=t(165),E=function(e){var a=e.className,t=(e.isMobile,e.routes);return i.a.createElement("ul",{className:a},t.map((function(e,t){var r=e.label,o=e.isButton,l=e.isSelected,c=Object(n.a)(e,["label","isButton","isSelected"]);return i.a.createElement("li",{key:t,className:a+"__item"},o?i.a.createElement(f,Object(g.a)({as:"a"},c),"Get Started"):i.a.createElement(h.b,Object(g.a)({as:v.a,"data-selected":l,size:"xs"},c),r))})),i.a.createElement("li",{className:a+"__item"},"v 5.0.0"))};E.displayName="Global.Nav.List",E.propTypes={className:m.a.string,isMobile:m.a.bool};var y=Object(p.c)(E).withConfig({displayName:"NavList__StyledNavList",componentId:"sc-11liu86-0"})(["--menu-spacing:",";display:flex;align-items:center;"," &__item{","}"],Object(u.c)("32px","18px"),(function(e){return e.isMobile?Object(p.b)(["flex-direction:column;justify-content:center;align-items:center;height:100%;"]):Object(u.e)(Object(p.b)(["display:none;"]),80)}),(function(e){return e.isMobile?Object(p.b)(["margin-bottom:26px;"]):Object(p.b)(["margin-left:var(--menu-spacing);"])})),x=t(161),w=function(e){var a=e.type,t=Object(n.a)(e,["type"]);return i.a.createElement("button",t,i.a.createElement("span",{className:"a-hidden"},a," navigation"),"open"===a?i.a.createElement(x.a,{icon:"hamburgerMenu"}):i.a.createElement(x.a,{icon:"closeMenu"}))};w.displayName="Global.Nav.MenuButton",w.propTypes={className:m.a.string,type:m.a.oneOf(["open","close"])};var N=Object(p.c)(w).withConfig({displayName:"NavMenuButton__StyledNavMenuButton",componentId:"sc-1dlgklw-0"})(["width:35px;height:35px;border:none;"," ",""],(function(e){return"open"===e.type?Object(p.b)(["display:none;"]):Object(p.b)(["position:absolute;top:var(--menu-padding-x);right:var(--menu-padding-y);"])}),Object(u.e)(Object(p.b)(["display:block;margin-left:auto;"]),80)),_=function(e){var a=e.className,t=e.wrapperClassName,n=e.routes,o=e.isDarkTheme,l=Object(r.useState)(!1),c=l[0],s=l[1];return Object(r.useEffect)((function(){var e=c?"add":"remove";document.body.classList[e]("has-scroll-lock")}),[c]),i.a.createElement("nav",{className:a+" "+t+" "+(o?"a-bg-black":"a-bg-neutral10")},i.a.createElement("div",{className:a+"__inner l-container-max"},i.a.createElement(d.a,null),i.a.createElement(y,{routes:n}),i.a.createElement(N,{type:"open",onClick:function(){return s(!0)},"aria-controls":"mobileMenu","aria-pressed":c}),i.a.createElement("div",{className:a+"__mobile-menu","data-open":c,role:"region",id:"mobileMenu","aria-live":"polite"},i.a.createElement(N,{type:"close",onClick:function(){return s(!1)},"aria-controls":"mobileMenu","aria-hidden":!c}),i.a.createElement(y,{routes:n,isMobile:!0,"aria-hidden":!c}))))};_.displayName="Global.Nav",_.propTypes={className:m.a.string,wrapperClassName:m.a.string,routes:m.a.array,isDarkTheme:m.a.bool};var O=Object(p.c)(_).withConfig({displayName:"Nav__StyledNav",componentId:"a89et3-0"})(["--menu-padding-x:",";--menu-padding-y:28px;padding:var(--menu-padding-x) var(--menu-padding-y);&__inner{display:flex;align-items:center;}&__mobile-menu{position:fixed;top:0;left:0;right:0;bottom:0;background-color:var(--neutral10);transition:max-height 0.5s cubic-bezier(0.33,1,0.68,1);display:block;max-height:0;overflow:hidden;opacity:0;",' z-index:1000;}&__mobile-menu[data-open="true"]{max-height:100vh;padding:var(--menu-padding-x) var(--menu-padding-y);opacity:1;}'],Object(u.c)("28px","18px"),Object(u.d)(Object(p.b)(["transition:opacity 0.25s cubic-bezier(0.33,1,0.68,1);"]))),j=t(29),k=t(162),z="#52E3AC",C=function(){var e=Object(l.useThemeConfig)().metaData,a=e.ogImage,t=e.ogImageAlt;return i.a.createElement(j.a,null,i.a.createElement("meta",{name:"theme-color",content:z}),a&&i.a.createElement("meta",{name:"og:image",content:Object(k.a)(a)}),t&&i.a.createElement("meta",{name:"og:image:alt",content:t}),a&&i.a.createElement("meta",{name:"twitter:image",content:Object(k.a)(a)}),t&&i.a.createElement("meta",{name:"twitter:image:alt",content:t}),i.a.createElement("link",{rel:"icon",type:"image/svg+xml",sizes:"32x32",href:Object(k.a)("/favicon/favicon.svg")}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:Object(k.a)("/favicon/apple-touch-icon.png")}),i.a.createElement("link",{rel:"manifest",href:Object(k.a)("/favicon/site.webmanifest")}),i.a.createElement("link",{rel:"mask-icon",href:Object(k.a)("favicon/safari-pinned-tab.svg"),color:z}),i.a.createElement("meta",{name:"msapplication-TileColor",content:z}),i.a.createElement("link",{rel:"stylesheet",href:"https://use.typekit.net/utk2yhm.css"}))},L=t(170),M=t.n(L);a.a=function(e){var a=Object(l.useThemeConfig)(),t=a.mainNav,r=(Object(n.a)(a,["mainNav"]),Object(c.a)().isDarkTheme),s=t.links;return i.a.createElement(i.a.Fragment,null,i.a.createElement(C,null),i.a.createElement(O,{wrapperClassName:M.a.navWrapper,routes:s,isDarkTheme:r}),i.a.createElement(o.a,e))}},184:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(157),o=t(4),l=t(9),c=t(1),s=t.n(c),m=t(2),p=t(5),u=(t(178),t(158)),d=t(167),g=t(165),v=t(161),b=m.c.a.withConfig({displayName:"FooterLink",componentId:"sc-14n1ewf-0"})(["transition:color ease 0.2s;display:flex;align-items:center;line-height:2.28;font-size:var(--font-size-xs);color:var(--white);svg{transition:color ease 0.2s;flex:none;width:20px;height:20px;margin-right:12px;color:var(--text-color);}&:hover,&:hover svg{color:var(--color-secondary);}"]);b.displayName="Global.Footer.Link";var f=b,h=function(e){var a=e.className,t=e.wrapperClassName,n=e.links,i=new Date;return r.a.createElement("footer",{className:a+" "+t+" a-bg-black"},r.a.createElement("div",{className:a+"__inner"},r.a.createElement("div",{className:a+"__left"},r.a.createElement(d.a,{bgColor:"black",hoverColor:"neutral50"})),r.a.createElement("div",{className:a+"__right"},r.a.createElement("nav",{className:a+"__nav"},n.map((function(e,t){var n=e.title,i=e.items;return r.a.createElement("div",{key:t,className:a+"__link-group"},r.a.createElement(g.a,{as:"h3",weight:"semi-bold",uppercase:!0},n),i&&r.a.createElement("ul",{className:a+"__link-list"},i.map((function(e,t){var n=e.label,i=e.icon,c=Object(l.a)(e,["label","icon"]);return r.a.createElement("li",{key:t,className:a+"__link-item"},r.a.createElement(f,Object(o.a)({as:u.a},c),i&&r.a.createElement(v.a,{icon:i,size:20}),r.a.createElement("span",null,n)))}))))}))),r.a.createElement("p",{className:a+"__copyright"},"\xa9 ",i.getFullYear()," Manifold"))))};h.displayName="Global.Footer",h.propTypes={className:s.a.string,wrapperClassName:s.a.string,links:s.a.array};var E=Object(m.c)(h).withConfig({displayName:"Footer__StyledFooter",componentId:"sc-1fzal17-0"})(["--footer-gap:54px;padding:"," var(--l-container-padding) ",";&__inner{--header-color:var(--neutral80);--text-color:var(--neutral80);display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 auto;max-width:var(--l-container-wide);font-weight:var(--font-weight-regular);}&__left{width:100%;max-width:150px;margin-bottom:60px;color:var(--white);}&__right{width:100%;max-width:",";}&__nav{display:flex;flex-wrap:wrap;gap:var(--footer-gap);}&__link-group{flex:1 1 calc(33% - var(--footer-gap));","}&__link-list{margin-top:18px;}&__link-group:last-of-type &__link-list{"," ","}&__copyright{width:100%;margin-top:",";font-size:13px;}"],Object(p.c)("90px","80px"),Object(p.c)("42px","52px"),Object(p.c)("478px","420px"),Object(p.e)(Object(m.b)(["flex:1 1 calc(50% - var(--footer-gap));"]),50),Object(p.e)(Object(m.b)(["columns:2;column-gap:var(--footer-gap);"]),50),Object(p.e)(Object(m.b)(["columns:1;"]),30),Object(p.c)("145px","80px")),y=t(171),x=t.n(y);a.a=function(){var e=Object(i.useThemeConfig)().footer,a=e||{},t=(a.copyright,a.links),n=void 0===t?[]:t;return a.logo,e?r.a.createElement(E,{wrapperClassName:x.a.footerWrapper,links:n}):null}},189:function(e,a,t){"use strict";var n=t(4),r=t(9),i=t(0),o=t.n(i),l=t(156),c=t(64),s=t.n(c);a.a=function(e){var a=e.className,t=Object(r.a)(e,["className"]);return o.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(l.a)(s.a.iconEdit,a)},t),o.a.createElement("g",null,o.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},192:function(e,a,t){},193:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),o=t.n(i),l=t(158),c=t(161),s=t(194),m=t.n(s);function p(e){var a=e.to,t=e.label,n=e.sublabel,i=e.isNext;return r.a.createElement(l.a,{className:"pagination-nav__link",to:a},n&&r.a.createElement("div",{className:"pagination-nav__sublabel"},n),r.a.createElement("div",{className:m.a.paginationLink+" pagination-nav__label"},i?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,t),r.a.createElement(c.a,{icon:"prevNextArrow"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{icon:"prevNextArrow",rotate:180}),r.a.createElement("span",null,t))))}p.propTypes={to:o.a.string.isRequired,label:o.a.string.isRequired,sublabel:o.a.string,isNext:o.a.bool},a.a=p},194:function(e,a,t){e.exports={paginationLink:"paginationLink_30a5"}},195:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));t(0),t(211),t(196);function n(e){return null}},196:function(e,a,t){},197:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var n=t(0),r=t.n(n),i=(t(210),t(162)),o=t(29),l=(t(192),t(154)),c=t(175),s=t(1),m=t.n(s),p=t(158),u=t(2),d=t(5),g=t(165),v=t(161),b=["January","February","March","April","May","June","July","August","September","October","November","December"];var f=function(e){var a=e.className,t=e.imageUrl,n=e.imageAlt,i=e.title,o=e.date,l=e.permalink,c=e.children;return r.a.createElement("article",{className:a},r.a.createElement("header",null,r.a.createElement("figure",{className:a+"__figure"},t&&r.a.createElement("img",{className:a+"__img",src:t,loading:"lazy",alt:n||""})),r.a.createElement(g.a,{as:"h2",size:"h3"},i),r.a.createElement("div",{className:a+"__time"},r.a.createElement(g.c,{as:"time",dateTime:o,size:"xxs",color:"ifm-color-content-secondary"},function(e){var a=e.substring(0,10).split("-"),t=a[0];return b[parseInt(a[1],10)-1]+" "+parseInt(a[2],10)+", "+t}(o)))),r.a.createElement("section",{className:a+"__section"},c),r.a.createElement("footer",null,l&&r.a.createElement(p.a,{to:l,className:a+"__link"},r.a.createElement(v.a,{icon:"arrow",size:15,className:a+"__arrow"}),r.a.createElement("span",null,"Keep Reading"))))};f.displayName="Templates.BlogPostItem",f.propTypes={className:m.a.string,imageUrl:m.a.string,imageAlt:m.a.string,title:m.a.string.isRequired,date:m.a.string.isRequired,children:m.a.node};var h=Object(u.c)(f).withConfig({displayName:"BlogPost__StyledBlogPostItem",componentId:"hz78a5-0"})(["border-bottom:2px solid var(--neutral40);max-width:var(--l-container-sm);margin:0 auto var(--padding-sm);& + &{padding-top:var(--blog-item-margin);}&:last-of-type{margin-bottom:0;}&__figure{margin:0 0 var(--padding-sm);padding:0;}&__img{width:auto;height:auto;max-height:460px;max-width:100%;}&__section{padding:"," 0 var(--padding-sm);}&__link{display:inline-block;margin-bottom:18px;font-size:var(--font-size-sm);}&__arrow{transform:rotate(90deg);margin-right:",";margin-bottom:-2px;}"],Object(d.c)("24px","20px"),Object(d.c)("16px","10px"));function E(e){var a=e.frontMatter,t=e.metadata,n=e.isBlogPostPage,s=void 0!==n&&n,m=e.children,p=a.image,u=a.image_alt,d=a.title,g=a.keywords,v=t.permalink,b=t.date,f=Object(i.a)(p,{absolute:!1});return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),p&&r.a.createElement("meta",{property:"og:image",content:f}),p&&r.a.createElement("meta",{name:"twitter:image",content:f}),p&&r.a.createElement("meta",{name:"twitter:image:alt",content:u})),r.a.createElement(h,{imageUrl:f,imageAlt:u,permalink:s?null:v,title:d,date:b},r.a.createElement("div",{className:"markdown"},r.a.createElement(l.a,{components:c.a},m))))}},198:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(156);var o=function(e,a,t){var r=Object(n.useState)(void 0),i=r[0],o=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),a=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(a){if(a.getBoundingClientRect().top>=t){var n=e[e.indexOf(a)-1];return null!=n?n:a}return a}return e[e.length-1]}();if(n)for(var r=0,l=!1,c=document.getElementsByClassName(e);r<c.length&&!l;){var s=c[r],m=s.href,p=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===p&&(i&&i.classList.remove(a),s.classList.add(a),o(s),l=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},l=t(63),c=t.n(l),s="table-of-contents__link";function m(e){var a=e.toc,t=e.isChild;return a.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(m,{isChild:!0,toc:e.children}))}))):null}a.a=function(e){var a=e.toc;return o(s,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(i.a)(c.a.tableOfContents,"thin-scrollbar")},r.a.createElement(m,{toc:a}))}}}]);