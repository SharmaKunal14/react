import React, { useState } from "react";
const Section = ({ heading, content, isVisible, setAccordian, label }) => {
	return (
		<section className="foodstamart__section">
			<h2>{heading}</h2>

			{isVisible ? (
				<>
					<button className="btn" onClick={() => setAccordian("")}>
						Hide
					</button>
					<p>{content}</p>
				</>
			) : (
				<button className="btn" onClick={() => setAccordian(label)}>
					Show
				</button>
			)}
		</section>
	);
};
const Foodstamart = () => {
	const [accordian, setAccordian] = useState("intro");
	return (
		<div className="foodstamart">
			<Section
				heading={"Intro"}
				content={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent convallis vestibulum risus. Vivamus sollicitudinposuere est, quis congue sapien maximus id. Cras non velitimperdiet, viverra orci at, blandit magna. Sed eget duimetus. Suspendisse potenti. Curabitur efficitur volutpatest, sed egestas lorem rhoncus quis. Vestibulum eleifendtempus laoreet. Sed volutpat mi sapien, at tincidunt nullasuscipit eu. Nam vel ex a metus fringilla vehicula vitae acfelis. Curabitur imperdiet quam nec facilisis eleifend.Aliquam pharetra non erat pharetra suscipit. Nullapellentesque, nibh a aliquam porttitor, magna justovestibulum enim."
				}
				isVisible={accordian === "intro"}
				setAccordian={(accordian) => setAccordian(accordian)}
				label="intro"
			/>
			<Section
				heading={"Careers"}
				content={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent convallis vestibulum risus. Vivamus sollicitudinposuere est, quis congue sapien maximus id. Cras non velitimperdiet, viverra orci at, blandit magna. Sed eget duimetus. Suspendisse potenti. Curabitur efficitur volutpatest, sed egestas lorem rhoncus quis. Vestibulum eleifendtempus laoreet. Sed volutpat mi sapien, at tincidunt nullasuscipit eu. Nam vel ex a metus fringilla vehicula vitae acfelis. Curabitur imperdiet quam nec facilisis eleifend.Aliquam pharetra non erat pharetra suscipit. Nullapellentesque, nibh a aliquam porttitor, magna justovestibulum enim."
				}
				isVisible={accordian === "careers"}
				setAccordian={(accordian) => setAccordian(accordian)}
				label="careers"
			/>
		</div>
	);
};

export default Foodstamart;
