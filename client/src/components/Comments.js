import React, { useState, useEffect } from "react";
import request from "superagent";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function Comments({ id }) {
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState("");
	const [newAuthor, setNewAuthor] = useState("");
	useEffect(() => {
		request.get(`/api/articles/${id}`)
			.then(res => {
				setComments(res.body.comments)
			})
	})
	return (
		<>
			<Row>
				<Col>
					<h4>Comments</h4>
					<p>{newAuthor}</p>
					<p>{newComment}</p>
					<Form>
						<Form.Group controlId="author">
							<Form.Label>Author</Form.Label>
							<Form.Control type="text" placeholder="username" value={newAuthor} onChange={e => setNewAuthor(e.target.value)} />
						</Form.Group>
						<Form.Group controlId="comment">
							<Form.Label>Comment</Form.Label>
							<Form.Control as="textArea" rows="3" value={newComment} onChange={e => setNewComment(e.target.value)} />
						</Form.Group>
						<Button
							onClick={() => {
								request.post("/api/articles")
									.send(
										{
											author: newAuthor,
											body: newComment,
											id: id
										})
									.then(res => console.log(res))
									.catch(err => console.log(err))
							}}>Submit</Button>
					</Form>
				</Col>
			</Row>
			<Row>
				<Col>
					{comments.map(comment => (
						<>
							<h5>{comment.author}</h5>
							<p>{comment.body}</p>
						</>
					))}
				</Col>
			</Row>
		</>
	)
}