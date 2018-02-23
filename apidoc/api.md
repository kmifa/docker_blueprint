# GET /message
+ Response 200 (text/plain)

        api.md

aglio -i api.md -s -h 0.0.0.0
aglio -i api.md -o index.html
api-mock ./api.md --port 3000