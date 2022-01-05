---
url: ml-skills/the-ultimate-machine-learning-system/data-engineering-part-4-data-ingestion
layout: post
---

![data-ingestion][data-ingestion]

## Implement a data ingestion solution

In some cases, data resides outside the data repository solution like on-premises storage. To use this data, we need to ingest it into an AWS storage service like S3. This post will focus on the cloud services to implement two types of data ingestion solution which are **Batch processing** and **Stream processing**.

You can skip the introduction of AWS courses. You only need to get the idea of implementing a data ingestion solution and its purpose.

![data-ingestion-solutions][data-ingestion-solutions]

### Batch processing

With batch processing, the ingestion layer periodically collects and groups source data and sends it to a destination like S3. Batch processing is used when there is no real need for real-time or near-real-time data, because it is easier and more affordably implemented than other ingestion options.

Options to collect and group source data and send it to S3:

- Use DMS (Database Migration Service) to read historical data from soure systems, such as relational database management systems, data warehouses, and NoSQL databases, at any desired interval

Options to process raw data are:

- Use Glue for ETL processes (categorize, clean, enrich, move)
- Use Step Functions to automate ETL tasks that involve complex workflows

Processed data will be stored in a data lake/warehouse solution like S3.

To learn more, refer to:

- [AWS Database Migration Workshop](https://catalog.us-east-1.prod.workshops.aws/v2/workshops/77bdff4f-2d9e-4d68-99ba-248ea95b3aca/en-US/). This workshop covers migrations:
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

<!-- MARKDOWN LINKS & IMAGES -->

[data-ingestion]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-4-data-ingestion/data-ingestion.png
[data-ingestion-solutions]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-4-data-ingestion/data-ingestion-solutions.png
