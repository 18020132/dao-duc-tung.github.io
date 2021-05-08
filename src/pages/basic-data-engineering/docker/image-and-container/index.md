---
url: basic-data-engineering/docker/image-and-container
layout: post
---

In this post, we will see how to start a container and the meaning of `isolated containers`.

Before we start, you should know how to open a terminal depending on your OS.

## Docker Image

In the previous post **Docker Introduction**, we know that:

> Docker splits **an Operating System** into smaller worlds called **containers**.

To run a container, we need a **docker image**. An image is just a file which contains just enough that an operating system requires to be able to run.

For example, the Ubuntu _.iso_ file that you download to install Ubuntu on your PC is an image. But this _.iso_ file contains a lot of things such as the GUI, not just the Ubuntu kernel.

Let's run a Ubuntu container. Open a terminal and type:

```bash
docker run ubuntu
```

![docker-run-ubuntu][docker-run-ubuntu]

If this is your first time running ubuntu container, docker will automatically download the ubuntu image for you.

Now, let's type:

```bash
docker image ls
```

![docker-image-ls][docker-image-ls]

The command `docker image ls` lists all the images in your system. We can see that the downloaded ubuntu image is named `ubuntu`. It has an ID of `7e0aa2d69a15`, a size of 72.7 MB and a tag of `latest` which is its version.

You can refer to an image by either its ID or the combination of its name and its tag. An image doesn't have to have a name!

**Trick**: Another way to list down the images is typing command `docker images`.

## Run 2 containers using 1 image

In the previous post Docker Introduction, we know that:

> Containers are isolated from one another. A container has everything needed to run your code such as your code, configuration files, your tools, networking system and just enough of the operating system to run your code.

Let's see what `isolated` word means. Open terminal 1, and type:

```bash
docker run -it ubuntu:latest bash
```

![docker-run--it-ubuntu-bash][docker-run--it-ubuntu-bash]

This command will run a container from image `ubuntu` with version `latest`. `-it` flags help us to interact with the running container via its terminal. `bash` is the command we want to run inside the container's terminal. Now we are inside a container's terminal. Let's create a file named `FILE` by typing:

```bash
touch FILE
ls
```

![touch-FILE][touch-file]

Now, keep terminal 1 opening, open terminal 2, and run another container:

```bash
docker run -it ubuntu:latest bash
ls
```

![docker-run--it-ubuntu-bash-2][docker-run--it-ubuntu-bash-2]

We see that the file `FILE` is in the first running container, but it's not in the other one. This is the meaning of `isolated` word.

Containers are isolated from one another. The files that we create in a container won't be put into the image where the container comes from. Those created files live and die along with the container.

To exit the container's terminal, you can either press `Ctrl + D` or typing `exit`.

<!-- MARKDOWN LINKS & IMAGES -->

[docker-run-ubuntu]: /assets/images/basic-data-engineering/docker/image-and-container/docker-run-ubuntu.png
[docker-image-ls]: /assets/images/basic-data-engineering/docker/image-and-container/docker-image-ls.png
[docker-run--it-ubuntu-bash]: /assets/images/basic-data-engineering/docker/image-and-container/docker-run--it-ubuntu-bash.png
[touch-file]: /assets/images/basic-data-engineering/docker/image-and-container/touch-file.png
[docker-run--it-ubuntu-bash-2]: /assets/images/basic-data-engineering/docker/image-and-container/docker-run--it-ubuntu-bash-2.png
