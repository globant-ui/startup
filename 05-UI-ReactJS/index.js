let movies = (typeof localStorage["Movies"] != "undefined") ? JSON.parse(localStorage["Movies"]) : [
  {title: "Superman", duration: "123", year: "1998",index: 0}]

	class ElementoLista extends React.Component {
    
    constructor(props){
      super(props)
      this.state = {
        title: '',
			duration: '',
			year: ''
      },
      this.deleteMovie = this.deleteMovie.bind(this),
      this.handleChange = this.handleChange.bind(this) 
      
    }
    deleteMovie(index)
    { 
      movies.splice(index,1)
      update();
			this.setState
			({
				listaNombres: movies
			}) 
		}
    handleChange(event)
    {
      console.log(event.target.value)
      var title2=this.setState({title: event.target.value});
    }
      
		render() {
			return (
			<div className="item">
          <div><strong>Title</strong>:{this.props.title}</div>           
          <div><strong>Duration</strong>:{this.props.duration}</div> 
          <div><strong>Year</strong>:{this.props.year}</div>   
			  	<div className="button-wrapper">
            <button className="NameForm" onClick={() => {this.deleteMovie(this.props.index)}}>Delete</button> 
            <button id="edit">Edit</button>
          </div>
         </div>
				)
			}
		}
		class Layout extends React.Component {
		constructor(props) 
		{
			super(props);
			this.state = {title: '',
			duration: '',
			year: '',
			listaNombres : this.props.rows},
			this.handleTitleChange = this.handleTitleChange.bind(this),
			this.handleDurationChange = this.handleDurationChange.bind(this),
			this.handleYearChange = this.handleYearChange.bind(this),
			this.handleSubmit = this.handleSubmit.bind(this)
			
		} 

		handleTitleChange(event) 
		{
		var title=this.setState({title: event.target.value});
		}
 
		handleDurationChange(event) 
		{
			var duration=this.setState({duration: event.target.value});
		}
		
		handleYearChange(event) 
		{
			var year=this.setState({year: event.target.value});
		}
		handleSubmit(event) 
		{
			event.preventDefault();
      var title = document.getElementById("title").value;
      var year = document.getElementById("year").value;
      var duration = document.getElementById("duration").value;
   
      if (title.length < 1) title = "Untitled";
      movies.push({title: title, duration: duration, year: year});
      update();
			
			this.setState
			({
				title: '',
				duration:'',
				year:'',
        index:'',
				listaNombres: movies
			})
			

		}
		
		
render() {
  console.log(this.state.listaNombres);
return (
		<div>
		 <div>
			<form onSubmit={this.handleSubmit}>
				<input type="text" id="title" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange}/> 
				<input type="text" id="duration" placeholder="Duration" value={this.state.duration} onChange={this.handleDurationChange}/> 
				<input type="text" id="year" placeholder="Year" value={this.state.year}  onChange={this.handleYearChange}/>
				<input type="Submit" defaultValue="Submit" />
			</form>
		</div>
		<div className="wrapper">         
				{
          this.state.listaNombres.length>0 ?(
           
           this.state.listaNombres.map((movie) => {
              return(
                <div>
                  <ElementoLista title={movie.title} duration={movie.duration} year={movie.year} index={movie.index}/>
                </div>
              )
            })
            )
          :<div>Agrega una pelicula!</div>
          }
                   

  </div>
</div>
		);
		}
}

function update() {
 
  var rows = [];
  for (var i=0; i < movies.length; i++) {

    rows.push(
      {title: movies[i].title , duration: movies[i].duration, year: movies[i].year, index: i}
    );
    
  }
  movies = rows;
  localStorage.setItem("Movies", JSON.stringify(movies));
  ReactDOM.render(<Layout rows={rows} />, document.getElementById("root"));
}
update();
