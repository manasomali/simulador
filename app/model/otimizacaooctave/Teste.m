vf=1;%Inicializa variavel vf=1.
is=gr'*s;% is indica o valor m�ximo de redu��o de fluxo que podera ser requerido atraves das eolicas.

if(is<FE) %somente entrar� no if, se valores de gera��es n�o s�o suficiente para dimunir o fluxo ao valor adequado
  vf=0;% vf=0, indica que o codigo n�o vair entra no while, ou seja, n�o executa linprog.
  ct=gr;% ct � corte nas usinas, nesse caso igual a gera��o.
  LG=[0;0;0;0;0];%Nesse caso os limites de gera��o s�o zeros.
  csvwrite('limiteposcorte.csv',LG);
  hgt=FE-is;% o hgt indica o fluxo remanescente, ap�s zeros todas as usinas.
  csvwrite('cortenasusinas.csv',hgt);
  %formatSpec = 'N�o foi poss�vel reduzir o fluxo necess�rio por falta de gera��o, o fluxo remanescente �  %4.2f MW \n';
  %fprintf(formatSpec,hgt)
end