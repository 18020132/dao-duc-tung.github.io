---
url: basic-skills/docker/container-networking
layout: post
---

In the previous post about publishing ports, we knew that Docker can perform _outer-communication_ to let a container chit chat with another machine (including another container inside your machine).
By doing that way, we publish ports outside the docker internal virtual network and even to the host network. That's why your machine can talk with a docker container.

In this post, we will see how to create an _inter-communication_ to control exactly which container will talk with which container.

Let's show the available networks by running
```bash
docker network ls
```

So we see 3 networks by default which are `bridge`, `host`, and `none`.

In networking concept, a bridge is a Link Layer device that forwards traffic between network segments. It can be a hardware device or software device.

In docker, a bridge network uses a software bridge. Containers that connect to the same bridge network can communicate. It provides isolation from containers which are not connected to that bridge network.

Docker also makes sure that containers on different bridge networks cannot communicate directly with each other by automatically installing rules in the host machine.

Host network will make the container not isolated from the docker host, meaning the container doesn't get its own IP address allocated. Ex: if a container binds to port 1234 and this container use host networking mode, the container's application is accessible on port 80 on host's IP address.

Lastly, none network will set the mode no networking for the container.


<!-- MARKDOWN LINKS & IMAGES -->

[docker-logo]: /assets/images/basic-skills/docker/introduction/docker-logo-1200x630.png
