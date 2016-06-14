# Music Online App

Spring Boot with Angular2, TypeScript, Sass, Gradle, and Gulp.

## Acerca

This project uses restful applications with spring boot and Angular2.

Angular with es6 support.
Unit tests with Jasmine.

## Pre-Requisitos

1. Java JDK 8
```bash
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:webupd8team/java
```
2. Gradle
```bash
sudo add-apt-repository ppa:cwchien/gradle
```
Al terminar de agregar repositorios, tienen que actualizar para poder instalar.
```bash
sudo apt-get update
```

## Instalación
1. Java JDK 8
```bash
sudo apt-get install openjdk-8-jdk
```
2. Gradle
```bash
sudo apt-get install gradle-2.9
```
3. Postgresql
```bash
sudo apt-get install postgresql-9.3
sudo apt-get install pgadmin3 (opcional)
```
4. Python 2.7.x
- Probablemente ya lo tengan instalado, sino Googleen.


## Build & Run
Configurar Postgres :
* `$ sudo psql -U postgres`
* `ALTER USER postgres PASSWORD 'newpassword';`
Crear una nueva base de datos
* `CREATE DATABASE music_online;`
Clonar Repositorio
* `$ git clone https://github.com/ework/is2-2016-1.git MusicPlayer`
Build Project, demora un poco pero les debe salir BUILD SUCCESSFUL
* `$ sudo gradle npminstall`
Cambiar el nombre de la base de datos en el archivo src/main/resources/application.properties por el nombre que le pusimos a nuestra base de datos `spring.datasource.url=jdbc:postgresql://localhost:5432/music_online`
Y cambien el password por el que colocaron, o el que ya tienen de Postgres `spring.datasource.password=supassword`
Ejecitar Servidor
* `$ sudo gradle clean build` (Opcional)
* `$ sudo gradle bootRun`

* Luego en el navegador que usen pongan`localhost:8080` y ya deberian ver la página

## Further reading

[wiki](https://github.com/hjneyra/is2-2016-1/wiki)

## Contribute

if you have any input, or contributions, please share!

## License
[MIT](/LICENSE)
