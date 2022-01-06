---
url: ml-skills/docker/container-networking
layout: post
---

![thor-ironman][thor-ironman]

In the previous post about publishing ports, we knew that Docker can perform _outer-communication_ to let a container chit chat with another machine or another container inside your machine.
By doing that way, we publish ports outside the docker internal virtual network and even to the host network. That's why your machine can talk with a docker container.

In this post, we will see how to create an _inter-communication_ to control exactly which container will talk with which container.

<toc>

## Default networks

Let's show the available networks by running

```bash
docker network ls
```

![network-ls][network-ls]

So we see 3 networks by default which are `bridge`, `host`, and `none`.

### Bridge network

In networking concept, a bridge is a Link Layer device that forwards traffic between network segments. It can be a hardware device or software device.

In docker, a bridge network uses a software bridge. Containers that connect to the same bridge network can communicate. It provides isolation from containers which are not connected to that bridge network.

Docker also makes sure that containers on different bridge networks cannot communicate directly with each other by automatically installing rules in the host machine.

### Host network

Host network will make the container not isolated from the docker host, meaning the container doesn't get its own IP address allocated.

For example, if a container binds to port 12345 and this container use host networking mode, the container's application is accessible on port 12345 on host's IP address.

### None network

None network will set the mode no networking for the container.

## Create an user-defined network

Let's create a network named `earth`.

```bash
docker network create earth
```

Run a container named `thor`, connect him with the network `earth` and let him listen on port 12345.

```bash
docker run --rm -it --net earth --name thor ubuntu:14.04 bash
nc -lp 12345
```

![run-thor][run-thor]

Open a new terminal, create a container named `ironman` and let him connect to `thor` on port 12345.
Suddenly, `ironman` says "jarvis". Let's look at `thor` terminal, he heard it!

```bash
docker run --rm -it --net earth --name ironman ubuntu:14.04 bash
nc thor 12345
jarvis
```

![create-ironman][create-ironman]

From this example, we created an user-defined network, let 2 containers join that network and chit chat with each other.

## Connect a container with a network

Let's create a new user-defined network named `asgard` and connect `thor` container with `asgard` network.

```bash
docker network create asgard
docker network connect asgard thor
```

Now we create a container named `loki` and ping `thor`.
`loki` will be able to ping `thor` because both of them use `asgard` network.
But `ironman` cannot ping `loki` because `ironman` is not inside `asgard` network.
`ironman` only uses `earth` network.

```bash
docker run --rm -it --net asgard --name loki ubuntu:14.04 bash
ping thor # success
ping ironman # failed
```

![create-loki][create-loki]

## Key notes

```bash
# list all networks
docker network ls

# create network
docker network create network_name

# connect a container with a network
docker network connect network_name container_id

# inspect a network
docker network inspect network_name
docker inspect network_name

# Use --net flag to specify network for a container on creating
docker run --rm -it --net earth --name ironman ubuntu:14.04 bash
```

<!-- MARKDOWN LINKS & IMAGES -->

[thor-ironman]: /assets/images/ml-skills/docker/container-networking/thor-ironman.jpg
[network-ls]: /assets/images/ml-skills/docker/container-networking/network-ls.png
[run-thor]: /assets/images/ml-skills/docker/container-networking/run-thor.png
[create-ironman]: /assets/images/ml-skills/docker/container-networking/create-ironman.jpg
[create-loki]: /assets/images/ml-skills/docker/container-networking/create-loki.png
