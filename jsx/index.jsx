   var User = React.createClass({

  	  getInitialState : function(){
	  	    return {
	  	      username    :"@vantonio",
	  	      avatar      :"tw.jpg",
	  	      description :"valentin antonio Frontend developers"     
	  	    }
  	  },

  	  changeUser : function(){
  	      this.setState({
	  	      username    :"@azucenau",
	  	      avatar      :"az.jpg",
	  	      description :"Azucena Uresti Milenio noticias" 	      
  	      })
  	   },

  		render : function(){
  		 var image = "img/" + this.state.avatar;
  			return(
  				   <article className="User" onClick={this.changeUser}>
					    <img src={image} className="User-avatar" width="100"/>
			  		   <div className="User-description">
    		  			  <p className="User-name">{this.state.username}</p>
			  			  <p>{this.state.description}</p>
				  		</div>
				  	</article>
				  	)
  		}
  	})

 React.render(<User/>, document.getElementById('user'))


 var Hello = React.createClass({
  	    render: function(){
  	    return <h1>Hello {this.props.name}</h1>
  	}
  });

  React.render(
    document.getElementById('title')
  )

