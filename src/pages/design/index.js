import styles from '../../styles/design.module.css';
import React from 'react';
import SearchBar from '../../components/design/SearchBar';

const tasks = {
  backlog: [
    { title: 'Settle Outstanding Payments', description: 'Lorem ipsum dolor sit amet...', tag: 'OZ', status: 'late', statusText: 'An hour ago' },
    { title: 'Arrange for venue with clients', description: 'Urgent, make sure to do ASAP', tag: 'LE', status: 'late', statusText: 'Two days ago' },
    { title: 'Prepare for upcoming meeting', description: 'Lorem ipsum dolor sit amet...', tag: 'AM', status: 'late', statusText: 'Last week' },
  ],
  todo: [
    { title: 'Eget porttitor lorem', description: 'Lorem ipsum dolor sit amet...', tag: 'AM', status: 'today', statusText: 'Today' },
    { title: 'Ac tristique libero volutpat', description: 'Lorem ipsum dolor sit amet...', tag: 'LE', status: 'upcoming', statusText: 'Tomorrow' },
    { title: 'Eget porttitor lorem', description: 'Lorem ipsum dolor sit amet...', tag: 'AM', status: 'upcoming', statusText: 'In 2 days' },
  ],
  done: [
    { title: 'Ac tristique libero volutpat', description: 'Lorem ipsum dolor sit amet...', tag: 'LE', status: 'done', statusText: 'A week ago' },
    { title: 'Phasellus iaculis neque', description: 'Lorem ipsum dolor sit amet...', tag: 'OZ', status: 'done', statusText: 'Last Tuesday' },
    { title: 'Facilisis in pretium nisl', description: 'Lorem ipsum dolor sit amet...', tag: 'AM', status: 'done' },
  ],
};

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.logo}></div>
        <div className={styles.profile}></div>
      </div>
      <SearchBar />
      <div className={styles.container}>
        {Object.entries(tasks).map(([section, taskList]) => (
          <div key={section} className={styles.column}>
            <h2>{section.toUpperCase()}</h2>
            {taskList.map((task, index) => (
              <div key={index} className={styles.card}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <span className={styles.tag}>{task.tag}</span>
                {task.statusText && (
                  <span className={`${styles.statusText} ${styles[`status${task.status.charAt(0).toUpperCase() + task.status.slice(1)}`]}`}>
                    {task.statusText}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;