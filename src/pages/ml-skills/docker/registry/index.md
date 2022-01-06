---
url: ml-skills/docker/registry
layout: post
---

![infant-room][infant-room]

Today in this post, we will talk about the place from where we usually pull the docker images - **Docker Registry**.

**Docker Registry** is an application that runs on Docker's server. It stores docker images so you can download them or push your own docker images to your own repository just like GitHub.

<toc>

## Searching

To search for a docker image, you can type:

```bash
docker search ubuntu
```

![cli-search][cli-search]

Alternatively, you can go to [hub.docker.com](https://hub.docker.com). This web version will provide more information about how to use the image, its description, the latest update and all of its tags.

![hub-search][hub-search]

## Publish an image to the world

```bash
# You need to login first
docker login

# Give ubuntu image a new name with tag
docker tag ubuntu:14.04 tungdao17/my-ubuntu:v1.0

# push it to docker hub
docker push tungdao17/my-ubuntu:v1.0
```

## Start your own docker registry

It's very simple to start your own registry. Refer to https://docs.docker.com/registry/ for more details.

## Key notes

- Some commands

```bash
# Search for a published image
docker search image_name

# Give an image a new name with tag
docker tag image_id your_docker_registry/image_name:tag

# push image to docker hub
docker push your_docker_registry/image_name:tag
```

- Don't trust every docker images.
- Clean your local images frequently.

<!-- MARKDOWN LINKS & IMAGES -->

[infant-room]: /assets/images/ml-skills/docker/registry/infant-room.jpg
[cli-search]: /assets/images/ml-skills/docker/registry/cli-search.png
[hub-search]: /assets/images/ml-skills/docker/registry/hub-search.png
