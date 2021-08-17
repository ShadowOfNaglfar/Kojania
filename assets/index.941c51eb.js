import{u as a,c as e,o as t,a as o,b as n,w as s,v as r,d as i,t as l,F as c,r as d,e as u,f as m,g as h,h as p,n as g,i as b,j as k,k as w}from"./vendor.3b5e1700.js";const v={ru:{common:"обычный",hard:"сложный",madness:"безумный",goal:"Текущая цель",Status:"Положение дел",Gold:"Золото",Moral:"Мораль",Renown:"Известность"},en:{goal:"Current target"}};const C=["max"];const _={},y=Object.assign(_,{setup:function(d){const u=a(),m=e((()=>u.state.Entity));return(a,e)=>(t(),o(c,null,[n("div",null,[s(n("input",{type:"range",class:"hire",min:"0",max:i(m).Kojania.availableWarriors,"onUpdate:modelValue":e[0]||(e[0]=a=>i(m).tohire=a)},null,8,C),[[r,i(m).tohire,void 0,{number:!0}]]),n("button",{onClick:e[1]||(e[1]=a=>i(m).tohire=i(m).Kojania.availableWarriors),id:"allBtn"},"max")]),n("p",null,"К найму: "+l(i(m).tohire)+" || На сумму: "+l(i(m).tohire*i(m).Kojania.hirecost),1),n("button",{onClick:e[2]||(e[2]=a=>i(u).dispatch("hire",i(m).tohire)),id:"hireBtn"},"Нанять")],64))}});const M={key:0,class:"modal-mask"},f={class:"modal-wrapper"},x={class:"modal-position"},j={id:"contracts-block"},P={id:"contractTable"},K=n("tr",null,[n("th",null,"Тип"),n("th",null,"Мин. мощь"),n("th",null,"Реком. мощь"),n("th")],-1),q={key:0},L=n("td",null,"localError",-1),T=["onClick"],N={class:"modal-mask"},R={class:"modal-wrapper"},W={class:"modal-position"},Q={id:"error-block"},A=n("br",null,null,-1),D={class:"modal-mask"},S={class:"modal-wrapper"},E={class:"modal-position"},B={id:"mission-block"},I={id:"plus"},G=n("hr",null,null,-1),U={class:"missionText"},H=n("br",null,null,-1);const O={},F=Object.assign(O,{setup:function(r){const p=a(),g=e((()=>p.state.Entity));return(a,e)=>(t(),o(c,null,[i(g).modalContracts?(t(),o("div",M,[n("div",f,[n("div",x,[n("div",j,[n("table",P,[K,(t(!0),o(c,null,d(i(g).contract_list,((a,e)=>(t(),o("tbody",null,[i(g).contracts[a.dif].isAvailable?(t(),o("tr",q,[L,n("td",null,l(a.minPower),1),n("td",null,l(a.recommendedPower),1),n("td",null,[n("button",{class:"closeCartButton",onClick:t=>i(p).dispatch("takeContract",{contract:a,index:e})},"Принять",8,T)])])):u("",!0)])))),256))]),n("button",{class:"closeCartButton",onClick:e[0]||(e[0]=a=>i(g).modalContracts--)},"Пожалуй не сейчас...")])])])])):u("",!0),s(n("div",N,[n("div",R,[n("div",W,[n("div",Q,[h(l(i(g).modalErrorText)+" ",1),A,n("button",{class:"closeCartButton",onClick:e[1]||(e[1]=a=>i(g).modalError--)},"Понимаю")])])])],512),[[m,i(g).modalError]]),s(n("div",D,[n("div",S,[n("div",E,[n("div",B,[(t(!0),o(c,null,d(a.niceQuestMsgs,((a,e)=>(t(),o("p",I,l(a),1)))),256)),G,n("p",U,l(a.modalMissionText),1),H,n("button",{class:"closeCartButton",onClick:e[2]||(e[2]=e=>a.modalMission--)},"Понимаю")])])])],512),[[m,a.modalMission]])],64))}});const V={id:"content"},z={id:"goalContainerPositioner"},J={id:"goalContainer"},X={align:"left"},Y={id:"globalInfoRow"},Z=n("hr",{class:"svl"},null,-1),$=n("hr",{class:"svl"},null,-1),aa=n("hr",null,null,-1),ea={id:"globalInfoRow"},ta=n("hr",{class:"svl"},null,-1),oa=n("hr",{class:"svl"},null,-1),na={id:"contentPositioner"},sa={class:"kojaniaCont"},ra=n("h3",null,"Кожания",-1),ia=h("Отношения: "),la=h("Уровень процветания: "),ca=h(" Демоническая угроза: "),da=h("Цена рекрута: "),ua=n("br",null,null,-1),ma={class:"squadCont"},ha=n("h3",null,"Состав отряда",-1),pa={key:0},ga=["onClick","toolTip"],ba=["onClick","toolTip"],ka=["onClick","toolTip"],wa=["onClick","toolTip"],va=n("br",null,null,-1),Ca={class:"modal-mask"},_a={class:"modal-wrapper"},ya={id:"day"},Ma=n("br",null,null,-1),fa=n("hr",null,null,-1),xa={style:{"min-width":"400px"}},ja=n("h3",null,"События",-1),Pa={class:"ml"},Ka={class:"ml"},qa=n("hr",null,null,-1),La=n("br",null,null,-1);const Ta={data:()=>({local:"ru"}),methods:{l10n(a){return"en"==this.local&&void 0===v[this.local][a]?a:v[this.local][a]}}},Na=Object.assign(Ta,{setup:function(r){const k=a(),w=e((()=>k.state.Entity));return(a,e)=>{const r=p("Tabs");return t(),o("div",V,[n("div",z,[n("div",J,[n("h3",null,l(a.l10n("goal")),1),n("p",null,l(i(w).quests[i(w).quests.active].goal),1)])]),n("div",null,[n("h3",X,l(a.l10n("Status")),1)]),n("div",Y,[n("p",null,l(a.l10n("Gold"))+": "+l(i(w).gold),1),Z,n("p",null,l(a.l10n("Moral"))+": "+l(i(w).squadState.morality),1),n("button",{class:"moralButton",onClick:e[0]||(e[0]=()=>{})},"▼"),$,n("p",null,l(a.l10n("Renown"))+": "+l(Math.floor(i(w).squadState.reputation)),1)]),aa,n("div",ea,[n("p",null,"Дней до выплаты: "+l(i(w).squadState.paydayleft),1),ta,n("p",null,"Жалование: "+l(i(k).getters.payday),1),oa,n("button",{onClick:e[1]||(e[1]=()=>{})},"Финансы")]),n("div",na,[n("div",sa,[ra,n("p",null,[ia,n("span",{class:g(i(k).getters.kojaniaReputation[1])},l(i(k).getters.kojaniaReputation[0]),3)]),n("p",null,[la,n("span",{class:g(i(k).getters.kojaniaProsperity[1])},l(i(k).getters.kojaniaProsperity[0]),3)]),n("p",null,[ca,n("span",{class:g(i(k).getters.demonicPresence[1])},l(i(k).getters.demonicPresence[0]),3)]),n("p",null,[da,n("span",null,l(i(w).Kojania.hirecost),1)]),n("p",null,"Свободные рекруты: "+l(i(w).Kojania.availableWarriors),1),b(y),ua,s(n("div",null,[n("p",null,"Контракты: "+l(i(w).availableContracts),1),s(n("button",{onClick:e[2]||(e[2]=a=>i(k).commit("openContractList"))},"Прием контрактов",512),[[m,i(w).availableContracts>0]])],512),[[m,i(w).isAvailableContracts&&!i(w).contract_is_taken[3]]]),s(n("p",null,"Принят контракт",512),[[m,i(w).contract_is_taken[0]]]),s(n("p",null,"Принят сложный контракт",512),[[m,i(w).contract_is_taken[1]]]),s(n("p",null,"Принят безумный контракт",512),[[m,i(w).contract_is_taken[2]]])]),n("div",ma,[ha,(t(!0),o(c,null,d(i(w).squad,((e,n)=>(t(),o("p",{class:"squadList",key:e},[e>0?(t(),o("div",pa,[h(l(i(w).rangName[n])+": "+l(e)+" ",1),i(w).squad_imp[n]>0&&i(w).wa[n]>1?(t(),o("button",{key:0,onClick:e=>a.rangUp(n,1),toolTip:"Стоимость: "+2*i(w).wpc[n],class:"tooltip"}," 1+ ",8,ga)):u("",!0),i(w).squad_imp[n]>=10&&i(w).wa[n]>1?(t(),o("button",{key:1,onClick:e=>a.rangUp(n,10),toolTip:"Стоимость: "+2*i(w).wpc[n]*10,class:"tooltip"}," 10+ ",8,ba)):u("",!0),i(w).squad_imp[n]>=100&&i(w).wa[n]>1?(t(),o("button",{key:2,onClick:e=>a.rangUp(n,100),toolTip:"Стоимость: "+2*i(w).wpc[n]*100,class:"tooltip"}," 100+ ",8,ka)):u("",!0),i(w).squad_imp[n]>1&&i(w).wa[n]>1?(t(),o("button",{key:3,onClick:e=>a.rangUp(n,i(w).squad_imp[n]),toolTip:"Стоимость: "+i(w).squad_imp[n]*i(w).wpc[n]*2,class:"tooltip"},l(i(w).squad_imp[n])+"+ ",9,wa)):u("",!0)])):u("",!0)])))),128)),va,n("p",null,"Всего людей: "+l(i(k).getters.totalPeople),1),n("p",null,"Боевая мощь: "+l(i(k).getters.power),1),i(w).wa.smerd>0?(t(),o("button",{key:0,onClick:e[3]||(e[3]=(...e)=>a.openRangInfo&&a.openRangInfo(...e))},"? о рангах")):u("",!0),s(n("div",Ca,[n("div",_a,[b(r)])],512),[[m,i(w).show.rangInfo]])])]),n("div",null,[n("span",ya,"День: "+l(i(w).day),1),Ma,n("button",{onClick:e[4]||(e[4]=a=>i(k).dispatch("toNextDay")),class:"btnex"},"Завершение дня.")]),n("p",null,"Прогноз рекрутов на завтра: "+l(i(k).getters.targetAvailableWarriors),1),fa,n("div",xa,[ja,n("p",Pa,l(i(w).messageLog1),1),(t(!0),o(c,null,d(i(w).messageLog2,((a,e)=>(t(),o("p",Ka,l(i(w).messageLog2[e]),1)))),256))]),qa,i(w).isDebug?(t(),o("button",{key:0,onClick:e[5]||(e[5]=a=>i(k).commit("addRep")),class:"btnex"},"+50 rep")):u("",!0),i(w).isDebug?(t(),o("button",{key:1,onClick:e[6]||(e[6]=a=>i(k).commit("addx2Rep")),class:"btnex"},"x2 rep")):u("",!0),i(w).isDebug?(t(),o("button",{key:2,onClick:e[7]||(e[7]=a=>i(k).commit("addRen")),class:"btnex"},"+50 ren")):u("",!0),i(w).isDebug?(t(),o("button",{key:3,onClick:e[8]||(e[8]=a=>i(k).commit("addGold")),class:"btnex"},"x10 gold")):u("",!0),i(w).isDebug?(t(),o("button",{key:4,onClick:e[9]||(e[9]=a=>i(k).commit("addDaemons")),class:"btnex"},"x2 daemons")):u("",!0),La,i(w).isDebug?(t(),o("button",{key:5,onClick:e[10]||(e[10]=a=>i(k).dispatch("showWhatHiden")),class:"btnex"},"showWhatHiden()")):u("",!0),b(F)])}}});const Ra=k({modules:{Entity:{state:()=>({local:"ru",day:1,gold:1120,show:{rangInfo:!1},squadState:{paydayleft:6,morality:50,reputation:0},squad:{smerd:6,dubolom:0,warrior:0,veteran:0,knight:0,hero:0},tohire:0,wa:{smerd:0,dubolom:0,warrior:0,veteran:0,knight:0,hero:0},wpc:{smerd:7,dubolom:12,warrior:35,veteran:100,knight:300,hero:1e3},wp:{smerd:10,dubolom:16,warrior:32,veteran:50,knight:100,hero:700},wdc:{smerd:40,dubolom:16,warrior:7,veteran:3,knight:2,hero:.01},warriorsdie:{smerd:0,dubolom:0,warrior:0,veteran:0,knight:0,hero:0},exp:{smerd:[60,0],dubolom:[200,0],warrior:[400,0],veteran:[1e3,0],knight:[4e3,0],hero:[1e6,0]},expbaseinc:{smerd:[2,3,4,5],dubolom:[2,4,8,12],warrior:[2,6,12,24],veteran:[2,6,12,36],knight:[2,6,12,48],hero:[0,0,0,0]},expreward:0,squad_imp:{smerd:0,dubolom:0,warrior:0,veteran:0,knight:0,hero:0},Kojania:{demonicPresence:30,demonicPresenceList:[{num:200,className:"white-grade",text:"редкие одиночные цели"},{num:1e3,className:"green-grade",text:"редкие малые стаи"},{num:2500,className:"yellow-grade",text:"возможны крупные стаи"},{num:5e3,className:"red-grade",text:"орды демонов"},{num:9e3,className:"black-grade",text:"чудовищные орды демонов"}],prosperity:250,prosperityList:[{num:50,className:"black-grade",text:"пепелище"},{num:200,className:"red-grade",text:"восстановление"},{num:1e3,className:"yellow-grade",text:"укрепление"},{num:2500,className:"green-grade",text:"стабильность"},{num:5e3,className:"white-grade",text:"экспансия"}],reputation:0,repSumm:0,reputationGain:[],reputationList:[{num:108,className:"yellow-grade",text:"нейтральные"},{num:250,className:"green-grade",text:"открытые"},{num:1e3,className:"white-grade",text:"теплые"},{num:5e3,className:"white-grade",text:"дружеские"},{num:1e4,className:"white-grade",text:"союзные"}],goldBonus:1,enemyBonus:1,availableWarriors:1,targetAvailableWarriors:2,baseHireCost:140,hirecost:14},messageLog1:"",messageLog2:[],battleReport:{result:{key:0,text:[]},gold:0,exp:0},info:["Демоны -- крайне опасные существа. Даже слабейший из них, за счет невероятной грубой силы и живучести, требует слаженной работы десятка людей. У них множество подвидов с различными особенностями. Но, как правило, дальнобойное оружие и добротные копья делают свое дело. По возможности лучше использовать ловушки и не допускать сближения.","Тушки демонов пользуются хорошим спросом. Почти каждую часть их тела можно считать стратегическим ресурсом. Кроме съедобного мяса это отличные доспехи из кожи. Вполне боеспособные луки и арбалеты из прочных связок. Невероятно огромный список амуниции из костей. Каждый участник охоты или сражения получает часть прибыли с этих трофеев."],quests:{active:"hire_10_smerd",hire_10_smerd:{goal:"Нанять 10 рекрутов",finishText:"Рекруты набираются опыта в бою и на тренировке. Когда они будут готовы стоит подумать об их продвижении. При продвижении придется заплатить разовое 2х недельное жалование. Но зато бойцы обязуются улучшить снаряжение, что сделает их сильнее уже в следующем бою и мотивирует на новые подвиги.",niceQuestMsgs:["Можно продвигать рекрутов.","Доступны простые контракты."]},found_contract:{goal:"Выполнить контракт.",finishText:"Время от времени будут появляться различные контракты. Их выполнение важно как для Кожании так и для нас. Хотя мы и не обызаны под этим подписываться, без Кожании у нас мало шансов. Заказчик укажет минимальные требования и предпологаемые проблемы... Однако реальность всегда может оказаться намного хуже самых смелых ожиданий. Если мы не хотим потерять все, нам придется быть к этому, по возможности, готовыми.",niceQuestMsgs:["Можно продвигать дуболомов.","Доступны сложные контракты."]},take_3000_gold:{goal:"3000 золота и 500 мощи",finishText:"Местный староста -- солидный господин. Он весьма снисходителен к гостям и готов бесплатно предоставлять некоторый уровень безопасности. Правда, вне центральной крепости, которая с каждым днем становится все более массивной. Благодаря его политике золото в цене даже в такие времена, а мы без проблем можем купить хорошую экипировку для наших воинов.",niceQuestMsgs:["Отдана 1000 золота, отношения улучшились.","Доступен прогноз рекрутов на следующий день.","Доступно резервирование отрядов."]},take_20_warriors:{goal:"20 воинов и 2000 мощи",finishText:"Нужно полностью захватить и обустроить рудные шахты и помочь с остальными ресурсами, расположенными далеко от поселения. Некоторые контракты -- чистое самоубийство, но вместе с тем их стратегическое значение крайне велико, возможно деже жизненно необходимо.",niceQuestMsgs:["Можно продвигать воинов","Доступны безумные контракты."]},take_10_veterans:{goal:"10 ветеранов и 5000 мощи",finishText:"Наша известность работает в обе стороны. В прославленный отряд присоединяется больше людей и этими людьми проще управлять. Нам доверяют самое лучшие оружие и щедро платят за трофеи. Однако лишь совсем ленивый или в конец тупой не заметил бы наши слабые места. Чем дольше мы сидим на одном месте, тем больше внимания в округе мы привлекаем. За стенами это не так заметно. Но к каждому контракту нужно относиться с осторожностью.",niceQuestMsg1:"Можно продвигать ветеранов",niceQuestMsgs:["Можно продвигать ветеранов."]},take_10_knights:{goal:"10 рыцарей и 9000 мощи",finishText:"Туши убитых демонов полны сюрпризов. Металлурги и алхимики делают исключительные открытия и создают невероятные вещи. Конечно, кто-то должен эти туши добыть, как правило ценой своих жизней, а потом кто-то должен с ними как следует поработать. Но в такие времена сам факт прогресса уже вселяет надежду.",niceQuestMsgs:["Можно продвигать рыцарей."]},take_10_heroes:{goal:"10 героев и 40к мощи",finishText:"Победа (нет)",niceQuestMsgs:[""]}},isAvailableContracts:!1,contracts:{common:{isAvailable:!1,generationChance:[12,12],revard:{first:200,loot:20},prosperityChange:6,reputationCnange:8,chancetoLose:[0,10],basePower:50,scaleRange:6},hard:{isAvailable:!1,generationChance:[5,5],revard:{first:600,loot:35},prosperityChange:10,reputationCnange:16,chancetoLose:[0,4],basePower:300,scaleRange:4},madness:{isAvailable:!1,generationChance:[2,2],revard:{first:1800,loot:50},prosperityChange:20,reputationCnange:32,chancetoLose:[0,2],basePower:1e3,scaleRange:3}},contract_list:[],availableContracts:0,contract_is_taken:[0,0,0,0],rangName:{smerd:"Рекрут",dubolom:"Дуболом",warrior:"Воин",veteran:"Ветеран",knight:"Рыцарь",hero:"Герой"},modalError:!1,modalMission:!1,modalContracts:!1,modalErrorText:"",modalMissionText:"",takenContract:{},isDebug:!0}),mutations:{toNextDay(a){a.day++,a.squadState.paydayleft--,a.Kojania.demonicPresence+=.01*a.Kojania.demonicPresence+1},time2Pay(a,e){a.squadState.paydayleft+=7,a.gold-=e},hire(a,e){a.squad.smerd+=e,a.gold-=a.Kojania.hirecost*e,a.Kojania.availableWarriors-=e},hire_reset_helper(a,e){a.Kojania.availableWarriors<e&&(a.tohire=a.Kojania.availableWarriors)},availableWarriors(a){a.Kojania.availableWarriors=Math.floor(a.Kojania.availableWarriors*Math.min(.6*(1+Math.pow(a.Kojania.prosperity,.5)/100),1)+Math.random()*Math.pow(a.Kojania.reputation+10,.7)),a.Kojania.availableWarriors<a.tohire&&(a.tohire=a.Kojania.availableWarriors)},openContractList(a){a.modalContracts=!0},error(a,e){a.modalErrorText=e,a.modalError=!0},addGold(a){a.gold*=10},addRep(a){a.Kojania.reputation+=50,console.log(a.Kojania.reputation)},addRen(a){a.squadState.reputation+=50,console.log(a.squadState.reputation)},addx2Rep(a){a.Kojania.reputation*=2,console.log(a.Kojania.reputation)},addDaemons(a){a.Kojania.demonicPresence*=2,console.log(a.Kojania.demonicPresence)}},actions:{toNextDay({commit:a,state:e,getters:t,dispatch:o}){a("toNextDay"),0==e.squadState.paydayleft&&a("time2Pay",t.payday),a("availableWarriors"),o("checkQuest"),o("generateContracts"),o("contractManager")},checkQuest({commit:a,state:e,getters:t,dispatch:o},n){let s=e.quests,r=e.squad;switch(s.active){case"hire_10_smerd":r.smerd>=10&&(o("showQuestMsg",s),e.wa.smerd=2,e.wa.dubolom=1,e.isAvailableContracts=!0,e.contracts.common.isAvailable=!0,s.active="found_contract",o("generateContract",{str:"common",minPower:50,recPw:80,rlPw:90,e:0,f:0,g:5,h:5}).then((a=>{e.contract_list.push(a)})));break;case"found_contract":n&&(o("showQuestMsg",s),e.wa.dubolom=2,e.wa.warrior=1,e.contracts.hard.isAvailable=!0,s.active="take_3000_gold");break;case"take_3000_gold":e.gold>3e3&&this.power>500&&(e.gold-=1e3,e.Kojania.reputation+=50,o("showQuestMsg",s),s.active="take_20_warriors");break;case"take_20_warriors":r.warrior>=20&&this.power>2e3&&(o("showQuestMsg",s),e.wa.warrior=2,e.wa.veteran=1,e.contracts.madness.isAvailable=!0,s.active="take_10_veterans");break;case"take_10_veterans":r.veteran>=10&&this.power>5e3&&(o("showQuestMsg",s),e.wa.veteran=2,e.wa.knight=1,s.active="take_10_knights");break;case"take_10_knights":r.knight>=10&&this.power>9e3&&(o("showQuestMsg",s),e.wa.knight=2,e.wa.hero=1,s.active="take_10_heroes");break;case"take_10_heroes":r.hero>=10&&this.power>2e4&&o("showQuestMsg",s)}},generateContracts({commit:a,state:e,getters:t,dispatch:o}){let n=e.contracts,s=e.contract_list,r=n.common.generationChance,i=n.common.chancetoLose,l=n.hard.generationChance,c=n.hard.chancetoLose,d=n.madness.generationChance,u=n.madness.chancetoLose;const m=e.Kojania.enemyBonus;if(r[1]/100>Math.random()){let a=Math.round((Math.random()*(n.common.scaleRange-1)+1)*n.common.basePower);const t=Math.round(a*(Math.random()/1.5+1));o("generateContract",{str:"common",minPower:a,recPw:t,rlPw:Math.round(.9*t*(1+Math.sqrt(e.Kojania.demonicPresence)/75)*m),e:i[0],f:i[1],g:n.common.prosperityChange,h:n.common.reputationCnange}).then((a=>{s.push(a)})),r[1]-=100}else r[1]=r[1]+r[0];if(l[1]/100>Math.random()){let a=Math.round((Math.random()*(n.hard.scaleRange-1)+1)*n.hard.basePower);const t=Math.round(a*(Math.random()/1.5+1));o("generateContract",{str:"hard",minPower:a,recPw:t,rlPw:Math.round(.9*t*(1+Math.sqrt(e.Kojania.demonicPresence)/50)*m),e:c[0],f:c[1],g:n.hard.prosperityChange,h:n.hard.reputationCnange}).then((a=>{s.push(a)})),l[1]-=100}else l[1]=l[1]+l[0];if(d[1]/100>Math.random()){let a=Math.round((Math.random()*(n.madness.scaleRange-1)+1)*n.madness.basePower);const t=Math.round(a*(Math.random()/1.5+1));o("generateContract",{str:"madness",minPower:a,recPw:t,rlPw:Math.round(.9*t*(1+Math.sqrt(e.Kojania.demonicPresence)/25)*m),e:u[0],f:u[1],g:n.madness.prosperityChange,h:n.madness.reputationCnange}).then((a=>{s.push(a)})),d[1]-=100}else d[1]=d[1]+d[0]},generateContract:(a,{str:e,minPower:t,recPw:o,rlPw:n,e:s,f:r,g:i,h:l})=>({dif:e,minPower:t,recommendedPower:o,realPower:n,chancetoLose:s,changeChance:r,prosperity:i,reputation:l}),contractManager({state:a,dispatch:e}){let t=a.contract_list;a.availableContracts=0;for(const o in t)a.contracts[t[o].dif].isAvailable&&a.availableContracts++,Math.random()<t[o].chancetoLose/100?(a.isDebug&&e("log2","Кожания теряет процветание "+t[o].dif+" (контракт не выполнен)"),a.Kojania.prosperity-=t[o].prosperity/2,a.Kojania.prosperity<1&&(a.Kojania.prosperity=1),a.contracts[t[o].dif].isAvailable&&a.availableContracts--,t.splice(o,1)):t[o].chancetoLose+=t[o].changeChance},takeContract({state:a},{contract:e,index:t}){switch(a.takenContract=e,e.dif){case"common":a.contract_is_taken[0]=1,a.contract_is_taken[3]=1;break;case"hard":a.contract_is_taken[1]=1,a.contract_is_taken[3]=1;break;case"madness":a.contract_is_taken[2]=1,a.contract_is_taken[3]=1}a.contract_list.splice(t,1),a.modalContracts--},log1({state:a},e){a.messageLog1=e},log2({state:a},e){a.messageLog2.push(e)},showWhatHiden({state:a}){console.log(a.contract_list)},showQuestMsg({dispatch:a},e){a("finishMissionMessage",e[e.active].finishText,e[e.active].niceQuestMsgs)},finishMissionMessage({state:a},e,t){a.modalMissionText=e,a.modalMission=!0,a.niceQuestMsgs=t},hire({commit:a,state:e},t){a("hire_reset_helper",1),e.gold>=e.Kojania.hirecost*t&&e.Kojania.availableWarriors>0?a("hire",t):e.Kojania.availableWarriors>0?a("error","Нужно больше золота."):a("error","Рекруты закончились. Возможно завтра будут новые."),a("hire_reset_helper",1)}},getters:{payday:(a,e)=>{let t=0;for(let o in a.squad)t+=a.squad[o]*a.wpc[o];return t},power:(a,e)=>{let t=0;for(let o in a.squad)t+=a.squad[o]*a.wp[o];return t},totalPeople:(a,e)=>{let t=0;for(let o in a.squad)t+=a.squad[o];return t},demonicPresence:(a,e)=>{for(const t of a.Kojania.demonicPresenceList)if(Math.min(9e3,a.Kojania.demonicPresence)<=t.num)return[t.text,t.className]},kojaniaReputation:(a,e)=>{for(const t of a.Kojania.reputationList)if(Math.min(1e4,a.Kojania.repSumm)<=t.num)return[t.text,t.className]},kojaniaProsperity:(a,e)=>{for(const t of a.Kojania.prosperityList)if(Math.min(5e3,a.Kojania.prosperity)<=t.num)return[t.text,t.className]},targetAvailableWarriors:(a,e)=>Math.floor(a.Kojania.availableWarriors*Math.min(.6*(1+Math.pow(a.Kojania.prosperity,.5)/100),1)+Math.pow(a.Kojania.reputation+10,.7)/2)}}}});w(Na).use(Ra).mount("#app");
