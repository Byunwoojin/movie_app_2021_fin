import React from "react";
import "./Detail.css"

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render() {
        const{ location }=this.props;
        if(location.state){
            const {title,rating, summary,poster} = location.state;
            console.log(rating);
            return(
                <div className="detail_container">
                    <br/>
                    <hr className="hr"/>
                    <div className="top">
                        <p className="top_title">Check out detailed information about the movie.</p>
                        <h3 className="detail_movie">{title}</h3>
                    </div>
                    <div className="middle"><img className="movie_image" src={poster} alt={title} title={title}/></div>
                    <div className="bottom">
                        <p className="rating">rating: {rating}</p>
                        <p className="detail_summary">{summary}</p>
                        {/*<button onClick={function ()} className="url_btn">Download</button>*/}
                    </div>
                </div>
            );
                    }
        else{
            return null;
        }
    }
}
export default Detail;

