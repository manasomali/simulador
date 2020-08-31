vf=1;%Inicializa variavel vf=1.
is=gr'*s;% is indica o valor máximo de redução de fluxo que podera ser requerido atraves das eolicas.

if(is<FE) %somente entrará no if, se valores de gerações não são suficiente para dimunir o fluxo ao valor adequado
  vf=0;% vf=0, indica que o codigo não vair entra no while, ou seja, não executa linprog.
  ct=gr;% ct é corte nas usinas, nesse caso igual a geração.
  LG=[0;0;0;0;0];%Nesse caso os limites de geração são zeros.
  csvwrite('limiteposcorte.csv',LG);
  hgt=FE-is;% o hgt indica o fluxo remanescente, após zeros todas as usinas.
  csvwrite('cortenasusinas.csv',hgt);
  %formatSpec = 'Não foi possível reduzir o fluxo necessário por falta de geração, o fluxo remanescente é  %4.2f MW \n';
  %fprintf(formatSpec,hgt)
end