---
title: Docker Level 0
layout: post
---

![Docker Logo][docker-logo]

> Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. Because all of the _blah blah blah_. ([Wikipedia](<https://en.wikipedia.org/wiki/Docker_(software)>))

Let's forget what you have read and start with **AI Engineer**'s introduction.

## Introduction

### Why docker?

Have you set up a development environment for your deep learning project?

Have you ever had trouble with TensorFlow when you have to install a compatible version for a project that you clone from somewhere and you already installed another version of TensorFlow on your PC?

Even if you just want to start a Jupyter notebook, you need to install it on your PC. Or you might use Anaconda to install it. But again, you need to decide which version of Anaconda you want to use, and whether the Anaconda Python get conflict with your native Python is another story.

By doing these things, you will possibly mess up your operating system (OS) by installing and uninstalling tools around.

Docker will let you install whatever the version of the libraries you need into your OS without messing it!

### How?

Docker splits **an Operating System** into smaller worlds called **containers**.

Containers are isolated from one another. A container has everything needed to run your code such as your code, configuration files, your tools, networking system and just enough of the operating system to run your code.

You may have _container A_ running Ubuntu 14.04 and _container B_ running Debian 10 that talks to _container A_ through a virtual network created by you and managed by docker.

![Docker Containers][docker-containers]

### What is docker?

- A client program which is a command line interface (CLI).
- A server program that listens for whatever you ask for when you use that CLI.
- A program that builds containers defined by you (later we'll see how to define them ourselves).
- A service that stores and shares containers on the internet so everyone can find the other's work.
- A company that makes all of those things.

## Installation

Please refer to the [docker docs](https://docs.docker.com/engine/install/) to download **Docker Engine** based on your OS.

> Docker Engine is an open source containerization technology for building and containerizing your applications. ([Docker docs](https://docs.docker.com/engine/))

By installing **Docker Engine**, you will also install:

- The docker server program.
- The docker client program.
- APIs which define interfaces that programs use to chit chat with the docker server.

## Containers vs. Virtual Machines

Containers and virtual machines are different in several ways. The main difference is that containers virtualize OS to run several programs on a single OS instance while virtual machines virtualize hardware to run several OS instance. Below is the summary table:

|  **Containers**   |  **Virtual Machines**   |
| :---------------: | :---------------------: |
| OS virtualization | Hardware virtualization |
|     Shared OS     |      Dedicated OS       |

<!-- MARKDOWN LINKS & IMAGES -->

[docker-logo]: /assets/images/basic-data-engineering/docker-level-0/docker-logo-1200x630.png
[docker-containers]: /assets/images/basic-data-engineering/docker-level-0/docker-containers.png
