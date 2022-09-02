import React from "react";

function ArroyoContent () {
  return (
    <div class="arroyo-content">
      <p>
        Arroyo integrates with a user's existing ELK stack to rehydrate logs archived in AWS S3 and re-ingests those logs back into Elasticsearch. Users can reingest logs by date range, and they may also input search terms to refine their search further.
      </p>
      <p>
        I built Arroyo as part of a four-person remote team spanning three separate time zones intending to breathe new life into older data.
        Whether to develop new metrics with some additional historical context or search logs in a feature-rich familiar environment for audit purposes, Arroyo can help derive value <em>when</em> needed.
      </p>
      <p>
        Arroyo's infrastructure is easily deployed to AWS with a single command. Once rehydration jobs are completed, Arroyo can automatically destroy that infrastructure to avoid unnecessary resource use.
      </p>
      <a rel="noreferrer" target="_blank" href="https://www.arroyoframework.com/case-study.html" className="btn btn-border-light btn-lg">Read Case Study</a>
    </div>
  )
}

export default ArroyoContent;