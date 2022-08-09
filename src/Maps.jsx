import { Component } from "react";
import {Map,GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component
{
    render()
    {
    return(
      <Map 
        google= {this.props.google}
        style= {{width:'970px',height:'500px'}}
        zoom = {10}
        initialCenter = 
        {
            {
                lat: 18.458742,
                lng: 73.855169
            }
        }
      />
    );
    
}
}
export default GoogleApiWrapper({
    apiKey:"AIzaSyB99lqe_Jf9JJ8xm3P88lOT4talO6oavrc"
})(MapContainer)