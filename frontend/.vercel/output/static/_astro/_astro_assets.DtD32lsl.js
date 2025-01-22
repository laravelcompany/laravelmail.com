import{R as wt,m as st,a as E,c as ot,r as F,b as nt}from"./scroll-area.DcbEPeDy.js";import{A as g,a as M,b as C,N as y,F as D,E as q,c as G,d as vt,r as ct,i as U,e as bt,f as O,g as yt,D as jt,_ as It,I as Et,h as lt}from"./astro/assets-service.Cu1PeyQ-.js";const kt="4.16.18";function Tt(){return t=>{if("string"==typeof t)throw new g({...M,message:M.message(JSON.stringify(t))});let i=[...Object.values(t)];if(0===i.length)throw new g({...C,message:C.message(JSON.stringify(t))});return Promise.all(i.map((t=>t())))}}function pt(t){return{site:void 0,generator:`Astro v${kt}`,glob:Tt()}}const rt="astro:jsx",Y=Symbol("empty"),V=t=>t;function N(t){return t&&"object"==typeof t&&t[rt]}function St(t){if("string"==typeof t.type)return t;const i={};if(N(t.props.children)){const e=t.props.children;if(!N(e)||!("slot"in e.props))return;const a=V(e.props.slot);i[a]=[e],i[a].$$slot=!0,delete e.props.slot,delete t.props.children}else Array.isArray(t.props.children)&&(t.props.children=t.props.children.map((t=>{if(!N(t)||!("slot"in t.props))return t;const e=V(t.props.slot);return Array.isArray(i[e])?i[e].push(t):(i[e]=[t],i[e].$$slot=!0),delete t.props.slot,Y})).filter((t=>t!==Y)));Object.assign(t.props,i)}function mt(t){return"string"==typeof t?st(t):Array.isArray(t)?t.map((t=>mt(t))):t}function At(t){if("set:html"in t.props||"set:text"in t.props){if("set:html"in t.props){const i=mt(t.props["set:html"]);return delete t.props["set:html"],void Object.assign(t.props,{children:i})}if("set:text"in t.props){const i=t.props["set:text"];return delete t.props["set:text"],void Object.assign(t.props,{children:i})}}}function Ke(t,i){const e={[wt]:"astro:jsx",[rt]:!0,type:t,props:i??{}};return At(e),St(e),e}function j(t={},i,{class:e}={}){let a="";e&&(typeof t.class<"u"?t.class+=` ${e}`:typeof t["class:list"]<"u"?t["class:list"]=[t["class:list"],e]:t.class=e);for(const[i,e]of Object.entries(t))a+=E(e,i,!0);return st(a)}function Pt(t){return t.fsPath&&!("fsPath"in t)}const _t=new TextDecoder,l=(t,i=0,e=t.length)=>_t.decode(t.slice(i,e)),I=(t,i=0,e=t.length)=>t.slice(i,e).reduce(((t,i)=>t+("0"+i.toString(16)).slice(-2)),""),J=(t,i=0)=>{const e=t[i]+256*t[i+1];return e|131070*(32768&e)},A=(t,i=0)=>256*t[i]+t[i+1],m=(t,i=0)=>t[i]+256*t[i+1],X=(t,i=0)=>t[i]+256*t[i+1]+65536*t[i+2],Nt=(t,i=0)=>t[i]+256*t[i+1]+65536*t[i+2]+(t[i+3]<<24),p=(t,i=0)=>t[i]*2**24+65536*t[i+1]+256*t[i+2]+t[i+3],v=(t,i=0)=>t[i]+256*t[i+1]+65536*t[i+2]+t[i+3]*2**24,$t={readUInt16BE:A,readUInt16LE:m,readUInt32BE:p,readUInt32LE:v};function f(t,i,e,a){e=e||0;return $t["readUInt"+i+(a?"BE":"LE")](t,e)}function Ft(t,i){if(t.length-i<4)return;const e=p(t,i);return t.length-i<e?void 0:{name:l(t,4+i,8+i),offset:i,size:e}}function w(t,i,e){for(;e<t.length;){const a=Ft(t,e);if(!a)break;if(a.name===i)return a;e+=a.size}}const Ot={validate:t=>"BM"===l(t,0,2),calculate:t=>({height:Math.abs(Nt(t,22)),width:v(t,18)})},zt=1,Lt=6,Rt=16;function W(t,i){const e=t[i];return 0===e?256:e}function Z(t,i){const e=6+16*i;return{height:W(t,e+1),width:W(t,e)}}const dt={validate(t){const i=m(t,0),e=m(t,4);return 0===i&&0!==e&&1===m(t,2)},calculate(t){const i=m(t,4),e=Z(t,0);if(1===i)return e;const a=[e];for(let e=1;e<i;e+=1)a.push(Z(t,e));return{height:e.height,images:a,width:e.width}}},Bt=2,Ht={validate(t){const i=m(t,0),e=m(t,4);return 0===i&&0!==e&&2===m(t,2)},calculate:t=>dt.calculate(t)},Mt={validate:t=>542327876===v(t,0),calculate:t=>({height:v(t,12),width:v(t,16)})},Ct=/^GIF8[79]a/,Dt={validate:t=>Ct.test(l(t,0,6)),calculate:t=>({height:m(t,8),width:m(t,6)})},gt={avif:"avif",mif1:"heif",msf1:"heif",heic:"heic",heix:"heic",hevc:"heic",hevx:"heic"};function qt(t,i,e){let a={};for(let p=i;p<=e;p+=4){const i=l(t,p,p+4);i in gt&&(a[i]=1)}return"avif"in a?"avif":"heic"in a||"heix"in a||"hevc"in a||"hevx"in a?"heic":"mif1"in a||"msf1"in a?"heif":void 0}const Gt={validate(t){const i=l(t,4,8),e=l(t,8,12);return"ftyp"===i&&e in gt},calculate(t){const i=w(t,"meta",0),e=i&&w(t,"iprp",i.offset+12),a=e&&w(t,"ipco",e.offset+8),s=a&&w(t,"ispe",a.offset+8);if(s)return{height:p(t,s.offset+16),width:p(t,s.offset+12),type:qt(t,8,i.offset)};throw new TypeError("Invalid HEIF, no size found")}},Ut=8,Yt=4,Vt=4,Jt={ICON:32,"ICN#":32,"icm#":16,icm4:16,icm8:16,"ics#":16,ics4:16,ics8:16,is32:16,s8mk:16,icp4:16,icl4:32,icl8:32,il32:32,l8mk:32,icp5:32,ic11:32,ich4:48,ich8:48,ih32:48,h8mk:48,icp6:64,ic12:32,it32:128,t8mk:128,ic07:128,ic08:256,ic13:256,ic09:512,ic14:512,ic10:1024};function K(t,i){const e=i+4;return[l(t,i,e),p(t,e)]}function Q(t){const i=Jt[t];return{width:i,height:i,type:t}}const Xt={validate:t=>"icns"===l(t,0,4),calculate(t){const i=t.length,e=p(t,4);let a=8,s=K(t,a),o=Q(s[0]);if(a+=s[1],a===e)return o;const n={height:o.height,images:[o],width:o.width};for(;a<e&&a<i;)s=K(t,a),o=Q(s[0]),a+=s[1],n.images.push(o);return n}},Wt={validate:t=>"ff4fff51"===I(t,0,4),calculate:t=>({height:p(t,12),width:p(t,8)})},Zt={validate(t){if(1783636e3!==p(t,4)||p(t,0)<1)return!1;const i=w(t,"ftyp",0);return!!i&&1718909296===p(t,i.offset+4)},calculate(t){const i=w(t,"jp2h",0),e=i&&w(t,"ihdr",i.offset+8);if(e)return{height:p(t,e.offset+8),width:p(t,e.offset+12)};throw new TypeError("Unsupported JPEG 2000 format")}},Kt="45786966",Qt=2,z=6,te=2,ee="4d4d",ie="4949",tt=12,ae=2;function se(t){return I(t,2,6)===Kt}function oe(t,i){return{height:A(t,i),width:A(t,i+2)}}function ne(t,i){const e=f(t,16,14,i);for(let a=0;a<e;a++){const e=16+12*a,p=e+12;if(e>t.length)return;const s=t.slice(e,p);if(274===f(s,16,0,i))return 3!==f(s,16,2,i)||1!==f(s,32,4,i)?void 0:f(s,16,8,i)}}function ce(t,i){const e=t.slice(2,i),a=I(e,6,8),p=a===ee;if(p||a===ie)return ne(e,p)}function le(t,i){if(i>t.length)throw new TypeError("Corrupt JPG, exceeded buffer limits")}const pe={validate:t=>"ffd8"===I(t,0,2),calculate(t){let i,e;for(t=t.slice(4);t.length;){const a=A(t,0);if(255===t[a]){if(se(t)&&(i=ce(t,a)),le(t,a),e=t[a+1],192===e||193===e||194===e){const e=oe(t,a+5);return i?{height:e.height,orientation:i,width:e.width}:e}t=t.slice(a+2)}else t=t.slice(a)}throw new TypeError("Invalid JPG, no size found")}},re={validate:t=>{const i=l(t,1,7);return["KTX 11","KTX 20"].includes(i)},calculate:t=>{const i=49===t[5]?"ktx":"ktx2",e="ktx"===i?36:20;return{height:v(t,e+4),width:v(t,e),type:i}}},me="PNG\r\n\n",de="IHDR",et="CgBI",ge={validate(t){if(me===l(t,1,8)){let i=l(t,12,16);if(i===et&&(i=l(t,28,32)),i!==de)throw new TypeError("Invalid PNG");return!0}return!1},calculate:t=>l(t,12,16)===et?{height:p(t,36),width:p(t,32)}:{height:p(t,20),width:p(t,16)}},it={P1:"pbm/ascii",P2:"pgm/ascii",P3:"ppm/ascii",P4:"pbm",P5:"pgm",P6:"ppm",P7:"pam",PF:"pfm"},at={default:t=>{let i=[];for(;t.length>0;){const e=t.shift();if("#"!==e[0]){i=e.split(" ");break}}if(2===i.length)return{height:parseInt(i[1],10),width:parseInt(i[0],10)};throw new TypeError("Invalid PNM")},pam:t=>{const i={};for(;t.length>0;){const e=t.shift();if(e.length>16||e.charCodeAt(0)>128)continue;const[a,p]=e.split(" ");if(a&&p&&(i[a.toLowerCase()]=parseInt(p,10)),i.height&&i.width)break}if(i.height&&i.width)return{height:i.height,width:i.width};throw new TypeError("Invalid PAM")}},fe={validate:t=>l(t,0,2)in it,calculate(t){const i=l(t,0,2),e=it[i],a=l(t,3).split(/[\r\n]+/);return(at[e]||at.default)(a)}},he={validate:t=>"8BPS"===l(t,0,4),calculate:t=>({height:p(t,14),width:p(t,18)})},ft=/<svg\s([^>"']|"[^"]*"|'[^']*')*>/,S={height:/\sheight=(['"])([^%]+?)\1/,root:ft,viewbox:/\sviewBox=(['"])(.+?)\1/i,width:/\swidth=(['"])([^%]+?)\1/},$=2.54,ht={in:96,cm:96/$,em:16,ex:8,m:96/$*100,mm:96/$/10,pc:96/72/12,pt:96/72,px:1},xe=new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(ht).join("|")})?$`);function P(t){const i=xe.exec(t);if(i)return Math.round(Number(i[1])*(ht[i[2]]||1))}function ue(t){const i=t.split(" ");return{height:P(i[3]),width:P(i[2])}}function we(t){const i=S.width.exec(t),e=S.height.exec(t),a=S.viewbox.exec(t);return{height:e&&P(e[2]),viewbox:a&&ue(a[2]),width:i&&P(i[2])}}function ve(t){return{height:t.height,width:t.width}}function be(t,i){const e=i.width/i.height;return t.width?{height:Math.floor(t.width/e),width:t.width}:t.height?{height:t.height,width:Math.floor(t.height*e)}:{height:i.height,width:i.width}}const ye={validate:t=>ft.test(l(t,0,1e3)),calculate(t){const i=S.root.exec(l(t));if(i){const t=we(i[0]);if(t.width&&t.height)return ve(t);if(t.viewbox)return be(t,t.viewbox)}throw new TypeError("Invalid SVG")}},je={validate:t=>0===m(t,0)&&0===m(t,4),calculate:t=>({height:m(t,14),width:m(t,12)})};function Ie(t,i){const e=f(t,32,4,i);return t.slice(e+2)}function Ee(t,i){const e=f(t,16,8,i);return(f(t,16,10,i)<<16)+e}function ke(t){if(t.length>24)return t.slice(12)}function Te(t,i){const e={};let a=t;for(;a&&a.length;){const t=f(a,16,0,i),p=f(a,16,2,i),s=f(a,32,4,i);if(0===t)break;1===s&&(3===p||4===p)&&(e[t]=Ee(a,i)),a=ke(a)}return e}function Se(t){const i=l(t,0,2);return"II"===i?"LE":"MM"===i?"BE":void 0}const Ae=["49492a00","4d4d002a"],Pe={validate:t=>Ae.includes(I(t,0,4)),calculate(t){const i="BE"===Se(t),e=Te(Ie(t,i),i),a=e[256],p=e[257];if(!a||!p)throw new TypeError("Invalid Tiff. Missing tags");return{height:p,width:a}}};function _e(t){return{height:1+X(t,7),width:1+X(t,4)}}function Ne(t){return{height:1+((15&t[4])<<10|t[3]<<2|(192&t[2])>>6),width:1+((63&t[2])<<8|t[1])}}function $e(t){return{height:16383&J(t,8),width:16383&J(t,6)}}const Fe={validate(t){const i="RIFF"===l(t,0,4),e="WEBP"===l(t,8,12),a="VP8"===l(t,12,15);return i&&e&&a},calculate(t){const i=l(t,12,16);if(t=t.slice(20,30),"VP8X"===i){const i=t[0];if(!(192&i)&&!(1&i))return _e(t);throw new TypeError("Invalid WebP")}if("VP8 "===i&&47!==t[0])return $e(t);const e=I(t,3,6);if("VP8L"===i&&"9d012a"!==e)return Ne(t);throw new TypeError("Invalid WebP")}},_=new Map([["bmp",Ot],["cur",Ht],["dds",Mt],["gif",Dt],["heif",Gt],["icns",Xt],["ico",dt],["j2c",Wt],["jp2",Zt],["jpg",pe],["ktx",re],["png",ge],["pnm",fe],["psd",he],["svg",ye],["tga",je],["tiff",Pe],["webp",Fe]]),Oe=Array.from(_.keys()),ze=new Map([[56,"psd"],[66,"bmp"],[68,"dds"],[71,"gif"],[73,"tiff"],[77,"tiff"],[82,"webp"],[105,"icns"],[137,"png"],[255,"jpg"]]);function Le(t){const i=t[0],e=ze.get(i);return e&&_.get(e).validate(t)?e:Oe.find((i=>_.get(i).validate(t)))}const Re={disabledTypes:[]};function Be(t){const i=Le(t);if(typeof i<"u"){if(Re.disabledTypes.includes(i))throw new TypeError("disabled file type: "+i);const e=_.get(i).calculate(t);if(void 0!==e)return e.type=e.type??i,e}throw new TypeError("unsupported file type: "+i)}async function He(t,i){try{const e=Be(t);if(!e.height||!e.width||!e.type)throw new g({...y,message:y.message(i)});const{width:a,height:p,type:s,orientation:o}=e,n=(o||0)>=5;return{width:n?p:a,height:n?a:p,format:s,orientation:o}}catch{throw new g({...y,message:y.message(i)})}}async function Me(t){const i=await fetch(t);if(!i.body||!i.ok)throw new g({...D,message:D.message(t)});const e=i.body.getReader();let a,p,s=new Uint8Array;for(;!a;){const i=await e.read();if(a=i.done,a)break;if(i.value){p=i.value;let a=new Uint8Array(s.length+p.length);a.set(s,0),a.set(p,s.length),s=a;try{const i=await He(s,t);if(i)return await e.cancel(),i}catch{}}}throw new g({...y,message:y.message(t)})}async function Ce(){if(!globalThis?.astroAsset?.imageService){const{default:t}=await It((async()=>{const{default:t}=await import("./astro/assets-service.Cu1PeyQ-.js").then((t=>t.s));return{default:t}}),[]).catch((t=>{const i=new g(Et);throw i.cause=t,i}));return globalThis.astroAsset||(globalThis.astroAsset={}),globalThis.astroAsset.imageService=t,t}return globalThis.astroAsset.imageService}async function De(t,i){if(!t||"object"!=typeof t)throw new g({...q,message:q.message(JSON.stringify(t))});if(typeof t.src>"u")throw new g({...G,message:G.message(t.src,"undefined",JSON.stringify(t))});if(Pt(t))throw new g(vt);const e=await Ce(),a={...t,src:await ct(t.src)};if(t.inferSize&&U(a.src)&&bt(a.src)){const t=await Me(a.src);a.width??=t.width,a.height??=t.height,delete a.inferSize}const p=O(a.src)?a.src.fsPath:void 0,s=O(a.src)?a.src.clone??a.src:a.src;a.src=s;const o=e.validateOptions?await e.validateOptions(a,i):a,n=e.getSrcSet?await e.getSrcSet(o,i):[];let l=await e.getURL(o,i),c=await Promise.all(n.map((async t=>({transform:t.transform,url:await e.getURL(t.transform,i),descriptor:t.descriptor,attributes:t.attributes}))));if(yt(e)&&globalThis.astroAsset.addStaticImage&&(!U(o.src)||l!==o.src)){const t=e.propertiesToHash??jt;l=globalThis.astroAsset.addStaticImage(o,t,p),c=n.map((i=>({transform:i.transform,url:globalThis.astroAsset.addStaticImage(i.transform,t,p),descriptor:i.descriptor,attributes:i.attributes})))}return{rawOptions:a,options:o,src:l,srcSet:{values:c,attribute:c.map((t=>`${t.url} ${t.descriptor}`)).join(", ")},attributes:void 0!==e.getHTMLAttributes?await e.getHTMLAttributes(o,i):{}}}const qe=pt(),Ge=ot((async(t,i,e)=>{const a=t.createAstro(qe,i,e);a.self=Ge;const p=a.props;if(void 0===p.alt||null===p.alt)throw new g(lt);"string"==typeof p.width&&(p.width=parseInt(p.width)),"string"==typeof p.height&&(p.height=parseInt(p.height));const s=await L(p),o={};return s.srcSet.values.length>0&&(o.srcset=s.srcSet.attribute),F`${nt()}<img${E(s.src,"src")}${j(o)}${j(s.attributes)}>`}),"/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/node_modules/astro/components/Image.astro",void 0),Ue={"3g2":"video/3gpp2","3gp":"video/3gpp","3gpp":"video/3gpp","3mf":"model/3mf",aac:"audio/aac",ac:"application/pkix-attr-cert",adp:"audio/adpcm",adts:"audio/aac",ai:"application/postscript",aml:"application/automationml-aml+xml",amlx:"application/automationml-amlx+zip",amr:"audio/amr",apng:"image/apng",appcache:"text/cache-manifest",appinstaller:"application/appinstaller",appx:"application/appx",appxbundle:"application/appxbundle",asc:"application/pgp-keys",atom:"application/atom+xml",atomcat:"application/atomcat+xml",atomdeleted:"application/atomdeleted+xml",atomsvc:"application/atomsvc+xml",au:"audio/basic",avci:"image/avci",avcs:"image/avcs",avif:"image/avif",aw:"application/applixware",bdoc:"application/bdoc",bin:"application/octet-stream",bmp:"image/bmp",bpk:"application/octet-stream",btf:"image/prs.btif",btif:"image/prs.btif",buffer:"application/octet-stream",ccxml:"application/ccxml+xml",cdfx:"application/cdfx+xml",cdmia:"application/cdmi-capability",cdmic:"application/cdmi-container",cdmid:"application/cdmi-domain",cdmio:"application/cdmi-object",cdmiq:"application/cdmi-queue",cer:"application/pkix-cert",cgm:"image/cgm",cjs:"application/node",class:"application/java-vm",coffee:"text/coffeescript",conf:"text/plain",cpl:"application/cpl+xml",cpt:"application/mac-compactpro",crl:"application/pkix-crl",css:"text/css",csv:"text/csv",cu:"application/cu-seeme",cwl:"application/cwl",cww:"application/prs.cww",davmount:"application/davmount+xml",dbk:"application/docbook+xml",deb:"application/octet-stream",def:"text/plain",deploy:"application/octet-stream",dib:"image/bmp","disposition-notification":"message/disposition-notification",dist:"application/octet-stream",distz:"application/octet-stream",dll:"application/octet-stream",dmg:"application/octet-stream",dms:"application/octet-stream",doc:"application/msword",dot:"application/msword",dpx:"image/dpx",drle:"image/dicom-rle",dsc:"text/prs.lines.tag",dssc:"application/dssc+der",dtd:"application/xml-dtd",dump:"application/octet-stream",dwd:"application/atsc-dwd+xml",ear:"application/java-archive",ecma:"application/ecmascript",elc:"application/octet-stream",emf:"image/emf",eml:"message/rfc822",emma:"application/emma+xml",emotionml:"application/emotionml+xml",eps:"application/postscript",epub:"application/epub+zip",exe:"application/octet-stream",exi:"application/exi",exp:"application/express",exr:"image/aces",ez:"application/andrew-inset",fdf:"application/fdf",fdt:"application/fdt+xml",fits:"image/fits",g3:"image/g3fax",gbr:"application/rpki-ghostbusters",geojson:"application/geo+json",gif:"image/gif",glb:"model/gltf-binary",gltf:"model/gltf+json",gml:"application/gml+xml",gpx:"application/gpx+xml",gram:"application/srgs",grxml:"application/srgs+xml",gxf:"application/gxf",gz:"application/gzip",h261:"video/h261",h263:"video/h263",h264:"video/h264",heic:"image/heic",heics:"image/heic-sequence",heif:"image/heif",heifs:"image/heif-sequence",hej2:"image/hej2k",held:"application/atsc-held+xml",hjson:"application/hjson",hlp:"application/winhlp",hqx:"application/mac-binhex40",hsj2:"image/hsj2",htm:"text/html",html:"text/html",ics:"text/calendar",ief:"image/ief",ifb:"text/calendar",iges:"model/iges",igs:"model/iges",img:"application/octet-stream",in:"text/plain",ini:"text/plain",ink:"application/inkml+xml",inkml:"application/inkml+xml",ipfix:"application/ipfix",iso:"application/octet-stream",its:"application/its+xml",jade:"text/jade",jar:"application/java-archive",jhc:"image/jphc",jls:"image/jls",jp2:"image/jp2",jpe:"image/jpeg",jpeg:"image/jpeg",jpf:"image/jpx",jpg:"image/jpeg",jpg2:"image/jp2",jpgm:"image/jpm",jpgv:"video/jpeg",jph:"image/jph",jpm:"image/jpm",jpx:"image/jpx",js:"text/javascript",json:"application/json",json5:"application/json5",jsonld:"application/ld+json",jsonml:"application/jsonml+json",jsx:"text/jsx",jt:"model/jt",jxr:"image/jxr",jxra:"image/jxra",jxrs:"image/jxrs",jxs:"image/jxs",jxsc:"image/jxsc",jxsi:"image/jxsi",jxss:"image/jxss",kar:"audio/midi",ktx:"image/ktx",ktx2:"image/ktx2",less:"text/less",lgr:"application/lgr+xml",list:"text/plain",litcoffee:"text/coffeescript",log:"text/plain",lostxml:"application/lost+xml",lrf:"application/octet-stream",m1v:"video/mpeg",m21:"application/mp21",m2a:"audio/mpeg",m2v:"video/mpeg",m3a:"audio/mpeg",m4a:"audio/mp4",m4p:"application/mp4",m4s:"video/iso.segment",ma:"application/mathematica",mads:"application/mads+xml",maei:"application/mmt-aei+xml",man:"text/troff",manifest:"text/cache-manifest",map:"application/json",mar:"application/octet-stream",markdown:"text/markdown",mathml:"application/mathml+xml",mb:"application/mathematica",mbox:"application/mbox",md:"text/markdown",mdx:"text/mdx",me:"text/troff",mesh:"model/mesh",meta4:"application/metalink4+xml",metalink:"application/metalink+xml",mets:"application/mets+xml",mft:"application/rpki-manifest",mid:"audio/midi",midi:"audio/midi",mime:"message/rfc822",mj2:"video/mj2",mjp2:"video/mj2",mjs:"text/javascript",mml:"text/mathml",mods:"application/mods+xml",mov:"video/quicktime",mp2:"audio/mpeg",mp21:"application/mp21",mp2a:"audio/mpeg",mp3:"audio/mpeg",mp4:"video/mp4",mp4a:"audio/mp4",mp4s:"application/mp4",mp4v:"video/mp4",mpd:"application/dash+xml",mpe:"video/mpeg",mpeg:"video/mpeg",mpf:"application/media-policy-dataset+xml",mpg:"video/mpeg",mpg4:"video/mp4",mpga:"audio/mpeg",mpp:"application/dash-patch+xml",mrc:"application/marc",mrcx:"application/marcxml+xml",ms:"text/troff",mscml:"application/mediaservercontrol+xml",msh:"model/mesh",msi:"application/octet-stream",msix:"application/msix",msixbundle:"application/msixbundle",msm:"application/octet-stream",msp:"application/octet-stream",mtl:"model/mtl",musd:"application/mmt-usd+xml",mxf:"application/mxf",mxmf:"audio/mobile-xmf",mxml:"application/xv+xml",n3:"text/n3",nb:"application/mathematica",nq:"application/n-quads",nt:"application/n-triples",obj:"model/obj",oda:"application/oda",oga:"audio/ogg",ogg:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",omdoc:"application/omdoc+xml",onepkg:"application/onenote",onetmp:"application/onenote",onetoc:"application/onenote",onetoc2:"application/onenote",opf:"application/oebps-package+xml",opus:"audio/ogg",otf:"font/otf",owl:"application/rdf+xml",oxps:"application/oxps",p10:"application/pkcs10",p7c:"application/pkcs7-mime",p7m:"application/pkcs7-mime",p7s:"application/pkcs7-signature",p8:"application/pkcs8",pdf:"application/pdf",pfr:"application/font-tdpfr",pgp:"application/pgp-encrypted",pkg:"application/octet-stream",pki:"application/pkixcmp",pkipath:"application/pkix-pkipath",pls:"application/pls+xml",png:"image/png",prc:"model/prc",prf:"application/pics-rules",provx:"application/provenance+xml",ps:"application/postscript",pskcxml:"application/pskc+xml",pti:"image/prs.pti",qt:"video/quicktime",raml:"application/raml+yaml",rapd:"application/route-apd+xml",rdf:"application/rdf+xml",relo:"application/p2p-overlay+xml",rif:"application/reginfo+xml",rl:"application/resource-lists+xml",rld:"application/resource-lists-diff+xml",rmi:"audio/midi",rnc:"application/relax-ng-compact-syntax",rng:"application/xml",roa:"application/rpki-roa",roff:"text/troff",rq:"application/sparql-query",rs:"application/rls-services+xml",rsat:"application/atsc-rsat+xml",rsd:"application/rsd+xml",rsheet:"application/urc-ressheet+xml",rss:"application/rss+xml",rtf:"text/rtf",rtx:"text/richtext",rusd:"application/route-usd+xml",s3m:"audio/s3m",sbml:"application/sbml+xml",scq:"application/scvp-cv-request",scs:"application/scvp-cv-response",sdp:"application/sdp",senmlx:"application/senml+xml",sensmlx:"application/sensml+xml",ser:"application/java-serialized-object",setpay:"application/set-payment-initiation",setreg:"application/set-registration-initiation",sgi:"image/sgi",sgm:"text/sgml",sgml:"text/sgml",shex:"text/shex",shf:"application/shf+xml",shtml:"text/html",sieve:"application/sieve",sig:"application/pgp-signature",sil:"audio/silk",silo:"model/mesh",siv:"application/sieve",slim:"text/slim",slm:"text/slim",sls:"application/route-s-tsid+xml",smi:"application/smil+xml",smil:"application/smil+xml",snd:"audio/basic",so:"application/octet-stream",spdx:"text/spdx",spp:"application/scvp-vp-response",spq:"application/scvp-vp-request",spx:"audio/ogg",sql:"application/sql",sru:"application/sru+xml",srx:"application/sparql-results+xml",ssdl:"application/ssdl+xml",ssml:"application/ssml+xml",stk:"application/hyperstudio",stl:"model/stl",stpx:"model/step+xml",stpxz:"model/step-xml+zip",stpz:"model/step+zip",styl:"text/stylus",stylus:"text/stylus",svg:"image/svg+xml",svgz:"image/svg+xml",swidtag:"application/swid+xml",t:"text/troff",t38:"image/t38",td:"application/urc-targetdesc+xml",tei:"application/tei+xml",teicorpus:"application/tei+xml",text:"text/plain",tfi:"application/thraud+xml",tfx:"image/tiff-fx",tif:"image/tiff",tiff:"image/tiff",toml:"application/toml",tr:"text/troff",trig:"application/trig",ts:"video/mp2t",tsd:"application/timestamped-data",tsv:"text/tab-separated-values",ttc:"font/collection",ttf:"font/ttf",ttl:"text/turtle",ttml:"application/ttml+xml",txt:"text/plain",u3d:"model/u3d",u8dsn:"message/global-delivery-status",u8hdr:"message/global-headers",u8mdn:"message/global-disposition-notification",u8msg:"message/global",ubj:"application/ubjson",uri:"text/uri-list",uris:"text/uri-list",urls:"text/uri-list",vcard:"text/vcard",vrml:"model/vrml",vtt:"text/vtt",vxml:"application/voicexml+xml",war:"application/java-archive",wasm:"application/wasm",wav:"audio/wav",weba:"audio/webm",webm:"video/webm",webmanifest:"application/manifest+json",webp:"image/webp",wgsl:"text/wgsl",wgt:"application/widget",wif:"application/watcherinfo+xml",wmf:"image/wmf",woff:"font/woff",woff2:"font/woff2",wrl:"model/vrml",wsdl:"application/wsdl+xml",wspolicy:"application/wspolicy+xml",x3d:"model/x3d+xml",x3db:"model/x3d+fastinfoset",x3dbz:"model/x3d+binary",x3dv:"model/x3d-vrml",x3dvz:"model/x3d+vrml",x3dz:"model/x3d+xml",xaml:"application/xaml+xml",xav:"application/xcap-att+xml",xca:"application/xcap-caps+xml",xcs:"application/calendar+xml",xdf:"application/xcap-diff+xml",xdssc:"application/dssc+xml",xel:"application/xcap-el+xml",xenc:"application/xenc+xml",xer:"application/patch-ops-error+xml",xfdf:"application/xfdf",xht:"application/xhtml+xml",xhtml:"application/xhtml+xml",xhvml:"application/xv+xml",xlf:"application/xliff+xml",xm:"audio/xm",xml:"text/xml",xns:"application/xcap-ns+xml",xop:"application/xop+xml",xpl:"application/xproc+xml",xsd:"application/xml",xsf:"application/prs.xsf+xml",xsl:"application/xml",xslt:"application/xml",xspf:"application/xspf+xml",xvm:"application/xv+xml",xvml:"application/xv+xml",yaml:"text/yaml",yang:"application/yang",yin:"application/yin+xml",yml:"text/yaml",zip:"application/zip"};function Ye(t){let i=(""+t).trim().toLowerCase(),e=i.lastIndexOf(".");return Ue[~e?i.substring(++e):i]}const Ve=pt(),Je=ot((async(t,i,e)=>{const a=t.createAstro(Ve,i,e);a.self=Je;const p=["webp"],{formats:s=p,pictureAttributes:o={},fallbackFormat:n,...l}=a.props;if(void 0===l.alt||null===l.alt)throw new g(lt);const c=l.class?.match(/\bastro-\w{8}\b/)?.[0];c&&(o.class?o.class=`${o.class} ${c}`:o.class=c);for(const t in l)t.startsWith("data-astro-cid")&&(o[t]=l[t]);const r=await ct(l.src),m=await Promise.all(s.map((async t=>await L({...l,src:r,format:t,widths:l.widths,densities:l.densities}))));let d=n??"png";!n&&O(r)&&["gif","svg","jpg","jpeg"].includes(r.format)&&(d=r.format);const f=await L({...l,format:d,widths:l.widths,densities:l.densities}),h={},x={};return l.sizes&&(x.sizes=l.sizes),f.srcSet.values.length>0&&(h.srcset=f.srcSet.attribute),F`${nt()}<picture${j(o)}> ${Object.entries(m).map((([t,i])=>{const e=l.densities||!l.densities&&!l.widths?`${i.src}${i.srcSet.values.length>0?", "+i.srcSet.attribute:""}`:i.srcSet.attribute;return F`<source${E(e,"srcset")}${E(Ye(i.options.format??i.src)??`image/${i.options.format}`,"type")}${j(x)}>`}))} <img${E(f.src,"src")}${j(h)}${j(f.attributes)}> </picture>`}),"/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/node_modules/astro/components/Picture.astro",void 0),Xe={service:{entrypoint:"astro/assets/services/sharp",config:{}},domains:[],remotePatterns:[]},L=async t=>await De(t,Xe);export{Ge as $,Ke as c};