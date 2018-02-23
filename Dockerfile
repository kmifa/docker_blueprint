FROM centos:centos7

RUN set -x && \
    cd ~ && \
    yum -y install iproute which git wget bzip2 gcc gcc-c++ make openssl-devel readline-devel zlib-devel curl-devel libyaml-devel && \
    git clone git://github.com/creationix/nvm.git ~/.nvm && \
    source ~/.nvm/nvm.sh && \
    nvm install v4.8.3 && \
    nvm use v4.8.3 && \
    npm install -g aglio && \
    npm install -g api-mock && \
    npm install -g gulp && \
    mkdir /app && \
    echo 'source ~/.nvm/nvm.sh' >> ~/.bashrc && \
    echo 'nvm use v4.8.3' >> ~/.bashrc

WORKDIR /app


EXPOSE 3000

#alias
RUN echo 'alias ll="ls -laG"' >> /root/.bashrc
RUN echo 'alias e="vim"' >> /root/.bashrc