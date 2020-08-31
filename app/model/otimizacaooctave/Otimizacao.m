clc;
clear all;

Dadosentrada;
Dadosfixos;
Teste;% teste se geracao teria corte suficiente para reduzir o fluxo ao limite requerido

fr=0;
while(vf>0)
  [gc, fmin, errnum, extra] =glpk(f,A,b,lb,ub,ctype,vartype,1);
  fr=1;       
  Atualizacoes;     
end

if(fr==1)
  LG=gr-ct;
end
%Caso corte de marmeleiro ser suficiente, ajustar limites das demais usinas para a capacidade instalada

rt=ct'*[0; 1; 1; 1; 1];
if((rt<0.001)&&(gr(1)>ct(1)))
    if(flag1==0)
      cu=[B(1,1) B(2,1) B(3,1) B(4,1) B(5,1)];
     %cu=[CMRO2  CSPVA  CQ138  CQ69   CLIV2];
    end
    LG=[(gr(1)-ct(1));cu(2);cu(3);cu(4);cu(5)];
    if(flag==0)%tendo as outras usinas zeradas, marmeleiro mesmo parcitipando igualmente consegue suprir o corte
      LG=[(gr(1)-ct(1));gr(2);gr(3);gr(4);gr(5)];
    end  
end

if(is>=FE)
  csvwrite('cortenasusinas.csv',ct); %Escreve os valores de corte de cada usina
  csvwrite('limiteposcorte.csv',LG); %Escreve os valores de limite de geracao de cada usina
  %formatSpec = 'CMRO2 - Corte: %5.2f MW e Limite: %5.2f MW\n';
  %fprintf(formatSpec,ct(1),LG(1))
  %formatSpec = 'CSVPA - Corte %4.2f MW e Limite: %5.2f MW\n';
  %fprintf(formatSpec,ct(2),LG(2))
  %formatSpec = 'CQ138 - Corte: %4.2f MW e Limite: %5.2f MW\n';
  %fprintf(formatSpec,ct(3),LG(3))
  %formatSpec = 'CQ69 - Corte: %4.2f MW e Limite: %5.2f MW\n';
  %fprintf(formatSpec,ct(4),LG(4))
  %formatSpec = 'CLIV2 - Corte: %4.2f MW e Limite: %5.2f MW\n';
  %fprintf(formatSpec,ct(5),LG(5))
ct
LG
end
