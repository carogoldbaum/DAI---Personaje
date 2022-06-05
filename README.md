# Documentación para correr el trabajo

1. Clonar o descargar el ZIP del repositorio en Visual Studio Code.
2. Descargar NodeJS.
3. Una vez descargado esto, ejecutar el comando “npm i” en la terminal de Visual Studio Code dentro de la carpeta del proyecto.
4. Crear un archivo llamado ".env" y copiar lo que está en el comentario de la entrega.
5. Escribir en el buscador de Windows "Administración de equipos".
6. Luego hacer el siguiente camino: Administrador de configuración de SQL Server --> Configuración de red de SQL Server (Hay 5 opciones, elegir la cuarta) --> 
Protocolos de SQLEXPRESS --> TCP/IP (Dar click derecho y 
habilitarlo).
7. Dentro de Administración de Equipos, ir a "Servicios".
8. Dar un click izquierdo a cualquier opción y escribir "SQL".
9. Una vez hecho esto, hay que entrar en el protocolo que se cambió anteriormente y dar en "Reiniciar".
10. Más abajo, ir a "SQL Server Browser" e ir a "Propiedades".
11. La opción va a estar en automático, hay que ponerlo en manual y, una vez hecho esto, iniciar el servicio.
12. Volver al buscador de Windows y abrir "Microsoft SQL Server Management Studio 18".
13. Conectarse a SQL Server y crear la base de datos con el nombre "DAI-Personaje".
14. Tocar el botón "New query" y copiar lo que hay dentro del archivo "script.sql" en SQL Server y ejecutarlo.
15. Escribir en la terminal de Visual Studio Code el comando "npm start".
16. Abrir Postman y copiar el Token generado aleatoriamente que aparece en la terminal.
17. Creamos una nueva Request y en "Authorization" elegimos la opción "Bearer Token" y pegamos lo que había sido copiado anteriormente.
