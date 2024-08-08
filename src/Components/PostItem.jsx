import PropTypes from "prop-types";

export const PostItem = (props) => {
  return (
    <>
      <strong>
        {props.post.id}. {props.post.title}
      </strong>
      <div>{props.post.body}</div>
    </>
  );
};
PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
