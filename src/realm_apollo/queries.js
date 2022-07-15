import gql from "graphql-tag";

const GET_LOGS = gql`
  query getLogs {
    eulerlogs{
      timestamp
      sourceId
      sourceVersion
      logName
      logSeverity
      logTags
      logDescription
    }
  } 
`;

export {GET_LOGS}

