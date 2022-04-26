---
url: ml-skills/the-ultimate-machine-learning-system/data-engineering-part-4-sampling
layout: post
---

![sampling][sampling]

In the previous post, we covered how to deal with some data issues, and how to perform feature engineering. In this post, we discuss about some techniques to sample a good training data and some issues related to data sampling.

## Sampling

Sampling is an important part of the ML workflow especially when we don't have access to all possible data in the real world, or we don't have enough computing resources to use all the data for training process.

There are two types of sampling including non-probability sampling and random sampling.

### Non-probability sampling

In non-probability sampling, the selection of data isn't based on any probability criteria. The result data usually doesn't represent the real-world data and cause selection bias. There are some common techniques such as.

- Convenience sampling: samples are selected based on their availability
- Snowball sampling: future samples are selected based on the existing samples
- Judgement sampling: some experts decide what samples to include
- Quota sampling: samples are selected based on quotas for certain slices of data without any randomization

### Random sampling

**Simple random sampling**: In this simple method, we select equally k% of all examples. This method is easy to implement, but the rare classes might not appear in the selection.

**Stratified sampling**: This method divides samples to different groups, then selects equally k% from each class. The groups might be gender, category, age, etc. This method cannot handle the case that one sample might belong to multiple groups.

**Weighted sampling**: This method gives each sample a weight to be selected. E.g. if recent data is more valuable, we give it a higher weight.

**Importance sampling**: This method is common in reinforcement learning.

**Reservoir sampling**: This method deals with continually incoming data like streaming data. When a new sample come, we swap it with a random sample in our `N`-sample set with the probability of `1/N`.

## Data leakage

There are two types of data leakage including feature leakage and training data leakage.

**Feature leakage**: some form of label _leaks_ into the features.

**Training data leakage**: There are some sources that cause this issue such as.

- Premature featurization: create feature on the entire dataset instead of just training data
- Oversampling before splits: train splits might contain test samples
- Time leakage: randomly splitting data instead of temporal split can cause training data to be able to see the future
- Group leakage: A patient has 3 CT scans. 2 of them are in the training set, the last one is in the test set

**Solutions**: There are some solutions to fix the data leakage issues such as.

- Check for duplication between train and valid/test splits
- Temporal split data if possible
- Use only train splits for feature engineering
- Measure correlation between features and labels
- Train model on subset of features. If model's performance is very high on a subset, either the features are superb or there's a feature leakage issue.
- Monitor model's performance as more features are added. If model's performance suddenly increases, either the features are superb or there's a feature leakage issue.
- Involve Subject Matter Experts in the feature engineering and sampling processes

## Imbalanced data

![balance][balance]

The imbalanced data issue causes some consequences such as.

- Insufficient signal: if the number of minority-class samples is low, the problem becomes one of few-shot learning on minority-class samples
- _Satisfactory_ defaults: by learning from the majority-class samples, model can obtain low loss and high accuracy, while learning relatively little about the underlying structure of data
- Asymmetric cost of error: the human cost of misclassifying a minority class may be asymmetrically great

Some sources of error might be.

- Sampling bias: the way dataset was constructed excludes certain cases
- Domain specific: labels are just very rare given the domain in which the model is operating
- Labeling errors: this is less common

### How to deal with imbalanced data

Class imbalance for binary problem is much easier to deal with than the problems with more than two classes. Some people argue that you shouldn't fix this issue if that is how the data is in real world, and a good model should learn to work with that. Despite of that argument, we have some techniques to deal with this issue.

**Resampling**: add more minority samples or remove majority samples

- Undersampling: remove majority samples. This might cause the losing of important data. E.g. Tomek Links find pairs of samples from opposite classes that are close in proximity, and remove the sample of majority class in each pair
- Oversampling: add more minority samples. E.g. SMOTE combines existing minority-class data points linearly

**Weight balacing**: give higher weight for wrong prediction in loss function

- Biasing toward rare classes: the weight of a class is inversely proportional to the number of samples in that class, so that the rarer classes have higher weights
- Biasing toward difficult samples: adjust the loss function so that if a sample has a lower probability of being right, it'll have a higher weight

**Ensembles**: choose algorithm more robust to class imbalance

- Bagging: reduces variance and helps to avoid overfitting
- Boosting: converts weak learners to strong ones

<!-- MARKDOWN LINKS & IMAGES -->

[sampling]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-4-sampling/sampling.jpg
[balance]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-4-sampling/balance.jpg