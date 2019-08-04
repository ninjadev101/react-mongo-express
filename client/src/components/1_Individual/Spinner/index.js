import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Loader(props) {
	return (
		<>
			{props.fullScreen ? (
				<div className="LoaderFullScreen">
					<div className="Loader">
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
					</div>
				</div>
			) : (
				<div className="Loader">
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
				</div>
			)}
		</>
	);
}

Loader.propTypes = {
	fullScreen: PropTypes.bool.isRequired
};
