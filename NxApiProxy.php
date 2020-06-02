Mail was not sent. Body was :
<br /> Error : Array
(
    [type] => 4
    [message] => syntax error, unexpected ')'
    [file] => /var/www/application/controllers/api/automatedReportController.php
    [line] => 335
)

debug backtrace : 
Array
(
    [file] => /var/www/system/codeigniter/Common.php
    [line] => 423
    [function] => load_class
)

Array
(
    [file] => /var/www/application/libraries/NexaClasses/ApiSectionInfo.php
    [line] => 27
    [function] => _exception_handler
)

Array
(
    [file] => /var/www/application/libraries/NexaClasses/ApiProxy.php
    [line] => 634
    [function] => __construct
    [class] => ApiSectionInfo
    [type] => ->
)

Array
(
    [file] => /var/www/application/controllers/proxyController.php
    [line] => 81
    [function] => GeneratePhpProxy
    [class] => ApiProxy
    [type] => ::
)

Array
(
    [function] => php
    [class] => proxyController
    [type] => ->
)

Array
(
    [file] => /var/www/system/codeigniter/CodeIgniter.php
    [line] => 236
    [function] => call_user_func_array
)

Array
(
    [file] => /var/www/index.php
    [line] => 191
    [function] => require_once
)

SERVER : Array
(
    [REDIRECT_STATUS] => 200
    [HTTP_HOST] => nx-api.local
    [HTTP_CONNECTION] => close
    [HTTP_X_REAL_IP] => 172.18.0.1
    [HTTP_X_FORWARDED_FOR] => 172.18.0.1
    [HTTP_X_FORWARDED_PROTO] => http
    [HTTP_X_FORWARDED_SSL] => off
    [HTTP_X_FORWARDED_PORT] => 80
    [HTTP_USER_AGENT] => curl/7.70.0
    [HTTP_ACCEPT] => */*
    [PATH] => /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
    [SERVER_SIGNATURE] => <address>Apache/2.4.25 (Debian) Server at nx-api.local Port 80</address>

    [SERVER_SOFTWARE] => Apache/2.4.25 (Debian)
    [SERVER_NAME] => nx-api.local
    [SERVER_ADDR] => 172.18.0.21
    [SERVER_PORT] => 80
    [REMOTE_ADDR] => 172.18.0.10
    [DOCUMENT_ROOT] => /var/www
    [REQUEST_SCHEME] => http
    [CONTEXT_PREFIX] => 
    [CONTEXT_DOCUMENT_ROOT] => /var/www
    [SERVER_ADMIN] => webmaster@localhost
    [SCRIPT_FILENAME] => /var/www/index.php
    [REMOTE_PORT] => 33342
    [REDIRECT_URL] => /proxy/php/module
    [REDIRECT_QUERY_STRING] => /proxy/php/module
    [GATEWAY_INTERFACE] => CGI/1.1
    [SERVER_PROTOCOL] => HTTP/1.1
    [REQUEST_METHOD] => GET
    [QUERY_STRING] => /proxy/php/module
    [REQUEST_URI] => /proxy/php/module
    [SCRIPT_NAME] => /index.php
    [PHP_SELF] => /index.php
    [REQUEST_TIME_FLOAT] => 1591109724.666
    [REQUEST_TIME] => 1591109724
)

GET : Array
(
    [/proxy/php/module] => 
)

