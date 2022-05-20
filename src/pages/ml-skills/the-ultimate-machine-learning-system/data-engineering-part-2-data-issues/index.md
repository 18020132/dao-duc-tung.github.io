---
url: ml-skills/the-ultimate-machine-learning-system/data-engineering-part-2-data-issues
layout: post
---

![data-issues][data-issues]

There're some known issues of data quality such as.

- Common issues: consistency, accuracy, noisy data, missing data, bias, correlated data
- Labeling issues

This post will discuss and describe the solution to deal with them.

<toc>

## Common issues

**Consistency**: There are some examples about the inconsistency of data as below.

- Typo: _Njce to m33t you_, _H e l l o_, _heLLo_
- Different languages: _thank you_, _merci_
- Different scales/units: _10 cm_, _10 ft_, _10 km/h_
- Mixed types: _10 cats_, _10h_

**Accuracy**: The sources that cause the data accuracy issue might be the method we use to collect the data or the features, the labels we assign to samples, or the function we write to perform feature engineering, etc.

**Noisy data**: An example of noisy data is the outliers.

**Bias data**: There are different sources that cause the bias data. They might be sampling/selection biases, under/over-representation of some subgroups, human biases embedded in historical data, or labeling biases, etc.

**Correlated data**: Highly correlated features can cause collinearity problems and numerical instability.

**Missing data**: Some features of some samples miss the value.

### How to deal with common data issues

**Sanitize data**: The first thing we should do is using descriptive statistics to gain insights into our data so that we can more effectively clean data later. Some overall statistics:

- Number of rows (instances/data points)
- Number of columns (features/attributes)

These information indicates whether you have too many features, which might lead to high dimensionality and overfit problems.

**Attribute statistics**: Attribute statistics include the following properties of each attribute:

- Mean
- Standard deviation
- Variance
- Minimum value
- Maximum value

These properties help you to get a better sense of the shape of attributes. This step helps you to detect the missing values, check the data consistency and the data bias issues.

**Multivariate statistics**: Multivariate statistics deal with correlations and relationships between the attributes. High correlation between two attributes can cause collinearity problems and numerical instability. This step helps you to detect the correlated data issue.

- **Numerical variables' relationships**: Using scatter plot is a good visualization to spot special relationships among numerical variables. For example, the image below shows strong linear relationships between `Area` and `Lot Size`, between `Area` and `Price`.

![numerical-variables-relationships][numerical-variables-relationships]

- **Correlation matrices**: Using scatter plot to visualize numerical variables' linear relationships. But to quantify these linear relationships, we use correlation matrix to convey both the strong and weak linear relationships among those variables. For example, if the correlation is zero, there's no linear relationship, but there still might be non-linear relationship.

![correlation-matrix][correlation-matrix]

**Clean data**: After we have an overall understanding about the data, it's time to take a closer look and clean it. This step deals with the data consistency, noisy data, and missing data issues.

For data inconsistency, you might need to write some custom scripts to fix this. For noisy data, you might not want to remove the outliers because they might imply some hidden features. For missing data, solutions might be:

- Drop rows: may lose too much data -> cause overfitting
- Drop columns: may lose information in features -> cause underfitting
- Replace values by column mean, median, zero, most frequent value, other estimated value, or imputation method like _MICEImputer_ from `sklearn`, `fancyimpute` python package, etc.
- Before performing above methods, you should ask yourself:
  - What were the mechanisms that caused the missing values?
  - Are these missing values missing at random?
  - Are there rows or columns missing that you are not aware of?

**Visualization**: Visualizing data helps you better understand features and relationships among them. Visualization should be done during the sanitizing and feature engineering processes. Visualization helps you answer questions such as:

- What's the range of the data?
- What's the peak of the data?
- Are there any outliers?
- Are there any interesting patterns in the data?
- Should we sanitize/clean/preprocess this and that features?

Visualization techniques include visualizing averages and summary statistics using

- Line charts
- Scatter plots
- Box plots
- Histograms
- Correlation matrix
- Heatmaps
- Confusion matrix
- etc.

## Labeling issue

![labeling-issue][labeling-issue]

Despite the promise of unsupervised ML, most ML models today still need labels to learn. The performance of an ML model depends heavily on the quality and quantity of labels it's trained on. Today in this post, we will discuss about the data labeling topic.

### Challenges of hand labels

- Expensive
- Violate strict privacy requirements if someone has to look at your data
- Slow as it's on a linear scale
- Aren't adaptive: when the task changes or data changes, we need to relabel
- etc.

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

**Semi-supervised learning**: This method starts with a small set of labels and use structural assumptions to generate more labels. For examples: hashtag #AI, #ML refer to Computer Science.

**Weak supervision**: We can use labeling function which is a function that encodes subject matter expertise with tools such as Snorkel.

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

**Transfer learning**: This method applies the model trained for one task to another task. It might or might not require fine-tuning (gradient updates). For examples: Fine-tune a model trained on language modling to make it do sentiment analysis.

**Active learning**: Active learning still requires hand labels, but instead of randomly labeling a subset of data, you label the samples that are most helpful to your model. Check the image below for more details.

![active-learning][active-learning]

## Ending

In this post, we covered some common data issues and some solutions to solve them. In reality, you might need to consider whether you want to solve some issues or you might even need to train some ML models with bad data to create some baselines. This really depends on the project and on your experience.

<!-- MARKDOWN LINKS & IMAGES -->

[data-issues]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-2-data-issues/data-issues.jpg
[numerical-variables-relationships]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-2-data-issues/numerical-variables-relationships.png
[correlation-matrix]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-2-data-issues/correlation-matrix.png
[labeling-issue]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-2-data-issues/labeling-issue.jpg
[get-more-labeled-training-data]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-2-data-issues/get-more-labeled-training-data.png
[active-learning]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-2-data-issues/active-learning.png
