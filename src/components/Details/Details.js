import { useParams } from "react-router-dom";
import { useState } from "react";

const Details = ({ games, addComment }) => {
    const { gameId } = useParams();
    const [comment, setComment] = useState({
        username: ``,
        comment: ``
    })
    const game = games.find(x => x._id == gameId);

    const addCommentHandler = (e) => {
        e.preventDefault()
        addComment(gameId,`${comment.username}: ${comment.comment}`)
    }
    const onChange = (e) => {
        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    return (<section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">
            <div className="game-header">
                <img className="game-img" src={game.imageUrl} />
                <h1>{game.title}</h1>
                <span className="levels">MaxLevel: {game.maxLevel}</span>
                <p className="type">{game.category}</p>
            </div>
            <p className="text">
                {game.summary}
            </p>
            {/* Bonus ( for Guests and Users ) */}
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {game.comments?.map(x =>
                        <li className="comment">
                            <p>{x}</p>
                        </li>
                    )}

                </ul>
                {!game.comments && <p className="no-comment">No comments.</p>}
            </div>
            {/* Edit/Delete buttons ( Only for creator of this game )  */}
            {/* <div className="buttons">
                <a href="#" className="button">
                    Edit
                </a>
                <a href="#" className="button">
                    Delete
                </a>
            </div> */}
        </div>

        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={addCommentHandler}>
                <input
                    type="text"
                    name="username"
                    placeholder="Ahil from Troy"
                    onChange={onChange}
                    value={comment.username}
                />
                <textarea
                    name="comment"
                    placeholder="Comment......"
                    onChange={onChange}
                    value={comment.comment}
                />
                <input
                    className="btn submit"
                    type="submit"
                    value="Add Comment"
                />
            </form>
        </article>
    </section>);
};

export default Details;