---
url: ml-skills/the-ultimate-machine-learning-system/planning-an-ml-project
layout: post
---

![planning][planning]

Before deep diving into the ML system design, today in this post, we will go through a plan of an ML project by answering four questions. These four questions will help us to get an idea of what we should concern about and what expectations we should set. The four questions include:

- Is an ML solution appropriate for my problem?
- Is my data ready for ML?
- How will ML impact a project timeline?
- What early questions should I ask in deployment?

## Is an ML solution appropriate?

To know if an ML solution is appropriate, we will answer a few questions.

### How to determine if ML is the right solution?

Businesses can determine if ML is the right solution if **the problem is clear and quantifiable**. If this is the case, ML can provide value in a model's predictions when compared to specific business objectives and success criteria.

### What aspects of the problem make it a good fit to apply ML?

To be able to answer this question, we need to know when to use and when not to use ML.

#### When to use ML?

![when-to][when-to]

_Machine learning is an approach to **learn complex patterns** from **existing data** and use these patterns to make **predictions** on **unseen data**._

We'll look at each of the bold keyphrases in the definition to understand its implications to the problems ML can solve.

1. **Patterns**: Data must have patterns
2. **Learn**: Possible to form an objective function to guide the learning
3. **Complex**: Patterns are complex
4. **Existing data**: Data is available, or it's possible to collect
5. **Unseen data**: Unseen data shares patterns with training data
6. **Predictions**: It's a predictive problem
7. **It's repetitive**: When taks is repetitive, pattern is repeated multiple times
8. **It's at scale**: A lot of data will be used for training
9. **Patterns are constantly changing**: ML allows you to learn from changing data

Some examples of applications that leverage ML:

- **Authentication**: with your face or fingerprints
- **Machine translation**
- **Writing**: autocorrection, autocompletion, predictive typing
- **Photos**: auto-enhancements and filters
  - E.g. Google Photos, Instagram, Snapchat
- **Personal assistant**: automatically scheduling, booking flight tickets, placing orders, question answering
  - E.g. Siri, Google Assistant, Alexa
- **Home security**: detecting when pets leave house or intrusion when no one is home
- **Elderly care**: at-home health monitoring, fall detection
- **Health care**: skin cancer detection, diabetes diagnosis, drug-drug interaction predictions, drug discovery
- **General amusements**: finding your celebrity doppelganger, converting your face into a cartoon character, changing your voice

Below are some of the problems that have found a wide adoption of ML in enterprises.

- Search engine
- Recommendation systems
- Demand forecasting
- Pricing optimization
- Customer acquisition
- Churn prediction
- Support ticket classification
- Fraud detection
- Brand monitoring

For more details, please check [this document](https://docs.google.com/document/d/15vCMf7SbDuxST9Q-rWtx8o7qHJQN2pE5urCDFTYI1zs/edit#heading=h.w8zj2fsf15p1).

#### When not to use machine learning

Even though ML can solve a subset of problems very well, it can't solve and/or shouldn't be used for problems that are under any of the following conditions.

- Unethical.
- Simpler solutions do the trick.
- Impossible to get the right data.
- One single prediction error can cause devastating consequences.
- Every single decision the system makes must be explainable.
- Not cost-effective.

However, even if ML can't solve your problem, it might be possible to break your problem into smaller components and ML can solve some of them.

> A technology might not be efficient now, but it might be in the future. If you wait for the technology to prove its worth to the rest of the industry before jumping on, you might be years or decades behind your competitors.

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

![timeline][timeline]

### Time expectation

ML can take significant time from the start of a project through production deployment. It can take weeks or even months. Once you decided to adopt ML into your project, your strategy depends on which phase of ML adoption you are in.

### ML lifecycle

The workflow of building an ML system is more of a cycle than a waterfall. There're four main phases in this cycle including:

- Project definition: define goals and objectives, constraints, and evaluation criteria. Resources should be estimated and allocated.
- Data engineering: includes data exploration, data preparation, data storage, and scalable infrastructure.
- Model development: perform model exploration, model training, and model testing.
- Deployment: make the model accessible to users, monitor and maintain data quality and model quality to detect their decay as soon as possible to be adaptive to changing environments and changing requirements.

We will discuss further about this ML lifecycle in the next post.

### Timeline expectation

| Week #             | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  |
| ------------------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Problem definition | [x] |     |     |     |     |     |     |     |     |     |     |     |
| Data engineering   |     | [x  | x   | x]  |     |     |     |     |     |     |     |     |
| Model development  |     |     |     |     | [x  | x   | x   | x]  |     |     |     |     |
| Deployment         |     |     |     |     |     |     |     |     | [x  | x   | x   | x]  |

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

[planning]: /assets/images/ml-skills/the-ultimate-machine-learning-system/planning-an-ml-project/planning.jpg
[when-to]: /assets/images/ml-skills/the-ultimate-machine-learning-system/planning-an-ml-project/when-to.jpg
[timeline]: /assets/images/ml-skills/the-ultimate-machine-learning-system/planning-an-ml-project/timeline.jpg
