---
url: ml-skills/the-ultimate-machine-learning-system/machine-learning-roles
layout: post
---

![roles][roles]

In research, people are usually only interested in ML algorithms, but in production, they need to care about all the components of an ML system. And because there are different interests in the research environment and the production environment, the ML roles are also different in these two environments.

For the difference of ML in research and in production, please refer to this post [Machine Learning In Production](../ml-in-production/). In this **Machine Learning roles** post, we will talk about different ML roles in research and production environments.

<toc>

## Machine learning roles in research

### Research scientist

A research scientist's job is to come up with unique, novel, and innovative ideas. This role typically requires a Ph.D. and/or first-author papers at leading ML conferences around the world.

### Applied research scientist

Applied research is situated somewhere between research and production, but it is closer to research than production. Applied research entails solving real-world problems but not implementing those solutions in a real-world setting, and they require expertise in these problems.

### Research engineer

This is a rare position that is frequently found in large research laboratories. A research engineer's job is to use their engineering skills to set up and run tests designed by research scientists.

Some teams do not distinguish between a research scientist and a research engineer. Engineers must first and foremost be research scientists. Both research scientists and engineers generate and implement ideas. A research scientist may also serve as an advisor to research engineers who are conducting their own research.

## Machine learning roles in production

### Product owner

- Responsibilities: Define goals and vision for ML projects.
- Skills: Strategic vision, leadership, project management skills, subject matter expertise at work, stock examples, and a high-level understanding of ML to know what ML can be and cannot be resolved.

### Product manager

- Responsibilities: Ensure the ML project meets the set goals, timelines, and technical requirements.
- Skills: project management skills, leadership ability, expertise on the subject at hand, high-level understanding of ML, and knowledge of ML systems.

### Data scientist

![data-scientist][data-scientist]

- Responsibilities: Use methods, processes, and algorithms to generate business insights from data.
- Skills: deep math knowledge, statistical probabilities, real-world problem expertise (stocks) to apply ML to those problems, ML knowledge to interpret model output and behavior.

#### Data scientist vs. Data analyst

The responsibilities of data scientist and data analyst sometimes overlap and confuse people. In [Lyft](https://medium.com/@chamandy/whats-in-a-name-ce42f419d16c), they shift data analyst over to the data scientist title and also rebrand the data scientist job title to research scientist. In general, data scientist builds mathematical models and algorithms that power the core components of the product. Meanwhile, data analyst extracts insights from data, creates and manages the business and operational metrics, tracks the health of the business, and drives better decision-making.

### Data engineer

- Responsibilities: Build data pipeline, aggregate data, store data, monitor data.
- Skills: using database, data management tools to know how to store/retrieve/process data, skills to deploy distributed systems to handle big data, minimal ML knowledge for optimization Efficient way to store data for ML applications.

### ML engineer

- Responsibilities: Train and deploy ML models.
- Skills: Requires knowledge of probability statistics, and ML to understand data and evaluate models, and requires software engineering skills to write effective code, especially in data structures and algorithms.

This position is difficult to fill because it requires concurrent skills in ML and software engineering. Indeed, some hiring managers have stated that they want to hire good engineers but don't know much about ML because good engineers learn ML faster than ML professionals. engineering done by engineers.

#### ML engineer vs. data scientist

![data-scientist-vs-mle][data-scientist-vs-mle]

MLEs, like data scientists, are likely to spend the majority of their time working on data during model training. However, there are significant distinctions between ML engineering and data science. A data scientist's goal is to generate business insights about the business, whereas an ML engineer's goal is to turn data into products. Data scientists are better probabilities, and MLEs are better engineers. MLEs must understand ML algorithms, whereas many data scientists can do their jobs without touching ML.

The table below summarizes those differences.

|         | Data scientist             | ML engineer             |
| ------- | -------------------------- | ----------------------- |
| Goal    | Generate business insights | Turn data into products |
| Skill   | Better statistician        | Better engineer         |
| ML need | Depend                     | A must                  |

### MLOps engineer

- Responsibilities: Deploy and oversee the ML system in production.
- Skills: Mainly techniques from standard Software engineering.

#### MLOps engineer vs. ML engineer

As we know, the responsibility of MLE also includes deploying the ML model.
However, while MLE focuses on writing code to run prediction, MLOps engineer focuses on the system and the techniques used to automate the process of deploying MLE's code prediction to the production environment. When the ML system or when the project is small, the MLE will usually take the position and responsibilities of an MLOps engineer.

### ML infrastructure/platform engineer

Requires skills in infrastructure, optimization in parallel computing, and distributed systems.
Responsibilities: Build a distributed system to train large models with extremely large amounts of data using many servers with many parallel GPUs at the same time.

### ML accelerator/hardware engineer

Requires skill related to hardware, using ML in hardware.
Responsibilities: to manufacture and optimize hardware that supports training and inference.

### ML solutions architect

Requires long-term ML system skills, and experience in all kinds of ML systems of all kinds of applications such as in Computer Vision, NLP, Recommendation systems, etc.
Responsibilities: Design and provide solutions for ML systems within the company or external customers.

### Developer Advocate, developer programs engineer

Engineers have good communication skills, specializing in promoting the company's ML-related products such as tools, and applications, to educate users, and make users aware of the company's products.

## Skill map

To end this post, let's take a look at the table below which summarizes the typical ML roles in both research and production environments.

| #   | Role                       | Responsibility                                                                                               | Skill                                                                                                 |
| --- | -------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| 1   | Research scientist         | To come up with original ideas                                                                               | Deep understanding of Maths, Statistics, ML                                                           |
| 2   | Applied research scientist | To find solutions to practical problems                                                                      | Deep understanding of Maths, Statistics, ML, subject matter expertise                                 |
| 3   | Research engineer          | To use their engineering skills to set up and run experiments for these ideas                                | Maths, Statistics, ML, Software engineering skills                                                    |
| 4   | Product owner              | Defines business goals and vision for ML projects                                                            | Vision, leadership, product management, subject matter expertise, high-level understanding of ML      |
| 5   | Product manager            | Ensure ML project meets business, time, and technical goals                                                  | Leadership, product management, subject matter expertise, high-level understanding of ML              |
| 6   | Data scientist             | Use/build scientific methods, mathematical models, and algorithms to extract insights from data              | Deep understanding of Maths, Statistics, subject matter expertise, and high-level understanding of ML |
| 7   | Data analyst               | Extracts insights from data, manages the business and operational metrics, and drives better decision-making | Analytical, problem-solving, subject matter expertise, high-level understanding of ML                 |
| 8   | Data engineer              | Build data pipelines, aggregation, storage, monitoring                                                       | Experience in using tools to save, query, process data, and using big data platforms; ML              |
| 9   | ML engineer                | Train and deploy ML models                                                                                   | Maths, Statistics, ML, Software engineering skills                                                    |
| 10  | MLOps engineer             | Deploy and monitor production ML systems                                                                     | Software engineering, ML                                                                              |

For another view of ML roles when arranged according to the required level of Software Engineering and ML skills, please take a look at the skill map below while you are skimming the ML roles in the table above.

![skill-map][skill-map]

<!-- MARKDOWN LINKS & IMAGES -->

[roles]: /assets/images/ml-skills/the-ultimate-machine-learning-system/machine-learning-roles/roles.jpg
[data-scientist]: /assets/images/ml-skills/the-ultimate-machine-learning-system/machine-learning-roles/data-scientist.png
[data-scientist-vs-mle]: /assets/images/ml-skills/the-ultimate-machine-learning-system/machine-learning-roles/data-scientist-vs-mle.png
[skill-map]: /assets/images/ml-skills/the-ultimate-machine-learning-system/machine-learning-roles/skill-map.png
