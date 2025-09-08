import { MdPostAdd, MdNotifications  } from "react-icons/md";
import styles from './main-header.module.css'
import {useContext, useState} from "react";
import {PostsContext} from "../store/PostsContext.jsx";
import {Link} from "react-router-dom";

function MainHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdNotifications />
        React Poster
      </h1>
      <p>
        <Link to='/new' className={styles.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  )
}

export default MainHeader;