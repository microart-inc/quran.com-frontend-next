import React, { useMemo } from 'react';
import Verse from '../../../../types/Verse';
import Line from './Line';
import groupLinesByVerses from './groupLinesByVerses';
import styles from './Page.module.scss';

type PageProps = {
  verses: Verse[];
  page: number;
};

const Page = ({ verses, page }: PageProps) => {
  const lines = useMemo(() => groupLinesByVerses(verses), [verses]);

  return (
    <div id={`page-${page}`} className={styles.container}>
      {Object.keys(lines).map((key) => (
        <Line words={lines[key]} key={key} />
      ))}
    </div>
  );
};

export default React.memo(Page);
