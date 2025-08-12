---
title: 拿到Hax的EU VPS，最佳装机指南（小白白）
date: 2025-05-20
categories:
  - VPS
avatar: https://cdn.jsdelivr.net/gh/dgdghub/dg-pic@main/blog/20250807170400658.png
author: Sherry
series: mjj
---

## 概要

最近Hax EU区域的Vps更换硬盘，导致坚持一年多的EU终究是下线了，需要重新蹲抢，不过很辛运，作为老用户，很快就拿到一台。于是又开始重复多次的开机--> 装系统-->配置环境-->搭建点；经历多了自然有一些自己的小心得，顺便记录下来作为以后的操作指南。
<!--more-->

## 一、操作系统选择

首选：Ddebian 12
次选：Ubuntu22

我看到很多mjj推荐Ubuntu20, 实操发现在部署最新版本的3xui时，会报错（具体信息忘记截图了，大致意思是系统版本过低, Debian11下也会有这个错误)，换Ubuntu22后，问题解决。

可能有人会问，为啥不直接选择Ubuntu24呢？我也专门进行了实测，发现改用Ubuntu24后，安装和部署没出现什么错误，但是ssh连接后，输入命令和响应异常的缓慢，经常有卡顿（就像卡桢的感觉）。

综上：经过多次实验，最终个人感觉Debian12最佳，无论是安装最新版本的3xui等的兼容性，还是ssh连接操作流畅性，我选择了Debian12.

## 二、基本设置
* 开机后不管三七二十二，先修改Dns:
```rust
# 修改resolv.conf文件，将以下nameserver加入
vi /etc/resolv.conf
nameserver 2606:4700:4700::1111
nameserver 2606:4700:4700::1001
nameserver 2001:4860:4860::8888
nameserver 2001:4860:4860::8844
nameserver 1.1.1.1
nameserver 8.8.8.8
nameserver 8.8.4.4

# 重启网络
service networking restart
```
* 更新系统
```rust
apt update
apt upgrade -y
```

## 三、Warp
我使用的是老王一键脚本(细节教程太多，请自行搜，也可以评论区留言）
```rust
执行脚本 ./ssh_tool.sh
选择菜单7
按提示安装warp
再次进入warp开启加速，选择16
```

## 四、部署docker

如果对版本没有要求，建议直接使用apt无脑安装(这个默认安装版本是20.0的)

```shell
apt install docker.io

apt install docker-compose
```

如果想安装最新版本，使用以下命令(每次复制一行，在vps执行一次，不要一次全部执行)
```python
apt install curl vim wget gnupg dpkg apt-transport-https lsb-release ca-certificates

curl -sSL https://download.docker.com/linux/debian/gpg | gpg --dearmor > /usr/share/keyrings/docker-ce.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-ce.gpg] https://download.docker.com/linux/debian $(lsb_release -sc) stable" > /etc/apt/sources.list.d/docker.list

curl -sS https://download.docker.com/linux/debian/gpg | gpg --dearmor > /usr/share/keyrings/docker-ce.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-ce.gpg] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/debian $(lsb_release -sc) stable" > /etc/apt/sources.list.d/docker.list

apt update

apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin

curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-Linux-x86_64 > /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose
```
以上在Debian12下验证过。
## 五、搭建节点

如果你有多台Eu，建议一台部署3xui，一台部署F佬的一键梭哈(具体部署请看专门贴，我这里就不搬运了，如果有mjj懒得搜，也可以评论告诉我)。区别如下:

3xui部署的节点，缺点是网络速度会慢一点，点是CPU和内存的使用比较温柔，基本没有超过60%的情况，网速也是平稳在一个区间内，没有忽然很高，忽然很低的情况。

Singbox的节点，缺点是比较暴力，CPU会开启狂飙模式，忽上忽下，优点是网速也很快，但是偶尔会出现忽上忽下的情况。

## 六、总结
我是小白，很多细节和问题只能从表面记录自己的感受，无力挖掘到问题的本质和原理，希望大家包涵。也希望大佬看到了，能从更深层次指点指点。感谢！！！