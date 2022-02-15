import React from 'react';
import { 
	compose, 
	withProps 
} from 'recompose';
import { 
	withScriptjs, 
	withGoogleMap, 
	GoogleMap, 
	Marker 
} from 'react-google-maps';


{/*
	react-google-maps component
	Shows a marker on the address coordinates
	See --> https://tomchentw.github.io/react-google-maps/#documentation
*/}
const MapComponent = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA2R2t03PiHkPhna_0HIxMZWXQxokn18W8&libraries=places",
		loadingElement: <div style={{ height: `50%`, width: `50%` }} />,
		containerElement: <div style={{ height: `200px`, width: '300px' }} />,
        mapElement: <div style={{ height: `100%` }} />
	}),
	withScriptjs,
	withGoogleMap
)((props) => (
	<GoogleMap
		defaultZoom={13}
		defaultCenter={{ lat: -41.293780094392474, lng: 174.78926645443323 }}
	>
		<Marker position={props.position} />
	</GoogleMap>
));

{/*
	react-google-maps class
	Requires "coordinates" prop
	See --> https://tomchentw.github.io/react-google-maps/#documentation
*/}
export default class Map extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<MapComponent
				position={this.props.coordinates}
			/>
		);
    };
};

