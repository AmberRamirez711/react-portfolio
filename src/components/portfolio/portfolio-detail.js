import React, { Component } from "react";
import axios from 'axios';

// id: 14311
// name: "DevCamp"
// description: "Coding Bootcamp"
// url: "https://devcamp.com"
// category: "Education"
// position: 4
// thumb_image_url: "https://devcamp-space.s3.amazonaws.com/PCVv6g6b3wq6VEMxnZPXJLce?response-content-disposition=inline%3B%20filename%3D%22devcamp.jpg%22%3B%20filename%2A%3DUTF-8%27%27devcamp.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20200413%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200413T183409Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=f6dce5435bb120afbdd381699cc48f0b5d41448ba331f541c581efd5936b9e3b"
// banner_image_url: "https://devcamp-space.s3.amazonaws.com/WPDYxaGg5MuU63r3SW6JRAPx?response-content-disposition=inline%3B%20filename%3D%22devcamp.jpg%22%3B%20filename%2A%3DUTF-8%27%27devcamp.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20200413%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200413T183409Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=88b66b7c52c24239ac5993c537ea450c60025f70c39fd7b450c86f16667b04d9"
// logo_url: "https://devcamp-space.s3.amazonaws.com/dwTjzP3siUtN95RMcp5mRbdn?response-content-disposition=inline%3B%20filename%3D%22devcamp.png%22%3B%20filename%2A%3DUTF-8%27%27devcamp.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20200413%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200413T183409Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=50c6a3071a1e9b938f6599254cfcc2e358bf57f80609eb5604f238267ce0531c"
// column_names_merged_with_images: (9)["id", "name", "description", "url", "category", "position", "thumb_image", "banner_image", "logo"]

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItem: {}

        }
    }

    componentWillMount() {
        this.getPortfolioItem();
    }

    getPortfolioItem() {
        axios
            .get(
                `https://amberramirez.devcamp.space/portfolio/portfolio_items/${
                    this.props.match.params.slug
                }`,
                { withCredentials: true }
            )
            .then(response => {
                this.setState({
                    portfolioItem: response.data.portfolio_item
                })
            })
            .catch(error => {
                console.log("getPortfolioItem error", error);
            });
    }

    render () {
        const {
            name,
            description,
            url,
            category, 
            thumb_image_url,
            banner_image_url,
            logo_url,
        } = this.state.portfolioItem;

        return (
            <div>
                <h2>{name}</h2>
                <p>{description}</p> 
            </div>
            );
        }
    }