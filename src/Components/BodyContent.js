import React, {Component} from 'react'
import headshot from '../images/Jose.jpg'
import vb from '../images/download.png';
import vue_logo from '../images/vuejs_logo.jpeg';
import spikeJones from '../images/spikeJones.jpg';
import Moment from 'moment';

class BodyContent extends Component {
    constructor() {
        super();
        this.state = {
            name: "Jose Cisneros",
            email: "josecis0216@gmail.com",
            title: "IT, Sendsations",
            error: null,
            isLoaded: false,
            items: []
        };
      }
    componentDidMount() {
        fetch("https://jose-jobs-api.herokuapp.com/jobs")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.jobs
              });
            },
            
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
        return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
            return <div>Loading...</div>;
            } else {
        return (
            <div>
                <div className="containerStyles"id="home">
                    <div className="containerStylesRow">
                        <div className="col-lg-4" style={{padding: 20+'px'}}>
                            <h2>{this.state.name}</h2>
                            <p>{this.state.email}</p>
                            <p>{this.state.title}</p>
                            {/* <p>I am {this.props.info.years} years old</p> */}
                        </div>
                        <div className="col-lg-4">
                            
                        </div>
                        <div className="col-lg-4">
                        <img src={headshot} className="card" alt="logo" style={{marginTop: 10+'px'}}/>
                        </div>
                    </div>
                </div>
                <div className="container" id="experience">
                    <div className="row flex"> 
                        {items.map(item => (
                            <div className="col-lg-4 col-sm-12">
                            <h4 className="jobStyles" key={item.job}>{item.job}</h4>
                            <h5>{item.position}</h5>
                            <h6>From: {Moment(item.startDate).format('MM/DD/YYYY')}</h6>
                            <h6>To: {Moment(item.endDate).format('MM/DD/YYYY')}</h6>
                            <p style={{textAlign:"left"}}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="containerStyles">
                    <div className="containerStylesRow">
                        {/* <div className="col-lg-4 col-sm-12"></div> style={{maxWidth:450+'px'}}*/}
                        <div className="col-lg-6 col-sm-12" >
                            <ul>
                                <li className="liStyles" key={"ul1"}>
                                    <p>
                                        <span className="ulStyles">Peace of mind</span> -- My passion is to meet deadlines and
                                        thrill clients with the appropriate deliverables. This will continue to give you the comfort
                                        of knowing the work will be done well and efficiently. 
                                    </p>
                                </li>
                                <li className="liStyles" key={"ul2"}>
                                    <p>
                                        <span className="ulStyles">More time for your loved activites</span> -- I am already familiar with 
                                        the software and technology your company uses, meaning that will make training and supervising me very
                                        minimal, allowing you to focus on your own things.
                                    </p>
                                </li>
                                <li className="liStyles" key={"ul3"}>
                                    <p>
                                        <span className="ulStyles">A boost in revenue</span> -- I'm acutely aware of the need for excellence in output
                                        and client satisfaction, and that leads to client retention and spontaneous referrals for your company.
                                    </p>
                                </li>
                            </ul>
                        </div>    
                        <div className="col-lg-6 col-sm-12" >
                            <ul>
                                <li className="liStyles" key={"ul4"}>
                                    <p>
                                        <span className="ulStyles">Increase in productivity</span> -- With my experience, I can bring a different 
                                        work ethic that will stand out and show results necessary for the development team.
                                    </p>
                                </li>
                                <li className="liStyles" key={"ul5"}> 
                                    <p>
                                        <span className="ulStyles">Maximize efficiency</span> -- My time organization will bring effeciency
                                        to the team and I will provide exceptional work in a timely manner. 
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-sm-12"></div>
                    </div>
                </div>
                <div className="container containerCards" id="projects">
                    <div className="row flex">
                        <div className="col-lg-4 col-sm-12">
                            <div className="card cardStyles"> 
                                <img className="card-img-top" src={vb} alt="visual basic logo" style={{height: 12+'rem'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Time Clock in VB</h5>
                                    <p className="card-text">I developed a time clock that is used at my current workplace. The functionality includes,
                                    clocking in and out, checking the users daily hours, allowing an admin to get hours for a week to pay user, and allowing
                                    user to set status for the day.</p>
                                    <a href="https://github.com/josecis0216/SendsatTimeClock" className="btn btn-primary">Go to GitHub repo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="card cardStyles">
                                <img className="card-img-top" src={spikeJones} alt="logo" style={{height: 12+'rem'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Spike Jones Website</h5>
                                    <p className="card-text">While in school a classmate and I developed a website for the iconic, Spike Jones. We used a 
                                    software called Piwigo, which was developed in php, and that was the database for our media content. The framework we used
                                    was bootstrap.</p>
                                    <a href="https://github.com/josecis0216/Spike-Jones" className="btn btn-primary">Go to GitHub repo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="card cardStyles">
                                <img className="card-img-top" src={vue_logo} alt="vue logo" style={{height: 12+'rem'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Soccer Players Project</h5>
                                    <p className="card-text">Also in school, I created a web app using VueJs and graphql, incorporating the Prisma framework
                                    to connect to my postgresql database that was contained in a docker container. 
                                    </p><br/>
                                    <a href="https://github.com/josecis0216/josecis0216-Final-Frontend" className="btn btn-primary">Go to GitHub repo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      );}
    }
}
export default BodyContent;