import React, { Component } from "react";
import "./Shop.scss";

class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inventory: [
				{
					name: "Ranger 4000",
					price: 100,
					manufacturer: "Ranger Co",
					topSpeed: 100,
					weight: 100,
					imageUrl:
						"https://images.pexels.com/photos/3037937/pexels-photo-3037937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
				},
				{
					name: "Phoenix",
					price: 100,
					manufacturer: "Fall Out inc.",
					topSpeed: 100,
					weight: 100,
					imageUrl:
						"https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
				},
				{
					name: "Falcon",
					price: 100,
					manufacturer: "Ryu",
					topSpeed: 100,
					weight: 100,
					imageUrl:
						"https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
				},
				{
					name: "Crane",
					price: 100,
					manufacturer: "Cobra Kai Computing",
					topSpeed: 100,
					weight: 100,
					imageUrl:
						"https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?cs=srgb&dl=pexels-inmortal-producciones-336232.jpg&fm=jpg",
				},
				{
					name: "Fruit Bat",
					price: 100,
					manufacturer: "Epsilon Industries",
					topSpeed: 100,
					weight: 100,
					imageUrl:
						"https://images.pexels.com/photos/739410/pexels-photo-739410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
				},
			],
		};
	}
	render() {
		let shopcards = this.state.inventory.map((i) => (
			<article className='card'>
				<h3>{i.name}</h3>
				<h5>{i.manufacturer}</h5>
				<img src={i.imageUrl} alt='' />
				<div className='text'>
					<h4>Top Speed: {i.topSpeed}mph</h4>
					<h4>Weight: {i.weight}kg</h4>
					<h3>£{i.price}</h3>
					<button>Add to Cart</button>
				</div>
			</article>
		));

		return (
			<div className="shop">
				<h1>Store</h1>
				<main className='shop'>{shopcards}</main>
			</div>
		);
	}
}

export default Shop;
