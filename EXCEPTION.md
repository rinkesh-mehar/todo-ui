## Exception
1. `Access to xmlhttprequest at 'http://localhost:8080/hello-world/path-variable/rinkesh'from origin 'http://localhost:4200' has been blocked by CORS policy: No 'access-control-allow-origin''`<br/>
This exception occurred during the implementation of spring security and not frontend Http header implementation
2. `Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable has been blocked by CORS policy: Response to preflight request doesn't pass access control check: it does not have HTTP ok status'`<br/>
This exception occurred because of implementation of Http header in front end and spring security in bank end but not implemented spring security configuration (WebSecurityConfigurerAdapter)
3. `Headers - General - Request Method: **Option**`
**Option Request**<br/> 
Whenever we send an authorization request of username and password. This option method is used to send before actual HTTP request to check right permission 
