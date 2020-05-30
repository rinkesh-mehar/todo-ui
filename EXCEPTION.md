## Exception
1. `Access to xmlhttprequest at 'http://localhost:8080/hello-world/path-variable/rinkesh'from origin 'http://localhost:4200' has been blocked by CORS policy: No 'access-control-allow-origin''`
This exception accurred during implementation of spring security and not frontend Http header implementation
2. `Access to xmlhttprequest at 'http://localhost:8080/hello-world/path-variable has been blocked by CORS policy: response to preflight request doesn't pass access control check: it does not have http ok status'`
This exception accurred because of implemtation of Http header in front end and spring security in bank end but not implemented spring security configuration (WebSecurityConfigurerAdapter)
