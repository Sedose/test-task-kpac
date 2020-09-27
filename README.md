Simple CRUD application.
To run the app.
  1. `mvn clean package`.
  2. Execute scripts from `/sql/` in mysql db client console.
  3. Move `/target/app.war` to Tomcat 9 `/webapps` dir.
  4. Run Tomcat 9.
  5. Start your work by navigating to http://`tomcat_host_ip`:`tomcat_port`/app/kpacs.
  
Useful URLs:
  a) http://`tomcat_host_ip`:`tomcat_port`/app/kpacs
  b) http://`tomcat_host_ip`:`tomcat_port`/app/sets
