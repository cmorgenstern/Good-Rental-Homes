import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';


{/*
	Function to render the "PlacesAutocomplete" field
	address - the value of the field
	handleChange - event handler for address
	See --> https://github.com/hibiken/react-places-autocomplete#props
*/}
export default function Autocomplete({ 
	value,
	onChange
}) {
	
	{/* 
		Function to render the children of PlacesAutocomplete 
		See --> https://github.com/hibiken/react-places-autocomplete#children	
	*/}
	const renderAutocompleteChildren = ({
		getInputProps,
        suggestions,
		getSuggestionItemProps,
        loading
    }) => (
		<div className="location-search-input">
            <input 
				{...getInputProps({
					placeholder: 'Search by address ...'
                })}
            />
            <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => (
					<div {...getSuggestionItemProps(suggestion)}>
						<span>{suggestion.description}</span>
					</div>
				))}
			</div>
		</div>
	);
	
	{/*
		Render the search field
		value - the address
		onChange - run the handleChange method in the parent component
	*/}
	return(
		<PlacesAutocomplete
			value={value}
			onChange={(e) => onChange(e)}
		>
			{renderAutocompleteChildren}
		</PlacesAutocomplete>
	);
}

