---
url: ml-skills/machine-learning-adoption/planning-a-machine-learning-project
layout: post
---

![planning][planning]

In this post, we are going to answer four questions to plan a machine learning project. They are:

- Is an ML solution appropriate for my problem?
- Is my data ready for ML?
- How will ML impact a project timeline?
- What early questions should I ask in deployment?

## Is an ML solution appropriate?

To know if an ML solution is appropriate, we will answer a few questions.

### How to determine if ML is the right solution?

Businesses can determine if ML is the right solution if **the problem is clear and quantifiable**. To define a clear and quantifiable problem, we need to define goals, objectives, business constraints, and how to evaluate the system's performance. For more details, please refer to the section **Project Scoping** in the post [Intro to ML systems design part 2](https://aiengineer.net/ml-skills/machine-learning-systems-design/intro-to-ml-systems-design-part-2/).

### What aspects of the problem make it a good fit to apply ML?

To be able to answer this question, we need to know when to use and when not to use ML. In the section **When to use ML** in the post [Intro to ML systems design part 2](https://aiengineer.net/ml-skills/machine-learning-systems-design/intro-to-ml-systems-design-part-2/), I covered the details of when to use and when not to use ML.

## Is my data ready?

Data can come from anywhere and can be in any form. In general, there're four types of data including Text, Audio, Image, Video. Data readiness depends on the quality, quantity, diversity, and complexity of the data collected. After discovering and collecting all relevant data, the data should be cleansed, validated, transformed, and stored.

To answer this question, we should answer a few questions:

- Can the data be used?
  - Is the data available? Data should not require significant preparation before using in training and model development.
  - Is the data accessible? Data should be in an on-demand state with access to store, retrieve, move, modify, or copy data from one place to another.
- Should the data be used?
  - Does the data respect the customers' privacy? E.g. Citizenship, health info, etc. should be labeled private and protected by privacy laws.
  - Does the project have adequate security? Industry regulations, gov laws, and compliance policies determine the importance of various data types and determine what and how data can be processed, stored, managed, or shared.
- Is the data high quality?
  - Relevant? Data should be directly related to the goals. Training data should be as close to the actual data as possible.
  - Fresh? E.g. the data to train a recommendation system should be collected day by day, but the data to train a dog/cat classification model doesn't need to be collected periodically.
  - Representative? Data should be representative of the data across all data sources. E.g. your sale data should have all the products, categories existing in all data sources.
  - Unbiased? Data should not tend to favor one area of a segment. E.g. when you predict forecast sales, your data should not ignore any product.

## How will ML impact the project timeline?

### Time expectation

ML can take significant time from the start of a project through production deployment. It can take even months. Once you decided to adopt ML into your project, your strategy depends on which phase of ML adoption you are in. There're four phases of adopting ML, with solutions from each phase that can be used as baselines to evaluate the solutions from the next phase. These phases were discussed in the section **Four phased of ML adoption** in the post [Intro to ML systems design part 2](https://aiengineer.net/ml-skills/machine-learning-systems-design/intro-to-ml-systems-design-part-2/).

### ML lifecycle

The workflow of building an ML system is more of a cycle than a waterfall. There're six main steps in this cycle including:

- Project scoping
- Data management
- ML model development
- Deployment
- Monitoring and maintenance
- Business analysis

Please refer to the section **The iterative process** in the post [Intro to ML systems design part 2](https://aiengineer.net/ml-skills/machine-learning-systems-design/intro-to-ml-systems-design-part-2/) for more details.

### Timeline expectation

![timeline-expectation][timeline-expectation]

## What early questions should I ask in deployment?

Answering these questions early in the productions process helps you avoid issues when you launch your ML model.

- What is the computational cost of generating predictions using your ML model?
  - CPU, GPU, memory, storage, etc.
  - Failure to plan ahead on computational costs could hinder production later.
- How quickly does your data change?
  - This is needed to determine how frequently you need to retrain the model.
  - This could lead to increased time allotted for training since you will be cycling back from production to research and development.
- How significant are the changes needed to deploy?
  - Think about which changes you'd like to enter into production and the frequency of them. This will let you plan the strategy for maximizing the impact of updating your model.
- Does the model's performance meet the business need?
  - Think about how the business conditions will change over time such as goals, objectives, and constraints. Your model might need to be adjusted as conditions change.
  - Do you have product lines launching? Are there new regulations in your business sector? Are you expanding into new geographies?

<!-- MARKDOWN LINKS & IMAGES -->

[planning]: /assets/images/ml-skills/machine-learning-adoption/planning-a-machine-learning-project/planning.jpg
[timeline-expectation]: /assets/images/ml-skills/machine-learning-adoption/planning-a-machine-learning-project/timeline-expectation.png
