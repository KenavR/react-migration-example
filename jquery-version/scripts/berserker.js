var plvl=$("#perkLVL").val(),butch=.2,parry=.35,smash=.5,smashHead=.25,mass=.3,knifeli=32,knifehe=64,knifesta=15,cstl=49,csth=86,cstm=15,kat1=68,kat2=98,pull=70,pulh=145,pulm=528,zwel=85,zweh=195,zwem=63,evil=480,evih=29,evim=90,bcl=63,bch=165,bcm=175,vlad=30;$(function(){plvl=$("#perkLVL").val(),plvl*=.01,cstcalc1=cstl+plvl*cstl,cstcalc2=csth+plvl*csth,cstcalc3=cstm+plvl*cstm,katcalc1=kat1+plvl*kat1,katcalc2=kat2+plvl*kat2,pulcalc1=pull+plvl*pull,pulcalc2=pulh+plvl*pulh,pulcalc3=pulm+plvl*pulm,zweic1=zwel+plvl*zwel,zweic2=zweh+plvl*zweh,zweic3=zwem+plvl*zwem,evi1c=evil+plvl*evil,evihc=evih+plvl*evih,evimc=evim+plvl*evim,bclc=bcl+plvl*bcl,bchc=bch+plvl*bch,bcmc=bcm+plvl*bcm,vladc=vlad+plvl*vlad,cstcalc1=Math.round(cstcalc1),cstcalc2=Math.round(cstcalc2),cstcalc3=Math.round(cstcalc3),katcalc1=Math.round(katcalc1),katcalc2=Math.round(katcalc2),pulcalc1=Math.round(pulcalc1),pulcalc2=Math.round(pulcalc2),pulcalc3=Math.round(pulcalc3),zweic1=Math.round(zweic1),zweic2=Math.round(zweic2),zweic3=Math.round(zweic3),evi1c=Math.round(evi1c),evihc=Math.round(evih),evimc=Math.round(evim),bclc=Math.round(bclc),bchc=Math.round(bchc),bcmc=Math.round(bcmc),vladc=Math.round(vladc),$(".cst1").html(cstcalc1),$(".cst2").html(cstcalc2),$(".cst3").html(cstcalc3),$(".kat1").html(katcalc1),$(".kat2").html(katcalc2),$(".kat3").html(katcalc1),$(".pulv1").html(pulcalc1),$(".pulv2").html(pulcalc2),$(".pulv3").html(pulcalc3),$(".zwei1").html(zweic1),$(".zwei2").html(zweic2),$(".zwei3").html(zweic3),$(".evis1").html(evi1c),$(".evis2").html(evihc),$(".evis3").html(evimc),$(".bc1").html(bclc),$(".bc2").html(bchc),$(".bc3").html(bcmc),$(".ng1").html(vladc),$(".ng2").html(7*vladc)}),$("#perkLVL").on("keyup keydown",function(c){console.log($(this).val()>25),$(this).val()>25&&46!=c.keyCode&&8!=c.keyCode&&(c.preventDefault(),$(this).val(25))}),$("#perkLVL, #chkbutch, #chksmash, #chkmass").on("click change blur focus",function(){$("#chkbutch").is(":checked")&&$("#chksmash").is(":checked")?(plvl=$("#perkLVL").val(),plvl*=.01,cstcalc1=cstl+plvl*cstl+butch*cstl,cstcalc2=csth+plvl*csth+butch*csth+smash*csth,cstcalc3=cstm+plvl*cstm+butch*cstm,katcalc1=kat1+plvl*kat1+butch*kat1,katcalc2=kat2+plvl*kat2+butch*kat2+smash*kat2,pulcalc1=pull+plvl*pull+butch*pull,pulcalc2=pulh+plvl*pulh+butch*pulh+smash*pulh,pulcalc3=pulm+plvl*pulm+butch*pulm+smash*pulm,zweic1=zwel+plvl*zwel+butch*zwel,zweic2=zweh+plvl*zweh+butch*zweh+smash*zweh,zweic3=zwem+plvl*zwem+butch*zwem,evi1c=evil+plvl*evil+butch*evil,evihc=evih+plvl*evih+butch*evih,evimc=evim+plvl*evim+butch*evim,bclc=bcl+plvl*bcl+butch*bcl,bchc=bch+plvl*bch+butch*bch+smash*bch,bcmc=bcm+plvl*bcm+butch*bcm,vladc=vlad+plvl*vlad+butch*vlad,cstcalc1=Math.round(cstcalc1),cstcalc2=Math.round(cstcalc2),cstcalc3=Math.round(cstcalc3),katcalc1=Math.round(katcalc1),katcalc2=Math.round(katcalc2),pulcalc1=Math.round(pulcalc1),pulcalc2=Math.round(pulcalc2),pulcalc3=Math.round(pulcalc3),zweic1=Math.round(zweic1),zweic2=Math.round(zweic2),zweic3=Math.round(zweic3),evi1c=Math.round(evi1c),evihc=Math.round(evihc),evimc=Math.round(evimc),bclc=Math.round(bclc),bchc=Math.round(bchc),bcmc=Math.round(bcmc),vladc=Math.round(vladc),$(".cst1").html(cstcalc1),$(".cst2").html(cstcalc2),$(".cst3").html(cstcalc3),$(".kat1").html(katcalc1),$(".kat2").html(katcalc2),$(".kat3").html(katcalc1),$(".pulv1").html(pulcalc1),$(".pulv2").html(pulcalc2),$(".pulv3").html(pulcalc3),$(".zwei1").html(zweic1),$(".zwei2").html(zweic2),$(".zwei3").html(zweic3),$(".evis1").html(evi1c),$(".evis2").html(evihc),$(".evis3").html(evimc),$(".bc1").html(bclc),$(".bc2").html(bchc),$(".bc3").html(bcmc),$(".ng1").html(vladc),$(".ng2").html(7*vladc)):$("#chkbutch").is(":checked")&&$("#chkmass").is(":checked")?(plvl=$("#perkLVL").val(),plvl*=.01,cstcalc1=cstl+plvl*cstl+butch*cstl+mass*cstl,cstcalc2=csth+plvl*csth+butch*csth,cstcalc3=cstm+plvl*cstm+butch*cstm,katcalc1=kat1+plvl*kat1+butch*kat1+mass*kat1,katcalc2=kat2+plvl*kat2+butch*kat2,pulcalc1=pull+plvl*pull+butch*pull+mass*pull,pulcalc2=pulh+plvl*pulh+butch*pulh,pulcalc3=pulm+plvl*pulm+butch*pulm,zweic1=zwel+plvl*zwel+butch*zwel+mass*zwel,zweic2=zweh+plvl*zweh+butch*zweh,zweic3=zwem+plvl*zwem+butch*zwem,evi1c=evil+plvl*evil+butch*evil,evihc=evih+plvl*evih+butch*evih,evimc=evim+plvl*evim+butch*evim,bclc=bcl+plvl*bcl+butch*bcl+mass*bcl,bchc=bch+plvl*bch+butch*bch,bcmc=bcm+plvl*bcm+butch*bcm,vladc=vlad+plvl*vlad+butch*vlad,cstcalc1=Math.round(cstcalc1),cstcalc2=Math.round(cstcalc2),cstcalc3=Math.round(cstcalc3),katcalc1=Math.round(katcalc1),katcalc2=Math.round(katcalc2),pulcalc1=Math.round(pulcalc1),pulcalc2=Math.round(pulcalc2),pulcalc3=Math.round(pulcalc3),zweic1=Math.round(zweic1),zweic2=Math.round(zweic2),zweic3=Math.round(zweic3),evi1c=Math.round(evi1c),evihc=Math.round(evihc),evimc=Math.round(evimc),bclc=Math.round(bclc),bchc=Math.round(bchc),bcmc=Math.round(bcmc),vladc=Math.round(vladc),$(".cst1").html(cstcalc1),$(".cst2").html(cstcalc2),$(".cst3").html(cstcalc3),$(".kat1").html(katcalc1),$(".kat2").html(katcalc2),$(".kat3").html(katcalc1),$(".pulv1").html(pulcalc1),$(".pulv2").html(pulcalc2),$(".pulv3").html(pulcalc3),$(".zwei1").html(zweic1),$(".zwei2").html(zweic2),$(".zwei3").html(zweic3),$(".evis1").html(evi1c),$(".evis2").html(evihc),$(".evis3").html(evimc),$(".bc1").html(bclc),$(".bc2").html(bchc),$(".bc3").html(bcmc),$(".ng1").html(vladc),$(".ng2").html(7*vladc)):$("#chkbutch").is(":checked")?(plvl=$("#perkLVL").val(),plvl*=.01,cstcalc1=cstl+plvl*cstl+butch*cstl,cstcalc2=csth+plvl*csth+butch*csth,cstcalc3=cstm+plvl*cstm+butch*cstm,katcalc1=kat1+plvl*kat1+butch*kat1,katcalc2=kat2+plvl*kat2+butch*kat2,pulcalc1=pull+plvl*pull+butch*pull,pulcalc2=pulh+plvl*pulh+butch*pulh,pulcalc3=pulm+plvl*pulm+butch*pulm,zweic1=zwel+plvl*zwel+butch*zwel,zweic2=zweh+plvl*zweh+butch*zweh,zweic3=zwem+plvl*zwem+butch*zwem,evi1c=evil+plvl*evil+butch*evil,evihc=evih+plvl*evih+butch*evih,evimc=evim+plvl*evim+butch*evim,bclc=bcl+plvl*bcl+butch*bcl,bchc=bch+plvl*bch+butch*bch,bcmc=bcm+plvl*bcm+butch*bcm,vladc=vlad+plvl*vlad+butch*vlad,console.log(evi1c),console.log(evihc),console.log(evimc),cstcalc1=Math.round(cstcalc1),cstcalc2=Math.round(cstcalc2),cstcalc3=Math.round(cstcalc3),katcalc1=Math.round(katcalc1),katcalc2=Math.round(katcalc2),pulcalc1=Math.round(pulcalc1),pulcalc2=Math.round(pulcalc2),pulcalc3=Math.round(pulcalc3),zweic1=Math.round(zweic1),zweic2=Math.round(zweic2),zweic3=Math.round(zweic3),evi1c=Math.round(evi1c),evihc=Math.round(evihc),evimc=Math.round(evimc),bclc=Math.round(bclc),bchc=Math.round(bchc),bcmc=Math.round(bcmc),vladc=Math.round(vladc),$(".cst1").html(cstcalc1),$(".cst2").html(cstcalc2),$(".cst3").html(cstcalc3),$(".kat1").html(katcalc1),$(".kat2").html(katcalc2),$(".kat3").html(katcalc1),$(".pulv1").html(pulcalc1),$(".pulv2").html(pulcalc2),$(".pulv3").html(pulcalc3),$(".zwei1").html(zweic1),$(".zwei2").html(zweic2),$(".zwei3").html(zweic3),$(".evis1").html(evi1c),$(".evis2").html(evihc),$(".evis3").html(evimc),$(".bc1").html(bclc),$(".bc2").html(bchc),$(".bc3").html(bcmc),$(".ng1").html(vladc),$(".ng2").html(7*vladc)):$("#chkmass").is(":checked")?(plvl=$("#perkLVL").val(),plvl*=.01,cstcalc1=cstl+plvl*cstl+mass*cstl,cstcalc2=csth+plvl*csth,cstcalc3=cstm+plvl*cstm,katcalc1=kat1+plvl*kat1+mass*kat1,katcalc2=kat2+plvl*kat2,pulcalc1=pull+plvl*pull+mass*pull,pulcalc2=pulh+plvl*pulh,pulcalc3=pulm+plvl*pulm,zweic1=zwel+plvl*zwel+mass*zwel,zweic2=zweh+plvl*zweh,zweic3=zwem+plvl*zwem,evi1c=evil+plvl*evil,evihc=evih+plvl*evih,evimc=evim+plvl*evim,bclc=bcl+plvl*bcl+mass*bcl,bchc=bch+plvl*bch,bcmc=bcm+plvl*bcm,vladc=vlad+plvl*vlad,cstcalc1=Math.round(cstcalc1),cstcalc2=Math.round(cstcalc2),cstcalc3=Math.round(cstcalc3),katcalc1=Math.round(katcalc1),katcalc2=Math.round(katcalc2),pulcalc1=Math.round(pulcalc1),pulcalc2=Math.round(pulcalc2),pulcalc3=Math.round(pulcalc3),zweic1=Math.round(zweic1),zweic2=Math.round(zweic2),zweic3=Math.round(zweic3),evi1c=Math.round(evi1c),evihc=Math.round(evihc),evimc=Math.round(evimc),bclc=Math.round(bclc),bchc=Math.round(bchc),bcmc=Math.round(bcmc),vladc=Math.round(vladc),$(".cst1").html(cstcalc1),$(".cst2").html(cstcalc2),$(".cst3").html(cstcalc3),$(".kat1").html(katcalc1),$(".kat2").html(katcalc2),$(".kat3").html(katcalc1),$(".pulv1").html(pulcalc1),$(".pulv2").html(pulcalc2),$(".pulv3").html(pulcalc3),$(".zwei1").html(zweic1),$(".zwei2").html(zweic2),$(".zwei3").html(zweic3),$(".evis1").html(evi1c),$(".evis2").html(evihc),$(".evis3").html(evimc),$(".bc1").html(bclc),$(".bc2").html(bchc),$(".bc3").html(bcmc),$(".ng1").html(vladc),$(".ng2").html(7*vladc)):$("#chksmash").is(":checked")?(plvl=$("#perkLVL").val(),plvl*=.01,cstcalc1=cstl+plvl*cstl,cstcalc2=csth+plvl*csth+smash*csth,cstcalc3=cstm+plvl*cstm,katcalc1=kat1+plvl*kat1,katcalc2=kat2+plvl*kat2+smash*kat2,pulcalc1=pull+plvl*pull,pulcalc2=pulh+plvl*pulh+smash*pulh,pulcalc3=pulm+plvl*pulm,zweic1=zwel+plvl*zwel,zweic2=zweh+plvl*zweh+smash*zweh,zweic3=zwem+plvl*zwem,evi1c=evil+plvl*evil,evihc=evih+plvl*evih,evihs=evih+plvl*evih,evimc=evim+plvl*evim,bclc=bcl+plvl*bcl,bchc=bch+plvl*bch+smash*bch,bcmc=bcm+plvl*bcm,vladc=vlad+plvl*vlad,cstcalc1=Math.round(cstcalc1),cstcalc2=Math.round(cstcalc2),cstcalc3=Math.round(cstcalc3),katcalc1=Math.round(katcalc1),katcalc2=Math.round(katcalc2),pulcalc1=Math.round(pulcalc1),pulcalc2=Math.round(pulcalc2),pulcalc3=Math.round(pulcalc3),zweic1=Math.round(zweic1),zweic2=Math.round(zweic2),zweic3=Math.round(zweic3),evi1c=Math.round(evi1c),evihc=Math.round(evihc),evimc=Math.round(evimc),bclc=Math.round(bclc),bchc=Math.round(bchc),bcmc=Math.round(bcmc),vladc=Math.round(vladc),$(".cst1").html(cstcalc1),$(".cst2").html(cstcalc2),$(".cst3").html(cstcalc3),$(".kat1").html(katcalc1),$(".kat2").html(katcalc2),$(".kat3").html(katcalc1),$(".pulv1").html(pulcalc1),$(".pulv2").html(pulcalc2),$(".pulv3").html(pulcalc3),$(".zwei1").html(zweic1),$(".zwei2").html(zweic2),$(".zwei3").html(zweic3),$(".evis1").html(evi1c),$(".evis2").html(evihc),$(".evis3").html(evimc),$(".bc1").html(bclc),$(".bc2").html(bchc),$(".bc3").html(bcmc),$(".ng1").html(vladc),$(".ng2").html(7*vladc)):(plvl=$("#perkLVL").val(),plvl*=.01,console.log(evimc),cstcalc1=cstl+plvl*cstl,cstcalc2=csth+plvl*csth,cstcalc3=cstm+plvl*cstm,katcalc1=kat1+plvl*kat1,katcalc2=kat2+plvl*kat2,pulcalc1=pull+plvl*pull,pulcalc2=pulh+plvl*pulh,pulcalc3=pulm+plvl*pulm,zweic1=zwel+plvl*zwel,zweic2=zweh+plvl*zweh,zweic3=zwem+plvl*zwem,evi1c=evil+plvl*evil,evihc=evih+plvl*evih,evimc=evim+plvl*evim,bclc=bcl+plvl*bcl,bchc=bch+plvl*bch,bcmc=bcm+plvl*bcm,vladc=vlad+plvl*vlad,cstcalc1=Math.round(cstcalc1),cstcalc2=Math.round(cstcalc2),cstcalc3=Math.round(cstcalc3),katcalc1=Math.round(katcalc1),katcalc2=Math.round(katcalc2),pulcalc1=Math.round(pulcalc1),pulcalc2=Math.round(pulcalc2),pulcalc3=Math.round(pulcalc3),zweic1=Math.round(zweic1),zweic2=Math.round(zweic2),zweic3=Math.round(zweic3),evi1c=Math.round(evi1c),evihc=Math.round(evihc),evimc=Math.round(evimc),bclc=Math.round(bclc),bchc=Math.round(bchc),bcmc=Math.round(bcmc),vladc=Math.round(vladc),$(".cst1").html(cstcalc1),$(".cst2").html(cstcalc2),$(".cst3").html(cstcalc3),$(".kat1").html(katcalc1),$(".kat2").html(katcalc2),$(".kat3").html(katcalc1),$(".pulv1").html(pulcalc1),$(".pulv2").html(pulcalc2),$(".pulv3").html(pulcalc3),$(".zwei1").html(zweic1),$(".zwei2").html(zweic2),$(".zwei3").html(zweic3),$(".evis1").html(evi1c),$(".evis2").html(evihc),$(".evis3").html(evimc),$(".bc1").html(bclc),$(".bc2").html(bchc),$(".bc3").html(bcmc),$(".ng1").html(vladc),$(".ng2").html(7*vladc))});