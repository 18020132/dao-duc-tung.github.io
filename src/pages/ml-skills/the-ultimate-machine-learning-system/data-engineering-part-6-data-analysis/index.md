---
url: ml-skills/the-ultimate-machine-learning-system/data-engineering-part-6-data-analysis
layout: post
---

![understand][understand]

After the data is ingested, transformed, and stored in a centralized repository, it's now ready for the data analysis phase. In order to understand the data, we need to solve some data problems such as missing, noisy, biased, and imbalanced. This post will cover the topic **Data Analysis** where we try to sanitize data, clean data, perform feature engineering, and visualize data to understand it.

<toc>

## Sanitize data

The first thing we should do is using descriptive statistics to gain insights into our data so that we can more effectively clean data later.

### Overall statistics

Overall statistics include:

- Number of rows (instances/data points)
- Number of columns (features/attributes)

These information indicates whether you have too many features, which might lead to high dimensionality and overfit problems.

### Attribute statistics

Attribute statistics include the following properties of each attribute:

- Mean
- Standard deviation
- Variance
- Minimum value
- Maximum value

These properties help you to get a better sense of the shape of attributes.

### Multivariate statistics

Multivariate statistics deal with correlations and relationships between the attributes. High correlation between two attributes can cause collinearity problems and numerical instability.

#### Numerical variables' relationships

Using scatter plot is a good visualization to spot special relationships among numerical variables. For example, the image below shows strong linear relationships between `Area` and `Lot Size`, between `Area` and `Price`.

![numerical-variables-relationships][numerical-variables-relationships]

#### Correlation matrices

Using scatter plot to visualize numerical variables' linear relationships. But to quantify these linear relationships, we use correlation matrix to convey both the strong and weak linear relationships among those variables. For example, if the correlation is zero, there's no linear relationship, but there still might be non-linear relationship.

![correlation-matrix][correlation-matrix]

## Clean data

After we have an overall understanding about the data, it's time to take a closer look and clean it.

Your data can be messy in some ways:

- Different language
- Special characters in some words: Njce to m33t you
- Lot of space between words: H e l l o
- Capital characters: Hello, heLLo
- Different scales: 40km, 10m, 2in
- Mixed types: 20, 5h45, 300m/s
- Outliers: Not always you want to clean up
- Missing data: solutions might be:
  - Drop rows
  - Drop columns
  - Replace values by column mean, zero, or other value using imputation

Make sure to standardize your data if your model requires to solve those problems.

## Feature engineering

After cleaning, we need to create new features from the original ones to give the ML model strong prediction power. You need to perform feature engineering because of the dimensionality of your dataset, especially when there're too many features. Please refer to [this board](https://whimsical.com/cs-329s-machine-learning-systems-design-note-E7oPi8C6VUU89j8yPJdgzK@7YNFXnKbZALHYHhFdywLJ) for an overview of Feature Engineering.

There're two types of feature engineering which are _Feature Selection_ and _Feature Extraction_. Both are used to reduce the dimensionality of the feature space.

- Feature selection: use algorithms to remove some features from the model (e.g: transform, linear or non-linear combination, etc.)
- Feature extraction: use algorithms to combine original features to generate a set of new features, and the number of new features to be used in the model is less than the number of original features

There're some common techniques such as Filtering, Scaling, and Transformation.

### Filtering

Filtering is the process of selecting relevant features. For example, removing channels from an image if color is not important, removing frequencies from audio if the power is less than a threshold.

### Scaling

On the one hand, many algorithms are sensitive to features being on different scales, e.g: for gradient descent and kNN, we need to scale all features to one range. On the other hand, some algorihtms like decision trees, random forests, aren't sensitive to features on different scales. Note that we fit the scaler to training data only, then transform both train and validation data.

There're common choices such as Normalization and Scaling methods. Scaling is for columns, normalization is for each row independently.

#### Normalization methods

- Normalizer: divide features at `cell(x, y)` by standard deviation of col `y`
- Pros: widely used in text analysis

#### Scaling methods

| Method                        | Description                                                                            | Pros                                                                                              |
| ----------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Mean/variance standardization | Most popular, scale values to center them around `mean=0`, with `standard deviation=1` | Many algorithms behave better with smaller values; keeps outlier information, but reduces impact  |
| MinMaxScaling                 | Scale values o that `min=0`, `max=1`                                                   | Robust to small standard deviations                                                               |
| Maxabs scaling                | Divide features by `max(abs(features))`                                                | Doesn't destroy sparsity, because we don't center the data thru any measurement, we just scale it |
| Robust scaling                | Read in sklearn                                                                        | Robust to outliers, because outliers will have minimal impact when computing median and quantize  |

### Transformation

| Method                    | Description                                                                                           | Note                                                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Polynomial transformation | Generate more features                                                                                | Beware of overfitting if the degree is too high; Consider non-polynomial transformations as well: Log transforms, sigmoid transforms |
| Radial basis function     | Transform original data through a center                                                              | Gaussian-based radial basis function is widely used in SVM, radial basis neural networks.                                            |
| Numeric Value Binning     | To introduce non-linearity into linear models, intelligently break up continuous values using binning |                                                                                                                                      |
| Quadratic features        | Derive non-linear features by combining feature pairs                                                 |                                                                                                                                      |
| Tree path features        | Use leaves of decision tree as features                                                               |                                                                                                                                      |

### Other techniques

There're some other techniques to consider:

- For binary categorical variable: `Yes/No` -> `1/0`
- For general numerical variables: Use above numeric value binding to split them into Small, Medium, Large bins and map them to 5, 10, 20 numbers respectively. These numbers are derived from your business insight.
- For nominal variables like object types: Use one-hot encoding

### The more the better?

Adding more features tends to improve model performance. But sometimes it leads to some problems:

- Overfitting
- Too many features makes model hard to maintain
- Label leaking: The more feature engineering you do, the more chance for labels to leak. For example, feature A doesn't cause leakage, but A + B can cause leakage

The solutions might be:

- Clean up features that are no longer relevant
- Store them in case you want to reuse them

### Rules of thumb

There're some rules of thumb when you perform feature engineering such as:

- Use your intuition
- Try to generate many features first, then apply dimensionality reduction
- Use non-linear transformation: square, cube, etc.
- Combine features: x\*y, x+y, etc.
- Try not to overthink
- Don't include too many manual logic because it will be too difficult to maintain

## Visualization

Visualizing data helps you better understand features and relationships among them. Visualization should be done during the sanitizing and feature engineering processes. Visualization helps you answer questions such as:

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
- Etc.

<!-- MARKDOWN LINKS & IMAGES -->

[understand]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-6-data-analysis/understand.jpg
[numerical-variables-relationships]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-6-data-analysis/numerical-variables-relationships.png
[correlation-matrix]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-6-data-analysis/correlation-matrix.png
