!function(){
	function t(t){var n=C.getBoundingClientRect();return{x:(t.clientX-n.left)*(C.width/n.width),y:(t.clientY-n.top)*(C.height/n.height)}}
	function n(t){for(var n=1;n<arguments.length;n++)t=t.replace(/%s/,arguments[n]);return t}
	function r(t){var n=t>>16,r=t>>8&255,o=255&t;return[n,r,o]}
	function o(t){var n=t[0]<<16|t[1]<<8|t[2];return"#"+function(t){return Array(7-t.length).join("0")+t}(n.toString(16))}
	function e(t){var n=t[0],r=t[1],o=t[2],e=Math.floor(1/(1-Y));return 0==n&&0==r&&0==o?[e,e,e]:(n>0&&e>n&&(n=e),r>0&&e>r&&(r=e),o>0&&e>o&&(o=e),[Math.min(Math.floor(n/Y),255),Math.min(Math.floor(r/Y),255),Math.min(Math.floor(o/Y),255)])}
	function f(t){return[Math.floor(t[0]*Y),Math.floor(t[1]*Y),Math.floor(t[2]*Y)]}
	function l(){p=Array(2*X.length-1);for(var t=0;t<X.length;t++)p[t]=a(r(X[t]),!0),p[2*X.length-2-t]=a(r(X[t]),!1)}
	function a(t,n){var r=document.createElement("canvas");r.width=T,r.height=T;var l=r.getContext("2d"),a=n?e(t):t,i=e(a),u=f(a);l.fillStyle=o(u),l.fillRect(0,0,T,T),l.fillStyle=o(a),l.fillRect(0,0,T-1,T-1),l.fillStyle=o(i),l.fillRect(1,1,T-3,T-3);var c=l.createLinearGradient(2,2,T-4,T-4);return c.addColorStop(0,o(a)),c.addColorStop(1,o(i)),l.fillStyle=c,l.fillRect(2,2,T-4,T-4),n&&(l.fillStyle=o(u),l.fillRect(8,8,T-16,T-16)),r}
	function i(){L.fillStyle="#262c4b",L.fillRect(0,0,B*T+2*O,I*T+2*O),L.fillStyle="#484d50",L.fillRect(0,I*T+2*O,B*T+2*O,N),L.font="bold 12px sans-serif",E[1]=G>1?n("선택: %s (%s 점)",G,y(G)):b?"":"게임 종료!",E[2]=n("점수: %s",A);for(var t=0;t<E.length;t++)L.fillStyle="#62696a",L.fillRect(Math.floor((B*T+2*O)/3)*t+1,I*T+2*O+1,Math.floor((B*T+2*O)/3)-2,N-2),L.fillStyle="#ffffff",L.fillText(E[t],Math.floor((B*T+2*O)/6)*(2*t+1)-Math.floor(L.measureText(E[t]).width/2),I*T+2*O+Math.floor(N/2)+4);for(var r=0;B>r;r++)for(var o=0;I>o;o++)L.drawImage(p[w[B*o+r]+q],r*T+O,o*T+O)}
	function u(){G=0,A=0,j=!1,b=!0;for(var t=0;t<w.length;t++)w[t]=Math.floor(Math.random()*q+1)}
	function c(t,n){return 0>t||0>n||t>B-1||n>I-1?0:w[B*n+t]}
	function h(t,n){return c(t,n)<0}
	function d(t,n){return 0==c(t,n)}
	function v(t,n){return c(t,n)<0?-1*c(t,n):c(t,n)}
	function y(t){return t*t-4*t+4}
	function M(t,n){return x(t,n,v(t,n))}
	function x(t,n,r){if(h(t,n)||r!=v(t,n)||d(t,n))return 0;var o=1;return w[B*n+t]=-1*v(t,n),o+=x(t-1,n,v(t,n)),o+=x(t,n-1,v(t,n)),o+=x(t+1,n,v(t,n)),o+=x(t,n+1,v(t,n))}
	function g(){for(var t=0;t<w.length;t++)w[t]=w[t]<0?-1*w[t]:w[t]}
	function m(t,n,r,o){var e=B*n+t,f=B*o+r,l=w[e];w[e]=w[f],w[f]=l}
	function s(n,r){var o=t(n),e=o.x<O?-1:Math.floor((o.x-O)/T),f=o.y<O?-1:Math.floor((o.y-O)/T);if((k.x!=e||k.y!=f)&&!h(e,f)||r){if(d(e,f)&&d(k.x,k.y))return k.x=e,void(k.y=f);g(),G=M(e,f),i(),k.x=e,k.y=f}}
	function S(n,r){var o=t(n),e=o.x<O?-1:Math.floor((o.x-O)/T),f=o.y<O?-1:Math.floor((o.y-O)/T);(k.x!=e||k.y!=f||r)&&(g(),G=0,i(),k.x=e,k.y=f)}
	function R(){C=document.getElementById("jsame4k"),null!=C&&C.getContext&&(L=C.getContext("2d"),l(),w=Array(B*I),k={x:-1,y:-1},E=["새 게임","",""],u(),i(),C.addEventListener("dblclick",function(n){var r,o,e,f,l=t(n);l.x>0&&l.x<Math.floor((B*T+2*O)/3)-1&&l.y>I*T+2*O&&l.y<I*T+2*O+N-1&&(u(),b=!0,G=0,i());var a=l.x<O?-1:Math.floor((l.x-O)/T),c=l.y<O?-1:Math.floor((l.y-O)/T);for(o=0,e=0;e<w.length;e++)w[e]<0&&o++;if(o>=2){for(e=0;e<w.length;e++)w[e]<0&&(w[e]=0);for(f=0;B>f;f++)for(r=!0;r;)for(r=!1,l=1;I>l;l++)d(f,l)&&!d(f,l-1)&&(m(f,l,f,l-1),r=!0);for(r=!0;r;)for(r=!1,f=1;B>f;f++)if(d(f-1,I-1)&&!d(f,I-1)){for(l=0;I>l;l++)m(f,l,f-1,l);r=!0}for(A+=y(o),r=!0,o=0,e=0;B>e;e++)for(f=0;I>f;f++)if(!d(e,f)&&(o++,l=v(e,f),v(e-1,f)==l||v(e,f-1)==l||v(e+1,f)==l||v(e,f+1)==l)){r=!1;break}0!=o||j||(j=!0,A+=1e3),G=0,r||(G=M(a,c)),r&&b&&(b=!1,G=0),i()}},!1),C.addEventListener("mouseup",function(t){s(t,!0)},!1))}
	var p,w,E,C,L,b,k,A,G,j,B=30,I=20,T=36,N=20,O=4,X=[9522747,8094582,4022919,11503186,2501707],Y=.7,q=X.length-1;R()}();
