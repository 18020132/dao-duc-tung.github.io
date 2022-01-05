---
url: ml-skills/the-ultimate-machine-learning-system/data-engineering-part-1-important-aspects
layout: post
---

![data-engineering][data-engineering]

Data engineering is the second phase of the ML lifecycle. In this phase, we will perform some steps such as:

- Collect data
- Understand data
- Verify data quality
- Select the final dataset
- Prepare data for training

Before diving into each step, firstly this post will introduce some important aspects of data that we should consider including:

- Data sources
- Data formats
- Structured vs. Unstructured Data
- OLTP vs. OLAP databases
- Extract - Transform - Load processes
- Batch processing vs. Stream processing

## Data sources

Data can be from different sources. The table below shows the four common sources.

| #   | Source                      | Example                                                                                                              |
| --- | --------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1   | User-generated data         | User book a trip, ignore a popup, spend x(s) on page y                                                               |
| 2   | System-generated data       | Logs, predictions                                                                                                    |
| 3   | Enterprise application data | Data generated from enterprise apps used for managing company assets (inventory, customer relationship, users, etc.) |
| 4   | Third-party data            |                                                                                                                      |

> First-party data is the data that your company already collects about your users or customers.

> Second-party data is the data collected by another company on their own customers.

> Third-party data companies collect data on the general public who aren't their customers.

## Data formats

Once we have data, we will serialize and store it. The process of converting a data structure or object state into a format that can be stored or transmitted and reconstructed later is data serialization. There are many, many data serialization formats. This section compares different types of data formats.

### Row-based vs. column-based

|            | Row-based                            | Column-based                                |
| ---------- | ------------------------------------ | ------------------------------------------- |
| Better for | Accessing samples                    | Accessing features                          |
| Example    | Ride-share transaction with all info | Price of ride-share transaction             |
| Use cases  | Require lots of writes               | Require lots of reads with almost no writes |

**Note**: NumPy creates arrays with row-major by default. Pandas creates DataFrame which is columnar.

### Text vs. binary format

| Format   | Text/Binary    | Human-readable | Example                       |
| -------- | -------------- | -------------- | ----------------------------- |
| JSON     | Text           | Yes            | Everywhere                    |
| CSV      | Text           | Yes            | Everywhere                    |
| Parquet  | Binary         | No             | Hadoop, AMZ Redshift          |
| Avro     | Binary primary | No             | Hadoop                        |
| Protobuf | Binary primary | No             | Google, Tensorflow (TFRecord) |
| Pickle   | Text, binary   | No             | Python, PyTorch serialization |

**Note**: AWS recommends using the Parquet format because "_the Parquet format is up to 2x faster to unload and consumes up to 6x less storage in Amazon S3, compared to text formats._"

## Structured vs. Unstructured data

When the data schema evolved and the number of possible data sources expanded, companies just store all data in a data lake to not have to deal with schema changes. This process of loading data into storage first then processing it later is sometimes called ELT (extract, load, transform).

As data keeps on growing and companies switch to running applications on the cloud and infrastructures become standardized, data structures also become standardized, which makes some companies store data in a structured way.

|                | Structured                     | Unstructured                             |
| -------------- | ------------------------------ | ---------------------------------------- |
| Schema         | Clearly defined                | Whatever                                 |
| Advantage      | Easy to search and analyze     | Fast arrival (no need to clean up first) |
| Data source    | Only data with specific schema | Any source                               |
| Schema changes | Need to update all data        | No need to worry about schema changes    |
| Stored in      | Data warehouse                 | Data lake                                |

## OLTP vs. OLAP databases

This section compares two types of databases to store data. The table below shows the traits and use cases for OnLine Transaction Processing and OnLine Analytical Processing databases.

|          | OLTP                                                                              | OLAP                                                                                                                                       |
| -------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Traits   | Most operations will be inserting, deleting, and updating an existing transaction | Most operations will be aggregating data in columns across multiple rows. Ex: compute the average price for all rides in Sept in Singapore |
| Use case | Designed for processing queries fast                                              | Designed for queries that allow you to look at data from different viewpoints                                                              |

OLTP databases also require:

- Isolation controls: two transactions happen at the same time as if they were isolated. Two users accessing the same data won't change it at the same time. For example, you don't want two users to book the same driver at the same time.
- Atomicity controls: all the steps in a transaction are completed successfully as a group. If any steps between the transaction fail, all other steps must fail also. For example, if a user's payment fails, you don't want to still assign a driver to that user.

> Atomicity and isolation are part of ACID (Atomicity, Consistency, Isolation, Durability), a standard set of properties that guarantee database transactions are processed reliably.

## Extract - Transform - Load

ETL processes and aggregates OLTP database to generate OLAP databases.

- Extract: extracting data from data sources.
- Transform: processing data into the target format. E.g. clean, validate data by joining data from multiple sources, splitting data into different parts, applying operations such as transposing, deduplicating, aggregating, etc.
- Load: loading it into the target destination e.g. a file or a data warehouse.

## Batch processing vs. Stream processing

![streaming][streaming]

The table below compares these two types of processing.

|             | Batch processing                                                                                             | Stream processing                                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Definition  | Data is processed in batches                                                                                 | Data is processed as soon as the sample arrives. This enables **online prediction**                                   |
| Data type   | usually process static features such as age, gender, job, city, income; when the account was created; rating | usually process dynamic features such as locations in the last 10 minutes; what user's watching; what user just liked |
| Data amount | bounded, we know when a job finishes                                                                         | unbounded, we don't know when the stream ends                                                                         |
| Tools       | Can be processed in batch e.g. SQL, MapReduce (to process large amounts of data)                             | Processed as events arrive e.g. Apache Flink, Samza                                                                   |

The stream processing is more complicated and has some requirements as below.

- Real-time pipeline: process features, put into the model, return prediction in milliseconds.
- Manage streaming data: Keep user's events in memory as much as possible, and stay there as long as they're useful (e.g. 7 days) then goes into permanent storage (e.g. S3) or is discarded. For example, recent history, recent trips, recent transactions, choose a location, book a trip, cancel a trip, add a credit card, remove a credit card, etc.
- Process data: Join features from various data sources

Apache Kafka stream processing is limited in its ability to deal with various data sources. The most popular tool for stream processing is Apache Flink, with native support for batch processing.

There're some barriers in Stream processing adoption such as:

- Companies don't see benefits of streaming: The system isn't at scale, batch predictions work fine, online predictions would work better but they don't know
- High initial investment in infrastructure
- Mental shift
- Python incompatibility

## Common issues of data quality

There're some known issues of data quality that we need to deal with.

- Consistency of the data: Is the data we're using consistent with the problem we want to solve? E.g. Different languages, different scales/units, mixed type
- Accuracy of the data: Are features, labels, methods to collect data correctly?
- Noisy data: How to remove noise from the input, output?
- Missing data: How to deal with missing data?
- Outliers in the data: How to detect and deal with outliers?
- Correlated: Highly correlated features can cause collinearity problems and numerical instability
- Bias: Sampling/selection biases, Under/over-representation of subgroups, Human biases embedded in historical data, Labeling biases
- Variance, etc.

We will deal with these issues in the future post.

<!-- MARKDOWN LINKS & IMAGES -->

[data-engineering]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-1-important-aspects/data-engineering.jpg
[streaming]: /assets/images/ml-skills/the-ultimate-machine-learning-system/data-engineering-part-1-important-aspects/streaming.jpg
