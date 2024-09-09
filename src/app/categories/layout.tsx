// app/categories/layout.tsx

import './layout.css';

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Kategorier</h2>
        <ul>
          <li><a href="/categories/jul">Jul</a></li>
          <li><a href="/categories/tavlor">Tavlor</a></li>
          <li><a href="/categories/mobler">Möbler</a></li>
        </ul>
      </aside>
      <main className="mainContent">{children}</main>
    </div>
  );
}