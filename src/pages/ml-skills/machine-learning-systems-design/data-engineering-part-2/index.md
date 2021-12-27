---
url: ml-skills/machine-learning-systems-design/data-engineering-part-2
layout: post
---

![matrix][matrix]

## Common issues of data quality

There're some known issues of data quality that we need to deal with.

- Consistency of the data: Is the data we're using consistent with the problem we want to solve? E.g. Different languages, different scales/units, mixed type
- Accuracy of the data: Are features, labels, methods to collect data correct?
- Noisy data: How to remove noise from the input, output?
- Missing data: How to deal with missing data?
- Outliers in the data: How to detect and deal with outliers?
- Correlated: Highly correlated features can cause collinearity problems and numerical instability
- Bias: Sampling/selection biases, Under/over-representation of subgroups, Human biases embedded in historical data, Labeling biases
- Variance, etc.

## Labeling

Despite the promise of unsupervised ML, most ML models today still need labels to learn. The performance of an ML model depends heavily on the quality and quantity of labels it's trained on.

### Challenges of hand labels

- Expensive
- Violate strict privacy requirements if someone has to look at your data
- Slow as it's on a linear scale
- Aren't adaptive: when the task changes or data changes, we need to relabel
- Etc.

### Label multiplicity

To obtain a large quantity of labels, companies use data from multiple sources and rely on multiple annotators. Using them indiscriminately without examining them can cause your model to fail mysteriously. Some problems are:

- Different label sources and different annotators lead to different levels of accuracy
- Different annotators lead to different levels of expertise which causes label ambiguity
- More data isn't always better. E.g. new data has is less accurate than original data

Some solutions:

- Need to have a clear problem definition
- Provide annotation training
- Data lineage: need to track where data/labels come from

### Deal with the lack of labels

![get-more-labeled-training-data][get-more-labeled-training-data]

#### Semi-supervised learning

This method starts with a small set of labels and use structural assumptions to generate more labels. For examples: hashtag #AI, #ML refer to Computer Science.

#### Weak supervision

We can use labeling function which is a function that encodes subject matter expertise with tools such as Snorkel.

```python
def labeling_function(note):
    if "cancer" in note:
	    return "HIGH"
```

The table below compares hand labeling and programmatic methods.

|              | Hand labeling                                               | Programmatic labeling                                                                                                  |
| ------------ | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Cost         | Expensive: esp. when subject matter expertise required      | Cost saving: Expertise can be versioned, shared, reused across organization                                            |
| Privacy      | Non-private: Need to ship data to human annotators          | Private: Create LFs using a cleared data subsample then apply LFs to other data without looking at individual samples. |
| Scalability  | Slow: Time required scales linearly with # labels needed    | Fast: Easily scale 1K -> 1M samples                                                                                    |
| Adaptability | Non-adaptive: Every change requires re-labeling the dataset | Adaptive: When changes happen, just reapply LFs!                                                                       |

#### Transfer learning

This method applies the model trained for one task to another task. It might or might not require fine-tuning (gradient updates). For examples: Fine-tune a model trained on language modling to make it do sentiment analysis.

#### Active learning

Active learning still requires hand labels, but instead of randomly labeling a subset of data, you label the samples that are most helpful to your model. Check the image below for more details.

![active-learning][active-learning]

<!-- MARKDOWN LINKS & IMAGES -->

[matrix]: /assets/images/ml-skills/machine-learning-systems-design/data-engineering-part-2/matrix.jpg
[get-more-labeled-training-data]: /assets/images/ml-skills/machine-learning-systems-design/data-engineering-part-2/get-more-labeled-training-data.png
[active-learning]: /assets/images/ml-skills/machine-learning-systems-design/data-engineering-part-2/active-learning.png
