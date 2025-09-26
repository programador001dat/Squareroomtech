Esta é uma aplicação de desenvolvedor FullStack.
A arquitetura desse codigo é um MVC(Model Views Controller);

Aqui você encontra um Servidor Nodejs com framework minimalista Express 5.1
=> Contém três rotas: /home; /login; /robots.txt
 . squareroomtech:5500/  
 . squareroomtech:5500/login Tipo de Cabeçalho HTML
 . squareroomtech:5500/robots.txt Tipo de Cabeçalho TEXTO
 . Não mosque este codigo não contém DNS, funciona apenas localmente.

=> Este codigo faz conexão com o MySQL então ele não vai funcionar na sua maquina nub. 
  . Se você reconfigurar?

Curiosidades:

=> Meu servidor contém um Middleware, para cada GET.
=> Faz a ligação com o Banco de Dados.
=> Renderiza paginas de maneira estática.
  . Um mini Blog sobre o desenvolvedor da squareroomtech
=> Separamos o endereço do codigo pricipal, para segurança da maquina.

=> Dependencias/Tecnologias:
 . Express
 . Dotenv
 . body-parser
 . MySQL

Lembre-se de criar um arquivo .env para rodar o projeto

Lembre-se para versões antigas do MySQL o codigo pode não funcionar

Verifique o metodo de autenticação do usuario no MySQL com:
SELECT user, host, plugin FROM mysql.user WHERE user = 'usuario_teste';

Altere para native com:
ALTER USER 'usuario_teste'@'localhost' IDENTIFIED WITH mysql_native_password BY 'nova_senha';



