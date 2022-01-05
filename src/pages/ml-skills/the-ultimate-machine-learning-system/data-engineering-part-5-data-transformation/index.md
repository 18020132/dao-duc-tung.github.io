---
url: ml-skills/the-ultimate-machine-learning-system/data-engineering-part-5-data-transformation
layout: post
---

![transformation][transformation]

## Implement a data transformation solution

The raw data ingested into the data repository is usually not ML-ready as is. The data needs to be transformed and cleaned, which includes deduplication, incomplete data management, and attribute standardization. Data transformation can also involve changing the data structures, if necessary, usually into an OLAP model to facilitate easy querying of data. This post will focus on the AWS's resources you might need to implement data transformation solutions. The general process using AWS's cloud services looks like this:

![data-pipeline][data-pipeline]

You can skip the introduction of AWS courses. You only need to get the idea of implementing a data transformation solution and its purpose.

### Data preparation ETL

Data preparation ETL might deal with huge amounts of data. Distributed computation frameworks like MapReduce and Apache Spark provide a protocol of data processing and node task distribution and management. They also use algorithms to split datasets into subsets and distribute them across nodes in a compute cluster.

Using Apache Spark on EMR is one cloud-based solution for Data preparation ETL. EMR supports many instance types that have proportionally high CPUs with increased network performance, which is well suited for HPC (high-performance computing) applications.

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

[transformation]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-5-data-transformation/transformation.jpg
[data-pipeline]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-5-data-transformation/data-pipeline.png
[aws-healthcare-system]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-5-data-transformation/aws-healthcare-system.png
