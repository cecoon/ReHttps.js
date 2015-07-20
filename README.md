# ReHttps.js - a client site approach to enforce a https connection.

ReHttps.js is completely standalone and only  562 Bytes (337 B (gzip)) of size. 
<br/>
Soon as ReHttps.js is loaded within a HTTP page it will test if the current page supports https. If the page does it will redirect the user to the encrypted page.
<br/>

##warning
The only purpose of ReHttps.js is to increase the amount of https-traffic. If you are doing stuff that needs to be encrypted, use its <b>highly recommended</b> to use an server site approach (reverse-proxy etc.)

##usage
Simply load the script. Thats it.

If you are a go-getter, you may also just do that:
```html
<script src="https://cdn.rawgit.com/cecoon/ReHttps.js/master/release/ReHttps.min.js"></script>
```
