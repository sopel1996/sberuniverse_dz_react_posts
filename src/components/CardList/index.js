import { Card } from "../Card";
import styles from "./style.module.css";
import cn from 'classnames';
import { Pagination } from "../Pagination";

export const CardList = ({ list, pagesCnt, favorite, setFavorite, user, setUpdateAfterDelete,  setPage, page}) => {
  // const [page, setPage] = useState(1);
  // useEffect(() => {
  //   if (login){
  //     sliceList(page);
  //   }
  // }, [page, login]);

  // const sliceList = (el) => {
  //   api.getPostsOnPage(el, POSTSONPAGE).then((data)=>{
  //     setPagesCnt(Math.ceil(data.total/POSTSONPAGE));
  //     setPostsState(data.posts);
  //   }
  //   )
  //   .catch((err)=>{alert(err)})
  // };

    return (
      <div className={cn('sectionInner', styles.cardListContainer)}>
        <div className={cn(styles.gridTable)}>
          {
            list?.map((item) => (
              <Card post={item} key={item._id} isInFavorite={favorite.includes(item._id)} setFavorite={setFavorite} user={user} setUpdateAfterDelete={setUpdateAfterDelete} setPage={setPage}/>
            ))  
          }
        </div>
        <Pagination pagesCnt={pagesCnt} setPage={setPage} page={page}/>
        </div>
  );

};
