<<<<<<< HEAD
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

=======
  	var notepad ={
      notes: [
           {
            id      : 1,
            content : "primero comentario"
           },
           {
            id      : 2,
            content : "segundo comentario"
           },
           {
            id      : 3,
            content : "tercero comentario"
           },
           {
            id      : 4,
            content : "cuarto comentario"
           },
           {
            id      : 5,
            content : "quinto comentario"
           }
      ]
    };


      var NotesList = React.createClass({
          render : function(){
            var notes = this.props.notepad.notes;

            return (
              <div className="note-list">
                 {
                  notes.map(function(note) {
                    var title = note .content.substring(0,
                            note.content.indexOf('\n')
                            );
                    title = title || note.content;
                     return(
                           <div key={note.id} className="note-summary">{title}</div>
                        ); 
                  })
                 }
               </div>
              );
          }
      });




   //  var User = React.createClass({

  	//   getInitialState : function(){
	  // 	    return {
	  // 	      username    :"@vantonio",
	  // 	      avatar      :"tw.jpg",
	  // 	      description :"valentin antonio Frontend developers"     
	  // 	    }
  	//   },

  	//   changeUser : function(){
  	//       this.setState({
	  // 	      username    :"@azucenau",
	  // 	      avatar      :"az.jpg",
	  // 	      description :"Azucena Uresti Milenio noticias" 	      
  	//       })
  	//    },

  	// 	render : function(){
  	// 	 var image = "img/" + this.state.avatar;
  	// 		return(
  	// 			   <article className="User" onClick={this.changeUser}>
			// 		    <img src={image} className="User-avatar" width="100"/>
			//   		   <div className="User-description">
   //  		  			  <p className="User-name">{this.state.username}</p>
			//   			  <p>{this.state.description}</p>
			// 	  		</div>
			// 	  	</article>
			// 	  	)
  	// 	}
  	// })

  	// React.render(<User/>, document.getElementById('user'))
    React.render(<NotesList notepad={notepad}/>, document.body);
>>>>>>> f41920d3c2a0ae82b3b4712c29b03cbaf8723338
