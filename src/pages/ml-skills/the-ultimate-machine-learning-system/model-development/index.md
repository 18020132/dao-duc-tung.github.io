---
url: ml-skills/the-ultimate-machine-learning-system/model-development
layout: post
---

![coding][coding]

Model development is the third phase of the ML lifecycle where we build the ML models for our problems and evaluate their performances.

<toc>

## Select models

This part focuses on mapping our ML problems to appropriate ML algorithms.

### Classification problem

On the one hand, the answer to the binary classification problems falls into one of two categories. On the other hand, the multiclass classification problems' answer might fall into one of three or more categories. Both of these ML problems represent classification problems.

SageMaker provides a few built-in algorithms for these problems such as Linear Learner, XGBoost, and kNN. To learn more, please refer to:

- [Amazon SageMaker Workshop](https://sagemaker-workshop.com/)
- [SageMaker Immersion Day](https://catalog.us-east-1.prod.workshops.aws/v2/workshops/63069e26-921c-4ce1-9cc7-dd882ff62575/en-US/)
- [Another Amazon Sagemaker Workshop](https://www.sagemakerworkshop.com/)
- [Amazon SageMaker Examples](https://github.com/aws/amazon-sagemaker-examples)

### Regression problem

In a regression problem, you're mapping an input to a continuous value.

SageMaker provides similar built-in algorithms like Linear Learner and XGBoost. The difference is that you set the hyperparameter to direct these algorithms to produce quantitative results.

### Natural Language Processing

There are SageMaker built-in algorithms for NLP such as:

- BlazingText: provides highly-optimized implementations of the Word2Vec and text classification algorithms
- Sequence2Sequence: has the input as a sequence of tokens (for example, text, audio) and generates the output as another sequence of tokens
- Object2Vec: generalizes the well-known Word2Vec embedding technique for words

### Computer Vision

There are SageMaker built-in algorithms for computer vision:

- Image classification: classifies images
- Object detection: identifies all instances of objects within the image scene
- Semantic segmentation: classifies every pixel in an image to a class label from a predefined set of classes

### Other options

There are other options for training algorithms:

- Use Apache Spark with Amazon SageMaker
- Use custom code with a deep learning framework like TensorFlow or Apache MXNet
- Use a custom algorithm in a Docker image
- Use an algorithm from AWS Marketplace

## Train models

![model-development][model-development]

Training, tuning, and evaluation is iterative process. You can use SageMaker to create the training job. To learn more, take the above SageMaker workshops.

### Split data

Firstly, we need to split the data to ensure the division between the training and evaluation efforts. A common strategy is to split data into training, validation, and testing subsets with a common ratio of 80:10:10 or 75:15:15.

Cross-validation is another technique to compare multiple models' performance. The goal is to choose the model that will eventually perform the best in production.

k-fold cross-validation is a common validation method. In k-fold cross-validation, you split the input data into k subsets of data so-called folds. You train your models on all but one (k-1) of the subsets and then evaluate them on the subset that was not used for training. This process is repeated k times, with a different subset reserved for evaluation (and excluded from training) each time.

![k-fold-cross-validation][k-fold-cross-validation]

If you have a small dataset, consider leave-one-out cross-validation (LOOCV), which is k-fold cross-validation where k is set to the number of examples in the dataset. Learn more about LOOCV [here](https://machinelearningmastery.com/loocv-for-evaluating-machine-learning-algorithms/).

If you have imbalanced data, consider Stratified k-fold cross-validation where the distribution of classes in each fold is kept. Learn more [here](https://machinelearningmastery.com/cross-validation-for-imbalanced-classification/).

> Cross-validation techniques will increase the computational power needed for your training.

## Optimize hyperparameters

To find the right model, we usually have to tune our model after training by performing additional feature engineering, experimenting with new algorithms, etc., by training and evaluating multiple models that use different data setup and algorithms. This model tuning also involves modifying the model's hyperparameters.

Hyperparameters are settings that can be tuned before running a training job to control the behavior of an ML algorithm. They can have a big impact on model training as it relates to training time, model convergence, and model accuracy. Unlike model parameters that are derived from the training job, the values of hyperparameters do not change during the training.

There are different categories of hyperparameters such as:

- **Model hyperparameters**: define the model itself. For example, attributes of a neural network architecture like filter size, pooling, stride, padding
- **Optimizer hyperparameters**: are related to how the model learns the patterns based on data and are used for a neural network model. For example, optimizers like gradient descent, stochastic gradient descent, Adam, Xavier initialization, He initialization, etc.
- **Data hyperparameters**: are related to the attributes of the data, often used when you don't have enough data or enough variation in data. For example, data augmentation techniques like cropping, resizing

Traditionally, this was done manually. Someone who has domain experience related to that hyperparameter and the use case would manually select the hyperparameters based on their intuition and experience. Then they would train the model and score it on the validation data. This process would be repeated over and over again until satisfactory results are achieved. As a result, several other methods for hyperparameter tuning have been developed.

Alternatively, SageMaker offers automated hyperparameter tuning, which uses methods like gradient descent, Bayesian optimization, and evolutionary algorithms to conduct a guided search for the best hyperparameter settings, by running many training jobs on your dataset using the algorithm and ranges of hyperparameters that you specify. To learn more, take the above SageMaker workshops.

## Evaluate models

Once you have trained, tuned your models, and decided which model is the best for your problem, it's time to evaluate that model on the test set that you split earlier.

For classification problems, a confusion matrix is the building block for your model evaluation with derived metrics like:

- Precision
- Recall
- Accuracy
- F1-score
- Area under the curve: Receiver operator curve (AUC-ROC)

For regression problems, you can use:

- Sum of squared errors
- RMSE

<!-- MARKDOWN LINKS & IMAGES -->

[coding]: /assets/images/ml-skills/the-ultimate-machine-learning-system/model-development/coding.jpg
[model-development]: /assets/images/ml-skills/the-ultimate-machine-learning-system/model-development/model-development.png
[k-fold-cross-validation]: /assets/images/ml-skills/the-ultimate-machine-learning-system/model-development/k-fold-cross-validation.png
