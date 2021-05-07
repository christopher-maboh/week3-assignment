import React, {Component} from "react";
import PropTypes from "prop-types";
import airbnbs from "./Airbnbs.json"
const airbnb = airbnbs
console.log(airbnb)
class Airbnbs extends React.Component{
   static propTypes = {
       airbnbs: PropTypes.shape({
           location:PropTypes.shape({
               city:PropTypes.string.isRequired,
               country:PropTypes.string.isRequired
           }).isRequired,
           payment:PropTypes.shape({
            cost:PropTypes.number.isRequired,
            description:PropTypes.string.isRequired
        }).isRequired,
        host:PropTypes.shape({
            name:PropTypes.string.isRequired,
            isSuperhost:PropTypes.bool.isRequired
        }).isRequired,
        rating:PropTypes.shape({
            stars:PropTypes.number.isRequired,
            reviews:PropTypes.number.isRequired
        }).isRequired,
        title:PropTypes.string.isRequired,
        houseType:PropTypes.string.isRequired,
        image:PropTypes.string.isRequired
       })
   }   
    render() {
        return(
            <main className="block col-2">
            <div>
            <h2>Products</h2>
            <div className='airbnb-holder'>
            {airbnb.map((post, id, onAdd)=> {
<div key={post.id} post={post} onAdd={onAdd}></div>
                return(
                    <div key={id} class='card-wrap'>
                        <div class='card-image' > <img src={post.image} width='250' height= '250' class='card-author-image'/>
                        </div>
                        <div  class='card-content-holder'>
                            <div  class='content-features'>
                                <div  class='content-audio'>
                                    <img />
                                    <p></p>
                                </div>
                                <div  class='content-member-preview'>
                                    <img />
                                    <p></p>
                                </div>
                                <div class='card-content-text-holder'>
                                    <h4><a href={post.link}>{post.title}</a></h4>
                                    <p>{post.houseType}</p>
                                </div>
                                <div class='card-content-data-holder'>
                                    <div  class='card-content-data-inner'>
                                       <div key={post.id} class='card-location-city'/>
                                       {post.location.city}
                                            <div key={post.id} class='card-location-country'>
                                                <h5>{post.location.country}</h5>
                                                <div class=' card-payment-cost'>
                                                    ${post.payment.cost}
                                                    <div key={post.id} class=' card-payment-description'>
                                                   <h5>{post.payment.description}</h5>
                                                </div>
                                                <div class=' card-host-name'>
                                                    {post.host.name}
                                                    <div key={post.id} class=' card-host-isSuperhost'>
                                                   <h5>{post.host.isSuperhost}</h5>
                                                </div>
                                                <div class=' card-ratings-stars'>
                                                    {post.rating.stars}
                                                    <div key={post.id} class=' card-ratings-reviews'>
                                                   <h5>{post.rating.reviews}</h5>
                                                </div>
                                                <div><button onClick={() => onAdd(post)}> Add to cart</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                )
            })}
        </div>
        </div>
        </main>
    )
        }
    }
export default Airbnbs