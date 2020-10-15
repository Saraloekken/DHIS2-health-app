import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'

const query = {
    trackedEntityInstances: {
        resource: 'trackedEntityInstances',
            params: {
                ou: 'EwEP9IhOwuw', 
                program: 'uYjxkTbwRNf',
                fields: ['trackedEntityInstance', 'attributes', 'lastUpdated']
            },
    },
}

function findValue (attributes, valueCode) {    
    return (attributes.find((item) => item.code === valueCode) ? attributes.find((item) => item.code === valueCode).value:'')
}

const IndexCasesApi = () => {
    const { loading, error, data } = useDataQuery(query)
    
    return (
      <div>
        {loading && <span>...</span>}
        {error && <span>{`ERROR: ${error.message}`}</span>}
        {data && (
          <pre>
              {data.trackedEntityInstances.trackedEntityInstances.map(({ trackedEntityInstance, attributes, lastUpdated}) => (
                <ul key={trackedEntityInstance}>
                    {findValue(attributes, "first_name") + ' ' + findValue(attributes, "surname") + ' ' + findValue(attributes, "patinfo_ageonset") + ' ' + lastUpdated.substring(0,10)} 
                </ul>
            ))}  
          </pre>
        )}
      </div>
    )
  };

export { IndexCasesApi };