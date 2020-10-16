import React from 'react';
import { useDataQuery } from '@dhis2/app-runtime';
import { CircularLoader } from '@dhis2/ui';

const query = {
    IndexCases: {
        resource: "trackedEntityInstances",
        params: {
          ou: 'EwEP9IhOwuw',
          program: 'uYjxkTbwRNf',
          fields: ["trackedEntityInstance", "attributes", "lastUpdated"],
        }
    },
    Contacts: {
      resource: "trackedEntityInstances",
      params: {
        ou: 'EwEP9IhOwuw',
        program: 'DM9n1bUw8W8',
        fields: ["trackedEntityInstance", "attributes", "lastUpdated"],
      }
  }
}

function findValue (attributes, valueCode) {    
    return (attributes.find((item) => item.code === valueCode) ? attributes.find((item) => item.code === valueCode).value:'')
}

const IndexCasesApi = (props) => {
    const { loading, error, data } = useDataQuery(query) 
    
    return (
      <div>
        {loading && <CircularLoader dataTest="dhis2-uicore-circularloader" />}
        {error && <span>{`ERROR: ${error.message}`}</span>}
        {data && (
          <pre>
              {data.IndexCases.trackedEntityInstances.map(({ trackedEntityInstance, attributes, lastUpdated}) => (
                <ul key={trackedEntityInstance}>
                    {findValue(attributes, "first_name") + ' ' + findValue(attributes, "surname") + ' ' + findValue(attributes, "patinfo_ageonset") + ' ' + lastUpdated.substring(0,10)} 
                </ul>
            ))}  
          </pre>
        )}
      </div>
    )
  };

  const ContactsApi = (props) => {
    const { loading, error, data } = useDataQuery(query) 
    
    return (
      <div>
        {loading && <CircularLoader dataTest="dhis2-uicore-circularloader" />}
        {error && <span>{`ERROR: ${error.message}`}</span>}
        {data && (
          <pre>
              {data.Contacts.trackedEntityInstances.map(({ trackedEntityInstance, attributes, lastUpdated}) => (
                <ul key={trackedEntityInstance}>
                    {findValue(attributes, "first_name") + ' ' + findValue(attributes, "surname") + ' ' + findValue(attributes, "patinfo_ageonset") + ' ' + lastUpdated.substring(0,10)} 
                </ul>
            ))}  
          </pre>
        )}
      </div>
    )
  };


export { IndexCasesApi, ContactsApi };