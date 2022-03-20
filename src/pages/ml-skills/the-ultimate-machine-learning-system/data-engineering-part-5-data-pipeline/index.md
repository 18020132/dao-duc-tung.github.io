---
url: ml-skills/the-ultimate-machine-learning-system/data-engineering-part-5-data-pipeline
layout: post
---

![data-ingestion][data-ingestion]

The whole field of ML revolves around data. Data helps you making strategic business decisions and understand your customers at a deeper level. This post focuses on the recommended practical AWS workshops/courses that you should take to gain from basic to advanced understanding and skills needed to create a data pipeline. You can skip the introduction of AWS courses. You only need to get the idea of the data pipline as a whole.

<toc>

## Create a data repository

![data-lake][data-lake]

### Lake Formation

After collecting the data, now it's the time to store your data in **a centralized repository**. With a **data lake**, you can store structured and unstructured data. Lake Formation is a data lake solution, and S3 is the preferred storage option for data science processing on AWS.

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

## Implement a data ingestion solution

![data-ingestion-solutions][data-ingestion-solutions]

In some cases, data resides outside the data repository solution like on-premises storage. To use this data, we need to ingest it into an AWS storage service like S3. This post will focus on the cloud services to implement two types of data ingestion solution which are **Batch processing** and **Stream processing**.

You can skip the introduction of AWS courses. You only need to get the idea of implementing a data ingestion solution and its purpose.

### Batch processing

With batch processing, the ingestion layer periodically collects and groups source data and sends it to a destination like S3. Batch processing is used when there is no real need for real-time or near-real-time data, because it is easier and more affordably implemented than other ingestion options.

Options to collect and group source data and send it to S3:

- Use DMS (Database Migration Service) to read historical data from soure systems, such as relational database management systems, data warehouses, and NoSQL databases, at any desired interval

Options to process raw data are:

- Use Glue for ETL processes (categorize, clean, enrich, move)
- Use Step Functions to automate ETL tasks that involve complex workflows

Processed data will be stored in a data lake/warehouse solution like S3.

To learn more, refer to:

- [AWS Database Migration Workshop](https://catalog.us-east-1.prod.workshops.aws/v2/workshops/77bdff4f-2d9e-4d68-99ba-248ea95b3aca/en-US/). This workshop covers:
  - SQL Server to Aurora (MySQL)
  - SQL Server to Aurora (PostgreSQL)
  - SQL Server to SQL Server running on RDS
  - SQL Server to S3
  - Oracle to Aurora (PostgreSQL)
  - Oracle to Oracle running on RDS
  - Monitoring DMS Migrations
- [AWS Glue Studio Workshop](https://catalog.us-east-1.prod.workshops.aws/v2/workshops/71b5bdcf-7eb1-4549-b851-66adc860cd04/en-US/). This workshop covers:
  - Create a Glue job
  - Joining tables using a Glue job
    - Note: When creating the Glue job, adding partition key in a `Apply Transform` step might raise the error `py4j.protocol.Py4JJavaError: An error occurred while calling o143.pyWriteDynamicFrame.: scala.MatchError: (null,false) (of class scala.Tuple2)`
  - Schedule a Glue job

### Stream processing

Stream processing includes real-time processing and involves no grouping. Data is sourced, manipulated, and loaded as soon as it is created or recognized by the data ingestion layer. It requires systems to constantly monitor sources and accept new information. You might want to use it for real-time predictions or some real-time analytics that require continually refreshed data, like real-time dashboards.

Kinesis, Confluent Cloud and MSK are the candidates for stream processing. Read [this article](https://www.softkraft.co/aws-kinesis-vs-kafka-comparison/) to compare Kinesis and MSK. Read [this article](https://www.confluent.io/confluent-cloud-vs-amazon-msk/) to compare Confluent Cloud and MSK.

- Use Kinesis to capture and ingest fast-moving data
  - Kinesis video streams
  - Kinesis data streams
  - Kinesis data firehose
  - Kinesis data analytics

To learn more, refer to:

- [Real Time Streaming with Amazon Kinesis](https://catalog.us-east-1.prod.workshops.aws/v2/workshops/2300137e-f2ac-4eb9-a4ac-3d25026b235f/en-US). This workshop covers:
  - Produce data to Kinesis Data Stream by:
    - Using Amazon SDK for Kinesis
    - Using Kinesis Producer Library
  - Produce data to Kinesis Data Stream using **_in-memory_** table created in a Apache Zeppelin notebook with Apache Flink as the stream processing engine (so-called Kinesis Data Analytics)
  - Process streaming data using Kinesis Data Firehose and Lambda
    - The data flow looks like: Streaming data --> Kinesis Data Stream --> Kinesis Delivery Stream (Data Firehose) --> Lambda (to preprocess data) --> S3
    - Streaming data and Kinesis Data Stream are in the ingestion layer
    - Kinesis Delivery Stream and Lambda are in the processing layer
  - Clean, aggregate, enrich, visualize data using Kinesis Data Analytics and OpenSearch (ElasticSearch)
  - Process streaming data from Kinesis Data Stream using only Lambda
    - In Lambda code, parse `vendorId` as `string` in `item` object
  - Preprocess streaming data from Kinesis Data Stream using Kinesis Client Library (KCL) before passing the data to the processing logic
    - KCL takes care complex tasks associated with distributed processing such as loading balance record processing across many instances
- [Streaming Analytics Workshop](https://streaming-analytics.workshop.aws/). This workshop covers:
  - End-to-end scalable streaming architecture to ingest, analyze, visualize streaming data using Kinesis with very detailed explaination
  - Deploy a Flink application using Kinesis Data Analytics Studio Zeppelin notebook
  - End-to-end streaming architecture that combines batch and streaming aspects in one uniform Apache Beam pipeline
    - Note: When creating the Cloud Formation stack, you might need to update the stack template to avoid timeout error on creating resources. In the stack template, you should change the Timeout property of `Cloud9DevEnvironmentKinesisReplayBuildPipelineWaitConditionAC504110` and `BeamConsumerBuildPipelineWaitCondition71C56893` to 3600, then recreate the stack
- [Typical Kinesis solutions](https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started-next-steps.html)
- [Building Data in Motion Applications with Confluent on AWS](https://confluent.awsworkshop.io/)
  - Note: this workshop requires your credit card credentials to use Confluent

## Implement a data transformation solution

![data-pipeline][data-pipeline]

This post will focus on the AWS's resources you might need to implement data transformation solutions. You can skip the introduction of AWS courses. You only need to get the idea of implementing a data transformation solution and its purpose.

The raw data ingested into the data repository is usually not ML ready as is. The data needs to be transformed and cleaned, which includes deduplication, incomplete data management, and attribute standardization. Data transformation can also involve changing the data structures, if necessary, usually into an OLAP model to facilitate easy querying of data. The general process using AWS's cloud services looks like:

### Data preparation ETL

Data preparation ETL might deal with huge amounts of data. Distributed computation frameworks like MapReduce and Apache Spark provide a protocol of data processing and node task distribution and management. They also use algorithms to split datasets into subsets and distribute them across nodes in a compute cluster.

Using Apache Spark on EMR is one of cloud-based solution for Data preparation ETL. EMR supports many instance types that have proportionally high CPU with increased network performance, which is well suited for HPC (high-performance computing) applications.

To learn more, refer to:

- [Amazon EMR Developer Experience Workshop](https://catalog.us-east-1.prod.workshops.aws/v2/workshops/3c29bc13-0f30-42f7-9f97-4ce8e2ef9b17/en-US/)
  - Note: This workshop requires you to create an AWS organization. Make sure you have the permission to create one in [AWS Organizations service](https://aws.amazon.com/organizations/)
- [ETL on Amazon EMR Workshop](https://emr-etl.workshop.aws/). This workshop covers:
  - Submitting and monitoring Spark-based ETL work to an EMR cluster
  - Running Hive on EMR cluster
  - Running Pig on EMR cluster
  - Using SageMaker in EMR notebooks
  - Orchestrating EMR with Step Functions
  - EMR cluster automatic scaling

### Batch data preparation

Datasets required for ML applications are often pulled from database warehouses, streaming input, or centralized data lakes. In many use cases, you can use S3 as a target endpoint for the training datasets.

ETL processing services (Athena, AWS Glue, Redshift Spectrum) are functionally complementary. In addition to transforming data with services like Athena and Redshift Spectrum, you can use services like AWS Glue to provide metadata discovery and management features.

The choice of ETL processing tool is largely dictated by the type of data you have. For example, tabular data processing with Athena lets you manipulate your data files in S3 using SQL. If your datasets or computations are not optimally compatible with SQL, you can use AWS Glue to run Spark jobs (Scala and Python support).

To learn more, refer to:

- [Amazon Athena Workshop](https://catalog.us-east-1.prod.workshops.aws/v2/workshops/9981f1a1-abdc-49b5-8387-cb01d238bb78/en-US/). This workshop covers:
  - Basic Athena capabilities (query, ETL with CTAS, workgroups)
  - Federated query
  - User defined functions (UDF)
  - Deploying custom connector
  - Text analysis using UDF
  - SageMaker endpoint integration
- [Redshift Immersion Labs](https://catalog.us-east-1.prod.workshops.aws/v2/workshops/9f29cdba-66c0-445e-8cbb-28a092cb5ba7/en-US/)

### Example solution for healthcare data

![aws-healthcare-system][aws-healthcare-system]

This architecture builds a scalable analytical layer for healthcare data. Customers can:

- Store a single source of data in S3
- Perform ad hoc analysis with Athena
- Integrate with a data warehouse on Redshift
- Build a visual dashboard for metrics using QuickSight
- Build an ML model to predict readmissions using SageMaker

By not moving the data around and connecting to it using different services, customers avoid building redundant copies of the same data.

To learn more, refer to:

- [QuickSight Workshops](https://catalog.us-east-1.prod.workshops.aws/v2/workshops/cd8ebba2-2ef8-431a-8f72-ca7f6761713d/en-US)
- [Amazon Quicksight Workshop Covid 19 Data Analysis](https://catalog.us-east-1.prod.workshops.aws/v2/workshops/4c08a00f-9400-4a0f-aa3e-4c458d2a9983/en-US/)

<!-- MARKDOWN LINKS & IMAGES -->

[data-ingestion]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-5-data-pipeline/data-ingestion.png
[data-lake]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-5-data-pipeline/data-lake.png
[data-ingestion-solutions]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-5-data-pipeline/data-ingestion-solutions.png
[data-pipeline]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-5-data-pipeline/data-pipeline.png
[aws-healthcare-system]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-5-data-pipeline/aws-healthcare-system.png
