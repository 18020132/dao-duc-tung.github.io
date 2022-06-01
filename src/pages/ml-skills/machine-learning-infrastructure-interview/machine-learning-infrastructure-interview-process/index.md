---
url: ml-skills/machine-learning-infrastructure-interview/machine-learning-infrastructure-interview-process
layout: post
---

![micro][micro]

Today in this post, I will share with you the typical structure of the interview process for the roles of Machine Learning Infrastructure Engineer and MLOps Engineer at the Senior level. At the end of this post, I will also give you some helpful tips to use before and during the interview sessions.

<toc>

## Interview process structure

Different companies at different scales have different interview structures. Fortunately, the interview structure for the machine learning infrastructure engineer-related roles is not so different.

Commonly, there are four types of interview rounds of a typical interview process.

1. Soft round
1. Hard round
1. Homework round
1. Offer round

The image below shows examples of the interview rounds.

![interview-rounds][interview-rounds]

### Soft round

The Soft round usually will be the first or the third round where the interviewers are the HR recruiter, the managers, leaders, CTO or CEO, etc. The questions are about behavior, working culture, working mindset, soft skills, etc.

Due to the nature of technical roles, Soft rounds sometimes are merged into Hard rounds to reduce one round of the interview.

A Soft round lasts from 30 minutes to 1 hour.

### Hard round

"Hard round" doesn't mean the round is challenging, although it might be. It means the interviewer will test your technical skills. Hard rounds usually will be conducted by the Senior Engineers, Solution Architects, Team Leaders, Tech Leads, the CTO, etc. The questions in the Hard rounds include the following topics.

- Computer science
- Live coding test
- Machine learning
- DevOps & MLOps
- Distributed system design & Machine Learning system design
- Parallel/distributed computing/training

Depending on the companies' hiring strategies and targets, the number of Hard rounds and the distribution of the above topics is different. There are usually three hard rounds for some companies like Shopee, ByteDance, TikTok, etc. You might be asked about all of the above topics in every single Hard round.

Other than that, there are at most two Hard rounds in the other companies (not necessarily smaller companies than the above companies). They ask less about basic Computer Science knowledge, fewer live coding tests, and fewer system design questions. They focus more on your real experience in your past projects. They prefer to have a Homework round to test your coding skills instead of doing the live coding test.

A Hard round lasts from 1 hour to 1 hour 30 minutes.

### Homework round

The Homework round is self-explanatory. You will be assigned an assignment to solve at home. Some examples of the assignments are:

- Write a docker command
- Write a shell script
- Solve coding tests
- Train a machine learning model
- Design and implement a machine learning system or a machine learning infrastructure, either a _simple_ one or an _end-to-end_ one that has the capability of testability, high availability, scalability, extendability, maintainability, adaptability, reliability, and lots of other \*_-bility_.
- etc.

The Homework round usually comes with a deadline. It can be 1 hour, 2 hours, three days, one week, or two weeks, depending on the complexity of the problems.

### Offer round

Congratulations, after passing all the above rounds, you will get an offer from the company. Usually, the HR in charge will contact you to discuss the offer informally via phone. The number of Offer rounds is around three. The situation might be as follows.

1. Offer round 1: The HR person calls you and discusses the initial offer. The HR person takes a few days to ask their managers to make the decision.
1. Offer round 2: The HR person informs you about the decision. You continue negotiating the offer. The HR person takes a few days more to ask for their managers again.
1. Offer rounds 3, 4, etc.: Similar to Offer round 2.

Usually, you will make the decision at the Offer round 3 or 4. Each Offer round might take three days to one week.

## Interview tips

![trick][trick]

### Before the interview

- Prepare presentation slides for each project that you plan to talk about. The interviewer might get lost easily because of the complexity of the system. The presentation slides create the visual effect to attract people's attention and help people understand your project easier. The slides also impress the interviewer that you prepared very carefully for the interview.
- Pretend to be the interviewer, look into your presentation slides, list down every question you think the interviewer might ask, and answer those questions. This helps you to understand your project better, prepare for what you might be asked, and feel confident during the interview.
- Write down everything you plan to say or talk about. For example, your self-introduction, the answers to all the questions in the Soft round, Hard round, or your presentation slides. Writing down the answers helps you organize them better, add more impressive information, and remove the redundant ones.

### During the interview

There are some tips during the interview as follows.

- Play a song that makes you sing along **until** the interviewer joins the online meeting room. This trick keeps your guts comfortable.
- Be confident, talk confident. Your attitude is super important.
- Every question has a purpose, at least to test your explaining skill.
- If you don't know or don't remember the answer to a question, after telling the interviewer that you don't know the answer exactly, give them a guess and tell them what you can interpret. This trick might help show your analytical thinking and problem-solving skills when approaching an unknown issue.

At the end of each interview, you have to ask some questions. Below is the list of the important questions you should ask the interviewer.

**Questions about the projects**

- Could you please describe the projects that your team is working on, the project that I might work on if I join the team, and the challenges of these projects?
- Could you please give me an overview of the meaning, the target, and the future vision of the projects, if possible?

These questions show that you care about the work and want to contribute to the team.

**Questions about the teams**

- Could you please describe the structure and scale of the teams that I might collaborate with if I join the company?
- Do you have any plan to expand your teams?
- Could you please describe the working culture of your team or the company?

These questions show that you care about the team, the working environment, and the collaboration among teams.

**Other important questions**

- Do you have any doubt or uncertainty about my qualification?
  - This question aims to get feedback directly and immediately from the interviewer.
- What personalities do you expect from a candidate?
  - It would help if you asked the CTO or the CEO these questions.

### Coding test tips

I started my journey of practicing coding interview questions with the book [Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850). Every year I spend roughly two weeks practicing the coding questions in this book and another two weeks practicing the coding questions on [LeetCode](https://leetcode.com/), except for the first year when I took two months to recall and practice everything. The following years will be easier when I focus on the topics that I don't feel confident about.

The first tip is to practice coding interview questions frequently, or at least annually. The second tip is to answer the coding interview questions in a structured way by reading this article about [How to answer coding interview questions](https://leetcode.com/discuss/general-discussion/1039615/how-to-answer-coding-interview-questions). Also take note that in an actual interview, you don't need to implement the brute force solution if it's simple, talking about it would suffice. Otherwise, you won't have enough time for the optimal solution implementation.

### Homework round tips

- If the assignment is to design and implement a system, you should follow the [SOLID principles](https://en.wikipedia.org/wiki/SOLID) and best practices in the [Clean Code book](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882). Whatever the system is, design it in a _clean_ way.
- In the `README` file, you should describe the System Design's basic steps and draw some diagrams such as the Use cases diagram, Data flow, Sequence diagram, etc. If possible, you can add some images and other helpful information about your design, how to extend some functionalities, etc. For an example of the `README` file's structure, you can refer to my two projects which are [GRPC + RESTful Model Inference Service](https://github.com/dao-duc-tung/inference-service-grpc-restful) and [Face Detection on UWP using ONNX](https://github.com/dao-duc-tung/face-detection-uwp-onnx). No matter how simple the assignment is, show off your deep understanding by writing structured and informative documents.

### Offer round tips

In the previous section where I describe the Offer round, you can see that it's similar to when you buy something and negotiate the price. It's different in the time duration that the negotiation happens. So, keep calm and stay cool.

For the tips, I will link a video about [Tips for negotiating your salary](https://youtu.be/u9BoG1n1948). Watch it, and you will know what you need to do.

## Ending

And that's it for the interview process. It's pretty similar to the other interviews for engineering roles. In the next post, I will share all the learning resources that I have been learning for years along my Machine Learning Infrastructure journey.

<!-- MARKDOWN LINKS & IMAGES -->

[micro]: /assets/images/ml-skills/machine-learning-infrastructure-interview/machine-learning-infrastructure-interview-process/micro.jpg
[interview-rounds]: /assets/images/ml-skills/machine-learning-infrastructure-interview/machine-learning-infrastructure-interview-process/interview-rounds.png
[trick]: /assets/images/ml-skills/machine-learning-infrastructure-interview/machine-learning-infrastructure-interview-process/trick.jpg
