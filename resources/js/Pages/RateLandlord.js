import '../../css/RatePages.css';
import "antd/dist/antd.css";
import React, { Component } from 'react';
import axios from 'axios';
import Header from "@/Components/Header";
import CheckboxComponent from "@/Components/Checkbox";
import Note from "@/Components/Note";
import DefaultNotes from "@/Components/notes";
import DateSelector from "@/Components/DateSelector"
import CheckboxController from "@/Components/ConditionalTextfield";
import "antd/dist/antd.css";
import Footer from "@/Components/Footer";
import Checkbox from "@/Components/Checkbox";
import PlacesAutocomplete from 'react-places-autocomplete';


export default class Landlords extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			address: '',
        	anonymous: false,
        	start_date: '',
        	end_date: '',
        	landlord: '',
        	agency: false,
        	agency_name: '',
        	communication: '',
        	discretion: '',
        	responsiveness: '',
        	compliance: '',
        	overall_rating: '',
        	overall_comment: '',
        	contact: false
		}

		this.onChangeValue = this.onChangeValue.bind(this);
		this.onChangeChecked = this.onChangeChecked.bind(this);
		this.onHandleSubmit = this.onHandleSubmit.bind(this);
	}

	onChangeValue(event) {
        console.log(event);
		let value = event.target.value
		this.setState({
			[event.target.name]: value
		});
	}

	onChangeChecked(event) {
		let checked = event.target.checked
		this.setState({
			[event.target.name]: checked
		});
	}

	onHandleSubmit(event) {
		event.preventDefault;
		axios.post('/submit-landlord', {
			address: this.state.address,
            anonymous: this.state.anonymous,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            landlord: this.state.landlord,
            agency: this.state.agency,
            agency_name: this.state.agency_name,
            communication: this.state.communication,
            discretion: this.state.discretion,
            responsiveness: this.state.responsiveness,
            compliance: this.state.compliance,
            overall_rating: this.state.overall_rating,
            overall_comment: this.state.overall_comment,
            contact: this.state.contact
		})
		.catch(function (error) {
			console.log(error);
		});

		this.setState({
            address: '',
            anonymous: false,
            start_date: '',
            end_date: '',
            landlord: '',
            agency: false,
            agency_name: '',
            communication: '',
            discretion: '',
            responsiveness: '',
            compliance: '',
            overall_rating: '',
            overall_comment: '',
            contact: false
		});
	}

	render() {
		return (
    	    <div>
    	        <div className="pageHeader">
    	            <Header title="Rate Landlord"/>
    	        </div>

    	        <div>
					<form onSubmit={this.onHandleSubmit}>
						<label htmlFor="addressQuestion">What is the address of the property?</label>

    	        		<div className="map">
							<PlacesAutocomplete
								value={this.state.address}
								onChange={this.onChangeValue}
								searchOptions={{
									componentRestrictions: {
										country: 'NZ'
									}
								}}
							>
								{({
								    getInputProps,
    	                  		    suggestions,
    	                  		    getSuggestionItemProps,
    	                  		    loading
    	                  		}) => (
    	                  		  <div>
    	                  		      <input
    	                  		          {...getInputProps({
    	                  		              placeholder: 'Search Places ...',
    	                  		              className: 'location-search-input'
    	                  		          })}
    	                  		      />
    	                  		      <div className="autocomplete-dropdown-container">
    	                  		          {loading && <div>Loading...</div>}
    	                  		          {suggestions.map(suggestion => {
    	                  		              const className = suggestion.active
    	                  		                  ? 'suggestion-item--active'
    	                  		                  : 'suggestion-item';
    	                  		              // inline style for demonstration purpose
    	                  		              const style = suggestion.active
    	                  		                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
    	                  		                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
    	                  		              return (
    	                  		                  <div
    	                  		                      {...getSuggestionItemProps(suggestion, {
    	                  		                          className,
    	                  		                          style
    	                  		                      })}
    	                  		                      key={suggestion.placeId}
    	                  		                  >
    	                  		                      <span>{suggestion.description}</span>
    	                  		                  </div>
    	                  		              );
    	                  		          })}
    	                  		      </div>
    	                  		  </div>
						  		)}
							</PlacesAutocomplete>

    	        		</div>
						
						{/*----anonQuestion-START---------------------------------------------------------------------------*/}
            		    <div className="checkNQuestion">
							<div className="borderQuestion">
								<label htmlFor="anonQuestion"> Would you like to submit this form anonymously?</label>
								<Checkbox/>
							</div>
            		    </div>
            		    {/*----anonQuestion-END-----------------------------------------------------------------------------*/}

            		    {/*----datesQuestion-START--------------------------------------------------------------------------*/}
            		    <div className="row">
            		        <div className="col-25">
            		            <label htmlFor="datesQuestion">What dates were you at the property?</label>
            		        </div>
            		        <div className="col-25">
            		            <label htmlFor="startDate">Start Date:</label>
            		            <div className="dateSelector">
            		                <DateSelector/>
            		            </div>
            		            <label htmlFor="endDate">End Date:</label>
            		            <div className="dateSelector">
            		                <DateSelector/>
            		            </div>
            		        </div>
            		    </div>
            		    {/*----datesQuestion-END----------------------------------------------------------------------------*/}
	                    
						{/*----landlordNameQuestion-START-------------------------------------------------------------------*/}
	                    <div className="borderQuestion">
	                        <div className="row">
	                            <div className="col-25">
	                                <label htmlFor="landlordNameQuestion">What is your landlord's name?</label>
	                            </div>
	                            <div className="col-75">
	                            <textarea>
	                            Name
	                         </textarea>
	                            </div>
	                        </div>
	                    </div>
	                    {/*----landlordNameQuestion-END---------------------------------------------------------------------*/}

    	        		{/*----agencyQuestion-START-------------------------------------------------------------------------*/}
    	        		<div className="row">
    	        		    <div className="col-25">
    	        		        <label htmlFor="agencyQuestion">Is your landlord part of a professional agency?</label>
    	        		        <CheckboxController/>
    	        		    </div>
    	        		</div>
    	        		{/*----agencyQuestion-END---------------------------------------------------------------------------*/}

    	        		{/*----ratings-START--------------------------------------------------------------------------------*/}
    	        		<div className="defaultNotes">
    	        		    {DefaultNotes.map(item => (
    	        		        <Note
    	        		            key={item.key}
    	        		            title={item.title}
    	        		            content={item.content}
    	        		        />))}
    	        		</div>
    	        		{/*----ratings-END----------------------------------------------------------------------------------*/}

    	        		{/*----overallComments-START------------------------------------------------------------------------*/}
    	        		<div className="row">
    	        		    <div className="col-25">
    	        		        <label htmlFor="overallComments">Overall comments about the landlord</label>
    	        		    </div>
    	        		    <div className="col-75">
    	        		        <textarea>Your other comments about the landlord</textarea>
    	        		    </div>
    	        		</div>
    	        		{/*----overallComments-END--------------------------------------------------------------------------*/}

						{/*----contactQuestion-START------------------------------------------------------------------------*/}
                    	<div className="borderQuestion">
                    	    <div className="row">
                    	        <div className="col-25">
                    	            <label htmlFor="contactQuestion">Are you happy to be contacted by prospective tenants
                    	                about the property?</label>
                    	        </div>
                    	        <div className="col-25">
                    	            <Checkbox/>
                    	        </div>
                    	    </div>
                    	</div>
                    	{/*----contactQuestion-END--------------------------------------------------------------------------*/}

                    	{/*----submitButton-START---------------------------------------------------------------------------*/}
                    	<div className="buttonContainer">
                    	    <button className="button">Submit</button>
                    	</div>

                    	{/*----submitButton-END-----------------------------------------------------------------------------*/}
					</form>
				</div>
            </body>
			<Footer/>
        </div>
    );
}

