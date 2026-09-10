
const icons=["❤️","💗","✨","🌸","💖","🥹","🫶🏻"];
for(let i=0;i<12;i++){
  const s=document.createElement("div"); s.className="spark"; s.textContent=icons[i%icons.length];
  s.style.left=(Math.random()*100)+"vw"; s.style.animationDelay=(Math.random()*5)+"s"; s.style.fontSize=(14+Math.random()*16)+"px";
  document.body.appendChild(s);
}
document.querySelectorAll(".fade").forEach((el,i)=>{el.style.opacity="0";el.style.transform="translateY(18px)";setTimeout(()=>{el.style.transition=".8s";el.style.opacity="1";el.style.transform="translateY(0)"},120+i*100)});
