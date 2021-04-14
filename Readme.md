# Convert Md template to PDF file API

# Description
    Simple API to convert markdown tamplate to PDF file
# Installation
You should install:
   - Nodejs

# Get started
Backend:
```Sh
$ npm install
$ npm start
```

Unit tests:
```Sh
$ npm test
```
# Documentation
- Post 'localhost:8000/api/v1/documents/conver' + Body {x-www-form-urlencoded , content: 'your md template'} =>
    PDF of your template