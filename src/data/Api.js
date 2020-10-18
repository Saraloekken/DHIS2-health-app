import React from 'react';
import { useDataQuery } from '@dhis2/app-runtime';
import { TableCell, TableRow, Button, CircularLoader} from '@dhis2/ui';

const query = {
  IndexCases: {
      resource: "trackedEntityInstances",
      params: {
        ou: 'EwEP9IhOwuw',
        program: 'uYjxkTbwRNf',
        fields: ["trackedEntityInstance", "attributes", "lastUpdated", 'enrollments'],
      }
  },
  Contacts: {
    resource: "trackedEntityInstances",
    params: {
      ou: 'EwEP9IhOwuw',
      program: 'DM9n1bUw8W8',
      fields: ["trackedEntityInstance", "attributes", "lastUpdated", 'enrollments'],
    }
  },
  Relations: {
    resource: "trackedEntityInstances",
    params: {
      ou: 'EwEP9IhOwuw',
      fields: ["trackedEntityInstance", "attributes", "lastUpdated", 'enrollments'],
    }
  }
}


export function findValue (attributes, valueCode) {    
    return (attributes.find((item) => item.code === valueCode) ? attributes.find((item) => item.code === valueCode).value:'')
}

const IndexCasesApi = () => {
  const { loading, error, data } = useDataQuery(query) 

  if (error) {
    return <p>{error && <span>{`ERROR: ${error.message}`}</span>}</p>;
  }
  if (loading) {
    return <p>{loading && <CircularLoader/>}</p>;
  }

  return (data.IndexCases.trackedEntityInstances.map(({ attributes, lastUpdated, enrollments}) => (
                <TableRow>
                <TableCell>{findValue(attributes, "first_name")}</TableCell>
                <TableCell>{findValue(attributes, "surname")}</TableCell>
                <TableCell>{enrollments[0].incidentDate.substring(0,10)}</TableCell>
                <TableCell>{lastUpdated.substring(0,10)}</TableCell>
                <TableCell>{findValue(attributes, "patinfo_ageonset")}</TableCell>
                <TableCell>{findValue(attributes, "phone_local")}</TableCell>
                <TableCell>{enrollments[0].status}</TableCell>
                <TableCell dataTest="dhis2-uicore-tablecell" dense>
                  <Button
                    dataTest="dhis2-uicore-button"
                    name="Primary button"
                    onClick={function logger(_ref) {
                      var name = _ref.name,
                        value = _ref.value;
                      return console.info("".concat(name, ": ").concat(value));
                    }}
                    primary
                    type="button"
                    value="default"
                  >
                    Tracker Capture
                  </Button>
                </TableCell>
              </TableRow>
            ))
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
    
    return (data.Contacts.trackedEntityInstances.map(({ attributes, lastUpdated, enrollments}) => (
      <TableRow>
      <TableCell>{findValue(attributes, "first_name")}</TableCell>
      <TableCell>{findValue(attributes, "surname")}</TableCell>
      <TableCell>{enrollments[0].incidentDate.substring(0,10)}</TableCell>
      <TableCell>{lastUpdated.substring(0,10)}</TableCell>
      <TableCell>{findValue(attributes, "patinfo_ageonset")}</TableCell>
      <TableCell>{findValue(attributes, "phone_local")}</TableCell>
      <TableCell>{enrollments[0].status}</TableCell>
      <TableCell dataTest="dhis2-uicore-tablecell" dense>
        <Button
          dataTest="dhis2-uicore-button"
          name="Primary button"
          onClick={function logger(_ref) {
            var name = _ref.name,
              value = _ref.value;
            return console.info("".concat(name, ": ").concat(value));
          }}
          primary
          type="button"
          value="default"
        >
          Tracker Capture
        </Button>
      </TableCell>
    </TableRow>
  ))
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
    
    return (data.Relations.trackedEntityInstances.map(({ attributes, lastUpdated, enrollments}) => (
      <TableRow>
      <TableCell>{findValue(attributes, "first_name")}</TableCell>
      <TableCell>{findValue(attributes, "surname")}</TableCell>
      <TableCell>Undefined</TableCell>
      <TableCell>{lastUpdated.substring(0,10)}</TableCell>
      <TableCell>{findValue(attributes, "patinfo_ageonset")}</TableCell>
      <TableCell>{findValue(attributes, "phone_local")}</TableCell>
      <TableCell>Undefined</TableCell>
      <TableCell dataTest="dhis2-uicore-tablecell" dense>
        <Button
          dataTest="dhis2-uicore-button"
          name="Primary button"
          onClick={function logger(_ref) {
            var name = _ref.name,
              value = _ref.value;
            return console.info("".concat(name, ": ").concat(value));
          }}
          primary
          type="button"
          value="default"
        >
          Tracker Capture
        </Button>
      </TableCell>
    </TableRow>
  ))
)
  };


export default findValue;
export { IndexCasesApi, ContactsApi, RelationsApi };
