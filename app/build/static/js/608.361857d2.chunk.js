"use strict";(self.webpackChunkcreate_sol_tokens=self.webpackChunkcreate_sol_tokens||[]).push([[608],{8608:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(4165),i=t(9439),s=t(5671),o=t(3144),a=t(136),u=t(9388),c=t(7143),d=t.n(c),p=t(4976),l=t(6315),h=t.n(l),f=function(e,n,t,r){return new(t||(t=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(n){s(n)}}function a(e){try{u(r.throw(e))}catch(n){s(n)}}function u(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,a)}u((r=r.apply(e,n||[])).next())}))},v=function(e){(0,a.Z)(t,e);var n=(0,u.Z)(t);function t(e,r){var o,a;if((0,s.Z)(this,t),(o=n.call(this))._network=r,o._publicKey=null,o._popup=null,o._handlerAdded=!1,o._nextRequestId=1,o._autoApprove=!1,o._responsePromises=new Map,o.handleMessage=function(e){var n;if(o._injectedProvider&&e.source===window||e.origin===(null===(n=o._providerUrl)||void 0===n?void 0:n.origin)&&e.source===o._popup)if("connected"===e.data.method){var t=new p.nh(e.data.params.publicKey);o._publicKey&&o._publicKey.equals(t)||(o._publicKey&&!o._publicKey.equals(t)&&o.handleDisconnect(),o._publicKey=t,o._autoApprove=!!e.data.params.autoApprove,o.emit("connect",o._publicKey))}else if("disconnected"===e.data.method)o.handleDisconnect();else if(e.data.result||e.data.error){var r=o._responsePromises.get(e.data.id);if(r){var s=(0,i.Z)(r,2),a=s[0],u=s[1];e.data.result?a(e.data.result):u(new Error(e.data.error))}}},o._beforeUnload=function(){o.disconnect()},function(e){return"object"===typeof e&&null!==e}(a=e)&&"postMessage"in a&&"function"===typeof a.postMessage)o._injectedProvider=e;else{if(!function(e){return"string"===typeof e}(e))throw new Error("provider parameter must be an injected provider or a URL string.");o._providerUrl=new URL(e),o._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:o._network}).toString()}return o}return(0,o.Z)(t,[{key:"handleConnect",value:function(){var e,n=this;return this._handlerAdded||(this._handlerAdded=!0,window.addEventListener("message",this.handleMessage),window.addEventListener("beforeunload",this._beforeUnload)),this._injectedProvider?new Promise((function(e){n.sendRequest("connect",{}),e()})):(window.name="parent",this._popup=window.open(null===(e=this._providerUrl)||void 0===e?void 0:e.toString(),"_blank","location,resizable,width=460,height=675"),new Promise((function(e){n.once("connect",e)})))}},{key:"handleDisconnect",value:function(){var e=this;this._handlerAdded&&(this._handlerAdded=!1,window.removeEventListener("message",this.handleMessage),window.removeEventListener("beforeunload",this._beforeUnload)),this._publicKey&&(this._publicKey=null,this.emit("disconnect")),this._responsePromises.forEach((function(n,t){var r=(0,i.Z)(n,2)[1];e._responsePromises.delete(t),r(new Error("Wallet disconnected"))}))}},{key:"sendRequest",value:function(e,n){return f(this,void 0,void 0,(0,r.Z)().mark((function t(){var i,s=this;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("connect"===e||this.connected){t.next=2;break}throw new Error("Wallet not connected");case 2:return i=this._nextRequestId,++this._nextRequestId,t.abrupt("return",new Promise((function(t,r){var o,a,u,c;s._responsePromises.set(i,[t,r]),s._injectedProvider?s._injectedProvider.postMessage({jsonrpc:"2.0",id:i,method:e,params:Object.assign({network:s._network},n)}):(null===(o=s._popup)||void 0===o||o.postMessage({jsonrpc:"2.0",id:i,method:e,params:n},null!==(u=null===(a=s._providerUrl)||void 0===a?void 0:a.origin)&&void 0!==u?u:""),s.autoApprove||null===(c=s._popup)||void 0===c||c.focus())})));case 5:case"end":return t.stop()}}),t,this)})))}},{key:"publicKey",get:function(){return this._publicKey}},{key:"connected",get:function(){return null!==this._publicKey}},{key:"autoApprove",get:function(){return this._autoApprove}},{key:"connect",value:function(){return f(this,void 0,void 0,(0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._popup&&this._popup.close(),e.next=3,this.handleConnect();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"disconnect",value:function(){return f(this,void 0,void 0,(0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._injectedProvider){e.next=3;break}return e.next=3,this.sendRequest("disconnect",{});case 3:this._popup&&this._popup.close(),this.handleDisconnect();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"sign",value:function(e,n){return f(this,void 0,void 0,(0,r.Z)().mark((function t(){var i,s,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e instanceof Uint8Array){t.next=2;break}throw new Error("Data must be an instance of Uint8Array");case 2:return t.next=4,this.sendRequest("sign",{data:e,display:n});case 4:return i=t.sent,s=h().decode(i.signature),o=new p.nh(i.publicKey),t.abrupt("return",{signature:s,publicKey:o});case 8:case"end":return t.stop()}}),t,this)})))}},{key:"signTransaction",value:function(e){return f(this,void 0,void 0,(0,r.Z)().mark((function n(){var t,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.sendRequest("signTransaction",{message:h().encode(e.serializeMessage())});case 2:return t=n.sent,i=h().decode(t.signature),s=new p.nh(t.publicKey),e.addSignature(s,i),n.abrupt("return",e);case 7:case"end":return n.stop()}}),n,this)})))}},{key:"signAllTransactions",value:function(e){return f(this,void 0,void 0,(0,r.Z)().mark((function n(){var t,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.sendRequest("signAllTransactions",{messages:e.map((function(e){return h().encode(e.serializeMessage())}))});case 2:return t=n.sent,i=t.signatures.map((function(e){return h().decode(e)})),s=new p.nh(t.publicKey),e=e.map((function(e,n){return e.addSignature(s,i[n]),e})),n.abrupt("return",e);case 7:case"end":return n.stop()}}),n,this)})))}},{key:"diffieHellman",value:function(e){return f(this,void 0,void 0,(0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e instanceof Uint8Array){n.next=2;break}throw new Error("Data must be an instance of Uint8Array");case 2:return n.next=4,this.sendRequest("diffieHellman",{publicKey:e});case 4:return t=n.sent,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n,this)})))}}]),t}(d())}}]);
//# sourceMappingURL=608.361857d2.chunk.js.map