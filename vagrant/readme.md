# virturlbox 版本升级
管理->检查更新->下载新版本->关闭vbox->安装新版本
# 安装增强功能
~~~
$ wget https://download.virtualbox.org/virtualbox/5.2.22/VBoxGuestAdditions_5.2.22.iso
$ sudo mkdir /media/VBoxGuestAdditions
$ sudo mount -o loop,ro VBoxGuestAdditions_5.2.22.iso /media/VBoxGuestAdditions
$ sudo sh /media/VBoxGuestAdditions/VBoxLinuxAdditions.run
$ rm VBoxGuestAdditions_5.2.22.iso
$ sudo umount /media/VBoxGuestAdditions
$ sudo rmdir /media/VBoxGuestAdditions
~~~
