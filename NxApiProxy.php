{
    "title": "ErrorException",
    "type": "ErrorException",
    "code": 500,
    "message": "Undefined variable: apiKey",
    "file": "/var/www/app/Controllers/proxyController.php",
    "line": 109,
    "trace": [
        {
            "file": "/var/www/app/Controllers/proxyController.php",
            "line": 109,
            "function": "errorHandler",
            "class": "CodeIgniter\\Debug\\Exceptions",
            "type": "->"
        },
        {
            "file": "/var/www/system/CodeIgniter.php",
            "line": 918,
            "function": "php",
            "class": "App\\Controllers\\proxyController",
            "type": "->"
        },
        {
            "file": "/var/www/system/CodeIgniter.php",
            "line": 404,
            "function": "runController",
            "class": "CodeIgniter\\CodeIgniter",
            "type": "->"
        },
        {
            "file": "/var/www/system/CodeIgniter.php",
            "line": 312,
            "function": "handleRequest",
            "class": "CodeIgniter\\CodeIgniter",
            "type": "->"
        },
        {
            "file": "/var/www/public/index.php",
            "line": 82,
            "function": "run",
            "class": "CodeIgniter\\CodeIgniter",
            "type": "->"
        }
    ]
}