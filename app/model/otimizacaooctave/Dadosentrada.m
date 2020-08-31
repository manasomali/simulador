C = csvread('flag.csv');
flag= C(1,1);%0 marmeleiro participaou igualmente as outras usinas
flag1= C(2,1);%1 proporcional a capacidade instalada ou 0 para proporcional a geracao
D = csvread('fluxonalinha.csv');
fLX= D(1,1);%fluxo na linha 525kV Povo Novo/ Nova Santa Rita
E = csvread('limitedofluxonalinha.csv');
FE=fLX-E;
gr=[0;0;0;0;0];
cu=[0;0;0;0;0];
A = csvread('geracaoreal.csv');
gr=[A(1,1);A(2,1);A(3,1);A(4,1);A(5,1)];
%gr=[CMRO2  CSPVA  CQ138  CQ69   CLIV2]; 
ub=[gr(1);gr(2);gr(3);gr(4);gr(5);1000;1000;1000;1000;1000];%restricao de geracao
B = csvread('capacidadeinstalada.csv'); 
if(flag1==1)
  cu=[B(1,1);B(2,1);B(3,1);B(4,1);B(5,1)];
  %cu=[CMRO2 CSPVA  CQ138  CQ69   CLIV2]; 
end
%marmeleiro va=0;
if(flag==1)
  va=0;
else
  va=1;
end
%calculo da proporcinalidade por capacidade instala e geracao
Tcap=[va; 1; 1; 1;1];
if(flag1==1)        
  somadorfixo= (Tcap(1)*cu(1)+Tcap(2)*cu(2)+Tcap(3)*cu(3)+Tcap(4)*cu(4)+Tcap(5)*cu(5));
  CapMRO2=cu(1)/somadorfixo;
  CapCSVP= cu(2)/somadorfixo;
  CapCQ138= cu(3)/somadorfixo;
  CapCQ69=cu(4)/somadorfixo;
  CapCLV= cu(5)/somadorfixo;
else
  somadorfixo= (Tcap(1)*gr(1)+gr(2)+gr(3)+gr(4)+gr(5));
  CapMRO2=gr(1)/somadorfixo;
  CapCSVP= gr(2)/somadorfixo;
  CapCQ138= gr(3)/somadorfixo;
  CapCQ69=gr(4)/somadorfixo;
  CapCLV= gr(5)/somadorfixo;    
end     
A=[0.7*va/CapMRO2 0 0 0 0 1 0 0 0 0; 0.7*flag 0.7/CapCSVP 0 0 0 0 1 0 0 0; 0.7*flag 0 0.6/CapCQ138 0 0 0 0 1 0 0; 0.7*flag 0 0 0.58/CapCQ69 0 0 0 0 1 0; 0.7*flag 0 0 0 0.21/CapCLV 0 0 0 0 1];
b=[FE*va;FE;FE;FE;FE];
lb=[0;0;0;0;0;0;0;0;0;0];
f=[va;1;1;1;1;1000;1000;1000;1000;1000];
ct=[0;0;0;0;0];
ctype="SSSSS";
vartype="CCCCCCCCCC";