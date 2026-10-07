FROM nginx:alpine

COPY dist/learning-angular/browser/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf
