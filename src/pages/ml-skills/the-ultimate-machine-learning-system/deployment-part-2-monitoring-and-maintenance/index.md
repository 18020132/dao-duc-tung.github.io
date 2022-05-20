---
url: ml-skills/the-ultimate-machine-learning-system/deployment-part-2-monitoring-and-maintenance
layout: post
---

![monitoring][monitoring]

Deploying a model is not the end of the process. The model's performance degrades over time in production. We have to continually monitor the model's performance to detect issues and deploy updates to fix them.

> Monitoring tracks statistics about an ML system to understand its environment and behavior.

> Maintenance updates a deployed ML system to improve performance or correct for failure.

<toc>

## Causes of ML system failures

A failure happens when one or more expectations of the system are violated. In traditional software, we care about the system's operational metrics. For an ML system, we care about both its operational metrics and its ML performance metrics. Operational expectation violations are easier to detect as they are usually associated with a breakage such as a timeout, 404 error, segmentation fault, etc. ML performance expectation violations are harder to detect as it requires measuring and monitoring the model's performance in production.

Below are some examples of software system failures.

- Dependency failure: a software package that the system depends on breaks.
- Deployment failure: deployment errors happen when deploying a new version. Eg: permission errors.
- Hardware failure: CPU overheats and breaks down
- Downtime or crashing: the server is down

Most of the issues are related to distributed systems (where the workflow scheduler or orchestrator makes a mistake), or related to the data pipeline (where data from multiple sources is joined incorrectly or the wrong data structure is being used). Watch [this video](https://www.youtube.com/watch?v=hBMHohkRgAA) for more details.

Some examples of ML-specific failures are data collection and data processing problems, poor hyperparameters, changes in the training pipeline not correctly replicated in the inference pipeline and vice versa, data distribution shifts that cause the model's performance to degrade over time, edge cases, and degenerate feedback loops, etc.

## Data distribution shifts

Data distribution shifts or data shifts refer to the phenomenon in supervised learning when the data changes over time, which causes the model's predictions to become less accurate as time passes. The training data's distribution is called the source distribution. The inference's data distribution in production is called the target distribution.

Given a model's inputs X and its outputs Y. In supervised learning, the training data can be viewed as a set of samples from the joint distribution `P(X, Y)`, and then ML usually models `P(Y|X)`. This joint distribution `P(X, Y)` can be decomposed in two ways:

1. `P(X, Y) = P(Y|X).P(X)`
1. `P(X, Y) = P(X|Y).P(Y)`

`P(Y|X)` denotes the conditional probability of output given an input. For example, the probability of an email being spam given the content of the email. `P(X)` denotes the probability density of the input. `P(Y)` denotes the probability density of the output. Label shift, covariate shift, and concept drift are defined as follows.

- Covariate shift is when `P(X)` changes, but `P(Y|X)` remains the same. This refers to the first decomposition of the joint distribution.
- Label shift is when `P(Y)` changes, but `P(X|Y)` remains the same. This refers to the second decomposition of the joint distribution.
- Concept drift is when `P(Y|X)` changes, but `P(X)` remains the same. This refers to the first decomposition of the joint distribution.

For more details about label shift, covariate shift, concept drift, and handling data shifts, please refer to this [Google docs file](https://docs.google.com/document/d/14uX2m9q7BUn_mgnM3h6if-s-r0MZrvDb-ZHNjgA1Uyo/edit#).

## Edge cases

An ML model that performs well in most cases but fails in a small number of cases might not be usable if these failures cause catastrophic consequences. Edge cases are the data samples so extreme that they cause the model to make catastrophic mistakes.

Outliers refer to data: an example that differs significantly from other examples. Edge cases refer to performance: an example where a model performs significantly worse than other examples. An outlier can cause a model to perform poorly, which makes it an edge case. However, not all outliers are edge cases. A person jay-walking on a highway is an outlier, but it's not an edge case if the self-driving car can accurately detect that person and decide on a motion response appropriately.

In many cases, it might be beneficial to remove outliers to help the model to learn better decision boundaries and generalize better to unseen data. However, during inference, we don't have the option to remove or ignore the queries that differ significantly from other queries. We can choose to transform it e.g. "mechin learnin" to "machine learning". But most likely, we want to develop a model to perform well even on unexpected inputs.

## Degenerate feedback loop

Natural labels are ideal for evaluating a model's performance. However, even if the problem doesn't have natural labels, it's possible to set up the system to collect some feedback on the model. For example, asking users to submit feedback for the predictions, adding the like button to the newsfeed ranked items, etc.

For tasks with natural ground truth labels, the time it takes from when a prediction is served until the feedback is provided is the feedback loop length. A short feedback loop can be within minutes. The long one can be in hours, weeks, or months. Labels with long feedback loops help report the model's performance quarterly or yearly. However, they are not useful if we want to detect issues as soon as possible. For example, fraud detection.

There's no guarantee that users will respond to the recommended items in a recommendation system. Typically, a recommendation is presumed to be bad if there's a lack of positive feedback. Choosing the right window length requires thorough consideration, as it involves the speed and accuracy tradeoff.

A degenerate feedback loop happens when the predictions themselves influence the feedback, which is then used to extract labels to train the next iteration of the model. Degenerate feedback loops are common in tasks in natural labels from users, such as recommendation systems and ad click-through-rate prediction.

### Detecting degenerate feedback loops

For the task of recommendation systems, we can measure the popularity diversity of a system's outputs even when the system is offline. An item's popularity can be measured based on how many times it has interacted with in the past. The popularity of all the items will likely follow a long tail distribution: a small number of items interact with a lot while most items are rarely interacted with.

### Correcting degenerate feedback loops

The first method is to use randomization. Degenerate feedback loops can cause a system's outputs to be more homogeneous over time. Adding randomization to predictions can reduce their homogeneity. For example, instead of showing the users only the top-ranked items, we show users random items and use their feedback to determine the true quality of these items. Randomization improves diversity but at the cost of user experience. Showing users random items might cause users to lose interest in the product.

The second method is to use positional features. If the position in which a prediction is shown affects its feedback, we might want to encode the position information using positional features. During the inference, we want to predict whether a user will click on an item regardless of where the item is located.

## Monitoring and observability

![observe][observe]

Monitoring refers to the act of tracking, measuring, and logging metrics to determine when something goes wrong. Observability means setting up the system to help us easily investigate what went wrong. The process of setting up the system is called "instrumentation". Examples of instrumentation are adding timers to functions, counting NaNs in features, tracking how inputs are transformed through the system, logging unusual events such as unusually long inputs, etc. Observability is a part of monitoring.

### Monitoring

In monitoring, we want to monitor the operational metrics and ML-specific metrics. The operational metrics are divided into three levels: the network, the computing machine, and the application. Examples of these metrics are latency, throughput, the number of prediction requests the model receives in the last minute, the percentage of requests that return with a 2XX code, CPU/GPU/memory utilization, etc.

For ML-specific metrics, there are four artifacts to monitor: the model's accuracy-related metrics, predictions, features, and raw inputs. These are artifacts generated at four different stages of an ML system pipeline. The deeper into the pipeline an artifact, the more transformations it has gone through, which makes a change in that artifact more likely to be caused by errors in one of those transformations. However, the more transformations an artifact has gone through, the more structured it becomes and the closer it is to the metrics we actually care about, which makes it easier to monitor.

- Accuracy-related metrics: click, purchase, upvote, downvote, favorite, bookmark, share, duration of time users spend on a video, whether users complete watching a video, etc.
- Predictions: for distribution shifts
- Features: for checking feature validation (min, max, median, format, values in the range, etc.), for checking feature distribution shifts
- Raw inputs: can come from multiple sources, might not be able to get raw inputs because it's often managed by a data platform team that moves data to a data warehouse.

#### Monitoring toolbox

A set of the right tools helps us to measure, track, and make sense of metrics for the complex system. From the perspective of users of the monitoring systems, the common tools are logs, dashboards, and alerts.

- Logs: traditional software systems rely on logs to record events produced at runtime.
- Dashboards: visualizing a series of numbers on a graph might reveal the relationships among them.
- Alerts: alert the right people about something suspicious. An alert consists of three components.
  - Alert policy: describes the condition for an alert.
  - Notification channels: describe who is to be notified when the condition is met.
  - Alert description: helps the alerted person understand what's going on.

### Observability

Monitoring does not assume the relationship between the internal state of a system and its outputs. There's no guarantee that the external outputs will help us to figure out _what_ goes wrong. Observability is a concept drawn from control theory and refers to bringing better _visibility into understanding the complex behavior of software using outputs collected from the system at run time_. When something goes wrong with an observable system, we should be able to figure out what went wrong by looking at the system's logs and metrics without having to ship new code to the system.

Telemetry is a system's outputs collected at run time. The word "telemetry" comes from the Greek roots "tele" meaning "remote", and "metron", meaning "measure". So telemetry means "remote measures". In the monitoring context, it refers to logs and metrics collected from remote components such as cloud services or applications run on customer devices.

In ML, observability encompasses interpretability. Interpretability helps us understand how an ML model works, and observability helps us understand how the entire ML system, which includes the ML model, works.

## Ending

The junior engineers usually focus on the fun parts which are data engineering or model development. To build a successful ML system, we need a maintainable and observable infrastructure to run the ML models on. This post covered some issues when deploying such kind of infrastructure but they are not enough. In reality, we don't know what bad things will happen in the next second. So prepare for it!

<!-- MARKDOWN LINKS & IMAGES -->

[monitoring]: /assets/images/ml-skills/the-ultimate-machine-learning-system/deployment-part-2-monitoring-and-maintenance/monitoring.jpg
[observe]: /assets/images/ml-skills/the-ultimate-machine-learning-system/deployment-part-2-monitoring-and-maintenance/observe.jpg
