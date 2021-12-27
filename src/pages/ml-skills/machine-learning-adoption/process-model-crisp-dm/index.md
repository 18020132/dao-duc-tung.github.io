---
url: ml-skills/machine-learning-adoption/process-model-crisp-dm
layout: post
---

![processes][processes]

CRISP-DM - CRoss Industry Standard Process for Data Mining - is a process model that helps you plan, organize, and implement your ML project. It includes six phases that describes the data science life cycle as below:

1. Business understanding
1. Data understanding
1. Data preparation
1. Modeling
1. Evaluation
1. Deployment

This process model basically is the same as the iterative process that I covered in this post [Intro to ML systems design - Part 2](https://aiengineer.net/ml-skills/machine-learning-systems-design/intro-to-ml-systems-design-part-2/).

## Business understanding

Basically, we need to do these four steps:

- Understand business requirements
  - Form a business question
  - Highlight project's critical features
- Analyze supporting information
  - List required resources and assumptions
  - Analyze associated risks
  - Plan for contingencies
  - Compare costs and benefits
- Convert to ML objective
  - Review ML question
  - Create technical data mining objective
  - Define the criteria for successful outcome of the project
- Create a project plan
  - Number and duration of stages
  - Dependencies
  - Risks
  - Goals
  - Evaluation methods
  - Tools and techniques

For more details, please refer to the section **Project Scoping** in the post [Intro to ML systems design - Part 2](https://aiengineer.net/ml-skills/machine-learning-systems-design/intro-to-ml-systems-design-part-2/).

## Data understanding

In this phase, we need to complete these three steps:

- Collect data
  - Detail various sources and steps to extract data
  - Analyze data for additional requirements
  - Consider other data sources
- Understand data
  - Describe data, amount of data used, and metadata properties
  - Find key features and relationships in the data
  - Use tools and techniques to explore data properties
- Verify data quality
  - Verify features
  - Identify data quality issues mentioned in the post [Data engineering - Part 2](https://aiengineer.net/ml-skills/machine-learning-systems-design/data-engineering-part-2/)
  - Report solution

For more details, please refer to the post [Data engineering - Part 1](https://aiengineer.net/ml-skills/machine-learning-systems-design/data-engineering-part-1/).

## Data preparation

In this phase, we will complete two steps:

- Select final dataset
  - Define size
  - Included/Excluded features
  - Select rows/records
  - Define data type
- Prepare the data:
  - Clean: solve data quality issues
  - Transform: derive additional features from original ones, normalization, transform features
  - Merge: merge features
  - Format: rearrange features, shuffle data, format unicode if needed

After this phase, we can go back to Data Understanding phase to understand and check the data again.

## Modeling

In this phase, we need to perform three main steps:

- Select and create model
  - Select modeling technique
  - Identify constraints of the technique and tools
  - Identify how those constraints tie back to Data preparation phase
- Build test plan
  - Split data
  - Identify evaluation criteria
- Build model
  - Train model
  - Tweak model for better performance
  - Build multiple models with different parameter settings
  - Describe the trained models and report on the findings

Note that this phase works together with the Data preparation phase.

## Evaluation

In this phase, we will complete three steps:

- Evaluate model performance
  - Evaluation criteria
  - Model generalization on unseen data
  - Business success criteria
- Review process
  - Assess the steps taken in each phase: Was anything overlooked? Were all steps properly executed?
  - Perform quality assurance checks: Summarize findings and correct anything if needed.
- Determine the next step
  - Decide to deploy to production
  - Or iterate the current project
  - Or start a new project

## Deployment

In this phase, we need to complete these four steps:

- Plan deployment
  - Develop, document a plan for deployment
- Maintain and monitor
  - Develop a plan for maintenance and monitoring data quality, model quality
- Produce final report
  - Highlight processes used in the project
  - Analyze if all the goals were met
  - Report findings
  - Identify and explain the model used and reason behind using the model
  - Identify the customer groups to target using this model
- Review project: Assess the outcomes of the project
  - Summarize results and write documents about common pitfalls and choosing the right ML solution
  - Generalize the whole process to make it useful for the next iteration

<!-- MARKDOWN LINKS & IMAGES -->

[processes]: /assets/images/ml-skills/machine-learning-adoption/process-model-crisp-dm/processes.jpg
