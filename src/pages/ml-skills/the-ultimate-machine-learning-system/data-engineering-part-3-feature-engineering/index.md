---
url: ml-skills/the-ultimate-machine-learning-system/data-engineering-part-3-feature-engineering
layout: post
---

![understand][understand]

After cleaning, we need to create new features from the original ones to give the ML model strong prediction power. You need to perform feature engineering because of the dimensionality of your dataset, especially when there are too many features. Please refer to [this board](https://whimsical.com/cs-329s-machine-learning-systems-design-note-E7oPi8C6VUU89j8yPJdgzK@7YNFXnKbZALHYHhFdywLJ) for an overview of Feature Engineering.

<toc>

## Feature engineering

There're two feature engineering types: _Feature Selection_ and _Feature Extraction_. Both are used to reduce the dimensionality of the feature space.

- Feature selection: use algorithms to remove some features from the model (e.g., transform, linear or non-linear combination, etc.)
- Feature extraction: use algorithms to combine original features to generate a set of new features, and the number of new features to be used in the model is less than the number of original features

There're some common techniques such as Filtering, Scaling, and Transformation.

### Filtering

Filtering is the process of selecting relevant features. For example, removing channels from an image if color is not essential, removing frequencies from audio if the power is less than a threshold.

### Scaling

On the one hand, many algorithms are sensitive to features being on different scales, e.g., for gradient descent and kNN, we need to scale all features to one range. On the other hand, some algorithms like decision trees, random forests, aren't sensitive to features on different scales. Note that we only fit the scaler to training data, then transform both train and validation data.

There're common choices such as Normalization and Scaling methods. Scaling is for columns, and normalization is for each row independently.

#### Normalization methods

- Normalizer: divide features at `cell(x, y)` by the standard deviation of col `y`
- Pros: widely used in text analysis

#### Scaling methods

| Method                        | Description                                                                            | Pros                                                                                             |
| ----------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Mean/variance standardization | Most popular, scale values to center them around `mean=0`, with `standard deviation=1` | Many algorithms behave better with smaller values; keeps outlier information, but reduce impact  |
| MinMaxScaling                 | Scale values o that `min=0`, `max=1`                                                   | Robust to small standard deviations                                                              |
| Maxabs scaling                | Divide features by `max(abs(features))`                                                | Doesn't destroy sparsity because we don't center the data thru any measurement, we just scale it |
| Robust scaling                | Read in sklearn                                                                        | Robust to outliers, because outliers will have minimal impact when computing median and quantize |

### Transformation

| Method                    | Description                                                                                           | Note                                                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Polynomial transformation | Generate more features                                                                                | Beware of overfitting if the degree is too high; Consider non-polynomial transformations as well: Log transforms, sigmoid transforms |
| Radial basis function     | Transform original data through a center                                                              | Gaussian-based radial basis function is widely used in SVM, radial basis neural networks.                                            |
| Numeric Value Binning     | To introduce non-linearity into linear models, intelligently break up continuous values using binning |                                                                                                                                      |
| Quadratic features        | Derive non-linear features by combining feature pairs                                                 |                                                                                                                                      |
| Tree path features        | Use leaves of the decision tree as features                                                           |                                                                                                                                      |

### Other techniques

There're some other techniques to consider:

- For binary categorical variable: `Yes/No` -> `1/0`
- For general numerical variables: Use the above numeric value binding to split them into `Small`, `Medium`, `Large` bins and map them to `5`, `10`, and `20` numbers, respectively. These numbers are derived from your business insight.
- For nominal variables like object types: Use one-hot encoding

### The more, the better?

Adding more features tends to improve model performance. But sometimes it leads to some problems:

- Overfitting
- Too many features make the model hard to maintain
- Label leaking: The more feature engineering you do, the more chance for labels to leak. For example, feature A doesn't cause leakage, but `A + B` can cause leakage

The solutions might be:

- Clean up features that are no longer relevant
- Store them in case you want to reuse them

### Rules of thumb

There're some rules of thumb when you perform feature engineering, such as:

- Use your intuition
- Try to generate many features first, then apply dimensionality reduction
- Use non-linear transformation: `square`, `cube`, etc.
- Combine features: `x\*y`, `x+y`, etc.
- Try not to overthink
- Don't include too much manual logic because it will be too difficult to maintain

## Data augmentation

The goals of data augmentation are:

- To improve the model's overall performance or on certain classes
- To generalize the model better
- To enforce certain behaviors of the model

Some examples of text augmentation:

- Replace words with `[MASK]` token
- Replace words with a random word
- Keep words unchanged -> to bias the representation towards the actual observed words

Some examples of image augmentation:

- Basic image manipulation
  - Kernel filters: Gaussian, Sobel, etc.
  - Random erasing, cropping, etc.
  - Geometric transformations: translation, rotation, flipping, warping, etc.
  - Image properties adjustment: brightness, contrast, color space, etc.
  - Mixing images: 70% dog, 30% cat -> label 3.3
- Deep learning approaches
  - Adversarial training
  - Neural style transfer
  - GAN data augmentation

## Ending

Feature engineering is an art. Sometimes we need some levels of experience to select features. Sometimes we even need to borrow some terms from other fields like mechanical engineering or electronic engineering to generate unique, meaningful features such as homogeneous transformation matrix, Euler angles, etc.

<!-- MARKDOWN LINKS & IMAGES -->

[understand]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-3-feature-engineering/understand.jpg
