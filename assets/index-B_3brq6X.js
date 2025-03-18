(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jf="172",Uo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Co={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$S=0,Em=1,qS=2,x_=1,YS=2,ti=3,rr=0,Kt=1,Ms=2,tr=0,Vr=1,bm=2,Am=3,Nm=4,jS=5,Dr=100,ZS=101,KS=102,JS=103,QS=104,eM=200,tM=201,nM=202,iM=203,Md=204,Td=205,sM=206,rM=207,oM=208,aM=209,cM=210,lM=211,uM=212,hM=213,dM=214,wd=0,Ed=1,bd=2,Yo=3,Ad=4,Nd=5,Rd=6,Cd=7,v_=0,fM=1,pM=2,Ui=0,mM=1,gM=2,_M=3,xM=4,vM=5,yM=6,SM=7,Zf=300,Gr=301,Wr=302,Pd=303,Ld=304,xu=306,Dd=1e3,Fr=1001,Id=1002,Bn=1003,MM=1004,Ac=1005,Zi=1006,Mh=1007,Qs=1008,TM=1008,Ns=1009,y_=1010,S_=1011,za=1012,vu=1013,or=1014,Li=1015,ns=1016,Kf=1017,Jf=1018,jo=1020,M_=35902,T_=1021,w_=1022,Di=1023,E_=1024,b_=1025,Oo=1026,Zo=1027,Qf=1028,ep=1029,$l=1030,tp=1031,np=1033,ml=33776,gl=33777,_l=33778,xl=33779,Ud=35840,Od=35841,Fd=35842,Vd=35843,zd=36196,Bd=37492,kd=37496,Hd=37808,Gd=37809,Wd=37810,Xd=37811,$d=37812,qd=37813,Yd=37814,jd=37815,Zd=37816,Kd=37817,Jd=37818,Qd=37819,ef=37820,tf=37821,vl=36492,nf=36494,sf=36495,A_=36283,rf=36284,of=36285,af=36286,wM=3200,EM=3201,ql=0,N_=1,Yi="",ni="srgb",ar="srgb-linear",Yl="linear",Ct="srgb",ao=7680,Rm=519,bM=512,R_=513,AM=514,C_=515,NM=516,RM=517,CM=518,PM=519,jl=35044,wa=35048,Cm="300 es",ai=2e3,Rs=2001;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pm=1234567;const La=Math.PI/180,Ba=180/Math.PI;function Qi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function ip(i,e){return(i%e+e)%e}function LM(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function DM(i,e,t){return i!==e?(t-i)/(e-i):0}function Da(i,e,t){return(1-t)*i+t*e}function IM(i,e,t,n){return Da(i,e,1-Math.exp(-t*n))}function UM(i,e=1){return e-Math.abs(ip(i,e*2)-e)}function OM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function FM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function VM(i,e){return i+Math.floor(Math.random()*(e-i+1))}function zM(i,e){return i+Math.random()*(e-i)}function BM(i){return i*(.5-Math.random())}function kM(i){i!==void 0&&(Pm=i);let e=Pm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function HM(i){return i*La}function GM(i){return i*Ba}function WM(i){return(i&i-1)===0&&i!==0}function XM(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $M(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qM(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*_,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*_,a*l);break;case"ZYZ":i.set(c*_,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yu={DEG2RAD:La,RAD2DEG:Ba,generateUUID:Qi,clamp:ht,euclideanModulo:ip,mapLinear:LM,inverseLerp:DM,lerp:Da,damp:IM,pingpong:UM,smoothstep:OM,smootherstep:FM,randInt:VM,randFloat:zM,randFloatSpread:BM,seededRandom:kM,degToRad:HM,radToDeg:GM,isPowerOfTwo:WM,ceilPowerOfTwo:XM,floorPowerOfTwo:$M,setQuaternionFromProperEuler:qM,normalize:Dt,denormalize:Ci};class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,n,s,r,o,a,c,l){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],_=n[8],x=s[0],m=s[3],f=s[6],w=s[1],y=s[4],v=s[7],D=s[2],C=s[5],N=s[8];return r[0]=o*x+a*w+c*D,r[3]=o*m+a*y+c*C,r[6]=o*f+a*v+c*N,r[1]=l*x+u*w+h*D,r[4]=l*m+u*y+h*C,r[7]=l*f+u*v+h*N,r[2]=d*x+p*w+_*D,r[5]=d*m+p*y+_*C,r[8]=d*f+p*v+_*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,p=l*r-o*c,_=t*h+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Th.makeScale(e,t)),this}rotate(e){return this.premultiply(Th.makeRotation(-e)),this}translate(e,t){return this.premultiply(Th.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Th=new at;function P_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function YM(){const i=Zl("canvas");return i.style.display="block",i}const Lm={};function bo(i){i in Lm||(Lm[i]=!0,console.warn(i))}function jM(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function ZM(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function KM(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Dm=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Im=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JM(){const i={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(s.r=Fo(s.r),s.g=Fo(s.g),s.b=Fo(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yi?Yl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ar]:{primaries:e,whitePoint:n,transfer:Yl,toXYZ:Dm,fromXYZ:Im,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:Dm,fromXYZ:Im,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),i}const lt=JM();function bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let co;class QM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{co===void 0&&(co=Zl("canvas")),co.width=e.width,co.height=e.height;const n=co.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=co}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bs(t[n]/255)*255):t[n]=bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eT=0;class L_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eT++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wh(s[o].image)):r.push(wh(s[o]))}else r=wh(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function wh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?QM.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tT=0;class bn extends Fs{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,n=Fr,s=Fr,r=Zi,o=Qs,a=Di,c=Ns,l=bn.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=Qi(),this.name="",this.source=new L_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dd:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case Id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dd:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case Id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Zf;bn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,s=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],_=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(p+1)/2,D=(f+1)/2,C=(u+d)/4,N=(h+x)/4,I=(_+m)/4;return y>v&&y>D?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=N/n):v>D?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=I/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=N/r,s=I/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(h-x)/w,this.z=(d-u)/w,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lr extends Fs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new bn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new L_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends lr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sp extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nT extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(h!==x||c!==d||l!==p||u!==_){let m=1-a;const f=c*d+l*p+u*_+h*x,w=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const D=Math.sqrt(y),C=Math.atan2(D,f*w);m=Math.sin(m*C)/D,a=Math.sin(a*C)/D}const v=a*w;if(c=c*m+d*v,l=l*m+p*v,u=u*m+_*v,h=h*m+x*v,m===1-a){const D=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=D,l*=D,u*=D,h*=D}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*p-l*d,e[t+1]=c*_+u*d+l*h-a*p,e[t+2]=l*_+u*p+a*d-c*h,e[t+3]=u*_-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"YZX":this._x=d*u*h+l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h-d*p*_;break;case"XZY":this._x=d*u*h-l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Eh.copy(this).projectOnVector(e),this.sub(Eh)}reflect(e){return this.sub(Eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eh=new R,Um=new $r;class as{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ti):Ti.fromBufferAttribute(r,o),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nc.copy(n.boundingBox)),Nc.applyMatrix4(e.matrixWorld),this.union(Nc)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),Rc.subVectors(this.max,ua),lo.subVectors(e.a,ua),uo.subVectors(e.b,ua),ho.subVectors(e.c,ua),Ws.subVectors(uo,lo),Xs.subVectors(ho,uo),Sr.subVectors(lo,ho);let t=[0,-Ws.z,Ws.y,0,-Xs.z,Xs.y,0,-Sr.z,Sr.y,Ws.z,0,-Ws.x,Xs.z,0,-Xs.x,Sr.z,0,-Sr.x,-Ws.y,Ws.x,0,-Xs.y,Xs.x,0,-Sr.y,Sr.x,0];return!bh(t,lo,uo,ho,Rc)||(t=[1,0,0,0,1,0,0,0,1],!bh(t,lo,uo,ho,Rc))?!1:(Cc.crossVectors(Ws,Xs),t=[Cc.x,Cc.y,Cc.z],bh(t,lo,uo,ho,Rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ds),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ds=[new R,new R,new R,new R,new R,new R,new R,new R],Ti=new R,Nc=new as,lo=new R,uo=new R,ho=new R,Ws=new R,Xs=new R,Sr=new R,ua=new R,Rc=new R,Cc=new R,Mr=new R;function bh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Mr.fromArray(i,r);const a=s.x*Math.abs(Mr.x)+s.y*Math.abs(Mr.y)+s.z*Math.abs(Mr.z),c=e.dot(Mr),l=t.dot(Mr),u=n.dot(Mr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const iT=new as,ha=new R,Ah=new R;class jr{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):iT.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const t=ha.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ha,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(Ah)),this.expandByPoint(ha.copy(e.center).sub(Ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fs=new R,Nh=new R,Pc=new R,$s=new R,Rh=new R,Lc=new R,Ch=new R;class D_{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fs.copy(this.origin).addScaledVector(this.direction,t),fs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Nh.copy(e).add(t).multiplyScalar(.5),Pc.copy(t).sub(e).normalize(),$s.copy(this.origin).sub(Nh);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Pc),a=$s.dot(this.direction),c=-$s.dot(Pc),l=$s.lengthSq(),u=Math.abs(1-o*o);let h,d,p,_;if(u>0)if(h=o*c-a,d=o*a-c,_=r*u,h>=0)if(d>=-_)if(d<=_){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Nh).addScaledVector(Pc,d),p}intersectSphere(e,t){fs.subVectors(e.center,this.origin);const n=fs.dot(this.direction),s=fs.dot(fs)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fs)!==null}intersectTriangle(e,t,n,s,r){Rh.subVectors(t,e),Lc.subVectors(n,e),Ch.crossVectors(Rh,Lc);let o=this.direction.dot(Ch),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$s.subVectors(this.origin,e);const c=a*this.direction.dot(Lc.crossVectors($s,Lc));if(c<0)return null;const l=a*this.direction.dot(Rh.cross($s));if(l<0||c+l>o)return null;const u=-a*$s.dot(Ch);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,n,s,r,o,a,c,l,u,h,d,p,_,x,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,p,_,x,m)}set(e,t,n,s,r,o,a,c,l,u,h,d,p,_,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/fo.setFromMatrixColumn(e,0).length(),r=1/fo.setFromMatrixColumn(e,1).length(),o=1/fo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,_=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,_=l*u,x=l*h;t[0]=d+x*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,_=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*h,_=a*u,x=a*h;t[0]=c*u,t[4]=_*l-p,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,_=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*c,p=o*l,_=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sT,e,rT)}lookAt(e,t,n){const s=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),qs.crossVectors(n,Jn),qs.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),qs.crossVectors(n,Jn)),qs.normalize(),Dc.crossVectors(Jn,qs),s[0]=qs.x,s[4]=Dc.x,s[8]=Jn.x,s[1]=qs.y,s[5]=Dc.y,s[9]=Jn.y,s[2]=qs.z,s[6]=Dc.z,s[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],_=n[2],x=n[6],m=n[10],f=n[14],w=n[3],y=n[7],v=n[11],D=n[15],C=s[0],N=s[4],I=s[8],E=s[12],M=s[1],U=s[5],J=s[9],$=s[13],se=s[2],oe=s[6],Q=s[10],ue=s[14],Y=s[3],we=s[7],Le=s[11],Be=s[15];return r[0]=o*C+a*M+c*se+l*Y,r[4]=o*N+a*U+c*oe+l*we,r[8]=o*I+a*J+c*Q+l*Le,r[12]=o*E+a*$+c*ue+l*Be,r[1]=u*C+h*M+d*se+p*Y,r[5]=u*N+h*U+d*oe+p*we,r[9]=u*I+h*J+d*Q+p*Le,r[13]=u*E+h*$+d*ue+p*Be,r[2]=_*C+x*M+m*se+f*Y,r[6]=_*N+x*U+m*oe+f*we,r[10]=_*I+x*J+m*Q+f*Le,r[14]=_*E+x*$+m*ue+f*Be,r[3]=w*C+y*M+v*se+D*Y,r[7]=w*N+y*U+v*oe+D*we,r[11]=w*I+y*J+v*Q+D*Le,r[15]=w*E+y*$+v*ue+D*Be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],f=e[15];return _*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*p-n*c*p)+x*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*u-r*c*u)+m*(+t*l*h-t*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+f*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],f=e[15],w=h*m*l-x*d*l+x*c*p-a*m*p-h*c*f+a*d*f,y=_*d*l-u*m*l-_*c*p+o*m*p+u*c*f-o*d*f,v=u*x*l-_*h*l+_*a*p-o*x*p-u*a*f+o*h*f,D=_*h*c-u*x*c-_*a*d+o*x*d+u*a*m-o*h*m,C=t*w+n*y+s*v+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/C;return e[0]=w*N,e[1]=(x*d*r-h*m*r-x*s*p+n*m*p+h*s*f-n*d*f)*N,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*f+n*c*f)*N,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*p-n*c*p)*N,e[4]=y*N,e[5]=(u*m*r-_*d*r+_*s*p-t*m*p-u*s*f+t*d*f)*N,e[6]=(_*c*r-o*m*r-_*s*l+t*m*l+o*s*f-t*c*f)*N,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*p+t*c*p)*N,e[8]=v*N,e[9]=(_*h*r-u*x*r-_*n*p+t*x*p+u*n*f-t*h*f)*N,e[10]=(o*x*r-_*a*r+_*n*l-t*x*l-o*n*f+t*a*f)*N,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*p-t*a*p)*N,e[12]=D*N,e[13]=(u*x*s-_*h*s+_*n*d-t*x*d-u*n*m+t*h*m)*N,e[14]=(_*a*s-o*x*s-_*n*c+t*x*c+o*n*m-t*a*m)*N,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,p=r*u,_=r*h,x=o*u,m=o*h,f=a*h,w=c*l,y=c*u,v=c*h,D=n.x,C=n.y,N=n.z;return s[0]=(1-(x+f))*D,s[1]=(p+v)*D,s[2]=(_-y)*D,s[3]=0,s[4]=(p-v)*C,s[5]=(1-(d+f))*C,s[6]=(m+w)*C,s[7]=0,s[8]=(_+y)*N,s[9]=(m-w)*N,s[10]=(1-(d+x))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=fo.set(s[0],s[1],s[2]).length();const o=fo.set(s[4],s[5],s[6]).length(),a=fo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],wi.copy(this);const l=1/r,u=1/o,h=1/a;return wi.elements[0]*=l,wi.elements[1]*=l,wi.elements[2]*=l,wi.elements[4]*=u,wi.elements[5]*=u,wi.elements[6]*=u,wi.elements[8]*=h,wi.elements[9]*=h,wi.elements[10]*=h,t.setFromRotationMatrix(wi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ai){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,_;if(a===ai)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Rs)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ai){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,p=(n+s)*u;let _,x;if(a===ai)_=(o+r)*h,x=-2*h;else if(a===Rs)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fo=new R,wi=new Ne,sT=new R(0,0,0),rT=new R(1,1,1),qs=new R,Dc=new R,Jn=new R,Om=new Ne,Fm=new $r;class is{constructor(e=0,t=0,n=0,s=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Om,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fm.setFromEuler(this),this.setFromQuaternion(Fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class I_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oT=0;const Vm=new R,po=new $r,ps=new Ne,Ic=new R,da=new R,aT=new R,cT=new $r,zm=new R(1,0,0),Bm=new R(0,1,0),km=new R(0,0,1),Hm={type:"added"},lT={type:"removed"},mo={type:"childadded",child:null},Ph={type:"childremoved",child:null};class Yn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const e=new R,t=new is,n=new $r,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new at}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.multiply(po),this}rotateOnWorldAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.premultiply(po),this}rotateX(e){return this.rotateOnAxis(zm,e)}rotateY(e){return this.rotateOnAxis(Bm,e)}rotateZ(e){return this.rotateOnAxis(km,e)}translateOnAxis(e,t){return Vm.copy(e).applyQuaternion(this.quaternion),this.position.add(Vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zm,e)}translateY(e){return this.translateOnAxis(Bm,e)}translateZ(e){return this.translateOnAxis(km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ps.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ic.copy(e):Ic.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ps.lookAt(da,Ic,this.up):ps.lookAt(Ic,da,this.up),this.quaternion.setFromRotationMatrix(ps),s&&(ps.extractRotation(s.matrixWorld),po.setFromRotationMatrix(ps),this.quaternion.premultiply(po.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hm),mo.child=e,this.dispatchEvent(mo),mo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lT),Ph.child=e,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ps.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ps.multiply(e.parent.matrixWorld)),e.applyMatrix4(ps),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hm),mo.child=e,this.dispatchEvent(mo),mo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,aT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,cT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Yn.DEFAULT_UP=new R(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new R,ms=new R,Lh=new R,gs=new R,go=new R,_o=new R,Gm=new R,Dh=new R,Ih=new R,Uh=new R,Oh=new _t,Fh=new _t,Vh=new _t;class Pi{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ei.subVectors(e,t),s.cross(Ei);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ei.subVectors(s,t),ms.subVectors(n,t),Lh.subVectors(e,t);const o=Ei.dot(Ei),a=Ei.dot(ms),c=Ei.dot(Lh),l=ms.dot(ms),u=ms.dot(Lh),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,_=(o*u-a*c)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gs)===null?!1:gs.x>=0&&gs.y>=0&&gs.x+gs.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,gs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gs.x),c.addScaledVector(o,gs.y),c.addScaledVector(a,gs.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Oh.setScalar(0),Fh.setScalar(0),Vh.setScalar(0),Oh.fromBufferAttribute(e,t),Fh.fromBufferAttribute(e,n),Vh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Oh,r.x),o.addScaledVector(Fh,r.y),o.addScaledVector(Vh,r.z),o}static isFrontFacing(e,t,n,s){return Ei.subVectors(n,t),ms.subVectors(e,t),Ei.cross(ms).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),ms.subVectors(this.a,this.b),Ei.cross(ms).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Pi.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;go.subVectors(s,n),_o.subVectors(r,n),Dh.subVectors(e,n);const c=go.dot(Dh),l=_o.dot(Dh);if(c<=0&&l<=0)return t.copy(n);Ih.subVectors(e,s);const u=go.dot(Ih),h=_o.dot(Ih);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(go,o);Uh.subVectors(e,r);const p=go.dot(Uh),_=_o.dot(Uh);if(_>=0&&p<=_)return t.copy(r);const x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(_o,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Gm.subVectors(r,s),a=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(Gm,a);const f=1/(m+x+d);return o=x*f,a=d*f,t.copy(n).addScaledVector(go,o).addScaledVector(_o,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const U_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function zh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=ip(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=zh(o,r,e+1/3),this.g=zh(o,r,e),this.b=zh(o,r,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,t=ni){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const n=U_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return lt.fromWorkingColorSpace(Cn.copy(this),e),Math.round(ht(Cn.r*255,0,255))*65536+Math.round(ht(Cn.g*255,0,255))*256+Math.round(ht(Cn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Cn.copy(this),t);const n=Cn.r,s=Cn.g,r=Cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=ni){lt.fromWorkingColorSpace(Cn.copy(this),e);const t=Cn.r,n=Cn.g,s=Cn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ys),this.setHSL(Ys.h+e,Ys.s+t,Ys.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ys),e.getHSL(Uc);const n=Da(Ys.h,Uc.h,t),s=Da(Ys.s,Uc.s,t),r=Da(Ys.l,Uc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ze;Ze.NAMES=U_;let uT=0;class qr extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Vr,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Md,this.blendDst=Td,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(n.blending=this.blending),this.side!==rr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Md&&(n.blendSrc=this.blendSrc),this.blendDst!==Td&&(n.blendDst=this.blendDst),this.blendEquation!==Dr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ao&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ao&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ao&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class re extends qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=v_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new R,Oc=new de;class ci{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jl,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oc.fromBufferAttribute(this,t),Oc.applyMatrix3(e),this.setXY(t,Oc.x,Oc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),s=Dt(s,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jl&&(e.usage=this.usage),e}}class O_ extends ci{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class F_ extends ci{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $t extends ci{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hT=0;const fi=new Ne,Bh=new Yn,xo=new R,Qn=new as,fa=new as,_n=new R;class Zn extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P_(e)?F_:O_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return Bh.lookAt(e),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];fa.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(Qn.min,fa.min),Qn.expandByPoint(_n),_n.addVectors(Qn.max,fa.max),Qn.expandByPoint(_n)):(Qn.expandByPoint(fa.min),Qn.expandByPoint(fa.max))}Qn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)_n.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_n));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)_n.fromBufferAttribute(a,l),c&&(xo.fromBufferAttribute(e,l),_n.add(xo)),s=Math.max(s,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new R,c[I]=new R;const l=new R,u=new R,h=new R,d=new de,p=new de,_=new de,x=new R,m=new R;function f(I,E,M){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,M),u.sub(l),h.sub(l),p.sub(d),_.sub(d);const U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(U),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(U),a[I].add(x),a[E].add(x),a[M].add(x),c[I].add(m),c[E].add(m),c[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,E=w.length;I<E;++I){const M=w[I],U=M.start,J=M.count;for(let $=U,se=U+J;$<se;$+=3)f(e.getX($+0),e.getX($+1),e.getX($+2))}const y=new R,v=new R,D=new R,C=new R;function N(I){D.fromBufferAttribute(s,I),C.copy(D);const E=a[I];y.copy(E),y.sub(D.multiplyScalar(D.dot(E))).normalize(),v.crossVectors(C,E);const U=v.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,U)}for(let I=0,E=w.length;I<E;++I){const M=w[I],U=M.start,J=M.count;for(let $=U,se=U+J;$<se;$+=3)N(e.getX($+0)),N(e.getX($+1)),N(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ci(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,u=new R,h=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let f=0;f<u;f++)d[_++]=l[p++]}return new ci(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wm=new Ne,Tr=new D_,Fc=new jr,Xm=new R,Vc=new R,zc=new R,Bc=new R,kh=new R,kc=new R,$m=new R,Hc=new R;class W extends Yn{constructor(e=new Zn,t=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){kc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(kh.fromBufferAttribute(h,e),o?kc.addScaledVector(kh,u):kc.addScaledVector(kh.sub(t),u))}t.add(kc)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fc.copy(n.boundingSphere),Fc.applyMatrix4(r),Tr.copy(e.ray).recast(e.near),!(Fc.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Fc,Xm)===null||Tr.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(Wm.copy(r).invert(),Tr.copy(e.ray).applyMatrix4(Wm),!(n.boundingBox!==null&&Tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=o[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,D=y;v<D;v+=3){const C=a.getX(v),N=a.getX(v+1),I=a.getX(v+2);s=Gc(this,f,e,n,l,u,h,C,N,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const w=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=Gc(this,o,e,n,l,u,h,w,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=o[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,D=y;v<D;v+=3){const C=v,N=v+1,I=v+2;s=Gc(this,f,e,n,l,u,h,C,N,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const w=m,y=m+1,v=m+2;s=Gc(this,o,e,n,l,u,h,w,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function dT(i,e,t,n,s,r,o,a){let c;if(e.side===Kt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===rr,a),c===null)return null;Hc.copy(a),Hc.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Hc);return l<t.near||l>t.far?null:{distance:l,point:Hc.clone(),object:i}}function Gc(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Vc),i.getVertexPosition(c,zc),i.getVertexPosition(l,Bc);const u=dT(i,e,t,n,Vc,zc,Bc,$m);if(u){const h=new R;Pi.getBarycoord($m,Vc,zc,Bc,h),s&&(u.uv=Pi.getInterpolatedAttribute(s,a,c,l,h,new de)),r&&(u.uv1=Pi.getInterpolatedAttribute(r,a,c,l,h,new de)),o&&(u.normal=Pi.getInterpolatedAttribute(o,a,c,l,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};Pi.getNormal(Vc,zc,Bc,d.normal),u.face=d,u.barycoord=h}return u}class ia extends Zn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2));function _(x,m,f,w,y,v,D,C,N,I,E){const M=v/N,U=D/I,J=v/2,$=D/2,se=C/2,oe=N+1,Q=I+1;let ue=0,Y=0;const we=new R;for(let Le=0;Le<Q;Le++){const Be=Le*U-$;for(let ct=0;ct<oe;ct++){const At=ct*M-J;we[x]=At*w,we[m]=Be*y,we[f]=se,l.push(we.x,we.y,we.z),we[x]=0,we[m]=0,we[f]=C>0?1:-1,u.push(we.x,we.y,we.z),h.push(ct/N),h.push(1-Le/I),ue+=1}}for(let Le=0;Le<I;Le++)for(let Be=0;Be<N;Be++){const ct=d+Be+oe*Le,At=d+Be+oe*(Le+1),ie=d+(Be+1)+oe*(Le+1),ye=d+(Be+1)+oe*Le;c.push(ct,At,ye),c.push(At,ie,ye),Y+=6}a.addGroup(p,Y,E),p+=Y,d+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ko(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Un(i){const e={};for(let t=0;t<i.length;t++){const n=Ko(i[t]);for(const s in n)e[s]=n[s]}return e}function fT(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function V_(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const rp={clone:Ko,merge:Un};var pT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cs extends qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pT,this.fragmentShader=mT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ko(e.uniforms),this.uniformsGroups=fT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class z_ extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const js=new R,qm=new de,Ym=new de;class Ni extends z_{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(js.x,js.y).multiplyScalar(-e/js.z),js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(js.x,js.y).multiplyScalar(-e/js.z)}getViewSize(e,t){return this.getViewBounds(e,qm,Ym),t.subVectors(Ym,qm)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(La*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vo=-90,yo=1;class gT extends Yn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ni(vo,yo,e,t);s.layers=this.layers,this.add(s);const r=new Ni(vo,yo,e,t);r.layers=this.layers,this.add(r);const o=new Ni(vo,yo,e,t);o.layers=this.layers,this.add(o);const a=new Ni(vo,yo,e,t);a.layers=this.layers,this.add(a);const c=new Ni(vo,yo,e,t);c.layers=this.layers,this.add(c);const l=new Ni(vo,yo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class B_ extends bn{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Gr,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _T extends Xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new B_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ia(5,5,5),r=new Cs({name:"CubemapFromEquirect",uniforms:Ko(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:tr});r.uniforms.tEquirect.value=t;const o=new W(s,r),a=t.minFilter;return t.minFilter===Qs&&(t.minFilter=Zi),new gT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class gn extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class k_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jl,this.updateRanges=[],this.version=0,this.uuid=Qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const In=new R;class Ts{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),s=Dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),s=Dt(s,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ci(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ts(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xT extends bn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Bn,u=Bn,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ka extends ci{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const So=new Ne,jm=new Ne,Wc=[],Zm=new as,vT=new Ne,pa=new W,ma=new jr;class yT extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ka(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new as),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,So),Zm.copy(e.boundingBox).applyMatrix4(So),this.boundingBox.union(Zm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,So),ma.copy(e.boundingSphere).applyMatrix4(So),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(n),e.ray.intersectsSphere(ma)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,So),jm.multiplyMatrices(n,So),pa.matrixWorld=jm,pa.raycast(e,Wc);for(let o=0,a=Wc.length;o<a;o++){const c=Wc[o];c.instanceId=r,c.object=this,t.push(c)}Wc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ka(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xT(new Float32Array(s*this.count),s,this.count,Qf,Li));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Hh=new R,ST=new R,MT=new at;class xs{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Hh.subVectors(n,t).cross(ST.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Hh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||MT.getNormalMatrix(e),s=this.coplanarPoint(Hh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new jr,Xc=new R;class H_{constructor(e=new xs,t=new xs,n=new xs,s=new xs,r=new xs,o=new xs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],p=s[8],_=s[9],x=s[10],m=s[11],f=s[12],w=s[13],y=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-p,v-f).normalize(),n[1].setComponents(c+r,d+l,m+p,v+f).normalize(),n[2].setComponents(c+o,d+u,m+_,v+w).normalize(),n[3].setComponents(c-o,d-u,m-_,v-w).normalize(),n[4].setComponents(c-a,d-h,m-x,v-y).normalize(),t===ai)n[5].setComponents(c+a,d+h,m+x,v+y).normalize();else if(t===Rs)n[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Xc.x=s.normal.x>0?e.max.x:e.min.x,Xc.y=s.normal.y>0?e.max.y:e.min.y,Xc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ea extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class G_ extends bn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Bn,this.minFilter=Bn,this.generateMipmaps=!1,this.needsUpdate=!0}}class Zr extends bn{constructor(e,t,n,s,r,o,a,c,l,u=Oo){if(u!==Oo&&u!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Oo&&(n=or),n===void 0&&u===Zo&&(n=jo),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bn,this.minFilter=c!==void 0?c:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cs{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new de:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,s=[],r=[],o=[],a=new R,c=new Ne;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ht(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,_))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(ht(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],p*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class op extends cs{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new de){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class TT extends op{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ap(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,p*=u,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const $c=new R,Gh=new ap,Wh=new ap,Xh=new ap;class wT extends cs{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:($c.subVectors(s[0],s[1]).add(s[0]),l=$c);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:($c.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=$c),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Gh.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,_,x,m),Wh.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,_,x,m),Xh.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(Gh.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Wh.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Xh.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Gh.calc(c),Wh.calc(c),Xh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Km(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function ET(i,e){const t=1-i;return t*t*e}function bT(i,e){return 2*(1-i)*i*e}function AT(i,e){return i*i*e}function Ia(i,e,t,n){return ET(i,e)+bT(i,t)+AT(i,n)}function NT(i,e){const t=1-i;return t*t*t*e}function RT(i,e){const t=1-i;return 3*t*t*i*e}function CT(i,e){return 3*(1-i)*i*i*e}function PT(i,e){return i*i*i*e}function Ua(i,e,t,n,s){return NT(i,e)+RT(i,t)+CT(i,n)+PT(i,s)}class W_ extends cs{constructor(e=new de,t=new de,n=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new de){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ua(e,s.x,r.x,o.x,a.x),Ua(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class LT extends cs{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ua(e,s.x,r.x,o.x,a.x),Ua(e,s.y,r.y,o.y,a.y),Ua(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class X_ extends cs{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DT extends cs{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $_ extends cs{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ia(e,s.x,r.x,o.x),Ia(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class IT extends cs{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ia(e,s.x,r.x,o.x),Ia(e,s.y,r.y,o.y),Ia(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class q_ extends cs{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Km(a,c.x,l.x,u.x,h.x),Km(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new de().fromArray(s))}return this}}var cf=Object.freeze({__proto__:null,ArcCurve:TT,CatmullRomCurve3:wT,CubicBezierCurve:W_,CubicBezierCurve3:LT,EllipseCurve:op,LineCurve:X_,LineCurve3:DT,QuadraticBezierCurve:$_,QuadraticBezierCurve3:IT,SplineCurve:q_});class UT extends cs{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cf[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new cf[s.type]().fromJSON(s))}return this}}class lf extends UT{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new X_(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new $_(this.currentPoint.clone(),new de(e,t),new de(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new W_(this.currentPoint.clone(),new de(e,t),new de(n,s),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new q_(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new op(e,t,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class cp extends Zn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const y=new R,v=new R,D=new R;for(let C=0;C<t.length;C+=3)p(t[C+0],y),p(t[C+1],v),p(t[C+2],D),c(y,v,D,w)}function c(w,y,v,D){const C=D+1,N=[];for(let I=0;I<=C;I++){N[I]=[];const E=w.clone().lerp(v,I/C),M=y.clone().lerp(v,I/C),U=C-I;for(let J=0;J<=U;J++)J===0&&I===C?N[I][J]=E:N[I][J]=E.clone().lerp(M,J/U)}for(let I=0;I<C;I++)for(let E=0;E<2*(C-I)-1;E++){const M=Math.floor(E/2);E%2===0?(d(N[I][M+1]),d(N[I+1][M]),d(N[I][M])):(d(N[I][M+1]),d(N[I+1][M+1]),d(N[I+1][M]))}}function l(w){const y=new R;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(w),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function u(){const w=new R;for(let y=0;y<r.length;y+=3){w.x=r[y+0],w.y=r[y+1],w.z=r[y+2];const v=m(w)/2/Math.PI+.5,D=f(w)/Math.PI+.5;o.push(v,1-D)}_(),h()}function h(){for(let w=0;w<o.length;w+=6){const y=o[w+0],v=o[w+2],D=o[w+4],C=Math.max(y,v,D),N=Math.min(y,v,D);C>.9&&N<.1&&(y<.2&&(o[w+0]+=1),v<.2&&(o[w+2]+=1),D<.2&&(o[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function p(w,y){const v=w*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function _(){const w=new R,y=new R,v=new R,D=new R,C=new de,N=new de,I=new de;for(let E=0,M=0;E<r.length;E+=9,M+=6){w.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),C.set(o[M+0],o[M+1]),N.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),D.copy(w).add(y).add(v).divideScalar(3);const U=m(D);x(C,M+0,w,U),x(N,M+2,y,U),x(I,M+4,v,U)}}function x(w,y,v,D){D<0&&w.x===1&&(o[y]=w.x-1),v.x===0&&v.z===0&&(o[y]=D/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cp(e.vertices,e.indices,e.radius,e.details)}}class yl extends lf{constructor(e){super(e),this.uuid=Qi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new lf().fromJSON(s))}return this}}const OT={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Y_(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,p;if(n&&(r=kT(i,e,r,t)),i.length>80*t){a=l=i[0],c=u=i[1];for(let _=t;_<s;_+=t)h=i[_],d=i[_+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);p=Math.max(l-a,u-c),p=p!==0?32767/p:0}return Ha(r,o,t,a,c,p,0),o}};function Y_(i,e,t,n,s){let r,o;if(s===JT(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Jm(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Jm(r,i[r],i[r+1],o);return o&&Su(o,o.next)&&(Wa(o),o=o.next),o}function Yr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Su(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Wa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ha(i,e,t,n,s,r,o){if(!i)return;!o&&r&&$T(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?VT(i,n,s,r):FT(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Wa(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=zT(Yr(i),e,t),Ha(i,e,t,n,s,r,2)):o===2&&BT(i,e,t,n,s,r):Ha(Yr(i),e,t,n,s,r,1);break}}}function FT(i){const e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=p&&Po(s,a,r,c,o,l,_.x,_.y)&&Xt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function VT(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Xt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,_=u<h?u<d?u:d:h<d?h:d,x=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,f=uf(p,_,e,t,n),w=uf(x,m,e,t,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=f&&v&&v.z<=w;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==o&&Po(a,u,c,h,l,d,y.x,y.y)&&Xt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=x&&v.y>=_&&v.y<=m&&v!==s&&v!==o&&Po(a,u,c,h,l,d,v.x,v.y)&&Xt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==o&&Po(a,u,c,h,l,d,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=w;){if(v.x>=p&&v.x<=x&&v.y>=_&&v.y<=m&&v!==s&&v!==o&&Po(a,u,c,h,l,d,v.x,v.y)&&Xt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function zT(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Su(s,r)&&j_(s,n,n.next,r)&&Ga(s,r)&&Ga(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Wa(n),Wa(n.next),n=i=r),n=n.next}while(n!==i);return Yr(n)}function BT(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&jT(o,a)){let c=Z_(o,a);o=Yr(o,o.next),c=Yr(c,c.next),Ha(o,e,t,n,s,r,0),Ha(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function kT(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Y_(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(YT(l));for(s.sort(HT),r=0;r<s.length;r++)t=GT(s[r],t);return t}function HT(i,e){return i.x-e.x}function GT(i,e){const t=WT(i,e);if(!t)return e;const n=Z_(t,i);return Yr(n,n.next),Yr(t,t.next)}function WT(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Po(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Ga(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&XT(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function XT(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function $T(i,e,t,n){let s=i;do s.z===0&&(s.z=uf(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qT(s)}function qT(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function uf(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function YT(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Po(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function jT(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ZT(i,e)&&(Ga(i,e)&&Ga(e,i)&&KT(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||Su(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Su(i,e){return i.x===e.x&&i.y===e.y}function j_(i,e,t,n){const s=Yc(Xt(i,e,t)),r=Yc(Xt(i,e,n)),o=Yc(Xt(t,n,i)),a=Yc(Xt(t,n,e));return!!(s!==r&&o!==a||s===0&&qc(i,t,e)||r===0&&qc(i,n,e)||o===0&&qc(t,i,n)||a===0&&qc(t,e,n))}function qc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Yc(i){return i>0?1:i<0?-1:0}function ZT(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&j_(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ga(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function KT(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Z_(i,e){const t=new hf(i.i,i.x,i.y),n=new hf(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Jm(i,e,t,n){const s=new hf(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Wa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hf(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function JT(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Vo{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Vo.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Qm(e),eg(n,e);let o=e.length;t.forEach(Qm);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,eg(n,t[c]);const a=OT.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Qm(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function eg(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class lp extends Zn{constructor(e=new yl([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new $t(s,3)),this.setAttribute("uv",new $t(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:QT;let y,v=!1,D,C,N,I;f&&(y=f.getSpacedPoints(u),v=!0,d=!1,D=f.computeFrenetFrames(u,!1),C=new R,N=new R,I=new R),d||(m=0,p=0,_=0,x=0);const E=a.extractPoints(l);let M=E.shape;const U=E.holes;if(!Vo.isClockWise(M)){M=M.reverse();for(let le=0,xe=U.length;le<xe;le++){const A=U[le];Vo.isClockWise(A)&&(U[le]=A.reverse())}}const $=Vo.triangulateShape(M,U),se=M;for(let le=0,xe=U.length;le<xe;le++){const A=U[le];M=M.concat(A)}function oe(le,xe,A){return xe||console.error("THREE.ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(xe,A)}const Q=M.length,ue=$.length;function Y(le,xe,A){let Ge,pe,Ue;const ve=le.x-xe.x,Qe=le.y-xe.y,Re=A.x-le.x,b=A.y-le.y,S=ve*ve+Qe*Qe,H=ve*b-Qe*Re;if(Math.abs(H)>Number.EPSILON){const te=Math.sqrt(S),he=Math.sqrt(Re*Re+b*b),ne=xe.x-Qe/te,He=xe.y+ve/te,Ee=A.x-b/he,Ie=A.y+Re/he,gt=((Ee-ne)*b-(Ie-He)*Re)/(ve*b-Qe*Re);Ge=ne+ve*gt-le.x,pe=He+Qe*gt-le.y;const ge=Ge*Ge+pe*pe;if(ge<=2)return new de(Ge,pe);Ue=Math.sqrt(ge/2)}else{let te=!1;ve>Number.EPSILON?Re>Number.EPSILON&&(te=!0):ve<-Number.EPSILON?Re<-Number.EPSILON&&(te=!0):Math.sign(Qe)===Math.sign(b)&&(te=!0),te?(Ge=-Qe,pe=ve,Ue=Math.sqrt(S)):(Ge=ve,pe=Qe,Ue=Math.sqrt(S/2))}return new de(Ge/Ue,pe/Ue)}const we=[];for(let le=0,xe=se.length,A=xe-1,Ge=le+1;le<xe;le++,A++,Ge++)A===xe&&(A=0),Ge===xe&&(Ge=0),we[le]=Y(se[le],se[A],se[Ge]);const Le=[];let Be,ct=we.concat();for(let le=0,xe=U.length;le<xe;le++){const A=U[le];Be=[];for(let Ge=0,pe=A.length,Ue=pe-1,ve=Ge+1;Ge<pe;Ge++,Ue++,ve++)Ue===pe&&(Ue=0),ve===pe&&(ve=0),Be[Ge]=Y(A[Ge],A[Ue],A[ve]);Le.push(Be),ct=ct.concat(Be)}for(let le=0;le<m;le++){const xe=le/m,A=p*Math.cos(xe*Math.PI/2),Ge=_*Math.sin(xe*Math.PI/2)+x;for(let pe=0,Ue=se.length;pe<Ue;pe++){const ve=oe(se[pe],we[pe],Ge);Se(ve.x,ve.y,-A)}for(let pe=0,Ue=U.length;pe<Ue;pe++){const ve=U[pe];Be=Le[pe];for(let Qe=0,Re=ve.length;Qe<Re;Qe++){const b=oe(ve[Qe],Be[Qe],Ge);Se(b.x,b.y,-A)}}}const At=_+x;for(let le=0;le<Q;le++){const xe=d?oe(M[le],ct[le],At):M[le];v?(N.copy(D.normals[0]).multiplyScalar(xe.x),C.copy(D.binormals[0]).multiplyScalar(xe.y),I.copy(y[0]).add(N).add(C),Se(I.x,I.y,I.z)):Se(xe.x,xe.y,0)}for(let le=1;le<=u;le++)for(let xe=0;xe<Q;xe++){const A=d?oe(M[xe],ct[xe],At):M[xe];v?(N.copy(D.normals[le]).multiplyScalar(A.x),C.copy(D.binormals[le]).multiplyScalar(A.y),I.copy(y[le]).add(N).add(C),Se(I.x,I.y,I.z)):Se(A.x,A.y,h/u*le)}for(let le=m-1;le>=0;le--){const xe=le/m,A=p*Math.cos(xe*Math.PI/2),Ge=_*Math.sin(xe*Math.PI/2)+x;for(let pe=0,Ue=se.length;pe<Ue;pe++){const ve=oe(se[pe],we[pe],Ge);Se(ve.x,ve.y,h+A)}for(let pe=0,Ue=U.length;pe<Ue;pe++){const ve=U[pe];Be=Le[pe];for(let Qe=0,Re=ve.length;Qe<Re;Qe++){const b=oe(ve[Qe],Be[Qe],Ge);v?Se(b.x,b.y+y[u-1].y,y[u-1].x+A):Se(b.x,b.y,h+A)}}}ie(),ye();function ie(){const le=s.length/3;if(d){let xe=0,A=Q*xe;for(let Ge=0;Ge<ue;Ge++){const pe=$[Ge];$e(pe[2]+A,pe[1]+A,pe[0]+A)}xe=u+m*2,A=Q*xe;for(let Ge=0;Ge<ue;Ge++){const pe=$[Ge];$e(pe[0]+A,pe[1]+A,pe[2]+A)}}else{for(let xe=0;xe<ue;xe++){const A=$[xe];$e(A[2],A[1],A[0])}for(let xe=0;xe<ue;xe++){const A=$[xe];$e(A[0]+Q*u,A[1]+Q*u,A[2]+Q*u)}}n.addGroup(le,s.length/3-le,0)}function ye(){const le=s.length/3;let xe=0;ke(se,xe),xe+=se.length;for(let A=0,Ge=U.length;A<Ge;A++){const pe=U[A];ke(pe,xe),xe+=pe.length}n.addGroup(le,s.length/3-le,1)}function ke(le,xe){let A=le.length;for(;--A>=0;){const Ge=A;let pe=A-1;pe<0&&(pe=le.length-1);for(let Ue=0,ve=u+m*2;Ue<ve;Ue++){const Qe=Q*Ue,Re=Q*(Ue+1),b=xe+Ge+Qe,S=xe+pe+Qe,H=xe+pe+Re,te=xe+Ge+Re;nt(b,S,H,te)}}}function Se(le,xe,A){c.push(le),c.push(xe),c.push(A)}function $e(le,xe,A){tt(le),tt(xe),tt(A);const Ge=s.length/3,pe=w.generateTopUV(n,s,Ge-3,Ge-2,Ge-1);yt(pe[0]),yt(pe[1]),yt(pe[2])}function nt(le,xe,A,Ge){tt(le),tt(xe),tt(Ge),tt(xe),tt(A),tt(Ge);const pe=s.length/3,Ue=w.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);yt(Ue[0]),yt(Ue[1]),yt(Ue[3]),yt(Ue[1]),yt(Ue[2]),yt(Ue[3])}function tt(le){s.push(c[le*3+0]),s.push(c[le*3+1]),s.push(c[le*3+2])}function yt(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ew(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new cf[s.type]().fromJSON(s)),new lp(n,e.options)}}const QT={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new de(r,o),new de(a,c),new de(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],p=e[s*3+1],_=e[s*3+2],x=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new de(o,1-c),new de(l,1-h),new de(d,1-_),new de(x,1-f)]:[new de(a,1-c),new de(u,1-h),new de(p,1-_),new de(m,1-f)]}};function ew(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class up extends cp{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new up(e.radius,e.detail)}}class Mu extends Zn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,p=[],_=[],x=[],m=[];for(let f=0;f<u;f++){const w=f*d-o;for(let y=0;y<l;y++){const v=y*h-r;_.push(v,-w,0),x.push(0,0,1),m.push(y/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<a;w++){const y=w+l*f,v=w+l*(f+1),D=w+1+l*(f+1),C=w+1+l*f;p.push(y,v,C),p.push(v,D,C)}this.setIndex(p),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mu(e.width,e.height,e.widthSegments,e.heightSegments)}}class ce extends Zn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new R,d=new R,p=[],_=[],x=[],m=[];for(let f=0;f<=n;f++){const w=[],y=f/n;let v=0;f===0&&o===0?v=.5/t:f===n&&c===Math.PI&&(v=-.5/t);for(let D=0;D<=t;D++){const C=D/t;h.x=-e*Math.cos(s+C*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+C*r)*Math.sin(o+y*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(C+v,1-y),w.push(l++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){const y=u[f][w+1],v=u[f][w],D=u[f+1][w],C=u[f+1][w+1];(f!==0||o>0)&&p.push(y,v,C),(f!==n-1||c<Math.PI)&&p.push(v,D,C)}this.setIndex(p),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ce(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gt extends Zn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new R,h=new R,d=new R;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){const x=_/s*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){const x=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,f=(s+1)*(p-1)+_,w=(s+1)*p+_;o.push(x,m,w),o.push(m,f,w)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class tw extends Zn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new R,r=new R;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],d=h.start,p=h.count;for(let _=d,x=d+p;_<x;_+=3)for(let m=0;m<3;m++){const f=a.getX(_+m),w=a.getX(_+(m+1)%3);s.fromBufferAttribute(o,f),r.fromBufferAttribute(o,w),tg(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,h=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),tg(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new $t(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function tg(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class Vt extends qr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ql,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class nw extends qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iw extends qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ng={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class sw{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],_=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const rw=new sw;class hp{constructor(e){this.manager=e!==void 0?e:rw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}hp.DEFAULT_MATERIAL_NAME="__DEFAULT";const _s={};class ow extends Error{constructor(e,t){super(e),this.response=t}}class aw extends hp{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ng.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_s[e]!==void 0){_s[e].push({onLoad:t,onProgress:n,onError:s});return}_s[e]=[],_s[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=_s[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let x=0;const m=new ReadableStream({start(f){w();function w(){h.read().then(({done:y,value:v})=>{if(y)f.close();else{x+=v.byteLength;const D=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let C=0,N=u.length;C<N;C++){const I=u[C];I.onProgress&&I.onProgress(D)}f.enqueue(v),w()}},y=>{f.error(y)})}}});return new Response(m)}else throw new ow(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{ng.add(e,l);const u=_s[e];delete _s[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=_s[e];if(u===void 0)throw this.manager.itemError(e),l;delete _s[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class dp extends z_{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cw extends Zn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class lw extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kl extends k_{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class ig{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const sg=new R,jc=new R;class uw{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){sg.subVectors(e,this.start),jc.subVectors(this.end,this.start);const n=jc.dot(jc);let r=jc.dot(sg)/n;return t&&(r=ht(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class hw{constructor(){this.type="ShapePath",this.color=new Ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new lf,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const w=[];for(let y=0,v=f.length;y<v;y++){const D=f[y],C=new yl;C.curves=D.curves,w.push(C)}return w}function n(f,w){const y=w.length;let v=!1;for(let D=y-1,C=0;C<y;D=C++){let N=w[D],I=w[C],E=I.x-N.x,M=I.y-N.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(N=w[C],E=-E,I=w[D],M=-M),f.y<N.y||f.y>I.y)continue;if(f.y===N.y){if(f.x===N.x)return!0}else{const U=M*(f.x-N.x)-E*(f.y-N.y);if(U===0)return!0;if(U<0)continue;v=!v}}else{if(f.y!==N.y)continue;if(I.x<=f.x&&f.x<=N.x||N.x<=f.x&&f.x<=I.x)return!0}}return v}const s=Vo.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new yl,c.curves=a.curves,l.push(c),l;let u=!s(r[0].getPoints());u=e?!u:u;const h=[],d=[];let p=[],_=0,x;d[_]=void 0,p[_]=[];for(let f=0,w=r.length;f<w;f++)a=r[f],x=a.getPoints(),o=s(x),o=e?!o:o,o?(!u&&d[_]&&_++,d[_]={s:new yl,p:x},d[_].s.curves=a.curves,u&&_++,p[_]=[]):p[_].push({h:a,p:x[0]});if(!d[0])return t(r);if(d.length>1){let f=!1,w=0;for(let y=0,v=d.length;y<v;y++)h[y]=[];for(let y=0,v=d.length;y<v;y++){const D=p[y];for(let C=0;C<D.length;C++){const N=D[C];let I=!0;for(let E=0;E<d.length;E++)n(N.p,d[E].p)&&(y!==E&&w++,I?(I=!1,h[E].push(N)):f=!0);I&&h[y].push(N)}}w>0&&f===!1&&(p=h)}let m;for(let f=0,w=d.length;f<w;f++){c=d[f].s,l.push(c),m=p[f];for(let y=0,v=m.length;y<v;y++)c.holes.push(m[y].h)}return l}}class dw extends Fs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function rg(i,e,t,n){const s=fw(n);switch(t){case T_:return i*e;case E_:return i*e;case b_:return i*e*2;case Qf:return i*e/s.components*s.byteLength;case ep:return i*e/s.components*s.byteLength;case $l:return i*e*2/s.components*s.byteLength;case tp:return i*e*2/s.components*s.byteLength;case w_:return i*e*3/s.components*s.byteLength;case Di:return i*e*4/s.components*s.byteLength;case np:return i*e*4/s.components*s.byteLength;case ml:case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _l:case xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Od:case Vd:return Math.max(i,16)*Math.max(e,8)/4;case Ud:case Fd:return Math.max(i,8)*Math.max(e,8)/2;case zd:case Bd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $d:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case qd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ef:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case tf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vl:case nf:case sf:return Math.ceil(i/4)*Math.ceil(e/4)*16;case A_:case rf:return Math.ceil(i/4)*Math.ceil(e/4)*8;case of:case af:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fw(i){switch(i){case Ns:case y_:return{byteLength:1,components:1};case za:case S_:case ns:return{byteLength:2,components:1};case Kf:case Jf:return{byteLength:2,components:4};case or:case vu:case Li:return{byteLength:4,components:1};case M_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function K_(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function pw(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const x=h[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var mw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_w=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ww=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ew=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Aw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ow=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ww=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xw="gl_FragColor = linearToOutputTexel( gl_FragColor );",$w=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_E=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ME=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,VE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,WE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ib=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ob=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ab=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_b=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Db=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ub=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ob=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$b=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:mw,alphahash_pars_fragment:gw,alphamap_fragment:_w,alphamap_pars_fragment:xw,alphatest_fragment:vw,alphatest_pars_fragment:yw,aomap_fragment:Sw,aomap_pars_fragment:Mw,batching_pars_vertex:Tw,batching_vertex:ww,begin_vertex:Ew,beginnormal_vertex:bw,bsdfs:Aw,iridescence_fragment:Nw,bumpmap_pars_fragment:Rw,clipping_planes_fragment:Cw,clipping_planes_pars_fragment:Pw,clipping_planes_pars_vertex:Lw,clipping_planes_vertex:Dw,color_fragment:Iw,color_pars_fragment:Uw,color_pars_vertex:Ow,color_vertex:Fw,common:Vw,cube_uv_reflection_fragment:zw,defaultnormal_vertex:Bw,displacementmap_pars_vertex:kw,displacementmap_vertex:Hw,emissivemap_fragment:Gw,emissivemap_pars_fragment:Ww,colorspace_fragment:Xw,colorspace_pars_fragment:$w,envmap_fragment:qw,envmap_common_pars_fragment:Yw,envmap_pars_fragment:jw,envmap_pars_vertex:Zw,envmap_physical_pars_fragment:aE,envmap_vertex:Kw,fog_vertex:Jw,fog_pars_vertex:Qw,fog_fragment:eE,fog_pars_fragment:tE,gradientmap_pars_fragment:nE,lightmap_pars_fragment:iE,lights_lambert_fragment:sE,lights_lambert_pars_fragment:rE,lights_pars_begin:oE,lights_toon_fragment:cE,lights_toon_pars_fragment:lE,lights_phong_fragment:uE,lights_phong_pars_fragment:hE,lights_physical_fragment:dE,lights_physical_pars_fragment:fE,lights_fragment_begin:pE,lights_fragment_maps:mE,lights_fragment_end:gE,logdepthbuf_fragment:_E,logdepthbuf_pars_fragment:xE,logdepthbuf_pars_vertex:vE,logdepthbuf_vertex:yE,map_fragment:SE,map_pars_fragment:ME,map_particle_fragment:TE,map_particle_pars_fragment:wE,metalnessmap_fragment:EE,metalnessmap_pars_fragment:bE,morphinstance_vertex:AE,morphcolor_vertex:NE,morphnormal_vertex:RE,morphtarget_pars_vertex:CE,morphtarget_vertex:PE,normal_fragment_begin:LE,normal_fragment_maps:DE,normal_pars_fragment:IE,normal_pars_vertex:UE,normal_vertex:OE,normalmap_pars_fragment:FE,clearcoat_normal_fragment_begin:VE,clearcoat_normal_fragment_maps:zE,clearcoat_pars_fragment:BE,iridescence_pars_fragment:kE,opaque_fragment:HE,packing:GE,premultiplied_alpha_fragment:WE,project_vertex:XE,dithering_fragment:$E,dithering_pars_fragment:qE,roughnessmap_fragment:YE,roughnessmap_pars_fragment:jE,shadowmap_pars_fragment:ZE,shadowmap_pars_vertex:KE,shadowmap_vertex:JE,shadowmask_pars_fragment:QE,skinbase_vertex:eb,skinning_pars_vertex:tb,skinning_vertex:nb,skinnormal_vertex:ib,specularmap_fragment:sb,specularmap_pars_fragment:rb,tonemapping_fragment:ob,tonemapping_pars_fragment:ab,transmission_fragment:cb,transmission_pars_fragment:lb,uv_pars_fragment:ub,uv_pars_vertex:hb,uv_vertex:db,worldpos_vertex:fb,background_vert:pb,background_frag:mb,backgroundCube_vert:gb,backgroundCube_frag:_b,cube_vert:xb,cube_frag:vb,depth_vert:yb,depth_frag:Sb,distanceRGBA_vert:Mb,distanceRGBA_frag:Tb,equirect_vert:wb,equirect_frag:Eb,linedashed_vert:bb,linedashed_frag:Ab,meshbasic_vert:Nb,meshbasic_frag:Rb,meshlambert_vert:Cb,meshlambert_frag:Pb,meshmatcap_vert:Lb,meshmatcap_frag:Db,meshnormal_vert:Ib,meshnormal_frag:Ub,meshphong_vert:Ob,meshphong_frag:Fb,meshphysical_vert:Vb,meshphysical_frag:zb,meshtoon_vert:Bb,meshtoon_frag:kb,points_vert:Hb,points_frag:Gb,shadow_vert:Wb,shadow_frag:Xb,sprite_vert:$b,sprite_frag:qb},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Wn={basic:{uniforms:Un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Un([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Un([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Un([Me.points,Me.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Un([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Un([Me.common,Me.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Un([Me.sprite,Me.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Un([Me.common,Me.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Un([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Wn.physical={uniforms:Un([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Zc={r:0,b:0,g:0},Er=new is,Yb=new Ne;function jb(i,e,t,n,s,r,o){const a=new Ze(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function x(y){let v=!1;const D=_(y);D===null?f(a,c):D&&D.isColor&&(f(D,1),v=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const D=_(v);D&&(D.isCubeTexture||D.mapping===xu)?(u===void 0&&(u=new W(new ia(1,1,1),new Cs({name:"BackgroundCubeMaterial",uniforms:Ko(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Er.copy(v.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yb.makeRotationFromEuler(Er)),u.material.toneMapped=lt.getTransfer(D.colorSpace)!==Ct,(h!==D||d!==D.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=D,d=D.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new W(new Mu(2,2),new Cs({name:"BackgroundMaterial",uniforms:Ko(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=lt.getTransfer(D.colorSpace)!==Ct,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||d!==D.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=D,d=D.version,p=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,v){y.getRGB(Zc,V_(i)),n.buffers.color.setClear(Zc.r,Zc.g,Zc.b,v,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(a,c)},render:x,addToRenderList:m,dispose:w}}function Zb(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,U,J,$,se){let oe=!1;const Q=h($,J,U);r!==Q&&(r=Q,l(r.object)),oe=p(M,$,J,se),oe&&_(M,$,J,se),se!==null&&e.update(se,i.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,v(M,U,J,$),se!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,U,J){const $=J.wireframe===!0;let se=n[M.id];se===void 0&&(se={},n[M.id]=se);let oe=se[U.id];oe===void 0&&(oe={},se[U.id]=oe);let Q=oe[$];return Q===void 0&&(Q=d(c()),oe[$]=Q),Q}function d(M){const U=[],J=[],$=[];for(let se=0;se<t;se++)U[se]=0,J[se]=0,$[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:J,attributeDivisors:$,object:M,attributes:{},index:null}}function p(M,U,J,$){const se=r.attributes,oe=U.attributes;let Q=0;const ue=J.getAttributes();for(const Y in ue)if(ue[Y].location>=0){const Le=se[Y];let Be=oe[Y];if(Be===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Be=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Be=M.instanceColor)),Le===void 0||Le.attribute!==Be||Be&&Le.data!==Be.data)return!0;Q++}return r.attributesNum!==Q||r.index!==$}function _(M,U,J,$){const se={},oe=U.attributes;let Q=0;const ue=J.getAttributes();for(const Y in ue)if(ue[Y].location>=0){let Le=oe[Y];Le===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Le=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Le=M.instanceColor));const Be={};Be.attribute=Le,Le&&Le.data&&(Be.data=Le.data),se[Y]=Be,Q++}r.attributes=se,r.attributesNum=Q,r.index=$}function x(){const M=r.newAttributes;for(let U=0,J=M.length;U<J;U++)M[U]=0}function m(M){f(M,0)}function f(M,U){const J=r.newAttributes,$=r.enabledAttributes,se=r.attributeDivisors;J[M]=1,$[M]===0&&(i.enableVertexAttribArray(M),$[M]=1),se[M]!==U&&(i.vertexAttribDivisor(M,U),se[M]=U)}function w(){const M=r.newAttributes,U=r.enabledAttributes;for(let J=0,$=U.length;J<$;J++)U[J]!==M[J]&&(i.disableVertexAttribArray(J),U[J]=0)}function y(M,U,J,$,se,oe,Q){Q===!0?i.vertexAttribIPointer(M,U,J,se,oe):i.vertexAttribPointer(M,U,J,$,se,oe)}function v(M,U,J,$){x();const se=$.attributes,oe=J.getAttributes(),Q=U.defaultAttributeValues;for(const ue in oe){const Y=oe[ue];if(Y.location>=0){let we=se[ue];if(we===void 0&&(ue==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),ue==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),we!==void 0){const Le=we.normalized,Be=we.itemSize,ct=e.get(we);if(ct===void 0)continue;const At=ct.buffer,ie=ct.type,ye=ct.bytesPerElement,ke=ie===i.INT||ie===i.UNSIGNED_INT||we.gpuType===vu;if(we.isInterleavedBufferAttribute){const Se=we.data,$e=Se.stride,nt=we.offset;if(Se.isInstancedInterleavedBuffer){for(let tt=0;tt<Y.locationSize;tt++)f(Y.location+tt,Se.meshPerAttribute);M.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let tt=0;tt<Y.locationSize;tt++)m(Y.location+tt);i.bindBuffer(i.ARRAY_BUFFER,At);for(let tt=0;tt<Y.locationSize;tt++)y(Y.location+tt,Be/Y.locationSize,ie,Le,$e*ye,(nt+Be/Y.locationSize*tt)*ye,ke)}else{if(we.isInstancedBufferAttribute){for(let Se=0;Se<Y.locationSize;Se++)f(Y.location+Se,we.meshPerAttribute);M.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Se=0;Se<Y.locationSize;Se++)m(Y.location+Se);i.bindBuffer(i.ARRAY_BUFFER,At);for(let Se=0;Se<Y.locationSize;Se++)y(Y.location+Se,Be/Y.locationSize,ie,Le,Be*ye,Be/Y.locationSize*Se*ye,ke)}}else if(Q!==void 0){const Le=Q[ue];if(Le!==void 0)switch(Le.length){case 2:i.vertexAttrib2fv(Y.location,Le);break;case 3:i.vertexAttrib3fv(Y.location,Le);break;case 4:i.vertexAttrib4fv(Y.location,Le);break;default:i.vertexAttrib1fv(Y.location,Le)}}}}w()}function D(){I();for(const M in n){const U=n[M];for(const J in U){const $=U[J];for(const se in $)u($[se].object),delete $[se];delete U[J]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const U=n[M.id];for(const J in U){const $=U[J];for(const se in $)u($[se].object),delete $[se];delete U[J]}delete n[M.id]}function N(M){for(const U in n){const J=n[U];if(J[M.id]===void 0)continue;const $=J[M.id];for(const se in $)u($[se].object),delete $[se];delete J[M.id]}}function I(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function Kb(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*d[x];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Jb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Di&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const I=N===ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Ns&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Li&&!I)}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:D,maxSamples:C}}function Qb(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new xs,a=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const w=r?0:n,y=w*4;let v=f.clippingState||null;c.value=v,v=u(_,d,y,p);for(let D=0;D!==y;++D)v[D]=t[D];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const f=p+x*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==x;++y,v+=4)o.copy(h[y]).applyMatrix4(w,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function eA(i){let e=new WeakMap;function t(o,a){return a===Pd?o.mapping=Gr:a===Ld&&(o.mapping=Wr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pd||a===Ld)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new _T(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Lo=4,og=[.125,.215,.35,.446,.526,.582],Ir=20,$h=new dp,ag=new Ze;let qh=null,Yh=0,jh=0,Zh=!1;const Lr=(1+Math.sqrt(5))/2,Mo=1/Lr,cg=[new R(-Lr,Mo,0),new R(Lr,Mo,0),new R(-Mo,0,Lr),new R(Mo,0,Lr),new R(0,Lr,-Mo),new R(0,Lr,Mo),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class lg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qh,Yh,jh),this._renderer.xr.enabled=Zh,e.scissorTest=!1,Kc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gr||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zi,minFilter:Zi,generateMipmaps:!1,type:ns,format:Di,colorSpace:ar,depthBuffer:!1},s=ug(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ug(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tA(r)),this._blurMaterial=nA(r,e,t)}return s}_compileMaterial(e){const t=new W(this._lodPlanes[0],e);this._renderer.compile(t,$h)}_sceneToCubeUV(e,t,n,s){const a=new Ni(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ag),u.toneMapping=Ui,u.autoClear=!1;const p=new re({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),_=new W(new ia,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(ag),x=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):w===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const y=this._cubeSize;Kc(s,w*y,f>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Gr||e.mapping===Wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hg());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new W(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Kc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,$h)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cg[(s-r-1)%cg.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new W(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ir-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):Ir;m>Ir&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);const f=[];let w=0;for(let N=0;N<Ir;++N){const I=N/x,E=Math.exp(-I*I/2);f.push(E),N===0?w+=E:N<m&&(w+=2*E)}for(let N=0;N<f.length;N++)f[N]=f[N]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const v=this._sizeLods[s],D=3*v*(s>y-Lo?s-y+Lo:0),C=4*(this._cubeSize-v);Kc(t,D,C,3*v,2*v),c.setRenderTarget(t),c.render(h,$h)}}function tA(i){const e=[],t=[],n=[];let s=i;const r=i-Lo+1+og.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Lo?c=og[o-i+Lo-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,m=2,f=1,w=new Float32Array(x*_*p),y=new Float32Array(m*_*p),v=new Float32Array(f*_*p);for(let C=0;C<p;C++){const N=C%3*2/3-1,I=C>2?0:-1,E=[N,I,0,N+2/3,I,0,N+2/3,I+1,0,N,I,0,N+2/3,I+1,0,N,I+1,0];w.set(E,x*_*C),y.set(d,m*_*C);const M=[C,C,C,C,C,C];v.set(M,f*_*C)}const D=new Zn;D.setAttribute("position",new ci(w,x)),D.setAttribute("uv",new ci(y,m)),D.setAttribute("faceIndex",new ci(v,f)),e.push(D),s>Lo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ug(i,e,t){const n=new Xr(i,e,t);return n.texture.mapping=xu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function nA(i,e,t){const n=new Float32Array(Ir),s=new R(0,1,0);return new Cs({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function hg(){return new Cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function dg(){return new Cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function fp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iA(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Pd||c===Ld,u=c===Gr||c===Wr;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new lg(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new lg(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function sA(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&bo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rA(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const w=p.array;x=p.version;for(let y=0,v=w.length;y<v;y+=3){const D=w[y+0],C=w[y+1],N=w[y+2];d.push(D,C,C,N,N,D)}}else if(_!==void 0){const w=_.array;x=_.version;for(let y=0,v=w.length/3-1;y<v;y+=3){const D=y+0,C=y+1,N=y+2;d.push(D,C,C,N,N,D)}}else return;const m=new(P_(d)?F_:O_)(d,1);m.version=x;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function oA(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,d*o,_),t.update(p,n,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function h(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,_);let f=0;for(let w=0;w<_;w++)f+=p[w]*x[w];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function aA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function cA(i,e,t){const n=new WeakMap,s=new _t;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let D=a.attributes.position.count*v,C=1;D>e.maxTextureSize&&(C=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const N=new Float32Array(D*C*4*h),I=new sp(N,D,C,h);I.type=Li,I.needsUpdate=!0;const E=v*4;for(let U=0;U<h;U++){const J=f[U],$=w[U],se=y[U],oe=D*C*4*U;for(let Q=0;Q<J.count;Q++){const ue=Q*E;_===!0&&(s.fromBufferAttribute(J,Q),N[oe+ue+0]=s.x,N[oe+ue+1]=s.y,N[oe+ue+2]=s.z,N[oe+ue+3]=0),x===!0&&(s.fromBufferAttribute($,Q),N[oe+ue+4]=s.x,N[oe+ue+5]=s.y,N[oe+ue+6]=s.z,N[oe+ue+7]=0),m===!0&&(s.fromBufferAttribute(se,Q),N[oe+ue+8]=s.x,N[oe+ue+9]=s.y,N[oe+ue+10]=s.z,N[oe+ue+11]=se.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new de(D,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function lA(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const J_=new bn,fg=new Zr(1,1),Q_=new sp,ex=new nT,tx=new B_,pg=[],mg=[],gg=new Float32Array(16),_g=new Float32Array(9),xg=new Float32Array(4);function sa(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=pg[s];if(r===void 0&&(r=new Float32Array(s),pg[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function pn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Tu(i,e){let t=mg[e];t===void 0&&(t=new Int32Array(e),mg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function uA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2fv(this.addr,e),mn(t,e)}}function dA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;i.uniform3fv(this.addr,e),mn(t,e)}}function fA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4fv(this.addr,e),mn(t,e)}}function pA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;xg.set(n),i.uniformMatrix2fv(this.addr,!1,xg),mn(t,n)}}function mA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;_g.set(n),i.uniformMatrix3fv(this.addr,!1,_g),mn(t,n)}}function gA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;gg.set(n),i.uniformMatrix4fv(this.addr,!1,gg),mn(t,n)}}function _A(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2iv(this.addr,e),mn(t,e)}}function vA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3iv(this.addr,e),mn(t,e)}}function yA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4iv(this.addr,e),mn(t,e)}}function SA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function MA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2uiv(this.addr,e),mn(t,e)}}function TA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3uiv(this.addr,e),mn(t,e)}}function wA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4uiv(this.addr,e),mn(t,e)}}function EA(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fg.compareFunction=C_,r=fg):r=J_,t.setTexture2D(e||r,s)}function bA(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ex,s)}function AA(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||tx,s)}function NA(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Q_,s)}function RA(i){switch(i){case 5126:return uA;case 35664:return hA;case 35665:return dA;case 35666:return fA;case 35674:return pA;case 35675:return mA;case 35676:return gA;case 5124:case 35670:return _A;case 35667:case 35671:return xA;case 35668:case 35672:return vA;case 35669:case 35673:return yA;case 5125:return SA;case 36294:return MA;case 36295:return TA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return bA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return NA}}function CA(i,e){i.uniform1fv(this.addr,e)}function PA(i,e){const t=sa(e,this.size,2);i.uniform2fv(this.addr,t)}function LA(i,e){const t=sa(e,this.size,3);i.uniform3fv(this.addr,t)}function DA(i,e){const t=sa(e,this.size,4);i.uniform4fv(this.addr,t)}function IA(i,e){const t=sa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function UA(i,e){const t=sa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function OA(i,e){const t=sa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function FA(i,e){i.uniform1iv(this.addr,e)}function VA(i,e){i.uniform2iv(this.addr,e)}function zA(i,e){i.uniform3iv(this.addr,e)}function BA(i,e){i.uniform4iv(this.addr,e)}function kA(i,e){i.uniform1uiv(this.addr,e)}function HA(i,e){i.uniform2uiv(this.addr,e)}function GA(i,e){i.uniform3uiv(this.addr,e)}function WA(i,e){i.uniform4uiv(this.addr,e)}function XA(i,e,t){const n=this.cache,s=e.length,r=Tu(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||J_,r[o])}function $A(i,e,t){const n=this.cache,s=e.length,r=Tu(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ex,r[o])}function qA(i,e,t){const n=this.cache,s=e.length,r=Tu(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||tx,r[o])}function YA(i,e,t){const n=this.cache,s=e.length,r=Tu(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Q_,r[o])}function jA(i){switch(i){case 5126:return CA;case 35664:return PA;case 35665:return LA;case 35666:return DA;case 35674:return IA;case 35675:return UA;case 35676:return OA;case 5124:case 35670:return FA;case 35667:case 35671:return VA;case 35668:case 35672:return zA;case 35669:case 35673:return BA;case 5125:return kA;case 36294:return HA;case 36295:return GA;case 36296:return WA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return $A;case 35680:case 36300:case 36308:case 36293:return qA;case 36289:case 36303:case 36311:case 36292:return YA}}class ZA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=RA(t.type)}}class KA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jA(t.type)}}class JA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Kh=/(\w+)(\])?(\[|\.)?/g;function vg(i,e){i.seq.push(e),i.map[e.id]=e}function QA(i,e,t){const n=i.name,s=n.length;for(Kh.lastIndex=0;;){const r=Kh.exec(n),o=Kh.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){vg(t,l===void 0?new ZA(a,i,e):new KA(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new JA(a),vg(t,h)),t=h}}}class Sl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);QA(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function yg(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const e1=37297;let t1=0;function n1(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Sg=new at;function i1(i){lt._getMatrix(Sg,lt.workingColorSpace,i);const e=`mat3( ${Sg.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Yl:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Mg(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+n1(i.getShaderSource(e),o)}else return s}function s1(i,e){const t=i1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function r1(i,e){let t;switch(e){case mM:t="Linear";break;case gM:t="Reinhard";break;case _M:t="Cineon";break;case xM:t="ACESFilmic";break;case yM:t="AgX";break;case SM:t="Neutral";break;case vM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jc=new R;function o1(){lt.getLuminanceCoefficients(Jc);const i=Jc.x.toFixed(4),e=Jc.y.toFixed(4),t=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function c1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ba(i){return i!==""}function Tg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u1=/^[ \t]*#include +<([\w\d./]+)>/gm;function df(i){return i.replace(u1,d1)}const h1=new Map;function d1(i,e){let t=ft[e];if(t===void 0){const n=h1.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return df(t)}const f1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eg(i){return i.replace(f1,p1)}function p1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function m1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===x_?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===YS?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function g1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gr:case Wr:e="ENVMAP_TYPE_CUBE";break;case xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wr:e="ENVMAP_MODE_REFRACTION";break}return e}function x1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case v_:e="ENVMAP_BLENDING_MULTIPLY";break;case fM:e="ENVMAP_BLENDING_MIX";break;case pM:e="ENVMAP_BLENDING_ADD";break}return e}function v1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function y1(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=m1(t),l=g1(t),u=_1(t),h=x1(t),d=v1(t),p=a1(t),_=c1(r),x=s.createProgram();let m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ba).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ba).join(`
`),f.length>0&&(f+=`
`)):(m=[bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),f=[bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?ft.tonemapping_pars_fragment:"",t.toneMapping!==Ui?r1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,s1("linearToOutputTexel",t.outputColorSpace),o1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ba).join(`
`)),o=df(o),o=Tg(o,t),o=wg(o,t),a=df(a),a=Tg(a,t),a=wg(a,t),o=Eg(o),a=Eg(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=w+m+o,v=w+f+a,D=yg(s,s.VERTEX_SHADER,y),C=yg(s,s.FRAGMENT_SHADER,v);s.attachShader(x,D),s.attachShader(x,C),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function N(U){if(i.debug.checkShaderErrors){const J=s.getProgramInfoLog(x).trim(),$=s.getShaderInfoLog(D).trim(),se=s.getShaderInfoLog(C).trim();let oe=!0,Q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,C);else{const ue=Mg(s,D,"vertex"),Y=Mg(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+J+`
`+ue+`
`+Y)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):($===""||se==="")&&(Q=!1);Q&&(U.diagnostics={runnable:oe,programLog:J,vertexShader:{log:$,prefix:m},fragmentShader:{log:se,prefix:f}})}s.deleteShader(D),s.deleteShader(C),I=new Sl(s,x),E=l1(s,x)}let I;this.getUniforms=function(){return I===void 0&&N(this),I};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,e1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=C,this}let S1=0;class M1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new T1(e),t.set(e,n)),n}}class T1{constructor(e){this.id=S1++,this.code=e,this.usedTimes=0}}function w1(i,e,t,n,s,r,o){const a=new I_,c=new M1,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,U,J,$){const se=J.fog,oe=$.geometry,Q=E.isMeshStandardMaterial?J.environment:null,ue=(E.isMeshStandardMaterial?t:e).get(E.envMap||Q),Y=ue&&ue.mapping===xu?ue.image.height:null,we=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Le=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Be=Le!==void 0?Le.length:0;let ct=0;oe.morphAttributes.position!==void 0&&(ct=1),oe.morphAttributes.normal!==void 0&&(ct=2),oe.morphAttributes.color!==void 0&&(ct=3);let At,ie,ye,ke;if(we){const Lt=Wn[we];At=Lt.vertexShader,ie=Lt.fragmentShader}else At=E.vertexShader,ie=E.fragmentShader,c.update(E),ye=c.getVertexShaderID(E),ke=c.getFragmentShaderID(E);const Se=i.getRenderTarget(),$e=i.state.buffers.depth.getReversed(),nt=$.isInstancedMesh===!0,tt=$.isBatchedMesh===!0,yt=!!E.map,le=!!E.matcap,xe=!!ue,A=!!E.aoMap,Ge=!!E.lightMap,pe=!!E.bumpMap,Ue=!!E.normalMap,ve=!!E.displacementMap,Qe=!!E.emissiveMap,Re=!!E.metalnessMap,b=!!E.roughnessMap,S=E.anisotropy>0,H=E.clearcoat>0,te=E.dispersion>0,he=E.iridescence>0,ne=E.sheen>0,He=E.transmission>0,Ee=S&&!!E.anisotropyMap,Ie=H&&!!E.clearcoatMap,gt=H&&!!E.clearcoatNormalMap,ge=H&&!!E.clearcoatRoughnessMap,Fe=he&&!!E.iridescenceMap,Je=he&&!!E.iridescenceThicknessMap,st=ne&&!!E.sheenColorMap,Ve=ne&&!!E.sheenRoughnessMap,vt=!!E.specularMap,dt=!!E.specularColorMap,Ot=!!E.specularIntensityMap,O=He&&!!E.transmissionMap,be=He&&!!E.thicknessMap,Z=!!E.gradientMap,ae=!!E.alphaMap,Pe=E.alphaTest>0,Ce=!!E.alphaHash,ut=!!E.extensions;let qt=Ui;E.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(qt=i.toneMapping);const Nn={shaderID:we,shaderType:E.type,shaderName:E.name,vertexShader:At,fragmentShader:ie,defines:E.defines,customVertexShaderID:ye,customFragmentShaderID:ke,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:tt,batchingColor:tt&&$._colorsTexture!==null,instancing:nt,instancingColor:nt&&$.instanceColor!==null,instancingMorph:nt&&$.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:ar,alphaToCoverage:!!E.alphaToCoverage,map:yt,matcap:le,envMap:xe,envMapMode:xe&&ue.mapping,envMapCubeUVHeight:Y,aoMap:A,lightMap:Ge,bumpMap:pe,normalMap:Ue,displacementMap:d&&ve,emissiveMap:Qe,normalMapObjectSpace:Ue&&E.normalMapType===N_,normalMapTangentSpace:Ue&&E.normalMapType===ql,metalnessMap:Re,roughnessMap:b,anisotropy:S,anisotropyMap:Ee,clearcoat:H,clearcoatMap:Ie,clearcoatNormalMap:gt,clearcoatRoughnessMap:ge,dispersion:te,iridescence:he,iridescenceMap:Fe,iridescenceThicknessMap:Je,sheen:ne,sheenColorMap:st,sheenRoughnessMap:Ve,specularMap:vt,specularColorMap:dt,specularIntensityMap:Ot,transmission:He,transmissionMap:O,thicknessMap:be,gradientMap:Z,opaque:E.transparent===!1&&E.blending===Vr&&E.alphaToCoverage===!1,alphaMap:ae,alphaTest:Pe,alphaHash:Ce,combine:E.combine,mapUv:yt&&x(E.map.channel),aoMapUv:A&&x(E.aoMap.channel),lightMapUv:Ge&&x(E.lightMap.channel),bumpMapUv:pe&&x(E.bumpMap.channel),normalMapUv:Ue&&x(E.normalMap.channel),displacementMapUv:ve&&x(E.displacementMap.channel),emissiveMapUv:Qe&&x(E.emissiveMap.channel),metalnessMapUv:Re&&x(E.metalnessMap.channel),roughnessMapUv:b&&x(E.roughnessMap.channel),anisotropyMapUv:Ee&&x(E.anisotropyMap.channel),clearcoatMapUv:Ie&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:gt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:st&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&x(E.sheenRoughnessMap.channel),specularMapUv:vt&&x(E.specularMap.channel),specularColorMapUv:dt&&x(E.specularColorMap.channel),specularIntensityMapUv:Ot&&x(E.specularIntensityMap.channel),transmissionMapUv:O&&x(E.transmissionMap.channel),thicknessMapUv:be&&x(E.thicknessMap.channel),alphaMapUv:ae&&x(E.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(Ue||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!oe.attributes.uv&&(yt||ae),fog:!!se,useFog:E.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:$e,skinning:$.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:ct,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:yt&&E.map.isVideoTexture===!0&&lt.getTransfer(E.map.colorSpace)===Ct,decodeVideoTextureEmissive:Qe&&E.emissiveMap.isVideoTexture===!0&&lt.getTransfer(E.emissiveMap.colorSpace)===Ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ms,flipSided:E.side===Kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ut&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&E.extensions.multiDraw===!0||tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Nn.vertexUv1s=l.has(1),Nn.vertexUv2s=l.has(2),Nn.vertexUv3s=l.has(3),l.clear(),Nn}function f(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)M.push(U),M.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(w(M,E),y(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function w(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const M=_[E.type];let U;if(M){const J=Wn[M];U=rp.clone(J.uniforms)}else U=E.uniforms;return U}function D(E,M){let U;for(let J=0,$=u.length;J<$;J++){const se=u[J];if(se.cacheKey===M){U=se,++U.usedTimes;break}}return U===void 0&&(U=new y1(i,M,E,r),u.push(U)),U}function C(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function N(E){c.remove(E)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:D,releaseProgram:C,releaseShaderCache:N,programs:u,dispose:I}}function E1(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function b1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ag(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ng(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,p,_,x,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,d,p,_,x,m){const f=o(h,d,p,_,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(h,d,p,_,x,m){const f=o(h,d,p,_,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||b1),n.length>1&&n.sort(d||Ag),s.length>1&&s.sort(d||Ag)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function A1(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ng,i.set(n,[o])):s>=r.length?(o=new Ng,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function N1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ze};break;case"SpotLight":t={position:new R,direction:new R,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function R1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let C1=0;function P1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function L1(i){const e=new N1,t=R1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new Ne,o=new Ne;function a(l){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,_=0,x=0,m=0,f=0,w=0,y=0,v=0,D=0,C=0,N=0;l.sort(P1);for(let E=0,M=l.length;E<M;E++){const U=l[E],J=U.color,$=U.intensity,se=U.distance,oe=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=J.r*$,h+=J.g*$,d+=J.b*$;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(U.sh.coefficients[Q],$);N++}else if(U.isDirectionalLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ue=U.shadow,Y=t.get(U);Y.shadowIntensity=ue.intensity,Y.shadowBias=ue.bias,Y.shadowNormalBias=ue.normalBias,Y.shadowRadius=ue.radius,Y.shadowMapSize=ue.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=oe,n.directionalShadowMatrix[p]=U.shadow.matrix,w++}n.directional[p]=Q,p++}else if(U.isSpotLight){const Q=e.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(J).multiplyScalar($),Q.distance=se,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,n.spot[x]=Q;const ue=U.shadow;if(U.map&&(n.spotLightMap[D]=U.map,D++,ue.updateMatrices(U),U.castShadow&&C++),n.spotLightMatrix[x]=ue.matrix,U.castShadow){const Y=t.get(U);Y.shadowIntensity=ue.intensity,Y.shadowBias=ue.bias,Y.shadowNormalBias=ue.normalBias,Y.shadowRadius=ue.radius,Y.shadowMapSize=ue.mapSize,n.spotShadow[x]=Y,n.spotShadowMap[x]=oe,v++}x++}else if(U.isRectAreaLight){const Q=e.get(U);Q.color.copy(J).multiplyScalar($),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=Q,m++}else if(U.isPointLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){const ue=U.shadow,Y=t.get(U);Y.shadowIntensity=ue.intensity,Y.shadowBias=ue.bias,Y.shadowNormalBias=ue.normalBias,Y.shadowRadius=ue.radius,Y.shadowMapSize=ue.mapSize,Y.shadowCameraNear=ue.camera.near,Y.shadowCameraFar=ue.camera.far,n.pointShadow[_]=Y,n.pointShadowMap[_]=oe,n.pointShadowMatrix[_]=U.shadow.matrix,y++}n.point[_]=Q,_++}else if(U.isHemisphereLight){const Q=e.get(U);Q.skyColor.copy(U.color).multiplyScalar($),Q.groundColor.copy(U.groundColor).multiplyScalar($),n.hemi[f]=Q,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==_||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==w||I.numPointShadows!==y||I.numSpotShadows!==v||I.numSpotMaps!==D||I.numLightProbes!==N)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=N,I.directionalLength=p,I.pointLength=_,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=w,I.numPointShadows=y,I.numSpotShadows=v,I.numSpotMaps=D,I.numLightProbes=N,n.version=C1++)}function c(l,u){let h=0,d=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let f=0,w=l.length;f<w;f++){const y=l[f];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Rg(i){const e=new L1(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function D1(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Rg(i),e.set(s,[a])):r>=o.length?(a=new Rg(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const I1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function O1(i,e,t){let n=new H_;const s=new de,r=new de,o=new _t,a=new nw({depthPacking:EM}),c=new iw,l={},u=t.maxTextureSize,h={[rr]:Kt,[Kt]:rr,[Ms]:Ms},d=new Cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:I1,fragmentShader:U1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Zn;_.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new W(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x_;let f=this.type;this.render=function(C,N,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),J=i.state;J.setBlending(tr),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const $=f!==ti&&this.type===ti,se=f===ti&&this.type!==ti;for(let oe=0,Q=C.length;oe<Q;oe++){const ue=C[oe],Y=ue.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const we=Y.getFrameExtents();if(s.multiply(we),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/we.x),s.x=r.x*we.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/we.y),s.y=r.y*we.y,Y.mapSize.y=r.y)),Y.map===null||$===!0||se===!0){const Be=this.type!==ti?{minFilter:Bn,magFilter:Bn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Xr(s.x,s.y,Be),Y.map.texture.name=ue.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const Le=Y.getViewportCount();for(let Be=0;Be<Le;Be++){const ct=Y.getViewport(Be);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),J.viewport(o),Y.updateMatrices(ue,Be),n=Y.getFrustum(),v(N,I,Y.camera,ue,this.type)}Y.isPointLightShadow!==!0&&this.type===ti&&w(Y,I),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,U)};function w(C,N){const I=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Xr(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(N,null,I,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(N,null,I,p,x,null)}function y(C,N,I,E){let M=null;const U=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)M=U;else if(M=I.isPointLight===!0?c:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const J=M.uuid,$=N.uuid;let se=l[J];se===void 0&&(se={},l[J]=se);let oe=se[$];oe===void 0&&(oe=M.clone(),se[$]=oe,N.addEventListener("dispose",D)),M=oe}if(M.visible=N.visible,M.wireframe=N.wireframe,E===ti?M.side=N.shadowSide!==null?N.shadowSide:N.side:M.side=N.shadowSide!==null?N.shadowSide:h[N.side],M.alphaMap=N.alphaMap,M.alphaTest=N.alphaTest,M.map=N.map,M.clipShadows=N.clipShadows,M.clippingPlanes=N.clippingPlanes,M.clipIntersection=N.clipIntersection,M.displacementMap=N.displacementMap,M.displacementScale=N.displacementScale,M.displacementBias=N.displacementBias,M.wireframeLinewidth=N.wireframeLinewidth,M.linewidth=N.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const J=i.properties.get(M);J.light=I}return M}function v(C,N,I,E,M){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===ti)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const $=e.update(C),se=C.material;if(Array.isArray(se)){const oe=$.groups;for(let Q=0,ue=oe.length;Q<ue;Q++){const Y=oe[Q],we=se[Y.materialIndex];if(we&&we.visible){const Le=y(C,we,E,M);C.onBeforeShadow(i,C,N,I,$,Le,Y),i.renderBufferDirect(I,null,$,Le,C,Y),C.onAfterShadow(i,C,N,I,$,Le,Y)}}}else if(se.visible){const oe=y(C,se,E,M);C.onBeforeShadow(i,C,N,I,$,oe,null),i.renderBufferDirect(I,null,$,oe,C,null),C.onAfterShadow(i,C,N,I,$,oe,null)}}const J=C.children;for(let $=0,se=J.length;$<se;$++)v(J[$],N,I,E,M)}function D(C){C.target.removeEventListener("dispose",D);for(const I in l){const E=l[I],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const F1={[wd]:Ed,[bd]:Rd,[Ad]:Cd,[Yo]:Nd,[Ed]:wd,[Rd]:bd,[Cd]:Ad,[Nd]:Yo};function V1(i,e){function t(){let O=!1;const be=new _t;let Z=null;const ae=new _t(0,0,0,0);return{setMask:function(Pe){Z!==Pe&&!O&&(i.colorMask(Pe,Pe,Pe,Pe),Z=Pe)},setLocked:function(Pe){O=Pe},setClear:function(Pe,Ce,ut,qt,Nn){Nn===!0&&(Pe*=qt,Ce*=qt,ut*=qt),be.set(Pe,Ce,ut,qt),ae.equals(be)===!1&&(i.clearColor(Pe,Ce,ut,qt),ae.copy(be))},reset:function(){O=!1,Z=null,ae.set(-1,0,0,0)}}}function n(){let O=!1,be=!1,Z=null,ae=null,Pe=null;return{setReversed:function(Ce){if(be!==Ce){const ut=e.get("EXT_clip_control");be?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);const qt=Pe;Pe=null,this.setClear(qt)}be=Ce},getReversed:function(){return be},setTest:function(Ce){Ce?Se(i.DEPTH_TEST):$e(i.DEPTH_TEST)},setMask:function(Ce){Z!==Ce&&!O&&(i.depthMask(Ce),Z=Ce)},setFunc:function(Ce){if(be&&(Ce=F1[Ce]),ae!==Ce){switch(Ce){case wd:i.depthFunc(i.NEVER);break;case Ed:i.depthFunc(i.ALWAYS);break;case bd:i.depthFunc(i.LESS);break;case Yo:i.depthFunc(i.LEQUAL);break;case Ad:i.depthFunc(i.EQUAL);break;case Nd:i.depthFunc(i.GEQUAL);break;case Rd:i.depthFunc(i.GREATER);break;case Cd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=Ce}},setLocked:function(Ce){O=Ce},setClear:function(Ce){Pe!==Ce&&(be&&(Ce=1-Ce),i.clearDepth(Ce),Pe=Ce)},reset:function(){O=!1,Z=null,ae=null,Pe=null,be=!1}}}function s(){let O=!1,be=null,Z=null,ae=null,Pe=null,Ce=null,ut=null,qt=null,Nn=null;return{setTest:function(Lt){O||(Lt?Se(i.STENCIL_TEST):$e(i.STENCIL_TEST))},setMask:function(Lt){be!==Lt&&!O&&(i.stencilMask(Lt),be=Lt)},setFunc:function(Lt,Si,hs){(Z!==Lt||ae!==Si||Pe!==hs)&&(i.stencilFunc(Lt,Si,hs),Z=Lt,ae=Si,Pe=hs)},setOp:function(Lt,Si,hs){(Ce!==Lt||ut!==Si||qt!==hs)&&(i.stencilOp(Lt,Si,hs),Ce=Lt,ut=Si,qt=hs)},setLocked:function(Lt){O=Lt},setClear:function(Lt){Nn!==Lt&&(i.clearStencil(Lt),Nn=Lt)},reset:function(){O=!1,be=null,Z=null,ae=null,Pe=null,Ce=null,ut=null,qt=null,Nn=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],_=null,x=!1,m=null,f=null,w=null,y=null,v=null,D=null,C=null,N=new Ze(0,0,0),I=0,E=!1,M=null,U=null,J=null,$=null,se=null;const oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ue=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Q=ue>=1):Y.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Q=ue>=2);let we=null,Le={};const Be=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),At=new _t().fromArray(Be),ie=new _t().fromArray(ct);function ye(O,be,Z,ae){const Pe=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(O,Ce),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ut=0;ut<Z;ut++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(be+ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return Ce}const ke={};ke[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),ke[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ke[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ke[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Se(i.DEPTH_TEST),o.setFunc(Yo),pe(!1),Ue(Em),Se(i.CULL_FACE),A(tr);function Se(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function $e(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function nt(O,be){return h[O]!==be?(i.bindFramebuffer(O,be),h[O]=be,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=be),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=be),!0):!1}function tt(O,be){let Z=p,ae=!1;if(O){Z=d.get(be),Z===void 0&&(Z=[],d.set(be,Z));const Pe=O.textures;if(Z.length!==Pe.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,ut=Pe.length;Ce<ut;Ce++)Z[Ce]=i.COLOR_ATTACHMENT0+Ce;Z.length=Pe.length,ae=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ae=!0);ae&&i.drawBuffers(Z)}function yt(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const le={[Dr]:i.FUNC_ADD,[ZS]:i.FUNC_SUBTRACT,[KS]:i.FUNC_REVERSE_SUBTRACT};le[JS]=i.MIN,le[QS]=i.MAX;const xe={[eM]:i.ZERO,[tM]:i.ONE,[nM]:i.SRC_COLOR,[Md]:i.SRC_ALPHA,[cM]:i.SRC_ALPHA_SATURATE,[oM]:i.DST_COLOR,[sM]:i.DST_ALPHA,[iM]:i.ONE_MINUS_SRC_COLOR,[Td]:i.ONE_MINUS_SRC_ALPHA,[aM]:i.ONE_MINUS_DST_COLOR,[rM]:i.ONE_MINUS_DST_ALPHA,[lM]:i.CONSTANT_COLOR,[uM]:i.ONE_MINUS_CONSTANT_COLOR,[hM]:i.CONSTANT_ALPHA,[dM]:i.ONE_MINUS_CONSTANT_ALPHA};function A(O,be,Z,ae,Pe,Ce,ut,qt,Nn,Lt){if(O===tr){x===!0&&($e(i.BLEND),x=!1);return}if(x===!1&&(Se(i.BLEND),x=!0),O!==jS){if(O!==m||Lt!==E){if((f!==Dr||v!==Dr)&&(i.blendEquation(i.FUNC_ADD),f=Dr,v=Dr),Lt)switch(O){case Vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bm:i.blendFunc(i.ONE,i.ONE);break;case Am:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nm:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bm:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Am:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nm:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}w=null,y=null,D=null,C=null,N.set(0,0,0),I=0,m=O,E=Lt}return}Pe=Pe||be,Ce=Ce||Z,ut=ut||ae,(be!==f||Pe!==v)&&(i.blendEquationSeparate(le[be],le[Pe]),f=be,v=Pe),(Z!==w||ae!==y||Ce!==D||ut!==C)&&(i.blendFuncSeparate(xe[Z],xe[ae],xe[Ce],xe[ut]),w=Z,y=ae,D=Ce,C=ut),(qt.equals(N)===!1||Nn!==I)&&(i.blendColor(qt.r,qt.g,qt.b,Nn),N.copy(qt),I=Nn),m=O,E=!1}function Ge(O,be){O.side===Ms?$e(i.CULL_FACE):Se(i.CULL_FACE);let Z=O.side===Kt;be&&(Z=!Z),pe(Z),O.blending===Vr&&O.transparent===!1?A(tr):A(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const ae=O.stencilWrite;a.setTest(ae),ae&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Qe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):$e(i.SAMPLE_ALPHA_TO_COVERAGE)}function pe(O){M!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),M=O)}function Ue(O){O!==$S?(Se(i.CULL_FACE),O!==U&&(O===Em?i.cullFace(i.BACK):O===qS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$e(i.CULL_FACE),U=O}function ve(O){O!==J&&(Q&&i.lineWidth(O),J=O)}function Qe(O,be,Z){O?(Se(i.POLYGON_OFFSET_FILL),($!==be||se!==Z)&&(i.polygonOffset(be,Z),$=be,se=Z)):$e(i.POLYGON_OFFSET_FILL)}function Re(O){O?Se(i.SCISSOR_TEST):$e(i.SCISSOR_TEST)}function b(O){O===void 0&&(O=i.TEXTURE0+oe-1),we!==O&&(i.activeTexture(O),we=O)}function S(O,be,Z){Z===void 0&&(we===null?Z=i.TEXTURE0+oe-1:Z=we);let ae=Le[Z];ae===void 0&&(ae={type:void 0,texture:void 0},Le[Z]=ae),(ae.type!==O||ae.texture!==be)&&(we!==Z&&(i.activeTexture(Z),we=Z),i.bindTexture(O,be||ke[O]),ae.type=O,ae.texture=be)}function H(){const O=Le[we];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Je(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(O){At.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),At.copy(O))}function Ve(O){ie.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ie.copy(O))}function vt(O,be){let Z=l.get(be);Z===void 0&&(Z=new WeakMap,l.set(be,Z));let ae=Z.get(O);ae===void 0&&(ae=i.getUniformBlockIndex(be,O.name),Z.set(O,ae))}function dt(O,be){const ae=l.get(be).get(O);c.get(be)!==ae&&(i.uniformBlockBinding(be,ae,O.__bindingPointIndex),c.set(be,ae))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},we=null,Le={},h={},d=new WeakMap,p=[],_=null,x=!1,m=null,f=null,w=null,y=null,v=null,D=null,C=null,N=new Ze(0,0,0),I=0,E=!1,M=null,U=null,J=null,$=null,se=null,At.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Se,disable:$e,bindFramebuffer:nt,drawBuffers:tt,useProgram:yt,setBlending:A,setMaterial:Ge,setFlipSided:pe,setCullFace:Ue,setLineWidth:ve,setPolygonOffset:Qe,setScissorTest:Re,activeTexture:b,bindTexture:S,unbindTexture:H,compressedTexImage2D:te,compressedTexImage3D:he,texImage2D:Fe,texImage3D:Je,updateUBOMapping:vt,uniformBlockBinding:dt,texStorage2D:gt,texStorage3D:ge,texSubImage2D:ne,texSubImage3D:He,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Ie,scissor:st,viewport:Ve,reset:Ot}}function z1(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,S){return p?new OffscreenCanvas(b,S):Zl("canvas")}function x(b,S,H){let te=1;const he=Re(b);if((he.width>H||he.height>H)&&(te=H/Math.max(he.width,he.height)),te<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ne=Math.floor(te*he.width),He=Math.floor(te*he.height);h===void 0&&(h=_(ne,He));const Ee=S?_(ne,He):h;return Ee.width=ne,Ee.height=He,Ee.getContext("2d").drawImage(b,0,0,ne,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ne+"x"+He+")."),Ee}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(b,S,H,te,he=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=S;if(S===i.RED&&(H===i.FLOAT&&(ne=i.R32F),H===i.HALF_FLOAT&&(ne=i.R16F),H===i.UNSIGNED_BYTE&&(ne=i.R8)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.R8UI),H===i.UNSIGNED_SHORT&&(ne=i.R16UI),H===i.UNSIGNED_INT&&(ne=i.R32UI),H===i.BYTE&&(ne=i.R8I),H===i.SHORT&&(ne=i.R16I),H===i.INT&&(ne=i.R32I)),S===i.RG&&(H===i.FLOAT&&(ne=i.RG32F),H===i.HALF_FLOAT&&(ne=i.RG16F),H===i.UNSIGNED_BYTE&&(ne=i.RG8)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RG8UI),H===i.UNSIGNED_SHORT&&(ne=i.RG16UI),H===i.UNSIGNED_INT&&(ne=i.RG32UI),H===i.BYTE&&(ne=i.RG8I),H===i.SHORT&&(ne=i.RG16I),H===i.INT&&(ne=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),H===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),H===i.UNSIGNED_INT&&(ne=i.RGB32UI),H===i.BYTE&&(ne=i.RGB8I),H===i.SHORT&&(ne=i.RGB16I),H===i.INT&&(ne=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),H===i.UNSIGNED_INT&&(ne=i.RGBA32UI),H===i.BYTE&&(ne=i.RGBA8I),H===i.SHORT&&(ne=i.RGBA16I),H===i.INT&&(ne=i.RGBA32I)),S===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),S===i.RGBA){const He=he?Yl:lt.getTransfer(te);H===i.FLOAT&&(ne=i.RGBA32F),H===i.HALF_FLOAT&&(ne=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ne=He===Ct?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(b,S){let H;return b?S===null||S===or||S===jo?H=i.DEPTH24_STENCIL8:S===Li?H=i.DEPTH32F_STENCIL8:S===za&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===or||S===jo?H=i.DEPTH_COMPONENT24:S===Li?H=i.DEPTH_COMPONENT32F:S===za&&(H=i.DEPTH_COMPONENT16),H}function D(b,S){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Bn&&b.minFilter!==Zi?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function C(b){const S=b.target;S.removeEventListener("dispose",C),I(S),S.isVideoTexture&&u.delete(S)}function N(b){const S=b.target;S.removeEventListener("dispose",N),M(S)}function I(b){const S=n.get(b);if(S.__webglInit===void 0)return;const H=b.source,te=d.get(H);if(te){const he=te[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&E(b),Object.keys(te).length===0&&d.delete(H)}n.remove(b)}function E(b){const S=n.get(b);i.deleteTexture(S.__webglTexture);const H=b.source,te=d.get(H);delete te[S.__cacheKey],o.memory.textures--}function M(b){const S=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(S.__webglFramebuffer[te]))for(let he=0;he<S.__webglFramebuffer[te].length;he++)i.deleteFramebuffer(S.__webglFramebuffer[te][he]);else i.deleteFramebuffer(S.__webglFramebuffer[te]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[te])}else{if(Array.isArray(S.__webglFramebuffer))for(let te=0;te<S.__webglFramebuffer.length;te++)i.deleteFramebuffer(S.__webglFramebuffer[te]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=b.textures;for(let te=0,he=H.length;te<he;te++){const ne=n.get(H[te]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(H[te])}n.remove(b)}let U=0;function J(){U=0}function $(){const b=U;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),U+=1,b}function se(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function oe(b,S){const H=n.get(b);if(b.isVideoTexture&&ve(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const te=b.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(H,b,S);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function Q(b,S){const H=n.get(b);if(b.version>0&&H.__version!==b.version){ie(H,b,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function ue(b,S){const H=n.get(b);if(b.version>0&&H.__version!==b.version){ie(H,b,S);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function Y(b,S){const H=n.get(b);if(b.version>0&&H.__version!==b.version){ye(H,b,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}const we={[Dd]:i.REPEAT,[Fr]:i.CLAMP_TO_EDGE,[Id]:i.MIRRORED_REPEAT},Le={[Bn]:i.NEAREST,[MM]:i.NEAREST_MIPMAP_NEAREST,[Ac]:i.NEAREST_MIPMAP_LINEAR,[Zi]:i.LINEAR,[Mh]:i.LINEAR_MIPMAP_NEAREST,[Qs]:i.LINEAR_MIPMAP_LINEAR},Be={[bM]:i.NEVER,[PM]:i.ALWAYS,[R_]:i.LESS,[C_]:i.LEQUAL,[AM]:i.EQUAL,[CM]:i.GEQUAL,[NM]:i.GREATER,[RM]:i.NOTEQUAL};function ct(b,S){if(S.type===Li&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Zi||S.magFilter===Mh||S.magFilter===Ac||S.magFilter===Qs||S.minFilter===Zi||S.minFilter===Mh||S.minFilter===Ac||S.minFilter===Qs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,we[S.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,we[S.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,we[S.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Le[S.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Le[S.minFilter]),S.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Bn||S.minFilter!==Ac&&S.minFilter!==Qs||S.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function At(b,S){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",C));const te=S.source;let he=d.get(te);he===void 0&&(he={},d.set(te,he));const ne=se(S);if(ne!==b.__cacheKey){he[ne]===void 0&&(he[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),he[ne].usedTimes++;const He=he[b.__cacheKey];He!==void 0&&(he[b.__cacheKey].usedTimes--,He.usedTimes===0&&E(S)),b.__cacheKey=ne,b.__webglTexture=he[ne].texture}return H}function ie(b,S,H){let te=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=i.TEXTURE_3D);const he=At(b,S),ne=S.source;t.bindTexture(te,b.__webglTexture,i.TEXTURE0+H);const He=n.get(ne);if(ne.version!==He.__version||he===!0){t.activeTexture(i.TEXTURE0+H);const Ee=lt.getPrimaries(lt.workingColorSpace),Ie=S.colorSpace===Yi?null:lt.getPrimaries(S.colorSpace),gt=S.colorSpace===Yi||Ee===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let ge=x(S.image,!1,s.maxTextureSize);ge=Qe(S,ge);const Fe=r.convert(S.format,S.colorSpace),Je=r.convert(S.type);let st=y(S.internalFormat,Fe,Je,S.colorSpace,S.isVideoTexture);ct(te,S);let Ve;const vt=S.mipmaps,dt=S.isVideoTexture!==!0,Ot=He.__version===void 0||he===!0,O=ne.dataReady,be=D(S,ge);if(S.isDepthTexture)st=v(S.format===Zo,S.type),Ot&&(dt?t.texStorage2D(i.TEXTURE_2D,1,st,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,st,ge.width,ge.height,0,Fe,Je,null));else if(S.isDataTexture)if(vt.length>0){dt&&Ot&&t.texStorage2D(i.TEXTURE_2D,be,st,vt[0].width,vt[0].height);for(let Z=0,ae=vt.length;Z<ae;Z++)Ve=vt[Z],dt?O&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ve.width,Ve.height,Fe,Je,Ve.data):t.texImage2D(i.TEXTURE_2D,Z,st,Ve.width,Ve.height,0,Fe,Je,Ve.data);S.generateMipmaps=!1}else dt?(Ot&&t.texStorage2D(i.TEXTURE_2D,be,st,ge.width,ge.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge.width,ge.height,Fe,Je,ge.data)):t.texImage2D(i.TEXTURE_2D,0,st,ge.width,ge.height,0,Fe,Je,ge.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){dt&&Ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,st,vt[0].width,vt[0].height,ge.depth);for(let Z=0,ae=vt.length;Z<ae;Z++)if(Ve=vt[Z],S.format!==Di)if(Fe!==null)if(dt){if(O)if(S.layerUpdates.size>0){const Pe=rg(Ve.width,Ve.height,S.format,S.type);for(const Ce of S.layerUpdates){const ut=Ve.data.subarray(Ce*Pe/Ve.data.BYTES_PER_ELEMENT,(Ce+1)*Pe/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Ce,Ve.width,Ve.height,1,Fe,ut)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Ve.width,Ve.height,ge.depth,Fe,Ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,st,Ve.width,Ve.height,ge.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Ve.width,Ve.height,ge.depth,Fe,Je,Ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,st,Ve.width,Ve.height,ge.depth,0,Fe,Je,Ve.data)}else{dt&&Ot&&t.texStorage2D(i.TEXTURE_2D,be,st,vt[0].width,vt[0].height);for(let Z=0,ae=vt.length;Z<ae;Z++)Ve=vt[Z],S.format!==Di?Fe!==null?dt?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Ve.width,Ve.height,Fe,Ve.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,st,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?O&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ve.width,Ve.height,Fe,Je,Ve.data):t.texImage2D(i.TEXTURE_2D,Z,st,Ve.width,Ve.height,0,Fe,Je,Ve.data)}else if(S.isDataArrayTexture)if(dt){if(Ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,st,ge.width,ge.height,ge.depth),O)if(S.layerUpdates.size>0){const Z=rg(ge.width,ge.height,S.format,S.type);for(const ae of S.layerUpdates){const Pe=ge.data.subarray(ae*Z/ge.data.BYTES_PER_ELEMENT,(ae+1)*Z/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,ge.width,ge.height,1,Fe,Je,Pe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Fe,Je,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,st,ge.width,ge.height,ge.depth,0,Fe,Je,ge.data);else if(S.isData3DTexture)dt?(Ot&&t.texStorage3D(i.TEXTURE_3D,be,st,ge.width,ge.height,ge.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Fe,Je,ge.data)):t.texImage3D(i.TEXTURE_3D,0,st,ge.width,ge.height,ge.depth,0,Fe,Je,ge.data);else if(S.isFramebufferTexture){if(Ot)if(dt)t.texStorage2D(i.TEXTURE_2D,be,st,ge.width,ge.height);else{let Z=ge.width,ae=ge.height;for(let Pe=0;Pe<be;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,st,Z,ae,0,Fe,Je,null),Z>>=1,ae>>=1}}else if(vt.length>0){if(dt&&Ot){const Z=Re(vt[0]);t.texStorage2D(i.TEXTURE_2D,be,st,Z.width,Z.height)}for(let Z=0,ae=vt.length;Z<ae;Z++)Ve=vt[Z],dt?O&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Fe,Je,Ve):t.texImage2D(i.TEXTURE_2D,Z,st,Fe,Je,Ve);S.generateMipmaps=!1}else if(dt){if(Ot){const Z=Re(ge);t.texStorage2D(i.TEXTURE_2D,be,st,Z.width,Z.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Fe,Je,ge)}else t.texImage2D(i.TEXTURE_2D,0,st,Fe,Je,ge);m(S)&&f(te),He.__version=ne.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ye(b,S,H){if(S.image.length!==6)return;const te=At(b,S),he=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+H);const ne=n.get(he);if(he.version!==ne.__version||te===!0){t.activeTexture(i.TEXTURE0+H);const He=lt.getPrimaries(lt.workingColorSpace),Ee=S.colorSpace===Yi?null:lt.getPrimaries(S.colorSpace),Ie=S.colorSpace===Yi||He===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const gt=S.isCompressedTexture||S.image[0].isCompressedTexture,ge=S.image[0]&&S.image[0].isDataTexture,Fe=[];for(let ae=0;ae<6;ae++)!gt&&!ge?Fe[ae]=x(S.image[ae],!0,s.maxCubemapSize):Fe[ae]=ge?S.image[ae].image:S.image[ae],Fe[ae]=Qe(S,Fe[ae]);const Je=Fe[0],st=r.convert(S.format,S.colorSpace),Ve=r.convert(S.type),vt=y(S.internalFormat,st,Ve,S.colorSpace),dt=S.isVideoTexture!==!0,Ot=ne.__version===void 0||te===!0,O=he.dataReady;let be=D(S,Je);ct(i.TEXTURE_CUBE_MAP,S);let Z;if(gt){dt&&Ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,vt,Je.width,Je.height);for(let ae=0;ae<6;ae++){Z=Fe[ae].mipmaps;for(let Pe=0;Pe<Z.length;Pe++){const Ce=Z[Pe];S.format!==Di?st!==null?dt?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,0,0,Ce.width,Ce.height,st,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,vt,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,0,0,Ce.width,Ce.height,st,Ve,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,vt,Ce.width,Ce.height,0,st,Ve,Ce.data)}}}else{if(Z=S.mipmaps,dt&&Ot){Z.length>0&&be++;const ae=Re(Fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,vt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ge){dt?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Fe[ae].width,Fe[ae].height,st,Ve,Fe[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,vt,Fe[ae].width,Fe[ae].height,0,st,Ve,Fe[ae].data);for(let Pe=0;Pe<Z.length;Pe++){const ut=Z[Pe].image[ae].image;dt?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,0,0,ut.width,ut.height,st,Ve,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,vt,ut.width,ut.height,0,st,Ve,ut.data)}}else{dt?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,st,Ve,Fe[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,vt,st,Ve,Fe[ae]);for(let Pe=0;Pe<Z.length;Pe++){const Ce=Z[Pe];dt?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,0,0,st,Ve,Ce.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,vt,st,Ve,Ce.image[ae])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),ne.__version=he.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ke(b,S,H,te,he,ne){const He=r.convert(H.format,H.colorSpace),Ee=r.convert(H.type),Ie=y(H.internalFormat,He,Ee,H.colorSpace),gt=n.get(S),ge=n.get(H);if(ge.__renderTarget=S,!gt.__hasExternalTextures){const Fe=Math.max(1,S.width>>ne),Je=Math.max(1,S.height>>ne);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,ne,Ie,Fe,Je,S.depth,0,He,Ee,null):t.texImage2D(he,ne,Ie,Fe,Je,0,He,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Ue(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,he,ge.__webglTexture,0,pe(S)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,he,ge.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(b,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,b),S.depthBuffer){const te=S.depthTexture,he=te&&te.isDepthTexture?te.type:null,ne=v(S.stencilBuffer,he),He=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=pe(S);Ue(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,ne,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,ne,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ne,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,He,i.RENDERBUFFER,b)}else{const te=S.textures;for(let he=0;he<te.length;he++){const ne=te[he],He=r.convert(ne.format,ne.colorSpace),Ee=r.convert(ne.type),Ie=y(ne.internalFormat,He,Ee,ne.colorSpace),gt=pe(S);H&&Ue(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,Ie,S.width,S.height):Ue(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,Ie,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $e(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(S.depthTexture);te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),oe(S.depthTexture,0);const he=te.__webglTexture,ne=pe(S);if(S.depthTexture.format===Oo)Ue(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0);else if(S.depthTexture.format===Zo)Ue(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function nt(b){const S=n.get(b),H=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const te=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),te){const he=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,te.removeEventListener("dispose",he)};te.addEventListener("dispose",he),S.__depthDisposeCallback=he}S.__boundDepthTexture=te}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");$e(S.__webglFramebuffer,b)}else if(H){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]===void 0)S.__webglDepthbuffer[te]=i.createRenderbuffer(),Se(S.__webglDepthbuffer[te],b,!1);else{const he=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Se(S.__webglDepthbuffer,b,!1);else{const te=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(b,S,H){const te=n.get(b);S!==void 0&&ke(te.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&nt(b)}function yt(b){const S=b.texture,H=n.get(b),te=n.get(S);b.addEventListener("dispose",N);const he=b.textures,ne=b.isWebGLCubeRenderTarget===!0,He=he.length>1;if(He||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=S.version,o.memory.textures++),ne){H.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[Ee]=[];for(let Ie=0;Ie<S.mipmaps.length;Ie++)H.__webglFramebuffer[Ee][Ie]=i.createFramebuffer()}else H.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)H.__webglFramebuffer[Ee]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(He)for(let Ee=0,Ie=he.length;Ee<Ie;Ee++){const gt=n.get(he[Ee]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&Ue(b)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ee=0;Ee<he.length;Ee++){const Ie=he[Ee];H.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Ee]);const gt=r.convert(Ie.format,Ie.colorSpace),ge=r.convert(Ie.type),Fe=y(Ie.internalFormat,gt,ge,Ie.colorSpace,b.isXRRenderTarget===!0),Je=pe(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Fe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,H.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),ct(i.TEXTURE_CUBE_MAP,S);for(let Ee=0;Ee<6;Ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ie=0;Ie<S.mipmaps.length;Ie++)ke(H.__webglFramebuffer[Ee][Ie],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ie);else ke(H.__webglFramebuffer[Ee],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);m(S)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Ee=0,Ie=he.length;Ee<Ie;Ee++){const gt=he[Ee],ge=n.get(gt);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),ct(i.TEXTURE_2D,gt),ke(H.__webglFramebuffer,b,gt,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),m(gt)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ee=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,te.__webglTexture),ct(Ee,S),S.mipmaps&&S.mipmaps.length>0)for(let Ie=0;Ie<S.mipmaps.length;Ie++)ke(H.__webglFramebuffer[Ie],b,S,i.COLOR_ATTACHMENT0,Ee,Ie);else ke(H.__webglFramebuffer,b,S,i.COLOR_ATTACHMENT0,Ee,0);m(S)&&f(Ee),t.unbindTexture()}b.depthBuffer&&nt(b)}function le(b){const S=b.textures;for(let H=0,te=S.length;H<te;H++){const he=S[H];if(m(he)){const ne=w(b),He=n.get(he).__webglTexture;t.bindTexture(ne,He),f(ne),t.unbindTexture()}}}const xe=[],A=[];function Ge(b){if(b.samples>0){if(Ue(b)===!1){const S=b.textures,H=b.width,te=b.height;let he=i.COLOR_BUFFER_BIT;const ne=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,He=n.get(b),Ee=S.length>1;if(Ee)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),Ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,He.__webglColorRenderbuffer[Ie]);const gt=n.get(S[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,gt,0)}i.blitFramebuffer(0,0,H,te,0,0,H,te,he,i.NEAREST),c===!0&&(xe.length=0,A.length=0,xe.push(i.COLOR_ATTACHMENT0+Ie),b.depthBuffer&&b.resolveDepthBuffer===!1&&(xe.push(ne),A.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,He.__webglColorRenderbuffer[Ie]);const gt=n.get(S[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,gt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const S=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function pe(b){return Math.min(s.maxSamples,b.samples)}function Ue(b){const S=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ve(b){const S=o.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function Qe(b,S){const H=b.colorSpace,te=b.format,he=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||H!==ar&&H!==Yi&&(lt.getTransfer(H)===Ct?(te!==Di||he!==Ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Re(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=J,this.setTexture2D=oe,this.setTexture2DArray=Q,this.setTexture3D=ue,this.setTextureCube=Y,this.rebindTextures=tt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Ue}function B1(i,e){function t(n,s=Yi){let r;const o=lt.getTransfer(s);if(n===Ns)return i.UNSIGNED_BYTE;if(n===Kf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===M_)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===y_)return i.BYTE;if(n===S_)return i.SHORT;if(n===za)return i.UNSIGNED_SHORT;if(n===vu)return i.INT;if(n===or)return i.UNSIGNED_INT;if(n===Li)return i.FLOAT;if(n===ns)return i.HALF_FLOAT;if(n===T_)return i.ALPHA;if(n===w_)return i.RGB;if(n===Di)return i.RGBA;if(n===E_)return i.LUMINANCE;if(n===b_)return i.LUMINANCE_ALPHA;if(n===Oo)return i.DEPTH_COMPONENT;if(n===Zo)return i.DEPTH_STENCIL;if(n===Qf)return i.RED;if(n===ep)return i.RED_INTEGER;if(n===$l)return i.RG;if(n===tp)return i.RG_INTEGER;if(n===np)return i.RGBA_INTEGER;if(n===ml||n===gl||n===_l||n===xl)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ml)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_l)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_l)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ud||n===Od||n===Fd||n===Vd)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ud)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Od)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zd||n===Bd||n===kd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zd||n===Bd)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kd)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hd||n===Gd||n===Wd||n===Xd||n===$d||n===qd||n===Yd||n===jd||n===Zd||n===Kd||n===Jd||n===Qd||n===ef||n===tf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hd)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gd)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wd)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xd)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$d)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qd)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yd)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jd)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zd)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kd)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jd)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qd)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ef)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tf)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vl||n===nf||n===sf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vl)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===A_||n===rf||n===of||n===af)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===of)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===af)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===jo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const k1={type:"move"};class Jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ea;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const H1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class W1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new bn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cs({vertexShader:H1,fragmentShader:G1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new Mu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class X1 extends Fs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,_=null;const x=new W1,m=t.getContextAttributes();let f=null,w=null;const y=[],v=[],D=new de;let C=null;const N=new Ni;N.viewport=new _t;const I=new Ni;I.viewport=new _t;const E=[N,I],M=new lw;let U=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ye=y[ie];return ye===void 0&&(ye=new Jh,y[ie]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ie){let ye=y[ie];return ye===void 0&&(ye=new Jh,y[ie]=ye),ye.getGripSpace()},this.getHand=function(ie){let ye=y[ie];return ye===void 0&&(ye=new Jh,y[ie]=ye),ye.getHandSpace()};function $(ie){const ye=v.indexOf(ie.inputSource);if(ye===-1)return;const ke=y[ye];ke!==void 0&&(ke.update(ie.inputSource,ie.frame,l||o),ke.dispatchEvent({type:ie.type,data:ie.inputSource}))}function se(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",oe);for(let ie=0;ie<y.length;ie++){const ye=v[ie];ye!==null&&(v[ie]=null,y[ie].disconnect(ye))}U=null,J=null,x.reset(),e.setRenderTarget(f),p=null,d=null,h=null,s=null,w=null,At.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ie){l=ie},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",se),s.addEventListener("inputsourceschange",oe),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let ke=null,Se=null,$e=null;m.depth&&($e=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ke=m.stencil?Zo:Oo,Se=m.stencil?jo:or);const nt={colorFormat:t.RGBA8,depthFormat:$e,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(nt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Xr(d.textureWidth,d.textureHeight,{format:Di,type:Ns,depthTexture:new Zr(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ke),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const ke={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ke),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Xr(p.framebufferWidth,p.framebufferHeight,{format:Di,type:Ns,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),At.setContext(s),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function oe(ie){for(let ye=0;ye<ie.removed.length;ye++){const ke=ie.removed[ye],Se=v.indexOf(ke);Se>=0&&(v[Se]=null,y[Se].disconnect(ke))}for(let ye=0;ye<ie.added.length;ye++){const ke=ie.added[ye];let Se=v.indexOf(ke);if(Se===-1){for(let nt=0;nt<y.length;nt++)if(nt>=v.length){v.push(ke),Se=nt;break}else if(v[nt]===null){v[nt]=ke,Se=nt;break}if(Se===-1)break}const $e=y[Se];$e&&$e.connect(ke)}}const Q=new R,ue=new R;function Y(ie,ye,ke){Q.setFromMatrixPosition(ye.matrixWorld),ue.setFromMatrixPosition(ke.matrixWorld);const Se=Q.distanceTo(ue),$e=ye.projectionMatrix.elements,nt=ke.projectionMatrix.elements,tt=$e[14]/($e[10]-1),yt=$e[14]/($e[10]+1),le=($e[9]+1)/$e[5],xe=($e[9]-1)/$e[5],A=($e[8]-1)/$e[0],Ge=(nt[8]+1)/nt[0],pe=tt*A,Ue=tt*Ge,ve=Se/(-A+Ge),Qe=ve*-A;if(ye.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Qe),ie.translateZ(ve),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),$e[10]===-1)ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const Re=tt+ve,b=yt+ve,S=pe-Qe,H=Ue+(Se-Qe),te=le*yt/b*Re,he=xe*yt/b*Re;ie.projectionMatrix.makePerspective(S,H,te,he,Re,b),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function we(ie,ye){ye===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ye.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let ye=ie.near,ke=ie.far;x.texture!==null&&(x.depthNear>0&&(ye=x.depthNear),x.depthFar>0&&(ke=x.depthFar)),M.near=I.near=N.near=ye,M.far=I.far=N.far=ke,(U!==M.near||J!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,J=M.far),N.layers.mask=ie.layers.mask|2,I.layers.mask=ie.layers.mask|4,M.layers.mask=N.layers.mask|I.layers.mask;const Se=ie.parent,$e=M.cameras;we(M,Se);for(let nt=0;nt<$e.length;nt++)we($e[nt],Se);$e.length===2?Y(M,N,I):M.projectionMatrix.copy(N.projectionMatrix),Le(ie,M,Se)};function Le(ie,ye,ke){ke===null?ie.matrix.copy(ye.matrixWorld):(ie.matrix.copy(ke.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ye.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ba*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(ie){c=ie,d!==null&&(d.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Be=null;function ct(ie,ye){if(u=ye.getViewerPose(l||o),_=ye,u!==null){const ke=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let Se=!1;ke.length!==M.cameras.length&&(M.cameras.length=0,Se=!0);for(let nt=0;nt<ke.length;nt++){const tt=ke[nt];let yt=null;if(p!==null)yt=p.getViewport(tt);else{const xe=h.getViewSubImage(d,tt);yt=xe.viewport,nt===0&&(e.setRenderTargetTextures(w,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(w))}let le=E[nt];le===void 0&&(le=new Ni,le.layers.enable(nt),le.viewport=new _t,E[nt]=le),le.matrix.fromArray(tt.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(tt.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(yt.x,yt.y,yt.width,yt.height),nt===0&&(M.matrix.copy(le.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Se===!0&&M.cameras.push(le)}const $e=s.enabledFeatures;if($e&&$e.includes("depth-sensing")){const nt=h.getDepthInformation(ke[0]);nt&&nt.isValid&&nt.texture&&x.init(e,nt,s.renderState)}}for(let ke=0;ke<y.length;ke++){const Se=v[ke],$e=y[ke];Se!==null&&$e!==void 0&&$e.update(Se,ye,l||o)}Be&&Be(ie,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),_=null}const At=new K_;At.setAnimationLoop(ct),this.setAnimationLoop=function(ie){Be=ie},this.dispose=function(){}}}const br=new is,$1=new Ne;function q1(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,V_(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,w,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=e.get(f),y=w.envMap,v=w.envMapRotation;y&&(m.envMap.value=y,br.copy(v),br.x*=-1,br.y*=-1,br.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),m.envMapRotation.value.setFromMatrix4($1.makeRotationFromEuler(br)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,w,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Y1(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,y){const v=y.program;n.uniformBlockBinding(w,v)}function l(w,y){let v=s[w.id];v===void 0&&(_(w),v=u(w),s[w.id]=v,w.addEventListener("dispose",m));const D=y.program;n.updateUBOMapping(w,D);const C=e.render.frame;r[w.id]!==C&&(d(w),r[w.id]=C)}function u(w){const y=h();w.__bindingPointIndex=y;const v=i.createBuffer(),D=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const y=s[w.id],v=w.uniforms,D=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,N=v.length;C<N;C++){const I=Array.isArray(v[C])?v[C]:[v[C]];for(let E=0,M=I.length;E<M;E++){const U=I[E];if(p(U,C,E,D)===!0){const J=U.__offset,$=Array.isArray(U.value)?U.value:[U.value];let se=0;for(let oe=0;oe<$.length;oe++){const Q=$[oe],ue=x(Q);typeof Q=="number"||typeof Q=="boolean"?(U.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,J+se,U.__data)):Q.isMatrix3?(U.__data[0]=Q.elements[0],U.__data[1]=Q.elements[1],U.__data[2]=Q.elements[2],U.__data[3]=0,U.__data[4]=Q.elements[3],U.__data[5]=Q.elements[4],U.__data[6]=Q.elements[5],U.__data[7]=0,U.__data[8]=Q.elements[6],U.__data[9]=Q.elements[7],U.__data[10]=Q.elements[8],U.__data[11]=0):(Q.toArray(U.__data,se),se+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,y,v,D){const C=w.value,N=y+"_"+v;if(D[N]===void 0)return typeof C=="number"||typeof C=="boolean"?D[N]=C:D[N]=C.clone(),!0;{const I=D[N];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return D[N]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function _(w){const y=w.uniforms;let v=0;const D=16;for(let N=0,I=y.length;N<I;N++){const E=Array.isArray(y[N])?y[N]:[y[N]];for(let M=0,U=E.length;M<U;M++){const J=E[M],$=Array.isArray(J.value)?J.value:[J.value];for(let se=0,oe=$.length;se<oe;se++){const Q=$[se],ue=x(Q),Y=v%D,we=Y%ue.boundary,Le=Y+we;v+=we,Le!==0&&D-Le<ue.storage&&(v+=D-Le),J.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=v,v+=ue.storage}}}const C=v%D;return C>0&&(v+=D-C),w.__size=v,w.__cache={},this}function x(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function m(w){const y=w.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class j1{constructor(e={}){const{canvas:t=YM(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const w=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Ui,this.toneMappingExposure=1;const v=this;let D=!1,C=0,N=0,I=null,E=-1,M=null;const U=new _t,J=new _t;let $=null;const se=new Ze(0);let oe=0,Q=t.width,ue=t.height,Y=1,we=null,Le=null;const Be=new _t(0,0,Q,ue),ct=new _t(0,0,Q,ue);let At=!1;const ie=new H_;let ye=!1,ke=!1;this.transmissionResolutionScale=1;const Se=new Ne,$e=new Ne,nt=new R,tt=new _t,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function xe(){return I===null?Y:1}let A=n;function Ge(T,V){return t.getContext(T,V)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jf}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),A===null){const V="webgl2";if(A=Ge(V,T),A===null)throw Ge(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let pe,Ue,ve,Qe,Re,b,S,H,te,he,ne,He,Ee,Ie,gt,ge,Fe,Je,st,Ve,vt,dt,Ot,O;function be(){pe=new sA(A),pe.init(),dt=new B1(A,pe),Ue=new Jb(A,pe,e,dt),ve=new V1(A,pe),Ue.reverseDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),Qe=new aA(A),Re=new E1,b=new z1(A,pe,ve,Re,Ue,dt,Qe),S=new eA(v),H=new iA(v),te=new pw(A),Ot=new Zb(A,te),he=new rA(A,te,Qe,Ot),ne=new lA(A,he,te,Qe),st=new cA(A,Ue,b),ge=new Qb(Re),He=new w1(v,S,H,pe,Ue,Ot,ge),Ee=new q1(v,Re),Ie=new A1,gt=new D1(pe),Je=new jb(v,S,H,ve,ne,p,c),Fe=new O1(v,ne,Ue),O=new Y1(A,Qe,Ue,ve),Ve=new Kb(A,pe,Qe),vt=new oA(A,pe,Qe),Qe.programs=He.programs,v.capabilities=Ue,v.extensions=pe,v.properties=Re,v.renderLists=Ie,v.shadowMap=Fe,v.state=ve,v.info=Qe}be();const Z=new X1(v,A);this.xr=Z,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const T=pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(Q,ue,!1))},this.getSize=function(T){return T.set(Q,ue)},this.setSize=function(T,V,G=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=T,ue=V,t.width=Math.floor(T*Y),t.height=Math.floor(V*Y),G===!0&&(t.style.width=T+"px",t.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(Q*Y,ue*Y).floor()},this.setDrawingBufferSize=function(T,V,G){Q=T,ue=V,Y=G,t.width=Math.floor(T*G),t.height=Math.floor(V*G),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(Be)},this.setViewport=function(T,V,G,X){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,V,G,X),ve.viewport(U.copy(Be).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(ct)},this.setScissor=function(T,V,G,X){T.isVector4?ct.set(T.x,T.y,T.z,T.w):ct.set(T,V,G,X),ve.scissor(J.copy(ct).multiplyScalar(Y).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(T){ve.setScissorTest(At=T)},this.setOpaqueSort=function(T){we=T},this.setTransparentSort=function(T){Le=T},this.getClearColor=function(T){return T.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(T=!0,V=!0,G=!0){let X=0;if(T){let z=!1;if(I!==null){const me=I.texture.format;z=me===np||me===tp||me===ep}if(z){const me=I.texture.type,Ae=me===Ns||me===or||me===za||me===jo||me===Kf||me===Jf,Oe=Je.getClearColor(),ze=Je.getClearAlpha(),rt=Oe.r,ot=Oe.g,je=Oe.b;Ae?(_[0]=rt,_[1]=ot,_[2]=je,_[3]=ze,A.clearBufferuiv(A.COLOR,0,_)):(x[0]=rt,x[1]=ot,x[2]=je,x[3]=ze,A.clearBufferiv(A.COLOR,0,x))}else X|=A.COLOR_BUFFER_BIT}V&&(X|=A.DEPTH_BUFFER_BIT),G&&(X|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Je.dispose(),Ie.dispose(),gt.dispose(),Re.dispose(),S.dispose(),H.dispose(),ne.dispose(),Ot.dispose(),O.dispose(),He.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",xm),Z.removeEventListener("sessionend",vm),vr.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const T=Qe.autoReset,V=Fe.enabled,G=Fe.autoUpdate,X=Fe.needsUpdate,z=Fe.type;be(),Qe.autoReset=T,Fe.enabled=V,Fe.autoUpdate=G,Fe.needsUpdate=X,Fe.type=z}function Ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ut(T){const V=T.target;V.removeEventListener("dispose",ut),qt(V)}function qt(T){Nn(T),Re.remove(T)}function Nn(T){const V=Re.get(T).programs;V!==void 0&&(V.forEach(function(G){He.releaseProgram(G)}),T.isShaderMaterial&&He.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,G,X,z,me){V===null&&(V=yt);const Ae=z.isMesh&&z.matrixWorld.determinant()<0,Oe=BS(T,V,G,X,z);ve.setMaterial(X,Ae);let ze=G.index,rt=1;if(X.wireframe===!0){if(ze=he.getWireframeAttribute(G),ze===void 0)return;rt=2}const ot=G.drawRange,je=G.attributes.position;let St=ot.start*rt,Nt=(ot.start+ot.count)*rt;me!==null&&(St=Math.max(St,me.start*rt),Nt=Math.min(Nt,(me.start+me.count)*rt)),ze!==null?(St=Math.max(St,0),Nt=Math.min(Nt,ze.count)):je!=null&&(St=Math.max(St,0),Nt=Math.min(Nt,je.count));const sn=Nt-St;if(sn<0||sn===1/0)return;Ot.setup(z,X,Oe,G,ze);let Yt,Mt=Ve;if(ze!==null&&(Yt=te.get(ze),Mt=vt,Mt.setIndex(Yt)),z.isMesh)X.wireframe===!0?(ve.setLineWidth(X.wireframeLinewidth*xe()),Mt.setMode(A.LINES)):Mt.setMode(A.TRIANGLES);else if(z.isLine){let Ke=X.linewidth;Ke===void 0&&(Ke=1),ve.setLineWidth(Ke*xe()),z.isLineSegments?Mt.setMode(A.LINES):z.isLineLoop?Mt.setMode(A.LINE_LOOP):Mt.setMode(A.LINE_STRIP)}else z.isPoints?Mt.setMode(A.POINTS):z.isSprite&&Mt.setMode(A.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Mt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))Mt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ke=z._multiDrawStarts,Mn=z._multiDrawCounts,Rt=z._multiDrawCount,Mi=ze?te.get(ze).bytesPerElement:1,oo=Re.get(X).currentProgram.getUniforms();for(let Kn=0;Kn<Rt;Kn++)oo.setValue(A,"_gl_DrawID",Kn),Mt.render(Ke[Kn]/Mi,Mn[Kn])}else if(z.isInstancedMesh)Mt.renderInstances(St,sn,z.count);else if(G.isInstancedBufferGeometry){const Ke=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Mn=Math.min(G.instanceCount,Ke);Mt.renderInstances(St,sn,Mn)}else Mt.render(St,sn)};function Lt(T,V,G){T.transparent===!0&&T.side===Ms&&T.forceSinglePass===!1?(T.side=Kt,T.needsUpdate=!0,bc(T,V,G),T.side=rr,T.needsUpdate=!0,bc(T,V,G),T.side=Ms):bc(T,V,G)}this.compile=function(T,V,G=null){G===null&&(G=T),f=gt.get(G),f.init(V),y.push(f),G.traverseVisible(function(z){z.isLight&&z.layers.test(V.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),T!==G&&T.traverseVisible(function(z){z.isLight&&z.layers.test(V.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const X=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const me=z.material;if(me)if(Array.isArray(me))for(let Ae=0;Ae<me.length;Ae++){const Oe=me[Ae];Lt(Oe,G,z),X.add(Oe)}else Lt(me,G,z),X.add(me)}),y.pop(),f=null,X},this.compileAsync=function(T,V,G=null){const X=this.compile(T,V,G);return new Promise(z=>{function me(){if(X.forEach(function(Ae){Re.get(Ae).currentProgram.isReady()&&X.delete(Ae)}),X.size===0){z(T);return}setTimeout(me,10)}pe.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Si=null;function hs(T){Si&&Si(T)}function xm(){vr.stop()}function vm(){vr.start()}const vr=new K_;vr.setAnimationLoop(hs),typeof self<"u"&&vr.setContext(self),this.setAnimationLoop=function(T){Si=T,Z.setAnimationLoop(T),T===null?vr.stop():vr.start()},Z.addEventListener("sessionstart",xm),Z.addEventListener("sessionend",vm),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(V),V=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,V,I),f=gt.get(T,y.length),f.init(V),y.push(f),$e.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ie.setFromProjectionMatrix($e),ke=this.localClippingEnabled,ye=ge.init(this.clippingPlanes,ke),m=Ie.get(T,w.length),m.init(),w.push(m),Z.enabled===!0&&Z.isPresenting===!0){const me=v.xr.getDepthSensingMesh();me!==null&&yh(me,V,-1/0,v.sortObjects)}yh(T,V,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(we,Le),le=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,le&&Je.addToRenderList(m,T),this.info.render.frame++,ye===!0&&ge.beginShadows();const G=f.state.shadowsArray;Fe.render(G,T,V),ye===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,z=m.transmissive;if(f.setupLights(),V.isArrayCamera){const me=V.cameras;if(z.length>0)for(let Ae=0,Oe=me.length;Ae<Oe;Ae++){const ze=me[Ae];Sm(X,z,T,ze)}le&&Je.render(T);for(let Ae=0,Oe=me.length;Ae<Oe;Ae++){const ze=me[Ae];ym(m,T,ze,ze.viewport)}}else z.length>0&&Sm(X,z,T,V),le&&Je.render(T),ym(m,T,V);I!==null&&N===0&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(v,T,V),Ot.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],ye===!0&&ge.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function yh(T,V,G,X){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ie.intersectsSprite(T)){X&&tt.setFromMatrixPosition(T.matrixWorld).applyMatrix4($e);const Ae=ne.update(T),Oe=T.material;Oe.visible&&m.push(T,Ae,Oe,G,tt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ie.intersectsObject(T))){const Ae=ne.update(T),Oe=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),tt.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),tt.copy(Ae.boundingSphere.center)),tt.applyMatrix4(T.matrixWorld).applyMatrix4($e)),Array.isArray(Oe)){const ze=Ae.groups;for(let rt=0,ot=ze.length;rt<ot;rt++){const je=ze[rt],St=Oe[je.materialIndex];St&&St.visible&&m.push(T,Ae,St,G,tt.z,je)}}else Oe.visible&&m.push(T,Ae,Oe,G,tt.z,null)}}const me=T.children;for(let Ae=0,Oe=me.length;Ae<Oe;Ae++)yh(me[Ae],V,G,X)}function ym(T,V,G,X){const z=T.opaque,me=T.transmissive,Ae=T.transparent;f.setupLightsView(G),ye===!0&&ge.setGlobalState(v.clippingPlanes,G),X&&ve.viewport(U.copy(X)),z.length>0&&Ec(z,V,G),me.length>0&&Ec(me,V,G),Ae.length>0&&Ec(Ae,V,G),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Sm(T,V,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new Xr(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?ns:Ns,minFilter:Qs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const me=f.state.transmissionRenderTarget[X.id],Ae=X.viewport||U;me.setSize(Ae.z*v.transmissionResolutionScale,Ae.w*v.transmissionResolutionScale);const Oe=v.getRenderTarget();v.setRenderTarget(me),v.getClearColor(se),oe=v.getClearAlpha(),oe<1&&v.setClearColor(16777215,.5),v.clear(),le&&Je.render(G);const ze=v.toneMapping;v.toneMapping=Ui;const rt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),ye===!0&&ge.setGlobalState(v.clippingPlanes,X),Ec(T,G,X),b.updateMultisampleRenderTarget(me),b.updateRenderTargetMipmap(me),pe.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let je=0,St=V.length;je<St;je++){const Nt=V[je],sn=Nt.object,Yt=Nt.geometry,Mt=Nt.material,Ke=Nt.group;if(Mt.side===Ms&&sn.layers.test(X.layers)){const Mn=Mt.side;Mt.side=Kt,Mt.needsUpdate=!0,Mm(sn,G,X,Yt,Mt,Ke),Mt.side=Mn,Mt.needsUpdate=!0,ot=!0}}ot===!0&&(b.updateMultisampleRenderTarget(me),b.updateRenderTargetMipmap(me))}v.setRenderTarget(Oe),v.setClearColor(se,oe),rt!==void 0&&(X.viewport=rt),v.toneMapping=ze}function Ec(T,V,G){const X=V.isScene===!0?V.overrideMaterial:null;for(let z=0,me=T.length;z<me;z++){const Ae=T[z],Oe=Ae.object,ze=Ae.geometry,rt=X===null?Ae.material:X,ot=Ae.group;Oe.layers.test(G.layers)&&Mm(Oe,V,G,ze,rt,ot)}}function Mm(T,V,G,X,z,me){T.onBeforeRender(v,V,G,X,z,me),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,V,G,X,T,me),z.transparent===!0&&z.side===Ms&&z.forceSinglePass===!1?(z.side=Kt,z.needsUpdate=!0,v.renderBufferDirect(G,V,X,z,T,me),z.side=rr,z.needsUpdate=!0,v.renderBufferDirect(G,V,X,z,T,me),z.side=Ms):v.renderBufferDirect(G,V,X,z,T,me),T.onAfterRender(v,V,G,X,z,me)}function bc(T,V,G){V.isScene!==!0&&(V=yt);const X=Re.get(T),z=f.state.lights,me=f.state.shadowsArray,Ae=z.state.version,Oe=He.getParameters(T,z.state,me,V,G),ze=He.getProgramCacheKey(Oe);let rt=X.programs;X.environment=T.isMeshStandardMaterial?V.environment:null,X.fog=V.fog,X.envMap=(T.isMeshStandardMaterial?H:S).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,rt===void 0&&(T.addEventListener("dispose",ut),rt=new Map,X.programs=rt);let ot=rt.get(ze);if(ot!==void 0){if(X.currentProgram===ot&&X.lightsStateVersion===Ae)return wm(T,Oe),ot}else Oe.uniforms=He.getUniforms(T),T.onBeforeCompile(Oe,v),ot=He.acquireProgram(Oe,ze),rt.set(ze,ot),X.uniforms=Oe.uniforms;const je=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(je.clippingPlanes=ge.uniform),wm(T,Oe),X.needsLights=HS(T),X.lightsStateVersion=Ae,X.needsLights&&(je.ambientLightColor.value=z.state.ambient,je.lightProbe.value=z.state.probe,je.directionalLights.value=z.state.directional,je.directionalLightShadows.value=z.state.directionalShadow,je.spotLights.value=z.state.spot,je.spotLightShadows.value=z.state.spotShadow,je.rectAreaLights.value=z.state.rectArea,je.ltc_1.value=z.state.rectAreaLTC1,je.ltc_2.value=z.state.rectAreaLTC2,je.pointLights.value=z.state.point,je.pointLightShadows.value=z.state.pointShadow,je.hemisphereLights.value=z.state.hemi,je.directionalShadowMap.value=z.state.directionalShadowMap,je.directionalShadowMatrix.value=z.state.directionalShadowMatrix,je.spotShadowMap.value=z.state.spotShadowMap,je.spotLightMatrix.value=z.state.spotLightMatrix,je.spotLightMap.value=z.state.spotLightMap,je.pointShadowMap.value=z.state.pointShadowMap,je.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=ot,X.uniformsList=null,ot}function Tm(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=Sl.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function wm(T,V){const G=Re.get(T);G.outputColorSpace=V.outputColorSpace,G.batching=V.batching,G.batchingColor=V.batchingColor,G.instancing=V.instancing,G.instancingColor=V.instancingColor,G.instancingMorph=V.instancingMorph,G.skinning=V.skinning,G.morphTargets=V.morphTargets,G.morphNormals=V.morphNormals,G.morphColors=V.morphColors,G.morphTargetsCount=V.morphTargetsCount,G.numClippingPlanes=V.numClippingPlanes,G.numIntersection=V.numClipIntersection,G.vertexAlphas=V.vertexAlphas,G.vertexTangents=V.vertexTangents,G.toneMapping=V.toneMapping}function BS(T,V,G,X,z){V.isScene!==!0&&(V=yt),b.resetTextureUnits();const me=V.fog,Ae=X.isMeshStandardMaterial?V.environment:null,Oe=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ar,ze=(X.isMeshStandardMaterial?H:S).get(X.envMap||Ae),rt=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ot=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),je=!!G.morphAttributes.position,St=!!G.morphAttributes.normal,Nt=!!G.morphAttributes.color;let sn=Ui;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(sn=v.toneMapping);const Yt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Mt=Yt!==void 0?Yt.length:0,Ke=Re.get(X),Mn=f.state.lights;if(ye===!0&&(ke===!0||T!==M)){const Dn=T===M&&X.id===E;ge.setState(X,T,Dn)}let Rt=!1;X.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Mn.state.version||Ke.outputColorSpace!==Oe||z.isBatchedMesh&&Ke.batching===!1||!z.isBatchedMesh&&Ke.batching===!0||z.isBatchedMesh&&Ke.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ke.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ke.instancing===!1||!z.isInstancedMesh&&Ke.instancing===!0||z.isSkinnedMesh&&Ke.skinning===!1||!z.isSkinnedMesh&&Ke.skinning===!0||z.isInstancedMesh&&Ke.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ke.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ke.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ke.instancingMorph===!1&&z.morphTexture!==null||Ke.envMap!==ze||X.fog===!0&&Ke.fog!==me||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==ge.numPlanes||Ke.numIntersection!==ge.numIntersection)||Ke.vertexAlphas!==rt||Ke.vertexTangents!==ot||Ke.morphTargets!==je||Ke.morphNormals!==St||Ke.morphColors!==Nt||Ke.toneMapping!==sn||Ke.morphTargetsCount!==Mt)&&(Rt=!0):(Rt=!0,Ke.__version=X.version);let Mi=Ke.currentProgram;Rt===!0&&(Mi=bc(X,V,z));let oo=!1,Kn=!1,la=!1;const kt=Mi.getUniforms(),hi=Ke.uniforms;if(ve.useProgram(Mi.program)&&(oo=!0,Kn=!0,la=!0),X.id!==E&&(E=X.id,Kn=!0),oo||M!==T){ve.buffers.depth.getReversed()?(Se.copy(T.projectionMatrix),ZM(Se),KM(Se),kt.setValue(A,"projectionMatrix",Se)):kt.setValue(A,"projectionMatrix",T.projectionMatrix),kt.setValue(A,"viewMatrix",T.matrixWorldInverse);const Hn=kt.map.cameraPosition;Hn!==void 0&&Hn.setValue(A,nt.setFromMatrixPosition(T.matrixWorld)),Ue.logarithmicDepthBuffer&&kt.setValue(A,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&kt.setValue(A,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Kn=!0,la=!0)}if(z.isSkinnedMesh){kt.setOptional(A,z,"bindMatrix"),kt.setOptional(A,z,"bindMatrixInverse");const Dn=z.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),kt.setValue(A,"boneTexture",Dn.boneTexture,b))}z.isBatchedMesh&&(kt.setOptional(A,z,"batchingTexture"),kt.setValue(A,"batchingTexture",z._matricesTexture,b),kt.setOptional(A,z,"batchingIdTexture"),kt.setValue(A,"batchingIdTexture",z._indirectTexture,b),kt.setOptional(A,z,"batchingColorTexture"),z._colorsTexture!==null&&kt.setValue(A,"batchingColorTexture",z._colorsTexture,b));const di=G.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&st.update(z,G,Mi),(Kn||Ke.receiveShadow!==z.receiveShadow)&&(Ke.receiveShadow=z.receiveShadow,kt.setValue(A,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(hi.envMap.value=ze,hi.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&V.environment!==null&&(hi.envMapIntensity.value=V.environmentIntensity),Kn&&(kt.setValue(A,"toneMappingExposure",v.toneMappingExposure),Ke.needsLights&&kS(hi,la),me&&X.fog===!0&&Ee.refreshFogUniforms(hi,me),Ee.refreshMaterialUniforms(hi,X,Y,ue,f.state.transmissionRenderTarget[T.id]),Sl.upload(A,Tm(Ke),hi,b)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Sl.upload(A,Tm(Ke),hi,b),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&kt.setValue(A,"center",z.center),kt.setValue(A,"modelViewMatrix",z.modelViewMatrix),kt.setValue(A,"normalMatrix",z.normalMatrix),kt.setValue(A,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Dn=X.uniformsGroups;for(let Hn=0,Sh=Dn.length;Hn<Sh;Hn++){const yr=Dn[Hn];O.update(yr,Mi),O.bind(yr,Mi)}}return Mi}function kS(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function HS(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,V,G){Re.get(T.texture).__webglTexture=V,Re.get(T.depthTexture).__webglTexture=G;const X=Re.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,V){const G=Re.get(T);G.__webglFramebuffer=V,G.__useDefaultFramebuffer=V===void 0};const GS=A.createFramebuffer();this.setRenderTarget=function(T,V=0,G=0){I=T,C=V,N=G;let X=!0,z=null,me=!1,Ae=!1;if(T){const ze=Re.get(T);if(ze.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(A.FRAMEBUFFER,null),X=!1;else if(ze.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(ze.__hasExternalTextures)b.rebindTextures(T,Re.get(T.texture).__webglTexture,Re.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const je=T.depthTexture;if(ze.__boundDepthTexture!==je){if(je!==null&&Re.has(je)&&(T.width!==je.image.width||T.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const rt=T.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ae=!0);const ot=Re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ot[V])?z=ot[V][G]:z=ot[V],me=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?z=Re.get(T).__webglMultisampledFramebuffer:Array.isArray(ot)?z=ot[G]:z=ot,U.copy(T.viewport),J.copy(T.scissor),$=T.scissorTest}else U.copy(Be).multiplyScalar(Y).floor(),J.copy(ct).multiplyScalar(Y).floor(),$=At;if(G!==0&&(z=GS),ve.bindFramebuffer(A.FRAMEBUFFER,z)&&X&&ve.drawBuffers(T,z),ve.viewport(U),ve.scissor(J),ve.setScissorTest($),me){const ze=Re.get(T.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+V,ze.__webglTexture,G)}else if(Ae){const ze=Re.get(T.texture),rt=V;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,ze.__webglTexture,G,rt)}else if(T!==null&&G!==0){const ze=Re.get(T.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ze.__webglTexture,G)}E=-1},this.readRenderTargetPixels=function(T,V,G,X,z,me,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Oe=Oe[Ae]),Oe){ve.bindFramebuffer(A.FRAMEBUFFER,Oe);try{const ze=T.texture,rt=ze.format,ot=ze.type;if(!Ue.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-X&&G>=0&&G<=T.height-z&&A.readPixels(V,G,X,z,dt.convert(rt),dt.convert(ot),me)}finally{const ze=I!==null?Re.get(I).__webglFramebuffer:null;ve.bindFramebuffer(A.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(T,V,G,X,z,me,Ae){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Oe=Oe[Ae]),Oe){const ze=T.texture,rt=ze.format,ot=ze.type;if(!Ue.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=T.width-X&&G>=0&&G<=T.height-z){ve.bindFramebuffer(A.FRAMEBUFFER,Oe);const je=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,je),A.bufferData(A.PIXEL_PACK_BUFFER,me.byteLength,A.STREAM_READ),A.readPixels(V,G,X,z,dt.convert(rt),dt.convert(ot),0);const St=I!==null?Re.get(I).__webglFramebuffer:null;ve.bindFramebuffer(A.FRAMEBUFFER,St);const Nt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await jM(A,Nt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,je),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,me),A.deleteBuffer(je),A.deleteSync(Nt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,V=null,G=0){T.isTexture!==!0&&(bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-G),z=Math.floor(T.image.width*X),me=Math.floor(T.image.height*X),Ae=V!==null?V.x:0,Oe=V!==null?V.y:0;b.setTexture2D(T,0),A.copyTexSubImage2D(A.TEXTURE_2D,G,0,0,Ae,Oe,z,me),ve.unbindTexture()};const WS=A.createFramebuffer(),XS=A.createFramebuffer();this.copyTextureToTexture=function(T,V,G=null,X=null,z=0,me=null){T.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],V=arguments[2],me=arguments[3]||0,G=null),me===null&&(z!==0?(bo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=z,z=0):me=0);let Ae,Oe,ze,rt,ot,je,St,Nt,sn;const Yt=T.isCompressedTexture?T.mipmaps[me]:T.image;if(G!==null)Ae=G.max.x-G.min.x,Oe=G.max.y-G.min.y,ze=G.isBox3?G.max.z-G.min.z:1,rt=G.min.x,ot=G.min.y,je=G.isBox3?G.min.z:0;else{const di=Math.pow(2,-z);Ae=Math.floor(Yt.width*di),Oe=Math.floor(Yt.height*di),T.isDataArrayTexture?ze=Yt.depth:T.isData3DTexture?ze=Math.floor(Yt.depth*di):ze=1,rt=0,ot=0,je=0}X!==null?(St=X.x,Nt=X.y,sn=X.z):(St=0,Nt=0,sn=0);const Mt=dt.convert(V.format),Ke=dt.convert(V.type);let Mn;V.isData3DTexture?(b.setTexture3D(V,0),Mn=A.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(b.setTexture2DArray(V,0),Mn=A.TEXTURE_2D_ARRAY):(b.setTexture2D(V,0),Mn=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,V.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,V.unpackAlignment);const Rt=A.getParameter(A.UNPACK_ROW_LENGTH),Mi=A.getParameter(A.UNPACK_IMAGE_HEIGHT),oo=A.getParameter(A.UNPACK_SKIP_PIXELS),Kn=A.getParameter(A.UNPACK_SKIP_ROWS),la=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Yt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Yt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,rt),A.pixelStorei(A.UNPACK_SKIP_ROWS,ot),A.pixelStorei(A.UNPACK_SKIP_IMAGES,je);const kt=T.isDataArrayTexture||T.isData3DTexture,hi=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){const di=Re.get(T),Dn=Re.get(V),Hn=Re.get(di.__renderTarget),Sh=Re.get(Dn.__renderTarget);ve.bindFramebuffer(A.READ_FRAMEBUFFER,Hn.__webglFramebuffer),ve.bindFramebuffer(A.DRAW_FRAMEBUFFER,Sh.__webglFramebuffer);for(let yr=0;yr<ze;yr++)kt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Re.get(T).__webglTexture,z,je+yr),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Re.get(V).__webglTexture,me,sn+yr)),A.blitFramebuffer(rt,ot,Ae,Oe,St,Nt,Ae,Oe,A.DEPTH_BUFFER_BIT,A.NEAREST);ve.bindFramebuffer(A.READ_FRAMEBUFFER,null),ve.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||Re.has(T)){const di=Re.get(T),Dn=Re.get(V);ve.bindFramebuffer(A.READ_FRAMEBUFFER,WS),ve.bindFramebuffer(A.DRAW_FRAMEBUFFER,XS);for(let Hn=0;Hn<ze;Hn++)kt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,di.__webglTexture,z,je+Hn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,di.__webglTexture,z),hi?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Dn.__webglTexture,me,sn+Hn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Dn.__webglTexture,me),z!==0?A.blitFramebuffer(rt,ot,Ae,Oe,St,Nt,Ae,Oe,A.COLOR_BUFFER_BIT,A.NEAREST):hi?A.copyTexSubImage3D(Mn,me,St,Nt,sn+Hn,rt,ot,Ae,Oe):A.copyTexSubImage2D(Mn,me,St,Nt,rt,ot,Ae,Oe);ve.bindFramebuffer(A.READ_FRAMEBUFFER,null),ve.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else hi?T.isDataTexture||T.isData3DTexture?A.texSubImage3D(Mn,me,St,Nt,sn,Ae,Oe,ze,Mt,Ke,Yt.data):V.isCompressedArrayTexture?A.compressedTexSubImage3D(Mn,me,St,Nt,sn,Ae,Oe,ze,Mt,Yt.data):A.texSubImage3D(Mn,me,St,Nt,sn,Ae,Oe,ze,Mt,Ke,Yt):T.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,me,St,Nt,Ae,Oe,Mt,Ke,Yt.data):T.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,me,St,Nt,Yt.width,Yt.height,Mt,Yt.data):A.texSubImage2D(A.TEXTURE_2D,me,St,Nt,Ae,Oe,Mt,Ke,Yt);A.pixelStorei(A.UNPACK_ROW_LENGTH,Rt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Mi),A.pixelStorei(A.UNPACK_SKIP_PIXELS,oo),A.pixelStorei(A.UNPACK_SKIP_ROWS,Kn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,la),me===0&&V.generateMipmaps&&A.generateMipmap(Mn),ve.unbindTexture()},this.copyTextureToTexture3D=function(T,V,G=null,X=null,z=0){return T.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,T=arguments[2],V=arguments[3],z=arguments[4]||0),bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,V,G,X,z)},this.initRenderTarget=function(T){Re.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){C=0,N=0,I=null,ve.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const Cg={type:"change"},pp={type:"start"},nx={type:"end"},Qc=new D_,Pg=new xs,Z1=Math.cos(70*yu.DEG2RAD),un=new R,Gn=2*Math.PI,Ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qh=1e-6;class K1 extends dw{constructor(e,t=null){super(e,t),this.state=Ut.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Uo.ROTATE,MIDDLE:Uo.DOLLY,RIGHT:Uo.PAN},this.touches={ONE:Co.ROTATE,TWO:Co.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new $r,this._lastTargetPosition=new R,this._quat=new $r().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ig,this._sphericalDelta=new ig,this._scale=1,this._panOffset=new R,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new R,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Q1.bind(this),this._onPointerDown=J1.bind(this),this._onPointerUp=eN.bind(this),this._onContextMenu=aN.bind(this),this._onMouseWheel=iN.bind(this),this._onKeyDown=sN.bind(this),this._onTouchStart=rN.bind(this),this._onTouchMove=oN.bind(this),this._onMouseDown=tN.bind(this),this._onMouseMove=nN.bind(this),this._interceptControlDown=cN.bind(this),this._interceptControlUp=lN.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cg),this.update(),this.state=Ut.NONE}update(e=null){const t=this.object.position;un.copy(t).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Gn:n>Math.PI&&(n-=Gn),s<-Math.PI?s+=Gn:s>Math.PI&&(s-=Gn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),t.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=un.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Qc.origin.copy(this.object.position),Qc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qc.direction))<Z1?this.object.lookAt(this.target):(Pg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qc.intersectPlane(Pg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Qh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qh||this._lastTargetPosition.distanceToSquared(this.target)>Qh?(this.dispatchEvent(Cg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gn/60*this.autoRotateSpeed*e:Gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){un.setFromMatrixColumn(t,0),un.multiplyScalar(-e),this._panOffset.add(un)}_panUp(e,t){this.screenSpacePanning===!0?un.setFromMatrixColumn(t,1):(un.setFromMatrixColumn(t,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(e),this._panOffset.add(un)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;un.copy(s).sub(this.target);let r=un.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new de,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function J1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Q1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function eN(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nx),this.state=Ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function tN(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Uo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ut.DOLLY;break;case Uo.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ut.ROTATE}break;case Uo.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ut.PAN}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(pp)}function nN(i){switch(this.state){case Ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function iN(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ut.NONE||(i.preventDefault(),this.dispatchEvent(pp),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(nx))}function sN(i){this.enabled!==!1&&this._handleKeyDown(i)}function rN(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Co.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ut.TOUCH_ROTATE;break;case Co.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ut.TOUCH_PAN;break;default:this.state=Ut.NONE}break;case 2:switch(this.touches.TWO){case Co.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ut.TOUCH_DOLLY_PAN;break;case Co.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ut.TOUCH_DOLLY_ROTATE;break;default:this.state=Ut.NONE}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(pp)}function oN(i){switch(this._trackPointer(i),this.state){case Ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ut.NONE}}function aN(i){this.enabled!==!1&&i.preventDefault()}function cN(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lN(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uN=["alphaMap","alphaTest","anisotropy","anisotropyMap","anisotropyRotation","aoMap","attenuationColor","attenuationDistance","bumpMap","clearcoat","clearcoatMap","clearcoatNormalMap","clearcoatNormalScale","clearcoatRoughness","color","dispersion","displacementMap","emissive","emissiveMap","envMap","gradientMap","ior","iridescence","iridescenceIOR","iridescenceMap","iridescenceThicknessMap","lightMap","map","matcap","metalness","metalnessMap","normalMap","normalScale","opacity","roughness","roughnessMap","sheen","sheenColor","sheenColorMap","sheenRoughnessMap","shininess","specular","specularColor","specularColorMap","specularIntensity","specularIntensityMap","specularMap","thickness","transmission","transmissionMap"];class hN{constructor(e){this.renderObjects=new WeakMap,this.hasNode=this.containsNode(e),this.hasAnimation=e.object.isSkinnedMesh===!0,this.refreshUniforms=uN,this.renderId=0}firstInitialization(e){return this.renderObjects.has(e)===!1?(this.getRenderObjectData(e),!0):!1}getRenderObjectData(e){let t=this.renderObjects.get(e);if(t===void 0){const{geometry:n,material:s,object:r}=e;if(t={material:this.getMaterialData(s),geometry:{attributes:this.getAttributesData(n.attributes),indexVersion:n.index?n.index.version:null,drawRange:{start:n.drawRange.start,count:n.drawRange.count}},worldMatrix:r.matrixWorld.clone()},r.center&&(t.center=r.center.clone()),r.morphTargetInfluences&&(t.morphTargetInfluences=r.morphTargetInfluences.slice()),e.bundle!==null&&(t.version=e.bundle.version),t.material.transmission>0){const{width:o,height:a}=e.context;t.bufferWidth=o,t.bufferHeight=a}this.renderObjects.set(e,t)}return t}getAttributesData(e){const t={};for(const n in e){const s=e[n];t[n]={version:s.version}}return t}containsNode(e){const t=e.material;for(const n in t)if(t[n]&&t[n].isNode)return!0;return e.renderer.nodes.modelViewMatrix!==null||e.renderer.nodes.modelNormalViewMatrix!==null}getMaterialData(e){const t={};for(const n of this.refreshUniforms){const s=e[n];s!=null&&(typeof s=="object"&&s.clone!==void 0?s.isTexture===!0?t[n]={id:s.id,version:s.version}:t[n]=s.clone():t[n]=s)}return t}equals(e){const{object:t,material:n,geometry:s}=e,r=this.getRenderObjectData(e);if(r.worldMatrix.equals(t.matrixWorld)!==!0)return r.worldMatrix.copy(t.matrixWorld),!1;const o=r.material;for(const x in o){const m=o[x],f=n[x];if(m.equals!==void 0){if(m.equals(f)===!1)return m.copy(f),!1}else if(f.isTexture===!0){if(m.id!==f.id||m.version!==f.version)return m.id=f.id,m.version=f.version,!1}else if(m!==f)return o[x]=f,!1}if(o.transmission>0){const{width:x,height:m}=e.context;if(r.bufferWidth!==x||r.bufferHeight!==m)return r.bufferWidth=x,r.bufferHeight=m,!1}const a=r.geometry,c=s.attributes,l=a.attributes,u=Object.keys(l),h=Object.keys(c);if(u.length!==h.length)return r.geometry.attributes=this.getAttributesData(c),!1;for(const x of u){const m=l[x],f=c[x];if(f===void 0)return delete l[x],!1;if(m.version!==f.version)return m.version=f.version,!1}const d=s.index,p=a.indexVersion,_=d?d.version:null;if(p!==_)return a.indexVersion=_,!1;if(a.drawRange.start!==s.drawRange.start||a.drawRange.count!==s.drawRange.count)return a.drawRange.start=s.drawRange.start,a.drawRange.count=s.drawRange.count,!1;if(r.morphTargetInfluences){let x=!1;for(let m=0;m<r.morphTargetInfluences.length;m++)r.morphTargetInfluences[m]!==t.morphTargetInfluences[m]&&(x=!0);if(x)return!0}return r.center&&r.center.equals(t.center)===!1?(r.center.copy(t.center),!0):(e.bundle!==null&&(r.version=e.bundle.version),!0)}needsRefresh(e,t){if(this.hasNode||this.hasAnimation||this.firstInitialization(e))return!0;const{renderId:n}=t;if(this.renderId!==n)return this.renderId=n,!0;const s=e.object.static===!0,r=e.bundle!==null&&e.bundle.static===!0&&this.getRenderObjectData(e).version===e.bundle.version;return s||r?!1:this.equals(e)!==!0}}function Xa(i,e=0){let t=3735928559^e,n=1103547991^e;if(i instanceof Array)for(let s=0,r;s<i.length;s++)r=i[s],t=Math.imul(t^r,2654435761),n=Math.imul(n^r,1597334677);else for(let s=0,r;s<i.length;s++)r=i.charCodeAt(s),t=Math.imul(t^r,2654435761),n=Math.imul(n^r,1597334677);return t=Math.imul(t^t>>>16,2246822507),t^=Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(t^t>>>13,3266489909),4294967296*(2097151&n)+(t>>>0)}const dN=i=>Xa(i),ix=i=>Xa(i),sx=(...i)=>Xa(i);function rx(i,e=!1){const t=[];i.isNode===!0&&(t.push(i.id),i=i.getSelf());for(const{property:n,childNode:s}of Jl(i))t.push(t,Xa(n.slice(0,-4)),s.getCacheKey(e));return Xa(t)}function*Jl(i,e=!1){for(const t in i){if(t.startsWith("_")===!0)continue;const n=i[t];if(Array.isArray(n)===!0)for(let s=0;s<n.length;s++){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const s in n){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}}}const fN=new Map([[1,"float"],[2,"vec2"],[3,"vec3"],[4,"vec4"],[9,"mat3"],[16,"mat4"]]),Lg=new WeakMap;function pN(i){return fN.get(i)}function ox(i){if(/[iu]?vec\d/.test(i))return i.startsWith("ivec")?Int32Array:i.startsWith("uvec")?Uint32Array:Float32Array;if(/mat\d/.test(i)||/float/.test(i))return Float32Array;if(/uint/.test(i))return Uint32Array;if(/int/.test(i))return Int32Array;throw new Error(`THREE.NodeUtils: Unsupported type: ${i}`)}function ax(i){if(/float|int|uint/.test(i))return 1;if(/vec2/.test(i))return 2;if(/vec3/.test(i))return 3;if(/vec4/.test(i))return 4;if(/mat3/.test(i))return 9;if(/mat4/.test(i))return 16;console.error("THREE.TSL: Unsupported type:",i)}function er(i){if(i==null)return null;const e=typeof i;return i.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":i.isVector2===!0?"vec2":i.isVector3===!0?"vec3":i.isVector4===!0?"vec4":i.isMatrix3===!0?"mat3":i.isMatrix4===!0?"mat4":i.isColor===!0?"color":i instanceof ArrayBuffer?"ArrayBuffer":null}function cx(i,...e){const t=i?i.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),i==="color"?new Ze(...e):t==="vec2"?new de(...e):t==="vec3"?new R(...e):t==="vec4"?new _t(...e):t==="mat3"?new at(...e):t==="mat4"?new Ne(...e):i==="bool"?e[0]||!1:i==="float"||i==="int"||i==="uint"?e[0]||0:i==="string"?e[0]||"":i==="ArrayBuffer"?hx(e[0]):null}function lx(i){let e=Lg.get(i);return e===void 0&&(e={},Lg.set(i,e)),e}function ux(i){let e="";const t=new Uint8Array(i);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function hx(i){return Uint8Array.from(atob(i),e=>e.charCodeAt(0)).buffer}const ff={VERTEX:"vertex",FRAGMENT:"fragment"},Et={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},mN={BOOLEAN:"bool",INTEGER:"int",FLOAT:"float",VECTOR2:"vec2",VECTOR3:"vec3",VECTOR4:"vec4",MATRIX2:"mat2",MATRIX3:"mat3",MATRIX4:"mat4"},Ki={READ_ONLY:"readOnly",WRITE_ONLY:"writeOnly",READ_WRITE:"readWrite"},dx=["fragment","vertex"],gN=["setup","analyze","generate"],_N=[...dx,"compute"],ra=["x","y","z","w"];let xN=0;class qe extends Fs{static get type(){return"Node"}constructor(e=null){super(),this.nodeType=e,this.updateType=Et.NONE,this.updateBeforeType=Et.NONE,this.updateAfterType=Et.NONE,this.uuid=yu.generateUUID(),this.version=0,this.global=!1,this.isNode=!0,this._cacheKey=null,this._cacheKeyVersion=0,Object.defineProperty(this,"id",{value:xN++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this.getSelf()),this}onFrameUpdate(e){return this.onUpdate(e,Et.FRAME)}onRenderUpdate(e){return this.onUpdate(e,Et.RENDER)}onObjectUpdate(e){return this.onUpdate(e,Et.OBJECT)}onReference(e){return this.updateReference=e.bind(this.getSelf()),this}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return this.global}*getChildren(){for(const{childNode:e}of Jl(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(e=!1){return e=e||this.version!==this._cacheKeyVersion,(e===!0||this._cacheKey===null)&&(this._cacheKey=sx(rx(this,e),this.customCacheKey()),this._cacheKeyVersion=this.version),this._cacheKey}customCacheKey(){return 0}getScope(){return this}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getUpdateAfterType(){return this.updateAfterType}getElementType(e){const t=this.getNodeType(e);return e.getElementType(t)}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);let n=0;for(const s of this.getChildren())t["node"+n++]=s;return t.outputNode||null}analyze(e){if(e.increaseUsage(this)===1){const n=e.getNodeProperties(this);for(const s of Object.values(n))s&&s.isNode===!0&&s.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}updateAfter(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let s=null;const r=e.getBuildStage();if(r==="setup"){this.updateReference(e);const o=e.getNodeProperties(this);if(o.initialized!==!0){o.initialized=!0;const a=this.setup(e),c=a&&a.isNode===!0;for(const l of Object.values(o))l&&l.isNode===!0&&l.build(e);c&&a.build(e),o.outputNode=a}}else if(r==="analyze")this.analyze(e);else if(r==="generate")if(this.generate.length===1){const a=this.getNodeType(e),c=e.getDataFromNode(this);s=c.snippet,s===void 0?(s=this.generate(e)||"",c.snippet=s):c.flowCodes!==void 0&&e.context.nodeBlock!==void 0&&e.addFlowCodeHierarchy(this,e.context.nodeBlock),s=e.format(s,a,t)}else s=this.generate(e,t)||"";return e.removeChain(this),e.addSequentialNode(this),s}getSerializeChildren(){return Jl(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:s,index:r,childNode:o}of t)r!==void 0?(n[s]===void 0&&(n[s]=Number.isInteger(r)?[]:{}),n[s][r]=o.toJSON(e.meta).uuid):n[s]=o.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const s=[];for(const r of e.inputNodes[n])s.push(t[r]);this[n]=s}else if(typeof e.inputNodes[n]=="object"){const s={};for(const r in e.inputNodes[n]){const o=e.inputNodes[n][r];s[r]=t[o]}this[n]=s}else{const s=e.inputNodes[n];this[n]=t[s]}}}toJSON(e){const{uuid:t,type:n}=this,s=e===void 0||typeof e=="string";s&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},s!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(s){const a=o(e.textures),c=o(e.images),l=o(e.nodes);a.length>0&&(r.textures=a),c.length>0&&(r.images=c),l.length>0&&(r.nodes=l)}return r}}class Kr extends qe{static get type(){return"ArrayElementNode"}constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}class fx extends qe{static get type(){return"ConvertNode"}constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const s of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(s))&&(n=s);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,s=this.getNodeType(e),r=n.build(e,s);return e.format(r,s,t)}}class cn extends qe{static get type(){return"TempNode"}constructor(e=null){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const s=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(r.propertyName!==void 0)return e.format(r.propertyName,s,t);if(s!=="void"&&t!=="void"&&this.hasDependencies(e)){const o=super.build(e,s),a=e.getVarFromNode(this,null,s),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${o}`,this),r.snippet=o,r.propertyName=c,e.format(r.propertyName,s,t)}}return super.build(e,t)}}class vN extends cn{static get type(){return"JoinNode"}constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),s=this.nodes,r=e.getComponentType(n),o=[];for(const c of s){let l=c.build(e);const u=e.getComponentType(c.getNodeType(e));u!==r&&(l=e.format(l,u,r)),o.push(l)}const a=`${e.getType(n)}( ${o.join(", ")} )`;return e.format(a,n,t)}}const yN=ra.join("");class pf extends qe{static get type(){return"SplitNode"}constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(ra.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,s=e.getTypeLength(n.getNodeType(e));let r=null;if(s>1){let o=null;this.getVectorLength()>=s&&(o=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const c=n.build(e,o);this.components.length===s&&this.components===yN.slice(0,this.components.length)?r=e.format(c,o,t):r=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}class SN extends cn{static get type(){return"SetNode"}constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:s}=this,r=this.getNodeType(e),o=e.getComponentType(s.getNodeType(e)),a=e.getTypeFromLength(n.length,o),c=s.build(e,a),l=t.build(e,r),u=e.getTypeLength(r),h=[];for(let d=0;d<u;d++){const p=ra[d];p===n[0]?(h.push(c),d+=n.length-1):h.push(l+"."+p)}return`${e.getType(r)}( ${h.join(", ")} )`}}class MN extends cn{static get type(){return"FlipNode"}constructor(e,t){super(),this.sourceNode=e,this.components=t}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{components:t,sourceNode:n}=this,s=this.getNodeType(e),r=n.build(e),o=e.getVarFromNode(this),a=e.getPropertyName(o);e.addLineFlowCode(a+" = "+r,this);const c=e.getTypeLength(s),l=[];let u=0;for(let h=0;h<c;h++){const d=ra[h];d===t[u]?(l.push("1.0 - "+(a+"."+d)),u++):l.push(a+"."+d)}return`${e.getType(s)}( ${l.join(", ")} )`}}class mp extends qe{static get type(){return"InputNode"}constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?er(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=er(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=ux(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?cx(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}class Oi extends mp{static get type(){return"ConstNode"}constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}let Jo=null;const Do=new Map;function j(i,e){if(Do.has(i)){console.warn(`Redefinition of method chaining ${i}`);return}if(typeof e!="function")throw new Error(`Node element ${i} is not a function`);Do.set(i,e)}const px=i=>i.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),Dg=i=>px(i).split("").sort().join(""),mx={setup(i,e){const t=e.shift();return i(oc(t),...e)},get(i,e,t){if(typeof e=="string"&&i[e]===void 0){if(i.isStackNode!==!0&&e==="assign")return(...n)=>(Jo.assign(t,...n),t);if(Do.has(e)){const n=Do.get(e);return i.isStackNode?(...s)=>t.add(n(...s)):(...s)=>n(t,...s)}else{if(e==="self")return i;if(e.endsWith("Assign")&&Do.has(e.slice(0,e.length-6))){const n=Do.get(e.slice(0,e.length-6));return i.isStackNode?(...s)=>t.assign(s[0],n(...s)):(...s)=>t.assign(n(t,...s))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=px(e),ee(new pf(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=Dg(e.slice(3).toLowerCase()),n=>ee(new SN(i,e,n));if(/^flip[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=Dg(e.slice(4).toLowerCase()),()=>ee(new MN(ee(i),e));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),ee(new pf(i,e));if(/^\d+$/.test(e)===!0)return ee(new Kr(t,new Oi(Number(e),"uint")))}}}return Reflect.get(i,e,t)},set(i,e,t,n){return typeof e=="string"&&i[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(i,e,t,n)}},ed=new WeakMap,Ig=new WeakMap,TN=function(i,e=null){const t=er(i);if(t==="node"){let n=ed.get(i);return n===void 0&&(n=new Proxy(i,mx),ed.set(i,n),ed.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return ee(mf(i,e));if(t==="shader")return k(i)}return i},wN=function(i,e=null){for(const t in i)i[t]=ee(i[t],e);return i},EN=function(i,e=null){const t=i.length;for(let n=0;n<t;n++)i[n]=ee(i[n],e);return i},bN=function(i,e=null,t=null,n=null){const s=r=>ee(n!==null?Object.assign(r,n):r);return e===null?(...r)=>s(new i(...zr(r))):t!==null?(t=ee(t),(...r)=>s(new i(e,...zr(r),t))):(...r)=>s(new i(e,...zr(r)))},AN=function(i,...e){return ee(new i(...zr(e)))};class NN extends qe{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){return this.shaderNode.nodeType||this.getOutputNode(e).getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this,s=e.getNodeProperties(t);if(s.onceOutput)return s.onceOutput;let r=null;if(t.layout){let o=Ig.get(e.constructor);o===void 0&&(o=new WeakMap,Ig.set(e.constructor,o));let a=o.get(t);a===void 0&&(a=ee(e.buildFunctionNode(t)),o.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),r=ee(a.call(n))}else{const o=t.jsFunc,a=n!==null?o(n,e):o(e);r=ee(a)}return t.once&&(s.onceOutput=r),r}getOutputNode(e){const t=e.getNodeProperties(this);return t.outputNode===null&&(t.outputNode=this.setupOutput(e)),t.outputNode}setup(e){return this.getOutputNode(e)}setupOutput(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){return this.getOutputNode(e).build(e,t)}}class RN extends qe{constructor(e,t){super(t),this.jsFunc=e,this.layout=null,this.global=!0,this.once=!1}setLayout(e){return this.layout=e,this}call(e=null){return oc(e),ee(new NN(this,e))}setup(){return this.call()}}const CN=[!1,!0],PN=[0,1,2,3],LN=[-1,-2],gx=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],gp=new Map;for(const i of CN)gp.set(i,new Oi(i));const _p=new Map;for(const i of PN)_p.set(i,new Oi(i,"uint"));const xp=new Map([..._p].map(i=>new Oi(i.value,"int")));for(const i of LN)xp.set(i,new Oi(i,"int"));const wu=new Map([...xp].map(i=>new Oi(i.value)));for(const i of gx)wu.set(i,new Oi(i));for(const i of gx)wu.set(-i,new Oi(-i));const Eu={bool:gp,uint:_p,ints:xp,float:wu},Ug=new Map([...gp,...wu]),mf=(i,e)=>Ug.has(i)?Ug.get(i):i.isNode===!0?i:new Oi(i,e),DN=i=>{try{return i.getNodeType()}catch{return}},ln=function(i,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(i)&&t.every(s=>typeof s!="object"))&&(t=[cx(i,...t)]),t.length===1&&e!==null&&e.has(t[0]))return ee(e.get(t[0]));if(t.length===1){const s=mf(t[0],i);return DN(s)===i?ee(s):ee(new fx(s,i))}const n=t.map(s=>mf(s));return ee(new vN(n,i))}},$a=i=>typeof i=="object"&&i!==null?i.value:i,_x=i=>i!=null?i.nodeType||i.convertTo||(typeof i=="string"?i:null):null;function Oa(i,e){return new Proxy(new RN(i,e),mx)}const ee=(i,e=null)=>TN(i,e),oc=(i,e=null)=>new wN(i,e),zr=(i,e=null)=>new EN(i,e),K=(...i)=>new bN(...i),_e=(...i)=>new AN(...i),k=(i,e)=>{const t=new Oa(i,e),n=(...s)=>{let r;return oc(s),s[0]&&s[0].isNode?r=[...s]:r=s[0],t.call(r)};return n.shaderNode=t,n.setLayout=s=>(t.setLayout(s),n),n.once=()=>(t.once=!0,n),n},IN=(...i)=>(console.warn("TSL.ShaderNode: tslFn() has been renamed to Fn()."),k(...i));j("toGlobal",i=>(i.global=!0,i));const gf=i=>{Jo=i},xx=()=>Jo,mt=(...i)=>Jo.If(...i);function vx(i){return Jo&&Jo.add(i),i}j("append",vx);const yx=new ln("color"),P=new ln("float",Eu.float),L=new ln("int",Eu.ints),Te=new ln("uint",Eu.uint),Ps=new ln("bool",Eu.bool),fe=new ln("vec2"),dn=new ln("ivec2"),Sx=new ln("uvec2"),Mx=new ln("bvec2"),B=new ln("vec3"),Tx=new ln("ivec3"),oa=new ln("uvec3"),vp=new ln("bvec3"),et=new ln("vec4"),wx=new ln("ivec4"),Ex=new ln("uvec4"),bx=new ln("bvec4"),bu=new ln("mat2"),vi=new ln("mat3"),Br=new ln("mat4"),UN=(i="")=>ee(new Oi(i,"string")),ON=i=>ee(new Oi(i,"ArrayBuffer"));j("toColor",yx);j("toFloat",P);j("toInt",L);j("toUint",Te);j("toBool",Ps);j("toVec2",fe);j("toIVec2",dn);j("toUVec2",Sx);j("toBVec2",Mx);j("toVec3",B);j("toIVec3",Tx);j("toUVec3",oa);j("toBVec3",vp);j("toVec4",et);j("toIVec4",wx);j("toUVec4",Ex);j("toBVec4",bx);j("toMat2",bu);j("toMat3",vi);j("toMat4",Br);const Ax=K(Kr),Nx=(i,e)=>ee(new fx(ee(i),e)),FN=(i,e)=>ee(new pf(ee(i),e));j("element",Ax);j("convert",Nx);class Rx extends qe{static get type(){return"UniformGroupNode"}constructor(e,t=!1,n=1){super("string"),this.name=e,this.shared=t,this.order=n,this.isUniformGroup=!0}serialize(e){super.serialize(e),e.name=this.name,e.version=this.version,e.shared=this.shared}deserialize(e){super.deserialize(e),this.name=e.name,this.version=e.version,this.shared=e.shared}}const Cx=i=>new Rx(i),yp=(i,e=0)=>new Rx(i,!0,e),VN=yp("frame"),wt=yp("render"),Px=Cx("object");class ac extends mp{static get type(){return"UniformNode"}constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.name="",this.groupNode=Px}label(e){return this.name=e,this}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){const n=this.getSelf();return e=e.bind(n),super.onUpdate(s=>{const r=e(s,n);r!==void 0&&(this.value=r)},t)}generate(e,t){const n=this.getNodeType(e),s=this.getUniformHash(e);let r=e.getNodeFromHash(s);r===void 0&&(e.setHashNode(this,s),r=this);const o=r.getInputType(e),a=e.getUniformFromNode(r,o,e.shaderStage,this.name||e.context.label),c=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}}const pt=(i,e)=>{const t=_x(e||i),n=i&&i.isNode===!0?i.node&&i.node.value||i.value:i;return ee(new ac(n,t))};class bt extends qe{static get type(){return"PropertyNode"}constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const Lx=(i,e)=>ee(new bt(i,e)),qa=(i,e)=>ee(new bt(i,e,!0)),bi=_e(bt,"vec4","DiffuseColor"),_f=_e(bt,"vec3","EmissiveColor"),Dx=_e(bt,"float","Roughness"),zN=_e(bt,"float","Metalness"),BN=_e(bt,"float","Clearcoat"),kN=_e(bt,"float","ClearcoatRoughness"),HN=_e(bt,"vec3","Sheen"),GN=_e(bt,"float","SheenRoughness"),Ix=_e(bt,"float","Iridescence"),WN=_e(bt,"float","IridescenceIOR"),XN=_e(bt,"float","IridescenceThickness"),xf=_e(bt,"float","AlphaT"),Ux=_e(bt,"float","Anisotropy"),Ml=_e(bt,"vec3","AnisotropyT"),zo=_e(bt,"vec3","AnisotropyB"),$N=_e(bt,"color","SpecularColor"),qN=_e(bt,"float","SpecularF90"),YN=_e(bt,"float","Shininess"),Ya=_e(bt,"vec4","Output"),jN=_e(bt,"float","dashSize"),ZN=_e(bt,"float","gapSize"),KN=_e(bt,"float","pointWidth"),JN=_e(bt,"float","IOR"),QN=_e(bt,"float","Transmission"),eR=_e(bt,"float","Thickness"),tR=_e(bt,"float","AttenuationDistance"),nR=_e(bt,"color","AttenuationColor"),iR=_e(bt,"float","Dispersion");class sR extends cn{static get type(){return"AssignNode"}constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return ra.join("").slice(0,n)!==t.components}return!1}generate(e,t){const{targetNode:n,sourceNode:s}=this,r=this.needsSplitAssign(e),o=n.getNodeType(e),a=n.context({assign:!0}).build(e),c=s.build(e,o),l=s.getNodeType(e),u=e.getDataFromNode(this);let h;if(u.initialized===!0)t!=="void"&&(h=a);else if(r){const d=e.getVarFromNode(this,null,o),p=e.getPropertyName(d);e.addLineFlowCode(`${p} = ${c}`,this);const _=n.node.context({assign:!0}).build(e);for(let x=0;x<n.components.length;x++){const m=n.components[x];e.addLineFlowCode(`${_}.${m} = ${p}[ ${x} ]`,this)}t!=="void"&&(h=a)}else h=`${a} = ${c}`,(t==="void"||l==="void")&&(e.addLineFlowCode(h,this),t!=="void"&&(h=a));return u.initialized=!0,e.format(h,o,t)}}const Ox=K(sR);j("assign",Ox);class rR extends cn{static get type(){return"FunctionCallNode"}constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,s=n.getInputs(e),r=this.parameters,o=(c,l)=>{const u=l.type,h=u==="pointer";let d;return h?d="&"+c.build(e):d=c.build(e,u),d};if(Array.isArray(r))for(let c=0;c<r.length;c++)t.push(o(r[c],s[c]));else for(const c of s){const l=r[c.name];if(l!==void 0)t.push(o(l,c));else throw new Error(`FunctionCallNode: Input '${c.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const Fx=(i,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?zr(e):oc(e[0]),ee(new rR(ee(i),e)));j("call",Fx);class Ht extends cn{static get type(){return"OperatorNode"}constructor(e,t,n,...s){if(super(),s.length>0){let r=new Ht(e,t,n);for(let o=0;o<s.length-1;o++)r=new Ht(e,r,s[o]);t=r,n=s[s.length-1]}this.op=e,this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,s=this.aNode,r=this.bNode,o=s.getNodeType(e),a=typeof r<"u"?r.getNodeType(e):null;if(o==="void"||a==="void")return"void";if(n==="%")return o;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(o);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(o),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return o==="float"&&e.isMatrix(a)?a:e.isMatrix(o)&&e.isVector(a)?e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(o)?a:o}generate(e,t){const n=this.op,s=this.aNode,r=this.bNode,o=this.getNodeType(e,t);let a=null,c=null;o!=="void"?(a=s.getNodeType(e),c=typeof r<"u"?r.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?c=a:a!==c&&(a=c="float"):n===">>"||n==="<<"?(a=o,c=e.changeComponentType(c,"uint")):e.isMatrix(a)&&e.isVector(c)?c=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(c)?a=e.getVectorFromMatrix(c):a=c=o):a=c=o;const l=s.build(e,a),u=typeof r<"u"?r.build(e,c):null,h=e.getTypeLength(t),d=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&h>1?e.useComparisonMethod?e.format(`${e.getMethod("lessThan",t)}( ${l}, ${u} )`,o,t):e.format(`( ${l} < ${u} )`,o,t):n==="<="&&h>1?e.useComparisonMethod?e.format(`${e.getMethod("lessThanEqual",t)}( ${l}, ${u} )`,o,t):e.format(`( ${l} <= ${u} )`,o,t):n===">"&&h>1?e.useComparisonMethod?e.format(`${e.getMethod("greaterThan",t)}( ${l}, ${u} )`,o,t):e.format(`( ${l} > ${u} )`,o,t):n===">="&&h>1?e.useComparisonMethod?e.format(`${e.getMethod("greaterThanEqual",t)}( ${l}, ${u} )`,o,t):e.format(`( ${l} >= ${u} )`,o,t):n==="!"||n==="~"?e.format(`(${n}${l})`,a,t):d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`( ${l} ${n} ${u} )`,o,t);if(a!=="void")return d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`${l} ${n} ${u}`,o,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const nn=K(Ht,"+"),xt=K(Ht,"-"),it=K(Ht,"*"),Ls=K(Ht,"/"),Sp=K(Ht,"%"),Vx=K(Ht,"=="),zx=K(Ht,"!="),Bx=K(Ht,"<"),Mp=K(Ht,">"),kx=K(Ht,"<="),Hx=K(Ht,">="),Gx=K(Ht,"&&"),Wx=K(Ht,"||"),Xx=K(Ht,"!"),$x=K(Ht,"^^"),qx=K(Ht,"&"),Yx=K(Ht,"~"),jx=K(Ht,"|"),Zx=K(Ht,"^"),Kx=K(Ht,"<<"),Jx=K(Ht,">>");j("add",nn);j("sub",xt);j("mul",it);j("div",Ls);j("modInt",Sp);j("equal",Vx);j("notEqual",zx);j("lessThan",Bx);j("greaterThan",Mp);j("lessThanEqual",kx);j("greaterThanEqual",Hx);j("and",Gx);j("or",Wx);j("not",Xx);j("xor",$x);j("bitAnd",qx);j("bitNot",Yx);j("bitOr",jx);j("bitXor",Zx);j("shiftLeft",Kx);j("shiftRight",Jx);const Qx=(...i)=>(console.warn("TSL.OperatorNode: .remainder() has been renamed to .modInt()."),Sp(...i));j("remainder",Qx);class F extends cn{static get type(){return"MathNode"}constructor(e,t,n=null,s=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=s}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,s=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),o=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(s)?0:e.getTypeLength(s);return r>o&&r>a?t:o>a?n:a>r?s:t}getNodeType(e){const t=this.method;return t===F.LENGTH||t===F.DISTANCE||t===F.DOT?"float":t===F.CROSS?"vec3":t===F.ALL?"bool":t===F.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===F.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){let n=this.method;const s=this.getNodeType(e),r=this.getInputType(e),o=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.coordinateSystem;if(n===F.TRANSFORM_DIRECTION){let u=o,h=a;e.isMatrix(u.getNodeType(e))?h=et(B(h),0):u=et(B(u),0);const d=it(u,h).xyz;return Jr(d).build(e,t)}else{if(n===F.NEGATE)return e.format("( - "+o.build(e,r)+" )",s,t);if(n===F.ONE_MINUS)return xt(1,o).build(e,t);if(n===F.RECIPROCAL)return Ls(1,o).build(e,t);if(n===F.DIFFERENCE)return Ft(xt(o,a)).build(e,t);{const u=[];return n===F.CROSS||n===F.MOD?u.push(o.build(e,s),a.build(e,s)):l===ai&&n===F.STEP?u.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":r),a.build(e,r)):l===ai&&(n===F.MIN||n===F.MAX)||n===F.MOD?u.push(o.build(e,r),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":r)):n===F.REFRACT?u.push(o.build(e,r),a.build(e,r),c.build(e,"float")):n===F.MIX?u.push(o.build(e,r),a.build(e,r),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":r)):(l===Rs&&n===F.ATAN&&a!==null&&(n="atan2"),u.push(o.build(e,r)),a!==null&&u.push(a.build(e,r)),c!==null&&u.push(c.build(e,r))),e.format(`${e.getMethod(n,s)}( ${u.join(", ")} )`,s,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}F.ALL="all";F.ANY="any";F.RADIANS="radians";F.DEGREES="degrees";F.EXP="exp";F.EXP2="exp2";F.LOG="log";F.LOG2="log2";F.SQRT="sqrt";F.INVERSE_SQRT="inversesqrt";F.FLOOR="floor";F.CEIL="ceil";F.NORMALIZE="normalize";F.FRACT="fract";F.SIN="sin";F.COS="cos";F.TAN="tan";F.ASIN="asin";F.ACOS="acos";F.ATAN="atan";F.ABS="abs";F.SIGN="sign";F.LENGTH="length";F.NEGATE="negate";F.ONE_MINUS="oneMinus";F.DFDX="dFdx";F.DFDY="dFdy";F.ROUND="round";F.RECIPROCAL="reciprocal";F.TRUNC="trunc";F.FWIDTH="fwidth";F.TRANSPOSE="transpose";F.BITCAST="bitcast";F.EQUALS="equals";F.MIN="min";F.MAX="max";F.MOD="mod";F.STEP="step";F.REFLECT="reflect";F.DISTANCE="distance";F.DIFFERENCE="difference";F.DOT="dot";F.CROSS="cross";F.POW="pow";F.TRANSFORM_DIRECTION="transformDirection";F.MIX="mix";F.CLAMP="clamp";F.REFRACT="refract";F.SMOOTHSTEP="smoothstep";F.FACEFORWARD="faceforward";const e0=P(1e-6),oR=P(1e6),Ql=P(Math.PI),aR=P(Math.PI*2),Tp=K(F,F.ALL),t0=K(F,F.ANY),n0=K(F,F.RADIANS),i0=K(F,F.DEGREES),s0=K(F,F.EXP),Qo=K(F,F.EXP2),wp=K(F,F.LOG),As=K(F,F.LOG2),ls=K(F,F.SQRT),Ep=K(F,F.INVERSE_SQRT),es=K(F,F.FLOOR),Au=K(F,F.CEIL),Jr=K(F,F.NORMALIZE),Vs=K(F,F.FRACT),si=K(F,F.SIN),vs=K(F,F.COS),r0=K(F,F.TAN),o0=K(F,F.ASIN),a0=K(F,F.ACOS),bp=K(F,F.ATAN),Ft=K(F,F.ABS),Ap=K(F,F.SIGN),eu=K(F,F.LENGTH),c0=K(F,F.NEGATE),l0=K(F,F.ONE_MINUS),Np=K(F,F.DFDX),Rp=K(F,F.DFDY),u0=K(F,F.ROUND),h0=K(F,F.RECIPROCAL),Cp=K(F,F.TRUNC),d0=K(F,F.FWIDTH),f0=K(F,F.TRANSPOSE),cR=K(F,F.BITCAST),p0=K(F,F.EQUALS),li=K(F,F.MIN),yn=K(F,F.MAX),Pp=K(F,F.MOD),Nu=K(F,F.STEP),m0=K(F,F.REFLECT),g0=K(F,F.DISTANCE),_0=K(F,F.DIFFERENCE),ur=K(F,F.DOT),Ru=K(F,F.CROSS),Ii=K(F,F.POW),x0=K(F,F.POW,2),v0=K(F,F.POW,3),y0=K(F,F.POW,4),S0=K(F,F.TRANSFORM_DIRECTION),M0=i=>it(Ap(i),Ii(Ft(i),1/3)),T0=i=>ur(i,i),en=K(F,F.MIX),Ds=(i,e=0,t=1)=>ee(new F(F.CLAMP,ee(i),ee(e),ee(t))),w0=i=>Ds(i),E0=K(F,F.REFRACT),ea=K(F,F.SMOOTHSTEP),Lp=K(F,F.FACEFORWARD),b0=k(([i])=>{const n=43758.5453,s=ur(i.xy,fe(12.9898,78.233)),r=Pp(s,Ql);return Vs(si(r).mul(n))}),A0=(i,e,t)=>en(e,t,i),N0=(i,e,t)=>ea(e,t,i),R0=(i,e)=>(console.warn('THREE.TSL: "atan2" is overloaded. Use "atan" instead.'),bp(i,e)),lR=Lp,uR=Ep;j("all",Tp);j("any",t0);j("equals",p0);j("radians",n0);j("degrees",i0);j("exp",s0);j("exp2",Qo);j("log",wp);j("log2",As);j("sqrt",ls);j("inverseSqrt",Ep);j("floor",es);j("ceil",Au);j("normalize",Jr);j("fract",Vs);j("sin",si);j("cos",vs);j("tan",r0);j("asin",o0);j("acos",a0);j("atan",bp);j("abs",Ft);j("sign",Ap);j("length",eu);j("lengthSq",T0);j("negate",c0);j("oneMinus",l0);j("dFdx",Np);j("dFdy",Rp);j("round",u0);j("reciprocal",h0);j("trunc",Cp);j("fwidth",d0);j("atan2",R0);j("min",li);j("max",yn);j("mod",Pp);j("step",Nu);j("reflect",m0);j("distance",g0);j("dot",ur);j("cross",Ru);j("pow",Ii);j("pow2",x0);j("pow3",v0);j("pow4",y0);j("transformDirection",S0);j("mix",A0);j("clamp",Ds);j("refract",E0);j("smoothstep",N0);j("faceForward",Lp);j("difference",_0);j("saturate",w0);j("cbrt",M0);j("transpose",f0);j("rand",b0);class hR extends qe{static get type(){return"ConditionalNode"}constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const{ifNode:t,elseNode:n}=e.getNodeProperties(this);if(t===void 0)return this.setup(e),this.getNodeType(e);const s=t.getNodeType(e);if(n!==null){const r=n.getNodeType(e);if(e.getTypeLength(r)>e.getTypeLength(s))return r}return s}setup(e){const t=this.condNode.cache(),n=this.ifNode.cache(),s=this.elseNode?this.elseNode.cache():null,r=e.context.nodeBlock;e.getDataFromNode(n).parentNodeBlock=r,s!==null&&(e.getDataFromNode(s).parentNodeBlock=r);const o=e.getNodeProperties(this);o.condNode=t,o.ifNode=n.context({nodeBlock:n}),o.elseNode=s?s.context({nodeBlock:s}):null}generate(e,t){const n=this.getNodeType(e),s=e.getDataFromNode(this);if(s.nodeProperty!==void 0)return s.nodeProperty;const{condNode:r,ifNode:o,elseNode:a}=e.getNodeProperties(this),c=t!=="void",l=c?Lx(n).build(e):"";s.nodeProperty=l;const u=r.build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let h=o.build(e,n);if(h&&(c?h=l+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+"}"),a!==null){e.addFlowCode(` else {

`).addFlowTab();let d=a.build(e,n);d&&(c?d=l+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(l,n,t)}}const Xn=K(hR);j("select",Xn);const C0=(...i)=>(console.warn("TSL.ConditionalNode: cond() has been renamed to select()."),Xn(...i));j("cond",C0);class P0 extends qe{static get type(){return"ContextNode"}constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.value=t}getScope(){return this.node.getScope()}getNodeType(e){return this.node.getNodeType(e)}analyze(e){this.node.build(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.value});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.value});const s=this.node.build(e,t);return e.setContext(n),s}}const Dp=K(P0),L0=(i,e)=>Dp(i,{label:e});j("context",Dp);j("label",L0);class dR extends qe{static get type(){return"VarNode"}constructor(e,t=null){super(),this.node=e,this.name=t,this.global=!0,this.isVarNode=!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,s=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),r=e.getPropertyName(s),o=t.build(e,s.type);return e.addLineFlowCode(`${r} = ${o}`,this),r}}const D0=K(dR);j("toVar",(...i)=>D0(...i).append());const I0=i=>(console.warn('TSL: "temp" is deprecated. Use ".toVar()" instead.'),D0(i));j("temp",I0);class fR extends qe{static get type(){return"VaryingNode"}constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}setupVarying(e){const t=e.getNodeProperties(this);let n=t.varying;if(n===void 0){const s=this.name,r=this.getNodeType(e);t.varying=n=e.getVaryingFromNode(this,s,r),t.node=this.node}return n.needsInterpolation||(n.needsInterpolation=e.shaderStage==="fragment"),n}setup(e){this.setupVarying(e)}analyze(e){return this.setupVarying(e),this.node.analyze(e)}generate(e){const t=e.getNodeProperties(this),n=this.setupVarying(e),s=e.shaderStage==="fragment"&&t.reassignPosition===!0&&e.context.needsPositionReassign;if(t.propertyName===void 0||s){const r=this.getNodeType(e),o=e.getPropertyName(n,ff.VERTEX);e.flowNodeFromShaderStage(ff.VERTEX,this.node,r,o),t.propertyName=o,s?t.reassignPosition=!1:t.reassignPosition===void 0&&e.context.isPositionNodeInput&&(t.reassignPosition=!0)}return e.getPropertyName(n)}}const ui=K(fR),U0=i=>ui(i);j("varying",ui);j("vertexStage",U0);const O0=k(([i])=>{const e=i.mul(.9478672986).add(.0521327014).pow(2.4),t=i.mul(.0773993808),n=i.lessThanEqual(.04045);return en(e,t,n)}).setLayout({name:"sRGBTransferEOTF",type:"vec3",inputs:[{name:"color",type:"vec3"}]}),F0=k(([i])=>{const e=i.pow(.41666).mul(1.055).sub(.055),t=i.mul(12.92),n=i.lessThanEqual(.0031308);return en(e,t,n)}).setLayout({name:"sRGBTransferOETF",type:"vec3",inputs:[{name:"color",type:"vec3"}]}),cc="WorkingColorSpace",Ip="OutputColorSpace";class lc extends cn{static get type(){return"ColorSpaceNode"}constructor(e,t,n){super("vec4"),this.colorNode=e,this.source=t,this.target=n}resolveColorSpace(e,t){return t===cc?lt.workingColorSpace:t===Ip?e.context.outputColorSpace||e.renderer.outputColorSpace:t}setup(e){const{colorNode:t}=this,n=this.resolveColorSpace(e,this.source),s=this.resolveColorSpace(e,this.target);let r=t;return lt.enabled===!1||n===s||!n||!s||(lt.getTransfer(n)===Ct&&(r=et(O0(r.rgb),r.a)),lt.getPrimaries(n)!==lt.getPrimaries(s)&&(r=et(vi(lt._getMatrix(new at,n,s)).mul(r.rgb),r.a)),lt.getTransfer(s)===Ct&&(r=et(F0(r.rgb),r.a))),r}}const V0=i=>ee(new lc(ee(i),cc,Ip)),z0=i=>ee(new lc(ee(i),Ip,cc)),B0=(i,e)=>ee(new lc(ee(i),cc,e)),Up=(i,e)=>ee(new lc(ee(i),e,cc)),pR=(i,e,t)=>ee(new lc(ee(i),e,t));j("toOutputColorSpace",V0);j("toWorkingColorSpace",z0);j("workingToColorSpace",B0);j("colorSpaceToWorking",Up);let mR=class extends Kr{static get type(){return"ReferenceElementNode"}constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}};class gR extends qe{static get type(){return"ReferenceBaseNode"}constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=n,this.node=null,this.group=null,this.updateType=Et.OBJECT}setGroup(e){return this.group=e,this}element(e){return ee(new mR(this,ee(e)))}setNodeType(e){const t=pt(null,e).getSelf();this.group!==null&&t.setGroup(this.group),this.node=t}getNodeType(e){return this.node===null&&(this.updateReference(e),this.updateValue()),this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}class _R extends gR{static get type(){return"RendererReferenceNode"}constructor(e,t,n=null){super(e,t,n),this.renderer=n,this.setGroup(wt)}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}}const k0=(i,e,t=null)=>ee(new _R(i,e,t));class xR extends cn{static get type(){return"ToneMappingNode"}constructor(e,t=G0,n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}customCacheKey(){return sx(this.toneMapping)}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===Ui)return t;let s=null;const r=e.renderer.library.getToneMappingFunction(n);return r!==null?s=et(r(t.rgb,this.exposureNode),t.a):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),s=t),s}}const H0=(i,e,t)=>ee(new xR(i,ee(e),ee(t))),G0=k0("toneMappingExposure","float");j("toneMapping",(i,e,t)=>H0(e,t,i));class vR extends mp{static get type(){return"BufferAttributeNode"}constructor(e,t=null,n=0,s=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=s,this.usage=jl,this.instanced=!1,this.attribute=null,this.global=!0,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getHash(e){if(this.bufferStride===0&&this.bufferOffset===0){let t=e.globalCache.getData(this.value);return t===void 0&&(t={node:this},e.globalCache.setData(this.value,t)),t.node.uuid}return this.uuid}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,s=e.getTypeLength(t),r=this.bufferStride||s,o=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new k_(n,r),c=new Ts(a,s,o);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),s=e.getPropertyName(n);let r=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=s,r=s):r=ui(this).build(e,t),r}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this.attribute&&this.attribute.isBufferAttribute===!0&&(this.attribute.usage=e),this}setInstanced(e){return this.instanced=e,this}}const uc=(i,e=null,t=0,n=0)=>ee(new vR(i,e,t,n)),W0=(i,e=null,t=0,n=0)=>uc(i,e,t,n).setUsage(wa),tu=(i,e=null,t=0,n=0)=>uc(i,e,t,n).setInstanced(!0),vf=(i,e=null,t=0,n=0)=>W0(i,e,t,n).setInstanced(!0);j("toAttribute",i=>uc(i.value));class yR extends qe{static get type(){return"ComputeNode"}constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.name="",this.updateBeforeType=Et.OBJECT,this.onInitFunction=null,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}label(e){return this.name=e,this}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let s=1;s<t.length;s++)n*=t[s];this.dispatchCount=Math.ceil(e/n)}onInit(e){return this.onInitFunction=e,this}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n,this)}}}const X0=(i,e,t)=>ee(new yR(ee(i),e,t));j("compute",X0);class SR extends qe{static get type(){return"CacheNode"}constructor(e,t=!0){super(),this.node=e,this.parent=t,this.isCacheNode=!0}getNodeType(e){const t=e.getCache(),n=e.getCacheFromNode(this,this.parent);e.setCache(n);const s=this.node.getNodeType(e);return e.setCache(t),s}build(e,...t){const n=e.getCache(),s=e.getCacheFromNode(this,this.parent);e.setCache(s);const r=this.node.build(e,...t);return e.setCache(n),r}}const $0=(i,e)=>ee(new SR(ee(i),e));j("cache",$0);class MR extends qe{static get type(){return"BypassNode"}constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t,this),this.outputNode.build(e)}}const q0=K(MR);j("bypass",q0);class Y0 extends qe{static get type(){return"RemapNode"}constructor(e,t,n,s=P(0),r=P(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=s,this.outHighNode=r,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:s,outHighNode:r,doClamp:o}=this;let a=e.sub(t).div(n.sub(t));return o===!0&&(a=a.clamp()),a.mul(r.sub(s)).add(s)}}const j0=K(Y0,null,null,{doClamp:!1}),Z0=K(Y0);j("remap",j0);j("remapClamp",Z0);class TR extends qe{static get type(){return"ExpressionNode"}constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),s=this.snippet;if(n==="void")e.addLineFlowCode(s,this);else return e.format(`( ${s} )`,n,t)}}const cr=K(TR),K0=i=>(i?Xn(i,cr("discard")):cr("discard")).append(),wR=()=>cr("return").append();j("discard",K0);class ER extends cn{static get type(){return"RenderOutputNode"}constructor(e,t,n){super("vec4"),this.colorNode=e,this.toneMapping=t,this.outputColorSpace=n,this.isRenderOutputNode=!0}setup({context:e}){let t=this.colorNode||e.color;const n=(this.toneMapping!==null?this.toneMapping:e.toneMapping)||Ui,s=(this.outputColorSpace!==null?this.outputColorSpace:e.outputColorSpace)||Yi;return n!==Ui&&(t=t.toneMapping(n)),s!==Yi&&s!==lt.workingColorSpace&&(t=t.workingToColorSpace(s)),t}}const J0=(i,e=null,t=null)=>ee(new ER(ee(i),e,t));j("renderOutput",J0);function bR(i){console.warn("THREE.TSLBase: AddNodeElement has been removed in favor of tree-shaking. Trying add",i)}class Q0 extends qe{static get type(){return"AttributeNode"}constructor(e,t=null){super(t),this.global=!0,this._attributeName=e}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=this.nodeType;if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const s=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(s)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const r=e.geometry.getAttribute(t),o=e.getTypeFromAttribute(r),a=e.getAttribute(t,o);return e.shaderStage==="vertex"?e.format(a.name,o,n):ui(this).build(e,n)}else return console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`),e.generateConst(n)}serialize(e){super.serialize(e),e.global=this.global,e._attributeName=this._attributeName}deserialize(e){super.deserialize(e),this.global=e.global,this._attributeName=e._attributeName}}const Is=(i,e)=>ee(new Q0(i,e)),Wt=(i=0)=>Is("uv"+(i>0?i:""),"vec2");class AR extends qe{static get type(){return"TextureSizeNode"}constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),s=this.levelNode===null?"0":this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${s} )`,this.getNodeType(e),t)}}const nr=K(AR);class NR extends ac{static get type(){return"MaxMipLevelNode"}constructor(e){super(0),this._textureNode=e,this.updateType=Et.FRAME}get textureNode(){return this._textureNode}get texture(){return this._textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:s,height:r}=n;this.value=Math.log2(Math.max(s,r))}}}const ev=K(NR);class Us extends ac{static get type(){return"TextureNode"}constructor(e,t=null,n=null,s=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.biasNode=s,this.compareNode=null,this.depthNode=null,this.gradNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=Et.NONE,this.referenceNode=null,this._value=e,this._matrixUniform=null,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":this.value.type===or?"uvec4":this.value.type===vu?"ivec4":"vec4"}getInputType(){return"texture"}getDefaultUV(){return Wt(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){return this._matrixUniform===null&&(this._matrixUniform=pt(this.value.matrix)),this._matrixUniform.mul(B(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?Et.RENDER:Et.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.image instanceof ImageBitmap&&n.flipY===!0||n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(this.sampler?t=t.flipY():t=t.setY(L(nr(this,this.levelNode).y).sub(t.y).sub(1))),t}setup(e){const t=e.getNodeProperties(this);t.referenceNode=this.referenceNode;const n=this.value;if(!n||n.isTexture!==!0)throw new Error("THREE.TSL: `texture( value )` function expects a valid instance of THREE.Texture().");let s=this.uvNode;(s===null||e.context.forceUVContext===!0)&&e.context.getUV&&(s=e.context.getUV(this)),s||(s=this.getDefaultUV()),this.updateMatrix===!0&&(s=this.getTransformedUV(s)),s=this.setupUV(e,s);let r=this.levelNode;r===null&&e.context.getTextureLevel&&(r=e.context.getTextureLevel(this)),t.uvNode=s,t.levelNode=r,t.biasNode=this.biasNode,t.compareNode=this.compareNode,t.gradNode=this.gradNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,s,r,o,a,c){const l=this.value;let u;return s?u=e.generateTextureLevel(l,t,n,s,o):r?u=e.generateTextureBias(l,t,n,r,o):c?u=e.generateTextureGrad(l,t,n,c,o):a?u=e.generateTextureCompare(l,t,n,a,o):this.sampler===!1?u=e.generateTextureLoad(l,t,n,o):u=e.generateTexture(l,t,n,o),u}generate(e,t){const n=this.value,s=e.getNodeProperties(this),r=super.generate(e,"property");if(t==="sampler")return r+"_sampler";if(e.isReference(t))return r;{const o=e.getDataFromNode(this);let a=o.propertyName;if(a===void 0){const{uvNode:u,levelNode:h,biasNode:d,compareNode:p,depthNode:_,gradNode:x}=s,m=this.generateUV(e,u),f=h?h.build(e,"float"):null,w=d?d.build(e,"float"):null,y=_?_.build(e,"int"):null,v=p?p.build(e,"float"):null,D=x?[x[0].build(e,"vec2"),x[1].build(e,"vec2")]:null,C=e.getVarFromNode(this);a=e.getPropertyName(C);const N=this.generateSnippet(e,r,m,f,w,y,v,D);e.addLineFlowCode(`${a} = ${N}`,this),o.snippet=N,o.propertyName=a}let c=a;const l=this.getNodeType(e);return e.needsToWorkingColorSpace(n)&&(c=Up(cr(c,l),n.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){return console.warn("THREE.TextureNode: .uv() has been renamed. Use .sample() instead."),this.sample(e)}sample(e){const t=this.clone();return t.uvNode=ee(e),t.referenceNode=this.getSelf(),ee(t)}blur(e){const t=this.clone();return t.biasNode=ee(e).mul(ev(t)),t.referenceNode=this.getSelf(),ee(t)}level(e){const t=this.clone();return t.levelNode=ee(e),t.referenceNode=this.getSelf(),ee(t)}size(e){return nr(this,e)}bias(e){const t=this.clone();return t.biasNode=ee(e),t.referenceNode=this.getSelf(),ee(t)}compare(e){const t=this.clone();return t.compareNode=ee(e),t.referenceNode=this.getSelf(),ee(t)}grad(e,t){const n=this.clone();return n.gradNode=[ee(e),ee(t)],n.referenceNode=this.getSelf(),ee(n)}depth(e){const t=this.clone();return t.depthNode=ee(e),t.referenceNode=this.getSelf(),ee(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid,e.sampler=this.sampler,e.updateMatrix=this.updateMatrix,e.updateType=this.updateType}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value],this.sampler=e.sampler,this.updateMatrix=e.updateMatrix,this.updateType=e.updateType}update(){const e=this.value,t=this._matrixUniform;t!==null&&(t.value=e.matrix),e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode,this.biasNode);return e.sampler=this.sampler,e}}const kn=K(Us),jt=(...i)=>kn(...i).setSampler(!1),RR=i=>(i.isNode===!0?i:kn(i)).convert("sampler"),Zs=pt("float").label("cameraNear").setGroup(wt).onRenderUpdate(({camera:i})=>i.near),Ks=pt("float").label("cameraFar").setGroup(wt).onRenderUpdate(({camera:i})=>i.far),hc=pt("mat4").label("cameraProjectionMatrix").setGroup(wt).onRenderUpdate(({camera:i})=>i.projectionMatrix),CR=pt("mat4").label("cameraProjectionMatrixInverse").setGroup(wt).onRenderUpdate(({camera:i})=>i.projectionMatrixInverse),yi=pt("mat4").label("cameraViewMatrix").setGroup(wt).onRenderUpdate(({camera:i})=>i.matrixWorldInverse),PR=pt("mat4").label("cameraWorldMatrix").setGroup(wt).onRenderUpdate(({camera:i})=>i.matrixWorld),LR=pt("mat3").label("cameraNormalMatrix").setGroup(wt).onRenderUpdate(({camera:i})=>i.normalMatrix),DR=pt(new R).label("cameraPosition").setGroup(wt).onRenderUpdate(({camera:i},e)=>e.value.setFromMatrixPosition(i.matrixWorld));class Tt extends qe{static get type(){return"Object3DNode"}constructor(e,t=null){super(),this.scope=e,this.object3d=t,this.updateType=Et.OBJECT,this._uniformNode=new ac(null)}getNodeType(){const e=this.scope;if(e===Tt.WORLD_MATRIX)return"mat4";if(e===Tt.POSITION||e===Tt.VIEW_POSITION||e===Tt.DIRECTION||e===Tt.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,s=this.scope;if(s===Tt.WORLD_MATRIX)n.value=t.matrixWorld;else if(s===Tt.POSITION)n.value=n.value||new R,n.value.setFromMatrixPosition(t.matrixWorld);else if(s===Tt.SCALE)n.value=n.value||new R,n.value.setFromMatrixScale(t.matrixWorld);else if(s===Tt.DIRECTION)n.value=n.value||new R,t.getWorldDirection(n.value);else if(s===Tt.VIEW_POSITION){const r=e.camera;n.value=n.value||new R,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(e){const t=this.scope;return t===Tt.WORLD_MATRIX?this._uniformNode.nodeType="mat4":(t===Tt.POSITION||t===Tt.VIEW_POSITION||t===Tt.DIRECTION||t===Tt.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Tt.WORLD_MATRIX="worldMatrix";Tt.POSITION="position";Tt.SCALE="scale";Tt.VIEW_POSITION="viewPosition";Tt.DIRECTION="direction";const IR=K(Tt,Tt.DIRECTION),UR=K(Tt,Tt.WORLD_MATRIX),tv=K(Tt,Tt.POSITION),OR=K(Tt,Tt.SCALE),FR=K(Tt,Tt.VIEW_POSITION);class ss extends Tt{static get type(){return"ModelNode"}constructor(e){super(e)}update(e){this.object3d=e.object,super.update(e)}}const VR=_e(ss,ss.DIRECTION),ws=_e(ss,ss.WORLD_MATRIX),zR=_e(ss,ss.POSITION),BR=_e(ss,ss.SCALE),kR=_e(ss,ss.VIEW_POSITION),nv=pt(new at).onObjectUpdate(({object:i},e)=>e.value.getNormalMatrix(i.matrixWorld)),HR=pt(new Ne).onObjectUpdate(({object:i},e)=>e.value.copy(i.matrixWorld).invert()),dc=k(i=>i.renderer.nodes.modelViewMatrix||iv).once()().toVar("modelViewMatrix"),iv=yi.mul(ws),GR=k(i=>(i.context.isHighPrecisionModelViewMatrix=!0,pt("mat4").onObjectUpdate(({object:e,camera:t})=>e.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse,e.matrixWorld)))).once()().toVar("highpModelViewMatrix"),WR=k(i=>{const e=i.context.isHighPrecisionModelViewMatrix;return pt("mat3").onObjectUpdate(({object:t,camera:n})=>(e!==!0&&t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,t.matrixWorld),t.normalMatrix.getNormalMatrix(t.modelViewMatrix)))}).once()().toVar("highpModelNormalViewMatrix"),Op=Is("position","vec3"),Zt=Op.varying("positionLocal"),nu=Op.varying("positionPrevious"),kr=ws.mul(Zt).xyz.varying("v_positionWorld").context({needsPositionReassign:!0}),sv=Zt.transformDirection(ws).varying("v_positionWorldDirection").normalize().toVar("positionWorldDirection").context({needsPositionReassign:!0}),fn=k(i=>i.context.setupPositionView(),"vec3").once()().varying("v_positionView").context({needsPositionReassign:!0}),ri=fn.negate().varying("v_positionViewDirection").normalize().toVar("positionViewDirection");class XR extends qe{static get type(){return"FrontFacingNode"}constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){const{renderer:t,material:n}=e;return t.coordinateSystem===ai&&n.side===Kt?"false":e.getFrontFacing()}}const rv=_e(XR),fc=P(rv).mul(2).sub(1),Fp=Is("normal","vec3"),jn=k(i=>i.geometry.hasAttribute("normal")===!1?(console.warn('TSL.NormalNode: Vertex attribute "normal" not found on geometry.'),B(0,1,0)):Fp,"vec3").once()().toVar("normalLocal"),ov=fn.dFdx().cross(fn.dFdy()).normalize().toVar("normalFlat"),rs=k(i=>{let e;return i.material.flatShading===!0?e=ov:e=ui(Vp(jn),"v_normalView").normalize(),e},"vec3").once()().toVar("normalView"),av=ui(rs.transformDirection(yi),"v_normalWorld").normalize().toVar("normalWorld"),Os=k(i=>i.context.setupNormal(),"vec3").once()().mul(fc).toVar("transformedNormalView"),cv=Os.transformDirection(yi).toVar("transformedNormalWorld"),$R=k(i=>i.context.setupClearcoatNormal(),"vec3").once()().mul(fc).toVar("transformedClearcoatNormalView"),lv=k(([i,e=ws])=>{const t=vi(e),n=i.div(B(t[0].dot(t[0]),t[1].dot(t[1]),t[2].dot(t[2])));return t.mul(n).xyz}),Vp=k(([i],e)=>{const t=e.renderer.nodes.modelNormalViewMatrix;if(t!==null)return t.transformDirection(i);const n=nv.mul(i);return yi.transformDirection(n)}),uv=pt(0).onReference(({material:i})=>i).onRenderUpdate(({material:i})=>i.refractionRatio),hv=ri.negate().reflect(Os),dv=ri.negate().refract(Os,uv),fv=hv.transformDirection(yi).toVar("reflectVector"),pv=dv.transformDirection(yi).toVar("reflectVector");class qR extends Us{static get type(){return"CubeTextureNode"}constructor(e,t=null,n=null,s=null){super(e,t,n,s),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){const e=this.value;return e.mapping===Gr?fv:e.mapping===Wr?pv:(console.error('THREE.CubeTextureNode: Mapping "%s" not supported.',e.mapping),B(0,0,0))}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===Rs||!n.isRenderTargetTexture?B(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const mv=K(qR);class zp extends ac{static get type(){return"BufferNode"}constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getElementType(e){return this.getNodeType(e)}getInputType(){return"buffer"}}const pc=(i,e,t)=>ee(new zp(i,e,t));class YR extends Kr{static get type(){return"UniformArrayElementNode"}constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}generate(e){const t=super.generate(e),n=this.getNodeType(),s=this.node.getPaddedType();return e.format(t,s,n)}}class gv extends zp{static get type(){return"UniformArrayNode"}constructor(e,t=null){super(null),this.array=e,this.elementType=t===null?er(e[0]):t,this.paddedType=this.getPaddedType(),this.updateType=Et.RENDER,this.isArrayBufferNode=!0}getNodeType(){return this.paddedType}getElementType(){return this.elementType}getPaddedType(){const e=this.elementType;let t="vec4";return e==="mat2"?t="mat2":/mat/.test(e)===!0?t="mat4":e.charAt(0)==="i"?t="ivec4":e.charAt(0)==="u"&&(t="uvec4"),t}update(){const{array:e,value:t}=this,n=this.elementType;if(n==="float"||n==="int"||n==="uint")for(let s=0;s<e.length;s++){const r=s*4;t[r]=e[s]}else if(n==="color")for(let s=0;s<e.length;s++){const r=s*4,o=e[s];t[r]=o.r,t[r+1]=o.g,t[r+2]=o.b||0}else if(n==="mat2")for(let s=0;s<e.length;s++){const r=s*4,o=e[s];t[r]=o.elements[0],t[r+1]=o.elements[1],t[r+2]=o.elements[2],t[r+3]=o.elements[3]}else if(n==="mat3")for(let s=0;s<e.length;s++){const r=s*16,o=e[s];t[r]=o.elements[0],t[r+1]=o.elements[1],t[r+2]=o.elements[2],t[r+4]=o.elements[3],t[r+5]=o.elements[4],t[r+6]=o.elements[5],t[r+8]=o.elements[6],t[r+9]=o.elements[7],t[r+10]=o.elements[8],t[r+15]=1}else if(n==="mat4")for(let s=0;s<e.length;s++){const r=s*16,o=e[s];for(let a=0;a<o.elements.length;a++)t[r+a]=o.elements[a]}else for(let s=0;s<e.length;s++){const r=s*4,o=e[s];t[r]=o.x,t[r+1]=o.y,t[r+2]=o.z||0,t[r+3]=o.w||0}}setup(e){const t=this.array.length,n=this.elementType;let s=Float32Array;const r=this.paddedType,o=e.getTypeLength(r);return n.charAt(0)==="i"&&(s=Int32Array),n.charAt(0)==="u"&&(s=Uint32Array),this.value=new s(t*o),this.bufferCount=t,this.bufferType=r,super.setup(e)}element(e){return ee(new YR(this,ee(e)))}}const Ur=(i,e)=>ee(new gv(i,e)),jR=(i,e)=>(console.warn("TSL.UniformArrayNode: uniforms() has been renamed to uniformArray()."),ee(new gv(i,e)));class ZR extends Kr{static get type(){return"ReferenceElementNode"}constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}}class Cu extends qe{static get type(){return"ReferenceNode"}constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=n,this.node=null,this.group=null,this.name=null,this.updateType=Et.OBJECT}element(e){return ee(new ZR(this,ee(e)))}setGroup(e){return this.group=e,this}label(e){return this.name=e,this}setNodeType(e){let t=null;this.count!==null?t=pc(null,e,this.count):Array.isArray(this.getValueFromReference())?t=Ur(null,e):e==="texture"?t=kn(null):e==="cubeTexture"?t=mv(null):t=pt(null,e),this.group!==null&&t.setGroup(this.group),this.name!==null&&t.label(this.name),this.node=t.getSelf()}getNodeType(e){return this.node===null&&(this.updateReference(e),this.updateValue()),this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const Qt=(i,e,t)=>ee(new Cu(i,e,t)),yf=(i,e,t,n)=>ee(new Cu(i,e,n,t));class KR extends Cu{static get type(){return"MaterialReferenceNode"}constructor(e,t,n=null){super(e,t,n),this.material=n,this.isMaterialReferenceNode=!0}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const Or=(i,e,t=null)=>ee(new KR(i,e,t)),Pu=k(i=>(i.geometry.hasAttribute("tangent")===!1&&i.geometry.computeTangents(),Is("tangent","vec4")))(),mc=Pu.xyz.toVar("tangentLocal"),gc=dc.mul(et(mc,0)).xyz.varying("v_tangentView").normalize().toVar("tangentView"),_v=gc.transformDirection(yi).varying("v_tangentWorld").normalize().toVar("tangentWorld"),Bp=gc.toVar("transformedTangentView"),JR=Bp.transformDirection(yi).normalize().toVar("transformedTangentWorld"),_c=i=>i.mul(Pu.w).xyz,QR=ui(_c(Fp.cross(Pu)),"v_bitangentGeometry").normalize().toVar("bitangentGeometry"),eC=ui(_c(jn.cross(mc)),"v_bitangentLocal").normalize().toVar("bitangentLocal"),xv=ui(_c(rs.cross(gc)),"v_bitangentView").normalize().toVar("bitangentView"),tC=ui(_c(av.cross(_v)),"v_bitangentWorld").normalize().toVar("bitangentWorld"),vv=_c(Os.cross(Bp)).normalize().toVar("transformedBitangentView"),nC=vv.transformDirection(yi).normalize().toVar("transformedBitangentWorld"),kp=vi(gc,xv,rs),yv=ri.mul(kp),iC=(i,e)=>i.sub(yv.mul(e)),sC=(()=>{let i=zo.cross(ri);return i=i.cross(zo).normalize(),i=en(i,Os,Ux.mul(Dx.oneMinus()).oneMinus().pow2().pow2()).normalize(),i})(),rC=k(i=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:s}=i,r=e.dFdx(),o=e.dFdy(),a=s.dFdx(),c=s.dFdy(),l=t,u=o.cross(l),h=l.cross(r),d=u.mul(a.x).add(h.mul(c.x)),p=u.mul(a.y).add(h.mul(c.y)),_=d.dot(d).max(p.dot(p)),x=fc.mul(_.inverseSqrt());return nn(d.mul(n.x,x),p.mul(n.y,x),l.mul(n.z)).normalize()});class oC extends cn{static get type(){return"NormalMapNode"}constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=ql}setup(e){const{normalMapType:t,scaleNode:n}=this;let s=this.node.mul(2).sub(1);n!==null&&(s=B(s.xy.mul(n),s.z));let r=null;return t===N_?r=Vp(s):t===ql&&(e.hasGeometryAttribute("tangent")===!0?r=kp.mul(s).normalize():r=rC({eye_pos:fn,surf_norm:rs,mapN:s,uv:Wt()})),r}}const Sf=K(oC),aC=k(({textureNode:i,bumpScale:e})=>{const t=s=>i.cache().context({getUV:r=>s(r.uvNode||Wt()),forceUVContext:!0}),n=P(t(s=>s));return fe(P(t(s=>s.add(s.dFdx()))).sub(n),P(t(s=>s.add(s.dFdy()))).sub(n)).mul(e)}),cC=k(i=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=i,s=e.dFdx().normalize(),r=e.dFdy().normalize(),o=t,a=r.cross(o),c=o.cross(s),l=s.dot(a).mul(fc),u=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()});class lC extends cn{static get type(){return"BumpMapNode"}constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=aC({textureNode:this.textureNode,bumpScale:e});return cC({surf_pos:fn,surf_norm:rs,dHdxy:t})}}const Sv=K(lC),Og=new Map;class q extends qe{static get type(){return"MaterialNode"}constructor(e){super(),this.scope=e}getCache(e,t){let n=Og.get(e);return n===void 0&&(n=Or(e,t),Og.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let s=null;if(n===q.COLOR){const r=t.color!==void 0?this.getColor(n):B();t.map&&t.map.isTexture===!0?s=r.mul(this.getTexture("map")):s=r}else if(n===q.OPACITY){const r=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?s=r.mul(this.getTexture("alpha")):s=r}else if(n===q.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?s=this.getTexture("specular").r:s=P(1);else if(n===q.SPECULAR_INTENSITY){const r=this.getFloat(n);t.specularIntensityMap&&t.specularIntensityMap.isTexture===!0?s=r.mul(this.getTexture(n).a):s=r}else if(n===q.SPECULAR_COLOR){const r=this.getColor(n);t.specularColorMap&&t.specularColorMap.isTexture===!0?s=r.mul(this.getTexture(n).rgb):s=r}else if(n===q.ROUGHNESS){const r=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).g):s=r}else if(n===q.METALNESS){const r=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?s=r.mul(this.getTexture(n).b):s=r}else if(n===q.EMISSIVE){const r=this.getFloat("emissiveIntensity"),o=this.getColor(n).mul(r);t.emissiveMap&&t.emissiveMap.isTexture===!0?s=o.mul(this.getTexture(n)):s=o}else if(n===q.NORMAL)t.normalMap?(s=Sf(this.getTexture("normal"),this.getCache("normalScale","vec2")),s.normalMapType=t.normalMapType):t.bumpMap?s=Sv(this.getTexture("bump").r,this.getFloat("bumpScale")):s=rs;else if(n===q.CLEARCOAT){const r=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===q.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===q.CLEARCOAT_NORMAL)t.clearcoatNormalMap?s=Sf(this.getTexture(n),this.getCache(n+"Scale","vec2")):s=rs;else if(n===q.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?s=r.mul(this.getTexture("sheenColor").rgb):s=r}else if(n===q.SHEEN_ROUGHNESS){const r=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).a):s=r,s=s.clamp(.07,1)}else if(n===q.ANISOTROPY)if(t.anisotropyMap&&t.anisotropyMap.isTexture===!0){const r=this.getTexture(n);s=bu(Ao.x,Ao.y,Ao.y.negate(),Ao.x).mul(r.rg.mul(2).sub(fe(1)).normalize().mul(r.b))}else s=Ao;else if(n===q.IRIDESCENCE_THICKNESS){const r=Qt("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const o=Qt("0","float",t.iridescenceThicknessRange);s=r.sub(o).mul(this.getTexture(n).g).add(o)}else s=r}else if(n===q.TRANSMISSION){const r=this.getFloat(n);t.transmissionMap?s=r.mul(this.getTexture(n).r):s=r}else if(n===q.THICKNESS){const r=this.getFloat(n);t.thicknessMap?s=r.mul(this.getTexture(n).g):s=r}else if(n===q.IOR)s=this.getFloat(n);else if(n===q.LIGHT_MAP)s=this.getTexture(n).rgb.mul(this.getFloat("lightMapIntensity"));else if(n===q.AO)s=this.getTexture(n).r.sub(1).mul(this.getFloat("aoMapIntensity")).add(1);else{const r=this.getNodeType(e);s=this.getCache(n,r)}return s}}q.ALPHA_TEST="alphaTest";q.COLOR="color";q.OPACITY="opacity";q.SHININESS="shininess";q.SPECULAR="specular";q.SPECULAR_STRENGTH="specularStrength";q.SPECULAR_INTENSITY="specularIntensity";q.SPECULAR_COLOR="specularColor";q.REFLECTIVITY="reflectivity";q.ROUGHNESS="roughness";q.METALNESS="metalness";q.NORMAL="normal";q.CLEARCOAT="clearcoat";q.CLEARCOAT_ROUGHNESS="clearcoatRoughness";q.CLEARCOAT_NORMAL="clearcoatNormal";q.EMISSIVE="emissive";q.ROTATION="rotation";q.SHEEN="sheen";q.SHEEN_ROUGHNESS="sheenRoughness";q.ANISOTROPY="anisotropy";q.IRIDESCENCE="iridescence";q.IRIDESCENCE_IOR="iridescenceIOR";q.IRIDESCENCE_THICKNESS="iridescenceThickness";q.IOR="ior";q.TRANSMISSION="transmission";q.THICKNESS="thickness";q.ATTENUATION_DISTANCE="attenuationDistance";q.ATTENUATION_COLOR="attenuationColor";q.LINE_SCALE="scale";q.LINE_DASH_SIZE="dashSize";q.LINE_GAP_SIZE="gapSize";q.LINE_WIDTH="linewidth";q.LINE_DASH_OFFSET="dashOffset";q.POINT_WIDTH="pointWidth";q.DISPERSION="dispersion";q.LIGHT_MAP="light";q.AO="ao";const Mv=_e(q,q.ALPHA_TEST),Tv=_e(q,q.COLOR),uC=_e(q,q.SHININESS),wv=_e(q,q.EMISSIVE),Ev=_e(q,q.OPACITY),hC=_e(q,q.SPECULAR),dC=_e(q,q.SPECULAR_INTENSITY),fC=_e(q,q.SPECULAR_COLOR),pC=_e(q,q.SPECULAR_STRENGTH),mC=_e(q,q.REFLECTIVITY),gC=_e(q,q.ROUGHNESS),_C=_e(q,q.METALNESS),bv=_e(q,q.NORMAL).context({getUV:null}),xC=_e(q,q.CLEARCOAT),vC=_e(q,q.CLEARCOAT_ROUGHNESS),yC=_e(q,q.CLEARCOAT_NORMAL).context({getUV:null}),SC=_e(q,q.ROTATION),MC=_e(q,q.SHEEN),TC=_e(q,q.SHEEN_ROUGHNESS),wC=_e(q,q.ANISOTROPY),EC=_e(q,q.IRIDESCENCE),bC=_e(q,q.IRIDESCENCE_IOR),AC=_e(q,q.IRIDESCENCE_THICKNESS),NC=_e(q,q.TRANSMISSION),RC=_e(q,q.THICKNESS),CC=_e(q,q.IOR),PC=_e(q,q.ATTENUATION_DISTANCE),LC=_e(q,q.ATTENUATION_COLOR),DC=_e(q,q.LINE_SCALE),IC=_e(q,q.LINE_DASH_SIZE),UC=_e(q,q.LINE_GAP_SIZE),OC=_e(q,q.LINE_WIDTH),FC=_e(q,q.LINE_DASH_OFFSET),VC=_e(q,q.POINT_WIDTH),zC=_e(q,q.DISPERSION),Av=_e(q,q.LIGHT_MAP),Nv=_e(q,q.AO),Ao=pt(new de).onReference(function(i){return i.material}).onRenderUpdate(function({material:i}){this.value.set(i.anisotropy*Math.cos(i.anisotropyRotation),i.anisotropy*Math.sin(i.anisotropyRotation))}),Rv=k(i=>i.context.setupModelViewProjection(),"vec4").once()().varying("v_modelViewProjection");class zt extends qe{static get type(){return"IndexNode"}constructor(e){super("uint"),this.scope=e,this.isIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let s;if(n===zt.VERTEX)s=e.getVertexIndex();else if(n===zt.INSTANCE)s=e.getInstanceIndex();else if(n===zt.DRAW)s=e.getDrawIndex();else if(n===zt.INVOCATION_LOCAL)s=e.getInvocationLocalIndex();else if(n===zt.INVOCATION_SUBGROUP)s=e.getInvocationSubgroupIndex();else if(n===zt.SUBGROUP)s=e.getSubgroupIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return e.shaderStage==="vertex"||e.shaderStage==="compute"?r=s:r=ui(this).build(e,t),r}}zt.VERTEX="vertex";zt.INSTANCE="instance";zt.SUBGROUP="subgroup";zt.INVOCATION_LOCAL="invocationLocal";zt.INVOCATION_SUBGROUP="invocationSubgroup";zt.DRAW="draw";const Cv=_e(zt,zt.VERTEX),xc=_e(zt,zt.INSTANCE),BC=_e(zt,zt.SUBGROUP),kC=_e(zt,zt.INVOCATION_SUBGROUP),HC=_e(zt,zt.INVOCATION_LOCAL),Pv=_e(zt,zt.DRAW);class Lv extends qe{static get type(){return"InstanceNode"}constructor(e,t,n){super("void"),this.count=e,this.instanceMatrix=t,this.instanceColor=n,this.instanceMatrixNode=null,this.instanceColorNode=null,this.updateType=Et.FRAME,this.buffer=null,this.bufferColor=null}setup(e){const{count:t,instanceMatrix:n,instanceColor:s}=this;let{instanceMatrixNode:r,instanceColorNode:o}=this;if(r===null){if(t<=1e3)r=pc(n.array,"mat4",Math.max(t,1)).element(xc);else{const c=new Kl(n.array,16,1);this.buffer=c;const l=n.usage===wa?vf:tu,u=[l(c,"vec4",16,0),l(c,"vec4",16,4),l(c,"vec4",16,8),l(c,"vec4",16,12)];r=Br(...u)}this.instanceMatrixNode=r}if(s&&o===null){const c=new ka(s.array,3),l=s.usage===wa?vf:tu;this.bufferColor=c,o=B(l(c,"vec3",3,0)),this.instanceColorNode=o}const a=r.mul(Zt).xyz;if(Zt.assign(a),e.hasGeometryAttribute("normal")){const c=lv(jn,r);jn.assign(c)}this.instanceColorNode!==null&&qa("vec3","vInstanceColor").assign(this.instanceColorNode)}update(){this.instanceMatrix.usage!==wa&&this.buffer!==null&&this.instanceMatrix.version!==this.buffer.version&&(this.buffer.version=this.instanceMatrix.version),this.instanceColor&&this.instanceColor.usage!==wa&&this.bufferColor!==null&&this.instanceColor.version!==this.bufferColor.version&&(this.bufferColor.version=this.instanceColor.version)}}const GC=K(Lv);class WC extends Lv{static get type(){return"InstancedMeshNode"}constructor(e){const{count:t,instanceMatrix:n,instanceColor:s}=e;super(t,n,s),this.instancedMesh=e}}const Dv=K(WC);class XC extends qe{static get type(){return"BatchNode"}constructor(e){super("void"),this.batchMesh=e,this.batchingIdNode=null}setup(e){this.batchingIdNode===null&&(e.getDrawIndex()===null?this.batchingIdNode=xc:this.batchingIdNode=Pv);const n=k(([_])=>{const x=nr(jt(this.batchMesh._indirectTexture),0),m=L(_).modInt(L(x)),f=L(_).div(L(x));return jt(this.batchMesh._indirectTexture,dn(m,f)).x}).setLayout({name:"getIndirectIndex",type:"uint",inputs:[{name:"id",type:"int"}]})(L(this.batchingIdNode)),s=this.batchMesh._matricesTexture,r=nr(jt(s),0),o=P(n).mul(4).toInt().toVar(),a=o.modInt(r),c=o.div(L(r)),l=Br(jt(s,dn(a,c)),jt(s,dn(a.add(1),c)),jt(s,dn(a.add(2),c)),jt(s,dn(a.add(3),c))),u=this.batchMesh._colorsTexture;if(u!==null){const x=k(([m])=>{const f=nr(jt(u),0).x,w=m,y=w.modInt(f),v=w.div(f);return jt(u,dn(y,v)).rgb}).setLayout({name:"getBatchingColor",type:"vec3",inputs:[{name:"id",type:"int"}]})(n);qa("vec3","vBatchColor").assign(x)}const h=vi(l);Zt.assign(l.mul(Zt));const d=jn.div(B(h[0].dot(h[0]),h[1].dot(h[1]),h[2].dot(h[2]))),p=h.mul(d).xyz;jn.assign(p),e.hasGeometryAttribute("tangent")&&mc.mulAssign(h)}}const Iv=K(XC),Fg=new WeakMap;class Uv extends qe{static get type(){return"SkinningNode"}constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=Et.OBJECT,this.skinIndexNode=Is("skinIndex","uvec4"),this.skinWeightNode=Is("skinWeight","vec4");let n,s,r;t?(n=Qt("bindMatrix","mat4"),s=Qt("bindMatrixInverse","mat4"),r=yf("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=pt(e.bindMatrix,"mat4"),s=pt(e.bindMatrixInverse,"mat4"),r=pc(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=s,this.boneMatricesNode=r,this.previousBoneMatricesNode=null}getSkinnedPosition(e=this.boneMatricesNode,t=Zt){const{skinIndexNode:n,skinWeightNode:s,bindMatrixNode:r,bindMatrixInverseNode:o}=this,a=e.element(n.x),c=e.element(n.y),l=e.element(n.z),u=e.element(n.w),h=r.mul(t),d=nn(a.mul(s.x).mul(h),c.mul(s.y).mul(h),l.mul(s.z).mul(h),u.mul(s.w).mul(h));return o.mul(d).xyz}getSkinnedNormal(e=this.boneMatricesNode,t=jn){const{skinIndexNode:n,skinWeightNode:s,bindMatrixNode:r,bindMatrixInverseNode:o}=this,a=e.element(n.x),c=e.element(n.y),l=e.element(n.z),u=e.element(n.w);let h=nn(s.x.mul(a),s.y.mul(c),s.z.mul(l),s.w.mul(u));return h=o.mul(h).mul(r),h.transformDirection(t).xyz}getPreviousSkinnedPosition(e){const t=e.object;return this.previousBoneMatricesNode===null&&(t.skeleton.previousBoneMatrices=new Float32Array(t.skeleton.boneMatrices),this.previousBoneMatricesNode=yf("skeleton.previousBoneMatrices","mat4",t.skeleton.bones.length)),this.getSkinnedPosition(this.previousBoneMatricesNode,nu)}needsPreviousBoneMatrices(e){const t=e.renderer.getMRT();return t&&t.has("velocity")||lx(e.object).useVelocity===!0}setup(e){this.needsPreviousBoneMatrices(e)&&nu.assign(this.getPreviousSkinnedPosition(e));const t=this.getSkinnedPosition();if(Zt.assign(t),e.hasGeometryAttribute("normal")){const n=this.getSkinnedNormal();jn.assign(n),e.hasGeometryAttribute("tangent")&&mc.assign(n)}}generate(e,t){if(t!=="void")return Zt.build(e,t)}update(e){const n=(this.useReference?e.object:this.skinnedMesh).skeleton;Fg.get(n)!==e.frameId&&(Fg.set(n,e.frameId),this.previousBoneMatricesNode!==null&&n.previousBoneMatrices.set(n.boneMatrices),n.update())}}const $C=i=>ee(new Uv(i)),Ov=i=>ee(new Uv(i,!0));class qC extends qe{static get type(){return"LoopNode"}constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let r=0,o=this.params.length-1;r<o;r++){const a=this.params[r],c=a.isNode!==!0&&a.name||this.getVarName(r),l=a.isNode!==!0&&a.type||"int";n[c]=cr(c,l)}const s=e.addStack();return t.returnsNode=this.params[this.params.length-1](n,s,e),t.stackNode=s,e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n=this.params,s=t.stackNode;for(let a=0,c=n.length-1;a<c;a++){const l=n[a];let u=null,h=null,d=null,p=null,_=null,x=null;l.isNode?(p="int",d=this.getVarName(a),u="0",h=l.build(e,p),_="<"):(p=l.type||"int",d=l.name||this.getVarName(a),u=l.start,h=l.end,_=l.condition,x=l.update,typeof u=="number"?u=e.generateConst(p,u):u&&u.isNode&&(u=u.build(e,p)),typeof h=="number"?h=e.generateConst(p,h):h&&h.isNode&&(h=h.build(e,p)),u!==void 0&&h===void 0?(u=u+" - 1",h="0",_=">="):h!==void 0&&u===void 0&&(u="0",_="<"),_===void 0&&(Number(u)>Number(h)?_=">=":_="<"));const m={start:u,end:h,condition:_},f=m.start,w=m.end;let y="",v="",D="";x||(p==="int"||p==="uint"?_.includes("<")?x="++":x="--":_.includes("<")?x="+= 1.":x="-= 1."),y+=e.getVar(p,d)+" = "+f,v+=d+" "+_+" "+w,D+=d+" "+x;const C=`for ( ${y}; ${v}; ${D} )`;e.addFlowCode((a===0?`
`:"")+e.tab+C+` {

`).addFlowTab()}const r=s.build(e,"void"),o=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+r);for(let a=0,c=this.params.length-1;a<c;a++)e.addFlowCode((a===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),o}}const It=(...i)=>ee(new qC(zr(i,"int"))).append(),YC=()=>cr("continue").append(),Fv=()=>cr("break").append(),jC=(...i)=>(console.warn("TSL.LoopNode: loop() has been renamed to Loop()."),It(...i)),td=new WeakMap,ei=new _t,Vg=k(({bufferMap:i,influence:e,stride:t,width:n,depth:s,offset:r})=>{const o=L(Cv).mul(t).add(r),a=o.div(n),c=o.sub(a.mul(n));return jt(i,dn(c,a)).depth(s).mul(e)});function ZC(i){const e=i.morphAttributes.position!==void 0,t=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,s=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,r=s!==void 0?s.length:0;let o=td.get(i);if(o===void 0||o.count!==r){let w=function(){m.dispose(),td.delete(i),i.removeEventListener("dispose",w)};var a=w;o!==void 0&&o.texture.dispose();const c=i.morphAttributes.position||[],l=i.morphAttributes.normal||[],u=i.morphAttributes.color||[];let h=0;e===!0&&(h=1),t===!0&&(h=2),n===!0&&(h=3);let d=i.attributes.position.count*h,p=1;const _=4096;d>_&&(p=Math.ceil(d/_),d=_);const x=new Float32Array(d*p*4*r),m=new sp(x,d,p,r);m.type=Li,m.needsUpdate=!0;const f=h*4;for(let y=0;y<r;y++){const v=c[y],D=l[y],C=u[y],N=d*p*4*y;for(let I=0;I<v.count;I++){const E=I*f;e===!0&&(ei.fromBufferAttribute(v,I),x[N+E+0]=ei.x,x[N+E+1]=ei.y,x[N+E+2]=ei.z,x[N+E+3]=0),t===!0&&(ei.fromBufferAttribute(D,I),x[N+E+4]=ei.x,x[N+E+5]=ei.y,x[N+E+6]=ei.z,x[N+E+7]=0),n===!0&&(ei.fromBufferAttribute(C,I),x[N+E+8]=ei.x,x[N+E+9]=ei.y,x[N+E+10]=ei.z,x[N+E+11]=C.itemSize===4?ei.w:1)}}o={count:r,texture:m,stride:h,size:new de(d,p)},td.set(i,o),i.addEventListener("dispose",w)}return o}class KC extends qe{static get type(){return"MorphNode"}constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=pt(1),this.updateType=Et.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,s=t.hasAttribute("normal")&&t.morphAttributes.normal!==void 0,r=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,o=r!==void 0?r.length:0,{texture:a,stride:c,size:l}=ZC(t);n===!0&&Zt.mulAssign(this.morphBaseInfluence),s===!0&&jn.mulAssign(this.morphBaseInfluence);const u=L(l.width);It(o,({i:h})=>{const d=P(0).toVar();this.mesh.count>1&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?d.assign(jt(this.mesh.morphTexture,dn(L(h).add(1),L(xc))).r):d.assign(Qt("morphTargetInfluences","float").element(h).toVar()),n===!0&&Zt.addAssign(Vg({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:L(0)})),s===!0&&jn.addAssign(Vg({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:L(1)}))})}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const Vv=K(KC);class zv extends qe{static get type(){return"LightingNode"}constructor(){super("vec3"),this.isLightingNode=!0}}class JC extends zv{static get type(){return"AONode"}constructor(e=null){super(),this.aoNode=e}setup(e){e.context.ambientOcclusion.mulAssign(this.aoNode)}}class QC extends P0{static get type(){return"LightingContextNode"}constructor(e,t=null,n=null,s=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=s,this._value=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=B().toVar("directDiffuse"),s=B().toVar("directSpecular"),r=B().toVar("indirectDiffuse"),o=B().toVar("indirectSpecular"),a={directDiffuse:n,directSpecular:s,indirectDiffuse:r,indirectSpecular:o};return{radiance:B().toVar("radiance"),irradiance:B().toVar("irradiance"),iblIrradiance:B().toVar("iblIrradiance"),ambientOcclusion:P(1).toVar("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.value=this._value||(this._value=this.getContext()),this.value.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const Bv=K(QC);class e2 extends zv{static get type(){return"IrradianceNode"}constructor(e){super(),this.node=e}setup(e){e.context.irradiance.addAssign(this.node)}}let ga,_a;class an extends qe{static get type(){return"ScreenNode"}constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===an.VIEWPORT?"vec4":"vec2"}getUpdateType(){let e=Et.NONE;return(this.scope===an.SIZE||this.scope===an.VIEWPORT)&&(e=Et.RENDER),this.updateType=e,e}update({renderer:e}){const t=e.getRenderTarget();this.scope===an.VIEWPORT?t!==null?_a.copy(t.viewport):(e.getViewport(_a),_a.multiplyScalar(e.getPixelRatio())):t!==null?(ga.width=t.width,ga.height=t.height):e.getDrawingBufferSize(ga)}setup(){const e=this.scope;let t=null;return e===an.SIZE?t=pt(ga||(ga=new de)):e===an.VIEWPORT?t=pt(_a||(_a=new _t)):t=fe(vc.div(iu)),t}generate(e){if(this.scope===an.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(iu).outputNode.build(e);t=`${e.getType("vec2")}( ${t}.x, ${n}.y - ${t}.y )`}return t}return super.generate(e)}}an.COORDINATE="coordinate";an.VIEWPORT="viewport";an.SIZE="size";an.UV="uv";const hr=_e(an,an.UV),iu=_e(an,an.SIZE),vc=_e(an,an.COORDINATE),Hp=_e(an,an.VIEWPORT),kv=Hp.zw,Hv=vc.sub(Hp.xy),t2=Hv.div(kv),n2=k(()=>(console.warn('TSL.ViewportNode: "viewportResolution" is deprecated. Use "screenSize" instead.'),iu),"vec2").once()(),i2=k(()=>(console.warn('TSL.ViewportNode: "viewportTopLeft" is deprecated. Use "screenUV" instead.'),hr),"vec2").once()(),s2=k(()=>(console.warn('TSL.ViewportNode: "viewportBottomLeft" is deprecated. Use "screenUV.flipY()" instead.'),hr.flipY()),"vec2").once()(),xa=new de;class Lu extends Us{static get type(){return"ViewportTextureNode"}constructor(e=hr,t=null,n=null){n===null&&(n=new G_,n.minFilter=Qs),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=Et.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(xa);const n=this.value;(n.image.width!==xa.width||n.image.height!==xa.height)&&(n.image.width=xa.width,n.image.height=xa.height,n.needsUpdate=!0);const s=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=s}clone(){const e=new this.constructor(this.uvNode,this.levelNode,this.value);return e.generateMipmaps=this.generateMipmaps,e}}const r2=K(Lu),o2=K(Lu,null,null,{generateMipmaps:!0});let nd=null;class a2 extends Lu{static get type(){return"ViewportDepthTextureNode"}constructor(e=hr,t=null){nd===null&&(nd=new Zr),super(e,t,nd)}}const Gp=K(a2);class $n extends qe{static get type(){return"ViewportDepthNode"}constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===$n.DEPTH_BASE?e.getFragDepth():super.generate(e)}setup({camera:e}){const{scope:t}=this,n=this.valueNode;let s=null;if(t===$n.DEPTH_BASE)n!==null&&(s=Wv().assign(n));else if(t===$n.DEPTH)e.isPerspectiveCamera?s=Gv(fn.z,Zs,Ks):s=Bo(fn.z,Zs,Ks);else if(t===$n.LINEAR_DEPTH)if(n!==null)if(e.isPerspectiveCamera){const r=Wp(n,Zs,Ks);s=Bo(r,Zs,Ks)}else s=n;else s=Bo(fn.z,Zs,Ks);return s}}$n.DEPTH_BASE="depthBase";$n.DEPTH="depth";$n.LINEAR_DEPTH="linearDepth";const Bo=(i,e,t)=>i.add(e).div(e.sub(t)),c2=(i,e,t)=>e.sub(t).mul(i).sub(e),Gv=(i,e,t)=>e.add(i).mul(t).div(t.sub(e).mul(i)),Wp=(i,e,t)=>e.mul(t).div(t.sub(e).mul(i).sub(t)),Xp=(i,e,t)=>{e=e.max(1e-6).toVar();const n=As(i.negate().div(e)),s=As(t.div(e));return n.div(s)},l2=(i,e,t)=>{const n=i.mul(wp(t.div(e)));return P(Math.E).pow(n).mul(e).negate()},Wv=K($n,$n.DEPTH_BASE),$p=_e($n,$n.DEPTH),su=K($n,$n.LINEAR_DEPTH),u2=su(Gp());$p.assign=i=>Wv(i);class h2 extends qe{constructor(e){super("float"),this.name=e,this.isBuiltinNode=!0}generate(){return this.name}}const d2=K(h2);class xi extends qe{static get type(){return"ClippingNode"}constructor(e=xi.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);const t=e.clippingContext,{intersectionPlanes:n,unionPlanes:s}=t;return this.hardwareClipping=e.material.hardwareClipping,this.scope===xi.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(n,s):this.scope===xi.HARDWARE?this.setupHardwareClipping(s,e):this.setupDefault(n,s)}setupAlphaToCoverage(e,t){return k(()=>{const n=P().toVar("distanceToPlane"),s=P().toVar("distanceToGradient"),r=P(1).toVar("clipOpacity"),o=t.length;if(this.hardwareClipping===!1&&o>0){const c=Ur(t);It(o,({i:l})=>{const u=c.element(l);n.assign(fn.dot(u.xyz).negate().add(u.w)),s.assign(n.fwidth().div(2)),r.mulAssign(ea(s.negate(),s,n))})}const a=e.length;if(a>0){const c=Ur(e),l=P(1).toVar("intersectionClipOpacity");It(a,({i:u})=>{const h=c.element(u);n.assign(fn.dot(h.xyz).negate().add(h.w)),s.assign(n.fwidth().div(2)),l.mulAssign(ea(s.negate(),s,n).oneMinus())}),r.mulAssign(l.oneMinus())}bi.a.mulAssign(r),bi.a.equal(0).discard()})()}setupDefault(e,t){return k(()=>{const n=t.length;if(this.hardwareClipping===!1&&n>0){const r=Ur(t);It(n,({i:o})=>{const a=r.element(o);fn.dot(a.xyz).greaterThan(a.w).discard()})}const s=e.length;if(s>0){const r=Ur(e),o=Ps(!0).toVar("clipped");It(s,({i:a})=>{const c=r.element(a);o.assign(fn.dot(c.xyz).greaterThan(c.w).and(o))}),o.discard()}})()}setupHardwareClipping(e,t){const n=e.length;return t.enableHardwareClipping(n),k(()=>{const s=Ur(e),r=d2(t.getClipDistance());It(n,({i:o})=>{const a=s.element(o),c=fn.dot(a.xyz).sub(a.w).negate();r.element(o).assign(c)})})()}}xi.ALPHA_TO_COVERAGE="alphaToCoverage";xi.DEFAULT="default";xi.HARDWARE="hardware";const f2=()=>ee(new xi),p2=()=>ee(new xi(xi.ALPHA_TO_COVERAGE)),m2=()=>ee(new xi(xi.HARDWARE)),g2=.05,zg=k(([i])=>Vs(it(1e4,si(it(17,i.x).add(it(.1,i.y)))).mul(nn(.1,Ft(si(it(13,i.y).add(i.x))))))),Bg=k(([i])=>zg(fe(zg(i.xy),i.z))),_2=k(([i])=>{const e=yn(eu(Np(i.xyz)),eu(Rp(i.xyz))),t=P(1).div(P(g2).mul(e)).toVar("pixScale"),n=fe(Qo(es(As(t))),Qo(Au(As(t)))),s=fe(Bg(es(n.x.mul(i.xyz))),Bg(es(n.y.mul(i.xyz)))),r=Vs(As(t)),o=nn(it(r.oneMinus(),s.x),it(r,s.y)),a=li(r,r.oneMinus()),c=B(o.mul(o).div(it(2,a).mul(xt(1,a))),o.sub(it(.5,a)).div(xt(1,a)),xt(1,xt(1,o).mul(xt(1,o)).div(it(2,a).mul(xt(1,a))))),l=o.lessThan(a.oneMinus()).select(o.lessThan(a).select(c.x,c.y),c.z);return Ds(l,1e-6,1)}).setLayout({name:"getAlphaHashThreshold",type:"float",inputs:[{name:"position",type:"vec3"}]});class ta extends qr{static get type(){return"NodeMaterial"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isNodeMaterial=!0,this.fog=!0,this.lights=!1,this.hardwareClipping=!1,this.lightsNode=null,this.envNode=null,this.aoNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.geometryNode=null,this.depthNode=null,this.shadowPositionNode=null,this.receivedShadowNode=null,this.castShadowNode=null,this.outputNode=null,this.mrtNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+rx(this)}build(e){this.setup(e)}setupObserver(e){return new hN(e)}setup(e){e.context.setupNormal=()=>this.setupNormal(e),e.context.setupPositionView=()=>this.setupPositionView(e),e.context.setupModelViewProjection=()=>this.setupModelViewProjection(e);const t=e.renderer,n=t.getRenderTarget();e.addStack();const s=this.vertexNode||this.setupVertex(e);e.stack.outputNode=s,this.setupHardwareClipping(e),this.geometryNode!==null&&(e.stack.outputNode=e.stack.outputNode.bypass(this.geometryNode)),e.addFlow("vertex",e.removeStack()),e.addStack();let r;const o=this.setupClipping(e);if((this.depthWrite===!0||this.depthTest===!0)&&(n!==null?n.depthBuffer===!0&&this.setupDepth(e):t.depth===!0&&this.setupDepth(e)),this.fragmentNode===null){this.setupDiffuseColor(e),this.setupVariants(e);const a=this.setupLighting(e);o!==null&&e.stack.add(o);const c=et(a,bi.a).max(0);if(r=this.setupOutput(e,c),Ya.assign(r),this.outputNode!==null&&(r=this.outputNode),n!==null){const l=t.getMRT(),u=this.mrtNode;l!==null?(r=l,u!==null&&(r=l.merge(u))):u!==null&&(r=u)}}else{let a=this.fragmentNode;a.isOutputStructNode!==!0&&(a=et(a)),r=this.setupOutput(e,a)}e.stack.outputNode=r,e.addFlow("fragment",e.removeStack()),e.monitor=this.setupObserver(e)}setupClipping(e){if(e.clippingContext===null)return null;const{unionPlanes:t,intersectionPlanes:n}=e.clippingContext;let s=null;if(t.length>0||n.length>0){const r=e.renderer.samples;this.alphaToCoverage&&r>1?s=p2():e.stack.add(f2())}return s}setupHardwareClipping(e){if(this.hardwareClipping=!1,e.clippingContext===null)return;const t=e.clippingContext.unionPlanes.length;t>0&&t<=8&&e.isAvailable("clipDistance")&&(e.stack.add(m2()),this.hardwareClipping=!0)}setupDepth(e){const{renderer:t,camera:n}=e;let s=this.depthNode;if(s===null){const r=t.getMRT();r&&r.has("depth")?s=r.get("depth"):t.logarithmicDepthBuffer===!0&&(n.isPerspectiveCamera?s=Xp(fn.z,Zs,Ks):s=Bo(fn.z,Zs,Ks))}s!==null&&$p.assign(s).append()}setupPositionView(){return dc.mul(Zt).xyz}setupModelViewProjection(){return hc.mul(fn)}setupVertex(e){return e.addStack(),this.setupPosition(e),e.context.vertex=e.removeStack(),Rv}setupPosition(e){const{object:t,geometry:n}=e;if((n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&Vv(t).append(),t.isSkinnedMesh===!0&&Ov(t).append(),this.displacementMap){const s=Or("displacementMap","texture"),r=Or("displacementScale","float"),o=Or("displacementBias","float");Zt.addAssign(jn.normalize().mul(s.x.mul(r).add(o)))}return t.isBatchedMesh&&Iv(t).append(),t.isInstancedMesh&&t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&Dv(t).append(),this.positionNode!==null&&Zt.assign(this.positionNode.context({isPositionNodeInput:!0})),Zt}setupDiffuseColor({object:e,geometry:t}){let n=this.colorNode?et(this.colorNode):Tv;this.vertexColors===!0&&t.hasAttribute("color")&&(n=et(n.xyz.mul(Is("color","vec3")),n.a)),e.instanceColor&&(n=qa("vec3","vInstanceColor").mul(n)),e.isBatchedMesh&&e._colorsTexture&&(n=qa("vec3","vBatchColor").mul(n)),bi.assign(n);const s=this.opacityNode?P(this.opacityNode):Ev;if(bi.a.assign(bi.a.mul(s)),this.alphaTestNode!==null||this.alphaTest>0){const r=this.alphaTestNode!==null?P(this.alphaTestNode):Mv;bi.a.lessThanEqual(r).discard()}this.alphaHash===!0&&bi.a.lessThan(_2(Zt)).discard(),this.transparent===!1&&this.blending===Vr&&this.alphaToCoverage===!1&&bi.a.assign(1)}setupVariants(){}setupOutgoingLight(){return this.lights===!0?B(0):bi.rgb}setupNormal(){return this.normalNode?B(this.normalNode):bv}setupEnvironment(){let e=null;return this.envNode?e=this.envNode:this.envMap&&(e=this.envMap.isCubeTexture?Or("envMap","cubeTexture"):Or("envMap","texture")),e}setupLightMap(e){let t=null;return e.material.lightMap&&(t=new e2(Av)),t}setupLights(e){const t=[],n=this.setupEnvironment(e);n&&n.isLightingNode&&t.push(n);const s=this.setupLightMap(e);if(s&&s.isLightingNode&&t.push(s),this.aoNode!==null||e.material.aoMap){const o=this.aoNode!==null?this.aoNode:Nv;t.push(new JC(o))}let r=this.lightsNode||e.lightsNode;return t.length>0&&(r=e.renderer.lighting.createNode([...r.getLights(),...t])),r}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:s,emissiveNode:r}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let c=this.setupOutgoingLight(e);if(a&&a.getScope().hasLights){const l=this.setupLightingModel(e);c=Bv(a,l,n,s)}else n!==null&&(c=B(s!==null?en(c,n,s):n));return(r&&r.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(_f.assign(B(r||wv)),c=c.add(_f)),c}setupOutput(e,t){if(this.fog===!0){const n=e.fogNode;n&&(Ya.assign(t),t=et(n))}return t}setDefaultValues(e){for(const n in e){const s=e[n];this[n]===void 0&&(this[n]=s,s&&s.clone&&(this[n]=s.clone()))}const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=qr.prototype.toJSON.call(this,e),s=Jl(this);n.inputNodes={};for(const{property:o,childNode:a}of s)n.inputNodes[o]=a.toJSON(e).uuid;function r(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images),c=r(e.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.geometryNode=e.geometryNode,this.depthNode=e.depthNode,this.shadowPositionNode=e.shadowPositionNode,this.receivedShadowNode=e.receivedShadowNode,this.castShadowNode=e.castShadowNode,this.outputNode=e.outputNode,this.mrtNode=e.mrtNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}}let id=null;class x2 extends Lu{static get type(){return"ViewportSharedTextureNode"}constructor(e=hr,t=null){id===null&&(id=new G_),super(e,t,id)}updateReference(){return this}}const v2=K(x2),y2=i=>ee(i).mul(.5).add(.5),S2=i=>ee(i).mul(2).sub(1);class M2 extends cn{static get type(){return"EquirectUVNode"}constructor(e=sv){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return fe(t,n)}}const T2=K(M2),Xv=k(({f0:i,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return i.mul(n.oneMinus()).add(e.mul(n))}),w2=k(i=>i.diffuseColor.mul(1/Math.PI)),$v=k(i=>{if(i.geometry.hasAttribute("normal")===!1)return P(0);const e=rs.dFdx().abs().max(rs.dFdy().abs());return e.x.max(e.y).max(e.z)}),E2=k(i=>{const{roughness:e}=i,t=$v();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),qv=k(({alpha:i,dotNL:e,dotNV:t})=>{const n=i.pow2(),s=e.mul(n.add(n.oneMinus().mul(t.pow2())).sqrt()),r=t.mul(n.add(n.oneMinus().mul(e.pow2())).sqrt());return Ls(.5,s.add(r).max(e0))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),b2=k(({alphaT:i,alphaB:e,dotTV:t,dotBV:n,dotTL:s,dotBL:r,dotNV:o,dotNL:a})=>{const c=a.mul(B(i.mul(t),e.mul(n),o).length()),l=o.mul(B(i.mul(s),e.mul(r),a).length());return Ls(.5,c.add(l)).saturate()}).setLayout({name:"V_GGX_SmithCorrelated_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotTV",type:"float",qualifier:"in"},{name:"dotBV",type:"float",qualifier:"in"},{name:"dotTL",type:"float",qualifier:"in"},{name:"dotBL",type:"float",qualifier:"in"},{name:"dotNV",type:"float",qualifier:"in"},{name:"dotNL",type:"float",qualifier:"in"}]}),Yv=k(({alpha:i,dotNH:e})=>{const t=i.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),A2=P(1/Math.PI),N2=k(({alphaT:i,alphaB:e,dotNH:t,dotTH:n,dotBH:s})=>{const r=i.mul(e),o=B(e.mul(n),i.mul(s),r.mul(t)),a=o.dot(o),c=r.div(a);return A2.mul(r.mul(c.pow2()))}).setLayout({name:"D_GGX_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotNH",type:"float",qualifier:"in"},{name:"dotTH",type:"float",qualifier:"in"},{name:"dotBH",type:"float",qualifier:"in"}]}),R2=k(i=>{const{lightDirection:e,f0:t,f90:n,roughness:s,f:r,USE_IRIDESCENCE:o,USE_ANISOTROPY:a}=i,c=i.normalView||Os,l=s.pow2(),u=e.add(ri).normalize(),h=c.dot(e).clamp(),d=c.dot(ri).clamp(),p=c.dot(u).clamp(),_=ri.dot(u).clamp();let x=Xv({f0:t,f90:n,dotVH:_}),m,f;if($a(o)&&(x=Ix.mix(x,r)),$a(a)){const w=Ml.dot(e),y=Ml.dot(ri),v=Ml.dot(u),D=zo.dot(e),C=zo.dot(ri),N=zo.dot(u);m=b2({alphaT:xf,alphaB:l,dotTV:y,dotBV:C,dotTL:w,dotBL:D,dotNV:d,dotNL:h}),f=N2({alphaT:xf,alphaB:l,dotNH:p,dotTH:v,dotBH:N})}else m=qv({alpha:l,dotNL:h,dotNV:d}),f=Yv({alpha:l,dotNH:p});return x.mul(m).mul(f)}),C2=k(({roughness:i,dotNV:e})=>{const t=et(-1,-.0275,-.572,.022),n=et(1,.0425,1.04,-.04),s=i.mul(t).add(n),r=s.x.mul(s.x).min(e.mul(-9.28).exp2()).mul(s.x).add(s.y);return fe(-1.04,1.04).mul(r).add(s.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),P2=k(({f:i,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),s=n.mul(n),r=n.mul(s,s).clamp(0,.9999);return i.sub(B(e).mul(r)).div(r.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),Du=1/6,jv=i=>it(Du,it(i,it(i,i.negate().add(3)).sub(3)).add(1)),Mf=i=>it(Du,it(i,it(i,it(3,i).sub(6))).add(4)),Zv=i=>it(Du,it(i,it(i,it(-3,i).add(3)).add(3)).add(1)),Tf=i=>it(Du,Ii(i,3)),kg=i=>jv(i).add(Mf(i)),Hg=i=>Zv(i).add(Tf(i)),Gg=i=>nn(-1,Mf(i).div(jv(i).add(Mf(i)))),Wg=i=>nn(1,Tf(i).div(Zv(i).add(Tf(i)))),Xg=(i,e,t)=>{const n=i.uvNode,s=it(n,e.zw).add(.5),r=es(s),o=Vs(s),a=kg(o.x),c=Hg(o.x),l=Gg(o.x),u=Wg(o.x),h=Gg(o.y),d=Wg(o.y),p=fe(r.x.add(l),r.y.add(h)).sub(.5).mul(e.xy),_=fe(r.x.add(u),r.y.add(h)).sub(.5).mul(e.xy),x=fe(r.x.add(l),r.y.add(d)).sub(.5).mul(e.xy),m=fe(r.x.add(u),r.y.add(d)).sub(.5).mul(e.xy),f=kg(o.y).mul(nn(a.mul(i.sample(p).level(t)),c.mul(i.sample(_).level(t)))),w=Hg(o.y).mul(nn(a.mul(i.sample(x).level(t)),c.mul(i.sample(m).level(t))));return f.add(w)},L2=k(([i,e=P(3)])=>{const t=fe(i.size(L(e))),n=fe(i.size(L(e.add(1)))),s=Ls(1,t),r=Ls(1,n),o=Xg(i,et(s,t),es(e)),a=Xg(i,et(r,n),Au(e));return Vs(e).mix(o,a)});B(.04);P(1);const $g=P(1),wf=P(-2),el=P(.8),sd=P(-1),tl=P(.4),rd=P(2),nl=P(.305),od=P(3),qg=P(.21),D2=P(4),Yg=P(4),I2=P(16),U2=k(([i])=>{const e=B(Ft(i)).toVar(),t=P(-1).toVar();return mt(e.x.greaterThan(e.z),()=>{mt(e.x.greaterThan(e.y),()=>{t.assign(Xn(i.x.greaterThan(0),0,3))}).Else(()=>{t.assign(Xn(i.y.greaterThan(0),1,4))})}).Else(()=>{mt(e.z.greaterThan(e.y),()=>{t.assign(Xn(i.z.greaterThan(0),2,5))}).Else(()=>{t.assign(Xn(i.y.greaterThan(0),1,4))})}),t}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),O2=k(([i,e])=>{const t=fe().toVar();return mt(e.equal(0),()=>{t.assign(fe(i.z,i.y).div(Ft(i.x)))}).ElseIf(e.equal(1),()=>{t.assign(fe(i.x.negate(),i.z.negate()).div(Ft(i.y)))}).ElseIf(e.equal(2),()=>{t.assign(fe(i.x.negate(),i.y).div(Ft(i.z)))}).ElseIf(e.equal(3),()=>{t.assign(fe(i.z.negate(),i.y).div(Ft(i.x)))}).ElseIf(e.equal(4),()=>{t.assign(fe(i.x.negate(),i.z).div(Ft(i.y)))}).Else(()=>{t.assign(fe(i.x,i.y).div(Ft(i.z)))}),it(.5,t.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),F2=k(([i])=>{const e=P(0).toVar();return mt(i.greaterThanEqual(el),()=>{e.assign($g.sub(i).mul(sd.sub(wf)).div($g.sub(el)).add(wf))}).ElseIf(i.greaterThanEqual(tl),()=>{e.assign(el.sub(i).mul(rd.sub(sd)).div(el.sub(tl)).add(sd))}).ElseIf(i.greaterThanEqual(nl),()=>{e.assign(tl.sub(i).mul(od.sub(rd)).div(tl.sub(nl)).add(rd))}).ElseIf(i.greaterThanEqual(qg),()=>{e.assign(nl.sub(i).mul(D2.sub(od)).div(nl.sub(qg)).add(od))}).Else(()=>{e.assign(P(-2).mul(As(it(1.16,i))))}),e}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]}),Kv=k(([i,e])=>{const t=i.toVar();t.assign(it(2,t).sub(1));const n=B(t,1).toVar();return mt(e.equal(0),()=>{n.assign(n.zyx)}).ElseIf(e.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).ElseIf(e.equal(2),()=>{n.x.mulAssign(-1)}).ElseIf(e.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).ElseIf(e.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).ElseIf(e.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]}),Jv=k(([i,e,t,n,s,r])=>{const o=P(t),a=B(e),c=Ds(F2(o),wf,r),l=Vs(c),u=es(c),h=B(Ef(i,a,u,n,s,r)).toVar();return mt(l.notEqual(0),()=>{const d=B(Ef(i,a,u.add(1),n,s,r)).toVar();h.assign(en(h,d,l))}),h}),Ef=k(([i,e,t,n,s,r])=>{const o=P(t).toVar(),a=B(e),c=P(U2(a)).toVar(),l=P(yn(Yg.sub(o),0)).toVar();o.assign(yn(o,Yg));const u=P(Qo(o)).toVar(),h=fe(O2(a,c).mul(u.sub(2)).add(1)).toVar();return mt(c.greaterThan(2),()=>{h.y.addAssign(u),c.subAssign(3)}),h.x.addAssign(c.mul(u)),h.x.addAssign(l.mul(it(3,I2))),h.y.addAssign(it(4,Qo(r).sub(u))),h.x.mulAssign(n),h.y.mulAssign(s),i.sample(h).grad(fe(),fe())}),ad=k(({envMap:i,mipInt:e,outputDirection:t,theta:n,axis:s,CUBEUV_TEXEL_WIDTH:r,CUBEUV_TEXEL_HEIGHT:o,CUBEUV_MAX_MIP:a})=>{const c=vs(n),l=t.mul(c).add(s.cross(t).mul(si(n))).add(s.mul(s.dot(t).mul(c.oneMinus())));return Ef(i,l,e,r,o,a)}),V2=k(({n:i,latitudinal:e,poleAxis:t,outputDirection:n,weights:s,samples:r,dTheta:o,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})=>{const d=B(Xn(e,t,Ru(t,n))).toVar();mt(Tp(d.equals(B(0))),()=>{d.assign(B(n.z,0,n.x.negate()))}),d.assign(Jr(d));const p=B().toVar();return p.addAssign(s.element(L(0)).mul(ad({theta:0,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),It({start:L(1),end:i},({i:_})=>{mt(_.greaterThanEqual(r),()=>{Fv()});const x=P(o.mul(P(_))).toVar();p.addAssign(s.element(_).mul(ad({theta:x.mul(-1),axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),p.addAssign(s.element(_).mul(ad({theta:x,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})))}),et(p,1)});let ru=null;const jg=new WeakMap;function z2(i){const e=Math.log2(i)-2,t=1/i;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function B2(i){let e=jg.get(i);if((e!==void 0?e.pmremVersion:-1)!==i.pmremVersion){const n=i.image;if(i.isCubeTexture)if(H2(n))e=ru.fromCubemap(i,e);else return null;else if(G2(n))e=ru.fromEquirectangular(i,e);else return null;e.pmremVersion=i.pmremVersion,jg.set(i,e)}return e.texture}class k2 extends cn{static get type(){return"PMREMNode"}constructor(e,t=null,n=null){super("vec3"),this._value=e,this._pmrem=null,this.uvNode=t,this.levelNode=n,this._generator=null;const s=new bn;s.isRenderTargetTexture=!0,this._texture=kn(s),this._width=pt(0),this._height=pt(0),this._maxMip=pt(0),this.updateBeforeType=Et.RENDER}set value(e){this._value=e,this._pmrem=null}get value(){return this._value}updateFromTexture(e){const t=z2(e.image.height);this._texture.value=e,this._width.value=t.texelWidth,this._height.value=t.texelHeight,this._maxMip.value=t.maxMip}updateBefore(){let e=this._pmrem;const t=e?e.pmremVersion:-1,n=this._value;t!==n.pmremVersion&&(n.isPMREMTexture===!0?e=n:e=B2(n),e!==null&&(this._pmrem=e,this.updateFromTexture(e)))}setup(e){ru===null&&(ru=e.createPMREMGenerator()),this.updateBefore(e);let t=this.uvNode;t===null&&e.context.getUV&&(t=e.context.getUV(this));const n=this.value;e.renderer.coordinateSystem===ai&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(t=B(t.x.negate(),t.yz)),t=B(t.x,t.y.negate(),t.z);let s=this.levelNode;return s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),Jv(this._texture,t,s,this._width,this._height,this._maxMip)}}function H2(i){if(i==null)return!1;let e=0;const t=6;for(let n=0;n<t;n++)i[n]!==void 0&&e++;return e===t}function G2(i){return i==null?!1:i.height>0}const W2=K(k2);class X2 extends cn{static get type(){return"MatcapUVNode"}constructor(){super("vec2")}setup(){const e=B(ri.z,0,ri.x.negate()).normalize(),t=ri.cross(e);return fe(e.dot(Os),t.dot(Os)).mul(.495).add(.5)}}const $2=_e(X2);class q2 extends cn{static get type(){return"RotateNode"}constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const r=t.cos(),o=t.sin();return bu(r,o,o.negate(),r).mul(n)}else{const r=t,o=Br(et(1,0,0,0),et(0,vs(r.x),si(r.x).negate(),0),et(0,si(r.x),vs(r.x),0),et(0,0,0,1)),a=Br(et(vs(r.y),0,si(r.y),0),et(0,1,0,0),et(si(r.y).negate(),0,vs(r.y),0),et(0,0,0,1)),c=Br(et(vs(r.z),si(r.z).negate(),0,0),et(si(r.z),vs(r.z),0,0),et(0,0,1,0),et(0,0,0,1));return o.mul(a).mul(c).mul(et(n,1)).xyz}}}const Qv=K(q2),Y2=k(({texture:i,uv:e})=>{const n=B().toVar();return mt(e.x.lessThan(1e-4),()=>{n.assign(B(1,0,0))}).ElseIf(e.y.lessThan(1e-4),()=>{n.assign(B(0,1,0))}).ElseIf(e.z.lessThan(1e-4),()=>{n.assign(B(0,0,1))}).ElseIf(e.x.greaterThan(1-1e-4),()=>{n.assign(B(-1,0,0))}).ElseIf(e.y.greaterThan(1-1e-4),()=>{n.assign(B(0,-1,0))}).ElseIf(e.z.greaterThan(1-1e-4),()=>{n.assign(B(0,0,-1))}).Else(()=>{const r=i.sample(e.add(B(-.01,0,0))).r.sub(i.sample(e.add(B(.01,0,0))).r),o=i.sample(e.add(B(0,-.01,0))).r.sub(i.sample(e.add(B(0,.01,0))).r),a=i.sample(e.add(B(0,0,-.01))).r.sub(i.sample(e.add(B(0,0,.01))).r);n.assign(B(r,o,a))}),n.normalize()});class j2 extends Us{static get type(){return"Texture3DNode"}constructor(e,t=null,n=null){super(e,t,n),this.isTexture3DNode=!0}getInputType(){return"texture3D"}getDefaultUV(){return B(.5,.5,.5)}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0)&&(this.sampler?t=t.flipY():t=t.setY(L(nr(this,this.levelNode).y).sub(t.y).sub(1))),t}generateUV(e,t){return t.build(e,"vec3")}normal(e){return Y2({texture:this,uv:e})}}const Z2=K(j2);class K2 extends bt{static get type(){return"ParameterNode"}constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}const J2=(i,e)=>ee(new K2(i,e));class Q2 extends qe{static get type(){return"StackNode"}constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}If(e,t){const n=new Oa(t);return this._currentCond=Xn(e,n),this.add(this._currentCond)}ElseIf(e,t){const n=new Oa(t),s=Xn(e,n);return this._currentCond.elseNode=s,this._currentCond=s,this}Else(e){return this._currentCond.elseNode=new Oa(e),this}build(e,...t){const n=xx();gf(this);for(const s of this.nodes)s.build(e,"void");return gf(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}else(...e){return console.warn("TSL.StackNode: .else() has been renamed to .Else()."),this.Else(...e)}elseif(...e){return console.warn("TSL.StackNode: .elseif() has been renamed to .ElseIf()."),this.ElseIf(...e)}}const eP=K(Q2);class ey extends qe{static get type(){return"OutputStructNode"}constructor(...e){super(),this.members=e,this.isOutputStructNode=!0}setup(e){super.setup(e);const t=this.members,n=[];for(let s=0;s<t.length;s++)n.push(t[s].getNodeType(e));this.nodeType=e.getStructTypeFromNode(this,n).name}generate(e,t){const n=e.getOutputStructName(),s=this.members,r=n!==""?n+".":"";for(let o=0;o<s.length;o++){const a=s[o].build(e,t);e.addLineFlowCode(`${r}m${o} = ${a}`,this)}return n}}const tP=K(ey);function ty(i,e){for(let t=0;t<i.length;t++)if(i[t].name===e)return t;return-1}class nP extends ey{static get type(){return"MRTNode"}constructor(e){super(),this.outputNodes=e,this.isMRTNode=!0}has(e){return this.outputNodes[e]!==void 0}get(e){return this.outputNodes[e]}merge(e){const t={...this.outputNodes,...e.outputNodes};return ny(t)}setup(e){const t=this.outputNodes,n=e.renderer.getRenderTarget(),s=[],r=n.textures;for(const o in t){const a=ty(r,o);s[a]=et(t[o])}return this.members=s,super.setup(e)}}const ny=K(nP),iP=k(([i])=>{const e=i.toUint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).toFloat().mul(1/2**32)}),bf=(i,e)=>Ii(it(4,i.mul(xt(1,i))),e),sP=(i,e)=>i.lessThan(.5)?bf(i.mul(2),e).div(2):xt(1,bf(it(xt(1,i),2),e).div(2)),rP=(i,e,t)=>Ii(Ls(Ii(i,e),nn(Ii(i,e),Ii(xt(1,i),t))),1/e),oP=(i,e)=>si(Ql.mul(e.mul(i).sub(1))).div(Ql.mul(e.mul(i).sub(1))),ys=k(([i])=>i.fract().sub(.5).abs()).setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]}),aP=k(([i])=>B(ys(i.z.add(ys(i.y.mul(1)))),ys(i.z.add(ys(i.x.mul(1)))),ys(i.y.add(ys(i.x.mul(1)))))).setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]}),cP=k(([i,e,t])=>{const n=B(i).toVar(),s=P(1.4).toVar(),r=P(0).toVar(),o=B(n).toVar();return It({start:P(0),end:P(3),type:"float",condition:"<="},()=>{const a=B(aP(o.mul(2))).toVar();n.addAssign(a.add(t.mul(P(.1).mul(e)))),o.mulAssign(1.8),s.mulAssign(1.5),n.mulAssign(1.2);const c=P(ys(n.z.add(ys(n.x.add(ys(n.y)))))).toVar();r.addAssign(c.div(s)),o.addAssign(.14)}),r}).setLayout({name:"triNoise3D",type:"float",inputs:[{name:"position",type:"vec3"},{name:"speed",type:"float"},{name:"time",type:"float"}]});class lP extends qe{static get type(){return"FunctionOverloadingNode"}constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null,this.global=!0}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let s=null,r=-1;for(const o of this.functionNodes){const c=o.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(t.length===l.length){let u=0;for(let h=0;h<t.length;h++){const d=t[h],p=l[h];d.getNodeType(e)===p.type?u++:u=0}u>r&&(s=o,r=u)}}this._candidateFnCall=n=s(...t)}return n}}const uP=K(lP),An=i=>(...e)=>uP(i,...e),Qr=pt(0).setGroup(wt).onRenderUpdate(i=>i.time),iy=pt(0).setGroup(wt).onRenderUpdate(i=>i.deltaTime),hP=pt(0,"uint").setGroup(wt).onRenderUpdate(i=>i.frameId),dP=(i=1)=>(console.warn('TSL: timerLocal() is deprecated. Use "time" instead.'),Qr.mul(i)),fP=(i=1)=>(console.warn('TSL: timerGlobal() is deprecated. Use "time" instead.'),Qr.mul(i)),pP=(i=1)=>(console.warn('TSL: timerDelta() is deprecated. Use "deltaTime" instead.'),iy.mul(i)),mP=(i=Qr)=>i.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5),gP=(i=Qr)=>i.fract().round(),_P=(i=Qr)=>i.add(.5).fract().mul(2).sub(1).abs(),xP=(i=Qr)=>i.fract(),vP=k(([i,e,t=fe(.5)])=>Qv(i.sub(t),e).add(t)),yP=k(([i,e,t=fe(.5)])=>{const n=i.sub(t),s=n.dot(n),o=s.mul(s).mul(e);return i.add(n.mul(o))}),SP=k(({position:i=null,horizontal:e=!0,vertical:t=!1})=>{let n;i!==null?(n=ws.toVar(),n[3][0]=i.x,n[3][1]=i.y,n[3][2]=i.z):n=ws;const s=yi.mul(n);return $a(e)&&(s[0][0]=ws[0].length(),s[0][1]=0,s[0][2]=0),$a(t)&&(s[1][0]=0,s[1][1]=ws[1].length(),s[1][2]=0),s[2][0]=0,s[2][1]=0,s[2][2]=1,hc.mul(s).mul(Zt)}),MP=k(([i=null])=>{const e=su();return su(Gp(i)).sub(e).lessThan(0).select(hr,i)});class TP extends qe{static get type(){return"SpriteSheetUVNode"}constructor(e,t=Wt(),n=P(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:s,height:r}=n,o=e.mod(s.mul(r)).floor(),a=o.mod(s),c=r.sub(o.add(1).div(s).ceil()),l=n.reciprocal(),u=fe(a,c);return t.add(u).mul(l)}}const wP=K(TP);class EP extends qe{static get type(){return"TriplanarTexturesNode"}constructor(e,t=null,n=null,s=P(1),r=Zt,o=jn){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=s,this.positionNode=r,this.normalNode=o}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:s,positionNode:r,normalNode:o}=this;let a=o.abs().normalize();a=a.div(a.dot(B(1)));const c=r.yz.mul(s),l=r.zx.mul(s),u=r.xy.mul(s),h=e.value,d=t!==null?t.value:h,p=n!==null?n.value:h,_=kn(h,c).mul(a.x),x=kn(d,l).mul(a.y),m=kn(p,u).mul(a.z);return nn(_,x,m)}}const sy=K(EP),bP=(...i)=>sy(...i),To=new xs,Ar=new R,wo=new R,cd=new R,va=new Ne,il=new R(0,0,-1),zi=new _t,ya=new R,sl=new R,Sa=new _t,rl=new de,ou=new lr,AP=hr.flipX();ou.depthTexture=new Zr(1,1);let ld=!1;class qp extends Us{static get type(){return"ReflectorNode"}constructor(e={}){super(e.defaultTexture||ou.texture,AP),this._reflectorBaseNode=e.reflector||new NP(this,e),this._depthNode=null,this.setUpdateMatrix(!1)}get reflector(){return this._reflectorBaseNode}get target(){return this._reflectorBaseNode.target}getDepthNode(){if(this._depthNode===null){if(this._reflectorBaseNode.depth!==!0)throw new Error("THREE.ReflectorNode: Depth node can only be requested when the reflector is created with { depth: true }. ");this._depthNode=ee(new qp({defaultTexture:ou.depthTexture,reflector:this._reflectorBaseNode}))}return this._depthNode}setup(e){return e.object.isQuadMesh||this._reflectorBaseNode.build(e),super.setup(e)}clone(){const e=new this.constructor(this.reflectorNode);return e._reflectorBaseNode=this._reflectorBaseNode,e}}class NP extends qe{static get type(){return"ReflectorBaseNode"}constructor(e,t={}){super();const{target:n=new Yn,resolution:s=1,generateMipmaps:r=!1,bounces:o=!0,depth:a=!1}=t;this.textureNode=e,this.target=n,this.resolution=s,this.generateMipmaps=r,this.bounces=o,this.depth=a,this.updateBeforeType=o?Et.RENDER:Et.FRAME,this.virtualCameras=new WeakMap,this.renderTargets=new WeakMap}_updateResolution(e,t){const n=this.resolution;t.getDrawingBufferSize(rl),e.setSize(Math.round(rl.width*n),Math.round(rl.height*n))}setup(e){return this._updateResolution(ou,e.renderer),super.setup(e)}getVirtualCamera(e){let t=this.virtualCameras.get(e);return t===void 0&&(t=e.clone(),this.virtualCameras.set(e,t)),t}getRenderTarget(e){let t=this.renderTargets.get(e);return t===void 0&&(t=new lr(0,0,{type:ns}),this.generateMipmaps===!0&&(t.texture.minFilter=TM,t.texture.generateMipmaps=!0),this.depth===!0&&(t.depthTexture=new Zr),this.renderTargets.set(e,t)),t}updateBefore(e){if(this.bounces===!1&&ld)return!1;ld=!0;const{scene:t,camera:n,renderer:s,material:r}=e,{target:o}=this,a=this.getVirtualCamera(n),c=this.getRenderTarget(a);if(s.getDrawingBufferSize(rl),this._updateResolution(c,s),wo.setFromMatrixPosition(o.matrixWorld),cd.setFromMatrixPosition(n.matrixWorld),va.extractRotation(o.matrixWorld),Ar.set(0,0,1),Ar.applyMatrix4(va),ya.subVectors(wo,cd),ya.dot(Ar)>0)return;ya.reflect(Ar).negate(),ya.add(wo),va.extractRotation(n.matrixWorld),il.set(0,0,-1),il.applyMatrix4(va),il.add(cd),sl.subVectors(wo,il),sl.reflect(Ar).negate(),sl.add(wo),a.coordinateSystem=n.coordinateSystem,a.position.copy(ya),a.up.set(0,1,0),a.up.applyMatrix4(va),a.up.reflect(Ar),a.lookAt(sl),a.near=n.near,a.far=n.far,a.updateMatrixWorld(),a.projectionMatrix.copy(n.projectionMatrix),To.setFromNormalAndCoplanarPoint(Ar,wo),To.applyMatrix4(a.matrixWorldInverse),zi.set(To.normal.x,To.normal.y,To.normal.z,To.constant);const l=a.projectionMatrix;Sa.x=(Math.sign(zi.x)+l.elements[8])/l.elements[0],Sa.y=(Math.sign(zi.y)+l.elements[9])/l.elements[5],Sa.z=-1,Sa.w=(1+l.elements[10])/l.elements[14],zi.multiplyScalar(1/zi.dot(Sa));const u=0;l.elements[2]=zi.x,l.elements[6]=zi.y,l.elements[10]=s.coordinateSystem===Rs?zi.z-u:zi.z+1-u,l.elements[14]=zi.w,this.textureNode.value=c.texture,this.depth===!0&&(this.textureNode.getDepthNode().value=c.depthTexture),r.visible=!1;const h=s.getRenderTarget(),d=s.getMRT(),p=s.autoClear;s.setMRT(null),s.setRenderTarget(c),s.autoClear=!0,s.render(t,a),s.setMRT(d),s.setRenderTarget(h),s.autoClear=p,r.visible=!0,ld=!1}}const RP=i=>ee(new qp(i)),ud=new dp(-1,1,1,-1,0,1);class CP extends Zn{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t(t,2))}}const PP=new CP;class Yp extends W{constructor(e=null){super(PP,e),this.camera=ud,this.isQuadMesh=!0}async renderAsync(e){return e.renderAsync(this,ud)}render(e){e.render(this,ud)}}const LP=new de;class DP extends Us{static get type(){return"RTTNode"}constructor(e,t=null,n=null,s={type:ns}){const r=new lr(t,n,s);super(r.texture,Wt()),this.node=e,this.width=t,this.height=n,this.pixelRatio=1,this.renderTarget=r,this.textureNeedsUpdate=!0,this.autoUpdate=!0,this._rttNode=null,this._quadMesh=new Yp(new ta),this.updateBeforeType=Et.RENDER}get autoSize(){return this.width===null}setup(e){return this._rttNode=this.node.context(e.getSharedContext()),this._quadMesh.material.name="RTT",this._quadMesh.material.needsUpdate=!0,super.setup(e)}setSize(e,t){this.width=e,this.height=t;const n=e*this.pixelRatio,s=t*this.pixelRatio;this.renderTarget.setSize(n,s),this.textureNeedsUpdate=!0}setPixelRatio(e){this.pixelRatio=e,this.setSize(this.width,this.height)}updateBefore({renderer:e}){if(this.textureNeedsUpdate===!1&&this.autoUpdate===!1)return;if(this.textureNeedsUpdate=!1,this.autoSize===!0){this.pixelRatio=e.getPixelRatio();const n=e.getSize(LP);this.setSize(n.width,n.height)}this._quadMesh.material.fragmentNode=this._rttNode;const t=e.getRenderTarget();e.setRenderTarget(this.renderTarget),this._quadMesh.render(e),e.setRenderTarget(t)}clone(){const e=new Us(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e.referenceNode=this,e}}const ry=(i,...e)=>ee(new DP(ee(i),...e)),IP=(i,...e)=>i.isTextureNode?i:i.isPassNode?i.getTextureNode():ry(i,...e),No=k(([i,e,t],n)=>{let s;n.renderer.coordinateSystem===Rs?(i=fe(i.x,i.y.oneMinus()).mul(2).sub(1),s=et(B(i,e),1)):s=et(B(i.x,i.y.oneMinus(),e).mul(2).sub(1),1);const r=et(t.mul(s));return r.xyz.div(r.w)}),UP=k(([i,e])=>{const t=e.mul(et(i,1)),n=t.xy.div(t.w).mul(.5).add(.5).toVar();return fe(n.x,n.y.oneMinus())}),OP=k(([i,e,t])=>{const n=nr(jt(e)),s=dn(i.mul(n)).toVar(),r=jt(e,s).toVar(),o=jt(e,s.sub(dn(2,0))).toVar(),a=jt(e,s.sub(dn(1,0))).toVar(),c=jt(e,s.add(dn(1,0))).toVar(),l=jt(e,s.add(dn(2,0))).toVar(),u=jt(e,s.add(dn(0,2))).toVar(),h=jt(e,s.add(dn(0,1))).toVar(),d=jt(e,s.sub(dn(0,1))).toVar(),p=jt(e,s.sub(dn(0,2))).toVar(),_=Ft(xt(P(2).mul(a).sub(o),r)).toVar(),x=Ft(xt(P(2).mul(c).sub(l),r)).toVar(),m=Ft(xt(P(2).mul(h).sub(u),r)).toVar(),f=Ft(xt(P(2).mul(d).sub(p),r)).toVar(),w=No(i,r,t).toVar(),y=_.lessThan(x).select(w.sub(No(i.sub(fe(P(1).div(n.x),0)),a,t)),w.negate().add(No(i.add(fe(P(1).div(n.x),0)),c,t))),v=m.lessThan(f).select(w.sub(No(i.add(fe(0,P(1).div(n.y))),h,t)),w.negate().add(No(i.sub(fe(0,P(1).div(n.y))),d,t)));return Jr(Ru(y,v))});class FP extends ka{constructor(e,t,n=Float32Array){const s=ArrayBuffer.isView(e)?e:new n(e*t);super(s,t),this.isStorageInstancedBufferAttribute=!0}}class VP extends ci{constructor(e,t,n=Float32Array){const s=ArrayBuffer.isView(e)?e:new n(e*t);super(s,t),this.isStorageBufferAttribute=!0}}class zP extends Kr{static get type(){return"StorageArrayElementNode"}constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}setup(e){return e.isAvailable("storageBuffer")===!1&&this.node.isPBO===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n;const s=e.context.assign;if(e.isAvailable("storageBuffer")===!1?this.node.isPBO===!0&&s!==!0&&(this.node.value.isInstancedBufferAttribute||e.shaderStage!=="compute")?n=e.generatePBO(this):n=this.node.build(e):n=super.generate(e),s!==!0){const r=this.getNodeType(e);n=e.format(n,r,t)}return n}}const BP=K(zP);class kP extends zp{static get type(){return"StorageBufferNode"}constructor(e,t=null,n=0){t===null&&(e.isStorageBufferAttribute||e.isStorageInstancedBufferAttribute)&&(t=pN(e.itemSize),n=e.count),super(e,t,n),this.isStorageBufferNode=!0,this.access=Ki.READ_WRITE,this.isAtomic=!1,this.isPBO=!1,this._attribute=null,this._varying=null,this.global=!0,e.isStorageBufferAttribute!==!0&&e.isStorageInstancedBufferAttribute!==!0&&(e.isInstancedBufferAttribute?e.isStorageInstancedBufferAttribute=!0:e.isStorageBufferAttribute=!0)}getHash(e){if(this.bufferCount===0){let t=e.globalCache.getData(this.value);return t===void 0&&(t={node:this},e.globalCache.setData(this.value,t)),t.node.uuid}return this.uuid}getInputType(){return this.value.isIndirectStorageBufferAttribute?"indirectStorageBuffer":"storageBuffer"}element(e){return BP(this,e)}setPBO(e){return this.isPBO=e,this}getPBO(){return this.isPBO}setAccess(e){return this.access=e,this}toReadOnly(){return this.setAccess(Ki.READ_ONLY)}setAtomic(e){return this.isAtomic=e,this}toAtomic(){return this.setAtomic(!0)}getAttributeData(){return this._attribute===null&&(this._attribute=uc(this.value),this._varying=ui(this._attribute)),{attribute:this._attribute,varying:this._varying}}getNodeType(e){if(e.isAvailable("storageBuffer")||e.isAvailable("indirectStorageBuffer"))return super.getNodeType(e);const{attribute:t}=this.getAttributeData();return t.getNodeType(e)}generate(e){if(e.isAvailable("storageBuffer")||e.isAvailable("indirectStorageBuffer"))return super.generate(e);const{attribute:t,varying:n}=this.getAttributeData(),s=n.build(e);return e.registerTransform(s,t),s}}const Iu=(i,e=null,t=0)=>ee(new kP(i,e,t)),HP=(i,e,t)=>(console.warn('THREE.TSL: "storageObject()" is deprecated. Use "storage().setPBO( true )" instead.'),Iu(i,e,t).setPBO(!0)),GP=(i,e="float")=>{const t=ax(e),n=ox(e),s=new VP(i,t,n);return Iu(s,e,i)},WP=(i,e="float")=>{const t=ax(e),n=ox(e),s=new FP(i,t,n);return Iu(s,e,i)};class XP extends Q0{static get type(){return"VertexColorNode"}constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let s;return n===!0?s=super.generate(e):s=e.generateConst(this.nodeType,new _t(1,1,1,1)),s}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}const $P=i=>ee(new XP(i));class qP extends qe{static get type(){return"PointUVNode"}constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}const YP=_e(qP),Ma=new is,hd=new Ne;class qn extends qe{static get type(){return"SceneNode"}constructor(e=qn.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let s;return t===qn.BACKGROUND_BLURRINESS?s=Qt("backgroundBlurriness","float",n):t===qn.BACKGROUND_INTENSITY?s=Qt("backgroundIntensity","float",n):t===qn.BACKGROUND_ROTATION?s=pt("mat4").label("backgroundRotation").setGroup(wt).onRenderUpdate(()=>{const r=n.background;return r!==null&&r.isTexture&&r.mapping!==Zf?(Ma.copy(n.backgroundRotation),Ma.x*=-1,Ma.y*=-1,Ma.z*=-1,hd.makeRotationFromEuler(Ma)):hd.identity(),hd}):console.error("THREE.SceneNode: Unknown scope:",t),s}}qn.BACKGROUND_BLURRINESS="backgroundBlurriness";qn.BACKGROUND_INTENSITY="backgroundIntensity";qn.BACKGROUND_ROTATION="backgroundRotation";const jP=_e(qn,qn.BACKGROUND_BLURRINESS),ZP=_e(qn,qn.BACKGROUND_INTENSITY),KP=_e(qn,qn.BACKGROUND_ROTATION);class JP extends Us{static get type(){return"StorageTextureNode"}constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStorageTextureNode=!0,this.access=Ki.WRITE_ONLY}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}setAccess(e){return this.access=e,this}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}toReadWrite(){return this.setAccess(Ki.READ_WRITE)}toReadOnly(){return this.setAccess(Ki.READ_ONLY)}toWriteOnly(){return this.setAccess(Ki.WRITE_ONLY)}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:s}=t,r=super.generate(e,"property"),o=n.build(e,"uvec2"),a=s.build(e,"vec4"),c=e.generateTextureStore(e,r,o,a);e.addLineFlowCode(c,this)}}const oy=K(JP),QP=(i,e,t)=>{const n=oy(i,e,t);return t!==null&&n.append(),n};class eL extends Cu{static get type(){return"UserDataNode"}constructor(e,t,n=null){super(e,t,n),this.userData=n}updateReference(e){return this.reference=this.userData!==null?this.userData:e.object.userData,this.reference}}const tL=(i,e,t)=>ee(new eL(i,e,t)),Zg=new WeakMap;class nL extends cn{static get type(){return"VelocityNode"}constructor(){super("vec2"),this.projectionMatrix=null,this.updateType=Et.OBJECT,this.updateAfterType=Et.OBJECT,this.previousModelWorldMatrix=pt(new Ne),this.previousProjectionMatrix=pt(new Ne).setGroup(wt),this.previousCameraViewMatrix=pt(new Ne)}setProjectionMatrix(e){this.projectionMatrix=e}update({frameId:e,camera:t,object:n}){const s=Kg(n);this.previousModelWorldMatrix.value.copy(s);const r=ay(t);r.frameId!==e&&(r.frameId=e,r.previousProjectionMatrix===void 0?(r.previousProjectionMatrix=new Ne,r.previousCameraViewMatrix=new Ne,r.currentProjectionMatrix=new Ne,r.currentCameraViewMatrix=new Ne,r.previousProjectionMatrix.copy(this.projectionMatrix||t.projectionMatrix),r.previousCameraViewMatrix.copy(t.matrixWorldInverse)):(r.previousProjectionMatrix.copy(r.currentProjectionMatrix),r.previousCameraViewMatrix.copy(r.currentCameraViewMatrix)),r.currentProjectionMatrix.copy(this.projectionMatrix||t.projectionMatrix),r.currentCameraViewMatrix.copy(t.matrixWorldInverse),this.previousProjectionMatrix.value.copy(r.previousProjectionMatrix),this.previousCameraViewMatrix.value.copy(r.previousCameraViewMatrix))}updateAfter({object:e}){Kg(e).copy(e.matrixWorld)}setup(){const e=this.projectionMatrix===null?hc:pt(this.projectionMatrix),t=this.previousCameraViewMatrix.mul(this.previousModelWorldMatrix),n=e.mul(dc).mul(Zt),s=this.previousProjectionMatrix.mul(t).mul(nu),r=n.xy.div(n.w),o=s.xy.div(s.w);return xt(r,o)}}function ay(i){let e=Zg.get(i);return e===void 0&&(e={},Zg.set(i,e)),e}function Kg(i,e=0){const t=ay(i);let n=t[e];return n===void 0&&(t[e]=n=new Ne),n}const iL=_e(nL),cy=k(([i,e])=>li(1,i.oneMinus().div(e)).oneMinus()).setLayout({name:"blendBurn",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),ly=k(([i,e])=>li(i.div(e.oneMinus()),1)).setLayout({name:"blendDodge",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),uy=k(([i,e])=>i.oneMinus().mul(e.oneMinus()).oneMinus()).setLayout({name:"blendScreen",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),hy=k(([i,e])=>en(i.mul(2).mul(e),i.oneMinus().mul(2).mul(e.oneMinus()).oneMinus(),Nu(.5,i))).setLayout({name:"blendOverlay",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),sL=k(([i,e])=>{const t=e.a.add(i.a.mul(e.a.oneMinus()));return et(e.rgb.mul(e.a).add(i.rgb.mul(i.a).mul(e.a.oneMinus())).div(t),t)}).setLayout({name:"blendColor",type:"vec4",inputs:[{name:"base",type:"vec4"},{name:"blend",type:"vec4"}]}),rL=(...i)=>(console.warn('THREE.TSL: "burn" has been renamed. Use "blendBurn" instead.'),cy(i)),oL=(...i)=>(console.warn('THREE.TSL: "dodge" has been renamed. Use "blendDodge" instead.'),ly(i)),aL=(...i)=>(console.warn('THREE.TSL: "screen" has been renamed. Use "blendScreen" instead.'),uy(i)),cL=(...i)=>(console.warn('THREE.TSL: "overlay" has been renamed. Use "blendOverlay" instead.'),hy(i)),lL=k(([i])=>jp(i.rgb)),uL=k(([i,e=P(1)])=>e.mix(jp(i.rgb),i.rgb)),hL=k(([i,e=P(1)])=>{const t=nn(i.r,i.g,i.b).div(3),n=i.r.max(i.g.max(i.b)),s=n.sub(t).mul(e).mul(-3);return en(i.rgb,n,s)}),dL=k(([i,e=P(1)])=>{const t=B(.57735,.57735,.57735),n=e.cos();return B(i.rgb.mul(n).add(t.cross(i.rgb).mul(e.sin()).add(t.mul(ur(t,i.rgb).mul(n.oneMinus())))))}),jp=(i,e=B(lt.getLuminanceCoefficients(new R)))=>ur(i,e),fL=k(([i,e=B(1),t=B(0),n=B(1),s=P(1),r=B(lt.getLuminanceCoefficients(new R,ar))])=>{const o=i.rgb.dot(B(r)),a=yn(i.rgb.mul(e).add(t),0).toVar(),c=a.pow(n).toVar();return mt(a.r.greaterThan(0),()=>{a.r.assign(c.r)}),mt(a.g.greaterThan(0),()=>{a.g.assign(c.g)}),mt(a.b.greaterThan(0),()=>{a.b.assign(c.b)}),a.assign(o.add(a.sub(o).mul(s))),et(a.rgb,i.a)});class pL extends cn{static get type(){return"PosterizeNode"}constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const mL=K(pL),gL=new de;class dy extends Us{static get type(){return"PassTextureNode"}constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return e.object.isQuadMesh&&this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class Jg extends dy{static get type(){return"PassMultipleTextureNode"}constructor(e,t,n=!1){super(e,null),this.textureName=t,this.previousTexture=n}updateTexture(){this.value=this.previousTexture?this.passNode.getPreviousTexture(this.textureName):this.passNode.getTexture(this.textureName)}setup(e){return this.updateTexture(),super.setup(e)}clone(){return new this.constructor(this.passNode,this.textureName,this.previousTexture)}}class os extends cn{static get type(){return"PassNode"}constructor(e,t,n,s={}){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this.options=s,this._pixelRatio=1,this._width=1,this._height=1;const r=new Zr;r.isRenderTargetTexture=!0,r.name="depth";const o=new lr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ns,...s});o.texture.name="output",o.depthTexture=r,this.renderTarget=o,this._textures={output:o.texture,depth:r},this._textureNodes={},this._linearDepthNodes={},this._viewZNodes={},this._previousTextures={},this._previousTextureNodes={},this._cameraNear=pt(0),this._cameraFar=pt(0),this._mrt=null,this.isPassNode=!0,this.updateBeforeType=Et.FRAME}setMRT(e){return this._mrt=e,this}getMRT(){return this._mrt}isGlobal(){return!0}getTexture(e){let t=this._textures[e];return t===void 0&&(t=this.renderTarget.texture.clone(),t.name=e,this._textures[e]=t,this.renderTarget.textures.push(t)),t}getPreviousTexture(e){let t=this._previousTextures[e];return t===void 0&&(t=this.getTexture(e).clone(),this._previousTextures[e]=t),t}toggleTexture(e){const t=this._previousTextures[e];if(t!==void 0){const n=this._textures[e],s=this.renderTarget.textures.indexOf(n);this.renderTarget.textures[s]=t,this._textures[e]=t,this._previousTextures[e]=n,this._textureNodes[e].updateTexture(),this._previousTextureNodes[e].updateTexture()}}getTextureNode(e="output"){let t=this._textureNodes[e];return t===void 0&&(t=ee(new Jg(this,e)),t.updateTexture(),this._textureNodes[e]=t),t}getPreviousTextureNode(e="output"){let t=this._previousTextureNodes[e];return t===void 0&&(this._textureNodes[e]===void 0&&this.getTextureNode(e),t=ee(new Jg(this,e,!0)),t.updateTexture(),this._previousTextureNodes[e]=t),t}getViewZNode(e="depth"){let t=this._viewZNodes[e];if(t===void 0){const n=this._cameraNear,s=this._cameraFar;this._viewZNodes[e]=t=Wp(this.getTextureNode(e),n,s)}return t}getLinearDepthNode(e="depth"){let t=this._linearDepthNodes[e];if(t===void 0){const n=this._cameraNear,s=this._cameraFar,r=this.getViewZNode(e);this._linearDepthNodes[e]=t=Bo(r,n,s)}return t}setup({renderer:e}){return this.renderTarget.samples=this.options.samples===void 0?e.samples:this.options.samples,e.backend.isWebGLBackend===!0&&(this.renderTarget.samples=0),this.scope===os.COLOR?this.getTextureNode():this.getLinearDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:s}=this;this._pixelRatio=t.getPixelRatio();const r=t.getSize(gL);this.setSize(r.width,r.height);const o=t.getRenderTarget(),a=t.getMRT();this._cameraNear.value=s.near,this._cameraFar.value=s.far;for(const c in this._previousTextures)this.toggleTexture(c);t.setRenderTarget(this.renderTarget),t.setMRT(this._mrt),t.render(n,s),t.setRenderTarget(o),t.setMRT(a)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget.setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}os.COLOR="color";os.DEPTH="depth";const _L=(i,e,t)=>ee(new os(os.COLOR,i,e,t)),xL=(i,e)=>ee(new dy(i,e)),vL=(i,e,t)=>ee(new os(os.DEPTH,i,e,t));class yL extends os{static get type(){return"ToonOutlinePassNode"}constructor(e,t,n,s,r){super(os.COLOR,e,t),this.colorNode=n,this.thicknessNode=s,this.alphaNode=r,this._materialCache=new WeakMap}updateBefore(e){const{renderer:t}=e,n=t.getRenderObjectFunction();t.setRenderObjectFunction((s,r,o,a,c,l,u,h)=>{if((c.isMeshToonMaterial||c.isMeshToonNodeMaterial)&&c.wireframe===!1){const d=this._getOutlineMaterial(c);t.renderObject(s,r,o,a,d,l,u,h)}t.renderObject(s,r,o,a,c,l,u,h)}),super.updateBefore(e),t.setRenderObjectFunction(n)}_createMaterial(){const e=new ta;e.isMeshToonOutlineMaterial=!0,e.name="Toon_Outline",e.side=Kt;const t=jn.negate(),n=hc.mul(dc),s=P(1),r=n.mul(et(Zt,1)),o=n.mul(et(Zt.add(t),1)),a=Jr(r.sub(o));return e.vertexNode=r.add(a.mul(this.thicknessNode).mul(r.w).mul(s)),e.colorNode=et(this.colorNode,this.alphaNode),e}_getOutlineMaterial(e){let t=this._materialCache.get(e);return t===void 0&&(t=this._createMaterial(),this._materialCache.set(e,t)),t}}const SL=(i,e,t=new Ze(0,0,0),n=.003,s=1)=>ee(new yL(i,e,ee(t),ee(n),ee(s))),ML=k(([i,e])=>i.mul(e).clamp()).setLayout({name:"linearToneMapping",type:"vec3",inputs:[{name:"color",type:"vec3"},{name:"exposure",type:"float"}]}),TL=k(([i,e])=>(i=i.mul(e),i.div(i.add(1)).clamp())).setLayout({name:"reinhardToneMapping",type:"vec3",inputs:[{name:"color",type:"vec3"},{name:"exposure",type:"float"}]}),wL=k(([i,e])=>{i=i.mul(e),i=i.sub(.004).max(0);const t=i.mul(i.mul(6.2).add(.5)),n=i.mul(i.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}).setLayout({name:"cineonToneMapping",type:"vec3",inputs:[{name:"color",type:"vec3"},{name:"exposure",type:"float"}]}),EL=k(([i])=>{const e=i.mul(i.add(.0245786)).sub(90537e-9),t=i.mul(i.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),bL=k(([i,e])=>{const t=vi(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=vi(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return i=i.mul(e).div(.6),i=t.mul(i),i=EL(i),i=n.mul(i),i.clamp()}).setLayout({name:"acesFilmicToneMapping",type:"vec3",inputs:[{name:"color",type:"vec3"},{name:"exposure",type:"float"}]}),AL=vi(B(1.6605,-.1246,-.0182),B(-.5876,1.1329,-.1006),B(-.0728,-.0083,1.1187)),NL=vi(B(.6274,.0691,.0164),B(.3293,.9195,.088),B(.0433,.0113,.8956)),RL=k(([i])=>{const e=B(i).toVar(),t=B(e.mul(e)).toVar(),n=B(t.mul(t)).toVar();return P(15.5).mul(n.mul(t)).sub(it(40.14,n.mul(e))).add(it(31.96,n).sub(it(6.868,t.mul(e))).add(it(.4298,t).add(it(.1191,e).sub(.00232))))}),CL=k(([i,e])=>{const t=B(i).toVar(),n=vi(B(.856627153315983,.137318972929847,.11189821299995),B(.0951212405381588,.761241990602591,.0767994186031903),B(.0482516061458583,.101439036467562,.811302368396859)),s=vi(B(1.1271005818144368,-.1413297634984383,-.14132976349843826),B(-.11060664309660323,1.157823702216272,-.11060664309660294),B(-.016493938717834573,-.016493938717834257,1.2519364065950405)),r=P(-12.47393),o=P(4.026069);return t.mulAssign(e),t.assign(NL.mul(t)),t.assign(n.mul(t)),t.assign(yn(t,1e-10)),t.assign(As(t)),t.assign(t.sub(r).div(o.sub(r))),t.assign(Ds(t,0,1)),t.assign(RL(t)),t.assign(s.mul(t)),t.assign(Ii(yn(B(0),t),B(2.2))),t.assign(AL.mul(t)),t.assign(Ds(t,0,1)),t}).setLayout({name:"agxToneMapping",type:"vec3",inputs:[{name:"color",type:"vec3"},{name:"exposure",type:"float"}]}),PL=k(([i,e])=>{const t=P(.76),n=P(.15);i=i.mul(e);const s=li(i.r,li(i.g,i.b)),r=Xn(s.lessThan(.08),s.sub(it(6.25,s.mul(s))),.04);i.subAssign(r);const o=yn(i.r,yn(i.g,i.b));mt(o.lessThan(t),()=>i);const a=xt(1,t),c=xt(1,a.mul(a).div(o.add(a.sub(t))));i.mulAssign(c.div(o));const l=xt(1,Ls(1,n.mul(o.sub(c)).add(1)));return en(i,B(c),l)}).setLayout({name:"neutralToneMapping",type:"vec3",inputs:[{name:"color",type:"vec3"},{name:"exposure",type:"float"}]});class hn extends qe{static get type(){return"CodeNode"}constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.includes=t,this.language=n}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const s of t)s.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}const Uu=K(hn),LL=(i,e)=>Uu(i,e,"js"),DL=(i,e)=>Uu(i,e,"wgsl"),IL=(i,e)=>Uu(i,e,"glsl");class UL extends hn{static get type(){return"FunctionNode"}constructor(e="",t=[],n=""){super(e,t,n)}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),s=n.name,r=n.type,o=e.getCodeFromNode(this,r);s!==""&&(o.name=s);const a=e.getPropertyName(o),c=this.getNodeFunction(e).getCode(a);return o.code=c+`
`,t==="property"?a:e.format(`${a}()`,r,t)}}const fy=(i,e=[],t="")=>{for(let r=0;r<e.length;r++){const o=e[r];typeof o=="function"&&(e[r]=o.functionNode)}const n=ee(new UL(i,e,t)),s=(...r)=>n.call(...r);return s.functionNode=n,s},OL=(i,e)=>fy(i,e,"glsl"),FL=(i,e)=>fy(i,e,"wgsl");class VL extends qe{static get type(){return"ScriptableValueNode"}constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outputType=null,this.events=new Fs,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:P()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=ux(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=hx(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const Tl=K(VL);class py extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const s=t(...n);return this.set(e,s),s}}}class zL{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const wl=new py;class BL extends qe{static get type(){return"ScriptableNode"}constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new py,this._output=Tl(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=Tl(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=Tl(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s(...t)}async callAsync(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s.constructor.name==="AsyncFunction"?await s(...t):s(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new zL(this),s=wl.get("THREE"),r=wl.get("TSL"),o=this.getMethod(),a=[n,this._local,wl,e,t,s,r];this._object=o(...a);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:P()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),s="var "+n+`; var output = {};
`,r=`
return { ...output, `+n+" };",o=s+this.codeNode.code+r;return this._method=new Function(...e,o),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}getCacheKey(e){const t=[dN(this.source),this.getDefaultOutputNode().getCacheKey(e)];for(const n in this.parameters)t.push(this.parameters[n].getCacheKey(e));return ix(t)}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const kL=K(BL);function my(i){let e;const t=i.context.getViewZ;return t!==void 0&&(e=t(this)),(e||fn.z).negate()}const gy=k(([i,e],t)=>{const n=my(t);return ea(i,e,n)}),_y=k(([i],e)=>{const t=my(e);return i.mul(i,t,t).negate().exp().oneMinus()}),Zp=k(([i,e])=>et(e.toFloat().mix(Ya.rgb,i.toVec3()),Ya.a));function HL(i,e,t){return console.warn('THREE.TSL: "rangeFog( color, near, far )" is deprecated. Use "fog( color, rangeFogFactor( near, far ) )" instead.'),Zp(i,gy(e,t))}function GL(i,e){return console.warn('THREE.TSL: "densityFog( color, density )" is deprecated. Use "fog( color, densityFogFactor( density ) )" instead.'),Zp(i,_y(e))}let Nr=null,Rr=null;class WL extends qe{static get type(){return"RangeNode"}constructor(e=P(),t=P()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(er(this.minNode.value)),n=e.getTypeLength(er(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.count>1?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.count>1){const s=this.minNode.value,r=this.maxNode.value,o=e.getTypeLength(er(s)),a=e.getTypeLength(er(r));Nr=Nr||new _t,Rr=Rr||new _t,Nr.setScalar(0),Rr.setScalar(0),o===1?Nr.setScalar(s):s.isColor?Nr.set(s.r,s.g,s.b,1):Nr.set(s.x,s.y,s.z||0,s.w||0),a===1?Rr.setScalar(r):r.isColor?Rr.set(r.r,r.g,r.b,1):Rr.set(r.x,r.y,r.z||0,r.w||0);const c=4,l=c*t.count,u=new Float32Array(l);for(let d=0;d<l;d++){const p=d%c,_=Nr.getComponent(p),x=Rr.getComponent(p);u[d]=yu.lerp(_,x,Math.random())}const h=this.getNodeType(e);if(t.count<=4096)n=pc(u,"vec4",t.count).element(xc).convert(h);else{const d=new ka(u,4);e.geometry.setAttribute("__range"+this.id,d),n=tu(d).convert(h)}}else n=P(0);return n}}const XL=K(WL);class $L extends qe{static get type(){return"ComputeBuiltinNode"}constructor(e,t){super(t),this._builtinName=e}getHash(e){return this.getBuiltinName(e)}getNodeType(){return this.nodeType}setBuiltinName(e){return this._builtinName=e,this}getBuiltinName(){return this._builtinName}hasBuiltin(e){e.hasBuiltin(this._builtinName)}generate(e,t){const n=this.getBuiltinName(e),s=this.getNodeType(e);return e.shaderStage==="compute"?e.format(n,s,t):(console.warn(`ComputeBuiltinNode: Compute built-in value ${n} can not be accessed in the ${e.shaderStage} stage`),e.generateConst(s))}serialize(e){super.serialize(e),e.global=this.global,e._builtinName=this._builtinName}deserialize(e){super.deserialize(e),this.global=e.global,this._builtinName=e._builtinName}}const Ou=(i,e)=>ee(new $L(i,e)),qL=Ou("numWorkgroups","uvec3"),YL=Ou("workgroupId","uvec3"),jL=Ou("localId","uvec3"),ZL=Ou("subgroupSize","uint");class KL extends qe{constructor(e){super(),this.scope=e}generate(e){const{scope:t}=this,{renderer:n}=e;n.backend.isWebGLBackend===!0?e.addFlowCode(`	// ${t}Barrier 
`):e.addLineFlowCode(`${t}Barrier()`,this)}}const Kp=K(KL),JL=()=>Kp("workgroup").append(),QL=()=>Kp("storage").append(),eD=()=>Kp("texture").append();class tD extends Kr{constructor(e,t){super(e,t),this.isWorkgroupInfoElementNode=!0}generate(e,t){let n;const s=e.context.assign;if(n=super.generate(e),s!==!0){const r=this.getNodeType(e);n=e.format(n,r,t)}return n}}class nD extends qe{constructor(e,t,n=0){super(t),this.bufferType=t,this.bufferCount=n,this.isWorkgroupInfoNode=!0,this.elementType=t,this.scope=e}label(e){return this.name=e,this}setScope(e){return this.scope=e,this}getElementType(){return this.elementType}getInputType(){return`${this.scope}Array`}element(e){return ee(new tD(this,e))}generate(e){return e.getScopedArray(this.name||`${this.scope}Array_${this.id}`,this.scope.toLowerCase(),this.bufferType,this.bufferCount)}}const iD=(i,e)=>ee(new nD("Workgroup",i,e));class Sn extends cn{static get type(){return"AtomicFunctionNode"}constructor(e,t,n,s=null){super("uint"),this.method=e,this.pointerNode=t,this.valueNode=n,this.storeNode=s}getInputType(e){return this.pointerNode.getNodeType(e)}getNodeType(e){return this.getInputType(e)}generate(e){const t=this.method,n=this.getNodeType(e),s=this.getInputType(e),r=this.pointerNode,o=this.valueNode,a=[];a.push(`&${r.build(e,s)}`),a.push(o.build(e,s));const c=`${e.getMethod(t,n)}( ${a.join(", ")} )`;if(this.storeNode!==null){const l=this.storeNode.build(e,s);e.addLineFlowCode(`${l} = ${c}`,this)}else e.addLineFlowCode(c,this)}}Sn.ATOMIC_LOAD="atomicLoad";Sn.ATOMIC_STORE="atomicStore";Sn.ATOMIC_ADD="atomicAdd";Sn.ATOMIC_SUB="atomicSub";Sn.ATOMIC_MAX="atomicMax";Sn.ATOMIC_MIN="atomicMin";Sn.ATOMIC_AND="atomicAnd";Sn.ATOMIC_OR="atomicOr";Sn.ATOMIC_XOR="atomicXor";const sD=K(Sn),zs=(i,e,t,n=null)=>{const s=sD(i,e,t,n);return s.append(),s},rD=(i,e,t=null)=>zs(Sn.ATOMIC_STORE,i,e,t),oD=(i,e,t=null)=>zs(Sn.ATOMIC_ADD,i,e,t),aD=(i,e,t=null)=>zs(Sn.ATOMIC_SUB,i,e,t),cD=(i,e,t=null)=>zs(Sn.ATOMIC_MAX,i,e,t),lD=(i,e,t=null)=>zs(Sn.ATOMIC_MIN,i,e,t),uD=(i,e,t=null)=>zs(Sn.ATOMIC_AND,i,e,t),hD=(i,e,t=null)=>zs(Sn.ATOMIC_OR,i,e,t),dD=(i,e,t=null)=>zs(Sn.ATOMIC_XOR,i,e,t);let ol;function yc(i){ol=ol||new WeakMap;let e=ol.get(i);return e===void 0&&ol.set(i,e={}),e}function Jp(i){const e=yc(i);return e.shadowMatrix||(e.shadowMatrix=pt("mat4").setGroup(wt).onRenderUpdate(()=>(i.castShadow!==!0&&i.shadow.updateMatrices(i),i.shadow.matrix)))}function fD(i){const e=yc(i);if(e.projectionUV===void 0){const t=Jp(i).mul(kr);e.projectionUV=t.xyz.div(t.w)}return e.projectionUV}function xy(i){const e=yc(i);return e.position||(e.position=pt(new R).setGroup(wt).onRenderUpdate((t,n)=>n.value.setFromMatrixPosition(i.matrixWorld)))}function vy(i){const e=yc(i);return e.targetPosition||(e.targetPosition=pt(new R).setGroup(wt).onRenderUpdate((t,n)=>n.value.setFromMatrixPosition(i.target.matrixWorld)))}function pD(i){const e=yc(i);return e.viewPosition||(e.viewPosition=pt(new R).setGroup(wt).onRenderUpdate(({camera:t},n)=>{n.value=n.value||new R,n.value.setFromMatrixPosition(i.matrixWorld),n.value.applyMatrix4(t.matrixWorldInverse)}))}const mD=i=>yi.transformDirection(xy(i).sub(vy(i))),gD=i=>i.sort((e,t)=>e.id-t.id),_D=(i,e)=>{for(const t of e)if(t.isAnalyticLightNode&&t.light.id===i)return t;return null},dd=new WeakMap;class xD extends qe{static get type(){return"LightsNode"}constructor(){super("vec3"),this.totalDiffuseNode=B().toVar("totalDiffuse"),this.totalSpecularNode=B().toVar("totalSpecular"),this.outgoingLightNode=B().toVar("outgoingLight"),this._lights=[],this._lightNodes=null,this._lightNodesHash=null,this.global=!0}customCacheKey(){const e=[],t=this._lights;for(let n=0;n<t.length;n++)e.push(t[n].id);return ix(e)}getHash(e){if(this._lightNodesHash===null){this._lightNodes===null&&this.setupLightsNode(e);const t=[];for(const n of this._lightNodes)t.push(n.getSelf().getHash());this._lightNodesHash="lights-"+t.join(",")}return this._lightNodesHash}analyze(e){const t=e.getDataFromNode(this);for(const n of t.nodes)n.build(e)}setupLightsNode(e){const t=[],n=this._lightNodes,s=gD(this._lights),r=e.renderer.library;for(const o of s)if(o.isNode)t.push(ee(o));else{let a=null;if(n!==null&&(a=_D(o.id,n)),a===null){const c=r.getLightNodeClass(o.constructor);if(c===null){console.warn(`LightsNode.setupNodeLights: Light node not found for ${o.constructor.name}`);continue}let l=null;dd.has(o)?l=dd.get(o):(l=ee(new c(o)),dd.set(o,l)),t.push(l)}}this._lightNodes=t}setupLights(e,t){for(const n of t)n.build(e)}setup(e){this._lightNodes===null&&this.setupLightsNode(e);const t=e.context,n=t.lightingModel;let s=this.outgoingLightNode;if(n){const{_lightNodes:r,totalDiffuseNode:o,totalSpecularNode:a}=this;t.outgoingLight=s;const c=e.addStack(),l=e.getDataFromNode(this);l.nodes=c.nodes,n.start(t,c,e),this.setupLights(e,r),n.indirect(t,c,e);const{backdrop:u,backdropAlpha:h}=t,{directDiffuse:d,directSpecular:p,indirectDiffuse:_,indirectSpecular:x}=t.reflectedLight;let m=d.add(_);u!==null&&(h!==null?m=B(h.mix(m,u)):m=B(u),t.material.transparent=!0),o.assign(m),a.assign(p.add(x)),s.assign(o.add(a)),n.finish(t,c,e),s=s.bypass(e.removeStack())}return s}setLights(e){return this._lights=e,this._lightNodes=null,this._lightNodesHash=null,this}getLights(){return this._lights}get hasLights(){return this._lights.length>0}}const vD=(i=[])=>ee(new xD).setLights(i);class yD extends qe{static get type(){return"ShadowBaseNode"}constructor(e){super(),this.light=e,this.updateBeforeType=Et.RENDER,this.isShadowBaseNode=!0}setupShadowPosition({material:e}){Qp.assign(e.shadowPositionNode||kr)}dispose(){this.updateBeforeType=Et.NONE}}const Qp=B().toVar("shadowPositionWorld");function SD(i,e={}){return e.toneMapping=i.toneMapping,e.toneMappingExposure=i.toneMappingExposure,e.outputColorSpace=i.outputColorSpace,e.renderTarget=i.getRenderTarget(),e.activeCubeFace=i.getActiveCubeFace(),e.activeMipmapLevel=i.getActiveMipmapLevel(),e.renderObjectFunction=i.getRenderObjectFunction(),e.pixelRatio=i.getPixelRatio(),e.mrt=i.getMRT(),e.clearColor=i.getClearColor(e.clearColor||new Ze),e.clearAlpha=i.getClearAlpha(),e.autoClear=i.autoClear,e.scissorTest=i.getScissorTest(),e}function MD(i,e){return e=SD(i,e),i.setMRT(null),i.setRenderObjectFunction(null),i.setClearColor(0,1),i.autoClear=!0,e}function TD(i,e){i.toneMapping=e.toneMapping,i.toneMappingExposure=e.toneMappingExposure,i.outputColorSpace=e.outputColorSpace,i.setRenderTarget(e.renderTarget,e.activeCubeFace,e.activeMipmapLevel),i.setRenderObjectFunction(e.renderObjectFunction),i.setPixelRatio(e.pixelRatio),i.setMRT(e.mrt),i.setClearColor(e.clearColor,e.clearAlpha),i.autoClear=e.autoClear,i.setScissorTest(e.scissorTest)}function wD(i,e={}){return e.background=i.background,e.backgroundNode=i.backgroundNode,e.overrideMaterial=i.overrideMaterial,e}function ED(i,e){return e=wD(i,e),i.background=null,i.backgroundNode=null,i.overrideMaterial=null,e}function bD(i,e){i.background=e.background,i.backgroundNode=e.backgroundNode,i.overrideMaterial=e.overrideMaterial}function AD(i,e,t){return t=MD(i,t),t=ED(e,t),t}function ND(i,e,t){TD(i,t),bD(e,t)}const Qg=new WeakMap,RD=k(([i,e,t])=>{let n=kr.sub(i).length();return n=n.sub(e).div(t.sub(e)),n=n.saturate(),n}),CD=i=>{const e=i.shadow.camera,t=Qt("near","float",e).setGroup(wt),n=Qt("far","float",e).setGroup(wt),s=tv(i);return RD(s,t,n)},PD=i=>{let e=Qg.get(i);if(e===void 0){const t=i.isPointLight?CD(i):null;e=new ta,e.colorNode=et(0,0,0,1),e.depthNode=t,e.isShadowNodeMaterial=!0,e.name="ShadowMaterial",e.fog=!1,Qg.set(i,e)}return e},yy=k(({depthTexture:i,shadowCoord:e})=>kn(i,e.xy).compare(e.z)),Sy=k(({depthTexture:i,shadowCoord:e,shadow:t})=>{const n=(x,m)=>kn(i,x).compare(m),s=Qt("mapSize","vec2",t).setGroup(wt),r=Qt("radius","float",t).setGroup(wt),o=fe(1).div(s),a=o.x.negate().mul(r),c=o.y.negate().mul(r),l=o.x.mul(r),u=o.y.mul(r),h=a.div(2),d=c.div(2),p=l.div(2),_=u.div(2);return nn(n(e.xy.add(fe(a,c)),e.z),n(e.xy.add(fe(0,c)),e.z),n(e.xy.add(fe(l,c)),e.z),n(e.xy.add(fe(h,d)),e.z),n(e.xy.add(fe(0,d)),e.z),n(e.xy.add(fe(p,d)),e.z),n(e.xy.add(fe(a,0)),e.z),n(e.xy.add(fe(h,0)),e.z),n(e.xy,e.z),n(e.xy.add(fe(p,0)),e.z),n(e.xy.add(fe(l,0)),e.z),n(e.xy.add(fe(h,_)),e.z),n(e.xy.add(fe(0,_)),e.z),n(e.xy.add(fe(p,_)),e.z),n(e.xy.add(fe(a,u)),e.z),n(e.xy.add(fe(0,u)),e.z),n(e.xy.add(fe(l,u)),e.z)).mul(1/17)}),My=k(({depthTexture:i,shadowCoord:e,shadow:t})=>{const n=(u,h)=>kn(i,u).compare(h),s=Qt("mapSize","vec2",t).setGroup(wt),r=fe(1).div(s),o=r.x,a=r.y,c=e.xy,l=Vs(c.mul(s).add(.5));return c.subAssign(l.mul(r)),nn(n(c,e.z),n(c.add(fe(o,0)),e.z),n(c.add(fe(0,a)),e.z),n(c.add(r),e.z),en(n(c.add(fe(o.negate(),0)),e.z),n(c.add(fe(o.mul(2),0)),e.z),l.x),en(n(c.add(fe(o.negate(),a)),e.z),n(c.add(fe(o.mul(2),a)),e.z),l.x),en(n(c.add(fe(0,a.negate())),e.z),n(c.add(fe(0,a.mul(2))),e.z),l.y),en(n(c.add(fe(o,a.negate())),e.z),n(c.add(fe(o,a.mul(2))),e.z),l.y),en(en(n(c.add(fe(o.negate(),a.negate())),e.z),n(c.add(fe(o.mul(2),a.negate())),e.z),l.x),en(n(c.add(fe(o.negate(),a.mul(2))),e.z),n(c.add(fe(o.mul(2),a.mul(2))),e.z),l.x),l.y)).mul(1/9)}),Ty=k(({depthTexture:i,shadowCoord:e})=>{const t=P(1).toVar(),n=kn(i).sample(e.xy).rg,s=Nu(e.z,n.x);return mt(s.notEqual(P(1)),()=>{const r=e.z.sub(n.x),o=yn(0,n.y.mul(n.y));let a=o.div(o.add(r.mul(r)));a=Ds(xt(a,.3).div(.95-.3)),t.assign(Ds(yn(s,a)))}),t}),LD=k(({samples:i,radius:e,size:t,shadowPass:n})=>{const s=P(0).toVar(),r=P(0).toVar(),o=i.lessThanEqual(P(1)).select(P(0),P(2).div(i.sub(1))),a=i.lessThanEqual(P(1)).select(P(0),P(-1));It({start:L(0),end:L(i),type:"int",condition:"<"},({i:l})=>{const u=a.add(P(l).mul(o)),h=n.sample(nn(vc.xy,fe(0,u).mul(e)).div(t)).x;s.addAssign(h),r.addAssign(h.mul(h))}),s.divAssign(i),r.divAssign(i);const c=ls(r.sub(s.mul(s)));return fe(s,c)}),DD=k(({samples:i,radius:e,size:t,shadowPass:n})=>{const s=P(0).toVar(),r=P(0).toVar(),o=i.lessThanEqual(P(1)).select(P(0),P(2).div(i.sub(1))),a=i.lessThanEqual(P(1)).select(P(0),P(-1));It({start:L(0),end:L(i),type:"int",condition:"<"},({i:l})=>{const u=a.add(P(l).mul(o)),h=n.sample(nn(vc.xy,fe(u,0).mul(e)).div(t));s.addAssign(h.x),r.addAssign(nn(h.y.mul(h.y),h.x.mul(h.x)))}),s.divAssign(i),r.divAssign(i);const c=ls(r.sub(s.mul(s)));return fe(s,c)}),ID=[yy,Sy,My,Ty];let fd;const al=new Yp;class UD extends yD{static get type(){return"ShadowNode"}constructor(e,t=null){super(e),this.shadow=t||e.shadow,this.shadowMap=null,this.vsmShadowMapVertical=null,this.vsmShadowMapHorizontal=null,this.vsmMaterialVertical=null,this.vsmMaterialHorizontal=null,this._node=null,this.isShadowNode=!0}setupShadowFilter(e,{filterFn:t,depthTexture:n,shadowCoord:s,shadow:r}){const o=s.x.greaterThanEqual(0).and(s.x.lessThanEqual(1)).and(s.y.greaterThanEqual(0)).and(s.y.lessThanEqual(1)).and(s.z.lessThanEqual(1)),a=t({depthTexture:n,shadowCoord:s,shadow:r});return o.select(a,P(1))}setupShadowCoord(e,t){const{shadow:n}=this,{renderer:s}=e,r=Qt("bias","float",n).setGroup(wt);let o=t,a;if(n.camera.isOrthographicCamera||s.logarithmicDepthBuffer!==!0)o=o.xyz.div(o.w),a=o.z,s.coordinateSystem===Rs&&(a=a.mul(2).sub(1));else{const c=o.w;o=o.xy.div(c);const l=Qt("near","float",n.camera).setGroup(wt),u=Qt("far","float",n.camera).setGroup(wt);a=Xp(c.negate(),l,u)}return o=B(o.x,o.y.oneMinus(),a.add(r)),o}getShadowFilterFn(e){return ID[e]}setupShadow(e){const{renderer:t}=e,{light:n,shadow:s}=this,r=t.shadowMap.type,o=new Zr(s.mapSize.width,s.mapSize.height);o.compareFunction=R_;const a=e.createRenderTarget(s.mapSize.width,s.mapSize.height);if(a.depthTexture=o,s.camera.updateProjectionMatrix(),r===ti){o.compareFunction=null,this.vsmShadowMapVertical=e.createRenderTarget(s.mapSize.width,s.mapSize.height,{format:$l,type:ns}),this.vsmShadowMapHorizontal=e.createRenderTarget(s.mapSize.width,s.mapSize.height,{format:$l,type:ns});const f=kn(o),w=kn(this.vsmShadowMapVertical.texture),y=Qt("blurSamples","float",s).setGroup(wt),v=Qt("radius","float",s).setGroup(wt),D=Qt("mapSize","vec2",s).setGroup(wt);let C=this.vsmMaterialVertical||(this.vsmMaterialVertical=new ta);C.fragmentNode=LD({samples:y,radius:v,size:D,shadowPass:f}).context(e.getSharedContext()),C.name="VSMVertical",C=this.vsmMaterialHorizontal||(this.vsmMaterialHorizontal=new ta),C.fragmentNode=DD({samples:y,radius:v,size:D,shadowPass:w}).context(e.getSharedContext()),C.name="VSMHorizontal"}const c=Qt("intensity","float",s).setGroup(wt),l=Qt("normalBias","float",s).setGroup(wt),u=Jp(n).mul(Qp.add(cv.mul(l))),h=this.setupShadowCoord(e,u),d=s.filterNode||this.getShadowFilterFn(t.shadowMap.type)||null;if(d===null)throw new Error("THREE.WebGPURenderer: Shadow map type not supported yet.");const p=r===ti?this.vsmShadowMapHorizontal.texture:o,_=this.setupShadowFilter(e,{filterFn:d,shadowTexture:a.texture,depthTexture:p,shadowCoord:h,shadow:s}),x=kn(a.texture,h),m=en(1,_.rgb.mix(x,1),c.mul(x.a)).toVar();return this.shadowMap=a,this.shadow.map=a,m}setup(e){if(e.renderer.shadowMap.enabled!==!1)return k(()=>{let t=this._node;return this.setupShadowPosition(e),t===null&&(this._node=t=this.setupShadow(e)),e.material.shadowNode&&console.warn('THREE.NodeMaterial: ".shadowNode" is deprecated. Use ".castShadowNode" instead.'),e.material.receivedShadowNode&&(t=e.material.receivedShadowNode(t)),t})()}renderShadow(e){const{shadow:t,shadowMap:n,light:s}=this,{renderer:r,scene:o}=e;t.updateMatrices(s),n.setSize(t.mapSize.width,t.mapSize.height),r.render(o,t.camera)}updateShadow(e){const{shadowMap:t,light:n,shadow:s}=this,{renderer:r,scene:o,camera:a}=e,c=r.shadowMap.type,l=t.depthTexture.version;this._depthVersionCached=l,s.camera.layers.mask=a.layers.mask;const u=r.getRenderObjectFunction(),h=r.getMRT(),d=h?h.has("velocity"):!1;fd=AD(r,o,fd),o.overrideMaterial=PD(n),r.setRenderObjectFunction((p,_,x,m,f,w,...y)=>{(p.castShadow===!0||p.receiveShadow&&c===ti)&&(d&&(lx(p).useVelocity=!0),p.onBeforeShadow(r,p,a,s.camera,m,_.overrideMaterial,w),r.renderObject(p,_,x,m,f,w,...y),p.onAfterShadow(r,p,a,s.camera,m,_.overrideMaterial,w))}),r.setRenderTarget(t),this.renderShadow(e),r.setRenderObjectFunction(u),n.isPointLight!==!0&&c===ti&&this.vsmPass(r),ND(r,o,fd)}vsmPass(e){const{shadow:t}=this;this.vsmShadowMapVertical.setSize(t.mapSize.width,t.mapSize.height),this.vsmShadowMapHorizontal.setSize(t.mapSize.width,t.mapSize.height),e.setRenderTarget(this.vsmShadowMapVertical),al.material=this.vsmMaterialVertical,al.render(e),e.setRenderTarget(this.vsmShadowMapHorizontal),al.material=this.vsmMaterialHorizontal,al.render(e)}dispose(){this.shadowMap.dispose(),this.shadowMap=null,this.vsmShadowMapVertical!==null&&(this.vsmShadowMapVertical.dispose(),this.vsmShadowMapVertical=null,this.vsmMaterialVertical.dispose(),this.vsmMaterialVertical=null),this.vsmShadowMapHorizontal!==null&&(this.vsmShadowMapHorizontal.dispose(),this.vsmShadowMapHorizontal=null,this.vsmMaterialHorizontal.dispose(),this.vsmMaterialHorizontal=null),super.dispose()}updateBefore(e){const{shadow:t}=this;(t.needsUpdate||t.autoUpdate)&&(this.updateShadow(e),this.shadowMap.depthTexture.version===this._depthVersionCached&&(t.needsUpdate=!1))}}const OD=(i,e)=>ee(new UD(i,e)),wy=k(i=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=i,s=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).select(s.mul(e.div(t).pow4().oneMinus().clamp().pow2()),s)}),FD=k(({color:i,lightViewPosition:e,cutoffDistance:t,decayExponent:n},s)=>{const r=s.context.lightingModel,o=e.sub(fn),a=o.normalize(),c=o.length(),l=wy({lightDistance:c,cutoffDistance:t,decayExponent:n}),u=i.mul(l),h=s.context.reflectedLight;r.direct({lightDirection:a,lightColor:u,reflectedLight:h},s.stack,s)}),VD=k(([i=Wt()])=>{const e=i.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()}),Fa=k(([i,e,t])=>{const n=P(t).toVar(),s=P(e).toVar(),r=Ps(i).toVar();return Xn(r,s,n)}).setLayout({name:"mx_select",type:"float",inputs:[{name:"b",type:"bool"},{name:"t",type:"float"},{name:"f",type:"float"}]}),au=k(([i,e])=>{const t=Ps(e).toVar(),n=P(i).toVar();return Xn(t,n.negate(),n)}).setLayout({name:"mx_negate_if",type:"float",inputs:[{name:"val",type:"float"},{name:"b",type:"bool"}]}),tn=k(([i])=>{const e=P(i).toVar();return L(es(e))}).setLayout({name:"mx_floor",type:"int",inputs:[{name:"x",type:"float"}]}),Bt=k(([i,e])=>{const t=P(i).toVar();return e.assign(tn(t)),t.sub(P(e))}),zD=k(([i,e,t,n,s,r])=>{const o=P(r).toVar(),a=P(s).toVar(),c=P(n).toVar(),l=P(t).toVar(),u=P(e).toVar(),h=P(i).toVar(),d=P(xt(1,a)).toVar();return xt(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}).setLayout({name:"mx_bilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"}]}),BD=k(([i,e,t,n,s,r])=>{const o=P(r).toVar(),a=P(s).toVar(),c=B(n).toVar(),l=B(t).toVar(),u=B(e).toVar(),h=B(i).toVar(),d=P(xt(1,a)).toVar();return xt(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}).setLayout({name:"mx_bilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"}]}),Ey=An([zD,BD]),kD=k(([i,e,t,n,s,r,o,a,c,l,u])=>{const h=P(u).toVar(),d=P(l).toVar(),p=P(c).toVar(),_=P(a).toVar(),x=P(o).toVar(),m=P(r).toVar(),f=P(s).toVar(),w=P(n).toVar(),y=P(t).toVar(),v=P(e).toVar(),D=P(i).toVar(),C=P(xt(1,p)).toVar(),N=P(xt(1,d)).toVar();return P(xt(1,h)).toVar().mul(N.mul(D.mul(C).add(v.mul(p))).add(d.mul(y.mul(C).add(w.mul(p))))).add(h.mul(N.mul(f.mul(C).add(m.mul(p))).add(d.mul(x.mul(C).add(_.mul(p))))))}).setLayout({name:"mx_trilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"v4",type:"float"},{name:"v5",type:"float"},{name:"v6",type:"float"},{name:"v7",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]}),HD=k(([i,e,t,n,s,r,o,a,c,l,u])=>{const h=P(u).toVar(),d=P(l).toVar(),p=P(c).toVar(),_=B(a).toVar(),x=B(o).toVar(),m=B(r).toVar(),f=B(s).toVar(),w=B(n).toVar(),y=B(t).toVar(),v=B(e).toVar(),D=B(i).toVar(),C=P(xt(1,p)).toVar(),N=P(xt(1,d)).toVar();return P(xt(1,h)).toVar().mul(N.mul(D.mul(C).add(v.mul(p))).add(d.mul(y.mul(C).add(w.mul(p))))).add(h.mul(N.mul(f.mul(C).add(m.mul(p))).add(d.mul(x.mul(C).add(_.mul(p))))))}).setLayout({name:"mx_trilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"v4",type:"vec3"},{name:"v5",type:"vec3"},{name:"v6",type:"vec3"},{name:"v7",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]}),by=An([kD,HD]),GD=k(([i,e,t])=>{const n=P(t).toVar(),s=P(e).toVar(),r=Te(i).toVar(),o=Te(r.bitAnd(Te(7))).toVar(),a=P(Fa(o.lessThan(Te(4)),s,n)).toVar(),c=P(it(2,Fa(o.lessThan(Te(4)),n,s))).toVar();return au(a,Ps(o.bitAnd(Te(1)))).add(au(c,Ps(o.bitAnd(Te(2)))))}).setLayout({name:"mx_gradient_float_0",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"}]}),WD=k(([i,e,t,n])=>{const s=P(n).toVar(),r=P(t).toVar(),o=P(e).toVar(),a=Te(i).toVar(),c=Te(a.bitAnd(Te(15))).toVar(),l=P(Fa(c.lessThan(Te(8)),o,r)).toVar(),u=P(Fa(c.lessThan(Te(4)),r,Fa(c.equal(Te(12)).or(c.equal(Te(14))),o,s))).toVar();return au(l,Ps(c.bitAnd(Te(1)))).add(au(u,Ps(c.bitAnd(Te(2)))))}).setLayout({name:"mx_gradient_float_1",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]}),vn=An([GD,WD]),XD=k(([i,e,t])=>{const n=P(t).toVar(),s=P(e).toVar(),r=oa(i).toVar();return B(vn(r.x,s,n),vn(r.y,s,n),vn(r.z,s,n))}).setLayout({name:"mx_gradient_vec3_0",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"}]}),$D=k(([i,e,t,n])=>{const s=P(n).toVar(),r=P(t).toVar(),o=P(e).toVar(),a=oa(i).toVar();return B(vn(a.x,o,r,s),vn(a.y,o,r,s),vn(a.z,o,r,s))}).setLayout({name:"mx_gradient_vec3_1",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]}),pi=An([XD,$D]),qD=k(([i])=>{const e=P(i).toVar();return it(.6616,e)}).setLayout({name:"mx_gradient_scale2d_0",type:"float",inputs:[{name:"v",type:"float"}]}),YD=k(([i])=>{const e=P(i).toVar();return it(.982,e)}).setLayout({name:"mx_gradient_scale3d_0",type:"float",inputs:[{name:"v",type:"float"}]}),jD=k(([i])=>{const e=B(i).toVar();return it(.6616,e)}).setLayout({name:"mx_gradient_scale2d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]}),Ay=An([qD,jD]),ZD=k(([i])=>{const e=B(i).toVar();return it(.982,e)}).setLayout({name:"mx_gradient_scale3d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]}),Ny=An([YD,ZD]),ii=k(([i,e])=>{const t=L(e).toVar(),n=Te(i).toVar();return n.shiftLeft(t).bitOr(n.shiftRight(L(32).sub(t)))}).setLayout({name:"mx_rotl32",type:"uint",inputs:[{name:"x",type:"uint"},{name:"k",type:"int"}]}),Ry=k(([i,e,t])=>{i.subAssign(t),i.bitXorAssign(ii(t,L(4))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(ii(i,L(6))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(ii(e,L(8))),e.addAssign(i),i.subAssign(t),i.bitXorAssign(ii(t,L(16))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(ii(i,L(19))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(ii(e,L(4))),e.addAssign(i)}),Sc=k(([i,e,t])=>{const n=Te(t).toVar(),s=Te(e).toVar(),r=Te(i).toVar();return n.bitXorAssign(s),n.subAssign(ii(s,L(14))),r.bitXorAssign(n),r.subAssign(ii(n,L(11))),s.bitXorAssign(r),s.subAssign(ii(r,L(25))),n.bitXorAssign(s),n.subAssign(ii(s,L(16))),r.bitXorAssign(n),r.subAssign(ii(n,L(4))),s.bitXorAssign(r),s.subAssign(ii(r,L(14))),n.bitXorAssign(s),n.subAssign(ii(s,L(24))),n}).setLayout({name:"mx_bjfinal",type:"uint",inputs:[{name:"a",type:"uint"},{name:"b",type:"uint"},{name:"c",type:"uint"}]}),Ln=k(([i])=>{const e=Te(i).toVar();return P(e).div(P(Te(L(4294967295))))}).setLayout({name:"mx_bits_to_01",type:"float",inputs:[{name:"bits",type:"uint"}]}),ts=k(([i])=>{const e=P(i).toVar();return e.mul(e).mul(e).mul(e.mul(e.mul(6).sub(15)).add(10))}).setLayout({name:"mx_fade",type:"float",inputs:[{name:"t",type:"float"}]}),KD=k(([i])=>{const e=L(i).toVar(),t=Te(Te(1)).toVar(),n=Te(Te(L(3735928559)).add(t.shiftLeft(Te(2))).add(Te(13))).toVar();return Sc(n.add(Te(e)),n,n)}).setLayout({name:"mx_hash_int_0",type:"uint",inputs:[{name:"x",type:"int"}]}),JD=k(([i,e])=>{const t=L(e).toVar(),n=L(i).toVar(),s=Te(Te(2)).toVar(),r=Te().toVar(),o=Te().toVar(),a=Te().toVar();return r.assign(o.assign(a.assign(Te(L(3735928559)).add(s.shiftLeft(Te(2))).add(Te(13))))),r.addAssign(Te(n)),o.addAssign(Te(t)),Sc(r,o,a)}).setLayout({name:"mx_hash_int_1",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]}),QD=k(([i,e,t])=>{const n=L(t).toVar(),s=L(e).toVar(),r=L(i).toVar(),o=Te(Te(3)).toVar(),a=Te().toVar(),c=Te().toVar(),l=Te().toVar();return a.assign(c.assign(l.assign(Te(L(3735928559)).add(o.shiftLeft(Te(2))).add(Te(13))))),a.addAssign(Te(r)),c.addAssign(Te(s)),l.addAssign(Te(n)),Sc(a,c,l)}).setLayout({name:"mx_hash_int_2",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]}),eI=k(([i,e,t,n])=>{const s=L(n).toVar(),r=L(t).toVar(),o=L(e).toVar(),a=L(i).toVar(),c=Te(Te(4)).toVar(),l=Te().toVar(),u=Te().toVar(),h=Te().toVar();return l.assign(u.assign(h.assign(Te(L(3735928559)).add(c.shiftLeft(Te(2))).add(Te(13))))),l.addAssign(Te(a)),u.addAssign(Te(o)),h.addAssign(Te(r)),Ry(l,u,h),l.addAssign(Te(s)),Sc(l,u,h)}).setLayout({name:"mx_hash_int_3",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"}]}),tI=k(([i,e,t,n,s])=>{const r=L(s).toVar(),o=L(n).toVar(),a=L(t).toVar(),c=L(e).toVar(),l=L(i).toVar(),u=Te(Te(5)).toVar(),h=Te().toVar(),d=Te().toVar(),p=Te().toVar();return h.assign(d.assign(p.assign(Te(L(3735928559)).add(u.shiftLeft(Te(2))).add(Te(13))))),h.addAssign(Te(l)),d.addAssign(Te(c)),p.addAssign(Te(a)),Ry(h,d,p),h.addAssign(Te(o)),d.addAssign(Te(r)),Sc(h,d,p)}).setLayout({name:"mx_hash_int_4",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"},{name:"yy",type:"int"}]}),Pt=An([KD,JD,QD,eI,tI]),nI=k(([i,e])=>{const t=L(e).toVar(),n=L(i).toVar(),s=Te(Pt(n,t)).toVar(),r=oa().toVar();return r.x.assign(s.bitAnd(L(255))),r.y.assign(s.shiftRight(L(8)).bitAnd(L(255))),r.z.assign(s.shiftRight(L(16)).bitAnd(L(255))),r}).setLayout({name:"mx_hash_vec3_0",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]}),iI=k(([i,e,t])=>{const n=L(t).toVar(),s=L(e).toVar(),r=L(i).toVar(),o=Te(Pt(r,s,n)).toVar(),a=oa().toVar();return a.x.assign(o.bitAnd(L(255))),a.y.assign(o.shiftRight(L(8)).bitAnd(L(255))),a.z.assign(o.shiftRight(L(16)).bitAnd(L(255))),a}).setLayout({name:"mx_hash_vec3_1",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]}),mi=An([nI,iI]),sI=k(([i])=>{const e=fe(i).toVar(),t=L().toVar(),n=L().toVar(),s=P(Bt(e.x,t)).toVar(),r=P(Bt(e.y,n)).toVar(),o=P(ts(s)).toVar(),a=P(ts(r)).toVar(),c=P(Ey(vn(Pt(t,n),s,r),vn(Pt(t.add(L(1)),n),s.sub(1),r),vn(Pt(t,n.add(L(1))),s,r.sub(1)),vn(Pt(t.add(L(1)),n.add(L(1))),s.sub(1),r.sub(1)),o,a)).toVar();return Ay(c)}).setLayout({name:"mx_perlin_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"}]}),rI=k(([i])=>{const e=B(i).toVar(),t=L().toVar(),n=L().toVar(),s=L().toVar(),r=P(Bt(e.x,t)).toVar(),o=P(Bt(e.y,n)).toVar(),a=P(Bt(e.z,s)).toVar(),c=P(ts(r)).toVar(),l=P(ts(o)).toVar(),u=P(ts(a)).toVar(),h=P(by(vn(Pt(t,n,s),r,o,a),vn(Pt(t.add(L(1)),n,s),r.sub(1),o,a),vn(Pt(t,n.add(L(1)),s),r,o.sub(1),a),vn(Pt(t.add(L(1)),n.add(L(1)),s),r.sub(1),o.sub(1),a),vn(Pt(t,n,s.add(L(1))),r,o,a.sub(1)),vn(Pt(t.add(L(1)),n,s.add(L(1))),r.sub(1),o,a.sub(1)),vn(Pt(t,n.add(L(1)),s.add(L(1))),r,o.sub(1),a.sub(1)),vn(Pt(t.add(L(1)),n.add(L(1)),s.add(L(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return Ny(h)}).setLayout({name:"mx_perlin_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"}]}),em=An([sI,rI]),oI=k(([i])=>{const e=fe(i).toVar(),t=L().toVar(),n=L().toVar(),s=P(Bt(e.x,t)).toVar(),r=P(Bt(e.y,n)).toVar(),o=P(ts(s)).toVar(),a=P(ts(r)).toVar(),c=B(Ey(pi(mi(t,n),s,r),pi(mi(t.add(L(1)),n),s.sub(1),r),pi(mi(t,n.add(L(1))),s,r.sub(1)),pi(mi(t.add(L(1)),n.add(L(1))),s.sub(1),r.sub(1)),o,a)).toVar();return Ay(c)}).setLayout({name:"mx_perlin_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"}]}),aI=k(([i])=>{const e=B(i).toVar(),t=L().toVar(),n=L().toVar(),s=L().toVar(),r=P(Bt(e.x,t)).toVar(),o=P(Bt(e.y,n)).toVar(),a=P(Bt(e.z,s)).toVar(),c=P(ts(r)).toVar(),l=P(ts(o)).toVar(),u=P(ts(a)).toVar(),h=B(by(pi(mi(t,n,s),r,o,a),pi(mi(t.add(L(1)),n,s),r.sub(1),o,a),pi(mi(t,n.add(L(1)),s),r,o.sub(1),a),pi(mi(t.add(L(1)),n.add(L(1)),s),r.sub(1),o.sub(1),a),pi(mi(t,n,s.add(L(1))),r,o,a.sub(1)),pi(mi(t.add(L(1)),n,s.add(L(1))),r.sub(1),o,a.sub(1)),pi(mi(t,n.add(L(1)),s.add(L(1))),r,o.sub(1),a.sub(1)),pi(mi(t.add(L(1)),n.add(L(1)),s.add(L(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return Ny(h)}).setLayout({name:"mx_perlin_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"}]}),tm=An([oI,aI]),cI=k(([i])=>{const e=P(i).toVar(),t=L(tn(e)).toVar();return Ln(Pt(t))}).setLayout({name:"mx_cell_noise_float_0",type:"float",inputs:[{name:"p",type:"float"}]}),lI=k(([i])=>{const e=fe(i).toVar(),t=L(tn(e.x)).toVar(),n=L(tn(e.y)).toVar();return Ln(Pt(t,n))}).setLayout({name:"mx_cell_noise_float_1",type:"float",inputs:[{name:"p",type:"vec2"}]}),uI=k(([i])=>{const e=B(i).toVar(),t=L(tn(e.x)).toVar(),n=L(tn(e.y)).toVar(),s=L(tn(e.z)).toVar();return Ln(Pt(t,n,s))}).setLayout({name:"mx_cell_noise_float_2",type:"float",inputs:[{name:"p",type:"vec3"}]}),hI=k(([i])=>{const e=et(i).toVar(),t=L(tn(e.x)).toVar(),n=L(tn(e.y)).toVar(),s=L(tn(e.z)).toVar(),r=L(tn(e.w)).toVar();return Ln(Pt(t,n,s,r))}).setLayout({name:"mx_cell_noise_float_3",type:"float",inputs:[{name:"p",type:"vec4"}]}),dI=An([cI,lI,uI,hI]),fI=k(([i])=>{const e=P(i).toVar(),t=L(tn(e)).toVar();return B(Ln(Pt(t,L(0))),Ln(Pt(t,L(1))),Ln(Pt(t,L(2))))}).setLayout({name:"mx_cell_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"float"}]}),pI=k(([i])=>{const e=fe(i).toVar(),t=L(tn(e.x)).toVar(),n=L(tn(e.y)).toVar();return B(Ln(Pt(t,n,L(0))),Ln(Pt(t,n,L(1))),Ln(Pt(t,n,L(2))))}).setLayout({name:"mx_cell_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec2"}]}),mI=k(([i])=>{const e=B(i).toVar(),t=L(tn(e.x)).toVar(),n=L(tn(e.y)).toVar(),s=L(tn(e.z)).toVar();return B(Ln(Pt(t,n,s,L(0))),Ln(Pt(t,n,s,L(1))),Ln(Pt(t,n,s,L(2))))}).setLayout({name:"mx_cell_noise_vec3_2",type:"vec3",inputs:[{name:"p",type:"vec3"}]}),gI=k(([i])=>{const e=et(i).toVar(),t=L(tn(e.x)).toVar(),n=L(tn(e.y)).toVar(),s=L(tn(e.z)).toVar(),r=L(tn(e.w)).toVar();return B(Ln(Pt(t,n,s,r,L(0))),Ln(Pt(t,n,s,r,L(1))),Ln(Pt(t,n,s,r,L(2))))}).setLayout({name:"mx_cell_noise_vec3_3",type:"vec3",inputs:[{name:"p",type:"vec4"}]}),Cy=An([fI,pI,mI,gI]),cu=k(([i,e,t,n])=>{const s=P(n).toVar(),r=P(t).toVar(),o=L(e).toVar(),a=B(i).toVar(),c=P(0).toVar(),l=P(1).toVar();return It(o,()=>{c.addAssign(l.mul(em(a))),l.mulAssign(s),a.mulAssign(r)}),c}).setLayout({name:"mx_fractal_noise_float",type:"float",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]}),Py=k(([i,e,t,n])=>{const s=P(n).toVar(),r=P(t).toVar(),o=L(e).toVar(),a=B(i).toVar(),c=B(0).toVar(),l=P(1).toVar();return It(o,()=>{c.addAssign(l.mul(tm(a))),l.mulAssign(s),a.mulAssign(r)}),c}).setLayout({name:"mx_fractal_noise_vec3",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]}),_I=k(([i,e,t,n])=>{const s=P(n).toVar(),r=P(t).toVar(),o=L(e).toVar(),a=B(i).toVar();return fe(cu(a,o,r,s),cu(a.add(B(L(19),L(193),L(17))),o,r,s))}).setLayout({name:"mx_fractal_noise_vec2",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]}),xI=k(([i,e,t,n])=>{const s=P(n).toVar(),r=P(t).toVar(),o=L(e).toVar(),a=B(i).toVar(),c=B(Py(a,o,r,s)).toVar(),l=P(cu(a.add(B(L(19),L(193),L(17))),o,r,s)).toVar();return et(c,l)}).setLayout({name:"mx_fractal_noise_vec4",type:"vec4",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]}),vI=k(([i,e,t,n,s,r,o])=>{const a=L(o).toVar(),c=P(r).toVar(),l=L(s).toVar(),u=L(n).toVar(),h=L(t).toVar(),d=L(e).toVar(),p=fe(i).toVar(),_=B(Cy(fe(d.add(u),h.add(l)))).toVar(),x=fe(_.x,_.y).toVar();x.subAssign(.5),x.mulAssign(c),x.addAssign(.5);const m=fe(fe(P(d),P(h)).add(x)).toVar(),f=fe(m.sub(p)).toVar();return mt(a.equal(L(2)),()=>Ft(f.x).add(Ft(f.y))),mt(a.equal(L(3)),()=>yn(Ft(f.x),Ft(f.y))),ur(f,f)}).setLayout({name:"mx_worley_distance_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]}),yI=k(([i,e,t,n,s,r,o,a,c])=>{const l=L(c).toVar(),u=P(a).toVar(),h=L(o).toVar(),d=L(r).toVar(),p=L(s).toVar(),_=L(n).toVar(),x=L(t).toVar(),m=L(e).toVar(),f=B(i).toVar(),w=B(Cy(B(m.add(p),x.add(d),_.add(h)))).toVar();w.subAssign(.5),w.mulAssign(u),w.addAssign(.5);const y=B(B(P(m),P(x),P(_)).add(w)).toVar(),v=B(y.sub(f)).toVar();return mt(l.equal(L(2)),()=>Ft(v.x).add(Ft(v.y)).add(Ft(v.z))),mt(l.equal(L(3)),()=>yn(yn(Ft(v.x),Ft(v.y)),Ft(v.z))),ur(v,v)}).setLayout({name:"mx_worley_distance_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"zoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]}),aa=An([vI,yI]),SI=k(([i,e,t])=>{const n=L(t).toVar(),s=P(e).toVar(),r=fe(i).toVar(),o=L().toVar(),a=L().toVar(),c=fe(Bt(r.x,o),Bt(r.y,a)).toVar(),l=P(1e6).toVar();return It({start:-1,end:L(1),name:"x",condition:"<="},({x:u})=>{It({start:-1,end:L(1),name:"y",condition:"<="},({y:h})=>{const d=P(aa(c,u,h,o,a,s,n)).toVar();l.assign(li(l,d))})}),mt(n.equal(L(0)),()=>{l.assign(ls(l))}),l}).setLayout({name:"mx_worley_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]}),MI=k(([i,e,t])=>{const n=L(t).toVar(),s=P(e).toVar(),r=fe(i).toVar(),o=L().toVar(),a=L().toVar(),c=fe(Bt(r.x,o),Bt(r.y,a)).toVar(),l=fe(1e6,1e6).toVar();return It({start:-1,end:L(1),name:"x",condition:"<="},({x:u})=>{It({start:-1,end:L(1),name:"y",condition:"<="},({y:h})=>{const d=P(aa(c,u,h,o,a,s,n)).toVar();mt(d.lessThan(l.x),()=>{l.y.assign(l.x),l.x.assign(d)}).ElseIf(d.lessThan(l.y),()=>{l.y.assign(d)})})}),mt(n.equal(L(0)),()=>{l.assign(ls(l))}),l}).setLayout({name:"mx_worley_noise_vec2_0",type:"vec2",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]}),TI=k(([i,e,t])=>{const n=L(t).toVar(),s=P(e).toVar(),r=fe(i).toVar(),o=L().toVar(),a=L().toVar(),c=fe(Bt(r.x,o),Bt(r.y,a)).toVar(),l=B(1e6,1e6,1e6).toVar();return It({start:-1,end:L(1),name:"x",condition:"<="},({x:u})=>{It({start:-1,end:L(1),name:"y",condition:"<="},({y:h})=>{const d=P(aa(c,u,h,o,a,s,n)).toVar();mt(d.lessThan(l.x),()=>{l.z.assign(l.y),l.y.assign(l.x),l.x.assign(d)}).ElseIf(d.lessThan(l.y),()=>{l.z.assign(l.y),l.y.assign(d)}).ElseIf(d.lessThan(l.z),()=>{l.z.assign(d)})})}),mt(n.equal(L(0)),()=>{l.assign(ls(l))}),l}).setLayout({name:"mx_worley_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]}),wI=k(([i,e,t])=>{const n=L(t).toVar(),s=P(e).toVar(),r=B(i).toVar(),o=L().toVar(),a=L().toVar(),c=L().toVar(),l=B(Bt(r.x,o),Bt(r.y,a),Bt(r.z,c)).toVar(),u=P(1e6).toVar();return It({start:-1,end:L(1),name:"x",condition:"<="},({x:h})=>{It({start:-1,end:L(1),name:"y",condition:"<="},({y:d})=>{It({start:-1,end:L(1),name:"z",condition:"<="},({z:p})=>{const _=P(aa(l,h,d,p,o,a,c,s,n)).toVar();u.assign(li(u,_))})})}),mt(n.equal(L(0)),()=>{u.assign(ls(u))}),u}).setLayout({name:"mx_worley_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]}),EI=An([SI,wI]),bI=k(([i,e,t])=>{const n=L(t).toVar(),s=P(e).toVar(),r=B(i).toVar(),o=L().toVar(),a=L().toVar(),c=L().toVar(),l=B(Bt(r.x,o),Bt(r.y,a),Bt(r.z,c)).toVar(),u=fe(1e6,1e6).toVar();return It({start:-1,end:L(1),name:"x",condition:"<="},({x:h})=>{It({start:-1,end:L(1),name:"y",condition:"<="},({y:d})=>{It({start:-1,end:L(1),name:"z",condition:"<="},({z:p})=>{const _=P(aa(l,h,d,p,o,a,c,s,n)).toVar();mt(_.lessThan(u.x),()=>{u.y.assign(u.x),u.x.assign(_)}).ElseIf(_.lessThan(u.y),()=>{u.y.assign(_)})})})}),mt(n.equal(L(0)),()=>{u.assign(ls(u))}),u}).setLayout({name:"mx_worley_noise_vec2_1",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]}),AI=An([MI,bI]),NI=k(([i,e,t])=>{const n=L(t).toVar(),s=P(e).toVar(),r=B(i).toVar(),o=L().toVar(),a=L().toVar(),c=L().toVar(),l=B(Bt(r.x,o),Bt(r.y,a),Bt(r.z,c)).toVar(),u=B(1e6,1e6,1e6).toVar();return It({start:-1,end:L(1),name:"x",condition:"<="},({x:h})=>{It({start:-1,end:L(1),name:"y",condition:"<="},({y:d})=>{It({start:-1,end:L(1),name:"z",condition:"<="},({z:p})=>{const _=P(aa(l,h,d,p,o,a,c,s,n)).toVar();mt(_.lessThan(u.x),()=>{u.z.assign(u.y),u.y.assign(u.x),u.x.assign(_)}).ElseIf(_.lessThan(u.y),()=>{u.z.assign(u.y),u.y.assign(_)}).ElseIf(_.lessThan(u.z),()=>{u.z.assign(_)})})})}),mt(n.equal(L(0)),()=>{u.assign(ls(u))}),u}).setLayout({name:"mx_worley_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]}),RI=An([TI,NI]),CI=k(([i])=>{const e=i.y,t=i.z,n=B().toVar();return mt(e.lessThan(1e-4),()=>{n.assign(B(t,t,t))}).Else(()=>{let s=i.x;s=s.sub(es(s)).mul(6).toVar();const r=L(Cp(s)),o=s.sub(P(r)),a=t.mul(e.oneMinus()),c=t.mul(e.mul(o).oneMinus()),l=t.mul(e.mul(o.oneMinus()).oneMinus());mt(r.equal(L(0)),()=>{n.assign(B(t,l,a))}).ElseIf(r.equal(L(1)),()=>{n.assign(B(c,t,a))}).ElseIf(r.equal(L(2)),()=>{n.assign(B(a,t,l))}).ElseIf(r.equal(L(3)),()=>{n.assign(B(a,c,t))}).ElseIf(r.equal(L(4)),()=>{n.assign(B(l,a,t))}).Else(()=>{n.assign(B(t,a,c))})}),n}).setLayout({name:"mx_hsvtorgb",type:"vec3",inputs:[{name:"hsv",type:"vec3"}]}),PI=k(([i])=>{const e=B(i).toVar(),t=P(e.x).toVar(),n=P(e.y).toVar(),s=P(e.z).toVar(),r=P(li(t,li(n,s))).toVar(),o=P(yn(t,yn(n,s))).toVar(),a=P(o.sub(r)).toVar(),c=P().toVar(),l=P().toVar(),u=P().toVar();return u.assign(o),mt(o.greaterThan(0),()=>{l.assign(a.div(o))}).Else(()=>{l.assign(0)}),mt(l.lessThanEqual(0),()=>{c.assign(0)}).Else(()=>{mt(t.greaterThanEqual(o),()=>{c.assign(n.sub(s).div(a))}).ElseIf(n.greaterThanEqual(o),()=>{c.assign(nn(2,s.sub(t).div(a)))}).Else(()=>{c.assign(nn(4,t.sub(n).div(a)))}),c.mulAssign(1/6),mt(c.lessThan(0),()=>{c.addAssign(1)})}),B(c,l,u)}).setLayout({name:"mx_rgbtohsv",type:"vec3",inputs:[{name:"c",type:"vec3"}]}),LI=k(([i])=>{const e=B(i).toVar(),t=vp(Mp(e,B(.04045))).toVar(),n=B(e.div(12.92)).toVar(),s=B(Ii(yn(e.add(B(.055)),B(0)).div(1.055),B(2.4))).toVar();return en(n,s,t)}).setLayout({name:"mx_srgb_texture_to_lin_rec709",type:"vec3",inputs:[{name:"color",type:"vec3"}]}),Ly=(i,e)=>{i=P(i),e=P(e);const t=fe(e.dFdx(),e.dFdy()).length().mul(.7071067811865476);return ea(i.sub(t),i.add(t),e)},Dy=(i,e,t,n)=>en(i,e,t[n].clamp()),DI=(i,e,t=Wt())=>Dy(i,e,t,"x"),II=(i,e,t=Wt())=>Dy(i,e,t,"y"),Iy=(i,e,t,n,s)=>en(i,e,Ly(t,n[s])),UI=(i,e,t,n=Wt())=>Iy(i,e,t,n,"x"),OI=(i,e,t,n=Wt())=>Iy(i,e,t,n,"y"),FI=(i=1,e=0,t=Wt())=>t.mul(i).add(e),VI=(i,e=1)=>(i=P(i),i.abs().pow(e).mul(i.sign())),zI=(i,e=1,t=.5)=>P(i).sub(t).mul(e).add(t),BI=(i=Wt(),e=1,t=0)=>em(i.convert("vec2|vec3")).mul(e).add(t),kI=(i=Wt(),e=1,t=0)=>tm(i.convert("vec2|vec3")).mul(e).add(t),HI=(i=Wt(),e=1,t=0)=>(i=i.convert("vec2|vec3"),et(tm(i),em(i.add(fe(19,73)))).mul(e).add(t)),GI=(i=Wt(),e=1)=>EI(i.convert("vec2|vec3"),e,L(1)),WI=(i=Wt(),e=1)=>AI(i.convert("vec2|vec3"),e,L(1)),XI=(i=Wt(),e=1)=>RI(i.convert("vec2|vec3"),e,L(1)),$I=(i=Wt())=>dI(i.convert("vec2|vec3")),qI=(i=Wt(),e=3,t=2,n=.5,s=1)=>cu(i,L(e),t,n).mul(s),YI=(i=Wt(),e=3,t=2,n=.5,s=1)=>_I(i,L(e),t,n).mul(s),jI=(i=Wt(),e=3,t=2,n=.5,s=1)=>Py(i,L(e),t,n).mul(s),ZI=(i=Wt(),e=3,t=2,n=.5,s=1)=>xI(i,L(e),t,n).mul(s),KI=k(([i,e,t])=>{const n=Jr(i).toVar("nDir"),s=xt(P(.5).mul(e.sub(t)),kr).div(n).toVar("rbmax"),r=xt(P(-.5).mul(e.sub(t)),kr).div(n).toVar("rbmin"),o=B().toVar("rbminmax");o.x=n.x.greaterThan(P(0)).select(s.x,r.x),o.y=n.y.greaterThan(P(0)).select(s.y,r.y),o.z=n.z.greaterThan(P(0)).select(s.z,r.z);const a=li(li(o.x,o.y),o.z).toVar("correction");return kr.add(n.mul(a)).toVar("boxIntersection").sub(t)}),JI=k(([i,e])=>{const t=i.x,n=i.y,s=i.z;let r=e.element(0).mul(.886227);return r=r.add(e.element(1).mul(2*.511664).mul(n)),r=r.add(e.element(2).mul(2*.511664).mul(s)),r=r.add(e.element(3).mul(2*.511664).mul(t)),r=r.add(e.element(4).mul(2*.429043).mul(t).mul(n)),r=r.add(e.element(5).mul(2*.429043).mul(n).mul(s)),r=r.add(e.element(6).mul(s.mul(s).mul(.743125).sub(.247708))),r=r.add(e.element(7).mul(2*.429043).mul(t).mul(s)),r=r.add(e.element(8).mul(.429043).mul(it(t,t).sub(it(n,n)))),r});var g=Object.freeze({__proto__:null,BRDF_GGX:R2,BRDF_Lambert:w2,BasicShadowFilter:yy,Break:Fv,Continue:YC,DFGApprox:C2,D_GGX:Yv,Discard:K0,EPSILON:e0,F_Schlick:Xv,Fn:k,INFINITY:oR,If:mt,Loop:It,NodeAccess:Ki,NodeShaderStage:ff,NodeType:mN,NodeUpdateType:Et,PCFShadowFilter:Sy,PCFSoftShadowFilter:My,PI:Ql,PI2:aR,Return:wR,Schlick_to_F0:P2,ScriptableNodeResources:wl,ShaderNode:Oa,TBNViewMatrix:kp,VSMShadowFilter:Ty,V_GGX_SmithCorrelated:qv,abs:Ft,acesFilmicToneMapping:bL,acos:a0,add:nn,addMethodChaining:j,addNodeElement:bR,agxToneMapping:CL,all:Tp,alphaT:xf,and:Gx,anisotropy:Ux,anisotropyB:zo,anisotropyT:Ml,any:t0,append:vx,arrayBuffer:ON,asin:o0,assign:Ox,atan:bp,atan2:R0,atomicAdd:oD,atomicAnd:uD,atomicFunc:zs,atomicMax:cD,atomicMin:lD,atomicOr:hD,atomicStore:rD,atomicSub:aD,atomicXor:dD,attenuationColor:nR,attenuationDistance:tR,attribute:Is,attributeArray:GP,backgroundBlurriness:jP,backgroundIntensity:ZP,backgroundRotation:KP,batch:Iv,billboarding:SP,bitAnd:qx,bitNot:Yx,bitOr:jx,bitXor:Zx,bitangentGeometry:QR,bitangentLocal:eC,bitangentView:xv,bitangentWorld:tC,bitcast:cR,blendBurn:cy,blendColor:sL,blendDodge:ly,blendOverlay:hy,blendScreen:uy,blur:V2,bool:Ps,buffer:pc,bufferAttribute:uc,bumpMap:Sv,burn:rL,bvec2:Mx,bvec3:vp,bvec4:bx,bypass:q0,cache:$0,call:Fx,cameraFar:Ks,cameraNear:Zs,cameraNormalMatrix:LR,cameraPosition:DR,cameraProjectionMatrix:hc,cameraProjectionMatrixInverse:CR,cameraViewMatrix:yi,cameraWorldMatrix:PR,cbrt:M0,cdl:fL,ceil:Au,checker:VD,cineonToneMapping:wL,clamp:Ds,clearcoat:BN,clearcoatRoughness:kN,code:Uu,color:yx,colorSpaceToWorking:Up,colorToDirection:S2,compute:X0,cond:C0,context:Dp,convert:Nx,convertColorSpace:pR,convertToTexture:IP,cos:vs,cross:Ru,cubeTexture:mv,dFdx:Np,dFdy:Rp,dashSize:jN,defaultBuildStages:gN,defaultShaderStages:dx,defined:$a,degrees:i0,deltaTime:iy,densityFog:GL,densityFogFactor:_y,depth:$p,depthPass:vL,difference:_0,diffuseColor:bi,directPointLight:FD,directionToColor:y2,dispersion:iR,distance:g0,div:Ls,dodge:oL,dot:ur,drawIndex:Pv,dynamicBufferAttribute:W0,element:Ax,emissive:_f,equal:Vx,equals:p0,equirectUV:T2,exp:s0,exp2:Qo,expression:cr,faceDirection:fc,faceForward:Lp,faceforward:lR,float:P,floor:es,fog:Zp,fract:Vs,frameGroup:VN,frameId:hP,frontFacing:rv,fwidth:d0,gain:sP,gapSize:ZN,getConstNodeType:_x,getCurrentStack:xx,getDirection:Kv,getDistanceAttenuation:wy,getGeometryRoughness:$v,getNormalFromDepth:OP,getParallaxCorrectNormal:KI,getRoughness:E2,getScreenPosition:UP,getShIrradianceAt:JI,getTextureIndex:ty,getViewPosition:No,glsl:IL,glslFn:OL,grayscale:lL,greaterThan:Mp,greaterThanEqual:Hx,hash:iP,highpModelNormalViewMatrix:WR,highpModelViewMatrix:GR,hue:dL,instance:GC,instanceIndex:xc,instancedArray:WP,instancedBufferAttribute:tu,instancedDynamicBufferAttribute:vf,instancedMesh:Dv,int:L,inverseSqrt:Ep,inversesqrt:uR,invocationLocalIndex:HC,invocationSubgroupIndex:kC,ior:JN,iridescence:Ix,iridescenceIOR:WN,iridescenceThickness:XN,ivec2:dn,ivec3:Tx,ivec4:wx,js:LL,label:L0,length:eu,lengthSq:T0,lessThan:Bx,lessThanEqual:kx,lightPosition:xy,lightProjectionUV:fD,lightShadowMatrix:Jp,lightTargetDirection:mD,lightTargetPosition:vy,lightViewPosition:pD,lightingContext:Bv,lights:vD,linearDepth:su,linearToneMapping:ML,localId:jL,log:wp,log2:As,logarithmicDepthToViewZ:l2,loop:jC,luminance:jp,mat2:bu,mat3:vi,mat4:Br,matcapUV:$2,materialAO:Nv,materialAlphaTest:Mv,materialAnisotropy:wC,materialAnisotropyVector:Ao,materialAttenuationColor:LC,materialAttenuationDistance:PC,materialClearcoat:xC,materialClearcoatNormal:yC,materialClearcoatRoughness:vC,materialColor:Tv,materialDispersion:zC,materialEmissive:wv,materialIOR:CC,materialIridescence:EC,materialIridescenceIOR:bC,materialIridescenceThickness:AC,materialLightMap:Av,materialLineDashOffset:FC,materialLineDashSize:IC,materialLineGapSize:UC,materialLineScale:DC,materialLineWidth:OC,materialMetalness:_C,materialNormal:bv,materialOpacity:Ev,materialPointWidth:VC,materialReference:Or,materialReflectivity:mC,materialRefractionRatio:uv,materialRotation:SC,materialRoughness:gC,materialSheen:MC,materialSheenRoughness:TC,materialShininess:uC,materialSpecular:hC,materialSpecularColor:fC,materialSpecularIntensity:dC,materialSpecularStrength:pC,materialThickness:RC,materialTransmission:NC,max:yn,maxMipLevel:ev,mediumpModelViewMatrix:iv,metalness:zN,min:li,mix:en,mixElement:A0,mod:Pp,modInt:Sp,modelDirection:VR,modelNormalMatrix:nv,modelPosition:zR,modelScale:BR,modelViewMatrix:dc,modelViewPosition:kR,modelViewProjection:Rv,modelWorldMatrix:ws,modelWorldMatrixInverse:HR,morphReference:Vv,mrt:ny,mul:it,mx_aastep:Ly,mx_cell_noise_float:$I,mx_contrast:zI,mx_fractal_noise_float:qI,mx_fractal_noise_vec2:YI,mx_fractal_noise_vec3:jI,mx_fractal_noise_vec4:ZI,mx_hsvtorgb:CI,mx_noise_float:BI,mx_noise_vec3:kI,mx_noise_vec4:HI,mx_ramplr:DI,mx_ramptb:II,mx_rgbtohsv:PI,mx_safepower:VI,mx_splitlr:UI,mx_splittb:OI,mx_srgb_texture_to_lin_rec709:LI,mx_transform_uv:FI,mx_worley_noise_float:GI,mx_worley_noise_vec2:WI,mx_worley_noise_vec3:XI,negate:c0,neutralToneMapping:PL,nodeArray:zr,nodeImmutable:_e,nodeObject:ee,nodeObjects:oc,nodeProxy:K,normalFlat:ov,normalGeometry:Fp,normalLocal:jn,normalMap:Sf,normalView:rs,normalWorld:av,normalize:Jr,not:Xx,notEqual:zx,numWorkgroups:qL,objectDirection:IR,objectGroup:Px,objectPosition:tv,objectScale:OR,objectViewPosition:FR,objectWorldMatrix:UR,oneMinus:l0,or:Wx,orthographicDepthToViewZ:c2,oscSawtooth:xP,oscSine:mP,oscSquare:gP,oscTriangle:_P,output:Ya,outputStruct:tP,overlay:cL,overloadingFn:An,parabola:bf,parallaxDirection:yv,parallaxUV:iC,parameter:J2,pass:_L,passTexture:xL,pcurve:rP,perspectiveDepthToViewZ:Wp,pmremTexture:W2,pointUV:YP,pointWidth:KN,positionGeometry:Op,positionLocal:Zt,positionPrevious:nu,positionView:fn,positionViewDirection:ri,positionWorld:kr,positionWorldDirection:sv,posterize:mL,pow:Ii,pow2:x0,pow3:v0,pow4:y0,property:Lx,radians:n0,rand:b0,range:XL,rangeFog:HL,rangeFogFactor:gy,reciprocal:h0,reference:Qt,referenceBuffer:yf,reflect:m0,reflectVector:fv,reflectView:hv,reflector:RP,refract:E0,refractVector:pv,refractView:dv,reinhardToneMapping:TL,remainder:Qx,remap:j0,remapClamp:Z0,renderGroup:wt,renderOutput:J0,rendererReference:k0,rotate:Qv,rotateUV:vP,roughness:Dx,round:u0,rtt:ry,sRGBTransferEOTF:O0,sRGBTransferOETF:F0,sampler:RR,saturate:w0,saturation:uL,screen:aL,screenCoordinate:vc,screenSize:iu,screenUV:hr,scriptable:kL,scriptableValue:Tl,select:Xn,setCurrentStack:gf,shaderStages:_N,shadow:OD,shadowPositionWorld:Qp,sharedUniformGroup:yp,sheen:HN,sheenRoughness:GN,shiftLeft:Kx,shiftRight:Jx,shininess:YN,sign:Ap,sin:si,sinc:oP,skinning:$C,skinningReference:Ov,smoothstep:ea,smoothstepElement:N0,specularColor:$N,specularF90:qN,spherizeUV:yP,split:FN,spritesheetUV:wP,sqrt:ls,stack:eP,step:Nu,storage:Iu,storageBarrier:QL,storageObject:HP,storageTexture:oy,string:UN,sub:xt,subgroupIndex:BC,subgroupSize:ZL,tan:r0,tangentGeometry:Pu,tangentLocal:mc,tangentView:gc,tangentWorld:_v,temp:I0,texture:kn,texture3D:Z2,textureBarrier:eD,textureBicubic:L2,textureCubeUV:Jv,textureLoad:jt,textureSize:nr,textureStore:QP,thickness:eR,time:Qr,timerDelta:pP,timerGlobal:fP,timerLocal:dP,toOutputColorSpace:V0,toWorkingColorSpace:z0,toneMapping:H0,toneMappingExposure:G0,toonOutlinePass:SL,transformDirection:S0,transformNormal:lv,transformNormalToView:Vp,transformedBentNormalView:sC,transformedBitangentView:vv,transformedBitangentWorld:nC,transformedClearcoatNormalView:$R,transformedNormalView:Os,transformedNormalWorld:cv,transformedTangentView:Bp,transformedTangentWorld:JR,transmission:QN,transpose:f0,triNoise3D:cP,triplanarTexture:bP,triplanarTextures:sy,trunc:Cp,tslFn:IN,uint:Te,uniform:pt,uniformArray:Ur,uniformGroup:Cx,uniforms:jR,userData:tL,uv:Wt,uvec2:Sx,uvec3:oa,uvec4:Ex,varying:ui,varyingProperty:qa,vec2:fe,vec3:B,vec4:et,vectorComponents:ra,velocity:iL,vertexColor:$P,vertexIndex:Cv,vertexStage:U0,vibrance:hL,viewZToLogarithmicDepth:Xp,viewZToOrthographicDepth:Bo,viewZToPerspectiveDepth:Gv,viewport:Hp,viewportBottomLeft:s2,viewportCoordinate:Hv,viewportDepthTexture:Gp,viewportLinearDepth:u2,viewportMipTexture:o2,viewportResolution:n2,viewportSafeUV:MP,viewportSharedTexture:v2,viewportSize:kv,viewportTexture:r2,viewportTopLeft:i2,viewportUV:t2,wgsl:DL,wgslFn:FL,workgroupArray:iD,workgroupBarrier:JL,workgroupId:YL,workingToColorSpace:B0,xor:$x});const pd=Kv(Wt(),Is("faceIndex")).normalize();B(pd.x,pd.y,pd.z);const Eo=typeof self<"u"?self.GPUShaderStage:{VERTEX:1,FRAGMENT:2,COMPUTE:4};Ki.READ_ONLY+"",Ki.WRITE_ONLY+"",Ki.READ_WRITE+"";Eo&&Eo.VERTEX,Eo&&Eo.FRAGMENT,Eo&&Eo.COMPUTE;const Cr={tsl_xor:new hn("fn tsl_xor( a : bool, b : bool ) -> bool { return ( a || b ) && !( a && b ); }"),mod_float:new hn("fn tsl_mod_float( x : f32, y : f32 ) -> f32 { return x - y * floor( x / y ); }"),mod_vec2:new hn("fn tsl_mod_vec2( x : vec2f, y : vec2f ) -> vec2f { return x - y * floor( x / y ); }"),mod_vec3:new hn("fn tsl_mod_vec3( x : vec3f, y : vec3f ) -> vec3f { return x - y * floor( x / y ); }"),mod_vec4:new hn("fn tsl_mod_vec4( x : vec4f, y : vec4f ) -> vec4f { return x - y * floor( x / y ); }"),equals_bool:new hn("fn tsl_equals_bool( a : bool, b : bool ) -> bool { return a == b; }"),equals_bvec2:new hn("fn tsl_equals_bvec2( a : vec2f, b : vec2f ) -> vec2<bool> { return vec2<bool>( a.x == b.x, a.y == b.y ); }"),equals_bvec3:new hn("fn tsl_equals_bvec3( a : vec3f, b : vec3f ) -> vec3<bool> { return vec3<bool>( a.x == b.x, a.y == b.y, a.z == b.z ); }"),equals_bvec4:new hn("fn tsl_equals_bvec4( a : vec4f, b : vec4f ) -> vec4<bool> { return vec4<bool>( a.x == b.x, a.y == b.y, a.z == b.z, a.w == b.w ); }"),repeatWrapping_float:new hn("fn tsl_repeatWrapping_float( coord: f32 ) -> f32 { return fract( coord ); }"),mirrorWrapping_float:new hn("fn tsl_mirrorWrapping_float( coord: f32 ) -> f32 { let mirrored = fract( coord * 0.5 ) * 2.0; return 1.0 - abs( 1.0 - mirrored ); }"),clampWrapping_float:new hn("fn tsl_clampWrapping_float( coord: f32 ) -> f32 { return clamp( coord, 0.0, 1.0 ); }"),biquadraticTexture:new hn(`
fn tsl_biquadraticTexture( map : texture_2d<f32>, coord : vec2f, iRes : vec2u, level : u32 ) -> vec4f {

	let res = vec2f( iRes );

	let uvScaled = coord * res;
	let uvWrapping = ( ( uvScaled % res ) + res ) % res;

	// https://www.shadertoy.com/view/WtyXRy

	let uv = uvWrapping - 0.5;
	let iuv = floor( uv );
	let f = fract( uv );

	let rg1 = textureLoad( map, vec2u( iuv + vec2( 0.5, 0.5 ) ) % iRes, level );
	let rg2 = textureLoad( map, vec2u( iuv + vec2( 1.5, 0.5 ) ) % iRes, level );
	let rg3 = textureLoad( map, vec2u( iuv + vec2( 0.5, 1.5 ) ) % iRes, level );
	let rg4 = textureLoad( map, vec2u( iuv + vec2( 1.5, 1.5 ) ) % iRes, level );

	return mix( mix( rg1, rg2, f.x ), mix( rg3, rg4, f.x ), f.y );

}
`)},cl={dFdx:"dpdx",dFdy:"- dpdy",mod_float:"tsl_mod_float",mod_vec2:"tsl_mod_vec2",mod_vec3:"tsl_mod_vec3",mod_vec4:"tsl_mod_vec4",equals_bool:"tsl_equals_bool",equals_bvec2:"tsl_equals_bvec2",equals_bvec3:"tsl_equals_bvec3",equals_bvec4:"tsl_equals_bvec4",inversesqrt:"inverseSqrt",bitcast:"bitcast<f32>"};typeof navigator<"u"&&/Windows/g.test(navigator.userAgent)&&(Cr.pow_float=new hn("fn tsl_pow_float( a : f32, b : f32 ) -> f32 { return select( -pow( -a, b ), pow( a, b ), a > 0.0 ); }"),Cr.pow_vec2=new hn("fn tsl_pow_vec2( a : vec2f, b : vec2f ) -> vec2f { return vec2f( tsl_pow_float( a.x, b.x ), tsl_pow_float( a.y, b.y ) ); }",[Cr.pow_float]),Cr.pow_vec3=new hn("fn tsl_pow_vec3( a : vec3f, b : vec3f ) -> vec3f { return vec3f( tsl_pow_float( a.x, b.x ), tsl_pow_float( a.y, b.y ), tsl_pow_float( a.z, b.z ) ); }",[Cr.pow_float]),Cr.pow_vec4=new hn("fn tsl_pow_vec4( a : vec4f, b : vec4f ) -> vec4f { return vec4f( tsl_pow_float( a.x, b.x ), tsl_pow_float( a.y, b.y ), tsl_pow_float( a.z, b.z ), tsl_pow_float( a.w, b.w ) ); }",[Cr.pow_float]),cl.pow_float="tsl_pow_float",cl.pow_vec2="tsl_pow_vec2",cl.pow_vec3="tsl_pow_vec3",cl.pow_vec4="tsl_pow_vec4");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */g.BRDF_GGX;g.BRDF_Lambert;g.BasicShadowFilter;g.Break;g.Continue;g.DFGApprox;g.D_GGX;g.Discard;g.EPSILON;g.F_Schlick;const Uy=g.Fn;g.INFINITY;const QI=g.If;g.Loop;g.NodeShaderStage;g.NodeType;g.NodeUpdateType;g.NodeAccess;g.PCFShadowFilter;g.PCFSoftShadowFilter;g.PI;g.PI2;g.Return;g.Schlick_to_F0;g.ScriptableNodeResources;g.ShaderNode;g.TBNViewMatrix;g.VSMShadowFilter;g.V_GGX_SmithCorrelated;g.abs;g.acesFilmicToneMapping;g.acos;g.add;g.addNodeElement;g.agxToneMapping;g.all;g.alphaT;g.and;g.anisotropy;g.anisotropyB;g.anisotropyT;g.any;g.append;g.arrayBuffer;g.asin;g.assign;g.atan;g.atan2;g.atomicAdd;g.atomicAnd;g.atomicFunc;g.atomicMax;g.atomicMin;g.atomicOr;g.atomicStore;g.atomicSub;g.atomicXor;g.attenuationColor;g.attenuationDistance;g.attribute;g.attributeArray;g.backgroundBlurriness;g.backgroundIntensity;g.backgroundRotation;g.batch;g.billboarding;g.bitAnd;g.bitNot;g.bitOr;g.bitXor;g.bitangentGeometry;g.bitangentLocal;g.bitangentView;g.bitangentWorld;g.bitcast;g.blendBurn;g.blendColor;g.blendDodge;g.blendOverlay;g.blendScreen;g.blur;g.bool;g.buffer;g.bufferAttribute;g.bumpMap;g.burn;g.bvec2;g.bvec3;g.bvec4;g.bypass;g.cache;g.call;g.cameraFar;g.cameraNear;g.cameraNormalMatrix;g.cameraPosition;g.cameraProjectionMatrix;g.cameraProjectionMatrixInverse;g.cameraViewMatrix;g.cameraWorldMatrix;g.cbrt;g.cdl;g.ceil;g.checker;g.cineonToneMapping;g.clamp;g.clearcoat;g.clearcoatRoughness;g.code;g.color;g.colorSpaceToWorking;g.colorToDirection;g.compute;g.cond;g.context;g.convert;g.convertColorSpace;g.convertToTexture;g.cos;g.cross;g.cubeTexture;g.dFdx;g.dFdy;g.dashSize;g.defaultBuildStages;g.defaultShaderStages;g.defined;g.degrees;g.deltaTime;g.densityFog;g.densityFogFactor;g.depth;g.depthPass;g.difference;g.diffuseColor;g.directPointLight;g.directionToColor;g.dispersion;g.distance;g.div;g.dodge;g.dot;g.drawIndex;g.dynamicBufferAttribute;g.element;g.emissive;g.equal;g.equals;g.equirectUV;const e3=g.exp;g.exp2;g.expression;g.faceDirection;g.faceForward;g.faceforward;const e_=g.float;g.floor;g.fog;g.fract;g.frameGroup;g.frameId;g.frontFacing;g.fwidth;g.gain;g.gapSize;g.getConstNodeType;g.getCurrentStack;g.getDirection;g.getDistanceAttenuation;g.getGeometryRoughness;g.getNormalFromDepth;g.getParallaxCorrectNormal;g.getRoughness;g.getScreenPosition;g.getShIrradianceAt;g.getTextureIndex;g.getViewPosition;g.glsl;g.glslFn;g.grayscale;g.greaterThan;g.greaterThanEqual;g.hash;g.highpModelNormalViewMatrix;g.highpModelViewMatrix;g.hue;g.instance;g.instanceIndex;g.instancedArray;g.instancedBufferAttribute;g.instancedDynamicBufferAttribute;g.instancedMesh;g.int;g.inverseSqrt;g.inversesqrt;g.invocationLocalIndex;g.invocationSubgroupIndex;g.ior;g.iridescence;g.iridescenceIOR;g.iridescenceThickness;g.ivec2;g.ivec3;g.ivec4;g.js;g.label;const t3=g.length;g.lengthSq;g.lessThan;g.lessThanEqual;g.lightPosition;g.lightTargetDirection;g.lightTargetPosition;g.lightViewPosition;g.lightingContext;g.lights;g.linearDepth;g.linearToneMapping;g.localId;g.log;g.log2;g.logarithmicDepthToViewZ;g.loop;g.luminance;g.mediumpModelViewMatrix;g.mat2;g.mat3;g.mat4;g.matcapUV;g.materialAO;g.materialAlphaTest;g.materialAnisotropy;g.materialAnisotropyVector;g.materialAttenuationColor;g.materialAttenuationDistance;g.materialClearcoat;g.materialClearcoatNormal;g.materialClearcoatRoughness;g.materialColor;g.materialDispersion;g.materialEmissive;g.materialIOR;g.materialIridescence;g.materialIridescenceIOR;g.materialIridescenceThickness;g.materialLightMap;g.materialLineDashOffset;g.materialLineDashSize;g.materialLineGapSize;g.materialLineScale;g.materialLineWidth;g.materialMetalness;g.materialNormal;g.materialOpacity;g.materialPointWidth;g.materialReference;g.materialReflectivity;g.materialRefractionRatio;g.materialRotation;g.materialRoughness;g.materialSheen;g.materialSheenRoughness;g.materialShininess;g.materialSpecular;g.materialSpecularColor;g.materialSpecularIntensity;g.materialSpecularStrength;g.materialThickness;g.materialTransmission;g.max;g.maxMipLevel;g.metalness;g.min;g.mix;g.mixElement;g.mod;g.modInt;g.modelDirection;g.modelNormalMatrix;g.modelPosition;g.modelScale;g.modelViewMatrix;g.modelViewPosition;g.modelViewProjection;g.modelWorldMatrix;g.modelWorldMatrixInverse;g.morphReference;g.mrt;g.mul;g.mx_aastep;g.mx_cell_noise_float;g.mx_contrast;g.mx_fractal_noise_float;g.mx_fractal_noise_vec2;g.mx_fractal_noise_vec3;g.mx_fractal_noise_vec4;g.mx_hsvtorgb;g.mx_noise_float;g.mx_noise_vec3;g.mx_noise_vec4;g.mx_ramplr;g.mx_ramptb;g.mx_rgbtohsv;g.mx_safepower;g.mx_splitlr;g.mx_splittb;g.mx_srgb_texture_to_lin_rec709;g.mx_transform_uv;g.mx_worley_noise_float;g.mx_worley_noise_vec2;g.mx_worley_noise_vec3;g.negate;g.neutralToneMapping;g.nodeArray;g.nodeImmutable;g.nodeObject;g.nodeObjects;g.nodeProxy;g.normalFlat;g.normalGeometry;g.normalLocal;g.normalMap;g.normalView;g.normalWorld;g.normalize;g.not;g.notEqual;g.numWorkgroups;g.objectDirection;g.objectGroup;g.objectPosition;g.objectScale;g.objectViewPosition;g.objectWorldMatrix;g.oneMinus;g.or;g.orthographicDepthToViewZ;g.oscSawtooth;g.oscSine;g.oscSquare;g.oscTriangle;g.output;g.outputStruct;g.overlay;g.overloadingFn;g.parabola;g.parallaxDirection;g.parallaxUV;g.parameter;g.pass;g.passTexture;g.pcurve;g.perspectiveDepthToViewZ;g.pmremTexture;g.pointUV;g.pointWidth;g.positionGeometry;g.positionLocal;g.positionPrevious;g.positionView;g.positionViewDirection;g.positionWorld;g.positionWorldDirection;g.posterize;g.pow;g.pow2;g.pow3;g.pow4;g.property;g.radians;g.rand;g.range;g.rangeFog;g.rangeFogFactor;g.reciprocal;g.reference;g.referenceBuffer;g.reflect;g.reflectVector;g.reflectView;g.reflector;g.refract;g.refractVector;g.refractView;g.reinhardToneMapping;g.remainder;g.remap;g.remapClamp;g.renderGroup;g.renderOutput;g.rendererReference;g.rotate;g.rotateUV;g.roughness;g.round;g.rtt;g.sRGBTransferEOTF;g.sRGBTransferOETF;g.sampler;g.saturate;g.saturation;g.screen;g.screenCoordinate;g.screenSize;const n3=g.screenUV;g.scriptable;g.scriptableValue;g.select;g.setCurrentStack;g.shaderStages;g.shadow;g.shadowPositionWorld;g.sharedUniformGroup;g.sheen;g.sheenRoughness;g.shiftLeft;g.shiftRight;g.shininess;g.sign;g.sin;g.sinc;g.skinning;g.skinningReference;g.smoothstep;g.smoothstepElement;g.specularColor;g.specularF90;g.spherizeUV;g.split;g.spritesheetUV;g.sqrt;g.stack;g.step;g.storage;g.storageBarrier;g.storageObject;g.storageTexture;g.string;g.sub;g.subgroupIndex;g.subgroupSize;g.tan;g.tangentGeometry;g.tangentLocal;g.tangentView;g.tangentWorld;g.temp;const Af=g.texture;g.texture3D;g.textureBarrier;g.textureBicubic;g.textureCubeUV;g.textureLoad;g.textureSize;g.textureStore;g.thickness;g.threshold;g.time;g.timerDelta;g.timerGlobal;g.timerLocal;g.toOutputColorSpace;g.toWorkingColorSpace;g.toneMapping;g.toneMappingExposure;g.toonOutlinePass;g.transformDirection;g.transformNormal;g.transformNormalToView;g.transformedBentNormalView;g.transformedBitangentView;g.transformedBitangentWorld;g.transformedClearcoatNormalView;g.transformedNormalView;g.transformedNormalWorld;g.transformedTangentView;g.transformedTangentWorld;g.transmission;g.transpose;g.tri;g.tri3;g.triNoise3D;g.triplanarTexture;g.triplanarTextures;g.trunc;g.tslFn;g.uint;const Oy=g.uniform;g.uniformArray;g.uniformGroup;g.uniforms;g.userData;const md=g.uv;g.uvec2;g.uvec3;g.uvec4;g.varying;g.varyingProperty;g.vec2;const t_=g.vec3,Fy=g.vec4;g.vectorComponents;g.velocity;g.vertexColor;g.vertexIndex;g.vibrance;g.viewZToLogarithmicDepth;g.viewZToOrthographicDepth;g.viewZToPerspectiveDepth;g.viewport;g.viewportBottomLeft;g.viewportCoordinate;g.viewportDepthTexture;g.viewportLinearDepth;g.viewportMipTexture;g.viewportResolution;g.viewportSafeUV;g.viewportSharedTexture;g.viewportSize;g.viewportTexture;g.viewportTopLeft;g.viewportUV;g.wgsl;g.wgslFn;g.workgroupArray;g.workgroupBarrier;g.workgroupId;g.workingToColorSpace;g.xor;class ll extends lp{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const s=n.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}const n_=new as,ul=new R;class Vy extends cw{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new $t(e,3)),this.setAttribute("uv",new $t(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Kl(t,6,1);return this.setAttribute("instanceStart",new Ts(n,3,0)),this.setAttribute("instanceEnd",new Ts(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Kl(t,6,1);return this.setAttribute("instanceColorStart",new Ts(n,3,0)),this.setAttribute("instanceColorEnd",new Ts(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new tw(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),n_.setFromBufferAttribute(t),this.boundingBox.union(n_))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ul.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ul)),ul.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ul));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}Me.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new de(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Wn.line={uniforms:rp.merge([Me.common,Me.fog,Me.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class We extends Cs{constructor(e){super({type:"LineMaterial",uniforms:rp.clone(Wn.line.uniforms),vertexShader:Wn.line.vertexShader,fragmentShader:Wn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const gd=new _t,i_=new R,s_=new R,Tn=new _t,wn=new _t,Bi=new _t,_d=new R,xd=new Ne,En=new uw,r_=new R,hl=new as,dl=new jr,ki=new _t;let ji,Hr;function o_(i,e,t){return ki.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),ki.multiplyScalar(1/ki.w),ki.x=Hr/t.width,ki.y=Hr/t.height,ki.applyMatrix4(i.projectionMatrixInverse),ki.multiplyScalar(1/ki.w),Math.abs(Math.max(ki.x,ki.y))}function i3(i,e){const t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){En.start.fromBufferAttribute(s,a),En.end.fromBufferAttribute(r,a),En.applyMatrix4(t);const l=new R,u=new R;ji.distanceSqToSegment(En.start,En.end,u,l),u.distanceTo(l)<Hr*.5&&e.push({point:u,pointOnLine:l,distance:ji.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function s3(i,e,t){const n=e.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),h=-e.near;ji.at(1,Bi),Bi.w=1,Bi.applyMatrix4(e.matrixWorldInverse),Bi.applyMatrix4(n),Bi.multiplyScalar(1/Bi.w),Bi.x*=r.x/2,Bi.y*=r.y/2,Bi.z=0,_d.copy(Bi),xd.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=u;d<p;d++){if(Tn.fromBufferAttribute(c,d),wn.fromBufferAttribute(l,d),Tn.w=1,wn.w=1,Tn.applyMatrix4(xd),wn.applyMatrix4(xd),Tn.z>h&&wn.z>h)continue;if(Tn.z>h){const y=Tn.z-wn.z,v=(Tn.z-h)/y;Tn.lerp(wn,v)}else if(wn.z>h){const y=wn.z-Tn.z,v=(wn.z-h)/y;wn.lerp(Tn,v)}Tn.applyMatrix4(n),wn.applyMatrix4(n),Tn.multiplyScalar(1/Tn.w),wn.multiplyScalar(1/wn.w),Tn.x*=r.x/2,Tn.y*=r.y/2,wn.x*=r.x/2,wn.y*=r.y/2,En.start.copy(Tn),En.start.z=0,En.end.copy(wn),En.end.z=0;const x=En.closestPointToPointParameter(_d,!0);En.at(x,r_);const m=yu.lerp(Tn.z,wn.z,x),f=m>=-1&&m<=1,w=_d.distanceTo(r_)<Hr*.5;if(f&&w){En.start.fromBufferAttribute(c,d),En.end.fromBufferAttribute(l,d),En.start.applyMatrix4(o),En.end.applyMatrix4(o);const y=new R,v=new R;ji.distanceSqToSegment(En.start,En.end,v,y),t.push({point:v,pointOnLine:y,distance:ji.origin.distanceTo(v),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class r3 extends W{constructor(e=new Vy,t=new We({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)i_.fromBufferAttribute(t,o),s_.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+i_.distanceTo(s_);const r=new Kl(s,2,1);return e.setAttribute("instanceDistanceStart",new Ts(r,1,0)),e.setAttribute("instanceDistanceEnd",new Ts(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ji=e.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;Hr=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),dl.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=Hr*.5;else{const h=Math.max(s.near,dl.distanceToPoint(ji.origin));l=o_(s,h,c.resolution)}if(dl.radius+=l,ji.intersectsSphere(dl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),hl.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=Hr*.5;else{const h=Math.max(s.near,hl.distanceToPoint(ji.origin));u=o_(s,h,c.resolution)}hl.expandByScalar(u),ji.intersectsBox(hl)!==!1&&(n?i3(this,t):s3(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(gd),this.material.uniforms.resolution.value.set(gd.z,gd.w))}}class Xe extends Vy{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}setFromPoints(e){const t=e.length-1,n=new Float32Array(6*t);for(let s=0;s<t;s++)n[6*s]=e[s].x,n[6*s+1]=e[s].y,n[6*s+2]=e[s].z||0,n[6*s+3]=e[s+1].x,n[6*s+4]=e[s+1].y,n[6*s+5]=e[s+1].z||0;return super.setPositions(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Ye extends r3{constructor(e=new Xe,t=new We({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}class o3 extends hp{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new aw(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const c=r.parse(JSON.parse(a));t&&t(c)},n,s)}parse(e){return new a3(e)}}class a3{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],s=c3(e,t,this.data);for(let r=0,o=s.length;r<o;r++)n.push(...s[r].toShapes());return n}}function c3(i,e,t){const n=Array.from(i),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,c=0;for(let l=0;l<n.length;l++){const u=n[l];if(u===`
`)a=0,c-=r;else{const h=l3(u,s,a,c,t);a+=h.offsetX,o.push(h.path)}}return o}function l3(i,e,t,n,s){const r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const o=new hw;let a,c,l,u,h,d,p,_;if(r.o){const x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,f=x.length;m<f;)switch(x[m++]){case"m":a=x[m++]*e+t,c=x[m++]*e+n,o.moveTo(a,c);break;case"l":a=x[m++]*e+t,c=x[m++]*e+n,o.lineTo(a,c);break;case"q":l=x[m++]*e+t,u=x[m++]*e+n,h=x[m++]*e+t,d=x[m++]*e+n,o.quadraticCurveTo(h,d,l,u);break;case"b":l=x[m++]*e+t,u=x[m++]*e+n,h=x[m++]*e+t,d=x[m++]*e+n,p=x[m++]*e+t,_=x[m++]*e+n,o.bezierCurveTo(h,d,p,_,l,u);break}}return{offsetX:r.ha*e,path:o}}const u3=new o3,h3="src/utils/CascadiaMonoPL_RegularInverted.json",fl={size:12,depth:5},pl={size:6,depth:5},De=(i,e="")=>{let t=new Ea;return u3.load(h3,n=>{const s=new ll(i,{font:n,size:fl.size,depth:fl.depth,bevelEnabled:!0,bevelThickness:1,bevelSize:.25,bevelOffset:0,bevelSegments:12}),r=new ll(i,{font:n,size:fl.size,depth:fl.depth,bevelEnabled:!0,bevelThickness:1,bevelSize:1.45,bevelOffset:0,bevelSegments:12}),o=new W(s,new re({color:2368548})),a=new W(r,new re({color:10066329}));if(o.add(a),a.position.set(0,0,-5),t.add(o),e==="")return;const c=new ll(e,{font:n,size:pl.size,depth:pl.depth,bevelEnabled:!0,bevelThickness:1,bevelSize:.25,bevelOffset:0,bevelSegments:12}),l=new ll(e,{font:n,size:pl.size,depth:pl.depth,bevelEnabled:!0,bevelThickness:1,bevelSize:1.45,bevelOffset:0,bevelSegments:12}),u=new W(c,new re({color:2368548})),h=new W(l,new re({color:10066329}));u.add(h),h.position.z=-5,u.position.set(i.length*11,13,0),t.add(u)}),t},eo=new gn;eo.background=new Ze(2368548);eo.userData.title="e<sup>jθ</sup>";new R;new R;new Ne;new Ne;const Nf=100,zy=new W(new ce(2),new Vt);eo.add(zy);const d3=new W(new Gt(Nf,2),new re({color:10066329})),nm=new W(new ce(3),new re({color:1118481,depthTest:!1}));nm.renderOrder=2;const im=new W(new ce(3),new re({color:1118481,depthTest:!1}));nm.renderOrder=2;const f3=De("e","jθ");im.add(f3);eo.add(d3,nm);eo.add(im);const p3=i=>{let e=Math.atan2(i.y,i.x),t=1,n=0;zy.position.set(i.x,i.y,0),t=Math.cos(e),n=Math.sin(e),im.position.set(Nf*t,Nf*n,0)};eo.userData.update=p3;const m3=eo,to=new gn;to.background=new Ze(2368548);to.userData.title="e<sup>-jθ</sup>";new R;const Hi=new R;new Ne;new Ne;const ko=100,a_=ko*ko,By=new W(new ce(2),new Vt),ky=new W(new ce(2),new Vt({side:Kt}));to.add(By,ky);const g3=new W(new Gt(ko,2),new re({color:10066329})),Hy=new W(new ce(3),new re({color:1118481,depthTest:!1}));Hy.renderOrder=2;const sm=new W(new ce(3),new re({color:1118481,depthTest:!1})),rm=new W(new ce(3),new re({color:13421772,depthTest:!1})),_3=De("e","-jθ"),x3=De("e","jθ");sm.add(x3);rm.add(_3);to.add(g3,Hy);to.add(sm,rm);const v3=i=>{let e=Math.atan2(i.y,i.x),t=1,n=0;By.position.set(i.x,i.y,0),Hi.set(i.x,i.y,0);const s=Hi.x*Hi.x+Hi.y*Hi.y;Hi.set(a_*Hi.x/s,a_*Hi.y/s,0),ky.position.set(Hi.x,-Hi.y,0),t=Math.cos(e),n=Math.sin(e),sm.position.set(ko*t,ko*n,0),rm.position.set(ko*t,-100*n,0)};to.userData.update=v3;const y3=to,no=new gn;no.background=new Ze(2368548);no.userData.title="cosθ = (e<sup>jθ</sup>+e<sup>-jθ</sup>)/2";new R;const Gi=new R;new Ne;new Ne;const ja=100,Va=ja/2,c_=ja*ja,Gy=new W(new ce(2),new Vt),Wy=new W(new ce(2),new Vt({side:Kt}));no.add(Gy,Wy);const S3=new W(new Gt(ja,2),new re({color:10066329})),om=new W(new ce(3),new re({color:1118481,depthTest:!1}));om.renderOrder=2;const Fu=new W(new ce(3),new re({color:1118481,depthTest:!1}));Fu.renderOrder=2;const Vu=new W(new ce(3),new re({color:13421772,depthTest:!1}));Vu.renderOrder=2;const zu=new W(new ce(3),new re({color:8947967,depthTest:!1}));zu.renderOrder=2;const M3=new W(new Gt(Va,2),new re({color:10066329})),T3=new W(new Gt(Va,2),new re({color:10066329})),Xy=De("e","-jθ"),$y=De("e","jθ"),w3=De("  /2"),E3=De("  /2"),b3=De("cosθ");$y.add(w3);Xy.add(E3);Fu.add($y,T3);Vu.add(Xy);zu.add(b3);om.add(M3);no.add(S3,om);no.add(Fu,Vu,zu);const A3=i=>{let e=Math.atan2(i.y,i.x),t=1,n=0;Gy.position.set(i.x,i.y,0),Gi.set(i.x,i.y,0);const s=Gi.x*Gi.x+Gi.y*Gi.y;Gi.set(c_*Gi.x/s,c_*Gi.y/s,0),Wy.position.set(Gi.x,-Gi.y,0),t=Math.cos(e),n=Math.sin(e),Fu.position.set(Va*t,Va*n,0),Vu.position.set(Va*t,-50*n,0),zu.position.set(ja*t,0,0)};no.userData.update=A3;const N3=no,io=new gn;io.background=new Ze(2368548);io.userData.title="jsinθ = (e<sup>jθ</sup>-e<sup>-jθ</sup>)/2";new R;const Wi=new R;new Ne;new Ne;const Za=100,Io=Za/2,l_=Za*Za,qy=new W(new ce(2),new Vt),Yy=new W(new ce(2),new Vt({side:Kt}));io.add(qy,Yy);const R3=new W(new Gt(Za,2),new re({color:10066329})),am=new W(new ce(3),new re({color:1118481,depthTest:!1}));am.renderOrder=2;const Bu=new W(new ce(3),new re({color:1118481,depthTest:!1}));Bu.renderOrder=2;const ku=new W(new ce(3),new re({color:13421772,depthTest:!1}));ku.renderOrder=2;const cm=new W(new ce(3),new re({color:16777215,depthTest:!1}));cm.renderOrder=2;const Hu=new W(new ce(3),new re({color:16746632,depthTest:!1}));Hu.renderOrder=2;const C3=new W(new Gt(Io,2),new re({color:10066329})),P3=new W(new Gt(Io,2),new re({color:10066329})),jy=De("e","-jθ"),Zy=De("e","jθ"),L3=De("  /2"),D3=De("  /2"),I3=De("jsinθ");Zy.add(L3);jy.add(D3);Bu.add(Zy,P3);ku.add(jy);Hu.add(I3);am.add(C3);io.add(R3,am);io.add(Bu,cm,ku,Hu);const U3=i=>{let e=Math.atan2(i.y,i.x),t=1,n=0;qy.position.set(i.x,i.y,0),Wi.set(i.x,i.y,0);const s=Wi.x*Wi.x+Wi.y*Wi.y;Wi.set(l_*Wi.x/s,l_*Wi.y/s,0),Yy.position.set(Wi.x,-Wi.y,0),t=Math.cos(e),n=Math.sin(e),Bu.position.set(Io*t,Io*n,0),ku.position.set(Io*t,-50*n,0),cm.position.set(-50*t,Io*n,0),Hu.position.set(0,Za*n,0)};io.userData.update=U3;const O3=io,us=1118481,F3=12303291,Fi=12303359,Vi=16759739,ca=12320699,so=16777147,Gu=12320767,lm=16759807,dr=new gn;dr.background=new Ze(2368548);dr.userData.title="e<sup>jθ</sup> = cosθ + jsinθ";new R;const Xi=new R;new Ne;new Ne;const Ri=100,u_=Ri*Ri,Ky=new W(new ce(2),new Vt),Jy=new W(new ce(2),new Vt({side:Kt}));dr.add(Ky,Jy);const V3=new W(new Gt(Ri,2),new re({color:10066329})),Qy=new W(new ce(3),new re({color:1118481,depthTest:!1}));Qy.renderOrder=2;const Wu=new W(new ce(3),new re({color:1118481,depthTest:!1}));Wu.renderOrder=2;const Ka=new W(new ce(3),new re({color:8947967,depthTest:!1}));Ka.renderOrder=2;const Xu=new W(new ce(3),new re({color:16746632,depthTest:!1}));Xu.renderOrder=2;const z3=De("e","jθ"),B3=De("cosθ"),k3=De("jsinθ");Wu.add(z3);Ka.add(B3);Xu.add(k3);dr.add(V3,Qy);dr.add(Wu,Ka,Xu);const eS=new Ye(new Xe().setPositions([0,0,0,Ri,0,0]),new We({color:us,linewidth:2})),Rf=new Ye(new Xe().setPositions([0,0,0,Ri,0,0]),new We({color:Fi,linewidth:2})),El=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:Vi,linewidth:2}));dr.add(eS,Rf,El);const H3=i=>{let e=Math.atan2(i.y,i.x),t=1,n=0;Ky.position.set(i.x,i.y,0),Xi.set(i.x,i.y,0);const s=Xi.x*Xi.x+Xi.y*Xi.y;Xi.set(u_*Xi.x/s,u_*Xi.y/s,0),Jy.position.set(Xi.x,-Xi.y,0),t=Math.cos(e),n=Math.sin(e),Wu.position.set(Ri*t,Ri*n,0),Xu.position.set(0,Ri*n,0),Ka.position.set(Ri*t,0,0),eS.rotation.z=e,El.position.x=Ka.position.x,El.geometry.getAttribute("instanceEnd").setY(0,n*Ri),El.geometry.getAttribute("instanceEnd").needsUpdate=!0,Rf.geometry.getAttribute("instanceEnd").setX(0,t*Ri),Rf.geometry.getAttribute("instanceEnd").needsUpdate=!0};dr.userData.update=H3;const G3=dr,ro=new gn;ro.background=new Ze(2368548);ro.userData.title="e<sup>jθ</sup>";new R;new R;const h_=new Ne;new Ne;const lu=100,tS=new W(new ce(2),new Vt);ro.add(tS);const W3=new W(new Gt(lu,2),new re({color:10066329})),nS=new W(new ce(3),new re({color:1118481,depthTest:!1}));nS.renderOrder=2;const $u=new W(new ce(3),new re({color:1118481,depthTest:!1}));$u.renderOrder=2;const Cf=200,Ja=new yT(new Gt(lu,2.5,12,3,2*Math.PI/Cf),new re({color:15623799}),Cf);for(let i=0,e=Ja.count;i<e;i++)h_.makeRotationZ(i*Math.PI*2/e),Ja.setMatrixAt(i,h_);Ja.instanceMatrix.needsUpdate=!0;const X3=De("e","jθ");$u.add(X3);ro.add(W3,nS);ro.add($u,Ja);let d_=1;const $3=i=>{let e=Math.atan2(i.y,i.x),t=1,n=0;tS.position.set(i.x,i.y,0),t=Math.cos(e),n=Math.sin(e),$u.position.set(lu*t,lu*n,0),d_=e>0?e/Math.PI/2:1+e/Math.PI/2,Ja.count=Math.floor(d_*Cf)};ro.userData.update=$3;const q3=ro,fr=new gn;fr.background=new Ze(2368548);fr.userData.title="jtanθ = jsinθ / cosθ";new R;const $i=new R;new Ne;new Ne;const xn=100,f_=xn*xn,iS=new W(new ce(2),new Vt),sS=new W(new ce(2),new Vt({side:Kt}));fr.add(iS,sS);const Y3=new W(new Gt(xn,2),new re({color:10066329})),rS=new W(new ce(3),new re({color:1118481,depthTest:!1}));rS.renderOrder=2;const qu=new W(new ce(3),new re({color:1118481,depthTest:!1}));qu.renderOrder=2;const Qa=new W(new ce(3),new re({color:8947967,depthTest:!1}));Qa.renderOrder=2;const Mc=new W(new ce(3),new re({color:16746632,depthTest:!1}));Mc.renderOrder=2;const um=new W(new ce(3),new re({color:8978312,depthTest:!1}));Mc.renderOrder=2;const j3=De("e","jθ"),Z3=De("cosθ"),K3=De("jsinθ"),J3=De("jtanθ");qu.add(j3);Qa.add(Z3);Mc.add(K3);um.add(J3);fr.add(Y3,rS);fr.add(qu,Qa,Mc,um);const oS=new Ye(new Xe().setPositions([0,0,0,xn,0,0]),new We({color:us,linewidth:6})),Pf=new Ye(new Xe().setPositions([0,0,0,xn,0,0]),new We({color:Fi,linewidth:2})),bl=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:Vi,linewidth:2})),Al=new Ye(new Xe().setPositions([0,0,0,0,xn,0]),new We({color:ca,linewidth:2})),Nl=new Ye(new Xe().setPositions([0,0,0,xn,0,0]),new We({color:so,linewidth:2}));fr.add(oS,Pf,bl,Al,Nl);const Q3=i=>{let e=Math.atan2(i.y,i.x),t=1,n=0,s=0;iS.position.set(i.x,i.y,0),$i.set(i.x,i.y,0);const r=$i.x*$i.x+$i.y*$i.y;$i.set(f_*$i.x/r,f_*$i.y/r,0),sS.position.set($i.x,-$i.y,0),t=Math.cos(e),n=Math.sin(e),s=Math.tan(e),qu.position.set(xn*t,xn*n,0),Mc.position.set(0,xn*n,0),Qa.position.set(xn*t,0,0),um.position.set(xn,s*xn,0),oS.rotation.z=e,bl.position.x=Qa.position.x,bl.geometry.getAttribute("instanceEnd").setY(0,n*xn),bl.geometry.getAttribute("instanceEnd").needsUpdate=!0,Pf.geometry.getAttribute("instanceEnd").setX(0,t*xn),Pf.geometry.getAttribute("instanceEnd").needsUpdate=!0,Al.position.x=xn,Al.geometry.getAttribute("instanceEnd").setY(0,s*xn),Al.geometry.getAttribute("instanceEnd").needsUpdate=!0,Nl.rotation.z=e,Nl.geometry.getAttribute("instanceEnd").setX(0,xn/t),Nl.geometry.getAttribute("instanceEnd").needsUpdate=!0};fr.userData.update=Q3;const eU=fr,pr=new gn;pr.background=new Ze(2368548);pr.userData.title="wip:tanθ & secθ";new R;new R;new Ne;new Ne;const Fn=100,aS=new W(new ce(2),new Vt);pr.add(aS);const tU=new W(new Gt(Fn,2),new re({color:10066329})),cS=new W(new ce(3),new re({color:1118481,depthTest:!1}));cS.renderOrder=2;const Ho=new W(new ce(3),new re({color:1118481,depthTest:!1}));Ho.renderOrder=2;const ec=new W(new ce(3),new re({color:8947967,depthTest:!1}));ec.renderOrder=2;const Yu=new W(new ce(3),new re({color:16746632,depthTest:!1}));Yu.renderOrder=2;const ju=new W(new ce(3),new re({color:8978312,depthTest:!1}));ju.renderOrder=2;const Go=new W(new ce(3),new re({color:16777096,depthTest:!1}));Go.renderOrder=2;const nU=De("e","jθ"),iU=De("cosθ"),sU=De("jsinθ"),rU=De("tanθ"),oU=De("secθ");Ho.add(nU);ec.add(iU);Yu.add(sU);ju.add(rU);Go.add(oU);pr.add(tU,cS);pr.add(Ho,ec,Yu,ju,Go);const lS=new Ye(new Xe().setPositions([0,0,0,Fn,0,0]),new We({color:us,linewidth:2})),uu=new Ye(new Xe().setPositions([0,0,0,Fn,0,0]),new We({color:Fi,linewidth:2}));uu.position.z=10;const Rl=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:Vi,linewidth:2})),Aa=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:ca,linewidth:2})),Lf=new Ye(new Xe().setPositions([0,0,0,Fn,0,0]),new We({color:so,linewidth:2}));pr.add(lS,uu,Rl,Aa,Lf);const aU=i=>{let e=Math.atan2(i.y,i.x),t=1,n=0;aS.position.set(i.x,i.y,0),t=Math.cos(e),n=Math.sin(e),Ho.position.set(Fn*t,Fn*n,0),Yu.position.set(0,Fn*n,0),ec.position.set(Fn*t,0,0),Go.position.set(Fn/t,0,0),ju.position.set((Ho.position.x+Go.position.x)/2,(Ho.position.y+Go.position.y)/2,0),lS.rotation.z=e,Rl.position.x=ec.position.x,Rl.geometry.getAttribute("instanceEnd").setY(0,n*Fn),Rl.geometry.getAttribute("instanceEnd").needsUpdate=!0,uu.geometry.getAttribute("instanceEnd").setX(0,t*Fn),uu.geometry.getAttribute("instanceEnd").needsUpdate=!0,Aa.geometry.getAttribute("instanceStart").setXY(0,t*Fn,n*Fn),Aa.geometry.getAttribute("instanceEnd").setX(0,Fn/t),Aa.geometry.getAttribute("instanceStart").needsUpdate=!0,Aa.geometry.getAttribute("instanceEnd").needsUpdate=!0,Lf.geometry.getAttribute("instanceEnd").setX(0,Fn/t),Lf.geometry.getAttribute("instanceEnd").needsUpdate=!0};pr.userData.update=aU;const cU=pr,mr=new gn;mr.background=new Ze(2368548);mr.userData.title="secθ = 1 / cosθ";new R;new R;new Ne;new Ne;const gi=100,uS=new W(new ce(2),new Vt);mr.add(uS);const lU=new W(new Gt(gi,2),new re({color:10066329})),hS=new W(new ce(3),new re({color:1118481,depthTest:!1}));hS.renderOrder=2;const Zu=new W(new ce(3),new re({color:1118481,depthTest:!1}));Zu.renderOrder=2;const tc=new W(new ce(3),new re({color:8947967,depthTest:!1}));tc.renderOrder=2;const Ku=new W(new ce(3),new re({color:16746632,depthTest:!1}));Ku.renderOrder=2;const Ju=new W(new ce(3),new re({color:16777096,depthTest:!1}));Ju.renderOrder=2;const uU=De("e","jθ"),hU=De("cosθ"),dU=De("jsinθ"),fU=De("secθ");Zu.add(uU);tc.add(hU);Ku.add(dU);Ju.add(fU);mr.add(lU,hS);mr.add(Zu,tc,Ku,Ju);const dS=new Ye(new Xe().setPositions([0,0,0,gi,0,0]),new We({color:us,linewidth:2})),hu=new Ye(new Xe().setPositions([0,0,0,gi,0,0]),new We({color:Fi,linewidth:2}));hu.position.z=10;const Cl=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:Vi,linewidth:2})),Df=new Ye(new Xe().setPositions([0,0,0,gi,0,0]),new We({color:so,linewidth:2}));mr.add(dS,hu,Cl,Df);const pU=i=>{let e=Math.atan2(i.y,i.x),t=1,n=0;uS.position.set(i.x,i.y,0),t=Math.cos(e),n=Math.sin(e),Zu.position.set(gi*t,gi*n,0),Ku.position.set(0,gi*n,0),tc.position.set(gi*t,0,0),Ju.position.set(gi/t,0,0),dS.rotation.z=e,Cl.position.x=tc.position.x,Cl.geometry.getAttribute("instanceEnd").setY(0,n*gi),Cl.geometry.getAttribute("instanceEnd").needsUpdate=!0,hu.geometry.getAttribute("instanceEnd").setX(0,t*gi),hu.geometry.getAttribute("instanceEnd").needsUpdate=!0,Df.geometry.getAttribute("instanceEnd").setX(0,gi/t),Df.geometry.getAttribute("instanceEnd").needsUpdate=!0};mr.userData.update=pU;const mU=mr,gr=new gn;gr.background=new Ze(2368548);gr.userData.title="jcscθ = j / sinθ";new R;new R;new Ne;new Ne;const Ai=100,fS=new W(new ce(2),new Vt);gr.add(fS);const gU=new W(new Gt(Ai,2),new re({color:10066329})),pS=new W(new ce(3),new re({color:1118481,depthTest:!1}));pS.renderOrder=2;const Qu=new W(new ce(3),new re({color:1118481,depthTest:!1}));Qu.renderOrder=2;const nc=new W(new ce(3),new re({color:8947967,depthTest:!1}));nc.renderOrder=2;const eh=new W(new ce(3),new re({color:16746632,depthTest:!1}));eh.renderOrder=2;const th=new W(new ce(3),new re({color:8978431,depthTest:!1}));th.renderOrder=2;const _U=De("e","jθ"),xU=De("cosθ"),vU=De("jsinθ"),yU=De("jcscθ");Qu.add(_U);nc.add(xU);eh.add(vU);th.add(yU);gr.add(gU,pS);gr.add(Qu,nc,eh,th);const mS=new Ye(new Xe().setPositions([0,0,0,Ai,0,0]),new We({color:us,linewidth:2})),If=new Ye(new Xe().setPositions([0,0,0,Ai,0,0]),new We({color:Fi,linewidth:2})),Pl=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:Vi,linewidth:2})),Uf=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:Gu,linewidth:2}));gr.add(mS,If,Pl,Uf);const SU=i=>{let e=Math.atan2(i.y,i.x),t=1,n=0;fS.position.set(i.x,i.y,0),t=Math.cos(e),n=Math.sin(e),Qu.position.set(Ai*t,Ai*n,0),eh.position.set(0,Ai*n,0),nc.position.set(Ai*t,0,0),th.position.set(0,Ai/n,0),mS.rotation.z=e,Pl.position.x=nc.position.x,Pl.geometry.getAttribute("instanceEnd").setY(0,n*Ai),Pl.geometry.getAttribute("instanceEnd").needsUpdate=!0,If.geometry.getAttribute("instanceEnd").setX(0,t*Ai),If.geometry.getAttribute("instanceEnd").needsUpdate=!0,Uf.geometry.getAttribute("instanceEnd").setY(0,Ai/n),Uf.geometry.getAttribute("instanceEnd").needsUpdate=!0};gr.userData.update=SU;const MU=gr,Bs=new gn;Bs.background=new Ze(2368548);Bs.userData.title="jtanθ = j / tanθ";new R;new R;new Ne;new Ne;const on=100,gS=new W(new ce(2),new Vt);Bs.add(gS);const TU=new W(new Gt(on,2),new re({color:10066329})),_S=new W(new ce(3),new re({color:1118481,depthTest:!1}));_S.renderOrder=2;const nh=new W(new ce(3),new re({color:1118481,depthTest:!1}));nh.renderOrder=2;const ic=new W(new ce(3),new re({color:8947967,depthTest:!1}));ic.renderOrder=2;const ih=new W(new ce(3),new re({color:16746632,depthTest:!1}));ih.renderOrder=2;const sh=new W(new ce(3),new re({color:8978312,depthTest:!1}));sh.renderOrder=2;const rh=new W(new ce(3),new re({color:16746751,depthTest:!1}));rh.renderOrder=2;const xS=De("e","jθ"),Of=De("cosθ"),Ff=De("jsinθ"),Vf=De("jtanθ"),zf=De("cotθ");nh.add(xS);ic.add(Of);ih.add(Ff);sh.add(Vf);rh.add(zf);Bs.add(TU,_S);Bs.add(nh,ic,ih,sh,rh);const vS=new Ye(new Xe().setPositions([0,0,0,on,0,0]),new We({color:us,linewidth:2})),du=new Ye(new Xe().setPositions([0,0,0,on,0,0]),new We({color:Fi,linewidth:2}));du.position.z=10;const Ll=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:Vi,linewidth:2})),Dl=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:ca,linewidth:2})),Il=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:lm,linewidth:2})),Ul=new Ye(new Xe().setPositions([0,0,0,on,0,0]),new We({color:so,linewidth:2})),Ol=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:Gu,linewidth:2}));Bs.add(vS,du,Ll,Dl,Il,Ul,Ol);const wU=()=>{xS.visible=!1,Of.visible=!Of.visible,Ff.visible=!Ff.visible,Vf.visible=!Vf.visible,zf.visible=!zf.visible};Bs.userData.toggleText=wU;const EU=i=>{let e=Math.atan2(i.y,i.x),t=1,n=0,s=0;gS.position.set(i.x,i.y,0),t=Math.cos(e),n=Math.sin(e),s=Math.tan(e),nh.position.set(on*t,on*n,0),ih.position.set(0,on*n,0),ic.position.set(on*t,0,0),sh.position.set(on,on*s,0),rh.position.set(on/s,on,0),vS.rotation.z=e,Ll.position.x=ic.position.x,Ll.geometry.getAttribute("instanceEnd").setY(0,n*on),Ll.geometry.getAttribute("instanceEnd").needsUpdate=!0,du.geometry.getAttribute("instanceEnd").setX(0,t*on),du.geometry.getAttribute("instanceEnd").needsUpdate=!0,Dl.position.x=on,Dl.geometry.getAttribute("instanceEnd").setY(0,s*on),Dl.geometry.getAttribute("instanceEnd").needsUpdate=!0,Il.position.y=on,Il.geometry.getAttribute("instanceEnd").setX(0,on/s),Il.geometry.getAttribute("instanceEnd").needsUpdate=!0,Ul.rotation.z=e,Ul.geometry.getAttribute("instanceEnd").setX(0,on/t),Ul.geometry.getAttribute("instanceEnd").needsUpdate=!0,Ol.rotation.z=e,Ol.geometry.getAttribute("instanceEnd").setX(0,on/n),Ol.geometry.getAttribute("instanceEnd").needsUpdate=!0};Bs.userData.update=EU;const bU=Bs,_r=new gn;_r.background=new Ze(2368548);_r.userData.title="cos<sup>2</sup>θ + sin<sup>2</sup>θ = 1<sup>2</sup>";new R;new R;new Ne;new Ne;const Ss=100,yS=new W(new ce(2),new Vt);_r.add(yS);const AU=new W(new Gt(Ss,2),new re({color:10066329})),SS=new W(new ce(3),new re({color:1118481,depthTest:!1}));SS.renderOrder=2;const oh=new W(new ce(3),new re({color:1118481,depthTest:!1}));oh.renderOrder=2;const sc=new W(new ce(3),new re({color:8947967,depthTest:!1}));sc.renderOrder=2;const ah=new W(new ce(3),new re({color:16746632,depthTest:!1}));ah.renderOrder=2;const NU=De("e","jθ"),RU=De("cosθ"),CU=De("jsinθ");oh.add(NU);sc.add(RU);ah.add(CU);_r.add(AU,SS);_r.add(oh,sc,ah);const MS=new Ye(new Xe().setPositions([0,0,0,Ss,0,0]),new We({color:us,linewidth:2})),Bf=new Ye(new Xe().setPositions([0,0,0,Ss,0,0]),new We({color:Fi,linewidth:2})),Fl=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:Vi,linewidth:2}));_r.add(MS,Bf,Fl);const PU=i=>{let e=Math.atan2(i.y,i.x),t=1,n=0;yS.position.set(i.x,i.y,0),t=Math.cos(e),n=Math.sin(e),oh.position.set(Ss*t,Ss*n,0),ah.position.set(0,Ss*n,0),sc.position.set(Ss*t,0,0),MS.rotation.z=e,Fl.position.x=sc.position.x,Fl.geometry.getAttribute("instanceEnd").setY(0,n*Ss),Fl.geometry.getAttribute("instanceEnd").needsUpdate=!0,Bf.geometry.getAttribute("instanceEnd").setX(0,t*Ss),Bf.geometry.getAttribute("instanceEnd").needsUpdate=!0};_r.userData.update=PU;const LU=_r,ks=new gn;ks.background=new Ze(2368548);ks.userData.title="1<sup>2</sup> + tan<sup>2</sup>θ = sec<sup>2</sup>θ";new R;new R;new Ne;new Ne;const Pn=100,TS=new W(new ce(2),new Vt);ks.add(TS);const DU=new W(new Gt(Pn,2),new re({color:10066329})),wS=new W(new ce(3),new re({color:1118481,depthTest:!1}));wS.renderOrder=2;const ch=new W(new ce(3),new re({color:1118481,depthTest:!1}));ch.renderOrder=2;const fu=new W(new ce(3),new re({color:8947967,depthTest:!1}));fu.renderOrder=2;const hm=new W(new ce(3),new re({color:16746632,depthTest:!1}));hm.renderOrder=2;const lh=new W(new ce(3),new re({color:8978312,depthTest:!1}));lh.renderOrder=2;const uh=new W(new ce(3),new re({color:16777096,depthTest:!1}));uh.renderOrder=2;const ES=De("1"),p_=De("cosθ"),m_=De("jsinθ"),kf=De("tanθ"),IU=De("secθ");ch.add(ES);lh.add(kf);uh.add(IU);ks.add(DU,wS);ks.add(ch,hm,fu,lh,uh);const UU=new Ye(new Xe().setPositions([0,0,0,Pn,0,0]),new We({color:us,linewidth:2})),Hf=new Ye(new Xe().setPositions([0,0,0,Pn,0,0]),new We({color:Fi,linewidth:2})),Vl=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:Vi,linewidth:2})),zl=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:ca,linewidth:2})),Bl=new Ye(new Xe().setPositions([0,0,0,Pn,0,0]),new We({color:so,linewidth:2}));ks.add(UU,Hf,Vl,zl,Bl);const OU=()=>{ES.visible=!1,p_.visible=!p_.visible,m_.visible=!m_.visible,kf.visible=!kf.visible};ks.userData.toggleText=OU;const FU=i=>{let e=Math.atan2(i.y,i.x),t=1,n=0,s=0;TS.position.set(i.x,i.y,0),t=Math.cos(e),n=Math.sin(e),s=Math.tan(e),ch.position.set(Pn,0,0),hm.position.set(0,Pn*n,0),fu.position.set(Pn*t,0,0),lh.position.set(Pn,Pn*s/2,0),uh.position.set(Pn/2,Pn*s/2,0),Vl.position.x=fu.position.x,Vl.geometry.getAttribute("instanceEnd").setY(0,n*Pn),Vl.geometry.getAttribute("instanceEnd").needsUpdate=!0,Hf.geometry.getAttribute("instanceEnd").setX(0,t*Pn),Hf.geometry.getAttribute("instanceEnd").needsUpdate=!0,zl.position.x=Pn,zl.geometry.getAttribute("instanceEnd").setY(0,s*Pn),zl.geometry.getAttribute("instanceEnd").needsUpdate=!0,Bl.rotation.z=e,Bl.geometry.getAttribute("instanceEnd").setX(0,Pn/t),Bl.geometry.getAttribute("instanceEnd").needsUpdate=!0};ks.userData.update=FU;const VU=ks,Hs=new gn;Hs.background=new Ze(2368548);Hs.userData.title="cot<sup>2</sup>θ + 1<sup>2</sup> = csc<sup>2</sup>θ";new R;new R;new Ne;new Ne;const On=100,bS=new W(new ce(2),new Vt);Hs.add(bS);const zU=new W(new Gt(On,2),new re({color:10066329})),AS=new W(new ce(3),new re({color:1118481,depthTest:!1}));AS.renderOrder=2;const dm=new W(new ce(3),new re({color:1118481,depthTest:!1}));dm.renderOrder=2;const pu=new W(new ce(3),new re({color:8947967,depthTest:!1}));pu.renderOrder=2;const fm=new W(new ce(3),new re({color:16746632,depthTest:!1}));fm.renderOrder=2;const hh=new W(new ce(3),new re({color:16746751,depthTest:!1}));hh.renderOrder=2;const dh=new W(new ce(3),new re({color:8978431,depthTest:!1}));dh.renderOrder=2;const BU=De("j"),g_=De("cosθ"),__=De("jsinθ"),kU=De("cotθ"),Gf=De("cscθ");hh.add(kU);dh.add(Gf);Hs.add(zU,AS);Hs.add(dm,fm,pu,hh,dh);const HU=new Ye(new Xe().setPositions([0,0,0,0,On,0]),new We({color:us,linewidth:2})),Wf=new Ye(new Xe().setPositions([0,0,0,On,0,0]),new We({color:Fi,linewidth:2})),kl=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:Vi,linewidth:2})),Hl=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:lm,linewidth:2})),Gl=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:Gu,linewidth:2}));Hs.add(HU,Wf,kl,Hl,Gl);const GU=()=>{BU.visible=!1,g_.visible=!g_.visible,__.visible=!__.visible,Gf.visible=!Gf.visible};Hs.userData.toggleText=GU;const WU=i=>{let e=Math.atan2(i.y,i.x),t=1,n=0,s=0;bS.position.set(i.x,i.y,0),t=Math.cos(e),n=Math.sin(e),s=Math.tan(e),dm.position.set(0,Math.sign(n)*On,0),fm.position.set(0,On*n,0),pu.position.set(On*t,0,0),hh.position.set(On/s/2,On,0),dh.position.set(On/s/2,On/2,0),kl.position.x=pu.position.x,kl.geometry.getAttribute("instanceEnd").setY(0,n*On),kl.geometry.getAttribute("instanceEnd").needsUpdate=!0,Wf.geometry.getAttribute("instanceEnd").setX(0,t*On),Wf.geometry.getAttribute("instanceEnd").needsUpdate=!0,Hl.position.y=On,Hl.geometry.getAttribute("instanceEnd").setX(0,On/s),Hl.geometry.getAttribute("instanceEnd").needsUpdate=!0,Gl.rotation.z=e,Gl.geometry.getAttribute("instanceEnd").setX(0,On/n),Gl.geometry.getAttribute("instanceEnd").needsUpdate=!0};Hs.userData.update=WU;const XU=Hs,xr=new gn;xr.background=new Ze(2368548);xr.userData.title="(secθ - cosθ)<sup>2</sup> + sin<sup>2</sup>θ = tan<sup>2</sup>θ";new R;new R;new Ne;new Ne;const Vn=100,NS=new W(new ce(2),new Vt);xr.add(NS);const $U=new W(new Gt(Vn,2),new re({color:10066329})),RS=new W(new ce(3),new re({color:1118481,depthTest:!1}));RS.renderOrder=2;const Wo=new W(new ce(3),new re({color:1118481,depthTest:!1}));Wo.renderOrder=2;const rc=new W(new ce(3),new re({color:8947967,depthTest:!1}));rc.renderOrder=2;const fh=new W(new ce(3),new re({color:16746632,depthTest:!1}));fh.renderOrder=2;const ph=new W(new ce(3),new re({color:8978312,depthTest:!1}));ph.renderOrder=2;const Xo=new W(new ce(3),new re({color:16777096,depthTest:!1}));Xo.renderOrder=2;const qU=De("e","jθ"),YU=De("cosθ"),jU=De("jsinθ"),ZU=De("tanθ"),KU=De("secθ");Wo.add(qU);rc.add(YU);fh.add(jU);ph.add(ZU);Xo.add(KU);xr.add($U,RS);xr.add(Wo,rc,fh,ph,Xo);const CS=new Ye(new Xe().setPositions([0,0,0,Vn,0,0]),new We({color:us,linewidth:2})),mu=new Ye(new Xe().setPositions([0,0,0,Vn,0,0]),new We({color:Fi,linewidth:2})),Wl=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:Vi,linewidth:2})),Na=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:ca,linewidth:2})),Xf=new Ye(new Xe().setPositions([0,0,0,Vn,0,0]),new We({color:so,linewidth:2}));mu.position.z=10;xr.add(CS,mu,Wl,Na,Xf);const JU=i=>{let e=Math.atan2(i.y,i.x),t=1,n=0;NS.position.set(i.x,i.y,0),t=Math.cos(e),n=Math.sin(e),Wo.position.set(Vn*t,Vn*n,0),fh.position.set(0,Vn*n,0),rc.position.set(Vn*t,0,0),Xo.position.set(Vn/t,0,0),ph.position.set((Wo.position.x+Xo.position.x)/2,(Wo.position.y+Xo.position.y)/2,0),CS.rotation.z=e,Wl.position.x=rc.position.x,Wl.geometry.getAttribute("instanceEnd").setY(0,n*Vn),Wl.geometry.getAttribute("instanceEnd").needsUpdate=!0,mu.geometry.getAttribute("instanceEnd").setX(0,t*Vn),mu.geometry.getAttribute("instanceEnd").needsUpdate=!0,Na.geometry.getAttribute("instanceStart").setXY(0,t*Vn,n*Vn),Na.geometry.getAttribute("instanceEnd").setX(0,Vn/t),Na.geometry.getAttribute("instanceStart").needsUpdate=!0,Na.geometry.getAttribute("instanceEnd").needsUpdate=!0,Xf.geometry.getAttribute("instanceEnd").setX(0,Vn/t),Xf.geometry.getAttribute("instanceEnd").needsUpdate=!0};xr.userData.update=JU;const QU=xr,Gs=new gn;Gs.background=new Ze(2368548);Gs.userData.title="all of them";new R;new R;new Ne;new Ne;const Jt=100,PS=new W(new ce(2),new Vt);Gs.add(PS);const eO=new W(new Gt(Jt,2),new re({color:10066329})),LS=new W(new ce(3),new re({color:1118481,depthTest:!1}));LS.renderOrder=2;const Js=new W(new ce(3),new re({color:1118481,depthTest:!1}));Js.renderOrder=2;const mh=new W(new ce(3),new re({color:8947967,depthTest:!1}));mh.renderOrder=2;const gh=new W(new ce(3),new re({color:16746632,depthTest:!1}));gh.renderOrder=2;const _h=new W(new ce(3),new re({color:8978312,depthTest:!1}));_h.renderOrder=2;const xh=new W(new ce(3),new re({color:16746751,depthTest:!1}));xh.renderOrder=2;const $o=new W(new ce(3),new re({color:16777096,depthTest:!1}));$o.renderOrder=2;const qo=new W(new ce(3),new re({color:8978431,depthTest:!1}));qo.renderOrder=2;const tO=De("e","jθ"),nO=De("cosθ"),iO=De("jsinθ"),sO=De("tanθ"),rO=De("cotθ"),oO=De("secθ"),aO=De("jcscθ");Js.add(tO);mh.add(nO);gh.add(iO);_h.add(sO);xh.add(rO);$o.add(oO);qo.add(aO);Gs.add(eO,LS);Gs.add(Js,mh,gh,_h,xh,$o,qo);const gu=new Ye(new Xe().setPositions([0,0,0,Jt,0,0]),new We({color:Fi,linewidth:2})),_u=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:Vi,linewidth:2})),Ra=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:ca,linewidth:2})),$f=new Ye(new Xe().setPositions([0,0,0,Jt,0,0]),new We({color:so,linewidth:2})),Ca=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:lm,linewidth:2})),qf=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:Gu,linewidth:2})),Pa=new Ye(new Xe().setPositions([0,0,0,0,0,0]),new We({color:F3,linewidth:1}));gu.position.z=10;_u.position.z=10;Gs.add(gu,_u,Ra,Ca,$f,qf);Gs.add(Pa);const cO=i=>{let e=Math.atan2(i.y,i.x),t=1,n=0;PS.position.set(i.x,i.y,0),t=Math.cos(e),n=Math.sin(e),Js.position.set(Jt*t,Jt*n,0),gh.position.set(0,Jt*n,0),mh.position.set(Jt*t,0,0),$o.position.set(Jt/t,0,0),qo.position.set(0,Jt/n,0),_h.position.set((Js.position.x+$o.position.x)/2,(Js.position.y+$o.position.y)/2,0),xh.position.set((Js.position.x+qo.position.x)/2,(Js.position.y+qo.position.y)/2,0),Pa.geometry.getAttribute("instanceStart").setX(0,t*Jt),Pa.geometry.getAttribute("instanceEnd").setY(0,Jt*n),Pa.geometry.getAttribute("instanceStart").needsUpdate=!0,Pa.geometry.getAttribute("instanceEnd").needsUpdate=!0,_u.geometry.getAttribute("instanceEnd").setY(0,n*Jt),_u.geometry.getAttribute("instanceEnd").needsUpdate=!0,gu.geometry.getAttribute("instanceEnd").setX(0,t*Jt),gu.geometry.getAttribute("instanceEnd").needsUpdate=!0,$f.geometry.getAttribute("instanceEnd").setX(0,Jt/t),$f.geometry.getAttribute("instanceEnd").needsUpdate=!0,qf.geometry.getAttribute("instanceEnd").setY(0,Jt/n),qf.geometry.getAttribute("instanceEnd").needsUpdate=!0,Ra.geometry.getAttribute("instanceStart").setXY(0,t*Jt,n*Jt),Ra.geometry.getAttribute("instanceEnd").setX(0,Jt/t),Ra.geometry.getAttribute("instanceStart").needsUpdate=!0,Ra.geometry.getAttribute("instanceEnd").needsUpdate=!0,Ca.geometry.getAttribute("instanceStart").setXY(0,t*Jt,n*Jt),Ca.geometry.getAttribute("instanceEnd").setY(0,Jt/n),Ca.geometry.getAttribute("instanceStart").needsUpdate=!0,Ca.geometry.getAttribute("instanceEnd").needsUpdate=!0};Gs.userData.update=cO;const lO=Gs,vh=new gn;vh.background=new Ze(2368548);const uO=new W(new ia(100,100,100),new Vt),hO=new W(new up(100),new Vt),DS=new gn;DS.add(uO);DS.background=new Ze(2368548);const IS=new gn;IS.add(hO);IS.background=new Ze(2368548);const Tc=window.innerWidth/window.innerHeight,na=200,oi=new dp(-200,na,na,-200,-1e3,1e3);let Es,Pr,zn;new R;new Ne;new Ne;const pm=[];let ir=[],Xl=[m3,y3,N3,O3,G3,q3,eU],Yf=[mU,MU,bU],US=[LU,VU,XU,QU],dO=[lO,cU];ir=ir.concat(Xl,Yf,US,dO);const fO=()=>{Es=document.createElement("canvas"),Es.id="c",document.body.appendChild(Es),Pr=document.createElement("div"),Pr.id="content",document.body.appendChild(Pr),zn=new j1({canvas:Es,antialias:!0}),zn.setSize(window.innerWidth,window.innerHeight);for(let i=0;i<ir.length;i++){if(i===Xl.length){const s=document.createElement("hr");s.setAttribute("hr-text","Reciprocal Identities"),Pr.appendChild(s)}if(i===Xl.length+Yf.length){const s=document.createElement("hr");s.setAttribute("hr-text","Pythagorean Identities"),Pr.appendChild(s)}if(i===Xl.length+Yf.length+US.length){const s=document.createElement("hr");s.setAttribute("hr-text","Other"),Pr.appendChild(s)}const e=document.createElement("div");e.className="list-item";const t=document.createElement("div");e.appendChild(t);const n=document.createElement("a");n.innerHTML=ir[i].userData.title,n.href="index.html",e.appendChild(n),Pr.appendChild(e),pm.push(e)}};fO();const Ro=100,OS=new W(new ce(2),new Vt),FS=new W(new ce(2),new Vt({side:Kt}));vh.add(OS,FS);const pO=new W(new Gt(Ro,2),new re({color:10066329})),wc=new W(new ce(3),new re({color:1118481,depthTest:!1}));wc.renderOrder=2;const mm=new W(new ce(3),new re({color:1118481,depthTest:!1}));wc.renderOrder=2;const gm=new W(new ce(3),new re({color:1118481,depthTest:!1}));wc.renderOrder=2;const _m=new W(new ce(3),new re({color:1118481,depthTest:!1}));wc.renderOrder=2;const mO=De("e","-jθ"),gO=De("e","jθ"),_O=De("e","2jθ");mm.add(gO);gm.add(mO);_m.add(_O);vh.add(pO,wc);vh.add(mm,gm,_m);const xO=new lr(Tc*window.innerWidth,window.innerHeight),vO=new lr(Tc*window.innerWidth,window.innerHeight),yO=new lr(Tc*window.innerWidth,window.innerHeight),VS=new ta;VS.colorNode=Uy(()=>{const i=Oy(Ji).add(1).mul(.5),e=e3(t3(i.sub(md()).mul(128)).negate().mul(1/2)),t=md().sub(e.mul(i.sub(md()))),n=Fy().toVar(),s=Af(vO.texture,t);return n.xyz.assign(s.xyz),n})();Uy(()=>{const i=Oy(Ji).add(1).mul(.5),e=Af(xO.texture),t=Af(yO.texture),n=Fy().toVar(),s=e_(1).toVar();return QI(i.x.lessThan(n3.x),()=>{n.xyz.assign(i.x),n.xyz.assign(t.xyz.dot(t_(.5,.5,1)).mul(2).add(-1).div(4)),s.assign(t.xyz.dot(t_(.5,.5,1)).mul(2).add(-1).div(1)),n.xyz.assign(e_(1).div(s))}).Else(()=>{n.xyz.assign(e.oneMinus().xyz)}),n});new Yp(VS);let Ta=0,vd=1,yd=0;const SO=()=>{zS.set(sr.x,sr.y),Ta=Math.atan2(-_i.y,_i.x),vd=Math.cos(Ta),yd=Math.sin(Ta),OS.position.set(_i.x,-_i.y,0),qi.set(_i.x,-_i.y);const i=qi.x*qi.x+qi.y*qi.y;qi.set(1e4*qi.x/i,1e4*qi.y/i),FS.position.set(qi.x,-qi.y,0),mm.position.set(Ro*vd,Ro*yd,0),gm.position.set(Ro*vd,-100*yd,0),_m.position.set(Ro*Math.cos(2*Ta),Ro*Math.sin(2*Ta),0)},MO=i=>{},TO=i=>{},Ji=new de(.5,.5);new de(.5,.5);const _i=new de(0,0),sr=new _t(.71,.29,0,0);new Ne;const wO=i=>{Ji.x=2*(i.clientX/window.innerWidth)-1,Ji.y=2*(i.clientY/window.innerHeight)-1,_i.set(Ji.x*na*Tc/oi.zoom,Ji.y*na/oi.zoom),sr.set(oi.position.x,oi.position.y,oi.position.z,0),sr.x+=_i.x,sr.y-=_i.y},EO=i=>{Ji.x=2*(i.clientX/window.innerWidth)-1,Ji.y=2*(i.clientY/window.innerHeight)-1,_i.set(Ji.x*na*Tc/oi.zoom,Ji.y*na/oi.zoom),sr.set(oi.position.x,oi.position.y,oi.position.z,0),sr.x+=_i.x,sr.y-=_i.y};document.addEventListener("mousedown",MO);document.addEventListener("mouseup",TO);document.addEventListener("mousemove",wO);document.addEventListener("wheel",EO);new K1(oi,pm[0]);oi.position.z=10;new Vt;const qi=new de,Sd=new _t,bO=i=>{const t=pm[i].getBoundingClientRect();Sd.set(t.left,zn.domElement.clientHeight-t.bottom,t.right-t.left,t.bottom-t.top),zn.setViewport(Sd),zn.setScissor(Sd);const n=ir[i],s=oi;zn.render(n,s)},AO=()=>{const i=Es.clientWidth,e=Es.clientHeight;(Es.width!==i||Es.height!==e)&&zn.setSize(i,e,!1)};new Ze;const zS=new de,NO=async()=>{AO(),Es.style.transform=`translateY(${window.scrollY}px)`,zn.outputColorSpace=ar,zn.setClearColor(8421504),zn.setScissorTest(!1),zn.clear(),zn.setClearColor(2368548),zn.setScissorTest(!0),zn.outputColorSpace=ni,SO();for(let i=0;i<ir.length;i++){const e=ir[i].userData.update;e!==void 0&&e(zS)}for(let i=0;i<ir.length;i++)bO(i)};zn.setAnimationLoop(NO);
