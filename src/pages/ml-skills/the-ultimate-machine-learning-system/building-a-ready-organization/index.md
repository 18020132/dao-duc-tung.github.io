---
url: ml-skills/the-ultimate-machine-learning-system/building-a-ready-organization
layout: post
---

![ready][ready]

Behind successful ML projects are well-organized teams. Today we will discuss the needed components for the successful organizational adoption of ML. This post focuses on business leaders and other decision-makers currently or potentially involved in ML projects.

To figure out which components are needed, we are going to answer two main questions including:

- How to prepare my organization for using ML?
- How to start my ML journey?

<toc>

## How to prepare my organization?

To progress from having few or no ML projects to advanced production ML expertise, an organization needs:

- A robust ML strategy
- A data strategy
- A culture of learning and collaboration

### A robust ML strategy

#### Infrastructure

Firstly, we should concern about the infrastructure. Usually, in the early stage of ML adoption, your organization will want to implement an ML strategy where you don't have to start from scratch.

You want to accelerate the ML adoption process by using existing cloud-based ML solutions on the market such as Google Cloud Platform, Microsoft Azure, or Amazon Web Services.

By taking advantage of the cloud services, you don't need to worry about the on-premise infrastructure development or training, so your team can experiment at a rapid pace.

#### Problem selection

Secondly, we should find the right problem to solve in order to yield early wins. Choosing worthy problems that:

- Get early executive buy-in
- Are data-rich
- Aren't solvable by traditional methods
- Involve large amounts of labor

#### Learning method

![fail-forward][fail-forward]

Thirdly, we should apply an appropriate learning method to set a proper mindset during the ML adoption process. One of the learning methods is **fail forward**. Fail forward means purposefully and deliberately using failure as a path to success.

We use failure as an iterative opportunity to become fault-tolerant and find a successful direction in subsequent attempts.

#### Scale

Last but not least, after testing the ML project against design, idea, assumptions, and determining potential feasibility, we should scale it to solve challenges across the business before making large production investments.

### A data strategy

Firstly, we should care about the readiness of your organization's current data. Based on the status of readiness, we will have the corresponding solutions. The table below shows three statuses of data readiness.

| #   | Status     | Description                                                                  | Solution                                       |
| --- | ---------- | ---------------------------------------------------------------------------- | ---------------------------------------------- |
| 1   | Acceptable | Data is raw, unlabeled, and requires work before it can be used              | Label data using tools                         |
| 2   | Better     | Data is labeled, lives in separated sources, is accessible to selected teams | Unify all the data sources into one repository |
| 3   | Best       | Data is labeled, lives in one repository, is accessible to all teams         |                                                |

Secondly, we need to think about the strategic plans to collect and use data. For example, think about:

- The data sources can be collected: enterprise databases, sensors, server logs, social media, etc.
- The repository to store all the data: data lake

I covered all the details to design an ML system in this post [Data engineering - Part 1](https://aiengineer.net/ml-skills/machine-learning-systems-design/data-engineering-part-1/). Please refer to it for more details.

### A culture of learning and collaboration

Before going to determine the learning and collaboration culture, we should have an idea of how an ML team looks like. The table below shows possible roles in an ML team.

| #   | Role                          | Responsibility                                              | Skills                                                                                 |
| --- | ----------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 1   | Data scientist                | Build ML models                                             | Math, statistics, ML algorithms, data processing                                       |
| 2   | ML engineer                   | Productionize ML models                                     | ML algorithms, data pipeline tools, architecture design, software development          |
| 3   | Technical Program Manager     | Ensure ML project meets business, time, and technical goals | Project management, leadership, high-level understanding of ML algorithms              |
| 4   | Data engineer                 | Build data pipeline                                         | Database systems, Data warehousing solutions, ETL tools, ML algorithms                 |
| 5   | Software development engineer | Build complex systems for ML use cases                      | Software development, architecture design                                              |
| 6   | Business leader               | Defines business goals and vision for ML projects           | Strategic vision, leadership, high-level understanding of ML algorithms, etc.          |
| 7   | Business information analyst  | Create and manage the business and operational metrics      | Analytical, problem-solving, writing skills, high-level understanding of ML algorithms |

The skills needed for some roles overlap each other are shown in the below figure.

![roles-in-ml-project][roles-in-ml-project]

#### A culture of learning

An ML team can grow rapidly through several development phases, which include inter-collaboration, training, and hiring domain experts.

**Phase 1:**

- Encourage the technical team to use ML, not just scientists.
- Encourage non-technical leaders to become ML savvy.
- Training and training

**Phase 2:**

- Hire data scientists if you can.
- Collaborate with external teams to help you build analytics/ML capabilities.

#### A culture of collaboration

Creating a culture of learning and collaboration is a journey. There're some ways to start with:

- Excitement events: organize hands-on activities to excite and motivate people.
- Training: organize formal training such as instructor-led sessions, group activities, and hands-on labs; provide informal training such as just-in-time and self-directed learning.
- Accelerator programs: provide team members programs/workshops to learn best practices and proven strategies for successfully making the shift to AI.

To support the culture shift, as a leader, you can:

- Explain why your team is starting new ML initiatives
- Anticipate blockers to adoption
- Determine the budget for integration and adoption of technology
- Balance feasibility, time, and value tradeoff

## How to start the ML journey?

![journey][journey]

The research team, software engineering team, and HR teams are involved to determine how ML will be used in your organization. They will also identify sources of ML adoption challenges, and develop clear strategies to overcome barriers.

An organization's ML journey contains three main phases as below.

| #   | Phase                         | ML strategy                                                                                                                                          | Data strategy                                                                                                         | Culture                                                                                                  |
| --- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 1   | Limited expertise             | - Start with important projects as POC<br />- Gain momentum using these projects<br />- Explain WHY shifting towards AI                              | - Explore where data resides<br />- Document if data can be used<br />- Prepare a timeline for building data pipeline | - Allow teams to explore data<br />- Team up with external resources<br />- Leverage managed services    |
| 2   | Few production workloads      | - Build AI capabilities for the entire organization<br />- Scale from POC to production<br />- Collaborate between teams                             | - Consolidate various data sources into 1 repo<br />- Build data literacy across organization                         | - Build internal AI team<br />- Train existing workforce using online and in-person courses              |
| 3   | Multiple production workloads | - Build long-term AI strategy into core business<br />- Create AI leadership to maintain the long-term vision<br />- Create a robust hiring pipeline | - Add useful external data to improve quality and effectiveness of data                                               | - Build AI org that collaborates with internal teams<br />- Continue to explore and experiment with data |

## Common mistakes

There're two common mistakes that some organizations' transitions take in:

- Viewing AI as a plug-and-play technology with immediate returns.
- Thinking too narrowly about AI applications.

<!-- MARKDOWN LINKS & IMAGES -->

[ready]: /assets/images/ml-skills/the-ultimate-machine-learning-system/building-a-ready-organization/ready.jpg
[fail-forward]: /assets/images/ml-skills/the-ultimate-machine-learning-system/building-a-ready-organization/fail-forward.png
[roles-in-ml-project]: /assets/images/ml-skills/the-ultimate-machine-learning-system/building-a-ready-organization/roles-in-ml-project.png
[journey]: /assets/images/ml-skills/the-ultimate-machine-learning-system/building-a-ready-organization/journey.jpg
