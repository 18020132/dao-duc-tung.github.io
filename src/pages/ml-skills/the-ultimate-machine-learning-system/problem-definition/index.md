---
url: ml-skills/the-ultimate-machine-learning-system/problem-definition
layout: post
---

![planning][planning]

Today in this post, we will discuss the first stage in an ML project - the problem definition stage. This Problem definition stage is not like the other stages which are self-explained. We need to clearly answer a bunch of questions at the very beginning when starting an ML project.

<toc>

## Understand business requirements

The first step is to form a business question, or goals.

> Goals define the general purpose of a project.

For example, the goals of a Visual Search-Based Recommendation System might be:

- Minimize irrelevant search results
- Maximize revenue of new products by recommending them
- Maximize user's engagement

After that, we need to be more specific about the project's critical features by defining the objectives.

> Objectives define specific steps on how to realize the goals.

For example, to maximize the revenue of new products, objectives might be:

- Rank search results by the newest product and promotions
- Filter out outlook-similar products but not profitable

### Multiple-objective optimization

Objectives can be multiple. When there're multiple objectives, it might be a good idea to decouple them because:

- Optimizing for one objective when training ML models is easier than optimizing for multiple objectives.
- Easier to tweak the system without retraining models
- Easier for maintenance since different objectives might need different maintenance schedules.

## Analyze supporting information

![constraints][constraints]

The second step is to list down constraints.

> Project's constraints rule out impossible solutions.

### Time

- How does the schedule look like?
- What and when do the milestones need to be reached?

### Performance

- **Baselines**: What are you comparing the system to? E.g. existing solutions, competitors' solutions, etc.
- **Usefulness threshold**: How fast/good the solution needs to be for it to be useful?. E.g. self-driving cars need human-level performance to be useful; a system that predicts what word a user will type next on their phone doesn't., etc.
- **Tradeoffs**: What's more important - false negatives or false positives? E.g. covid screening must not have false negatives (patients with covid shouldn't be classified as no covid). Fingerprint unlocking must not have false positives (unauthorized people shouldn't be given access).
- **Interpretability**: Does the solution need to be interpretable? If yes, to whom?
- **Confidence measurement**: Does the solution need the confidence score? If yes:
  - What is the threshold to be usable?
  - What do you want to do with predictions below that threshold? discard it, loop in humans, ask for more info from users?

### Costs and benefits

- Maximum initial budget?
- What needs to be achieved to increase the budget?
- Compare costs and benefits

### Stakeholders

- Who will be affected by the project?
- Who needs to be informed about the project?

### Privacy

- Privacy requirements for annotation, storage, 3rd-party solutions, cloud services, regulations, etc.
- Data:
  - Can data be shipped outside organizations for annotation?
  - Can the system be connected to the internet?
  - How long can we keep users' data?

### Techincal constraints

Any tool or system that the solution must be compatible with? E.g. legacy infrastructure is a huge bottleneck for organizations to adopt ML.

### Risks

- Analyze associated risks

### Evaluation

- How to evaluate the system's performance during development and production?
  - If you need ground truth labels, how can they be generated or inferred from users' reactions?
- How to tie model performance to business goals and objectives?

## Create a project plan

The last step is to summarize all the answers to build a project plan that includes:

- Number and duration of stages
- Dependencies
- Risks
- Goals
- Evaluation methods
- Tools and techniques

## Ending

This post is a simple version of the ML problem definition process. The stakeholders, product owner, product manager, and engineers need to be involved in this process to define the ML problem thoughtfully and set the right expectation for each business decision.

<!-- MARKDOWN LINKS & IMAGES -->

[planning]: /assets/images/ml-skills/the-ultimate-machine-learning-system/problem-definition/planning.jpg
[constraints]: /assets/images/ml-skills/the-ultimate-machine-learning-system/problem-definition/constraints.png
