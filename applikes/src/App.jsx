import { Post } from "./Post";
import { Header } from "./components/Header";
import styles from "./app.module.css";
import "./global.css";
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>Sidebar</aside>
        <main>
          <Post
            author="Machado de Assis"
            coment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis voluptatibus velit, 
      quae ullam minima, voluptas officiis enim qui officia ipsam labore alias iste, explicabo asperiores 
      repudiandae dolorum necessitatibus incidunt aperiam."
          />

          <Post
            author="Machado de Assis"
            coment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis voluptatibus velit, 
      quae ullam minima, voluptas officiis enim qui officia ipsam labore alias iste, explicabo asperiores 
      repudiandae dolorum necessitatibus incidunt aperiam."
          />
        </main>
      </div>
    </div>
  );
}
