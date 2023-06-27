#!/bin/sh

# chmod +x ./build.sh

DOCKER_IMAGE_NAME="vue3-admin-image"
DOCKER_CONTAINER_NAME="vue3-admin-container"

if [[ -n $(docker images -q ${DOCKER_IMAGE_NAME}) ]];then
	echo "====delete${DOCKER_IMAGE_NAME}===="
	docker rmi -f ${DOCKER_IMAGE_NAME} || true
fi

echo "====build image===="
# -f ./docker/Dockerfile
docker build --no-cache -t ${DOCKER_IMAGE_NAME} .

if [[ -n $(docker ps -q -a -f "name=^${DOCKER_CONTAINER_NAME}$") ]];then
	echo "====remove ${DOCKER_CONTAINER_NAME}===="
	docker rm -f ${DOCKER_CONTAINER_NAME} || true
fi

echo "====run===="
docker run -p 3033:80 -d --name ${DOCKER_CONTAINER_NAME} ${DOCKER_IMAGE_NAME}

echo "====delete <none>===="
docker rmi $(docker images | grep "none" | awk '{print $3}') 

docker images
docker ps