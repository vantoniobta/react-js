import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const woman = 47;
const man   = 53;



const data = [
      {name: 'Enero',  usuarios: 114, amt: 2400},
      {name: 'Febrero',usuarios: 1274, amt: 2210},
      {name: 'Marzo',  usuarios: 901, amt: 2290},
      {name: 'Abril',  usuarios: 1908, amt: 2000},
      {name: 'Mayo',   usuarios: 1800, amt: 2181},
      {name: 'Junio',  usuarios: 1200, amt: 2500},
      {name: 'Julio',  usuarios: 1600, amt: 2100},
];


function Label(props) {
  return <div style={{ marginTop: 25, marginBottom: 5 }}>{props.children}</div>;
}


class Gender extends Component {
	render(){
		return (
     <div className="container">
            <h3>Audiencias y métricas</h3><br/>

            <div className="row">

                <div className="col-md-2">
                   <CircularProgressbar percentage={man} text={`${man}%`}
                     background
                     backgroundPadding={6} styles={{ background: {fill: '#0D355A',},
                     text: { fill: '#fff',},
                     path: {stroke: '#fff',},
                     trail: { stroke: 'transparent' },
                  }}/>
                   <Label><b>Hombre</b></Label>
              </div>


              
              <div className="col-sm-1  ">
                <CircularProgressbar percentage={woman} text={`${woman}%`} counterClockwise
                   background
                   backgroundPadding={6} styles={{ background: { fill: '#F00B42',},
                   text: { fill: '#fff',},
                   path: { stroke: '#fff',},
                   trail: { stroke: 'transparent' },
                   }}/>
                   <Label><b>Mujer</b></Label>
              </div>

              <div className="col-sm-2">

              </div>


              <div className="col-md-4">
               <LineChart width={600} height={300} data={data}
                 margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                 <CartesianGrid strokeDasharray="3 3"/>
                 <XAxis dataKey="name"/>
                 <YAxis/>
                 <Tooltip/>
                 <Legend />
                 <Line type="monotone" dataKey="usuarios" stroke="#DE1E7E" activeDot={{r: 8}} strokeDasharray="5 5" />
                </LineChart>
              </div>
        

        </div>
      </div>
			)
	}
}
export default Gender;