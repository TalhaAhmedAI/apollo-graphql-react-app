import gql from 'graphql-tag'

export const Launches_List = gql`
query LaunchesList{
    launches {
        flight_number
        mission_name
        launch_year
    }
}`