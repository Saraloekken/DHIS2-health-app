import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'

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

export function findValue (attributes, valueCode) {    
    return (attributes.find((item) => item.code === valueCode) ? attributes.find((item) => item.code === valueCode).value:'')
}

const IndexCasesApi = (props) => {
    const { loading, error, data } = useDataQuery(query) 
    
    return (
      <div>
        {loading && <span>...</span>}
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
        {loading && <span>...</span>}
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

export default findValue;
export { IndexCasesApi, ContactsApi };