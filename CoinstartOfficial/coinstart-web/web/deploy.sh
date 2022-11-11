docker stop $(docker ps -qf name=defiport-web)
docker rm $(docker ps -aqf name=defiport-web)
docker images|grep defiport-web |awk '{print $3}'|xargs docker rmi
docker build -t defiport-web .
docker run --name defiport-web-prod -d -p 3000:3000 defiport-web
