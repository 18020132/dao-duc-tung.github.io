---
url: basic-skills/docker/attach-and-detach
layout: post
---

![attach-detach][attach-detach]

It is common and necessary if we want to take a look on what is happening inside a container by interacting with it.
In this post, we will see how to attach and detach from a container.

## Detach

In the previous post about **Docker Image and Container**, we knew how to use `docker run` command.

Basically, this `docker run` command:

- Starts a container from an image
- Starts a _main_ process running in the created container. When this _main_ process stops, the container stops.

Let's run a container with the interactive terminal

```bash
docker run -it ubuntu bash
```

We already knew that if we press `ctrl + d`, the container will exit.
But what if we want to jump out of the container's terminal and we also want to leave it running in the background?
Let's press `ctrl + p` then `ctrl + q` to do that!

Now, check whether it's still running or not

```bash
docker ps
```

![docker-ps-1][docker-ps-1]

Okay, the container is still running! This is called **detaching**.

**Trick**: To run a container and leave it running in the background, we can use flag `-d` with `docker run` command.

## Attach

To jump into the running container, we type:

```bash
docker attach eb8566be48f8 # container id in my case
```

![docker-attach][docker-attach]

Okay, good job! We are inside the main process of the container!

Let's leave this current terminal there and open a new terminal.
Now we want to create another process in the running container.
This is very common when we want to see something inside it or to figure out what is happening. Let's type:

```bash
docker exec -it eb8566be48f8 bash
touch FILE
ls
```

![docker-exec-1][docker-exec-1]

We have created a file named `FILE`.
This file is also existed in the attaching terminal also because they are pointing at the same container.

If we exit the process in the 2nd terminal where we use `exec` command to jump into the container,
the container is still running.
But if we exit the process in the 1st terminal where we use `attach` command to open the container's terminal,
the container will stop because this terminal is attaching into the container's main process.

## Key notes

- Run and detach a container (leave the main process running in the background).

```bash
docker run -d -it ubuntu bash
docker run -d ubuntu top -b
```

- To detach a container when we're inside its terminal, press `ctrl + p` `ctrl + q`.

- Attach into a running container

```bash
docker attach container_id
```

- Add a process to a running container

```bash
docker exec -it container_id bash
docker exec -d container_id top -b
```

<!-- MARKDOWN LINKS & IMAGES -->

[attach-detach]: /assets/images/basic-skills/docker/attach-and-detach/attach-detach.jpg
[docker-ps-1]: /assets/images/basic-skills/docker/attach-and-detach/docker-ps-1.png
[docker-attach]: /assets/images/basic-skills/docker/attach-and-detach/docker-attach.png
[docker-exec-1]: /assets/images/basic-skills/docker/attach-and-detach/docker-exec-1.png
