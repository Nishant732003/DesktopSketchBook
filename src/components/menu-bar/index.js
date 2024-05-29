import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from './index.module.css'
import { useDispatch, useSelector } from "react-redux";
import { MENUITEMS } from "@/contsnts";
import { menuItemClick,actionItemClick } from "@/redux/slice/menuSlice";
import cx from 'classnames';

const Menu = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const handleMenuClick = (itemName) => {
    dispatch(menuItemClick(itemName))
  }
  return (
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENUITEMS.PENCIL,
        })}
        onClick={() => handleMenuClick(MENUITEMS.PENCIL)}
      >
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENUITEMS.ERASER,
        })}
        onClick={() => handleMenuClick(MENUITEMS.ERASER)}
      >
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faArrowDown} className={styles.icon} />
      </div>
    </div>
  );
};
export default Menu;