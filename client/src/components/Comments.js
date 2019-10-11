import React, { useState, useEffect } from "react";
import request from "superagent";
import { Col, Row } from "react-bootstrap";

export default function Comments({ id }) {
	const [comments, setComments] = useState([]);
	useEffect(() => {
		request.get(`/api/articles/${id}`)
			.then(res => {
				setComments(res.body.comments)
			})
	})
	return (
		<>
			<h4>Comments</h4>
			{comments.map(comment => (
				<>
					<h5>{comment.author}</h5>
					<p>{comment.body}</p>
				</>
			))}
		</>
	)
}