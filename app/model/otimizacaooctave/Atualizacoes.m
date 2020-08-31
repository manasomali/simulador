% Calculo do fluxo remanescente no linha
vf=[gc(6);gc(7);gc(8);gc(9);gc(10)]'*[1;1;1;1;1];
cgg= [gc(1);gc(2);gc(3);gc(4);gc(5)]'*s;
ct=ct+[gc(1);gc(2);gc(3);gc(4);gc(5)];
b=b-cgg;

contador=1;
while(contador<6)
  if(b(contador)<0.1)
    b(contador)=0;
  end
  contador=contador+1;
end
in=0;

if(vf>0.1)
  contador=6;
  while(contador<11)
    if(gc(contador)>0.1)
      b(contador-5)=0;
      Tcap(contador-5)=0;
    end
    contador=contador+1;
  end
in=1;
else   
  vf=0;
end

contador=1;
while(contador<6)
  ub(contador)=ub(contador)-gc(contador);
  contador=contador+1;
end
if(in==1)% Recalculo da capacidade instalada
  somadorfixo= (Tcap(1)*cu(1)+Tcap(2)*cu(2)+Tcap(3)*cu(3)+Tcap(4)*cu(4)+Tcap(5)*cu(5));
  CapMRO2=cu(1)/somadorfixo;
  CapCSVP= cu(2)/somadorfixo;
  CapCQ138= cu(3)/somadorfixo;
  CapCQ69=cu(4)/somadorfixo;
  CapCLV= cu(5)/somadorfixo;
end              
A=[0.7*va/CapMRO2 0 0 0 0 1 0 0 0 0; 0.7*flag 0.7/CapCSVP 0 0 0 0 1 0 0 0; 0.7*flag 0 0.6/CapCQ138 0 0 0 0 1 0 0; 0.7*flag 0 0 0.58/CapCQ69 0 0 0 0 1 0; 0.7*flag 0 0 0 0.21/CapCLV 0 0 0 0 1];