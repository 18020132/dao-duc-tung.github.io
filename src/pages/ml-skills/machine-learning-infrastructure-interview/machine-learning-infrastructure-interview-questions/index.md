---
url: ml-skills/machine-learning-infrastructure-interview/machine-learning-infrastructure-interview-questions
layout: post
---

![the-thinker][the-thinker]

_Save the best for the last_.

Today in this post, I will finally reveal the actual interview questions of the **Machine Learning Infrastructure Interview** that I experienced.

I don't organize the questions in the order of the group of question types such as Coding tests, Computer science fundamentals, System design, MLOps, etc. Instead, I will group them by the interview round types, such as Hard round and Soft round, so you can understand what the question types' distribution looks like in an interview.

All questions are presented in the order of time during the interview. This means for each set of questions, you are seeing the real questions in the actual order in a real interview. Moreover, I will give you instructions to get you through some questions. For the interview tips, please refer to the previous post **[Machine Learning Infrastructure Interview Process](../machine-learning-infrastructure-interview-process/)** in this series.

<toc>

## Hard round

### Hard round 01

- Interviewer: Team Lead
- Introduce yourself
- Describe your team and your day-to-day job
  - A _soft_ question to check your understanding of your team and your job responsibility
- Describe a project in which you design an ML pipeline
- Do you work with other languages?
  - To check your capability when deploying ML models by using other languages rather than Python
- What are Python `iterator`, `generator`, and `decorator`? Explain what they do
- How does a CNN work?

### Hard round 02

- Interviewer: Team Lead
- Introduce yourself
- Talk about the most impressive project
- Talk about the project in which you developed ML models
- Talk about your experience with network programming in C++
- What is the conditional variable in the multi-threading context in C++?
- Do you have experience in data parallelism and model parallelism using TensorFlow?
- Coding test: check if a graph is a bipartite graph. [LeedCode link](https://leetcode.com/problems/is-graph-bipartite/)

### Hard round 03

- Interviewer: Backend engineer
- Introduce yourself
- Your experience in building cloud infrastructure
- Do you need to run the development env and deployment env in different VPCs?
- What are the differences between using EFS and S3?
- What are the differences between using ECS and EKS?
- What are the differences between a relational database and a non-relational database?
- When to use a relational database and a non-relational database?
- Coding test: remove duplicates in an unsorted singly linked list. [LeetCode link](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/)

### Hard round 04

- Interviewer: Backend engineer
- Introduce yourself
- What are the challenges you faced in the past when building an ML infrastructure?
- What are namespaces in Linux? What are they used for?
- Difference between TCP and UDP. When to use TCP and UDP?
- Difference between hard link and symbolic link
- Coding tests
  - Problem 1: Reverse each word in a string (list of words). [LeetCode link](https://leetcode.com/problems/reverse-words-in-a-string-iii/)
  - Problem 2: Find the longest path between leaf nodes in a binary tree. [LeetCode link](https://leetcode.com/problems/diameter-of-binary-tree/)

### Hard round 05

- Interviewer: Backend engineer
- Introduce yourself
- Talk about your experience in building cloud infrastructure
- How do you learn a new AWS service?
  - A _soft_ question to test your self-learning ability
- How do you know if your solution is the best one?
  - A _soft_ question to check the way you approach and solve a problem
- When you use some services that people built, do you try to understand how it works?
  - A _soft_ question to check your engineering mindset
- Implement two threads that alternatively print out numbers from 1 to 100. For example, thread A prints 1, thread B prints 2, thread A prints 3, etc.
- What happens when you type a command in the terminal?
- System design: Design the API Rate Limiting system
- Coding test: Reverse nodes in a linked list by every k element. [LeetCode link](https://leetcode.com/problems/reverse-nodes-in-k-group/)

### Hard round 06

- Interviewer: Team Lead, ML Engineer
- Talk about two projects in which you built ML systems
- Define and differentiate Supervised, Unsupervised, and Semi-supervised ML
- Define and differentiate input/output of Object Detection, Image Classification, Image Segmentation
- What things need to be logged for a training experiment?
- What libraries do you use for every stage of an ML lifecycle, such as data engineering, model development, and model deployment?
- Do you have experience using NVIDIA technologies such as CUDA programming and `nvidia-docker`?
- Do you have experience in using NVIDIA for streaming video?

### Hard round 07

- Interviewer: Senior Vice President Lead, Assistant Vice President Lead, Solution Architect
- Introduce yourself
- Talk about two projects in which you built ML systems
- Talk about your major in university and some awards
- Do you have experience in TensorRT?
- Do you have experience in Kubernetes?
- What do we need to consider when designing an ML system?
  - This is an extensive question to test your system design skill, especially your ML system design skill. You should be familiar with the ML system's components, ML lifecycle, ML Infrastructure layers, and ML Platform
- How many MLOps team members should we have?
  - A _soft_ question to check your understanding of how ML team members collaborate and work together, what their responsibilities are at different stages of an ML project
- What are your plans for the next three years, five years?
- What are your hobbies?

### Hard round 08

- Interviewer: ML Engineer
- Introduce yourself
- How does the `ping` command work?
- Which protocol does `ping` use?
- What happens when you type `google.com` on your browser?
- What are the layers of the OSI model?
- What is an `interface` in Java?
- How to create a function pointer in C++ and C?
- What is a `virtual function` in C++?
- What are some functions of a `socket` in C++?
- What data structure is used for database indexing? How to insert an item into that data structure?
- Talk about projects in which you train some models
- Have you used Horovod?
- Do you have experience in distributed training?
- Do you have experience serving models for hundreds of thousands of users or more?
- Coding test: implement binary search

### Hard round 09

- Interviewer: Team Lead
- Introduce yourself
- Talk about your ML system design experience
- Talk about your Kubernetes experience
- What are `Deployment`, `Pod`, `Service`, `Ingress` in Kubernetes?
- What are the differences between `ReplicaSets` and `StatefulSets`?
- Coding test: Given a BST, in which exactly two nodes have been swapped on purpose. Recover this BST without changing its data structure. [LeedCode link](https://leetcode.com/problems/recover-binary-search-tree/)
- Talk about your C++ experience
- Talk about some ML libraries that you used for different stages of the ML lifecycle
  - You should be familiar with tools to version data, version and track training experiments, deploy models, CI/CD automation, etc.
- Talk about your Cloud services experience
- Talk about your distributed training experience

### Hard round 10

- Interviewer: Team Manager
- Introduce yourself
- Talk about your experience in building an ML system
- In an ML pipeline, different steps have different dependencies. How to run them in order?
  - This is a coding question. The answer is to use topological sort.
  - Follow-up questions: How to implement topological sort? How to detect the cyclic dependencies?
- How do you pass the results to the next step in the training pipeline?
- How to alert when the training pipeline is failed?
- How do you design a system that doesn't depend on GPU technologies?
- What is the `shared_ptr` in C++? How to implement a `shared_ptr`?
- What are the differences between a `thread` in C++ and Python?
- When to use multi-threading?
- What do we need to do if we have too much data that cannot fit 1 GPU?
- Explain any type of `AllReduce`?
- How do you merge the gradients in distributed training?
- How do you detect when a GPU is overloaded or when there's a problem with the network?

## Soft round

### Soft round 01

- Interviewer: Head of AI Department
- Introduce yourself
- What do you expect to work on?
- What is the most important thing when you consider a new job?

### Soft round 02

- Interviewer: Data Science Director
- Introduce yourself
- Describe your team at the current company
- Talk about your most challenging project
- How do you manage the time to work on different projects at the same time?
- How do you manage conflicts with team members?
- Why do you leave your current job?
- Why do you choose us?

### Soft round 03

- Interviewer: CTO
- Introduce yourself
- Talk about your experience in all your jobs so far
- What is MLOps? What do you think about MLOps?
  - An open question to see your viewpoint when it comes to MLOps
- What do you think about different teams in an organization?
  - An open question to check how you collaborate with teammates and what you think about different team members in various roles with different responsibilities
- What approach do you take when you work with team members as a leader?
- Do you think embedded systems or hardware knowledge are needed for a computer science engineer?
  - An open question to see your viewpoint as an engineer

## Ending

And that's all for the **Machine Learning Infrastructure Interview** series. Thank you, my reader, for being a part of this series and making it happen. Please don't hesitate to contact me if you have any questions. I hope to see you again soon in the future series when I reach the next level of my career path.

<!-- MARKDOWN LINKS & IMAGES -->

[the-thinker]: /assets/images/ml-skills/machine-learning-infrastructure-interview/machine-learning-infrastructure-interview-questions/the-thinker.jpg
