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
  },
  Relations: {
    resource: "trackedEntityInstances",
    params: {
      ou: 'EwEP9IhOwuw',
      fields: ["trackedEntityInstance", "attributes", "lastUpdated"],
    }
  }
}


export function findValue (attributes, valueCode) {    
    return (attributes.find((item) => item.code === valueCode) ? attributes.find((item) => item.code === valueCode).value:'')
}

const IndexCasesApi = () => {
  const { loading, error, data } = useDataQuery(query) 
  let indexCases = [];

  if (error) {
    return <p>{error && <span>{`ERROR: ${error.message}`}</span>}</p>;
  }
  if (loading) {
    return <p>{loading && <CircularLoader/>}</p>;
  }

  return (
      <div>
        {data && (
          <pre>
              {data.IndexCases.trackedEntityInstances.map(({ trackedEntityInstance, attributes, lastUpdated}) => (
                 <div>
                  {indexCases.push({
                    key: trackedEntityInstance,
                    id: trackedEntityInstance, 
                    first_name: findValue(attributes, "first_name"),
                    surname: findValue(attributes, "surname"),
                    age: findValue(attributes, "patinfo_ageonset"),
                    lastUpdated: lastUpdated.substring(0,10)})}
             </div>
            ))}
          </pre>
        )}
      </div>
    )
  };

  const ContactsApi = () => {
    const { loading, error, data } = useDataQuery(query) 

    if (error) {
      return <p>{error && <span>{`ERROR: ${error.message}`}</span>}</p>;
    }
    if (loading) {
      return <p>{loading && <CircularLoader/>}</p>;
    }
    
    return (
      <div>
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


  const RelationsApi = () => {
    const { loading, error, data } = useDataQuery(query); 

    if (error) {
      return <p>{error && <span>{`ERROR: ${error.message}`}</span>}</p>;
    }
    if (loading) {
      return <p>{loading && <CircularLoader/>}</p>;
    }
    
    return (
      <div>
        {data && (
          <pre>
              {data.Relations.trackedEntityInstances.map(({ trackedEntityInstance, attributes, lastUpdated}) => (
                <ul key={trackedEntityInstance}>
                    {findValue(attributes, "first_name") + ' ' + findValue(attributes, "surname") + ' ' + findValue(attributes, "patinfo_ageonset") + ' ' + lastUpdated.substring(0,10)} 
                </ul>
            ))}  
          </pre>
        )}
      </div>
    )
  };


export default findValue;
export { IndexCasesApi, ContactsApi, RelationsApi };
