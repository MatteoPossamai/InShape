function personaltrainerr()

{
   var sessoo = document.grassoo.sessoo.options[document.grassoo.sessoo.selectedIndex].value;
   var pesoformaa = eval(document.grassoo.pesoformaa.value);
   var metaabolismo=0;
   var cal=0;
   var risp1 = document.grassoo.etaa.selectedIndex;
   var risp2= document.grassoo.lavoro.selectedIndex;
   var risp3= document.grassoo.sport.selectedIndex;


if (sessoo == "Maschio")
    {
    if (risp1==0) metaabolismo= 15.3 * pesoformaa + 679;
    else if (risp1==1) metaabolismo= 11.6 * pesoformaa + 879; 
    else if (risp1==2) metaabolismo= 11.9 * pesoformaa + 700;
    else if (risp1==3) metaabolismo= 8.4 * pesoformaa + 819;
	}


	if (risp2==0) cal=metaabolismo*1.78;
    else if (risp2==1) cal=metaabolismo*1.78;
	else if (risp2==2) cal=metaabolismo*1.55;
	else if (risp2==3) cal=metaabolismo*1.55;
	else if (risp2==4) cal=metaabolismo*2.10;
	else if (risp2==5) cal=metaabolismo*2.10;
	else if (risp2==6) cal=metaabolismo*1.55;
	else if (risp2==7) cal=metaabolismo*1.78;
	else if (risp2==8) cal=metaabolismo*2.10;
	else if (risp2==9) cal=metaabolismo*1.58;
	
	
	if (risp3==0) cal2=cal;
    else if (risp3==1) cal2= cal + ((1.5*pesoformaa*9.5)/7);
	else if (risp3==2) cal2= cal + ((4*pesoformaa*9.5)/7);
	else if (risp3==3) cal2= cal + ((6*pesoformaa*9.5)/7);
		
	   
if (sessoo == "Femmina")
  
    {	   
    if (risp1==0) metaabolismo= 14.7*pesoformaa+496;
    else if (risp1==1) metaabolismo=8.7*pesoformaa+829;
    else if (risp1==2) metaabolismo=9.2*pesoformaa+688;
    else if (risp1==3) metaabolismo=9.8*pesoformaa+624;	   
	}
		
    if (risp2==0) cal=metaabolismo*1.78;
    else if (risp2==1) cal=metaabolismo*1.78;
	else if (risp2==2) cal=metaabolismo*1.55;
	else if (risp2==3) cal=metaabolismo*1.55;
	else if (risp2==4) cal=metaabolismo*2.10;
	else if (risp2==5) cal=metaabolismo*2.10;
	else if (risp2==6) cal=metaabolismo*1.55;
	else if (risp2==7) cal=metaabolismo*1.78;
	else if (risp2==8) cal=metaabolismo*2.10;
	else if (risp2==9) cal=metaabolismo*1.58;

	if (risp3==0) cal2=cal;
    else if (risp3==1) cal2= cal + ((1.5*pesoformaa*9.5)/7);
	else if (risp3==2) cal2= cal + ((4*pesoformaa*9.5)/7);
	else if (risp3==3) cal2= cal + ((6*pesoformaa*9.5)/7);

document.grassoo.mb.value = metaabolismo;
document.grassoo.calorie.value = cal2;

 }

function vclear()

{
  document.grassoo.mb.value = "";
  document.grassoo.calorie.value = "";
}
