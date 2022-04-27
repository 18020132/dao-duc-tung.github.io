---
url: ml-skills/the-ultimate-machine-learning-system/model-evaluation
layout: post
---

![assessment][assessment]

Model evaluation helps us to decide if one ML algorithm is better than another. Ideally, the evaluation methods should be the same in both the development and production environments. In practice, we might not have ground truths to evaluate models. This post covers the methods to evaluate models in development environments. For evaluating models in production, we will discuss in a future post.

<toc>

## Baseline

Evaluation metrics are only helpful when comparing against baselines. Below is the list of common baselines.

**Random baseline**

- Use a normal/uniform random distribution
- Use the same distribution as the label distribution

**Simple heuristic**

- Use chronological order
- Zero rule baseline: use the most common class as predictions

**Human baseline**

- Compare to human experts

**Existing solutions**

- Current existing solution
- Third-party solution

## Evaluation methods

This section won't discuss the common evaluation methods to assess the model's performance. We will discuss the methods to evaluate the model's characteristics such as robustness, fairness, calibrated, and making sense.

**Perturbation test**

Add noise to the test data to create perturbed data. The more sensitive the model is to noise, the harder it will be to maintain.

**Invariance test**

Change the input's sensitive information to see if the output changes. Better, the sensitive information should be excluded when training the model. Certain changes to the inputs shouldn't lead to changes in the output.

**Directional expectation test**

Change an input's feature to see if the output changes in the expected direction. Certain changes to the inputs should cause predictable changes in outputs.

**Confidence measurement**

Confidence measurement is the threshold considered to be useful for each prediction. If this threshold is not selected wisely, it may annoy and make users lose trust in the system. In this confidence measurement, we need to consider:

- How do we measure that threshold?
- What do we want to do with predictions below that threshold? Discard it, loop in humans, or ask for more information from users?

**Slice-based evaluation**

Look at the model's performance on the subgroups of data instead of just using the coarse-grained metrics like overall F1 or accuracy on the entire dataset. Sometimes, a trend appears in several groups of data but disappears or reverses when the groups are combined. This phenomenon is called [Simplson's paradox](https://en.wikipedia.org/wiki/Simpson%27s_paradox). Some subgroups examples are majority classes vs. minority classes, paid users vs. non-paid users.

Selecting the critical slices is more of an art than a science, requiring intensive data exploration and analysis. Below are the three main approaches:

- Heuristics-based: slice data using existing knowledge of the data and the task. Eg: in web traffic, slice data along dimensions like mobile vs. desktop, browser types, and locations.
- Error analysis: find patterns among the misclassified examples.
- Slice finder: uses algorithms such as beam search, and clustering. Eg: [Slice Finder: Automated Data Slicing for Model Validation](https://ieeexplore.ieee.org/abstract/document/8731353), [Subgroup Discovery Algorithms: A Survey and Empirical Evaluation](https://jcst.ict.ac.cn/EN/10.1007/s11390-016-1647-1).

**Model calibration**: Our model usually returns probabilities. A well-calibrated model is a model that returns probabilities of outcome A that match the real probabilities of that outcome A in production (given a big enough number of data to consider _matched_). This topic merits a dedicated post. For more details, please check [Why model calibration matters and how to achieve it](https://www.unofficialgoogledatascience.com/2021/04/why-model-calibration-matters-and-how.html), [video 1](https://youtu.be/hWb-MIXKe-s), [video 2](https://youtu.be/AunotauS5yI).

<!-- MARKDOWN LINKS & IMAGES -->

[assessment]: /assets/images/ml-skills/the-ultimate-machine-learning-system/model-evaluation/assessment.jpg
