---
url: ml-skills/the-ultimate-machine-learning-system/model-development-part-2-evaluation
layout: post
---

![assessment][assessment]

Model evaluation helps us decide if one ML algorithm is better than another. Ideally, the evaluation methods should be the same in development and production environments. In practice, we might not have ground truths to evaluate models. This post covers the methods to evaluate models in development environments. For evaluating models in production, we will discuss them in a future post.

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

This section won't discuss the common evaluation methods to assess the model's performance. We will discuss the methods to evaluate the model's robustness, fairness, calibrated, and making sense.

**Perturbation test**

Add noise to the test data to create perturbed data. The more sensitive the model is to noise, the harder it will be to maintain.

**Invariance test**

Change the input's sensitive information to see if the output changes. Better, the sensitive information should be excluded when training the model. Certain changes to the inputs shouldn't lead to changes in the output.

**Directional expectation test**

Change an input's feature to see if the output changes in the expected direction. Certain changes to the inputs should cause predictable changes in outputs.

**Confidence measurement**

Confidence measurement is the threshold considered to be helpful for each prediction. If this threshold is not selected wisely, it may annoy and make users lose trust in the system. In this confidence measurement, we need to consider:

- How do we measure that threshold?
- What do we want to do with predictions below that threshold? Discard it, loop in humans, or ask for more information from users?

**Slice-based evaluation**

Look at the model's performance on the subgroups of data instead of using coarse-grained metrics like overall F1 or accuracy on the entire dataset. Sometimes, a trend appears in several data groups but disappears or reverses when the groups are combined. This phenomenon is called [Simplson's paradox](https://en.wikipedia.org/wiki/Simpson%27s_paradox). Examples of subgroups are majority classes vs. minority classes and paid users vs. non-paid users.

Selecting the critical slices is more art than a science, requiring intensive data exploration and analysis. Below are the three main approaches:

- Heuristics-based: slice data using existing knowledge of the data and the task. E.g., in web traffic, slice data along dimensions like mobile vs. desktop, browser types, and locations.
- Error analysis: find patterns among the misclassified examples.
- Slice finder: uses algorithms such as beam search and clustering. E.g., [Slice Finder: Automated Data Slicing for Model Validation](https://ieeexplore.ieee.org/abstract/document/8731353), [Subgroup Discovery Algorithms: A Survey and Empirical Evaluation](https://jcst.ict.ac.cn/EN/10.1007/s11390-016-1647-1).

**Model calibration**: Our model usually returns probabilities. A well-calibrated model is a model that returns probabilities of outcome A that match the real probabilities of that outcome A in production (given a big enough number of data to consider _matched_). This topic merits a dedicated post. For more details, please check [Why model calibration matters and how to achieve it](https://www.unofficialgoogledatascience.com/2021/04/why-model-calibration-matters-and-how.html), [video 1](https://youtu.be/hWb-MIXKe-s), [video 2](https://youtu.be/AunotauS5yI).

**Data testing**

For data, we need to test the following things.

- Test feature correlation, multiplicity, label quality, missing values
- Test assumptions about features, data distribution, pre-train data, and post-train data
- Check feature meaning

**Pipeline testing**

For the system pipeline, we need to test:

- The consistency of feature engineering in training and inference
- The consistency of predictions in training, inference, and on multiple runs
- The reproducibility of the pipeline (fix the random seed)
- Test the edge case by giving an invalid input

**System benchmarking**

We need to perform several actions as below.

- Reproducible experiments: log hyperparameters, metrics, rules, etc.
- Development guide: documents
- Track progress: benchmark dataset
- Metrics to compare: latency, memory usage, prediction cost, accuracy, etc.
- Compare with other systems: `MLPerf`

## Ending

Without the baseline, you don't know how much your model is improved after each experiment. This post gives you some common keywords when comparing your model with the baseline. You still might need to search for more information based on these keywords.

<!-- MARKDOWN LINKS & IMAGES -->

[assessment]: /assets/images/ml-skills/the-ultimate-machine-learning-system/model-development-part-2-evaluation/assessment.jpg
