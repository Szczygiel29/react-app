import React from "react";
import "./howto.css";

function Howto() {
	return (
		<div className="howto" id="howto">
			<h2>How it works?</h2>
			<h5>
				You have leftover sausage from the grill and you won't eat any more?
				<br />
				Or maybe: <br />
				All your friends bought alcohol for the barbecue but no one bought
				sausages?
			</h5>
			<div className="how-to-lists">
				<div className="how-to-donate">
					<h4>Want to donate sausages?</h4>
					<ul>
						<li>Notice that you have too much sausage left over from the barbecue.</li>
						<li>Go to adoptTheSausage.com.</li>
						<li>Fill the form with the amount and type of sausage and the city where you want to donate it.</li>
            <li>Wait for contact from person who need it!</li>
					</ul>
				</div>
				<div className="how-to-need">
					<h4>Do you need sausage?</h4>
					<ul>
						<li>Hungry?</li>
						<li>Decide which sausage you would eat.</li>
						<li>Make contact to person who want donate a sausage.</li>
            <li>Eat and be happy!</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Howto;
