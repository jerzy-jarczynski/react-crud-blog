// Components
import Posts from "../../features/Posts/Posts";
// Router
import { useParams } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
import { getPostByCategory } from "../../../redux/postsRedux";

const Category = () => {

  const { name } = useParams();
  const categoryName = name.charAt(0).toUpperCase() + name.slice(1);

  const postByCategory = useSelector(state => getPostByCategory(state, categoryName));
  // const cards = useSelector(state => getFilteredCards(state, props.id));

  return (
    <div>
      <div>
        <h1>
          { `Category: ${ categoryName }` }
        </h1>
      </div>
      <Posts posts={postByCategory} />
    </div>
  );

};

export default Category;