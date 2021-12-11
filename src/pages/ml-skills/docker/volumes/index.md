---
url: ml-skills/docker/volumes
layout: post
---

![volumes][volumes]

In this post, I will talk about how to simply share data between containers and your host machine, or between different containers by using **volumes**.

Basically, volumes are just folders that we want to share.
There are 2 main types of volumes:

- **Persistent volume**: the data will be available on the host even when there's no container using it.

- **Ephemeral volume**: the data will exist if there's at least 1 container using them.

## Sharing data between container and host

Let's type some commands first to see if you get the idea.

```bash
mkdir folder01
touch folder01/file01
docker run -it -v /home/tungdao/folder01:/folder02 ubuntu bash
cd folder02
ls
touch file02
exit
ls folder01
```

![share-with-host][share-with-host]

These commands create a folder `folder01` on your machine and a file `file01` inside that folder then share it with a container. The shared folder inside the container will be named as `folder02`. The option `-v` will help us to do this.

Inside the container, we create a new file `file02` inside the shared folder `folder02` and this file will exist in the folder `folder01` on your machine. This type of sharing uses **persistent volume**.

## Sharing data between containers

Let's create a container and specify a folder named `folder01` that is going to be shared with other containers. Then we will create a file inside that folder. In the image below, this container is in the left terminal.

```bash
docker run -it -v /folder01 ubuntu bash
touch /folder01/file01
```

Open a new terminal, check the latest running container. In my case, its name is `ecstatic_grothendieck`. We then create a new docker and specify that we want to share all the shared folders from the latest running container with this new container. The option `--volumes-from` will help us to do that. In the image below, this new container is in the right terminal.

```bash
docker container ls
docker run -it --volumes-from ecstatic_grothendieck ubuntu bash
```

Now, inside the new container we have created, we can see `folder01` and its content. Even when we terminate the container `ecstatic_grothendieck`, the folder is still there.

![share-containers-01][share-containers-01]

Let's share that folder `folder01` to a 3rd container. Open a new terminal, let's check the latest running container name. In my case, its name is `distracted_yalow`. We create a 3rd container and tell docker that this 3rd container wants to be able to see the shared folders from `distracted_yalow` container by using `--volumes-from` option. In the image below, this 3rd container is in the left terminal.

```bash
docker container ls
docker run -it --volumes-from distracted_yalow ubuntu bash
ls /folder01/
```

Inside this 3rd container, we can see the shared folder `folder01`!

![share-containers-02][share-containers-02]

Now, if we exit all the containers, the folders will be gone because they are not being used anymore. This type of sharing uses **ephemeral volume** which is common to share data between containers.

## Volumes and images

Volumes are not part of images. There's no volume attached when we download or upload an image.

## Key notes

```bash
# share host's folder with a container
docker run -it -v host/folder/path:container/folder/path ubuntu bash

# share folder01 of created container with other containers
docker run -it -v /folder01 ubuntu bash

# let created container see all the shared folder from container_id
docker run -it --volumes-from container_id ubuntu bash
```

<!-- MARKDOWN LINKS & IMAGES -->

[volumes]: /assets/images/ml-skills/docker/volumes/volumes.jpg
[share-with-host]: /assets/images/ml-skills/docker/volumes/share-with-host.png
[share-containers-01]: /assets/images/ml-skills/docker/volumes/share-containers-01.png
[share-containers-02]: /assets/images/ml-skills/docker/volumes/share-containers-02.png
