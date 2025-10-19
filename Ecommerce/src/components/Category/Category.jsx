import "./Category.scss";

import cat1 from "../../assets/catagory/cat-1.png"
const Category = () => {
    return (
        <div className="shop-by-catagory">
            <div className="catagories">
                <img src={cat1} alt="" />
            </div>
        </div>
    );
};

export default Category;
