## Controllers

+ Nest built on top of Fasty or Express default
+ Subdomain routing
+ Query
+ Param
+ Body
+ using Res or dafult behavior of Nest. it can combine "passthrough"

![alt text](image.png)


### Providers: is a Instance of Service

+ Contructor inject cause problem when has child class -> use Property inject instead
+ Provider registortation: {import, controllers, **providers**, export}


### Modules
+ App has **Root Module** -> module graph

``` js
    {
        providers: "instance service class will be resolve in current module",
        controllers: "instance controller",
        imports: "the list of **other module** that **providers** must be **export** of them is need in current module",
        exports: "the providers of current available for othters. I want other modules that import this module to use this provider. (same like public API)". 
    }
```

+ Feature Module
+ Module re-export: export the imported module
+ Global module: @Global(). from now dont need to import this module
+ Dynamic module: resolve by current options, overide defaut decorator @Module({})


### Middlewares 

+ before routing, req res next()
+ thứ tự chạy khác so với .NET
+ can apply for route, exlude routes, for method (.NET apply full)
+ Middleware consumer: manage middleware chain. or app.user({{middlware}})
+ function middleware, class middleware
![alt text](image-1.png)

