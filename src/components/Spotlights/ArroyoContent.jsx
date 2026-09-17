import React from "react";

function ArroyoContent () {
  return (
    <div class="arroyo-content">
      <p>
        Arroyo is an open-source log rehydration tool designed to make long-term log storage more cost-efficient. Instead of keeping historical logs permanently indexed in Elasticsearch, teams can archive them in S3 and selectively rehydrate only the logs needed for a particular timeframe or query.
      </p>
      <p>
        I co-created Arroyo with three other engineers as our Launch School Capstone project, working across a distributed, four-person remote team. I led development of the REST API, including SQL/query generation using S3 Select to target matching records, and built a notification system using AWS SQS and server-sent events so users get real-time updates as rehydration jobs run.
      </p>
      <p>
        Arroyo automatically provisions and tears down its own AWS infrastructure — S3, SQS, Lambda, and IAM — reducing roughly 30 asynchronous AWS operations to a single command. Lambda handles concurrent rehydration jobs, and the frontend and backend are both containerized, with a local ELK stack for development and testing.
      </p>
      <a rel="noreferrer" target="_blank" href="https://www.arroyoframework.com/case-study.html" className="btn btn-border-light btn-lg">Read Case Study</a>
    </div>
  )
}

export default ArroyoContent;