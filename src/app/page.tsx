import './page.css';
import items  from '../../data/items.json';
import Image from 'next/image';

type Item = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

export default function Home() {
  return (
    <main className="main">
      <div>
        <p>Hej</p>
      </div>
      <div>
      {items.map((item: Item) => (
        <div key={item.id}>
          <Image
              src="/images/taxbild.jpg"
              alt={item.title}
              width={200} // Adjust the width as needed
              height={200} // Adjust the height as needed
            />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Price: {item.price} SEK</p>
        </div>
      ))}
      </div>
    </main>
  );
}

