---
url: ml-skills/the-ultimate-machine-learning-system/data-engineering-part-3-data-repository
layout: post
---

![tunnel][tunnel]

## Create a data repository

The whole field of ML revolves around data. Data helps you making strategic business decisions and understand your customers at a deeper level. After collecting the data, now it's the time to store your data in **a centralized repository**. With a **data lake**, you can store structured and unstructured data.

This post focuses on the recommended practical AWS workshops/courses that you should take to gain from basic to advanced understanding and skills needed to create a data repository. You can skip the introduction of AWS courses. You only need to get the idea of creating a data repository and its purpose.

![data-lake][data-lake]

### Lake Formation

Lake Formation is a data lake solution, and S3 is the preferred storage option for data science processing on AWS.

To learn more, refer to:

- [AWS Lake Formation Workshop](https://catalog.us-east-1.prod.workshops.aws/v2/workshops/78572df7-d2ee-4f78-b698-7cafdb55135d/en-US/). This workshop provides tutorial about:
  - Glue basics
  - Lake Formation basics
  - Integration with EMR
  - Handling real-time data using Kinesis
    - Note: In the `Kinesis Data Generator`, `Create a Data Stream`, `Create Stream Table` sections, login with your admin user because creating CloudFormation stack requires permissions related to IAM, Lambda, S3, Glue, etc.
  - Glue to Lake Formation migration: This part has some problems with created user's permission and outdated AMI ID. You can skip this part
- [Data Engineering Immersion Day](https://catalog.us-east-1.prod.workshops.aws/v2/workshops/976050cc-0606-4b23-b49f-ca7b8ac4b153/en-US/). This workshop covers:
  - Streaming data analytics using Kinesis, Glue, and MSK
  - Data ingestion using DMS
  - Transforming data using Glue
  - Query and visualize data using Athena, QuickSight, and SageMaker
  - Data lake automation using Lake Formation

### FSx for Lustre

When your training data is already in S3 and you plan to run training jobs several times using different algorithms and parameters, consider using FSx for Lustre, a file system service. The first time you run a training job, FSx for Lustre copies data from S3 and makes it available to SageMaker. You can use the same FSx file system for subsequent iterations of training jobs, preventing repeated downloads of common S3 objects.

To learn more, refer to:

- [Amazon Web Services HPC Workshops](https://www.hpcworkshops.com/04-amazon-fsx-for-lustre.html)
  - This workshop is about High Performance Computing
- [Kubernetes and EKS](https://www.eksworkshop.com/beginner/190_fsx_lustre/)
  - This workshop explores multiple ways to configure VPC, ALB, and EC2 Kubernetes workers, and Elastic Kubernetes Service

### Elastic File System

Alternatively, if your training data is already in Elastic File System (EFS), we recommend using that as your training data source. EFS can directly launch your training jobs from the service without the need for data movement, resulting in faster training start times. For example, a data scientist can use a Jupyter notebook to do initial cleansing on a training set, launch a training job from SageMaker, then use their notebook to drop a column and re-launch the training job, comparing the resulting models to see which works better.

To learn more, refer to:

- [Cloud File Storage the AWSome Way!](https://github.com/aws-samples/amazon-efs-workshop)
- [Kubernetes and EKS](https://www.eksworkshop.com/beginner/190_efs/launching-efs/)
  - This workshop explores multiple ways to configure VPC, ALB, and EC2 Kubernetes workers, and Elastic Kubernetes Service

### Training load time comparison

When choosing a file system, take into consideration the training load time. The table below shows an example of some different file systems and the relative rate that they can transfer images to a compute cluster. Relative speed is the comparison of the relative (to EFS) **images** per second that each file system can load.

| File system | Relative Speed |
| ----------- | -------------- |
| S3          | <1.0           |
| EFS         | 1              |
| EBS         | 1.29           |
| FSx         | >1.6           |

<!-- MARKDOWN LINKS & IMAGES -->

[tunnel]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-3-data-repository/tunnel.jpg
[data-lake]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-3-data-repository/data-lake.png
