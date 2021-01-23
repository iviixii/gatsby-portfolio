import React from 'react';
import styles from './skills.module.scss';

const SkillList = ({iterable}) => {
  return (
    <div className={['content', styles.skill].join(' ')}>
      <ul>
        {iterable.map((elem, index) => (
            <span>
                { elem.node_locale == 'en-US' &&
                    <li key={index}>{elem.name}</li>
                }
            </span>
        ))}
      </ul>
    </div>
  )
};

export default SkillList;
