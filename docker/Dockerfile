FROM nginx
MAINTAINER rimvanvliet

COPY /www /usr/share/nginx/html
COPY /conf/nginx /etc/nginx

RUN chmod go+rwx /var/cache/nginx /var/run /var/log/nginx
EXPOSE 80

USER 997

CMD nginx -g 'daemon off;'
