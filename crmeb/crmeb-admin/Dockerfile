### 基础镜像，使用alpine操作系统，openjkd使用8u201
FROM openjdk:8-jre
#作者
MAINTAINER zdcloud
#系统编码
ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

#声明一个挂载点，容器内此路径会对应宿主机的某个文件夹
VOLUME /opt/Crmeb
#应用构建成功后的jar文件被复制到镜像内，名字也改成了app.jar
ADD target/Crmeb-admin.jar Crmeb-admin.jar
#设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' >/etc/timezone
#启动容器时的进程
ENTRYPOINT ["java","-jar","/Crmeb-admin.jar"]
#暴露8080端口
EXPOSE 8008