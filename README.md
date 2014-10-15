upload
======

upload files to server

##使用知识点：
###files属性
在支持该属性的浏览器中，上传文件控件的files属性是一个FileList对象，存储着上传文件的信息。

###FormData：
将表单数据封装后进行异步通信。它将Content-Type设置为multipart/form-data;

###formidable
在集成了formidable的express不用再安装formidable。
此框架用于解析POST请求中的文件。如可将其以流的方式呈现在指定的目录中。

###fs
fs用于文件操作，此处主要用了fs做文件的流格式到常规文件的转换。


