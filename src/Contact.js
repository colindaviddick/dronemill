import React, { Component } from "react";
import "./Contact.scss";

class Contact extends Component {
	render() {
		return (
			<div class='page-content'>
				<div className='contact-page'>
					<div>
						<h2>Contact Us</h2>
						<p>
							Feel free to use this form to get in touch with us with any
							queries.
						</p>
					</div>
					<form action=''>
						<label for='fname'>First Name</label>
						<input
							type='text'
							id='fname'
							name='firstname'
							placeholder='Your name..'
						/>

						<label for='lname'>Last Name</label>
						<input
							type='text'
							id='lname'
							name='lastname'
							placeholder='Your last name..'
						/>

						<label for='country'>Country</label>
						<select id='country' name='country'>
							<option value='australia'>Australia</option>
							<option value='canada'>Canada</option>
							<option value='usa'>USA</option>
						</select>

						<label for='subject'>Subject</label>
						<textarea
							className='textBox'
							id='subject'
							name='subject'
							placeholder='Write something..'
						></textarea>

						<button>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Contact;
