const PIECES = {
'inline-banner': {
  type: 'Excerpt',
  title: 'Third Act',
  html: `<div style="font-family:monospace;font-size:10px;color:#333;padding:10px;">At a dinner table. ANITA covers her mouth as she chews. The camera pans out, and she’s eating street food with the posture of a connoisseur. Each movement is delicate, planned, eager to please. She’s holding back a messy eater in her body, hand on her stomach, pressing through the skin and at the hunger. NICKY picks at his plate, mirroring her, but it looks casual. He doesn’t care about the mess she might make, and she slips up eventually.
<br> <br>A self-deprecating joke. ANITA hates herself for it, sort of, but his laugh is so contagious and warm that she can’t help but get distracted. He looks at her the rest of the time, as she eats her food. Muffled conversation, a hand still over her mouth. She gathers the rest of her food up in a neat little box, then ties the plastic bag together with meticulous attention, a bow on top. Half of it is untouched; the table is completely clean on her side. Still, it feels like trash compared to his glazed ceramic dishes, the chopsticks straight down the center. ANITA’s jaw is tense, but never her brow. She recalls his lunch, beautiful and clean in its simplicity. A pink sliver of salmon, snow white rice, homey glazed dish. Beautiful, and how boastfully small!</p>`
},
  banner: {
    type: 'excerpt',
    title: 'The Vegetarian',
    html: `<div style="font-family:monospace;font-size:10px;color:#333;padding:10px;">
<p style="margin-bottom: 10px;"> Sleeping in five-minute snatches. Slipping out of fuzzy
consciousness, it’s back—the dream. Can’t even call it that now.
Animal eyes gleaming wild, presence of blood, unearthed skull,
again those eyes. Rising up from the pit of my stomach. Shuddering
awake, my hands, need to see my hands. Breathe. My fingernails
still soft, my teeth still gentle.</p>
<p> Can only trust my breasts now. I like my breasts, nothing can be
killed by them. Hand, foot, tongue, gaze, all weapons from which
nothing is safe. But not my breasts. With my round breasts, I’m okay.
Still okay. So why do they keep on shrinking? Not even round
anymore. Why? Why am I changing like this? Why are my edges all
sharpening—what I am going to gouge? </p> 
    </div>`
  },
  inline: {
    type: 'Photo',
    title: 'All Over',
    html: `<img src="/assets/Allover.JPG" style="width: 142px; height:auto;">`
  },
  1:  { type:'playlist', title:'遺', html:`<p style="font-family:monospace;font-size:10px;color:#333;padding:10px;">河流<br><em>蛙池</em><br><br>Love Me More<br><em>Mitski</em><br><br>Hentai<br><em>Rosalia</em><br><br>超度我<br><em>福祿壽</em><br><br>one last time, please (demo)<br><em>dodie</em><br><br>Dawn in the Adan<br><em>青葉市子</em></p>` },
  2:  { type:'art',  title:'Surrogate Body', html:`<img style="width:142px;height:auto" src="/assets/surrogate-body.jpg">` },
  3:  { type:'song', title:'エロティック', html:`
<audio id="myAudio">
  <source src="/assets/Erotic.mp3" type="audio/mp3">
</audio>
<img src="/assets/erotic-cover.jpeg" alt="Play Music" onclick="document.getElementById('myAudio').play()" style="cursor:pointer; width:100px; ">
` },
  4:  { type:'excerpt', title:'Voyeurism', html:`<p style="font-family:monospace;font-size:10px;color:#333;padding:10px;">When i was walking home today, there was this guy who i came across on the way back to the dorm from trader joe’s, and he was quite well dressed in a simplistic way, cross-body bag and all, I’m very attracted to this, and he has lightly curled hair. I was sort of trying to– I don’t know, I had the sense that I wanted him to think of my presence as a kind of movie scene serendipitous meeting, which I am assuming… he was too lost in his own world to notice. I think he had earbuds in and it made me wonder what he was listening to, if it could somehow match the rhythm of my step so everything seemed beautifully aligned in a moment of divine intervention… or something. Isn't it pathetic? So instead of being well tonight I’m going to turn to writing and contemplation.</p>` },
  5:  { type:'excerpt',  title:'苏州河', html:`<p style="font-family:monospace;font-size:10px;color:#333;padding:10px;">  我再问她，那上海呢？上海也会变得我认不出吗？
  <br><br>你出生在这座城市，长大在这座城市，但你又有多了解这里？再过两年，你还会遇到很多人。你会记住很多新的地方。有那么几个月，你会以为自己真正属于上海。你会以为你已经把一座城市归为了自己的领地。但在你要离开上海前，你会发现自己正处于一个悬崖一样的境地。在一段很短的时间里，你熟悉的一切都消失了。Playground转型了，Elevator关了，Heim关了，Red Bar也要关了。法诺不会关，但那里的厨房做不了Red Bar的烤鸡，上海最好吃的烤鸡。连Abyss，Abyss或许也要关掉。油罐那里的码头，你在滨江那么多个夜晚的记忆，要再施工。无论如何，你不会再有机会和你的朋友跳到黄浦江岸边凌空的石台上吹江风。在毕业那天，你会意识到，你已经和很多人见完了最后一面，但你以为上海是永恒的，其实上海也马上要消失了。很多人会离开上海，有人或许只是搬到青浦，但也有人，在你来得及反应之前，就已经在珠海了。你留在了上海，但上海要离开你。七年后，当你从那个更加危险的城市回到这里，或许外滩的景观不会有任何变化，但你知道，在这的皮囊之下，已经涌入了太多新血液，替换掉那些死去的细胞，就像过去七年在你身体上发生的一切。你以为你是这座城市的人吗？其实你是一座旧城的遗物。这里发生过的一切死亡都会堆砌在你的身体里，把你变成一座巨大，笨重的坟墓，就像现在的你一样。
<br><br><em>Edouard Ji</em></p>
  ` },
  6:  { type:'song', title:'Rêverie, L. 68', html:`<audio controls style="width: 140px; height: 50px;" src="/assets/debussy.mp3" type="audio/mp3"></audio>` },
  7:  { type:'excerpt',  title:'A Conversation, in Memoriam',          html:`<div style="font-family:monospace;font-size:10px;color:#333;padding:10px;">
<p style="margin-bottom: 10px;">B: Everything is zero. There’s nothing left. <br> </p>
<p style="margin-bottom: 10px;">[A doesn’t respond.] <br> </p>
<p style="margin-bottom: 10px;">B: At least we’re on the same page about something. <br> </p>
<p style="margin-bottom: 10px;">[A doesn’t respond, a long silence.] <br> </p>
<p style="margin-bottom: 10px;">B: You know what pisses me off about you? You read all of these things about immoral people, you want to get to know them better, you even wanna fuck them. You can relate to some guy from 110 BC who writes a myth or an epic and you think they're the most human humans will ever be, and I'm sitting right here and you don’t care about my story and it doesn’t concern you. Now, I'm someone who does these horrible, human things and you still don’t care and you still don’t like me and I just don’t understand. All of these people who are detached from you, you want to know what they have to say but you don't care what I have to say. <br> </p>
<p style="margin-bottom: 10px;">A: You just feel guilty and you want to feel like the way we are is my fault. <br> </p>
<p style="margin-bottom: 10px;">B: Yeah. We shouldn’t have become friends in the first place if all we had in common was hating someone, but it's too late to talk about this and it only comes up if we fight, anyway. Can you fucking say something? <br> </p>
<p style="margin-bottom: 10px;">A: What’s there to say? <br> </p>
<p style="margin-bottom: 10px;">B: I dunno, ask a question? <br></p>
<p style="margin-bottom: 10px;">A: What’s left to know?</p>
</div>` },
  8:  { type:'excerpt', title:'The Flesh, it Makes You Crazy', html:
    `<div style="font-family:monospace;font-size:10px;color:#333;padding:10px;"> <p>This was how I found myself trapped inside an aching that originated outside of me but nonetheless engulfed me, a fist tightening around my neck. Each day I was shocked to find that I was externally unaltered, that no one could perceive my regeneration, that I was received everywhere as if I were not a scandal. Meanwhile, my secret swelled inside of me. I knew that it was only a matter of time until the longing attacked.</p>
    <br><p><em>Becca Rothfeld</em></p></div>` },
  9:  { type:'poem', title:'In a Station of the Metro', html:
`<p style="font-family:monospace;font-size:10px;color:#333;padding:8px;">The apparition of these faces in the crowd:
<br> Petals on a wet, black bough.
<br><br><em>Ezra Pound</em></p>` },
  10: { type:'art',  title:'digicam-utopia', desc:'Generative SVG landscape',      html:`<img src="/assets/digicam-utopia.png" style="width: 140px; height:auto;">` },
  11: { type:'photo', title:'Genesis',   html:`<img src="/assets/genesis.Jpeg" style="width: 142px; height:auto;">` },
};

function adSrcdoc(label) {
  return `<!DOCTYPE html><html><head><style>
    *{margin:0;padding:0;box-sizing:border-box;}
    html,body{width:100%;height:100vh;overflow:hidden;}
    body{background:#fff;font-family:Arial,sans-serif;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      gap:5px;padding:10px;}
    .bar{background:#ccc;height:8px;width:80%;flex-shrink:0;}
    .bar.s{width:50%;}
    .img{background:#e8e8e8;border:1px solid #bbb;width:70%;height:40px;flex-shrink:0;}
    .btn{background:#000;color:#fff;font-size:9px;font-weight:bold;
      padding:3px 10px;border:none;flex-shrink:0;}
    .ad-tag{font-size:8px;color:#aaa;align-self:flex-start;}
  </style></head><body>
    <div class="ad-tag">Ad</div>
    <div class="img"></div>
    <div class="bar"></div>
    <div class="bar s"></div>
    <button class="btn">${label}</button>
  </body></html>`;
}

function contentSrcdoc(piece) {
  return `<!DOCTYPE html><html><head><style>
    *{margin:0;padding:0;box-sizing:border-box;}
    html,body{width:100%;height:100vh;}
    body{background:#fff;font-family:Arial,sans-serif;overflow:auto;}
    .tag{font-size:8px;text-transform:uppercase;letter-spacing:0.06em;
      color:#888;padding:6px 8px 2px;display:block;}
    .title{font-size:10px;font-weight:bold;color:#000;padding:2px 8px 4px;
      border-bottom:1px solid #eee;display:block;}
    .body{padding:6px 8px;}
  </style></head><body>
    <span class="tag">${piece.type}</span>
    <span class="title">${piece.title}</span>
    <div class="body">${piece.html}</div>
  </body></html>`;
}

function bannerAdSrcdoc() {
  return `<!DOCTYPE html><html><head><style>
    *{margin:0;padding:0;box-sizing:border-box;}
    html,body{width:100%;height:100vh;overflow:hidden;}
    body{
    letter-spacing: 1.2;
    background-color: white; background-image: url(/assets/animegirl.png); background-size:300px; background-repeat: no-repeat; background-position:90% 20%; font-family:Arial,sans-serif;
      display:flex;align-items:center;justify-content:space-between;
      padding:0 24px;}
    .headline{font-size:20px;font-weight:bold;font-family:'Arial Black',Arial,sans-serif;color:orange;
          -webkit-text-stroke: 2px black;
      paint-order: stroke fill;
      line-height: 1}
    .sub{font-size:11px;color:gray;margin-top:3px;}
    .cta{background:#000;color:#fff;font-size:12px;font-weight:bold;
      padding:8px 18px;border:2px solid #000;white-space:nowrap;flex-shrink:0;}
  </style></head><body>
    <div>
      <div class="headline">Don't kill yourself,<br> a beautiful asian girl wants you</div>
      <div class="sub">Erika is lonely and calling you! (500m)</div>
    </div>
    <div class="cta">CALL NOW</div>
  </body></html>`;
}

const AD_LABELS = ['CLICK TO LISTEN','BUY NOW','SIGN UP FREE','SEE INSIDE','MISSING HOME?','MUSIC FOR FREE','ACT NOW','NEW LEAKED PHOTOS','JOIN NOW','UPLOAD TO CLOUD','CLAIM OFFER','READ MORE'];

function makeIframe(srcdoc) {
  const f = document.createElement('iframe');
  f.srcdoc = srcdoc;
  f.setAttribute('sandbox', 'allow-same-origin allow-scripts');
  f.style.cssText = 'width:100%;height:100%;border:none;display:block;pointer-events:none;';
  return f;
}

function buildSlot(wrapperEl, pieceKey, adLabel) {
  const adFrame = makeIframe(adSrcdoc(adLabel));
  wrapperEl.appendChild(adFrame);
  wrapperEl.addEventListener('click', () => {
    const piece = PIECES[pieceKey];
    if (!piece) return;
    wrapperEl.innerHTML = '';
    const contentFrame = makeIframe(contentSrcdoc(piece));
    contentFrame.style.pointerEvents = 'auto';
    wrapperEl.appendChild(contentFrame);
    wrapperEl.style.cursor = 'default';
  });
}

function buildBanner() {
  const wrap = document.getElementById('banner-slot');
  const adFrame = makeIframe(bannerAdSrcdoc());
  wrap.appendChild(adFrame);
  wrap.addEventListener('click', () => {
    const piece = PIECES.banner;
    wrap.innerHTML = '';
    const contentFrame = makeIframe(contentSrcdoc(piece));
    contentFrame.style.pointerEvents = 'auto';
    wrap.appendChild(contentFrame);
    wrap.style.cursor = 'default';
  });
}

function buildInline() {
  const wrap = document.getElementById('inline-slot');
  const adFrame = makeIframe(adSrcdoc('SPIDER PROBLEMS?'));
  wrap.appendChild(adFrame);
  wrap.addEventListener('click', () => {
    const piece = PIECES.inline;
    wrap.innerHTML = '';
    const contentFrame = makeIframe(contentSrcdoc(piece));
    contentFrame.style.pointerEvents = 'auto';
    wrap.appendChild(contentFrame);
    wrap.style.cursor = 'default';
  });
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
buildBanner();
buildInline();

for (let i = 1; i <= 11; i++) {
  const el = document.getElementById('slot-' + i);
  if (el) buildSlot(el, i, AD_LABELS[(i - 1) % AD_LABELS.length]);
}

function showPopup() { document.getElementById('popup-overlay').classList.add('show'); }
function closePopup() { document.getElementById('popup-overlay').classList.remove('show'); }

(function() {
  const wrap = document.getElementById('inline-banner');
  const frame = document.getElementById('inline-banner-frame');
frame.srcdoc = `<!DOCTYPE html><html><head><style>
  *{margin:0;padding:0;box-sizing:border-box;}
  html,body{width:100%;height:100vh;overflow:hidden;}
  body{background-image:url(/assets/hands.jpeg);
  background-size:cover;
  background-repeat:no-repeat;
  background-position: center;
  font-family:fantasy;
    display:flex;align-items:center;justify-content:center;
    padding:0 30px;gap:16px;}
  .text{font-size:20px;color:#fff;}
  .cta{background:#000;color:#fff;font-size:11px;font-weight:bold;
    padding:5px 20px; white-space:nowrap;flex-shrink:0;font-family:Arial,sans-serif}
    span{background: purple;
    }
</style></head><body>
  <div class="text"><span>&#9733 Get Your Palm Read - Licensed Chinese Psychic &#9733</span></div>
  <div class="cta">CLICK</div>
</body></html>`;
  wrap.addEventListener('click', () => {
    wrap.innerHTML = '';
    const f = makeIframe(contentSrcdoc(PIECES['inline-banner']));
    f.style.pointerEvents = 'auto';
    wrap.appendChild(f);
    wrap.style.cursor = 'default';
  });
})();

setTimeout(() => {
  document.getElementById('corner-popup').style.display = 'block';
}, 4000);