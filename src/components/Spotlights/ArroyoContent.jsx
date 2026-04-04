import React from "react";

function ArroyoContent () {
  return (
    <div class="arroyo-content">
      <p>
        Arroyo is a lightweight framework that integrates with a user's existing ELK stack to rehydrate logs archived in AWS S3 back into Elasticsearch. Users can reingest logs by date range, with support for custom query terms and SQL statement generation via S3 Select to conditionally target matching records.
      </p>
      <p>
        I co-created Arroyo as part of a four-person remote team spanning three separate time zones. I led development of a RESTful API, implemented a notification feature using AWS SQS and server-sent events, and leveraged a serverless compute model via AWS Lambda to optimize multiple asynchronous rehydration jobs.
      </p>
      <p>
        Arroyo's infrastructure — including S3, SQS, Lambda, and IAM roles — can be automatically provisioned and torn down using the AWS SDK, reducing approximately 30 asynchronous API calls to two single-line commands. The UI and backend are decoupled and containerized using custom Docker images published to Docker Hub.
      </p>
      <a rel="noreferrer" target="_blank" href="https://www.arroyoframework.com/case-study.html" className="btn btn-border-light btn-lg">Read Case Study</a>
    </div>
  )
}

export default ArroyoContent;