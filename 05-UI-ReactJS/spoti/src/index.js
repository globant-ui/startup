import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

var SpotifyWebApi = require('spotify-web-api-node');

//	aca estas instanciando el nodo que bajaste recien
//	y le asignas las credenciales que son opcionales
//	pero necesitas esta variable para despues llamar a las
//	funciones del nodo, entendes?
var spotifyApi = new SpotifyWebApi({
  clientId : 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret : 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri : 'http://www.example.com/callback'
});

class Artists extends React.Component {

	constructor(){
		super()
		this.state= {
			ArtistList: [],
			ArtistShow: true,

		}
		this.searchArtist= this.searchArtist.bind(this)
		this.handleArtist= this.handleArtist.bind(this)
	}

	searchArtist(){
		spotifyApi.searchArtists(this.props.name,  { limit : 8, offset: 0 })
  		.then((data) => {
  			this.state.ArtistList.push(data.body.artists.items)
  			
  			this.setState({
  				ArtistList: this.state.ArtistList[0],
  				ArtistShow: false
  			})
  			
  		}, (err) =>{
    		console.error(err);
  		});

  		
	}
	

	handleArtist(e){
		this.props.getArtist(e.target.id);
		this.setState({
			AlbumShow: true
		})
	}
	render(){
		this.state.ArtistShow ? this.searchArtist() : null
		return(
			<div className='container'>
			{this.state.ArtistList.map((data, number) =>{
				return (
					<div key={number} className='col-md-3'>
						<a>
							<img onClick={this.handleArtist} id={data.id} className='img-thumbnail img-responsive imagen center-block' alt={data.name} src={data.images[0].url} />
							<div className='caption'>
								<p className='text-center link'>{data.name}</p>
							</div>
						</a>
					</div>
					
			)})}	
			</div>
	
		)
	}
}


class Albums extends React.Component {
	constructor(){
		super()
		this.state= {
			AlbumList: [],
			AlbumShow: true
		}
		this.searchAlbum= this.searchAlbum.bind(this)
		this.handleAlbum= this.handleAlbum.bind(this)
	}

	searchAlbum(){
		spotifyApi.getArtistAlbums(this.props.id, {limit: 8, offset: 20})
  		.then((data) => {
  			this.state.AlbumList.push(data.body.items)
  			this.setState({
  				AlbumList: this.state.AlbumList[0],
  				AlbumShow: false
  			})
  			
  		}, (err) =>{
    		console.error(err);
  		});	
	}

	handleAlbum(e){
		
		this.props.getAlbum(e.target.id);
		this.setState({
			TrackShow: true
		})
	}


	render(){

		this.state.AlbumShow ? this.searchAlbum() : null

		return(
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<h2 className='text-center'>Albums</h2>
					</div>
				</div>
			{this.state.AlbumList.map((data, number) =>{
				return (
					<div key={number} className='col-md-3'>
						<a>
							<img onClick={this.handleAlbum} id={data.id} className='img-thumbnail img-responsive imagen center-block' alt={data.images[0].url} src={data.images[0].url} />
							<div className='caption'>
								<p className='text-center link'>{data.name}</p>
							</div>
						</a>
					</div>
					
			)})}	
			</div>
		)
	}
}


class Tracks extends React.Component {
	constructor(){
		super()
		this.state= {
			TrackList: [],
			TrackShow: true
		}
		this.searchTrack= this.searchTrack.bind(this)
	}

	searchTrack(){
		spotifyApi.getAlbumTracks(this.props.id)
  		.then((data) => {
  			this.state.TrackList.push(data.body.items)
  			this.setState({
  				TrackList: this.state.TrackList[0],
  				TrackShow: false
  			})
  			
  		}, (err) =>{
    		console.error(err);
  		});	
	}

	render(){

		this.state.TrackShow ? this.searchTrack() : null

		return(
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<h2 className='text-center'>Songs</h2>
					</div>
				</div>
			{this.state.TrackList.map((data, number) =>{
				return (
					<div key={number} className='col-md-4 spoti'>

						<div className='caption'>
							<p className='link'>Song: {data.name}</p>
						</div>
						<audio controls="controls" src={data.preview_url}>
						</audio>
						<a href={data.external_urls.spotify} target="_blank"><span className='glyphicon glyphicon-download'></span></a>
					</div>
					
			)})}	
			</div>
		)
	}
}


// -------------------------------------------




// -------------------------------------------
class SpotiApp extends React.Component {

	constructor(){
		super();
		this.state= {
			ArtistID: '',
			AlbumID: '',
			SearchValue: '',
			ArtistShow: false,
			AlbumShow: false,
			TrackShow: false,
		}
		this.handleChange= this.handleChange.bind(this)
		this.handleSubmit= this.handleSubmit.bind(this)
		this.searchFor= this.searchFor.bind(this)
		this.searchAlbum= this.searchAlbum.bind(this)
	}

	handleChange(e){
		this.setState({[e.target.value]: e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		this.setState({
			SearchValue: e.target.srch.value,
			ArtistShow: true
		})
	}

	searchFor(e){
		this.setState({
			ArtistID: e,
			AlbumShow: true,
			ArtistShow: false
		})
		
	}

	searchAlbum(e){
		this.setState({
			AlbumID: e,
			TrackShow: true,
			AlbumShow: false
		})
		
	}

	searchTrack(e){
		this.setState({
			AlbumID: e,
			TrackShow: false
		})
		
	}
	
	
	
	render(){
		
		return (

			<div className='container'>
				<div className='row'>
					<div className='col-md-8 col-md-offset-5'>
						<h1 className=''>Search Artist</h1>
						
						<form className="navbar-form" onSubmit={this.handleSubmit} >
						    <div className="input-group">
						    	<input className="form-control" placeholder="Search" name="srch" id="srch" type="text" value={this.state.ArtistName} onChange={this.handleChange} />
						    	<div className="input-group-btn">
						        	<button className="btn btn-default btn-info" type="submit"><i className="glyphicon glyphicon-search"></i>	
						        	</button>

						    	</div>
	    					</div>
	  					</form>
					</div>
				</div>
				<div className='row'>
					<div>
						{this.state.ArtistShow ? <Artists name={this.state.SearchValue} getArtist={this.searchFor} /> : null }
					</div>
				</div>
				<div className='row'>
					<div>
						{this.state.AlbumShow ? <Albums id={this.state.ArtistID} getAlbum={this.searchAlbum} /> : null }
					</div>
				</div>

				<div className='row'>
					<div>
						{this.state.TrackShow ? <Tracks id={this.state.AlbumID} getTrack={this.searchTrack} /> : null }
					</div>
				</div>
			</div>
		
	)}
}



ReactDOM.render(
  <SpotiApp />,
  document.getElementById('root')
);
