---
url: ml-skills/machine-learning-systems-design/research-vs-production
layout: post
---

![research][research]

My first ML project was in 2017. Most of the time, I was just reading papers and trying to understand every single line of it.

In 2019, I tried to deploy a computer vision model to a web-based application. I realized that the model was too big and the time from receiving a query to returning the result was few decades. I mean few seconds.

Besides that problem, there're lots of other problems that I still feel very tough to solve in 2021. Below are five major problems that show the differences between ML systems in research and in production.

|                        | Research                       | Production                                       |
| ---------------------- | ------------------------------ | ------------------------------------------------ |
| Objectives             | Model performance              | Different stakeholders have different objectives |
| Computational priority | Fast training, high throughput | Fast inference, low latency                      |
| Data                   | Static                         | Constantly shifting                              |
| Fairness               | Good to have (sadly)           | Important                                        |
| Interpretability       | Good to have                   | Important                                        |

## Objective

![conflict][conflict]

In academia, the objective of an ML system usually is model performance. Researchers want to achieve state-of-the-art results on benchmark datasets. Models often are too complicated to be useful in real-life applications.

Different stakeholders have different objectives. For example, in Facebook, they want to train a model that recommends ads on users' news feed:

- **ML engineers** want that model to predict ads that have a high chance of being clicked by users.
- **Sales team** wants that model predicts ads that were paid with the highest advertising fee to be shown in the user's news feed.
- **Manager** wants to maximize the profit, maybe by sacking somebody.

Users won't see the difference between a model with 98% accuracy and a model with 98.2% accuracy. This 0.2% can save Google millions of dollars.

> If a simple model can do a reasonable job, complex models must perform significantly better to justify the complexity.

## Computational priority

In research, we want the training process faster. In production, we want the inference faster.

In research, we want the training process can take as many samples as it can in a second (throughput). In production, latency matters a lot. If you can type your next word faster than what your iPhone predicts, do you ever want to wait and click on the predicted word?

## Data

![data][data]

In research, data is clean and formatted. They are unchanged so people can use it as benchmarks for evaluation. The process of preparing data and feed it to your model usually was done by somebody.

In production, data is messy. You have to clean it and re-format it. It's not easy to split into the training set, test set, or validation set because it usually has some issues like biased, imbalanced, outdated, etc. Sometimes you have to add more label classes or merging two existing label classes. This is really a nightmare!

In research, data usually was created a long time ago. In production, data could be created a long time ago, or streaming data, or both. In production, you need to care about data privacy and regulations.

| Research               | Production                    |
| ---------------------- | ----------------------------- |
| Clean                  | Messy                         |
| Static                 | Constantly shifting           |
| Mostly historical data | Historical + streaming data   |
|                        | Privacy + regulatory concerns |

## Fairness

You might be a victim of biased ML algorithms. Your resume might be ranked very low because your name is not common. The ranking model picks name as an important feature :)

> ML algorithms don't predict the future, but encode the past, perpetuating the biases in the data and more.

The minority groups would be harm badly because the wrong predictions have minor consequences on the model's overall performance.

## Interpretability

![ai-surgeon][ai-surgeon]

Model interpretability is important to understand why the model makes that prediction/decision. Otherwise, we might feel uncomfortable with trusting it. It also makes the process of debugging, monitoring, and improving the model easier.

> While most of us are comfortable with using a microwave without understanding how it works, many don’t feel the same way about AI yet, especially if that AI makes important decisions about their lives.

## Addons

Most companies cannot pursue pure research unless it leads to short-term profitable applications.

Nowadays, more people and organizations in different fields want to find applications for them due to the easy accessibility of state-of-the-art models. That's why the majority of ML-related jobs is in ML production.

<!-- MARKDOWN LINKS & IMAGES -->

[research]: /assets/images/ml-skills/machine-learning-systems-design/research-vs-production/research.jpg
[conflict]: /assets/images/ml-skills/machine-learning-systems-design/research-vs-production/conflict.jpg
[data]: /assets/images/ml-skills/machine-learning-systems-design/research-vs-production/data.jpg
[ai-surgeon]: /assets/images/ml-skills/machine-learning-systems-design/research-vs-production/ai-surgeon.jpg
