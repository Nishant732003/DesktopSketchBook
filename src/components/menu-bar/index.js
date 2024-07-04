import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import styles from './index.module.css'
import { useDispatch, useSelector } from "react-redux";
import { MENUITEMS } from "@/contsnts";
import { menuItemClick, actionItemClick } from "@/redux/slice/menuSlice";
import { socket } from "@/socket";
import cx from 'classnames';
import { COLORS } from "@/contsnts";
const Menu = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
   
   const handleMenuClick = (itemName) => {
     dispatch(menuItemClick(itemName));
     if (itemName === MENUITEMS.ERASER) {
       // Broadcast the eraser color and size to all instances
       const eraserColor = COLORS.WHITE; 
       const eraserSize = 3;
       socket.emit("changeConfig", { color: eraserColor, size: eraserSize });
     }
    //  socket.emit('menuItemClick',itemName);
   };
  
  
  const handleActionItemClick = (itemName) => {
    dispatch(actionItemClick(itemName));
    
     socket.emit("actionItemClick", itemName);
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
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionItemClick(MENUITEMS.UNDO)}
      >
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionItemClick(MENUITEMS.REDO)}
      >
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionItemClick(MENUITEMS.DOWNLOAD)}
      >
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
      </div>
    </div>
  );
};
export default Menu;