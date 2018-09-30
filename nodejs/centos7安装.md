# 可以按照官网的方式来安装[Node.js官网安装方式](https://nodejs.org/en/download/package-manager/#enterprise-linux-and-fedora)

要有下载安装权限

# 源码安装

参照[Node.js官网安装方式](https://github.com/nodejs/node/blob/master/BUILDING.md#building-nodejs-on-supported-platforms)

- gcc and g++ 4.9.4 or newer, or
```
yum -y install gcc make gcc-c++ openssl-devel wget
```
- https://nodejs.org/dist/ 找到对应版本地址
- 回到linux虚拟机，在控制台输入 
```
sudo wget https://nodejs.org/dist/v8.12.0/node-v8.12.0.tar.gz
```
- 解压，进入解压后文件夹进行编译
```
./configure
make && make install
``` 
- 验证看是否成功
```bash
[root@centos7-vagrant node-v8.12.0]# node -v
v8.12.0
```
