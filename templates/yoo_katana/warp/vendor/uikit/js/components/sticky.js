!function(t){var i;window.UIkit&&(i=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-sticky",["uikit"],function(){return i||t(UIkit)})}(function(t){"use strict";function i(){var i=arguments.length?arguments:o;if(i.length&&!(e.scrollTop()<0))for(var s,a,r,p,h=e.scrollTop(),c=n.height(),l=e.height(),u=c-l,d=h>u?u-h:0,m=0;m<i.length;m++)if(p=i[m],p.element.is(":visible")&&!p.animate){if(p.check()){if(p.top<0?s=0:(r=p.element.outerHeight(),s=c-r-p.top-p.options.bottom-h-d,s=0>s?s+p.top:p.top),p.boundary&&p.boundary.length){var f=p.boundary.offset().top;a=p.boundtoparent?c-(f+p.boundary.outerHeight())+parseInt(p.boundary.css("padding-bottom")):c-f-parseInt(p.boundary.css("margin-top")),s=h+r>c-a-(p.top<0?0:p.top)?c-a-(h+r):s}if(p.currentTop!=s){if(p.element.css({position:"fixed",top:s,width:"undefined"!=typeof p.getWidthFrom?t.$(p.getWidthFrom).width():p.element.width(),left:p.wrapper.offset().left}),!p.init&&(p.element.addClass(p.options.clsinit),location.hash&&h>0&&p.options.target)){var g=t.$(location.hash);g.length&&setTimeout(function(t,i){return function(){i.element.width();var e=t.offset(),n=e.top+t.outerHeight(),o=i.element.offset(),s=i.element.outerHeight(),a=o.top+s;o.top<n&&e.top<a&&(h=e.top-s-i.options.target,window.scrollTo(0,h))}}(g,p),0)}p.element.addClass(p.options.clsactive).removeClass(p.options.clsinactive),p.element.css("margin",""),p.options.animation&&p.init&&!t.Utils.isInView(p.wrapper)&&p.element.addClass(p.options.animation),p.currentTop=s}}else null!==p.currentTop&&p.reset();p.init=!0}}var e=t.$win,n=t.$doc,o=[],s=1;return t.component("sticky",{defaults:{top:0,bottom:0,animation:"",clsinit:"uk-sticky-init",clsactive:"uk-active",clsinactive:"",getWidthFrom:"",showup:!1,boundary:!1,media:!1,target:!1,disabled:!1},boot:function(){t.$doc.on("scrolling.uk.document",function(t,e){s=e.dir.y,i()}),t.$win.on("resize orientationchange",t.Utils.debounce(function(){if(o.length){for(var t=0;t<o.length;t++)o[t].reset(!0),o[t].self.computeWrapper();i()}},100)),t.ready(function(e){setTimeout(function(){t.$("[data-uk-sticky]",e).each(function(){var i=t.$(this);i.data("sticky")||t.sticky(i,t.Utils.options(i.attr("data-uk-sticky")))}),i()},0)})},init:function(){var i,a=t.$('<div class="uk-sticky-placeholder"></div>'),r=this.options.boundary;this.wrapper=this.element.css("margin",0).wrap(a).parent(),this.computeWrapper(),r&&(r===!0?(r=this.wrapper.parent(),i=!0):"string"==typeof r&&(r=t.$(r))),this.sticky={self:this,options:this.options,element:this.element,currentTop:null,wrapper:this.wrapper,init:!1,getWidthFrom:this.options.getWidthFrom||this.wrapper,boundary:r,boundtoparent:i,top:0,calcTop:function(){var i=this.options.top;if(this.options.top&&"string"==typeof this.options.top)if(this.options.top.match(/^(-|)(\d+)vh$/))i=window.innerHeight*parseInt(this.options.top,10)/100;else{var e=t.$(this.options.top).first();e.length&&e.is(":visible")&&(i=-1*(e.offset().top+e.outerHeight()-this.wrapper.offset().top))}this.top=i},reset:function(i){this.calcTop();var e=function(){this.element.css({position:"",top:"",width:"",left:"",margin:"0"}),this.element.removeClass([this.options.animation,"uk-animation-reverse",this.options.clsactive].join(" ")),this.element.addClass(this.options.clsinactive),this.currentTop=null,this.animate=!1}.bind(this);!i&&this.options.animation&&t.support.animation&&!t.Utils.isInView(this.wrapper)?(this.animate=!0,this.element.removeClass(this.options.animation).one(t.support.animation.end,function(){e()}).width(),this.element.addClass(this.options.animation+" uk-animation-reverse")):e()},check:function(){if(this.options.disabled)return!1;if(this.options.media)switch(typeof this.options.media){case"number":if(window.innerWidth<this.options.media)return!1;break;case"string":if(window.matchMedia&&!window.matchMedia(this.options.media).matches)return!1}var i=e.scrollTop(),o=n.height(),a=o-window.innerHeight,r=i>a?a-i:0,p=this.wrapper.offset().top,h=p-this.top-r,c=i>=h;return c&&this.options.showup&&(1==s&&(c=!1),-1==s&&!this.element.hasClass(this.options.clsactive)&&t.Utils.isInView(this.wrapper)&&(c=!1)),c}},this.sticky.calcTop(),o.push(this.sticky)},update:function(){i(this.sticky)},enable:function(){this.options.disabled=!1,this.update()},disable:function(t){this.options.disabled=!0,this.sticky.reset(t)},computeWrapper:function(){this.wrapper.css({height:-1==["absolute","fixed"].indexOf(this.element.css("position"))?this.element.outerHeight():"","float":"none"!=this.element.css("float")?this.element.css("float"):"",margin:this.element.css("margin")})}}),t.sticky});