import React from "react";
import "./Detail.css"
import { AiFillStar } from "react-icons/ai";

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
            const {title,rating, summary,poster,genres,year} = location.state;
            console.log(rating);
            return(
                <div className="detail_container">
                    <hr className="hr"/>
                    <div className="top">
                        <h3 className="detail_movie">{title}</h3>
                    </div>
                    <div className="middle"><img className="movie_image" src={poster} alt={title} title={title}/></div>
                    <div className="bottom">
                        <div className = "rating" style={{display:"flex", justifyContent:'center'}}>
                            <p style={{marginRight:'10px'}}>{year} Year &nbsp;&nbsp;/</p>
                            <p><AiFillStar style={{ color:'#EE9A77',fontSize:20, marginRight:3,}}/> </p>
                            <p>{rating}</p>
                        </div>
                        <ul className="movie__genres">
                            {genres.map((genre,idx)=>
                                <li key={idx} className="genres__genre">{genre}</li>)}
                        </ul>
                        <p className="detail_summary">{summary}</p>
                        {/*<button onClick={function ()} className="url_btn">Download</button>*/}
                    </div>
                    <hr className="hr"/>
                </div>
            );
                    }
        else{
            return null;
        }
    }
}
export default Detail;

