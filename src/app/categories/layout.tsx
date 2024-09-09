// app/categories/layout.tsx
import React from 'react';
import styles from './layout.module.scss';

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>Kategorier</h2>
        <ul>
          <li><a href="/categories/jul">Jul</a></li>
          <li><a href="/categories/tavlor">Tavlor</a></li>
          <li><a href="/categories/mobler">Möbler</a></li>
        </ul>
      </aside>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}