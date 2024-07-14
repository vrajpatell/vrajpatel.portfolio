import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="container">
      <h2>Work Experience</h2>
      <div className="light-background">
        <h3>Software Engineer AI</h3>
        <h4>CVS Health, Scottsdale, AZ (AUG 2023 - PRESENT)</h4>
        <ul>
          <li>Led designing and implementing a high-performance synchronous API using Azure Durable Functions and Orchestrator, boosting data extraction efficiency by 30%.</li>
          <li>Developed and enhanced advanced data extraction models using Azure Form Recognizer and Custom Vision, significantly improving model accuracy and performance.</li>
          <li>Designed, executed, and tested automated testing service for AI models on Azure, streamlining the AI development cycle and enabling rapid deployment of production-level solutions.</li>
          <li>Managed API and testing service deployment on Azure Function App, employing Kafka and Azure Service Bus for efficient data streaming and leveraging GitLab for streamlined version control and deployment.</li>
        </ul>
      </div>
      <div className="light-background">
        <h3>Software Development Engineer</h3>
        <h4>Warner Bros. Discovery, Seattle, WA (OCT 2021 - JUN 2023)</h4>
        <ul>
          <li>Directed the design and execution of a major content migration project using API Gateway, Terraform, Kubernetes, and AWS Lambda, ensuring seamless integration and minimal service disruption.</li>
          <li>Collaborated with external partners like Google, Apple, Roku, and Amazon to extend HBOMax presence across 21 European countries, overcoming technical integration challenges and aligning diverse needs.</li>
          <li>Developed comprehensive Grafana metrics and dashboards for real-time monitoring of production metadata, improving operational management.</li>
          <li>Actively involved in SDLC processes, incident management using Splunk VictorOps, and system administration on Windows/Linux platforms.</li>
        </ul>
      </div>
      <div className="light-background">
        <h3>Software Development Engineer</h3>
        <h4>Slalom, Seattle, WA (MAR 2021 - OCT 2021)</h4>
        <ul>
          <li>Led the development of me@slalom tool as a full-stack engineer, enhancing project efficiency by 20% and consultant development by 15% using AWS Lambda, API Gateway, and DynamoDB.</li>
          <li>Improved data streaming and processing in me@slalom using Kafka, and developed a Selenium-based automation test framework, enhancing software reliability.</li>
          <li>Designed DynamoDB, Angular.js, and Node.js web applications, improving business process efficiency by 18%.</li>
          <li>Enhanced SDLC and quality with Jenkins automation and Grafana dashboards.</li>
        </ul>
      </div>
      <div className="light-background">
        <h3>Data Analyst</h3>
        <h4>TakeOff Educational Consultant, Vadodara, India (MAY 2017 - JUL 2018)</h4>
        <ul>
          <li>Migrated seven databases to Oracle, improving data analysis and decision-making, which was crucial for business objectives.</li>
          <li>Developed student profiles and conducted Excel-based analyses for strategic decisions.</li>
          <li>Maintained Oracle databases and used Excel for client data assessment, meeting technical specifications.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
